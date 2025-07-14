import { WorkoutData, AchievementData } from "@/app/types";

export const workoutData: WorkoutData = {
	A: {
		ele: [
			{
				name: "Pular Corda",
				type: "series",
				sets: 4,
				reps: "1m 30s",
				rest: "30s",
				equipment: "Corda",
			},
			{
				name: "Escada de Agilidade",
				type: "series",
				sets: "4 (ida e volta)",
				reps: "1 pé por quadrado",
				rest: "45s",
				equipment: "Escada",
			},
			{
				name: "Agachamento",
				type: "series",
				sets: 4,
				reps: "15-20",
				rest: "60s",
				equipment: "Nenhum",
			},
			{
				name: "Flexão de Braços",
				type: "series",
				sets: 4,
				reps: "Até à falha",
				rest: "60s",
				equipment: "Colchonete",
			},
			{
				name: "Ponte de Glúteos",
				type: "series",
				sets: 4,
				reps: "20 (pausa 2s)",
				rest: "45s",
				equipment: "Colchonete",
			},
			{
				name: "Prancha Isométrica",
				type: "series",
				sets: 3,
				reps: "Tempo máximo",
				rest: "60s",
				equipment: "Colchonete",
			},
			{
				name: "Perdigueiro",
				type: "series",
				sets: 3,
				reps: "12 por lado",
				rest: "45s",
				equipment: "Colchonete",
			},
		],
		ela: [
			{
				name: "Polichinelo Adaptado",
				type: "circuit",
				work: "45s",
				rest: "15s",
				rounds: 4,
				equipment: "Colchonete",
			},
			{
				name: "Marcha com Toque no Cone",
				type: "circuit",
				work: "45s",
				rest: "15s",
				rounds: 4,
				equipment: "Cones",
			},
			{
				name: "Agachamento",
				type: "circuit",
				work: "45s",
				rest: "15s",
				rounds: 3,
				equipment: "Nenhum",
			},
			{
				name: "Flexão com Joelhos",
				type: "circuit",
				work: "45s",
				rest: "15s",
				rounds: 3,
				equipment: "Colchonete",
			},
			{
				name: "Ponte de Glúteos",
				type: "circuit",
				work: "45s",
				rest: "15s",
				rounds: 3,
				equipment: "Colchonete",
			},
			{
				name: "Prancha Isométrica",
				type: "circuit",
				work: "30-45s",
				rest: "30s",
				rounds: 3,
				equipment: "Colchonete",
			},
			{
				name: "Perdigueiro",
				type: "circuit",
				work: "45s",
				rest: "15s",
				rounds: 3,
				equipment: "Colchonete",
			},
		],
	},
	B: {
		ele: [
			{
				name: "Afundo (Lunge)",
				type: "series",
				sets: 4,
				reps: "12 por perna",
				rest: "60s",
				equipment: "Nenhum",
			},
			{
				name: "Flexão Inclinada",
				type: "series",
				sets: 4,
				reps: "15-20",
				rest: "60s",
				equipment: "Sofá/Cadeira",
			},
			{
				name: "Elevação Pélvica Unilateral",
				type: "series",
				sets: 3,
				reps: "15 por perna",
				rest: "45s",
				equipment: "Colchonete",
			},
			{
				name: "Deslocamento Lateral c/ Toque",
				type: "series",
				sets: 4,
				reps: "45s",
				rest: "30s",
				equipment: "Cones",
			},
			{
				name: "Prancha Lateral",
				type: "series",
				sets: 3,
				reps: "30-45s por lado",
				rest: "45s",
				equipment: "Colchonete",
			},
		],
		ela: [
			{
				name: "Afundo (Lunge)",
				type: "circuit",
				work: "45s",
				rest: "15s",
				rounds: 3,
				equipment: "Nenhum",
			},
			{
				name: "Flexão Inclinada",
				type: "circuit",
				work: "45s",
				rest: "15s",
				rounds: 3,
				equipment: "Sofá/Cadeira",
			},
			{
				name: "Elevação Pélvica",
				type: "circuit",
				work: "45s",
				rest: "15s",
				rounds: 3,
				equipment: "Colchonete",
			},
			{
				name: "Deslocamento Lateral c/ Toque",
				type: "circuit",
				work: "45s",
				rest: "15s",
				rounds: 4,
				equipment: "Cones",
			},
			{
				name: "Prancha Lateral com Joelho",
				type: "circuit",
				work: "30s por lado",
				rest: "15s",
				rounds: 3,
				equipment: "Colchonete",
			},
		],
	},
	C: {
		ele: [
			{
				name: "Agachamento Isométrico",
				type: "series",
				sets: 4,
				reps: "45-60s",
				rest: "60s",
				equipment: "Parede",
			},
			{
				name: "Flexão Declinada",
				type: "series",
				sets: 4,
				reps: "Até à falha",
				rest: "60s",
				equipment: "Sofá/Cadeira",
			},
			{
				name: "Ponte de Glúteos Unilateral",
				type: "series",
				sets: 4,
				reps: "15 por lado",
				rest: "45s",
				equipment: "Colchonete",
			},
			{
				name: "Zig-Zag com Cones",
				type: "series",
				sets: "4 (ida e volta)",
				reps: "Rápido",
				rest: "45s",
				equipment: "Cones",
			},
			{
				name: "Abdominais (Crunch)",
				type: "series",
				sets: 3,
				reps: "20-25",
				rest: "45s",
				equipment: "Colchonete",
			},
		],
		ela: [
			{
				name: "Agachamento Isométrico",
				type: "circuit",
				work: "30-45s",
				rest: "15s",
				rounds: 3,
				equipment: "Parede",
			},
			{
				name: "Flexão Inclinada",
				type: "circuit",
				work: "45s",
				rest: "15s",
				rounds: 3,
				equipment: "Sofá/Cadeira",
			},
			{
				name: "Ponte de Glúteos",
				type: "circuit",
				work: "45s",
				rest: "15s",
				rounds: 3,
				equipment: "Colchonete",
			},
			{
				name: "Zig-Zag com Cones",
				type: "circuit",
				work: "45s",
				rest: "15s",
				rounds: 4,
				equipment: "Cones",
			},
			{
				name: "Prancha Isométrica",
				type: "circuit",
				work: "30-45s",
				rest: "30s",
				rounds: 3,
				equipment: "Colchonete",
			},
		],
	},
};

export const exerciseLibrary: { [key: string]: string } = {
	Agachamento: `
    <h4>Como começar:</h4>
    <p>Fique em pé com os pés na largura dos ombros, dedos levemente apontados pra fora. Mantenha as costas retas e o peito aberto.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Comece empurrando o bumbum pra trás e pra baixo</li>
      <li>Mantenha o peso nos calcanhares</li>
      <li>Desça até as coxas ficarem paralelas ao chão</li>
      <li>Empurre o chão com força pra voltar na posição inicial</li>
    </ol>
    <h4>Pontos importantes:</h4>
    <ul>
      <li>Joelhos sempre alinhados com os pés</li>
      <li>Peito sempre pra fora</li>
      <li>Não deixe os joelhos passarem muito da ponta dos pés</li>
    </ul>
  `,

	"Agachamento Isométrico": `
    <h4>Como começar:</h4>
    <p>Igual ao agachamento normal, mas com as costas apoiadas numa parede.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Desça até a posição de agachamento (coxas paralelas ao chão)</li>
      <li>Segure nessa posição pelo tempo que for indicado</li>
      <li>Respire normalmente durante toda a execução</li>
      <li>Mantenha toda a força nos músculos</li>
    </ol>
    <h4>Por que é bom:</h4>
    <ul>
      <li>Desenvolve força e resistência muscular</li>
      <li>Melhora a estabilidade</li>
      <li>Perfeito pra quem está começando</li>
    </ul>
  `,

	"Flexão de Braços": `
    <h4>Como começar:</h4>
    <p>Posição de prancha, com as mãos um pouco mais largas que os ombros. Corpo bem reto da cabeça aos pés.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Contraia bem a barriga e o bumbum</li>
      <li>Baixe o corpo até o peito quase tocar o chão</li>
      <li>Cotovelos ficam entre 45-60 graus do corpo</li>
      <li>Empurre o chão com força pra voltar</li>
    </ol>
    <h4>Variações:</h4>
    <ul>
      <li><strong>Iniciante:</strong> Faça com os joelhos apoiados</li>
      <li><strong>Intermediário:</strong> Pés elevados num banco</li>
      <li><strong>Avançado:</strong> Uma mão só ou formato diamante</li>
    </ul>
  `,

	"Flexão com Joelhos": `
    <h4>Como começar:</h4>
    <p>Igual à flexão normal, mas com os joelhos apoiados no chão.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Joelhos no chão, corpo reto da cabeça aos joelhos</li>
      <li>Mãos um pouco mais largas que os ombros</li>
      <li>Baixe o peito em direção ao chão</li>
      <li>Empurre pra voltar na posição inicial</li>
    </ol>
    <h4>Dicas importantes:</h4>
    <ul>
      <li>Mantenha a barriga contraída</li>
      <li>Não curve as costas</li>
      <li>É a evolução natural pra chegar na flexão completa</li>
    </ul>
  `,

	"Flexão Inclinada": `
    <h4>Como começar:</h4>
    <p>Apoie as mãos numa superfície elevada (sofá, cadeira, mesa).</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Corpo bem reto, pés no chão</li>
      <li>Quanto mais alta a superfície, mais fácil fica</li>
      <li>Baixe o peito em direção à superfície</li>
      <li>Empurre pra voltar</li>
    </ol>
    <h4>Evolução:</h4>
    <ul>
      <li>Comece com uma superfície bem alta</li>
      <li>Vá baixando aos poucos</li>
      <li>Objetivo final: chegar no chão</li>
    </ul>
  `,

	"Flexão Declinada": `
    <h4>Como começar:</h4>
    <p>Pés elevados numa superfície (sofá, cadeira), mãos no chão.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Corpo bem reto, pés elevados</li>
      <li>Mãos um pouco mais largas que os ombros</li>
      <li>Baixe o peito em direção ao chão</li>
      <li>Empurre pra voltar</li>
    </ol>
    <h4>Cuidado:</h4>
    <ul>
      <li>Exercício avançado - mais difícil que flexão normal</li>
      <li>Trabalha mais a parte de cima do peito</li>
      <li>Exige mais força nos ombros</li>
    </ul>
  `,

	"Ponte de Glúteos": `
    <h4>Como começar:</h4>
    <p>Deite de costas, joelhos dobrados, pés perto do bumbum.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Empurre os calcanhares contra o chão</li>
      <li>Levante o quadril contraindo bem o bumbum</li>
      <li>Forme uma linha reta dos ombros até os joelhos</li>
      <li>Segure por 1-2 segundos lá em cima</li>
    </ol>
    <h4>Músculos que trabalham:</h4>
    <ul>
      <li>Glúteos (principal)</li>
      <li>Parte de trás da coxa</li>
      <li>Barriga</li>
    </ul>
  `,

	"Ponte de Glúteos Unilateral": `
    <h4>Como começar:</h4>
    <p>Igual à ponte normal, mas com um pé elevado ou uma perna esticada.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Levante uma perna ou apoie num banco</li>
      <li>Faça a ponte só com uma perna</li>
      <li>Foque em contrair bem o glúteo da perna que está trabalhando</li>
      <li>Mantenha o equilíbrio</li>
    </ol>
    <h4>Por que é bom:</h4>
    <ul>
      <li>Trabalha mais cada músculo</li>
      <li>Melhora o equilíbrio</li>
      <li>Corrige diferenças entre os lados</li>
    </ul>
  `,

	"Elevação Pélvica Unilateral": `
    <h4>Como começar:</h4>
    <p>Deite de costas, um pé no chão, outro no ar.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Mantenha uma perna esticada no ar</li>
      <li>Levante a pélvis usando só a perna de apoio</li>
      <li>Contraia bem o glúteo da perna que está trabalhando</li>
      <li>Desça devagar sem encostar no chão</li>
    </ol>
    <h4>Dicas:</h4>
    <ul>
      <li>Só a pélvis se move</li>
      <li>Mantenha a perna do ar parada</li>
      <li>Qualidade é mais importante que quantidade</li>
    </ul>
  `,

	"Prancha Isométrica": `
    <h4>Como começar:</h4>
    <p>Antebraços no chão, cotovelos embaixo dos ombros. Corpo bem reto.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Contraia bem a barriga e o bumbum</li>
      <li>Mantenha uma linha reta da cabeça aos calcanhares</li>
      <li>Respire normalmente</li>
      <li>Segure pelo tempo determinado</li>
    </ol>
    <h4>Erros comuns:</h4>
    <ul>
      <li>Levantar muito o quadril</li>
      <li>Deixar o quadril cair</li>
      <li>Forçar muito o pescoço</li>
    </ul>
  `,

	"Prancha Lateral": `
    <h4>Como começar:</h4>
    <p>Deite de lado, apoiado no antebraço, corpo bem reto.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Antebraço perpendicular ao corpo</li>
      <li>Levante o quadril do chão</li>
      <li>Forme uma linha reta dos pés até a cabeça</li>
      <li>Mantenha a posição</li>
    </ol>
    <h4>Evoluções:</h4>
    <ul>
      <li><strong>Iniciante:</strong> Joelhos apoiados</li>
      <li><strong>Intermediário:</strong> Pés um em cima do outro</li>
      <li><strong>Avançado:</strong> Perna de cima levantada</li>
    </ul>
  `,

	"Prancha Lateral com Joelho": `
    <h4>Como começar:</h4>
    <p>Versão mais fácil da prancha lateral pra quem está começando.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Apoie o antebraço e os joelhos no chão</li>
      <li>Levante o quadril mantendo os joelhos apoiados</li>
      <li>Corpo reto da cabeça até os joelhos</li>
      <li>Mantenha a posição</li>
    </ol>
    <h4>Por que é bom:</h4>
    <ul>
      <li>Fortalece a lateral da barriga</li>
      <li>Melhora a estabilidade</li>
      <li>Preparação pra prancha lateral completa</li>
    </ul>
  `,

	Perdigueiro: `
    <h4>Como começar:</h4>
    <p>Posição de quatro apoios (mãos e joelhos no chão).</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Estique o braço direito e a perna esquerda ao mesmo tempo</li>
      <li>Segure por 2-3 segundos</li>
      <li>Volte na posição inicial</li>
      <li>Repita com braço esquerdo e perna direita</li>
    </ol>
    <h4>Foco:</h4>
    <ul>
      <li>Estabilidade da barriga</li>
      <li>Coordenação</li>
      <li>Fortalecimento dos músculos da postura</li>
    </ul>
  `,

	"Pular Corda": `
    <h4>Como começar:</h4>
    <p>Pés juntos, corda atrás dos pés, mãos na altura da cintura.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Gire a corda com os pulsos, não com os braços</li>
      <li>Pule só o suficiente pra corda passar</li>
      <li>Fique na ponta dos pés</li>
      <li>Respire no ritmo</li>
    </ol>
    <h4>Variações:</h4>
    <ul>
      <li>Pés alternados</li>
      <li>Dois pulos por giro</li>
      <li>Pulos pros lados</li>
    </ul>
  `,

	"Polichinelo Adaptado": `
    <h4>Como começar:</h4>
    <p>Pés juntos, braços do lado do corpo.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Pule abrindo as pernas e levantando os braços</li>
      <li>Pule voltando na posição inicial</li>
      <li>Mantenha um ritmo constante</li>
      <li>Adaptação: sem pular, só passo pro lado</li>
    </ol>
    <h4>Adaptações:</h4>
    <ul>
      <li><strong>Baixo impacto:</strong> Passo pro lado sem pular</li>
      <li><strong>Médio impacto:</strong> Só os braços sobem</li>
      <li><strong>Alto impacto:</strong> Pulos bem explosivos</li>
    </ul>
  `,

	"Afundo (Lunge)": `
    <h4>Como começar:</h4>
    <p>Pés na largura dos quadris, em pé bem reto.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Dê um passo grande pra frente</li>
      <li>Baixe o corpo até os dois joelhos ficarem em 90°</li>
      <li>Joelho de trás quase encosta no chão</li>
      <li>Empurre o calcanhar da frente pra voltar</li>
    </ol>
    <h4>Pontos importantes:</h4>
    <ul>
      <li>Joelho da frente não passa da ponta do pé</li>
      <li>Tronco sempre reto</li>
      <li>Peso distribuído nas duas pernas</li>
    </ul>
  `,

	"Escada de Agilidade": `
    <h4>Material:</h4>
    <p>Escada de agilidade no chão ou cones/marcadores.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Um pé por quadrado, movimento rápido</li>
      <li>Fique na ponta dos pés</li>
      <li>Braços ajudam no equilíbrio</li>
      <li>Olhe sempre pra frente</li>
    </ol>
    <h4>Variações:</h4>
    <ul>
      <li>Dois pés por quadrado</li>
      <li>Movimento de lado</li>
      <li>Dentro-fora-dentro</li>
    </ul>
  `,

	"Marcha com Toque no Cone": `
    <h4>Material:</h4>
    <p>Cones ou objetos pra marcar.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Marche no lugar levantando bem os joelhos</li>
      <li>Toque nos cones/objetos alternadamente</li>
      <li>Mantenha o ritmo constante</li>
      <li>Coordene braços e pernas</li>
    </ol>
    <h4>Por que é bom:</h4>
    <ul>
      <li>Coordenação motora</li>
      <li>Ativação cardiovascular</li>
      <li>Aquecimento das articulações</li>
    </ul>
  `,

	"Deslocamento Lateral c/ Toque": `
    <h4>Como começar:</h4>
    <p>Pés na largura dos ombros, um pouco agachado.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Desloque pros lados mantendo a postura baixa</li>
      <li>Toque o chão ou cone com a mão</li>
      <li>Mantenha o peso nos calcanhares</li>
      <li>Alterne as direções</li>
    </ol>
    <h4>Foco:</h4>
    <ul>
      <li>Estabilidade lateral</li>
      <li>Fortalecimento das pernas</li>
      <li>Melhora da agilidade</li>
    </ul>
  `,

	"Zig-Zag com Cones": `
    <h4>Material:</h4>
    <p>Cones ou marcadores em linha.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Corra em zig-zag entre os cones</li>
      <li>Mantenha velocidade constante</li>
      <li>Baixe o centro de gravidade nas curvas</li>
      <li>Use os braços pro equilíbrio</li>
    </ol>
    <h4>Variações:</h4>
    <ul>
      <li>Corrida pra frente</li>
      <li>Corrida de lado</li>
      <li>Corrida pra trás</li>
    </ul>
  `,

	"Abdominais (Crunch)": `
    <h4>Como começar:</h4>
    <p>Deite de costas, joelhos dobrados, mãos atrás da cabeça.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Contraia a barriga trazendo o peito pros joelhos</li>
      <li>Levante só os ombros do chão</li>
      <li>Solte o ar durante a contração</li>
      <li>Desça devagar</li>
    </ol>
    <h4>Erros comuns:</h4>
    <ul>
      <li>Puxar o pescoço com as mãos</li>
      <li>Levantar muito do chão</li>
      <li>Fazer movimento muito rápido</li>
    </ul>
  `,

	"Super-homem": `
    <h4>Como começar:</h4>
    <p>Deite de barriga pra baixo, braços esticados pra frente.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Levante braços, peito e pernas ao mesmo tempo</li>
      <li>Segure por 2-3 segundos</li>
      <li>Contraia bem o bumbum e músculos das costas</li>
      <li>Desça devagar</li>
    </ol>
    <h4>Por que é bom:</h4>
    <ul>
      <li>Fortalece a parte de trás do corpo</li>
      <li>Melhora a postura</li>
      <li>Equilibra com exercícios da frente</li>
    </ul>
  `,

	"Elevação de Pernas": `
    <h4>Como começar:</h4>
    <p>Deite de costas, pernas esticadas, mãos do lado do corpo.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Levante as pernas até ficarem perpendiculares ao chão</li>
      <li>Mantenha as pernas retas ou um pouco flexionadas</li>
      <li>Desça devagar sem encostar no chão</li>
      <li>Mantenha a lombar grudada no chão</li>
    </ol>
    <h4>Músculos que trabalham:</h4>
    <ul>
      <li>Parte de baixo da barriga</li>
      <li>Flexores do quadril</li>
      <li>Core profundo</li>
    </ul>
  `,

	"Corrida Estacionária": `
    <h4>Como começar:</h4>
    <p>Pés na largura dos quadris, bem ereto.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Corra no lugar levantando bem os joelhos</li>
      <li>Fique na ponta dos pés</li>
      <li>Movimente os braços naturalmente</li>
      <li>Mantenha ritmo constante</li>
    </ol>
    <h4>Variações:</h4>
    <ul>
      <li>Joelhos bem altos</li>
      <li>Calcanhares no bumbum</li>
      <li>Velocidade variável</li>
    </ul>
  `,

	Burpee: `
    <h4>Como começar:</h4>
    <p>Em pé, pés na largura dos ombros.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Agache e apoie as mãos no chão</li>
      <li>Pule com os pés pra trás (posição de flexão)</li>
      <li>Faça uma flexão (opcional)</li>
      <li>Pule com os pés de volta perto das mãos</li>
      <li>Pule pra cima com braços esticados</li>
    </ol>
    <h4>Adaptações:</h4>
    <ul>
      <li><strong>Iniciante:</strong> Sem flexão e sem pulo final</li>
      <li><strong>Intermediário:</strong> Com flexão</li>
      <li><strong>Avançado:</strong> Adicionar pulos pros lados</li>
    </ul>
  `,

	"Mergulho (Dips)": `
    <h4>Como começar:</h4>
    <p>Sente na beira de uma cadeira/banco, mãos apoiadas do lado do corpo.</p>
    <h4>Como fazer:</h4>
    <ol>
      <li>Deslize o corpo pra fora da cadeira</li>
      <li>Baixe o corpo dobrando os cotovelos</li>
      <li>Desça até os cotovelos ficarem em 90°</li>
      <li>Empurre pra voltar na posição inicial</li>
    </ol>
    <h4>Músculos que trabalham:</h4>
    <ul>
      <li>Tríceps (principal)</li>
      <li>Peitorais</li>
      <li>Parte da frente do ombro</li>
    </ul>
  `,
};

export const achievementsData: AchievementData = {
	// ===== CONQUISTAS DE INÍCIO =====
	"primeiro-treino": {
		title: "Primeiro Passo",
		description: "Você completou o seu primeiro treino. A jornada começou!",
		unlocked: false,
		icon: "🚀",
		category: "inicio",
		difficulty: "bronze",
	},
	"primeira-semana": {
		title: "Semana de Arranque",
		description:
			"Você completou 3 treinos numa semana. O hábito está se formando!",
		unlocked: false,
		icon: "🗓️",
		category: "inicio",
		difficulty: "bronze",
	},
	"sequencia-3": {
		title: "Ritmo Criado",
		description: "Você treinou 3 dias seguidos. A consistência é a chave!",
		unlocked: false,
		icon: "🔥",
		category: "consistencia",
		difficulty: "bronze",
	},

	// ===== CONQUISTAS DE CONSISTÊNCIA =====
	"dez-treinos": {
		title: "Construtor de Hábitos",
		description:
			"Você completou 10 treinos. O exercício está virando parte da sua vida!",
		unlocked: false,
		icon: "💪",
		category: "consistencia",
		difficulty: "bronze",
	},
	"vinte-cinco-treinos": {
		title: "Dedicação Sólida",
		description: "Você completou 25 treinos. O seu compromisso é admirável!",
		unlocked: false,
		icon: "💎",
		category: "consistencia",
		difficulty: "prata",
	},
	"cinquenta-treinos": {
		title: "Meio Século",
		description:
			"Você completou 50 treinos. Você é oficialmente um praticante dedicado!",
		unlocked: false,
		icon: "⭐",
		category: "consistencia",
		difficulty: "prata",
	},
	"cem-treinos": {
		title: "Centena Dourada",
		description:
			"Você completou 100 treinos. Você é um verdadeiro atleta caseiro!",
		unlocked: false,
		icon: "🥇",
		category: "consistencia",
		difficulty: "ouro",
	},
	"duzentos-treinos": {
		title: "Mestre do Movimento",
		description: "Você completou 200 treinos. A sua dedicação é inspiradora!",
		unlocked: false,
		icon: "👑",
		category: "consistencia",
		difficulty: "platina",
	},

	// ===== CONQUISTAS DE SEQUÊNCIAS =====
	"sequencia-7": {
		title: "Semana Perfeita",
		description: "Você treinou 7 dias seguidos. Imparável!",
		unlocked: false,
		icon: "🌟",
		category: "sequencia",
		difficulty: "prata",
	},
	"sequencia-14": {
		title: "Quinzena de Ferro",
		description: "Você treinou 14 dias seguidos. A sua determinação é de aço!",
		unlocked: false,
		icon: "🛡️",
		category: "sequencia",
		difficulty: "ouro",
	},
	"sequencia-30": {
		title: "Mês Épico",
		description: "Você treinou 30 dias seguidos. Você é uma lenda!",
		unlocked: false,
		icon: "🏆",
		category: "sequencia",
		difficulty: "platina",
	},

	// ===== CONQUISTAS MENSAIS =====
	"mes-perfeito": {
		title: "Mês Consistente",
		description: "Você completou 12 treinos num mês. Ritmo excelente!",
		unlocked: false,
		icon: "🗓️",
		category: "mensal",
		difficulty: "prata",
	},
	"mes-intenso": {
		title: "Mês Intenso",
		description: "Você completou 20 treinos num mês. Dedicação total!",
		unlocked: false,
		icon: "🔥",
		category: "mensal",
		difficulty: "ouro",
	},
	"tres-meses": {
		title: "Trimestre Sólido",
		description: "Você manteve a consistência por 3 meses seguidos.",
		unlocked: false,
		icon: "📅",
		category: "mensal",
		difficulty: "ouro",
	},
	"seis-meses": {
		title: "Meio Ano de Vitórias",
		description: "Você manteve o hábito por 6 meses. Você é um exemplo!",
		unlocked: false,
		icon: "🎯",
		category: "mensal",
		difficulty: "platina",
	},

	// ===== CONQUISTAS ANUAIS =====
	"primeiro-ano": {
		title: "Veterano de Um Ano",
		description:
			"Você completou um ano inteiro de treinos. Isso já é um estilo de vida!",
		unlocked: false,
		icon: "🎂",
		category: "anual",
		difficulty: "platina",
	},
	"ano-300": {
		title: "Ano Épico",
		description: "Você completou mais de 300 treinos num ano. Extraordinário!",
		unlocked: false,
		icon: "🚀",
		category: "anual",
		difficulty: "diamante",
	},
	"dois-anos": {
		title: "Bienal de Sucesso",
		description: "Dois anos de dedicação. Você é um verdadeiro atleta!",
		unlocked: false,
		icon: "💫",
		category: "anual",
		difficulty: "diamante",
	},

	// ===== CONQUISTAS DE PARCERIA =====
	"parceria-5": {
		title: "Dupla Dinâmica",
		description: "Vocês treinaram juntos 5 vezes. A parceria fortalece!",
		unlocked: false,
		icon: "🤝",
		category: "parceria",
		difficulty: "bronze",
	},
	"parceria-20": {
		title: "Equipe Unida",
		description:
			"Vocês treinaram juntos 20 vezes. Unidos vocês são mais fortes!",
		unlocked: false,
		icon: "💑",
		category: "parceria",
		difficulty: "prata",
	},
	"parceria-50": {
		title: "Parceiros de Vida",
		description: "Vocês treinaram juntos 50 vezes. Inspiradores!",
		unlocked: false,
		icon: "👫",
		category: "parceria",
		difficulty: "ouro",
	},
	"parceria-100": {
		title: "Alma Gêmea do Treino",
		description: "Vocês treinaram juntos 100 vezes. Parceria perfeita!",
		unlocked: false,
		icon: "💞",
		category: "parceria",
		difficulty: "platina",
	},

	// ===== CONQUISTAS ESPECÍFICAS DELE =====
	"ele-resistencia": {
		title: "Resistência de Ferro",
		description:
			"Você completou 20 treinos de condicionamento. O seu fôlego melhorou!",
		unlocked: false,
		icon: "🏃‍♂️",
		category: "ele",
		difficulty: "prata",
	},
	"ele-forca": {
		title: "Força Bruta",
		description:
			"Você completou 50 treinos focados em força. Você está mais forte!",
		unlocked: false,
		icon: "💪",
		category: "ele",
		difficulty: "ouro",
	},
	"ele-atleta": {
		title: "Atleta Caseiro",
		description:
			"Você completou 100 treinos de condicionamento. Você é um atleta!",
		unlocked: false,
		icon: "🥇",
		category: "ele",
		difficulty: "platina",
	},

	// ===== CONQUISTAS ESPECÍFICAS DELA =====
	"ela-transformacao": {
		title: "Transformação Visível",
		description:
			"Você completou 30 treinos de emagrecimento. A mudança é real!",
		unlocked: false,
		icon: "✨",
		category: "ela",
		difficulty: "prata",
	},
	"ela-saude": {
		title: "Saúde Radiante",
		description:
			"Você completou 60 treinos focados em saúde. Você está brilhando!",
		unlocked: false,
		icon: "🌟",
		category: "ela",
		difficulty: "ouro",
	},
	"ela-guerreira": {
		title: "Guerreira da Saúde",
		description: "Você completou 120 treinos. Você é uma inspiração!",
		unlocked: false,
		icon: "👸",
		category: "ela",
		difficulty: "platina",
	},

	// ===== CONQUISTAS DE MARCOS ESPECIAIS =====
	madrugador: {
		title: "Madrugador Dedicado",
		description: "Você completou 10 treinos antes das 7h. Disciplina matinal!",
		unlocked: false,
		icon: "🌅",
		category: "especial",
		difficulty: "prata",
	},
	noturno: {
		title: "Guerreiro da Noite",
		description:
			"Você completou 10 treinos depois das 20h. Determinação noturna!",
		unlocked: false,
		icon: "🌙",
		category: "especial",
		difficulty: "prata",
	},
	"fim-de-semana": {
		title: "Fim de Semana Ativo",
		description:
			"Você treinou 20 fins de semana. Não há descanso pros campeões!",
		unlocked: false,
		icon: "🎉",
		category: "especial",
		difficulty: "ouro",
	},
	superacao: {
		title: "Superação Total",
		description: "Você treinou mesmo quando não queria. Isso é caráter!",
		unlocked: false,
		icon: "🦾",
		category: "especial",
		difficulty: "ouro",
	},

	// ===== CONQUISTAS ÉPICAS (LONGO PRAZO) =====
	"lenda-500": {
		title: "Lenda dos 500",
		description: "Você completou 500 treinos. Você é uma lenda absoluta!",
		unlocked: false,
		icon: "👑",
		category: "lenda",
		difficulty: "diamante",
	},
	"mil-treinos": {
		title: "Rei/Rainha dos Mil",
		description: "Você completou 1000 treinos. Status de imortal!",
		unlocked: false,
		icon: "🏰",
		category: "lenda",
		difficulty: "diamante",
	},
	"cinco-anos": {
		title: "Mestre de Cinco Anos",
		description: "Cinco anos de dedicação. Você é um exemplo pra gerações!",
		unlocked: false,
		icon: "🌟",
		category: "lenda",
		difficulty: "diamante",
	},
	lifestyle: {
		title: "Lifestyle Definitivo",
		description:
			"O treino faz parte da sua identidade. Você é inspiração pura!",
		unlocked: false,
		icon: "💎",
		category: "lenda",
		difficulty: "diamante",
	},
};
