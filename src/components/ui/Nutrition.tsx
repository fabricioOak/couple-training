'use client';

import { Card } from './Card';

export function Nutrition() {
  const nutritionTips = [
    {
      title: "Hidratação",
      description: "Bebam pelo menos 2-3 litros de água por dia. Aumentem durante os treinos.",
      icon: "💧"
    },
    {
      title: "Timing das Refeições",
      description: "Comam algo leve 1-2h antes do treino e uma refeição completa até 2h depois.",
      icon: "⏰"
    },
    {
      title: "Proteína em Cada Refeição",
      description: "Incluam uma fonte de proteína em cada refeição para manter a massa muscular.",
      icon: "🥩"
    },
    {
      title: "Carboidratos Inteligentes",
      description: "Escolham carboidratos complexos: aveia, batata-doce, arroz integral.",
      icon: "🍠"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Nutrição: O Combustível para os Seus Objetivos</h2>
        <p className="text-gray-700 mb-6">
          O treino dá o estímulo, mas a nutrição fornece a energia e os materiais para a mudança.
          As estratégias são diferentes, pois os seus objetivos são diferentes.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <NutritionGuide
            title="Para Ele (Foco: Condicionamento)"
            description="O objetivo é garantir energia para treinar com intensidade e nutrientes para uma recuperação ótima."
            colorScheme="blue"
            guidelines={[
              {
                title: "Pré-Treino (1-2h antes)",
                content: "Combine carboidratos complexos (energia) e proteína. Ex: Aveia com banana; iogurte grego com fruta."
              },
              {
                title: "Pós-Treino (até 2h depois)",
                content: "Reponha a energia e forneça proteína para a reparação muscular. Ex: Frango grelhado com batata-doce; salmão com arroz integral."
              },
              {
                title: "Durante o Dia",
                content: "Mantenha refeições regulares com boa combinação de macro-nutrientes. Foque em alimentos integrais."
              }
            ]}
          />

          <NutritionGuide
            title="Para Ela (Foco: Emagrecimento e Saúde)"
            description="O objetivo é criar um défice calórico sustentável, preservando a massa muscular e garantindo energia para os treinos."
            colorScheme="green"
            guidelines={[
              {
                title: "Prioridade à Proteína",
                content: "Aumenta a saciedade e protege os músculos. Inclua uma fonte em cada refeição."
              },
              {
                title: "Carboidratos Estratégicos",
                content: "Consuma porções controladas de carboidratos complexos (aveia, batata-doce) perto dos treinos para ter energia."
              },
              {
                title: "Exemplo Pós-Treino",
                content: "Salada grande e colorida com uma fonte de proteína magra (frango desfiado, grão-de-bico)."
              }
            ]}
          />
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-bold mb-4">Dicas Gerais de Nutrição</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {nutritionTips.map((tip, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100">
              <div className="text-2xl mb-2">{tip.icon}</div>
              <h4 className="font-semibold text-gray-800 mb-2">{tip.title}</h4>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-bold mb-4">Receitas Rápidas e Saudáveis</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <RecipeCard
            title="Smoothie Pós-Treino"
            ingredients={["1 banana", "1 chávena de leite", "1 colher de proteína em pó", "1 punhado de espinafres", "Gelo"]}
            instructions="Bata todos os ingredientes no liquidificador até ficar cremoso. Perfeito para recuperação!"
            prepTime="5 min"
            icon="🥤"
          />

          <RecipeCard
            title="Bowl de Aveia Energético"
            ingredients={["1/2 chávena de aveia", "1 banana fatiada", "1 colher de mel", "Nozes picadas", "Canela"]}
            instructions="Cozinhe a aveia, adicione os toppings e desfrute de uma refeição nutritiva!"
            prepTime="10 min"
            icon="🥣"
          />

          <RecipeCard
            title="Salada Completa"
            ingredients={["Mix de folhas verdes", "Frango grelhado", "Abacate", "Tomate cereja", "Azeite e limão"]}
            instructions="Misture todos os ingredientes. Uma refeição completa e nutritiva!"
            prepTime="15 min"
            icon="🥗"
          />

          <RecipeCard
            title="Snack Proteico"
            ingredients={["Iogurte grego", "Frutos vermelhos", "Granola", "Mel", "Amêndoas"]}
            instructions="Camadas de iogurte, frutos e granola. Perfeito para lanches!"
            prepTime="5 min"
            icon="🍓"
          />
        </div>
      </Card>
    </div>
  );
}

interface NutritionGuideProps {
  title: string;
  description: string;
  colorScheme: 'blue' | 'green';
  guidelines: Array<{
    title: string;
    content: string;
  }>;
}

function NutritionGuide({ title, description, colorScheme, guidelines }: NutritionGuideProps) {
  const colors = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      title: 'text-blue-800',
      text: 'text-blue-700'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      title: 'text-green-800',
      text: 'text-green-700'
    }
  };

  const scheme = colors[colorScheme];

  return (
    <div className={`${scheme.bg} p-6 rounded-lg ${scheme.border} border`}>
      <h3 className={`text-xl font-semibold mb-4 ${scheme.title}`}>{title}</h3>
      <p className={`mb-4 ${scheme.text}`}>{description}</p>

      <div className="space-y-3">
        {guidelines.map((guideline, index) => (
          <div key={index}>
            <h4 className={`font-semibold ${scheme.title} mb-1`}>{guideline.title}</h4>
            <p className={`text-sm ${scheme.text}`}>{guideline.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface RecipeCardProps {
  title: string;
  ingredients: string[];
  instructions: string;
  prepTime: string;
  icon: string;
}

function RecipeCard({ title, ingredients, instructions, prepTime, icon }: RecipeCardProps) {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-2">{icon}</span>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <span className="ml-auto text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">
          {prepTime}
        </span>
      </div>

      <div className="mb-3">
        <h5 className="font-medium text-gray-700 mb-1">Ingredientes:</h5>
        <ul className="text-sm text-gray-600 list-disc list-inside">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="font-medium text-gray-700 mb-1">Preparação:</h5>
        <p className="text-sm text-gray-600">{instructions}</p>
      </div>
    </div>
  );
}
