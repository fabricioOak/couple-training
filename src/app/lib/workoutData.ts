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
    <h4>Posição Inicial:</h4>
    <p>Pés à largura dos ombros, dedos ligeiramente apontados para fora. Costas retas, peito aberto.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Inicie empurrando as ancas para trás e para baixo</li>
      <li>Mantenha o peso nos calcanhares</li>
      <li>Desça até as coxas ficarem paralelas ao chão</li>
      <li>Empurre o chão para voltar à posição inicial</li>
    </ol>
    <h4>Pontos Importantes:</h4>
    <ul>
      <li>Joelhos alinhados com os pés</li>
      <li>Peito sempre aberto</li>
      <li>Não deixe os joelhos ultrapassarem muito as pontas dos pés</li>
    </ul>
  `,

	"Agachamento Isométrico": `
    <h4>Posição Inicial:</h4>
    <p>Mesmo que o agachamento normal, mas com apoio nas costas numa parede.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Desça até a posição de agachamento (coxas paralelas)</li>
      <li>Mantenha a posição pelo tempo determinado</li>
      <li>Respire normalmente durante toda a execução</li>
      <li>Mantenha toda a tensão nos músculos</li>
    </ol>
    <h4>Benefícios:</h4>
    <ul>
      <li>Desenvolve força e resistência muscular</li>
      <li>Melhora a estabilidade</li>
      <li>Excelente para iniciantes</li>
    </ul>
  `,

	"Flexão de Braços": `
    <h4>Posição Inicial:</h4>
    <p>Prancha alta, mãos um pouco mais largas que os ombros. Corpo em linha reta.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Contraia abdómen e glúteos</li>
      <li>Baixe o corpo até o peito quase tocar o chão</li>
      <li>Cotovelos a 45-60 graus do corpo</li>
      <li>Empurre o chão para voltar</li>
    </ol>
    <h4>Variações:</h4>
    <ul>
      <li><strong>Iniciante:</strong> Joelhos apoiados</li>
      <li><strong>Intermediário:</strong> Pés elevados</li>
      <li><strong>Avançado:</strong> Uma mão ou diamante</li>
    </ul>
  `,

	"Flexão com Joelhos": `
    <h4>Posição Inicial:</h4>
    <p>Igual à flexão normal, mas com os joelhos apoiados no chão.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Joelhos no chão, corpo reto da cabeça aos joelhos</li>
      <li>Mãos ligeiramente mais largas que os ombros</li>
      <li>Baixe o peito em direção ao chão</li>
      <li>Empurre para voltar à posição inicial</li>
    </ol>
    <h4>Dicas:</h4>
    <ul>
      <li>Mantenha o core contraído</li>
      <li>Não arqueie as costas</li>
      <li>Progressão natural para flexões completas</li>
    </ul>
  `,

	"Flexão Inclinada": `
    <h4>Posição Inicial:</h4>
    <p>Mãos apoiadas numa superfície elevada (sofá, cadeira, mesa).</p>
    <h4>Execução:</h4>
    <ol>
      <li>Corpo em linha reta, pés no chão</li>
      <li>Quanto mais alta a superfície, mais fácil</li>
      <li>Baixe o peito em direção à superfície</li>
      <li>Empurre para voltar</li>
    </ol>
    <h4>Progressão:</h4>
    <ul>
      <li>Comece com superfície mais alta</li>
      <li>Vá baixando gradualmente</li>
      <li>Objetivo: chegar ao chão</li>
    </ul>
  `,

	"Flexão Declinada": `
    <h4>Posição Inicial:</h4>
    <p>Pés elevados numa superfície (sofá, cadeira), mãos no chão.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Corpo em linha reta, pés elevados</li>
      <li>Mãos ligeiramente mais largas que os ombros</li>
      <li>Baixe o peito em direção ao chão</li>
      <li>Empurre para voltar</li>
    </ol>
    <h4>Atenção:</h4>
    <ul>
      <li>Exercício avançado - mais difícil que flexão normal</li>
      <li>Trabalha mais a parte superior do peito</li>
      <li>Exige mais força nos ombros</li>
    </ul>
  `,

	"Ponte de Glúteos": `
    <h4>Posição Inicial:</h4>
    <p>Deitado de costas, joelhos dobrados, pés próximos aos glúteos.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Empurre os calcanhares contra o chão</li>
      <li>Levante as ancas contraindo os glúteos</li>
      <li>Forme linha reta dos ombros aos joelhos</li>
      <li>Pause 1-2 segundos no topo</li>
    </ol>
    <h4>Músculos Trabalhados:</h4>
    <ul>
      <li>Glúteos (principal)</li>
      <li>Isquiotibiais</li>
      <li>Core</li>
    </ul>
  `,

	"Ponte de Glúteos Unilateral": `
    <h4>Posição Inicial:</h4>
    <p>Igual à ponte normal, mas com um pé elevado ou uma perna estendida.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Levante uma perna ou apoie num banco</li>
      <li>Execute a ponte com apenas uma perna</li>
      <li>Foque na contração do glúteo da perna de apoio</li>
      <li>Mantenha o equilíbrio</li>
    </ol>
    <h4>Benefícios:</h4>
    <ul>
      <li>Maior ativação muscular</li>
      <li>Melhora o equilíbrio</li>
      <li>Corrige desequilíbrios</li>
    </ul>
  `,

	"Elevação Pélvica Unilateral": `
    <h4>Posição Inicial:</h4>
    <p>Deitado de costas, um pé no chão, outro elevado.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Mantenha uma perna estendida no ar</li>
      <li>Levante a pélvis usando apenas a perna de apoio</li>
      <li>Contraia bem o glúteo da perna que trabalha</li>
      <li>Desça controladamente</li>
    </ol>
    <h4>Dicas:</h4>
    <ul>
      <li>Movimente apenas a pélvis</li>
      <li>Mantenha a perna elevada estável</li>
      <li>Foque na qualidade, não na quantidade</li>
    </ul>
  `,

	"Prancha Isométrica": `
    <h4>Posição Inicial:</h4>
    <p>Antebraços no chão, cotovelos sob os ombros. Corpo em linha reta.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Contraia abdómen e glúteos</li>
      <li>Mantenha linha reta da cabeça aos calcanhares</li>
      <li>Respire constantemente</li>
      <li>Segure pelo tempo determinado</li>
    </ol>
    <h4>Erros Comuns:</h4>
    <ul>
      <li>Levantar muito o quadril</li>
      <li>Deixar o quadril cair</li>
      <li>Tensionar demais o pescoço</li>
    </ul>
  `,

	"Prancha Lateral": `
    <h4>Posição Inicial:</h4>
    <p>Deitado de lado, apoiado no antebraço, corpo em linha reta.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Antebraço perpendicular ao corpo</li>
      <li>Levante o quadril do chão</li>
      <li>Forme linha reta dos pés à cabeça</li>
      <li>Mantenha a posição</li>
    </ol>
    <h4>Progressões:</h4>
    <ul>
      <li><strong>Iniciante:</strong> Joelhos apoiados</li>
      <li><strong>Intermediário:</strong> Pés empilhados</li>
      <li><strong>Avançado:</strong> Perna superior elevada</li>
    </ul>
  `,

	"Prancha Lateral com Joelho": `
    <h4>Posição Inicial:</h4>
    <p>Versão modificada da prancha lateral para iniciantes.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Apoie o antebraço e os joelhos no chão</li>
      <li>Levante o quadril mantendo joelhos apoiados</li>
      <li>Corpo reto da cabeça aos joelhos</li>
      <li>Mantenha a posição</li>
    </ol>
    <h4>Benefícios:</h4>
    <ul>
      <li>Fortalece o core lateral</li>
      <li>Melhora a estabilidade</li>
      <li>Preparação para prancha lateral completa</li>
    </ul>
  `,

	Perdigueiro: `
    <h4>Posição Inicial:</h4>
    <p>Posição de quatro apoios (mãos e joelhos).</p>
    <h4>Execução:</h4>
    <ol>
      <li>Estenda braço direito e perna esquerda simultaneamente</li>
      <li>Mantenha por 2-3 segundos</li>
      <li>Volte à posição inicial</li>
      <li>Repita com braço esquerdo e perna direita</li>
    </ol>
    <h4>Foco:</h4>
    <ul>
      <li>Estabilidade do core</li>
      <li>Coordenação</li>
      <li>Fortalecimento dos músculos posturais</li>
    </ul>
  `,

	"Pular Corda": `
    <h4>Posição Inicial:</h4>
    <p>Pés juntos, corda atrás dos pés, mãos na altura da cintura.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Gire a corda com os pulsos, não com os braços</li>
      <li>Salte apenas o suficiente para a corda passar</li>
      <li>Mantenha-se na ponta dos pés</li>
      <li>Respire ritmicamente</li>
    </ol>
    <h4>Variações:</h4>
    <ul>
      <li>Pés alternados</li>
      <li>Dois saltos por giro</li>
      <li>Saltos laterais</li>
    </ul>
  `,

	"Polichinelo Adaptado": `
    <h4>Posição Inicial:</h4>
    <p>Pés juntos, braços ao lado do corpo.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Salte abrindo pernas e levantando braços</li>
      <li>Salte voltando à posição inicial</li>
      <li>Mantenha ritmo constante</li>
      <li>Adaptação: sem salto, apenas passo lateral</li>
    </ol>
    <h4>Adaptações:</h4>
    <ul>
      <li><strong>Baixo impacto:</strong> Passo lateral sem salto</li>
      <li><strong>Meio impacto:</strong> Só os braços sobem</li>
      <li><strong>Alto impacto:</strong> Saltos explosivos</li>
    </ul>
  `,

	"Afundo (Lunge)": `
    <h4>Posição Inicial:</h4>
    <p>Pés à largura dos quadris, postura ereta.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Dê um passo grande à frente</li>
      <li>Baixe o corpo até ambos os joelhos ficarem a 90°</li>
      <li>Joelho de trás quase toca o chão</li>
      <li>Empurre o calcanhar da frente para voltar</li>
    </ol>
    <h4>Pontos Importantes:</h4>
    <ul>
      <li>Joelho da frente não ultrapassa o pé</li>
      <li>Tronco sempre ereto</li>
      <li>Peso distribuído entre as duas pernas</li>
    </ul>
  `,

	"Escada de Agilidade": `
    <h4>Equipamento:</h4>
    <p>Escada de agilidade no chão ou cones/marcadores.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Um pé por quadrado, movimento rápido</li>
      <li>Mantenha-se na ponta dos pés</li>
      <li>Braços ajudam no equilíbrio</li>
      <li>Olhe sempre para frente</li>
    </ol>
    <h4>Variações:</h4>
    <ul>
      <li>Dois pés por quadrado</li>
      <li>Lateral (sideways)</li>
      <li>Dentro-fora-dentro</li>
    </ul>
  `,

	"Marcha com Toque no Cone": `
    <h4>Equipamento:</h4>
    <p>Cones ou objetos para marcar.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Marche no lugar elevando bem os joelhos</li>
      <li>Toque alternadamente nos cones/objetos</li>
      <li>Mantenha o ritmo constante</li>
      <li>Coordene braços e pernas</li>
    </ol>
    <h4>Benefícios:</h4>
    <ul>
      <li>Coordenação motora</li>
      <li>Ativação cardiovascular</li>
      <li>Aquecimento articular</li>
    </ul>
  `,

	"Deslocamento Lateral c/ Toque": `
    <h4>Posição Inicial:</h4>
    <p>Pés à largura dos ombros, ligeiramente agachado.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Desloque-se lateralmente mantendo postura baixa</li>
      <li>Toque o chão ou cone com a mão</li>
      <li>Mantenha o peso nos calcanhares</li>
      <li>Alterne as direções</li>
    </ol>
    <h4>Foco:</h4>
    <ul>
      <li>Estabilidade lateral</li>
      <li>Fortalecimento das pernas</li>
      <li>Melhoria da agilidade</li>
    </ul>
  `,

	"Zig-Zag com Cones": `
    <h4>Equipamento:</h4>
    <p>Cones ou marcadores dispostos em linha.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Corra em zig-zag entre os cones</li>
      <li>Mantenha velocidade constante</li>
      <li>Baixe o centro de gravidade nas curvas</li>
      <li>Use os braços para equilíbrio</li>
    </ol>
    <h4>Variações:</h4>
    <ul>
      <li>Corrida para frente</li>
      <li>Corrida lateral</li>
      <li>Corrida para trás</li>
    </ul>
  `,

	"Abdominais (Crunch)": `
    <h4>Posição Inicial:</h4>
    <p>Deitado de costas, joelhos dobrados, mãos atrás da cabeça.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Contraia o abdómen trazendo o peito em direção aos joelhos</li>
      <li>Levante apenas os ombros do chão</li>
      <li>Expire durante a contração</li>
      <li>Desça controladamente</li>
    </ol>
    <h4>Erros Comuns:</h4>
    <ul>
      <li>Puxar o pescoço com as mãos</li>
      <li>Levantar muito do chão</li>
      <li>Fazer movimento muito rápido</li>
    </ul>
  `,

	"Super-homem": `
    <h4>Posição Inicial:</h4>
    <p>Deitado de barriga para baixo, braços estendidos à frente.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Levante simultaneamente braços, peito e pernas</li>
      <li>Mantenha por 2-3 segundos</li>
      <li>Contraia glúteos e músculos das costas</li>
      <li>Desça controladamente</li>
    </ol>
    <h4>Benefícios:</h4>
    <ul>
      <li>Fortalece a cadeia posterior</li>
      <li>Melhora a postura</li>
      <li>Contrabalança exercícios frontais</li>
    </ul>
  `,

	"Elevação de Pernas": `
    <h4>Posição Inicial:</h4>
    <p>Deitado de costas, pernas estendidas, mãos ao lado do corpo.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Levante as pernas até ficarem perpendiculares ao chão</li>
      <li>Mantenha as pernas retas ou ligeiramente flexionadas</li>
      <li>Desça controladamente sem tocar o chão</li>
      <li>Mantenha a lombar colada ao chão</li>
    </ol>
    <h4>Músculos Trabalhados:</h4>
    <ul>
      <li>Abdómen inferior</li>
      <li>Flexores do quadril</li>
      <li>Core profundo</li>
    </ul>
  `,

	"Corrida Estacionária": `
    <h4>Posição Inicial:</h4>
    <p>Pés à largura dos quadris, postura ereta.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Corra no lugar elevando bem os joelhos</li>
      <li>Mantenha-se na ponta dos pés</li>
      <li>Movimente os braços naturalmente</li>
      <li>Mantenha ritmo constante</li>
    </ol>
    <h4>Variações:</h4>
    <ul>
      <li>Joelhos altos</li>
      <li>Calcanhares aos glúteos</li>
      <li>Velocidade variável</li>
    </ul>
  `,

	Burpee: `
    <h4>Posição Inicial:</h4>
    <p>Em pé, pés à largura dos ombros.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Agache e apoie as mãos no chão</li>
      <li>Salte com os pés para trás (posição de flexão)</li>
      <li>Faça uma flexão (opcional)</li>
      <li>Salte com os pés de volta para perto das mãos</li>
      <li>Salte para cima com braços estendidos</li>
    </ol>
    <h4>Adaptações:</h4>
    <ul>
      <li><strong>Iniciante:</strong> Sem flexão e sem salto final</li>
      <li><strong>Intermediário:</strong> Com flexão</li>
      <li><strong>Avançado:</strong> Adicionar saltos laterais</li>
    </ul>
  `,

	"Mergulho (Dips)": `
    <h4>Posição Inicial:</h4>
    <p>Sentado na beira de uma cadeira/banco, mãos apoiadas ao lado do corpo.</p>
    <h4>Execução:</h4>
    <ol>
      <li>Deslize o corpo para fora da cadeira</li>
      <li>Baixe o corpo flexionando os cotovelos</li>
      <li>Desça até os cotovelos ficarem a 90°</li>
      <li>Empurre para voltar à posição inicial</li>
    </ol>
    <h4>Músculos Trabalhados:</h4>
    <ul>
      <li>Tríceps (principal)</li>
      <li>Peitorais</li>
      <li>Deltoides anterior</li>
    </ul>
  `,
};

export const achievementsData: AchievementData = {
	// ===== CONQUISTAS DE INÍCIO =====
	"primeiro-treino": {
		title: "Primeiro Passo",
		description: "Completaste o teu primeiro treino. A jornada começou!",
		unlocked: false,
		icon: "🚀",
		category: "inicio",
		difficulty: "bronze",
	},
	"primeira-semana": {
		title: "Semana de Arranque",
		description:
			"Completaste 3 treinos numa semana. O hábito está a formar-se!",
		unlocked: false,
		icon: "🗓️",
		category: "inicio",
		difficulty: "bronze",
	},
	"sequencia-3": {
		title: "Ritmo Criado",
		description: "Treinaste 3 dias consecutivos. A consistência é a chave!",
		unlocked: false,
		icon: "🔥",
		category: "consistencia",
		difficulty: "bronze",
	},

	// ===== CONQUISTAS DE CONSISTÊNCIA =====
	"dez-treinos": {
		title: "Construtor de Hábitos",
		description:
			"Completaste 10 treinos. O exercício está a tornar-se parte da tua vida!",
		unlocked: false,
		icon: "💪",
		category: "consistencia",
		difficulty: "bronze",
	},
	"vinte-cinco-treinos": {
		title: "Dedicação Sólida",
		description: "Completaste 25 treinos. O teu compromisso é admirável!",
		unlocked: false,
		icon: "💎",
		category: "consistencia",
		difficulty: "prata",
	},
	"cinquenta-treinos": {
		title: "Meio Século",
		description:
			"Completaste 50 treinos. És oficialmente um praticante dedicado!",
		unlocked: false,
		icon: "⭐",
		category: "consistencia",
		difficulty: "prata",
	},
	"cem-treinos": {
		title: "Centena Dourada",
		description: "Completaste 100 treinos. És um verdadeiro atleta caseiro!",
		unlocked: false,
		icon: "🥇",
		category: "consistencia",
		difficulty: "ouro",
	},
	"duzentos-treinos": {
		title: "Mestre do Movimento",
		description: "Completaste 200 treinos. A tua dedicação é inspiradora!",
		unlocked: false,
		icon: "👑",
		category: "consistencia",
		difficulty: "platina",
	},

	// ===== CONQUISTAS DE SEQUÊNCIAS =====
	"sequencia-7": {
		title: "Semana Perfeita",
		description: "Treinaste 7 dias consecutivos. Imparável!",
		unlocked: false,
		icon: "🌟",
		category: "sequencia",
		difficulty: "prata",
	},
	"sequencia-14": {
		title: "Quinzena de Ferro",
		description: "Treinaste 14 dias consecutivos. A tua determinação é de aço!",
		unlocked: false,
		icon: "🛡️",
		category: "sequencia",
		difficulty: "ouro",
	},
	"sequencia-30": {
		title: "Mês Épico",
		description: "Treinaste 30 dias consecutivos. És uma lenda!",
		unlocked: false,
		icon: "🏆",
		category: "sequencia",
		difficulty: "platina",
	},

	// ===== CONQUISTAS MENSAIS =====
	"mes-perfeito": {
		title: "Mês Consistente",
		description: "Completaste 12 treinos num mês. Excelente ritmo!",
		unlocked: false,
		icon: "🗓️",
		category: "mensal",
		difficulty: "prata",
	},
	"mes-intenso": {
		title: "Mês Intenso",
		description: "Completaste 20 treinos num mês. Dedicação total!",
		unlocked: false,
		icon: "🔥",
		category: "mensal",
		difficulty: "ouro",
	},
	"tres-meses": {
		title: "Trimestre Sólido",
		description: "Mantiveste consistência por 3 meses seguidos.",
		unlocked: false,
		icon: "📅",
		category: "mensal",
		difficulty: "ouro",
	},
	"seis-meses": {
		title: "Meio Ano de Vitórias",
		description: "Mantiveste o hábito por 6 meses. És um exemplo!",
		unlocked: false,
		icon: "🎯",
		category: "mensal",
		difficulty: "platina",
	},

	// ===== CONQUISTAS ANUAIS =====
	"primeiro-ano": {
		title: "Veterano de Um Ano",
		description:
			"Completaste um ano inteiro de treinos. És oficialmente um lifestyle!",
		unlocked: false,
		icon: "🎂",
		category: "anual",
		difficulty: "platina",
	},
	"ano-300": {
		title: "Ano Épico",
		description: "Completaste mais de 300 treinos num ano. Extraordinário!",
		unlocked: false,
		icon: "🚀",
		category: "anual",
		difficulty: "diamante",
	},
	"dois-anos": {
		title: "Bienal de Sucesso",
		description: "Dois anos de dedicação. És um verdadeiro atleta!",
		unlocked: false,
		icon: "💫",
		category: "anual",
		difficulty: "diamante",
	},

	// ===== CONQUISTAS DE PARCERIA =====
	"parceria-5": {
		title: "Dupla Dinâmica",
		description: "Treinaram juntos 5 vezes. A parceria fortalece!",
		unlocked: false,
		icon: "🤝",
		category: "parceria",
		difficulty: "bronze",
	},
	"parceria-20": {
		title: "Equipa Unida",
		description: "Treinaram juntos 20 vezes. Unidos somos mais fortes!",
		unlocked: false,
		icon: "💑",
		category: "parceria",
		difficulty: "prata",
	},
	"parceria-50": {
		title: "Parceiros de Vida",
		description: "Treinaram juntos 50 vezes. Inspiradores!",
		unlocked: false,
		icon: "👫",
		category: "parceria",
		difficulty: "ouro",
	},
	"parceria-100": {
		title: "Alma Gémea do Treino",
		description: "Treinaram juntos 100 vezes. Parceria perfeita!",
		unlocked: false,
		icon: "💞",
		category: "parceria",
		difficulty: "platina",
	},

	// ===== CONQUISTAS ESPECÍFICAS DELE =====
	"ele-resistencia": {
		title: "Resistência de Ferro",
		description:
			"Completaste 20 treinos de condicionamento. O teu fôlego melhorou!",
		unlocked: false,
		icon: "🏃‍♂️",
		category: "ele",
		difficulty: "prata",
	},
	"ele-forca": {
		title: "Força Bruta",
		description: "Completaste 50 treinos focados em força. És mais forte!",
		unlocked: false,
		icon: "💪",
		category: "ele",
		difficulty: "ouro",
	},
	"ele-atleta": {
		title: "Atleta Caseiro",
		description: "Completaste 100 treinos de condicionamento. És um atleta!",
		unlocked: false,
		icon: "🥇",
		category: "ele",
		difficulty: "platina",
	},

	// ===== CONQUISTAS ESPECÍFICAS DELA =====
	"ela-transformacao": {
		title: "Transformação Visível",
		description: "Completaste 30 treinos de emagrecimento. A mudança é real!",
		unlocked: false,
		icon: "✨",
		category: "ela",
		difficulty: "prata",
	},
	"ela-saude": {
		title: "Saúde Radiante",
		description: "Completaste 60 treinos focados em saúde. Brilhas!",
		unlocked: false,
		icon: "🌟",
		category: "ela",
		difficulty: "ouro",
	},
	"ela-guerreira": {
		title: "Guerreira da Saúde",
		description: "Completaste 120 treinos. És uma inspiração!",
		unlocked: false,
		icon: "👸",
		category: "ela",
		difficulty: "platina",
	},

	// ===== CONQUISTAS DE MARCOS ESPECIAIS =====
	madrugador: {
		title: "Madrugador Dedicado",
		description: "Completaste 10 treinos antes das 7h. Disciplina matinal!",
		unlocked: false,
		icon: "🌅",
		category: "especial",
		difficulty: "prata",
	},
	noturno: {
		title: "Guerreiro da Noite",
		description: "Completaste 10 treinos depois das 20h. Determinação noturna!",
		unlocked: false,
		icon: "🌙",
		category: "especial",
		difficulty: "prata",
	},
	"fim-de-semana": {
		title: "Fim de Semana Ativo",
		description:
			"Treinaste 20 fins de semana. Não há descanso para os campeões!",
		unlocked: false,
		icon: "🎉",
		category: "especial",
		difficulty: "ouro",
	},
	superacao: {
		title: "Superação Total",
		description: "Treinaste mesmo quando não querias. Isso é caráter!",
		unlocked: false,
		icon: "🦾",
		category: "especial",
		difficulty: "ouro",
	},

	// ===== CONQUISTAS ÉPICAS (LONGO PRAZO) =====
	"lenda-500": {
		title: "Lenda dos 500",
		description: "Completaste 500 treinos. És uma lenda absoluta!",
		unlocked: false,
		icon: "👑",
		category: "lenda",
		difficulty: "diamante",
	},
	"mil-treinos": {
		title: "Rei/Rainha dos Mil",
		description: "Completaste 1000 treinos. Estatuto de imortal!",
		unlocked: false,
		icon: "🏰",
		category: "lenda",
		difficulty: "diamante",
	},
	"cinco-anos": {
		title: "Mestre de Cinco Anos",
		description: "Cinco anos de dedicação. És um exemplo para gerações!",
		unlocked: false,
		icon: "🌟",
		category: "lenda",
		difficulty: "diamante",
	},
	lifestyle: {
		title: "Lifestyle Definitivo",
		description: "O treino faz parte da tua identidade. És inspiração pura!",
		unlocked: false,
		icon: "💎",
		category: "lenda",
		difficulty: "diamante",
	},
};
