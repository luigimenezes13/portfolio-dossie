export interface ApiResponse<T = unknown> {
  message?: string;
  version?: string;
  timestamp?: string;
  docs?: string;
  data?: T;
  success?: boolean;
}

export interface ApiError {
  message: string;
  error?: string;
  statusCode?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Colaborador {
  nome: string;
  idade: number;
  funcaoAtual: string;
  dataInicio: string;
}

export interface Objetivo {
  descricao: string;
  cargoProposto: string;
  modeloContratacao: string;
  empresa: string;
}

export interface Area {
  nome: string;
  descricao: string;
}

export interface AlinhamentoCultural {
  valor: string;
  exemploPratico: string;
}

export interface Trajetoria {
  areas: Area[];
  perfil: string;
  alinhamentoCultural: AlinhamentoCultural[];
  desenvolvimentoPessoal: string[];
}

export interface AtuacaoResultados {
  descricao: string;
  destaques: string[];
  metricas: string[];
}

export interface IniciativaEstrategica {
  projeto: string;
  descricao: string;
}

export interface ContextoEfetivacao {
  situacaoAtual: string[];
  acoesColaborador: string[];
}

export interface FaixaSalarial {
  minimo: number;
  maximo: number;
  pico: number;
}

export interface ReferenciaMercado {
  cargo: string;
  faixaSalarial: FaixaSalarial;
  fontesPesquisa: string[];
  valorProposto: number;
}

export interface PotencialRetorno {
  beneficios: string[];
  projecaoCargo: string;
  prazoEvolucao: string;
}

export interface SituacaoAtual {
  modelo: string;
  valor: number;
}

export interface Proposta {
  modelo: string;
  valorBruto: number;
  valorLiquido: number;
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
  atuacaoResultados: AtuacaoResultados;
  iniciativasEstrategicas: IniciativaEstrategica[];
  contextoEfetivacao: ContextoEfetivacao;
  referenciaMercado: ReferenciaMercado;
  potencialRetorno: PotencialRetorno;
  propostaValorizacao: PropostaValorizacao;
  conclusao: string;
  createdAt: string;
  updatedAt: string;
}

export interface DossiesResponse {
  success: boolean;
  data: Dossie[];
  message: string;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface QueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
  [key: string]: string | number | undefined;
}

export interface RequestData {
  [key: string]: unknown;
}

export interface DossieCreateInput {
  colaborador: Colaborador;
  objetivo: Objetivo;
  trajetoria: Trajetoria;
  atuacaoResultados: AtuacaoResultados;
  iniciativasEstrategicas: IniciativaEstrategica[];
  contextoEfetivacao: ContextoEfetivacao;
  referenciaMercado: ReferenciaMercado;
  potencialRetorno: PotencialRetorno;
  propostaValorizacao: PropostaValorizacao;
  conclusao: string;
  [key: string]: unknown;
}

export type DossieUpdateInput = Partial<DossieCreateInput>;
