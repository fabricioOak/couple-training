'use client';

import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { Card } from './Card';
import { useWorkoutData } from '@/hooks/useWorkoutData';
import { WorkoutStatus } from '@/app/types';

export function ProgressTracker() {
  const { workouts, saveWorkout, deleteWorkout } = useWorkoutData();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState('');

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    const dateString = date.toISOString().split('T')[0];
    setNotes(workouts[dateString]?.notes || '');
    setModalOpen(true);
  };

  const handleSaveWorkout = async (status: WorkoutStatus) => {
    if (!selectedDate) return;

    const dateString = selectedDate.toISOString().split('T')[0];

    try {
      if (status === 'nenhum') {
        console.log('Removendo treino da data:', dateString);
        await deleteWorkout(dateString);
      } else {
        console.log('Salvando treino:', { dateString, status, notes });
        await saveWorkout(dateString, status, notes);
      }

      setModalOpen(false);
      setNotes(''); // Limpar notas após salvar/deletar

    } catch (error) {
      console.error('Erro ao processar treino:', error);
      // Manter modal aberto em caso de erro
    }
  };


  const getStats = () => {
    let eleCount = 0;
    let elaCount = 0;
    let currentStreak = 0;

    const sortedDates = Object.keys(workouts).sort();

    sortedDates.forEach(dateStr => {
      const status = workouts[dateStr].status;
      if (status === 'ele' || status === 'ambos') eleCount++;
      if (status === 'ela' || status === 'ambos') elaCount++;
    });

    // Calculate current streak
    if (sortedDates.length > 0) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      let lastWorkoutDate = new Date(sortedDates[sortedDates.length - 1]);
      lastWorkoutDate.setHours(0, 0, 0, 0);

      let diffTime = today.getTime() - lastWorkoutDate.getTime();
      let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays <= 1) {
        currentStreak = 1;
        for (let i = sortedDates.length - 2; i >= 0; i--) {
          let currentDate = new Date(sortedDates[i]);
          currentDate.setHours(0, 0, 0, 0);
          let dayDiff = (lastWorkoutDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);
          if (dayDiff === 1) {
            currentStreak++;
            lastWorkoutDate = currentDate;
          } else {
            break;
          }
        }
      }
    }

    return { eleCount, elaCount, currentStreak };
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];

    // Empty days at the beginning
    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateString = date.toISOString().split('T')[0];
      const workout = workouts[dateString];
      const today = new Date();
      const isToday = date.toDateString() === today.toDateString();

      days.push(
        <div
          key={day}
          className={`
            w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium cursor-pointer transition-all hover:bg-gray-200
            ${isToday ? 'bg-yellow-100 border-2 border-yellow-400' : ''}
            ${workout?.status === 'ele' ? 'bg-blue-200 text-blue-800' : ''}
            ${workout?.status === 'ela' ? 'bg-green-200 text-green-800' : ''}
            ${workout?.status === 'ambos' ? 'bg-purple-200 text-purple-800' : ''}
          `}
          onClick={() => handleDayClick(date)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const stats = getStats();

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-bold mb-4">A Vossa Jornada de Progresso</h2>
        <p className="text-gray-700 mb-6">
          Registem os vossos treinos para visualizar a vossa consistência e manter a motivação em alta.
          Cliquem num dia para marcar como concluído!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-center">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800 font-semibold">Total de Treinos (Ele)</p>
            <p className="text-3xl font-bold text-blue-900">{stats.eleCount}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-800 font-semibold">Total de Treinos (Ela)</p>
            <p className="text-3xl font-bold text-green-900">{stats.elaCount}</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm text-yellow-800 font-semibold">Sequência Atual</p>
            <p className="text-3xl font-bold text-yellow-900">{stats.currentStreak} dias</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <Button
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
            variant="secondary"
          >
            ←
          </Button>
          <h3 className="text-xl font-semibold">
            {currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
          </h3>
          <Button
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
            variant="secondary"
          >
            →
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center mb-4">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
            <div key={day} className="font-semibold text-sm text-gray-600 py-2">{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {renderCalendar()}
        </div>
      </Card>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Marcar Treino Concluído"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            {selectedDate?.toLocaleDateString('pt-BR', { dateStyle: 'full' })}
          </p>

          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Notas do treino (opcional)..."
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
          />

          <div className="space-y-2">
            <Button
              onClick={() => handleSaveWorkout('ele')}
              className="w-full"
              variant="primary"
            >
              Só Ele Treinou
            </Button>
            <Button
              onClick={() => handleSaveWorkout('ela')}
              className="w-full"
              variant="success"
            >
              Só Ela Treinou
            </Button>
            <Button
              onClick={() => handleSaveWorkout('ambos')}
              className="w-full"
              style={{ backgroundColor: '#14b8a6' }}
            >
              Ambos Treinaram
            </Button>
            <Button
              onClick={() => handleSaveWorkout('nenhum')}
              variant="secondary"
              className="w-full"
            >
              Limpar Marcação
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
