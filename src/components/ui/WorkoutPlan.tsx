'use client';

import { Card } from './Card';

export function WorkoutPlan() {
  const weeklySchedule = [
    { day: 'Segunda', activity: 'Treino A', type: 'workout' as const, description: 'Foco em movimentos compostos e cardio' },
    { day: 'Terça', activity: 'Descanso Ativo', type: 'rest' as const, description: 'Caminhada leve ou alongamentos' },
    { day: 'Quarta', activity: 'Treino B', type: 'workout' as const, description: 'Trabalho de força e estabilidade' },
    { day: 'Quinta', activity: 'Descanso Ativo', type: 'rest' as const, description: 'Yoga ou mobilidade' },
    { day: 'Sexta', activity: 'Treino C', type: 'workout' as const, description: 'Exercícios isométricos e condicionamento' },
    { day: 'Fim de Semana', activity: 'Descanso/Lazer', type: 'rest' as const, description: 'Atividades recreativas ou descanso completo' }
  ];

  const progressionPrinciples = [
    {
      title: "Sobrecarga Progressiva",
      description: "Aumente gradualmente a intensidade, duração ou complexidade dos exercícios.",
      icon: "📈",
      examples: ["Mais repetições", "Menos tempo de descanso", "Variações mais difíceis"]
    },
    {
      title: "Especificidade",
      description: "Os exercícios devem ser específicos para os vossos objetivos individuais.",
      icon: "🎯",
      examples: ["Condicionamento (ele)", "Emagrecimento (ela)", "Adaptações personalizadas"]
    },
    {
      title: "Recuperação",
      description: "O descanso é quando o corpo se adapta e fica mais forte.",
      icon: "😴",
      examples: ["Dias de descanso ativo", "Sono de qualidade", "Nutrição adequada"]
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-bold mb-4">A Arquitetura do Treino</h2>
        <p className="text-gray-700 mb-6">
          Um treino eficaz é mais do que uma série de exercícios. Segue uma estrutura de 3 fases
          para maximizar os resultados e minimizar o risco de lesões. Esta abordagem torna o exercício
          uma experiência mais positiva e sustentável.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
          <WorkoutPhase
            number="1"
            title="Aquecimento (5-10 min)"
            description="Prepara o corpo para o movimento, aumentando a circulação e a temperatura muscular. Usamos movimentos dinâmicos que 'acordam' o sistema nervoso e ativam os músculos que serão trabalhados."
            color="green"
          />
          <WorkoutPhase
            number="2"
            title="Parte Principal"
            description="O núcleo do treino, onde realizamos os exercícios específicos para atingir os vossos objetivos, seja condicionamento ou perda de peso. A qualidade desta fase depende de um bom aquecimento."
            color="blue"
          />
          <WorkoutPhase
            number="3"
            title="Volta à Calma (10-15 min)"
            description="Transição gradual de volta ao repouso. Ajuda na recuperação, normaliza a frequência cardíaca e inclui alongamentos estáticos para melhorar a flexibilidade e reduzir a tensão."
            color="purple"
          />
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-bold mb-4">O Vosso Calendário Semanal</h3>
        <p className="text-gray-700 mb-6">
          A estrutura é de 3 treinos de corpo inteiro por semana em dias não-consecutivos.
          Esta frequência é ótima para estimular o corpo de forma consistente. Os dias de descanso ativo
          são igualmente importantes para a recuperação.
        </p>

        <div className="grid gap-3">
          {weeklySchedule.map((item, index) => (
            <ScheduleItem key={index} {...item} />
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-bold mb-4">Princípios de Progressão</h3>
        <p className="text-gray-700 mb-6">
          Para continuarem a ver resultados, é importante seguir estes princípios fundamentais do treino:
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {progressionPrinciples.map((principle, index) => (
            <ProgressionPrinciple key={index} {...principle} />
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-bold mb-4">Adaptações por Objetivos</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ObjectiveCard
            title="Para Ele - Condicionamento"
            description="Foco em intensidade, resistência e desenvolvimento da capacidade cardiovascular."
            adaptations={[
              "Maior volume de treino",
              "Exercícios com progressão rápida",
              "Ênfase no condicionamento metabólico",
              "Treinos de alta intensidade"
            ]}
            colorScheme="blue"
          />
          <ObjectiveCard
            title="Para Ela - Saúde e Emagrecimento"
            description="Foco em queima de gordura, tonificação e melhoria da saúde geral."
            adaptations={[
              "Circuitos de alta intensidade",
              "Exercícios funcionais",
              "Progressão adaptada ao nível",
              "Ênfase na consistência"
            ]}
            colorScheme="green"
          />
        </div>
      </Card>
    </div>
  );
}

interface WorkoutPhaseProps {
  number: string;
  title: string;
  description: string;
  color: 'green' | 'blue' | 'purple';
}

function WorkoutPhase({ number, title, description, color }: WorkoutPhaseProps) {
  const colorClasses = {
    green: 'bg-green-50 border-green-200 text-green-800',
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800'
  };

  return (
    <div className={`p-6 rounded-lg border ${colorClasses[color]}`}>
      <div className="text-2xl font-bold mb-2">{number}</div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
}

interface ScheduleItemProps {
  day: string;
  activity: string;
  type: 'workout' | 'rest';
  description: string;
}

function ScheduleItem({ day, activity, type, description }: ScheduleItemProps) {
  return (
    <div className={`p-4 rounded-lg border ${type === 'workout'
        ? 'bg-green-50 border-green-200'
        : 'bg-gray-50 border-gray-200'
      }`}>
      <div className="flex justify-between items-center">
        <div>
          <span className="font-semibold text-gray-800">{day}</span>
          <div className={`text-sm font-medium ${type === 'workout' ? 'text-green-700' : 'text-gray-600'
            }`}>
            {activity}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500">{description}</div>
        </div>
      </div>
    </div>
  );
}

interface ProgressionPrincipleProps {
  title: string;
  description: string;
  icon: string;
  examples: string[];
}

function ProgressionPrinciple({ title, description, icon, examples }: ProgressionPrincipleProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-200">
      <div className="text-2xl mb-2">{icon}</div>
      <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="space-y-1">
        {examples.map((example, index) => (
          <div key={index} className="text-xs text-gray-500 flex items-center">
            <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
            {example}
          </div>
        ))}
      </div>
    </div>
  );
}

interface ObjectiveCardProps {
  title: string;
  description: string;
  adaptations: string[];
  colorScheme: 'blue' | 'green';
}

function ObjectiveCard({ title, description, adaptations, colorScheme }: ObjectiveCardProps) {
  const colors = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800' },
    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800' }
  };

  const scheme = colors[colorScheme];

  return (
    <div className={`p-6 rounded-lg border ${scheme.bg} ${scheme.border}`}>
      <h4 className={`text-lg font-semibold mb-3 ${scheme.text}`}>{title}</h4>
      <p className={`text-sm mb-4 ${scheme.text}`}>{description}</p>
      <ul className="space-y-2">
        {adaptations.map((adaptation, index) => (
          <li key={index} className={`text-sm ${scheme.text} flex items-center`}>
            <span className="w-2 h-2 bg-current rounded-full mr-2"></span>
            {adaptation}
          </li>
        ))}
      </ul>
    </div>
  );
}
