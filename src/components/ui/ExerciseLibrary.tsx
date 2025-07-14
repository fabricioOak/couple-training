'use client';

import { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { exerciseLibrary } from '@/app/lib/workoutData';

export function ExerciseLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'strength', label: 'Força' },
    { id: 'cardio', label: 'Cardio' },
    { id: 'core', label: 'Core' },
    { id: 'flexibility', label: 'Flexibilidade' }
  ];

  const getCategoryForExercise = (exerciseName: string): string => {
    const strengthExercises = ['Agachamento', 'Flexão', 'Afundo', 'Ponte', 'Elevação', 'Mergulho'];
    const cardioExercises = ['Pular', 'Polichinelo', 'Corrida', 'Deslocamento', 'Zig-Zag', 'Marcha', 'Burpee'];
    const coreExercises = ['Prancha', 'Perdigueiro', 'Abdominais', 'Super-homem', 'Elevação de Pernas'];

    if (strengthExercises.some(keyword => exerciseName.includes(keyword))) return 'strength';
    if (cardioExercises.some(keyword => exerciseName.includes(keyword))) return 'cardio';
    if (coreExercises.some(keyword => exerciseName.includes(keyword))) return 'core';
    return 'flexibility';
  };

  const filteredExercises = Object.keys(exerciseLibrary)
    .filter(name => {
      const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || getCategoryForExercise(name) === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort();

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Biblioteca de Movimentos</h2>
        <p className="text-gray-700 mb-6">
          Aqui encontra instruções detalhadas para cada exercício, incluindo alternativas para variar os seus treinos.
          Lembre-se, a qualidade do movimento é sempre mais importante que a quantidade.
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Pesquisar exercício..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'primary' : 'secondary'}
                onClick={() => setSelectedCategory(category.id)}
                size="sm"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-600 mb-4">
          {filteredExercises.length} exercício{filteredExercises.length !== 1 ? 's' : ''} encontrado{filteredExercises.length !== 1 ? 's' : ''}
        </p>
      </Card>

      {/* Exercise List */}
      <div className="space-y-4">
        {filteredExercises.length === 0 ? (
          <Card>
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Nenhum exercício encontrado.</p>
              <Button
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                variant="secondary"
              >
                Limpar filtros
              </Button>
            </div>
          </Card>
        ) : (
          filteredExercises.map(name => (
            <ExerciseDetailCard key={name} name={name} description={exerciseLibrary[name]} />
          ))
        )}
      </div>
    </div>
  );
}

interface ExerciseDetailCardProps {
  name: string;
  description: string;
}

function ExerciseDetailCard({ name, description }: ExerciseDetailCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="transition-all duration-300">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <Button variant="secondary" size="sm">
          {isExpanded ? '▼' : '▶'}
        </Button>
      </div>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div
            className="prose prose-sm max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      )}
    </Card>
  );
}
