'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { workoutData, exerciseLibrary } from '@/app/lib/workoutData';
import { useWorkoutData } from '@/hooks/useWorkoutData';
import { UserType, WorkoutDay, Exercise, WorkoutStatus } from '@/app/types';

export function Dashboard() {
  const { workouts, saveWorkout, loading } = useWorkoutData();
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [selectedDay, setSelectedDay] = useState<WorkoutDay | null>(null);
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [finishNotes, setFinishNotes] = useState('');

  // Calcular estatísticas
  const getStats = () => {
    const totalWorkouts = Object.keys(workouts).length;
    const eleWorkouts = Object.values(workouts).filter(w => w.status === 'ele' || w.status === 'ambos').length;
    const elaWorkouts = Object.values(workouts).filter(w => w.status === 'ela' || w.status === 'ambos').length;
    const partnershipCount = Object.values(workouts).filter(w => w.status === 'ambos').length;

    // Calcular streaks
    const eleStreak = calculateStreak('ele');
    const elaStreak = calculateStreak('ela');

    return {
      totalWorkouts,
      eleWorkouts,
      elaWorkouts,
      partnershipCount,
      eleStreak,
      elaStreak
    };
  };

  // Calcular sequência atual para cada pessoa
  const calculateStreak = (person: 'ele' | 'ela') => {
    const sortedDates = Object.keys(workouts).sort().reverse();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let streak = 0;
    let currentDate = new Date(today);

    for (let i = 0; i < sortedDates.length; i++) {
      const workoutDate = new Date(sortedDates[i]);
      workoutDate.setHours(0, 0, 0, 0);

      const dayDiff = (currentDate.getTime() - workoutDate.getTime()) / (1000 * 60 * 60 * 24);

      if (dayDiff === i) {
        const workout = workouts[sortedDates[i]];
        if (workout.status === person || workout.status === 'ambos') {
          streak++;
          currentDate.setDate(currentDate.getDate() - 1);
        } else {
          break;
        }
      } else {
        break;
      }
    }

    return streak;
  };

  // Verificar se já treinou hoje
  const getTodayStatus = () => {
    const today = new Date().toISOString().split('T')[0];
    return workouts[today] || null;
  };

  const handleFinishWorkout = async (status: WorkoutStatus) => {
    const today = new Date().toISOString().split('T')[0];
    await saveWorkout(today, status, finishNotes);
    setShowFinishModal(false);
    setFinishNotes('');
  };

  const stats = getStats();
  const todayStatus = getTodayStatus();

  const handleUserSelect = (user: UserType) => {
    setSelectedUser(user);
  };

  const handleDaySelect = (day: WorkoutDay) => {
    setSelectedDay(day);
  };

  const renderWorkout = () => {
    if (!selectedUser || !selectedDay) return null;

    const workout = workoutData[selectedDay][selectedUser];

    return (
      <div className="space-y-4">
        <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">
                Treino {selectedDay} - {selectedUser === 'ele' ? 'Condicionamento' : 'Saúde e Emagrecimento'}
              </h3>
              <p className="text-gray-600 text-sm">
                {workout.length} exercícios • Aproximadamente 45-60 minutos
              </p>
            </div>
            <Button
              onClick={() => setShowFinishModal(true)}
              variant="success"
              className="flex items-center space-x-2"
            >
              <span>✓</span>
              <span>Finalizar Treino</span>
            </Button>
          </div>
        </Card>

        {workout.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} exerciseNumber={index + 1} />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Carregando dashboard...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header com estatísticas sempre visível */}
      <Card>
        <h2 className="text-2xl font-bold mb-4">O Seu Ginásio em Casa</h2>

        {/* Status do dia atual */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Hoje • {new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}</h3>
            {!todayStatus ? (
              <Button
                onClick={() => setShowFinishModal(true)}
                variant="primary"
                className="flex items-center space-x-2"
              >
                <span>📝</span>
                <span>Registrar Treino</span>
              </Button>
            ) : (
              <div className="flex items-center space-x-2 text-green-600">
                <span>✅</span>
                <span className="font-medium">
                  {todayStatus.status === 'ele' ? 'Ele treinou' :
                    todayStatus.status === 'ela' ? 'Ela treinou' : 'Ambos treinaram'}
                </span>
              </div>
            )}
          </div>

          {!todayStatus && (
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 text-sm">
                🎯 Ainda não treinaram hoje. Vamos manter a sequência!
              </p>
            </div>
          )}
        </div>

        {/* Estatísticas principais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.eleWorkouts}</div>
            <div className="text-xs text-blue-700">Treinos Dele</div>
            <div className="text-sm font-medium text-blue-800 mt-1">
              🔥 {stats.eleStreak} dias seguidos
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">{stats.elaWorkouts}</div>
            <div className="text-xs text-green-700">Treinos Dela</div>
            <div className="text-sm font-medium text-green-800 mt-1">
              🔥 {stats.elaStreak} dias seguidos
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">{stats.partnershipCount}</div>
            <div className="text-xs text-purple-700">Treinos Juntos</div>
            <div className="text-sm font-medium text-purple-800 mt-1">
              💑 Parceria
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-yellow-600">{stats.totalWorkouts}</div>
            <div className="text-xs text-yellow-700">Total Geral</div>
            <div className="text-sm font-medium text-yellow-800 mt-1">
              🏆 Jornada
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-4">
          Selecione quem vai treinar e o dia da semana para ver o plano personalizado:
        </p>

        <div className="flex justify-center space-x-4 mb-6">
          <Button
            variant={selectedUser === 'ele' ? 'primary' : 'secondary'}
            onClick={() => handleUserSelect('ele')}
            size="lg"
            className="flex items-center space-x-2"
          >
            <span>🏃‍♂️</span>
            <span>Ele</span>
          </Button>
          <Button
            variant={selectedUser === 'ela' ? 'primary' : 'secondary'}
            onClick={() => handleUserSelect('ela')}
            size="lg"
            className="flex items-center space-x-2"
          >
            <span>🏃‍♀️</span>
            <span>Ela</span>
          </Button>
        </div>

        {selectedUser && (
          <div>
            <div className="flex justify-center space-x-2 md:space-x-4 mb-6 bg-gray-100 p-2 rounded-full max-w-sm mx-auto">
              {(['A', 'B', 'C'] as WorkoutDay[]).map(day => (
                <Button
                  key={day}
                  variant={selectedDay === day ? 'success' : 'secondary'}
                  onClick={() => handleDaySelect(day)}
                  className="flex-1"
                >
                  Treino {day}
                </Button>
              ))}
            </div>

            {selectedUser && selectedDay && (
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">
                  🎯 Objetivo {selectedUser === 'ele' ? 'Dele' : 'Dela'}
                </h4>
                <p className="text-blue-700 text-sm">
                  {selectedUser === 'ele'
                    ? 'Foco em condicionamento físico, resistência e força funcional'
                    : 'Foco em emagrecimento saudável, tonificação e melhoria da saúde geral'
                  }
                </p>
              </div>
            )}
          </div>
        )}
      </Card>

      {renderWorkout()}

      {/* Modal de finalizar treino */}
      <Modal
        isOpen={showFinishModal}
        onClose={() => setShowFinishModal(false)}
        title="Registrar Treino do Dia"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Como foi o treino de hoje?
          </p>

          <textarea
            value={finishNotes}
            onChange={(e) => setFinishNotes(e.target.value)}
            placeholder="Notas do treino (opcional)..."
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
          />

          <div className="space-y-2">
            <Button
              onClick={() => handleFinishWorkout('ele')}
              className="w-full"
              variant="primary"
            >
              🏃‍♂️ Só Ele Treinou
            </Button>
            <Button
              onClick={() => handleFinishWorkout('ela')}
              className="w-full"
              variant="success"
            >
              🏃‍♀️ Só Ela Treinou
            </Button>
            <Button
              onClick={() => handleFinishWorkout('ambos')}
              className="w-full"
              style={{ backgroundColor: '#14b8a6' }}
            >
              💑 Ambos Treinaram
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

interface ExerciseCardProps {
  exercise: Exercise;
  exerciseNumber: number;
}

function ExerciseCard({ exercise, exerciseNumber }: ExerciseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getExerciseDetails = () => {
    if (exercise.type === 'series') {
      return `${exercise.sets} séries de ${exercise.reps} com ${exercise.rest} de descanso`;
    } else {
      return `${exercise.rounds} voltas de ${exercise.work} com ${exercise.rest} de descanso`;
    }
  };

  const getExerciseInstructions = () => {
    return exerciseLibrary[exercise.name] || `
      <div class="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
        <p class="text-yellow-800"><strong>⚠️ Instruções não encontradas</strong></p>
        <p class="text-yellow-700 text-sm">As instruções detalhadas para <strong>${exercise.name}</strong> não estão disponíveis no momento.</p>
      </div>
    `;
  };

  const getIntensityColor = () => {
    if (exercise.type === 'series') {
      return 'bg-blue-100 text-blue-800';
    }
    return 'bg-orange-100 text-orange-800';
  };

  return (
    <Card className="transition-all duration-300 hover:shadow-md border-l-4 border-gray-300 hover:border-blue-400">
      {/* Header do exercício */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3 flex-1">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-gray-200 text-gray-700">
            {exerciseNumber}
          </div>

          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800">
              {exercise.name}
            </h4>
            <p className="text-sm text-gray-600">{getExerciseDetails()}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <span className={`text-xs py-1 px-2 rounded-full font-medium ${getIntensityColor()}`}>
            {exercise.type === 'series' ? 'Séries' : 'Circuito'}
          </span>

          <span className="text-xs bg-gray-200 text-gray-700 py-1 px-2 rounded-full">
            {exercise.equipment}
          </span>

          <Button variant="secondary" size="sm">
            {isExpanded ? '▲' : '▼'}
          </Button>
        </div>
      </div>

      {/* Conteúdo expandido */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
          {/* Informações do treino */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h5 className="font-semibold text-blue-800 mb-3 flex items-center">
              <span className="mr-2">📋</span>
              Informações do Treino
            </h5>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-blue-700">Tipo:</span>
                <span className="ml-2">{exercise.type === 'series' ? 'Séries' : 'Circuito'}</span>
              </div>
              <div>
                <span className="font-medium text-blue-700">Equipamento:</span>
                <span className="ml-2">{exercise.equipment}</span>
              </div>
              <div>
                <span className="font-medium text-blue-700">Foco:</span>
                <span className="ml-2">
                  {exercise.type === 'series' ? 'Força e resistência' : 'Cardio e condicionamento'}
                </span>
              </div>
              <div>
                <span className="font-medium text-blue-700">Descanso:</span>
                <span className="ml-2">{exercise.rest}</span>
              </div>
            </div>
          </div>

          {/* Instruções detalhadas */}
          <div className="exercise-instructions">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
              <span className="mr-2">📖</span>
              Como Executar
            </h5>
            <div
              className="prose prose-sm max-w-none text-gray-700 exercise-content bg-white p-4 rounded-lg border border-gray-200"
              dangerouslySetInnerHTML={{ __html: getExerciseInstructions() }}
            />
          </div>
        </div>
      )}
    </Card>
  );
}
