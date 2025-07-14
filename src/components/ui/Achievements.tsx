'use client';

import { Card } from './Card';
import { useWorkoutData } from '@/hooks/useWorkoutData';
import { achievementsData } from '@/app/lib/workoutData';

export function Achievements() {
  const { achievements, workouts } = useWorkoutData();

  const getAchievementProgress = (achievementId: string) => {
    const totalWorkouts = Object.keys(workouts).length;
    const partnershipCount = Object.values(workouts).filter(w => w.status === 'ambos').length;
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    switch (achievementId) {
      case 'primeiro-treino':
        return { current: Math.min(totalWorkouts, 1), target: 1 };
      case 'dez-treinos':
        return { current: Math.min(totalWorkouts, 10), target: 10 };
      case 'parceria-5':
        return { current: Math.min(partnershipCount, 5), target: 5 };
      case 'primeira-semana':
        // Simplified calculation for demo
        return { current: Math.min(totalWorkouts, 3), target: 3 };
      case 'mes-perfeito':
        const workoutsThisMonth = Object.keys(workouts).filter(dateStr => {
          const date = new Date(dateStr);
          return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
        }).length;
        return { current: Math.min(workoutsThisMonth, 12), target: 12 };
      case 'sequencia-3':
        return { current: Math.min(totalWorkouts, 3), target: 3 };
      default:
        return { current: 0, target: 1 };
    }
  };

  const unlockedCount = Object.values(achievements).filter(a => a.unlocked).length;
  const totalCount = Object.keys(achievementsData).length;

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Quadro de Conquistas</h2>
        <p className="text-gray-700 mb-6">
          Desbloqueiem emblemas ao atingirem marcos na vossa jornada. Celebrem cada vitória!
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-semibold">Progresso Geral</h3>
              <p className="text-gray-600">
                {unlockedCount} de {totalCount} conquistas desbloqueadas
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">
                {Math.round((unlockedCount / totalCount) * 100)}%
              </div>
              <p className="text-sm text-gray-600">Completo</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
            />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(achievementsData).map(([key, achievement]) => {
          const isUnlocked = achievements[key]?.unlocked || false;
          const progress = getAchievementProgress(key);

          return (
            <AchievementCard
              key={key}
              achievement={achievement}
              isUnlocked={isUnlocked}
              progress={progress}
            />
          );
        })}
      </div>
    </div>
  );
}

interface AchievementCardProps {
  achievement: {
    title: string;
    description: string;
    icon: string;
    unlocked: boolean;
  };
  isUnlocked: boolean;
  progress: {
    current: number;
    target: number;
  };
}

function AchievementCard({ achievement, isUnlocked, progress }: AchievementCardProps) {
  const progressPercentage = (progress.current / progress.target) * 100;

  return (
    <Card className={`text-center transition-all duration-300 ${isUnlocked
        ? 'bg-gradient-to-br from-green-50 to-blue-50 border-green-200 shadow-lg'
        : 'bg-gray-50 opacity-75'
      }`}>
      <div className={`text-4xl mb-3 ${isUnlocked ? '' : 'grayscale'}`}>
        {achievement.icon}
      </div>

      <h4 className={`font-bold mb-2 ${isUnlocked ? 'text-green-800' : 'text-gray-600'}`}>
        {achievement.title}
      </h4>

      <p className={`text-sm mb-4 ${isUnlocked ? 'text-green-700' : 'text-gray-500'}`}>
        {achievement.description}
      </p>

      {!isUnlocked && (
        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Progresso</span>
            <span>{progress.current}/{progress.target}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            />
          </div>
        </div>
      )}

      {isUnlocked && (
        <div className="mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            ✓ Desbloqueado
          </span>
        </div>
      )}
    </Card>
  );
}
