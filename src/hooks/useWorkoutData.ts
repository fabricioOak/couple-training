"use client";

import { useState, useEffect } from "react";
import { WorkoutProgress, AchievementData } from "@/app/types";

export function useWorkoutData() {
	const [workouts, setWorkouts] = useState<WorkoutProgress>({});
	const [achievements, setAchievements] = useState<AchievementData>({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		try {
			const [workoutsRes, achievementsRes] = await Promise.all([
				fetch("/api/workouts"),
				fetch("/api/achievements"),
			]);

			const workoutsData = await workoutsRes.json();
			const achievementsData = await achievementsRes.json();

			// Converter array para objeto indexado por data
			const workoutsObj = workoutsData.reduce(
				(acc: WorkoutProgress, workout: any) => {
					acc[workout.log_date] = {
						status: workout.status,
						notes: workout.notes,
					};
					return acc;
				},
				{}
			);

			setWorkouts(workoutsObj);
			setAchievements(achievementsData);
			setLoading(false);
		} catch (error) {
			console.error("Erro ao carregar dados:", error);
			setLoading(false);
		}
	};

	const saveWorkout = async (date: string, status: string, notes: string) => {
		try {
			const response = await fetch("/api/workouts", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ date, status, notes }),
			});

			if (response.ok) {
				setWorkouts((prev) => ({
					...prev,
					[date]: { status: status as "ele" | "ela" | "ambos", notes },
				}));
				await checkAchievements();
			}
		} catch (error) {
			console.error("Erro ao salvar treino:", error);
		}
	};

	const deleteWorkout = async (date: string) => {
		try {
			const response = await fetch(`/api/workouts/${date}`, {
				method: "DELETE",
			});

			if (response.ok) {
				setWorkouts((prev) => {
					const newWorkouts = { ...prev };
					delete newWorkouts[date];
					return newWorkouts;
				});
			}
		} catch (error) {
			console.error("Erro ao remover treino:", error);
		}
	};

	const unlockAchievement = async (achievementId: string) => {
		try {
			await fetch("/api/achievements", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ achievement_id: achievementId }),
			});

			setAchievements((prev) => ({
				...prev,
				[achievementId]: { ...prev[achievementId], unlocked: true },
			}));
		} catch (error) {
			console.error("Erro ao desbloquear conquista:", error);
		}
	};

	const checkAchievements = async () => {
		const totalWorkouts = Object.keys(workouts).length;
		const partnershipCount = Object.values(workouts).filter(
			(w) => w.status === "ambos"
		).length;

		// Verificar conquistas
		if (totalWorkouts > 0 && !achievements["primeiro-treino"]?.unlocked) {
			await unlockAchievement("primeiro-treino");
		}

		if (totalWorkouts >= 10 && !achievements["dez-treinos"]?.unlocked) {
			await unlockAchievement("dez-treinos");
		}

		if (partnershipCount >= 5 && !achievements["parceria-5"]?.unlocked) {
			await unlockAchievement("parceria-5");
		}
	};

	return {
		workouts,
		achievements,
		loading,
		saveWorkout,
		deleteWorkout,
		unlockAchievement,
		checkAchievements,
	};
}
