"use client";

import { useState, useEffect, useCallback } from "react";
import { WorkoutProgress } from "@/app/types";

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

			// Converter arrays para objetos indexados
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
			console.error("❌ Hook - Erro ao carregar dados:", error);
			setLoading(false);
		}
	};

	const unlockAchievement = useCallback(
		async (achievementId: string) => {
			try {
				// Verificar se já está desbloqueada localmente
				if (achievements[achievementId]) {
					console.log(
						`⚠️ Hook - Conquista já desbloqueada localmente: ${achievementId}`
					);
					return;
				}

				const response = await fetch("/api/achievements", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ achievement_id: achievementId }),
				});

				if (response.ok) {
					const result = await response.json();

					// Atualizar estado local imediatamente
					setAchievements((prev) => ({
						...prev,
						[achievementId]: {
							unlocked_at: result.unlocked_at || new Date().toISOString(),
						},
					}));

					// Mostrar notificação
					showAchievementNotification(achievementId);
				} else {
					const errorData = await response.json();
					console.error(
						`❌ Hook - Erro ao desbloquear ${achievementId}:`,
						errorData
					);
				}
			} catch (error) {
				console.error(
					`❌ Hook - Erro na requisição para ${achievementId}:`,
					error
				);
			}
		},
		[achievements]
	);

	const checkAchievements = useCallback(async () => {
		try {
			console.log("🔍 Hook - Verificando conquistas...");

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

			console.log("📈 Hook - Métricas calculadas:", {
				totalWorkouts,
				partnershipCount,
				eleWorkouts,
				elaWorkouts,
			});

			// Lista completa de verificações
			const achievementsToCheck = [
				{
					id: "primeiro-treino",
					condition: totalWorkouts >= 1,
					name: "Primeiro Treino",
				},
				{
					id: "primeira-semana",
					condition: totalWorkouts >= 3,
					name: "Primeira Semana",
				},
				{
					id: "dez-treinos",
					condition: totalWorkouts >= 10,
					name: "Dez Treinos",
				},
				{
					id: "vinte-cinco-treinos",
					condition: totalWorkouts >= 25,
					name: "Vinte e Cinco Treinos",
				},
				{
					id: "cinquenta-treinos",
					condition: totalWorkouts >= 50,
					name: "Cinquenta Treinos",
				},
				{
					id: "cem-treinos",
					condition: totalWorkouts >= 100,
					name: "Cem Treinos",
				},
				{
					id: "parceria-5",
					condition: partnershipCount >= 5,
					name: "Parceria 5",
				},
				{
					id: "parceria-20",
					condition: partnershipCount >= 20,
					name: "Parceria 20",
				},
				{
					id: "ele-resistencia",
					condition: eleWorkouts >= 20,
					name: "Ele Resistência",
				},
				{
					id: "ela-transformacao",
					condition: elaWorkouts >= 30,
					name: "Ela Transformação",
				},
			];

			let newAchievements = 0;

			for (const achievement of achievementsToCheck) {
				const isAlreadyUnlocked = achievements[achievement.id];

				console.log(`🎯 Hook - Verificando ${achievement.name}:`, {
					condition: achievement.condition,
					alreadyUnlocked: !!isAlreadyUnlocked,
				});

				if (achievement.condition && !isAlreadyUnlocked) {
					console.log(
						`🎉 Hook - Nova conquista detectada: ${achievement.name}`
					);
					await unlockAchievement(achievement.id);
					newAchievements++;
				}
			}

			console.log(
				`✅ Hook - Verificação concluída. ${newAchievements} novas conquistas.`
			);
		} catch (error) {
			console.error("❌ Hook - Erro na verificação de conquistas:", error);
		}
	}, [workouts, achievements, unlockAchievement]);

	const saveWorkout = async (date: string, status: string, notes: string) => {
		try {
			console.log(`💾 Hook - Salvando treino: ${date}, ${status}`);

			const response = await fetch("/api/workouts", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ date, status, notes }),
			});

			if (response.ok) {
				console.log(`✅ Hook - Treino salvo com sucesso: ${date}`);

				// Atualizar estado local
				setWorkouts((prev) => ({
					...prev,
					[date]: { status: status as "ele" | "ela" | "ambos", notes },
				}));

				// **IMPORTANTE: Aguardar atualização do estado antes de verificar conquistas**
				setTimeout(async () => {
					console.log(
						"🔄 Hook - Iniciando verificação de conquistas após salvar treino..."
					);
					await checkAchievements();
				}, 100);
			} else {
				console.error(
					"❌ Hook - Erro ao salvar treino:",
					await response.text()
				);
			}
		} catch (error) {
			console.error("❌ Hook - Erro ao salvar treino:", error);
		}
	};

	const deleteWorkout = async (date: string) => {
		try {
			console.log(`🗑️ Hook - Deletando treino: ${date}`);

			const response = await fetch(`/api/workouts/${date}`, {
				method: "DELETE",
			});

			if (response.ok) {
				console.log(`✅ Hook - Treino deletado: ${date}`);

				setWorkouts((prev) => {
					const newWorkouts = { ...prev };
					delete newWorkouts[date];
					return newWorkouts;
				});

				// Verificar conquistas após deletar
				setTimeout(async () => {
					console.log(
						"🔄 Hook - Verificando conquistas após deletar treino..."
					);
					await checkAchievements();
				}, 100);
			}
		} catch (error) {
			console.error("❌ Hook - Erro ao deletar treino:", error);
		}
	};

	const showAchievementNotification = (achievementId: string) => {
		if (typeof window !== "undefined") {
			console.log(`🎉 CONQUISTA DESBLOQUEADA: ${achievementId}`);
			// Aqui você pode implementar uma notificação visual mais elaborada
		}
	};

	// **Verificação automática quando workouts mudam**
	useEffect(() => {
		if (!loading && Object.keys(workouts).length > 0) {
			console.log("🔄 Hook - Workouts atualizados, verificando conquistas...");
			checkAchievements();
		}
	}, [workouts, loading, checkAchievements]);

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
