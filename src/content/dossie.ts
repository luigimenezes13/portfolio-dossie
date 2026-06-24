/**
 * Mock data local do dossiê — usado enquanto o backend não é atualizado.
 * Reflete o design doc em docs/plans/2026-06-21-dossie-redesign-design.md
 */
import daviCamposAvatar from '../assets/avatars/davi-campos.jpg';
import gustavoZorzoAvatar from '../assets/avatars/gustavo-zorzo.jpg';
import matheusAlmeidaAvatar from '../assets/avatars/matheus-almeida.jpg';
import brendaQuadrosAvatar from '../assets/avatars/brenda-quadros.jpg';
import jonathanBaumgartenAvatar from '../assets/avatars/jonathan-baumgarten.jpg';
import deniseSantosAvatar from '../assets/avatars/denise-santos.jpg';

export type Prova = {
  type: string;
  titulo: string;
  corpo: string;
  pife: string[];
  champ: string[];
  featured?: boolean;
  metric?: { value: string; unit: string; context: string };
  quote?: { texto: string; autor: string; cargo?: string };
  avatar?: { iniciais: string; nome: string; url?: string };
  milestone?: { label: string; date: string; meta?: string; oficial?: boolean };
  link?: { href: string; label: string };
  anchor?: string;
  stakeholders?: Array<{ nome: string; area?: string; iniciais: string; url?: string }>;
};

export type Growth = {
  letra: string;
  titulo: string;
  citacao: string;
  abertura: string;
  provas: Prova[];
  encerramento: string;
};

const growths: Growth[] = [
    {
      letra: 'G',
      titulo: 'GTM TO LEARN FASTER',
      citacao: 'Lançamos pequeno, medimos, aprendemos e escalamos. Cada fracasso é aprendizado, cada sucesso é hipótese validada.',
      abertura:
        'GTM, na V4, é ir ao mercado para aprender mais rápido. O meu "mercado" foi o ecossistema interno: sete times em quinze meses, cada um um ciclo de hipótese, entrega e ajuste.',
      provas: [
        {
          type: 'metric',
          metric: { value: '7', unit: 'ciclos GTM', context: 'em 15 meses · 1 por contexto' },
          titulo: '7 ciclos GTM em 15 meses',
          corpo:
            'Produto (Finance) mar/25 → mai/25 · Workforce + HOps mai/25 → set/25 · Contratos set/25 → nov/25 · Financeiro 1ª nov/25 → fev/26 · CRM fev/26 → abr/26 · Pós-Venda abr/26 → jun/26 · Financeiro atual jun/26 → presente. Em cada parada, três perguntas: qual problema esse time resolve · onde estão os gargalos · como meu skill compõe a entrega.',
          pife: ['I', 'F', 'P'],
          champ: ['P'],
        },
        {
          type: 'person',
          titulo: 'Knowledge Pills · ensinar é o GTM mais rápido',
          quote: {
            texto: 'Subiu a primeira PR na stack em pouco mais de um mês.',
            autor: 'GUSTAVO ZORZO',
            cargo: 'estagiário · Pós-Venda',
          },
          corpo:
            'Primeira iniciativa no Pós-Venda foi destilar nossa stack (DDD + Clean Architecture + Event-Driven) em sessões de 30 minutos para os novos estagiários. 6 passaram pela trilha; 2 permaneceram; um deles — Zorzo — entregou em tempo recorde. Curiosidade ávida, raciocínio rápido: a curva foi acelerada também pelo aluno.',
          pife: ['I', 'P'],
          champ: ['P', 'H'],
          avatar: { iniciais: 'GZ', nome: 'Gustavo Zorzo', url: gustavoZorzoAvatar },
        },
        {
          type: 'narrative',
          anchor: 'Aprender o time é parte do GTM.',
          titulo: 'Adaptação por temperamento',
          corpo:
            'CRM, Pós-Venda e Financeiro têm temperamentos distintos. Cada um pede um repertório social diferente: onde no CRM existe debate intenso, no Pós-Venda há cuidado com contexto novo. Cada rotação foi uma calibração de comunicação, não apenas de stack.',
          pife: ['E'],
          champ: [],
        },
      ],
      encerramento: '7 contextos. 6 estagiários treinados. 1ª PR do aluno em <30 dias. GTM observável em ciclo curto.',
    },
    {
      letra: 'R',
      titulo: 'RADICAL CANDOR',
      citacao: 'Verdade desconfortável supera mentira conveniente. O foco é sempre no problema, nunca na pessoa.',
      abertura:
        'Radical Candor não é teoria nem perfil — é evento. Aconteceu no CRM, sob pressão, e foi o aprendizado mais denso de comportamento desde a efetivação.',
      provas: [
        {
          type: 'narrative',
          anchor: 'Não era reclamação. Era diagnóstico.',
          titulo: 'Feedback ao líder · semana atípica + doente',
          corpo:
            'Era a fase de maior tempo de atuação no CRM. Semana atípica. Doente. Em vez de esperar a próxima 1:1, sentei com o líder, trouxe exemplos concretos e substanciais sobre o que estava me travando — e o que eu via que precisava mudar no fluxo do time. O foco esteve no problema, nunca na pessoa.',
          pife: ['E', 'F'],
          champ: [],
        },
        {
          type: 'narrative',
          anchor: 'Acelera o time enquanto o time melhora.',
          titulo: 'A entrega que veio com o feedback',
          corpo:
            'Na mesma semana atípica, completei uma task cross-area (mars-sales + plataforma) que exigia decisões de arquitetura e comunicação direta com outro time. Dar feedback e entregar simultaneamente comprova que Radical Candor não é desculpa pra parar.',
          pife: ['P', 'I'],
          champ: ['H'],
        },
        {
          type: 'narrative',
          anchor: 'Maturidade emocional como pré-requisito de candor.',
          titulo: 'Autogestão pedida ao próprio repertório',
          corpo:
            'Antes do feedback ao líder, o feedback foi pra dentro. Aprendi a me gerir melhor no CRM — calibrar quando puxar tarefa, quando consultar antes, quando entregar e refinar depois. Você não diz verdade desconfortável se não consegue ouvir a sua.',
          pife: ['E'],
          champ: [],
        },
      ],
      encerramento: 'Feedback dado. Task cross-area entregue. Semana doente. Mesma semana.',
    },
    {
      letra: 'O',
      titulo: 'OWNERSHIP',
      citacao:
        'Ownership não é sobre ter competência — é sobre ter coragem de assumir o resultado e colher os frutos como proprietário.',
      abertura:
        'Ownership é a tese central deste dossiê. Aqui não é sobre tarefa entregue — é sobre produto carregado. Dois deles vivem comigo independentemente do time onde eu esteja atuando no momento.',
      provas: [
        {
          type: 'milestone',
          featured: true,
          milestone: {
            label: 'WORKFORCE',
            date: 'set/2025 → presente',
            meta: '10 meses contínuos · 4 times cruzados',
            oficial: true,
          },
          titulo: 'Referência técnica e de produto — além do cargo de Júnior',
          corpo:
            'Cadeira de Júnior, mas na prática **referência técnica e de produto**. Exerci a liderança técnica do produto sem que a função exigisse — defini a **arquitetura-alvo** (para onde o Workforce ia), a autoria das decisões de **integração e Event-Driven** e dos **padrões que o time adotou** como referência. Ajudei a guiar a migração de **3 repos** (backend e frontend do Workforce + contracts) sob esse desenho — o Workforce, praticamente sozinho. Reconhecido como responsável pelo produto na WGO de jun/26. **Fiz mais do que me foi proposto.**',
          pife: ['P', 'I'],
          champ: ['H', 'P'],
        },
        {
          type: 'person',
          titulo: 'LMS · Owner → Co-owner com Matheus',
          quote: {
            texto: 'Ownership compartilhado, não diluído.',
            autor: 'MATHEUS ALMEIDA',
            cargo: 'co-owner LMS · desde mai/26',
          },
          corpo:
            'Owner do LMS de nov/25 → mai/26 (seis meses). Em mai/26 recebi Matheus Almeida como co-owner. Continuo no fluxo de decisão, agora também na curva de onboarding técnico dele.',
          pife: ['P'],
          champ: ['H', 'P'],
          avatar: { iniciais: 'MA', nome: 'Matheus Almeida', url: matheusAlmeidaAvatar },
        },
        {
          type: 'narrative',
          anchor: 'Carreguei as tasks complexas, o contexto histórico, o discovery.',
          titulo: 'Pivô da migração no Pós-Venda',
          corpo:
            'Liderança nova chegou ao Pós-Venda com know-how técnico forte mas pouca contagem de V4. Carreguei a migração técnica do time. Recebi crédito explícito de teammates pelo papel de pivô.',
          pife: ['P', 'I'],
          champ: ['H'],
        },
        {
          type: 'narrative',
          anchor: 'Ownership termina quando o conhecimento foi transferido.',
          titulo: 'Contexto sustentado mesmo após troca de time',
          corpo:
            'Quando saí do Pós-Venda para o Financeiro atual em jun/26, sustentei o contexto do PV em paralelo — porque era o único com a memória completa daquele fluxo. Continuei ajudando o time mesmo "geograficamente" longe.',
          pife: ['E', 'P'],
          champ: [],
        },
        {
          type: 'narrative',
          anchor: 'Ownership não pede licença pra clima ou energia.',
          titulo: 'Task cross-area no CRM mesmo doente',
          corpo:
            'A mesma task do capítulo R. Aqui ela conta por outra razão: coragem de assumir o resultado é independente do estado do dia. Comunicação com plataforma + decisões de arquitetura, entregues sob sintoma.',
          pife: ['E', 'F'],
          champ: ['H'],
        },
        {
          type: 'person',
          titulo: 'Davi Campos · validação externa',
          quote: {
            texto: 'Confio em qualquer entrega sua. Nível de maturidade alto pra sua senioridade. Know-how de V4 imenso.',
            autor: 'DAVI CAMPOS',
            cargo: 'Dev Sênior · CRM',
          },
          corpo:
            'Davi articulou em palavras o que os entregáveis mostravam. Reconhecimento de sênior não muda quem você é — confirma que está visível.',
          pife: ['P', 'I'],
          champ: [],
          avatar: { iniciais: 'DC', nome: 'Davi Campos', url: daviCamposAvatar },
        },
      ],
      encerramento:
        'Liderança técnica de um produto — sem o cargo pedir. Dois produtos sob owner. Arquitetura como **autoria**. Uma validação de sênior. **Pleno é o piso — já opero a direção técnica acima dele.**',
    },
    {
      letra: 'W',
      titulo: 'WORKING BACKWARDS',
      citacao:
        'Working backwards não é sobre o que você consegue construir — é sobre o que o cliente consegue realizar com o que você constrói.',
      abertura:
        'Começo pelo outcome do cliente — interno ou externo — e volto pra solução. Três casos provam o método.',
      provas: [
        {
          type: 'milestone',
          milestone: {
            label: 'SERVICE CART · FIN-647',
            date: 'mai → jun/2026',
            meta: '~13 PRs · Pagar.me · Pix · Boleto · Cartão',
            oficial: true,
          },
          titulo: 'Service Cart · Pagamento na call',
          corpo:
            'Outcome desejado: vendedor fecha o deal na call, com pagamento confirmado antes do desligar. Voltei para a solução: integração Pagar.me completa, fluxo upfront, eventos de pagamento, conciliação. PR #3182 "Pagamento na call" como marco simbólico.',
          pife: ['P'],
          champ: ['C', 'A'],
          link: { href: 'https://github.com/V4-Company/v4company-backend/pull/3182', label: 'PR #3182 →' },
        },
        {
          type: 'narrative',
          anchor: 'O que esse time precisa realizar antes de como vamos implementar.',
          titulo: 'Discovery e refinamento técnico no Pós-Venda',
          corpo:
            'Antes de a tarefa virar PR, ela vira problema bem formado. Auxiliei o líder novo no discovery + refinamento técnico das tasks do time. Working Backwards aplicado ao backlog, não só ao deploy.',
          pife: ['I', 'P'],
          champ: ['H'],
        },
        {
          type: 'metric',
          metric: { value: '<30', unit: 'dias', context: 'até a 1ª PR do estagiário Zorzo' },
          titulo: 'Knowledge Pills · partiu do problema',
          corpo:
            'O problema era o tempo de rampagem de novos estagiários na stack. A solução foi a trilha — não o contrário. Métrica de outcome (1ª PR em <30 dias para o Zorzo) provou a inversão.',
          pife: ['I'],
          champ: ['P'],
        },
      ],
      encerramento: 'Outcome do cliente vem antes da elegância da solução.',
    },
    {
      letra: 'T',
      titulo: 'TRUST IN SCIENCE',
      citacao: 'Decisões baseadas em dados, não opinião. Método científico aplicado ao Growth.',
      abertura:
        'Trust in Science é mais que disciplina de métrica — é hábito intelectual. Aqui, ele vem da formação acadêmica formal e da postura que ela educa no dia a dia.',
      provas: [
        {
          type: 'milestone',
          milestone: {
            label: 'TCC',
            date: 'apresentado',
            meta: 'classificado como disruptivo · nível tese de mestrado',
            oficial: true,
          },
          titulo: 'TCC · nível de tese de mestrado',
          corpo:
            'TCC sobre arquitetura de softwares que usam IA de forma dinâmica em mercados líquidos. Aclamado pelos professores na apresentação — orientação Breno Cafeo / Juliana Borim.',
          pife: ['I'],
          champ: ['M'],
        },
        {
          type: 'milestone',
          milestone: {
            label: 'INICIAÇÃO CIENTÍFICA',
            date: '2024',
            meta: 'Metaheurísticas · Eng. Elétrica · concluída',
          },
          titulo: 'Iniciação Científica · Metaheurísticas (2024)',
          corpo:
            'IC concluída em 2024, aplicando metaheurísticas a problemas de Engenharia Elétrica. Disciplina de experimentação controlada — o mesmo método que aplico em decisões de arquitetura no produto.',
          pife: ['I'],
          champ: [],
        },
        {
          type: 'milestone',
          milestone: {
            label: 'MESTRADO UNICAMP IC',
            date: 'em planejamento',
            meta: 'Eng. Software + Visão Computacional',
          },
          titulo: 'Mestrado UNICAMP em planejamento',
          corpo:
            'Em contato com Breno Cafeo e Juliana Borim no IC da UNICAMP. Alinhamento com a tese da V4 de que o time de tech é um time de pesquisadores.',
          pife: ['I'],
          champ: ['M'],
        },
        {
          type: 'metric',
          metric: { value: '1h', unit: '/ dia', context: 'leitura técnica e científica · bloco fixo' },
          titulo: 'Aprendizado contínuo · 1h/dia',
          corpo:
            'Rotina diária separada para leitura técnica e científica. Não é "tempo livre que sobrou" — é bloco fixo. Lifelong learning como prática, não slogan.',
          pife: ['I'],
          champ: [],
        },
        {
          type: 'milestone',
          milestone: {
            label: 'GRADUAÇÃO',
            date: 'colação dez/2026',
            meta: 'Eng. da Computação · PUC-Campinas · último semestre',
            oficial: false,
          },
          titulo: 'Formando-se esse ano — sob carga dupla',
          corpo:
            'Último semestre de Engenharia da Computação, colação em dezembro/2026. Fechei a graduação entregando nível Pleno em paralelo, não depois. **Disciplina simultânea, não trade-off.** O diploma fecha a **única lacuna de papel** entre o que já entrego e o nível que pleiteio.',
          pife: ['I', 'F', 'E'],
          champ: [],
        },
      ],
      encerramento: 'Quem desafia verdade estabelecida com método não improvisa decisão técnica.',
    },
    {
      letra: 'H',
      titulo: 'HIGH STANDARDS · FRUGAL EXECUTION',
      citacao: 'Excelência sem desperdício. Excelência sustentável, não heroísmo insustentável.',
      abertura:
        'Padrão alto é fácil de declarar e difícil de manter. Os números mostram que aqui ele virou regime, não pico.',
      provas: [
        {
          type: 'milestone',
          milestone: {
            label: 'STAKEHOLDER REPORT C-LEVEL',
            date: 'contínuo · sem intermediação',
            meta: '3+ áreas · compliance · people · operação',
            oficial: true,
          },
          stakeholders: [
            { nome: 'Brenda Quadros', area: 'Compliance', iniciais: 'BQ', url: brendaQuadrosAvatar },
            { nome: 'Jonathan Baumgarten', area: 'People', iniciais: 'JB', url: jonathanBaumgartenAvatar },
            { nome: 'Denise Santos', area: 'Operação', iniciais: 'DS', url: deniseSantosAvatar },
          ],
          titulo: 'Report direto a stakeholders C-level',
          corpo:
            'Como Owner do Workforce e Co-owner do LMS, mantenho report direto a stakeholders de áreas-chave: **Brenda Quadros** (compliance), **Jonathan Baumgarten** (people), **Denise Santos** (operação), entre outros. Decisões técnicas alinham vertical sem camada intermediária. Pleno opera nessa cadência.',
          pife: ['P', 'I'],
          champ: ['H'],
        },
        {
          type: 'metric',
          metric: { value: '{prsMerged}', unit: 'PRs merged', context: '{mergeRate}% merge rate · {linhasMovimentadas} linhas movimentadas' },
          titulo: '{prsMerged} PRs merged · {mergeRate}% merge rate',
          corpo:
            'Em 15 meses na V4, {prsMerged} PRs mergeados de {prsTotal} abertos. +{linhasAdicionadas} linhas adicionadas, -{linhasRemovidas} removidas, distribuídas em mais de 10 repositórios.',
          pife: ['P'],
          champ: ['H'],
        },
        {
          type: 'metric',
          metric: { value: '{medianaHoras}h', unit: 'mediana', context: 'time-to-merge · DORA Elite' },
          titulo: 'PR Maturity · DORA Elite',
          corpo:
            '{pctMenor24h}% dos PRs mergeados em <24h. {pctMenor72h}% em <72h. Mediana de tamanho por PR: {medianaLinhas} linhas. Benchmark DORA Elite (top 4% global): lead time < 1 dia.',
          pife: ['I'],
          champ: [],
        },
        {
          type: 'metric',
          metric: { value: '{codeReviews}', unit: 'code reviews', context: 'dados a outros em times além do meu' },
          titulo: '{codeReviews} code reviews dados a outros',
          corpo:
            'Padrão não é só na entrega — é também na revisão. O time inteiro mergeia melhor quando alguém olha de fora. Frugal Execution coletiva.',
          pife: ['E', 'P'],
          champ: ['H'],
        },
        {
          type: 'metric',
          metric: { value: '850+', unit: 'tickets', context: 'CSAT satisfatório · era Workforce + HOps' },
          titulo: 'Volumetria sustentada · 850+ tickets · 76 issues',
          corpo:
            '850+ chamados com CSAT satisfatório (mai → set/25). 76 issues no Linear desde mar/26 (34% Urgent/High) — CRM em Jira, fora dessa contagem. Volumetria que resistiu ao mês seguinte. E ao seguinte.',
          pife: ['P', 'E'],
          champ: ['H', 'C'],
        },
        {
          type: 'metric',
          metric: { value: '<30', unit: 'dias', context: 'até a 1ª PR do estagiário Zorzo' },
          titulo: 'Estagiário entregando em <30 dias',
          corpo:
            'Métrica meta do treinamento Knowledge Pills: tempo até primeira PR. Para o Zorzo, pouco mais de um mês. Eficiência do método mensurada em comportamento observável de outra pessoa.',
          pife: ['I', 'P'],
          champ: ['P'],
        },
      ],
      encerramento: 'Excelência sustentável é regime, não pico. Os números acima são meses, não dias. Pleno opera nesse regime.',
    },
];

export const DOSSIE = {
  id: 'mock-luigi',
  colaborador: {
    nome: 'Luigi Bertoli Menezes',
    funcaoAtual: 'Software Engineer · Júnior',
    senioridadeAtual: 'Júnior',
    senioridadeProposta: 'Pleno',
    cargoProposto: 'Software Engineer Pleno',
    dataInicio: 'março/2025',
    dataEfetivacao: 'novembro/2025',
    tempoV4: '15 meses',
    tempoJunior: '7 meses',
    idade: 22,
    modeloContratacao: 'SLU',
    empresa: 'V4 Company',
    avd: 'julho/2026',
    taglinePessoal:
      'Planejo o que dá e presto atenção no que o plano não controla — o resto costuma se encaixar no tempo certo.',
    github: 'luigimenezes13',
    curso: {
      nome: 'Engenharia da Computação',
      semestre: 'último semestre',
      colacao: 'dezembro/2026',
      faculdade: 'PUC-Campinas',
    },
  },

  tese: 'Pleito para  pleno.',

  manifesto: {
    citacaoRedBook:
      'Alinhamento cultural é o que transforma talento individual em poder coletivo. Dominar esta cultura é sua vantagem competitiva — tanto para crescer na V4 quanto para acelerar sua carreira.',
    citacaoFonte: 'THE RED BOOK · V4 COMPANY',
    tese: 'PIFE é o que quero. GROWTH é como entrego. Este dossiê é a prova.',
    pleito:
      'Em 15 meses, percorri de estagiário a Júnior efetivado. Os comportamentos GROWTH viraram regime, as dimensões PIFE estão em equilíbrio. Vim pleitear Pleno não pelo tempo — pelas evidências que seguem. Me formo engenheiro em dez/26 — o nível encontra o diploma no mesmo semestre.',
  },

  timeline: [
    { time: 'Produto · Finance', periodo: 'mar/25 → mai/25', status: 'Estagiário', micro: 'Contexto inicial. APIs, conceitos, postura.' },
    { time: 'Workforce + HOps', periodo: 'mai/25 → set/25', status: 'Estagiário', micro: '850+ chamados. Confiança de franqueado. Frontend nasceu aqui.' },
    { time: 'Contratos', periodo: 'set/25 → nov/25', status: 'Estagiário', micro: 'Velocidade de adaptação técnica.' },
    { time: 'Financeiro (1ª)', periodo: 'nov/25 → fev/26', status: 'Júnior ★', micro: 'Efetivado nov/25. Sustentei dois fluxos — Financeiro e contexto único do Pós-Venda.', marco: true },
    { time: 'CRM', periodo: 'fev/26 → abr/26', status: 'Júnior', micro: 'Maior tempo. Onde Davi Campos disse "confio em qualquer entrega sua".' },
    { time: 'Pós-Venda', periodo: 'abr/26 → jun/26', status: 'Júnior', micro: 'Knowledge Pills com estagiários. Pivô da migração.' },
    { time: 'Financeiro (atual)', periodo: 'jun/26 → presente', status: 'Júnior', micro: 'Service Cart. Entrega em tempo recorde. Último semestre — colação dez/26.' },
  ],

  numeros: {
    github: {
      prsMerged: 165,
      linhasAdicionadas: 62372,
      codeReviews: 273,
      mergeRate: 78,
      linhasMovimentadas: 73102,
    },
    prMaturity: {
      medianaHoras: 3.2,
      pctMenor24h: 70,
      pctMenor72h: 86,
      medianaLinhas: 142,
      benchDORA: 'DORA Elite (top 4%) bench: lead time < 1 dia',
    },
  },

  growths,

  constante: {
    pergunta:
      'O que conecta sete times, cento e sessenta e cinco PRs, oitocentos e cinquenta chamados, setenta e seis issues e seis estagiários treinados?',
    palavra: 'CONSISTÊNCIA',
    subtitulo: 'THE CONSTANT',
    desdobramento: [
      ['7 times rotacionados.', 'Qualidade não caiu.'],
      ['15 meses na V4.', '165 PRs mergeados.'],
      ['850+ chamados resolvidos.', '76 issues distribuídas.'],
      ['1 task cross-area doente.', '1 TCC nível mestrado.'],
      ['6 estagiários treinados.', 'Owner em 2 produtos.'],
    ],
    fechamento: ['Nada disso é pico.', 'Cada número resistiu ao mês seguinte.', 'E ao seguinte.'],
    moral: ['Não fiz tudo isso porque sou rápido.', 'Fiz porque não parei.'],
  },

  academico: {
    cards: [
      {
        titulo: 'TCC · nível tese de mestrado',
        corpo:
          'Tema: arquitetura de softwares que usam IA de forma dinâmica em mercados líquidos. Aclamado na defesa. Classificação verbal do orientador: "disruptivo, com nível de tese de mestrado."',
        chips: ['I', 'T'],
      },
      {
        titulo: 'IC · Metaheurísticas (2024)',
        corpo:
          'Iniciação Científica concluída. Aplicação de metaheurísticas a problemas de Engenharia Elétrica. Disciplina formal de experimentação controlada.',
        chips: ['I', 'T'],
      },
      {
        titulo: 'Graduação · colação dez/2026',
        corpo:
          'Engenharia da Computação no último semestre — colação em dezembro/2026. Formo-me engenheiro enquanto entrego nível Pleno em produção: as duas curvas correm juntas, não em sequência. **Disciplina simultânea, não trade-off.**',
        chips: ['I', 'F', 'E'],
      },
    ],
    unicamp: {
      titulo: 'MESTRADO EM PLANEJAMENTO · UNICAMP IC',
      corpo:
        'Área pretendida: Engenharia de Software + Visão Computacional. Contato firmado com professores de referência: Breno Cafeo e Juliana Borim.',
      citacao:
        '"O time de tech da V4 é um time de pesquisadores." — O mestrado é o veículo formal pra essa identidade ser produzida, não apenas declarada.',
    },
  },

  visaoFuturo: [
    {
      ano: '2027',
      horizonte: '1 ANO',
      profissional: [
        'Pleno consolidado na V4 Company',
        'Formado em Engenharia da Computação · PUC-Campinas (dez/2026)',
        'Inicia mestrado UNICAMP · Eng. de Software + Visão Computacional',
      ],
      pessoal: ['Equilíbrio acadêmico × produto', 'PIFE em rotina sustentável'],
    },
    {
      ano: '2029',
      horizonte: '3 ANOS',
      profissional: [
        'Tech Lead em projeto crítico V4',
        'Especialização: Product Engineer com foco em tech',
        'Não vibe coder. Profissional que entende arquitetura E produto na mesma profundidade.',
        'Mestrado em andamento',
      ],
      pessoal: ['Equilíbrio pesquisa × produto', 'Contribuição cross-time na V4'],
    },
    {
      ano: '2031',
      horizonte: '5 ANOS',
      profissional: [
        'Mestrado concluído (PhD em horizonte)',
        'Referência interna em Product Engineering',
        'Liderança técnica em iniciativa estratégica alinhada ao CHAMP',
      ],
      pessoal: ['Estabilidade', 'Continuidade no PIFE'],
    },
  ],

  pleitoPleno: {
    ondeEstou: [
      'Software Engineer · Júnior · SLU',
      'Efetivado em nov/2025. 7 meses como Júnior até a AVD.',
      '15 meses totais na V4 Company.',
      'Owner ativo em 2 produtos: Workforce (owner) e LMS (co-owner com Matheus Almeida).',
      'Último semestre de Engenharia da Computação · colação dez/2026.',
    ],
    porQuePleno: [
      { letra: 'G', texto: '7 times rotacionados, 6 estagiários treinados, 1 PR em <30 dias.' },
      { letra: 'R', texto: 'Feedback ao líder com maturidade, sob pressão, sem cortar entrega.' },
      { letra: 'O', texto: 'Referência técnica e de produto no Workforce — defini a arquitetura-alvo. 10 meses cruzando 4 times. WGO de jun/26 oficializou a responsabilidade pelo produto.' },
      { letra: 'W', texto: 'Service Cart entregue na call (FIN-647 · PR #3182).' },
      { letra: 'T', texto: 'TCC nível mestrado. Formando-se em dez/26. Mestrado UNICAMP IC em planejamento.' },
      { letra: 'H', texto: '165 PRs · mediana time-to-merge 3,2h · DORA Elite.' },
    ],
    salario: {
      pretensao: 7500,
      benchmarks: [
        { label: 'P25 Campinas', valor: 7132 },
        { label: 'Pretensão', valor: 7500, destaque: true },
        { label: 'Mediana Campinas', valor: 7967 },
        { label: 'P75 Campinas', valor: 9333 },
        { label: 'R. Half piso', valor: 9550 },
      ],
      narrativa: [
        'Pleiteio R$ 7.500 — abaixo da mediana de Campinas (R$ 7.967), abaixo do piso Robert Half 2026 (R$ 9.550).',
        'Não é o que ofertariam pra um Pleno em outro lugar. É o reconhecimento justo do que já entrego como Júnior.',
        'Sendo Júnior, virei referência técnica e de produto e decido arquitetura. Pleno é piso, não teto.',
        'Pleito de razoabilidade, não de retenção.',
      ],
    },
    oQueMuda: [
      'Owner formal de produto, não só de feature',
      'Discovery + refinamento técnico como entregável recorrente, não pontual',
      'Mentoria estruturada dos estagiários (continuação das Knowledge Pills)',
      'Decisões de arquitetura como autoria primária, não apoio',
    ],
    fechamento: 'Esta é a tese. As provas estão nos quatorze capítulos anteriores.',
  },

  assinatura: {
    tagline:
      'Planejo o que dá e presto atenção no que o plano não controla — o resto costuma se encaixar no tempo certo.',
    atribuicao: 'LUIGI BERTOLI MENEZES',
    metadata: [
      'Software Engineer · Júnior pleiteando Pleno · V4 Company · jul/2026',
      'github.com/luigimenezes13',
      'Construído por mim. Sem Lovable. Sem v0. Backend próprio em dossie-backend.vercel.app',
    ],
  },
};

export type Dossie = typeof DOSSIE;
