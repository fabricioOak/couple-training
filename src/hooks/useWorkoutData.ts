"use client";

import { useState, useEffect } from "react";
import { WorkoutProgress, AchievementData } from "@/app/types";

export function useWorkoutData() {
	const [workouts, setWorkouts] = useState<WorkoutProgress>({});
	const [achievements, setAchievements] = useState<{
		[key: string]: { unlocked_at: string };
	}>({});
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

			// Converter achievements para objeto indexado por ID
			const achievementsObj = achievementsData.reduce(
				(acc: any, achievement: any) => {
					acc[achievement.achievement_id] = {
						unlocked_at: achievement.unlocked_at,
					};
					return acc;
				},
				{}
			);

			setWorkouts(workoutsObj);
			setAchievements(achievementsObj);
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

				// IMPORTANTE: Verificar conquistas após salvar treino
				await checkAchievements();
			}
		} catch (error) {
			console.error("Erro ao salvar treino:", error);
		}
	};

	const deleteWorkout = async (date: string) => {
		try {
			console.log("Iniciando delete do treino:", date);

			// Verificar se o treino existe localmente
			if (!workouts[date]) {
				console.warn("Treino não existe localmente:", date);
				return;
			}

			const response = await fetch(`/api/workouts/${date}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			});

			console.log("Response status:", response.status);

			if (response.ok) {
				const result = await response.json();
				console.log("Treino deletado com sucesso:", result);

				// Atualizar estado local
				setWorkouts((prev) => {
					const newWorkouts = { ...prev };
					delete newWorkouts[date];
					return newWorkouts;
				});

				// IMPORTANTE: Aguardar um pouco antes de verificar conquistas
				setTimeout(async () => {
					await checkAchievements();
				}, 100);
			} else {
				const errorData = await response.json();
				console.error("Erro na resposta do servidor:", errorData);
				throw new Error(errorData.error || "Erro ao deletar treino");
			}
		} catch (error) {
			console.error("Erro ao remover treino:", error);

			// Mostrar erro para o usuário
			if (typeof window !== "undefined") {
				alert(
					`Erro ao remover treino: ${
						error instanceof Error ? error.message : "Erro desconhecido"
					}`
				);
			}
		}
	};

	const unlockAchievement = async (achievementId: string) => {
		try {
			console.log("Tentando desbloquear conquista:", achievementId);

			const response = await fetch("/api/achievements", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ achievement_id: achievementId }),
			});

			if (response.ok) {
				const result = await response.json();
				console.log("Conquista desbloqueada com sucesso:", result);

				setAchievements((prev) => ({
					...prev,
					[achievementId]: { unlocked_at: new Date().toISOString() },
				}));

				// Mostrar notificação de conquista desbloqueada
				showAchievementNotification(achievementId);
			} else {
				console.error("Erro ao desbloquear conquista:", await response.text());
			}
		} catch (error) {
			console.error("Erro ao desbloquear conquista:", error);
		}
	};

	const showAchievementNotification = (achievementId: string) => {
		// Implementar notificação toast/modal
		if (typeof window !== "undefined") {
			console.log(`🎉 Conquista desbloqueada: ${achievementId}`);
			// Aqui você pode adicionar uma library de toast como react-hot-toast
		}
	};

	const checkAchievements = async () => {
		const workoutDates = Object.keys(workouts).sort();
		const totalWorkouts = workoutDates.length;
		const partnershipCount = Object.values(workouts).filter(
			(w) => w.status === "ambos"
		).length;
		const eleWorkouts = Object.values(workouts).filter(
			(w) => w.status === "ele" || w.status === "ambos"
		).length;
		const elaWorkouts = Object.values(workouts).filter(
			(w) => w.status === "ela" || w.status === "ambos"
		).length;

		console.log("Verificando conquistas:", {
			totalWorkouts,
			partnershipCount,
			eleWorkouts,
			elaWorkouts,
		});

		// Calcular sequência atual
		const currentStreak = calculateCurrentStreak(workoutDates);
		console.log("Sequência atual:", currentStreak);

		// Lista de conquistas para verificar
		const achievementsToCheck = [
			{ id: "primeiro-treino", condition: totalWorkouts >= 1 },
			{ id: "primeira-semana", condition: totalWorkouts >= 3 },
			{ id: "dez-treinos", condition: totalWorkouts >= 10 },
			{ id: "vinte-cinco-treinos", condition: totalWorkouts >= 25 },
			{ id: "cinquenta-treinos", condition: totalWorkouts >= 50 },
			{ id: "cem-treinos", condition: totalWorkouts >= 100 },
			{ id: "duzentos-treinos", condition: totalWorkouts >= 200 },
			{ id: "sequencia-3", condition: currentStreak >= 3 },
			{ id: "sequencia-7", condition: currentStreak >= 7 },
			{ id: "sequencia-14", condition: currentStreak >= 14 },
			{ id: "sequencia-30", condition: currentStreak >= 30 },
			{ id: "parceria-5", condition: partnershipCount >= 5 },
			{ id: "parceria-20", condition: partnershipCount >= 20 },
			{ id: "parceria-50", condition: partnershipCount >= 50 },
			{ id: "parceria-100", condition: partnershipCount >= 100 },
			{ id: "ele-resistencia", condition: eleWorkouts >= 20 },
			{ id: "ele-forca", condition: eleWorkouts >= 50 },
			{ id: "ele-atleta", condition: eleWorkouts >= 100 },
			{ id: "ela-transformacao", condition: elaWorkouts >= 30 },
			{ id: "ela-saude", condition: elaWorkouts >= 60 },
			{ id: "ela-guerreira", condition: elaWorkouts >= 120 },
			{ id: "lenda-500", condition: totalWorkouts >= 500 },
			{ id: "mil-treinos", condition: totalWorkouts >= 1000 },
		];

		// Verificar conquistas mensais
		const thisMonthWorkouts = getWorkoutsInCurrentMonth(workouts);
		achievementsToCheck.push(
			{ id: "mes-perfeito", condition: thisMonthWorkouts >= 12 },
			{ id: "mes-intenso", condition: thisMonthWorkouts >= 20 }
		);

		// Desbloquear conquistas
		for (const achievement of achievementsToCheck) {
			const isAlreadyUnlocked = achievements[achievement.id];

			if (achievement.condition && !isAlreadyUnlocked) {
				console.log(`Desbloqueando conquista: ${achievement.id}`);
				await unlockAchievement(achievement.id);
			}
		}
	};

	const calculateCurrentStreak = (workoutDates: string[]): number => {
		if (workoutDates.length === 0) return 0;

		const sortedDates = workoutDates.sort();
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		let streak = 0;
		let currentDate = new Date(sortedDates[sortedDates.length - 1]);
		currentDate.setHours(0, 0, 0, 0);

		// Verificar se o último treino foi hoje ou ontem
		const diffTime = today.getTime() - currentDate.getTime();
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

		if (diffDays <= 1) {
			streak = 1;
			for (let i = sortedDates.length - 2; i >= 0; i--) {
				const nextDate = new Date(sortedDates[i]);
				nextDate.setHours(0, 0, 0, 0);
				const dayDiff =
					(currentDate.getTime() - nextDate.getTime()) / (1000 * 60 * 60 * 24);

				if (dayDiff === 1) {
					streak++;
					currentDate = nextDate;
				} else {
					break;
				}
			}
		}

		return streak;
	};

	const getWorkoutsInCurrentMonth = (workouts: WorkoutProgress): number => {
		const currentMonth = new Date().getMonth();
		const currentYear = new Date().getFullYear();

		return Object.keys(workouts).filter((dateStr) => {
			const date = new Date(dateStr);
			return (
				date.getMonth() === currentMonth && date.getFullYear() === currentYear
			);
		}).length;
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
