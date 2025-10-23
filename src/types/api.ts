// Tipos compartilhados da aplicação

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
  version?: string;
  docs?: string;
}

export interface ApiError {
  message: string;
  error?: string;
  statusCode?: number;
}

// ============================================
// Tipos Categóricos (Union Types)
// ============================================

// Modelos de Contratação
export type ModeloContratacao = 'CLT' | 'PJ' | 'SLU' | 'Estágio' | 'Temporário' | 'Autônomo';

// Níveis de Senioridade
export type NivelSenioridade =
  | 'Estagiário'
  | 'Trainee'
  | 'Júnior'
  | 'Pleno'
  | 'Sênior'
  | 'Especialista'
  | 'Tech Lead'
  | 'Coordenador'
  | 'Gerente'
  | 'Diretor';

// Áreas de Atuação Profissional
export type AreaAtuacao =
  | 'Desenvolvimento'
  | 'Produto'
  | 'Design'
  | 'Help Desk'
  | 'Infraestrutura'
  | 'DevOps'
  | 'QA/Testes'
  | 'Dados'
  | 'Segurança'
  | 'Marketing'
  | 'Vendas'
  | 'RH'
  | 'Financeiro'
  | 'Operações'
  | 'Atendimento'
  | 'Outro';

// Dimensões de Alinhamento Cultural (baseado em desenvolvimento holístico)
// PIFE - Acrônimo das 4 dimensões principais:
//   P - Pessoal: Relacionamentos e networking
//   I - Intelectual: Conhecimento e aprendizado
//   F - Físico: Saúde e bem-estar
//   E - Espiritual: Propósito e valores
// + Dimensões complementares: Profissional, Financeiro, Social
export type DimensaoCultural =
  | 'Pessoal' // Relacionamentos e networking
  | 'Intelectual' // Conhecimento e aprendizado
  | 'Físico' // Saúde e bem-estar
  | 'Espiritual' // Propósito e valores
  | 'Profissional' // Carreira e habilidades
  | 'Financeiro' // Gestão financeira
  | 'Social'; // Impacto na comunidade

// Tipos de Atividades para Métricas
export type TipoAtividade =
  | 'commits'
  | 'PRs'
  | 'pull requests'
  | 'linhas de código'
  | 'issues resolvidos'
  | 'code reviews'
  | 'chamados resolvidos'
  | 'chamados resolvidos com CSAT satisfatório'
  | 'deploys'
  | 'releases'
  | 'bugs corrigidos'
  | 'features entregues'
  | 'refatorações'
  | 'documentações'
  | 'testes escritos'
  | 'aprendizado específico e excelência'
  | 'reuniões técnicas'
  | 'mentorias'
  | 'treinamentos ministrados'
  | 'horas trabalhadas';

// Escopos de Atuação
export type EscopoAtuacao =
  | 'backend'
  | 'frontend'
  | 'mobile'
  | 'fullstack'
  | 'infraestrutura'
  | 'DevOps'
  | 'design'
  | 'produto'
  | 'Help Desk'
  | 'atendimento'
  | 'educação'
  | 'operações'
  | 'geral';

// Períodos de Tempo
export type PeriodoTempo =
  | '1 dia'
  | '1 semana'
  | '2 semanas'
  | '1 mês'
  | '2 meses'
  | '3 meses'
  | '6 meses'
  | '1 ano'
  | 'todo o período de estágio'
  | 'todo o período na empresa'
  | 'maio-outubro'
  | 'contínuo'
  | 'diário'
  | 'semanal'
  | 'mensal'
  | string; // Permite valores customizados

// Fontes de Pesquisa Salarial
export type FontePesquisaSalarial =
  | 'Glassdoor'
  | 'Indeed'
  | 'LinkedIn'
  | 'Catho'
  | 'Vagas.com'
  | 'Gupy'
  | 'Trabalha Brasil'
  | 'Love Mondays'
  | 'Olhar Digital'
  | 'Pesquisa Salarial Robert Half'
  | 'Pesquisa interna'
  | string; // Permite valores customizados

// Características de Perfil Profissional
export type CaracteristicaPerfil =
  | 'Proativo'
  | 'Disciplinado'
  | 'Ético'
  | 'Maduro'
  | 'Comunicativo'
  | 'Analítico'
  | 'Criativo'
  | 'Organizado'
  | 'Flexível'
  | 'Resiliente'
  | 'Empático'
  | 'Leadership'
  | 'Ownership elevado'
  | 'High performance'
  | 'Team player'
  | 'Autodidata';

// ============================================
// Modelo de Dossiê
// ============================================

export interface Colaborador {
  nome: string;
  idade: number;
  funcaoAtual: string;
  dataInicio: string; // Ex: "janeiro/2023", "março/2025"
  senioridade?: NivelSenioridade;
  tempoV4?: string;
  curso?: Curso;
}

export interface Objetivo {
  descricao: string;
  cargoProposto: string;
  senioridadeProposta?: NivelSenioridade;
  modeloContratacao: ModeloContratacao;
  empresa: string;
}

export interface Area {
  nome: AreaAtuacao | string; // Permite valores customizados
  descricao?: string;
  periodo?: string;
  projeto?: string;
}


export interface DesenvolvimentoPessoal {
  tipo:
    | 'Curso'
    | 'Certificação'
    | 'Graduação'
    | 'Pós-graduação'
    | 'Livro'
    | 'Workshop'
    | 'Projeto Pessoal'
    | 'Pesquisa Acadêmica'
    | 'Idioma';
  titulo: string;
  instituicao?: string;
  status?: 'Concluído' | 'Em andamento' | 'Planejado';
  periodo?: string;
}

// New interfaces for updated API structure
export interface Curso {
  nome: string;
  semestre: string;
  faculdade: string;
}

export interface PifeDimensao {
  dimensao: DimensaoCultural;
  exemploPratico: string;
}

export interface GrowthPrincipio {
  principio: string;
  exemploPratico: string;
}

export interface FitCultural {
  pife?: PifeDimensao[];
  growth?: GrowthPrincipio[];
}

export interface RealizacoesProfissionais {
  descricao: string;
  destaques: string[];
  metricas?: Metrica[];
}

export interface BolsaPesquisa {
  tipo: string;
  titulo: string;
  instituicao: string;
  status: 'Concluído' | 'Em andamento' | 'Planejado';
  periodo: string;
}

export interface RealizacoesAcademicas {
  performanceAcademica: string;
  bolsasEPesquisas?: BolsaPesquisa[];
}

export interface PretensaoSalarial {
  valorBruto: number;
  valorLiquido: number;
  modelo: ModeloContratacao;
  beneficios?: string[];
  observacoes?: string;
}

export interface Efetivacao {
  situacaoAtual: string[];
  acoesColaborador: string[];
  urgencia: 'Baixa' | 'Média' | 'Alta' | 'Urgente';
  cargoPretendido: string;
  pretensaoSalarial?: PretensaoSalarial;
  referenciaMercado?: {
    fontes: FontePesquisaSalarial[];
    faixaSalarial: FaixaSalarial;
    regiao?: string;
    dataReferencia?: string;
  };
  potencialRetorno?: {
    beneficios: string[];
    projecaoCargo?: string;
    prazoEvolucao?: string;
    estimativaROI?: string;
  };
}

export interface VisaoFuturoItem {
  pessoal: string;
  profissional: string;
}

export interface VisaoFuturo {
  umAno: VisaoFuturoItem;
  tresAnos: VisaoFuturoItem;
  cincoAnos: VisaoFuturoItem;
}

export interface Trajetoria {
  areas: Area[];
  perfil: string | CaracteristicaPerfil[]; // String livre ou array de características
  fitCultural?: FitCultural;
  desenvolvimentoPessoal: Array<DesenvolvimentoPessoal | string>; // Aceita objeto estruturado ou string livre
}

export interface Metrica {
  valor: number | string;
  atividade: TipoAtividade;
  escopo: EscopoAtuacao;
  tempo?: PeriodoTempo;
  observacao?: string;
}

export interface AtuacaoResultados {
  descricao: string;
  destaques: string[];
  metricas?: Metrica[];
}

export interface IniciativaEstrategica {
  projeto: string;
  descricao: string;
  impacto?: 'Baixo' | 'Médio' | 'Alto' | 'Crítico';
  periodo?: string;
  area?: AreaAtuacao | string;
}

export interface ContextoEfetivacao {
  situacaoAtual: string[];
  acoesColaborador: string[];
  urgencia?: 'Baixa' | 'Média' | 'Alta' | 'Urgente';
}

export interface FaixaSalarial {
  minimo: number;
  maximo: number;
  pico?: number;
  mediana?: number;
}

export interface ReferenciaMercado {
  cargo: string;
  senioridade?: NivelSenioridade;
  regiao?: string;
  faixaSalarial: FaixaSalarial;
  fontesPesquisa: FontePesquisaSalarial[];
  valorProposto: number;
  dataReferencia?: string; // Data da pesquisa salarial
}

export interface PotencialRetorno {
  beneficios: string[];
  projecaoCargo?: string | NivelSenioridade;
  prazoEvolucao?: string;
  estimativaROI?: string; // Retorno sobre investimento estimado
}

export interface SituacaoAtual {
  modelo: ModeloContratacao;
  valor: number;
}

export interface Proposta {
  modelo: ModeloContratacao;
  valorBruto: number;
  valorLiquido?: number;
  beneficios?: string[];
  observacoes?: string;
}

export interface PropostaValorizacao {
  situacaoAtual: SituacaoAtual;
  proposta: Proposta;
}

export interface Dossie {
  id: string;
  colaborador: Colaborador;
  objetivo: Objetivo;
  trajetoria: Trajetoria;
  atuacaoResultados?: AtuacaoResultados; // Make optional for backward compatibility
  realizacoesProfissionais?: RealizacoesProfissionais;
  realizacoesAcademicas?: RealizacoesAcademicas;
  iniciativasEstrategicas: IniciativaEstrategica[];
  contextoEfetivacao?: ContextoEfetivacao; // Make optional
  efetivacao?: Efetivacao;
  visaoFuturo?: VisaoFuturo;
  referenciaMercado?: ReferenciaMercado; // Make optional
  potencialRetorno?: PotencialRetorno; // Make optional
  propostaValorizacao?: PropostaValorizacao; // Make optional
  conclusao: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

// DTO para criação de dossiê
export interface CreateDossieDto {
  colaborador: Dossie['colaborador'];
  objetivo: Dossie['objetivo'];
  trajetoria: Dossie['trajetoria'];
  atuacaoResultados: Dossie['atuacaoResultados'];
  iniciativasEstrategicas: Dossie['iniciativasEstrategicas'];
  contextoEfetivacao: Dossie['contextoEfetivacao'];
  referenciaMercado: Dossie['referenciaMercado'];
  potencialRetorno: Dossie['potencialRetorno'];
  propostaValorizacao: Dossie['propostaValorizacao'];
  conclusao: string;
}

// DTO para atualização de dossiê
export type UpdateDossieDto = Partial<CreateDossieDto>;

// Lista simplificada de dossiês
export interface DossieListItem {
  id: string;
  colaboradorNome: string;
  cargoProposto: string;
  valorProposto: number;
  empresa: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface DossiesResponse {
  success: boolean;
  data: Dossie[];
  message: string;
  timestamp: string;
}

export interface QueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
  [key: string]: string | number | undefined;
}
