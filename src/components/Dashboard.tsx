'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { workoutData } from '@/app/lib/workoutData';
import { UserType, WorkoutDay, Exercise } from '@/app/types';

export function Dashboard() {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [selectedDay, setSelectedDay] = useState<WorkoutDay | null>(null);

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
        <h3 className="text-xl font-bold text-center">
          Treino {selectedDay} - {selectedUser === 'ele' ? 'Condicionamento' : 'Saúde e Emagrecimento'}
        </h3>

        {workout.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Bem-vindos ao seu treino!</h2>
        <p className="text-gray-700 mb-4">
          Esta é a sua central de treinos. Selecionem quem está a treinar e o dia da semana
          para verem o plano de exercícios personalizado. Lembrem-se: consistência é a chave!
        </p>

        <div className="flex justify-center space-x-4 mb-6">
          <Button
            variant={selectedUser === 'ele' ? 'primary' : 'secondary'}
            onClick={() => handleUserSelect('ele')}
            size="lg"
          >
            Ele
          </Button>
          <Button
            variant={selectedUser === 'ela' ? 'primary' : 'secondary'}
            onClick={() => handleUserSelect('ela')}
            size="lg"
          >
            Ela
          </Button>
        </div>

        {selectedUser && (
          <div>
            <p className="text-center font-semibold mb-4 text-gray-700">
              Selecione o treino do dia:
            </p>
            <div className="flex justify-center space-x-2 md:space-x-4 mb-8 bg-gray-100 p-2 rounded-full max-w-sm mx-auto">
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
          </div>
        )}
      </Card>

      {renderWorkout()}
    </div>
  );
}

interface ExerciseCardProps {
  exercise: Exercise;
}

function ExerciseCard({ exercise }: ExerciseCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const getExerciseDetails = () => {
    if (exercise.type === 'series') {
      return `${exercise.sets} séries de ${exercise.reps} com ${exercise.rest} de descanso`;
    } else {
      return `${exercise.rounds} voltas de ${exercise.work} com ${exercise.rest} de descanso`;
    }
  };

  return (
    <Card className="cursor-pointer transition-all duration-300 hover:shadow-md" onClick={() => setIsFlipped(!isFlipped)}>
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{exercise.name}</h4>
          <p className="text-sm text-gray-600">{getExerciseDetails()}</p>
        </div>
        <span className="text-xs bg-gray-200 text-gray-700 py-1 px-2 rounded-full">
          {exercise.equipment}
        </span>
      </div>

      {isFlipped && (
        <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-700">
          <p className="text-blue-600 font-medium mb-2">💡 Dica: Clique para ver instruções detalhadas na aba "Exercícios"</p>
          <div className="bg-blue-50 p-3 rounded-lg">
            <p><strong>Foco:</strong> {exercise.type === 'series' ? 'Força e resistência' : 'Condicionamento cardiovascular'}</p>
            <p><strong>Equipamento:</strong> {exercise.equipment}</p>
          </div>
        </div>
      )}
    </Card>
  );
}
