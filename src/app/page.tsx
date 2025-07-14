'use client';

import { useState } from 'react';
import { Dashboard } from '@/components/ui/Dashboard';
import { ProgressTracker } from '@/components/ui/ProgressTracker';
import { ExerciseLibrary } from '@/components/ui/ExerciseLibrary';
import { Achievements } from '@/components/ui/Achievements';
import { Nutrition } from '@/components/ui/Nutrition';
import { WorkoutPlan } from '@/components/ui/WorkoutPlan';

type ActiveTab = 'dashboard' | 'plano' | 'biblioteca' | 'progresso' | 'conquistas' | 'nutricao';

export default function Home() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');

  const tabs = [
    { id: 'dashboard' as const, label: 'Dashboard', component: Dashboard },
    { id: 'plano' as const, label: 'O Plano', component: WorkoutPlan },
    { id: 'biblioteca' as const, label: 'Exercícios', component: ExerciseLibrary },
    { id: 'progresso' as const, label: 'Progresso', component: ProgressTracker },
    { id: 'conquistas' as const, label: 'Conquistas', component: Achievements },
    { id: 'nutricao' as const, label: 'Nutrição', component: Nutrition }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <>
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          O Seu Ginásio em Casa
        </h1>
        <p className="text-gray-600 mt-2">
          Um plano interativo para os seus objetivos de saúde e condicionamento físico.
        </p>
      </header>

      <nav className="flex justify-center border-b border-gray-200 mb-8 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-4 px-6 hover:text-blue-500 focus:outline-none transition-colors ${activeTab === tab.id ? 'border-b-2 border-blue-500 text-blue-500 font-semibold' : ''
              }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {ActiveComponent && <ActiveComponent />}
    </>
  );
}
