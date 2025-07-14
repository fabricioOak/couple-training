'use client';

import { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { useWorkoutData } from '@/hooks/useWorkoutData';
import { achievementsData } from '@/app/lib/workoutData';

export function Achievements() {
  const { achievements, workouts } = useWorkoutData();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas', icon: '🏆' },
    { id: 'inicio', label: 'Início', icon: '🚀' },
    { id: 'consistencia', label: 'Consistência', icon: '💪' },
    { id: 'sequencia', label: 'Sequências', icon: '🔥' },
    { id: 'parceria', label: 'Parceria', icon: '🤝' },
    { id: 'especial', label: 'Especiais', icon: '⭐' }
  ];

  const getAchievementProgress = (achievementId: string) => {
    const totalWorkouts = Object.keys(workouts).length;
    const partnershipCount = Object.values(workouts).filter(w => w.status === 'ambos').length;
    const eleWorkouts = Object.values(workouts).filter(w => w.status === 'ele' || w.status === 'ambos').length;
    const elaWorkouts = Object.values(workouts).filter(w => w.status === 'ela' || w.status === 'ambos').length;

    // Calcular sequência atual
    const currentStreak = calculateCurrentStreak(Object.keys(workouts));

    // Calcular treinos do mês atual
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const workoutsThisMonth = Object.keys(workouts).filter(dateStr => {
      const date = new Date(dateStr);
      return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
    }).length;

    switch (achievementId) {
      // Conquistas básicas
      case 'primeiro-treino':
        return { current: Math.min(totalWorkouts, 1), target: 1 };
      case 'primeira-semana':
        return { current: Math.min(totalWorkouts, 3), target: 3 };
      case 'dez-treinos':
        return { current: Math.min(totalWorkouts, 10), target: 10 };
      case 'vinte-cinco-treinos':
        return { current: Math.min(totalWorkouts, 25), target: 25 };
      case 'cinquenta-treinos':
        return { current: Math.min(totalWorkouts, 50), target: 50 };
      case 'cem-treinos':
        return { current: Math.min(totalWorkouts, 100), target: 100 };
      case 'duzentos-treinos':
        return { current: Math.min(totalWorkouts, 200), target: 200 };

      // Conquistas de sequência
      case 'sequencia-3':
        return { current: Math.min(currentStreak, 3), target: 3 };
      case 'sequencia-7':
        return { current: Math.min(currentStreak, 7), target: 7 };
      case 'sequencia-14':
        return { current: Math.min(currentStreak, 14), target: 14 };
      case 'sequencia-30':
        return { current: Math.min(currentStreak, 30), target: 30 };

      // Conquistas de parceria
      case 'parceria-5':
        return { current: Math.min(partnershipCount, 5), target: 5 };
      case 'parceria-20':
        return { current: Math.min(partnershipCount, 20), target: 20 };
      case 'parceria-50':
        return { current: Math.min(partnershipCount, 50), target: 50 };
      case 'parceria-100':
        return { current: Math.min(partnershipCount, 100), target: 100 };

      // Conquistas mensais
      case 'mes-perfeito':
        return { current: Math.min(workoutsThisMonth, 12), target: 12 };
      case 'mes-intenso':
        return { current: Math.min(workoutsThisMonth, 20), target: 20 };

      // Conquistas específicas
      case 'ele-resistencia':
        return { current: Math.min(eleWorkouts, 20), target: 20 };
      case 'ele-forca':
        return { current: Math.min(eleWorkouts, 50), target: 50 };
      case 'ele-atleta':
        return { current: Math.min(eleWorkouts, 100), target: 100 };
      case 'ela-transformacao':
        return { current: Math.min(elaWorkouts, 30), target: 30 };
      case 'ela-saude':
        return { current: Math.min(elaWorkouts, 60), target: 60 };
      case 'ela-guerreira':
        return { current: Math.min(elaWorkouts, 120), target: 120 };

      // Conquistas épicas
      case 'lenda-500':
        return { current: Math.min(totalWorkouts, 500), target: 500 };
      case 'mil-treinos':
        return { current: Math.min(totalWorkouts, 1000), target: 1000 };

      default:
        return { current: 0, target: 1 };
    }
  };

  // Função para calcular sequência atual
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
        const dayDiff = (currentDate.getTime() - nextDate.getTime()) / (1000 * 60 * 60 * 24);

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

  // Verificar se conquista está desbloqueada
  const isAchievementUnlocked = (achievementId: string): boolean => {
    const progress = getAchievementProgress(achievementId);
    return progress.current >= progress.target;
  };

  // Filtrar conquistas por categoria
  const filteredAchievements = Object.entries(achievementsData).filter(([key, achievement]) => {
    if (selectedCategory === 'all') return true;
    return achievement.category === selectedCategory;
  });

  const unlockedCount = Object.keys(achievementsData).filter(key => isAchievementUnlocked(key)).length;
  const totalCount = Object.keys(achievementsData).length;

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Quadro de Conquistas</h2>
        <p className="text-gray-700 mb-6">
          Desbloqueiem emblemas ao atingirem marcos na sua jornada. Celebrem cada vitória!
        </p>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'primary' : 'secondary'}
              onClick={() => setSelectedCategory(category.id)}
              size="sm"
              className="flex items-center gap-2"
            >
              <span>{category.icon}</span>
              {category.label}
            </Button>
          ))}
        </div>

        {/* Progresso geral */}
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

        {/* Debug info - remover em produção */}
        <div className="bg-yellow-50 p-4 rounded-lg mb-6 text-sm">
          <p><strong>Debug Info:</strong></p>
          <p>Total de treinos: {Object.keys(workouts).length}</p>
          <p>Treinos em parceria: {Object.values(workouts).filter(w => w.status === 'ambos').length}</p>
          <p>Sequência atual: {calculateCurrentStreak(Object.keys(workouts))}</p>
          <p>Conquistas desbloqueadas: {unlockedCount}</p>
        </div>
      </Card>

      {/* Grid de conquistas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAchievements.map(([key, achievement]) => {
          const isUnlocked = isAchievementUnlocked(key);
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
    category: string;
    difficulty: string;
  };
  isUnlocked: boolean;
  progress: {
    current: number;
    target: number;
  };
}

function AchievementCard({ achievement, isUnlocked, progress }: AchievementCardProps) {
  const progressPercentage = (progress.current / progress.target) * 100;

  const difficultyColors = {
    bronze: 'from-amber-100 to-orange-100 border-amber-200',
    prata: 'from-gray-100 to-slate-100 border-gray-300',
    ouro: 'from-yellow-100 to-amber-100 border-yellow-300',
    platina: 'from-blue-100 to-indigo-100 border-blue-300',
    diamante: 'from-purple-100 to-pink-100 border-purple-300'
  };

  const cardColor = isUnlocked
    ? difficultyColors[achievement.difficulty as keyof typeof difficultyColors] || 'from-green-50 to-blue-50 border-green-200'
    : 'from-gray-50 to-gray-100 border-gray-200';

  return (
    <Card className={`text-center transition-all duration-300 ${isUnlocked ? 'shadow-lg' : 'opacity-75'
      }`}>
      <div className={`bg-gradient-to-br ${cardColor} p-4 rounded-lg border`}>
        <div className={`text-4xl mb-3 ${isUnlocked ? '' : 'grayscale'}`}>
          {achievement.icon}
        </div>

        <h4 className={`font-bold mb-2 ${isUnlocked ? 'text-gray-800' : 'text-gray-600'}`}>
          {achievement.title}
        </h4>

        <p className={`text-sm mb-4 ${isUnlocked ? 'text-gray-700' : 'text-gray-500'}`}>
          {achievement.description}
        </p>

        {/* Badge de dificuldade */}
        <div className="mb-4">
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${achievement.difficulty === 'bronze' ? 'bg-amber-200 text-amber-800' :
            achievement.difficulty === 'prata' ? 'bg-gray-200 text-gray-800' :
              achievement.difficulty === 'ouro' ? 'bg-yellow-200 text-yellow-800' :
                achievement.difficulty === 'platina' ? 'bg-blue-200 text-blue-800' :
                  'bg-purple-200 text-purple-800'
            }`}>
            {achievement.difficulty.charAt(0).toUpperCase() + achievement.difficulty.slice(1)}
          </span>
        </div>

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
      </div>
    </Card>
  );
}
