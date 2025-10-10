import { useEffect, useState } from 'react';
import { 
  Globe, 
  XCircle, 
  CheckCircle2, 
  FileText,
  User,
  Target,
  TrendingUp,
  Award,
  Briefcase,
  DollarSign,
  Calendar,
  Building,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ApiService, DossieService } from './services/api.service';
import type { ApiResponse, Dossie, DossiesResponse } from './types/api';

function App() {
  const [apiInfo, setApiInfo] = useState<ApiResponse | null>(null);
  const [dossies, setDossies] = useState<Dossie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedDossie, setExpandedDossie] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [apiData, dossiesData] = await Promise.all([
          ApiService.healthCheck(),
          DossieService.getAll() as Promise<DossiesResponse>
        ]);
        
        setApiInfo(apiData);
        setDossies(dossiesData.data || []);
        setError(null);
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Erro ao conectar com a API';
        setError(errorMessage);
        console.error('Erro:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleDossie = (id: string) => {
    setExpandedDossie(expandedDossie === id ? null : id);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-tertiary to-primary bg-clip-text text-transparent">
              Dossiê System
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-gray-400 mt-6 text-lg">
            Plataforma Profissional de Gerenciamento de Dossiês
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white">API Status</h3>
            </div>

            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                <span className="text-sm text-gray-400">Conectando...</span>
              </div>
            ) : error ? (
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-400" />
                <span className="text-sm text-red-400">Erro</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400">Conectado</span>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white">Total Dossiês</h3>
            </div>
            <p className="text-3xl font-bold text-primary">{dossies.length}</p>
          </div>

          <div className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white">Última Atualização</h3>
            </div>
            <p className="text-sm text-gray-400">
              {apiInfo?.timestamp ? new Date(apiInfo.timestamp).toLocaleString('pt-BR') : '-'}
            </p>
          </div>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-400">Carregando dossiês...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-950/50 border border-red-500/50 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-red-400 mb-2">Erro ao Carregar Dossiês</p>
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && dossies.length === 0 && (
          <div className="text-center py-20">
            <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">Nenhum dossiê encontrado</p>
          </div>
        )}

        <div className="space-y-6">
          {dossies.map((dossie) => (
            <div
              key={dossie.id}
              className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-primary/30 transition-all"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-tertiary rounded-lg flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
      <div>
                      <h2 className="text-2xl font-bold text-white">{dossie.colaborador.nome}</h2>
                      <p className="text-gray-400 text-sm">{dossie.colaborador.funcaoAtual}</p>
                    </div>
      </div>
                  <button
                    onClick={() => toggleDossie(dossie.id)}
                    className="p-2 hover:bg-tertiary/20 rounded-lg transition-colors"
                  >
                    {expandedDossie === dossie.id ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
        </button>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-black/30 border border-tertiary/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-primary" />
                      <span className="text-xs text-gray-400">Cargo Proposto</span>
                    </div>
                    <p className="text-white font-semibold">{dossie.objetivo.cargoProposto}</p>
                  </div>

                  <div className="bg-black/30 border border-tertiary/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-primary" />
                      <span className="text-xs text-gray-400">Empresa</span>
                    </div>
                    <p className="text-white font-semibold">{dossie.objetivo.empresa}</p>
                  </div>

                  <div className="bg-black/30 border border-tertiary/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span className="text-xs text-gray-400">Proposta</span>
                    </div>
                    <p className="text-primary font-bold text-lg">
                      {formatCurrency(dossie.propostaValorizacao.proposta.valorBruto)}
                    </p>
                  </div>
                </div>

                {expandedDossie === dossie.id && (
                  <div className="mt-6 space-y-6 border-t border-tertiary/20 pt-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-bold text-white">Objetivo</h3>
                      </div>
                      <p className="text-gray-300 text-sm">{dossie.objetivo.descricao}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-bold text-white">Atuação e Resultados</h3>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{dossie.atuacaoResultados.descricao}</p>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-400">Destaques:</p>
                        <ul className="space-y-2">
                          {dossie.atuacaoResultados.destaques.map((destaque, idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{destaque}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-semibold text-gray-400">Métricas:</p>
                        <ul className="space-y-2">
                          {dossie.atuacaoResultados.metricas.map((metrica, idx) => (
                            <li key={idx} className="text-sm text-gray-300 bg-black/30 border border-tertiary/20 rounded-lg p-3">
                              {metrica}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-bold text-white">Trajetória</h3>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">
                        <strong>Perfil:</strong> {dossie.trajetoria.perfil}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {dossie.trajetoria.areas.map((area, idx) => (
                          <div key={idx} className="bg-black/30 border border-tertiary/20 rounded-lg p-4">
                            <h4 className="font-semibold text-white mb-2">{area.nome}</h4>
                            <p className="text-sm text-gray-300">{area.descricao}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-bold text-white">Iniciativas Estratégicas</h3>
                      </div>
                      <div className="space-y-3">
                        {dossie.iniciativasEstrategicas.map((iniciativa, idx) => (
                          <div key={idx} className="bg-black/30 border border-tertiary/20 rounded-lg p-4">
                            <h4 className="font-semibold text-primary mb-2">{iniciativa.projeto}</h4>
                            <p className="text-sm text-gray-300">{iniciativa.descricao}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <DollarSign className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-bold text-white">Proposta de Valorização</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-black/30 border border-tertiary/20 rounded-lg p-4">
                          <p className="text-xs text-gray-400 mb-2">Situação Atual</p>
                          <p className="text-white font-semibold">{dossie.propostaValorizacao.situacaoAtual.modelo}</p>
                          <p className="text-gray-300 text-lg font-bold mt-1">
                            {formatCurrency(dossie.propostaValorizacao.situacaoAtual.valor)}
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-primary/20 to-tertiary/20 border border-primary/30 rounded-lg p-4">
                          <p className="text-xs text-gray-400 mb-2">Proposta</p>
                          <p className="text-white font-semibold">{dossie.propostaValorizacao.proposta.modelo}</p>
                          <p className="text-primary text-lg font-bold mt-1">
                            {formatCurrency(dossie.propostaValorizacao.proposta.valorBruto)}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Líquido: {formatCurrency(dossie.propostaValorizacao.proposta.valorLiquido)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-tertiary/10 border border-primary/30 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-white mb-3">Conclusão</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{dossie.conclusao}</p>
                    </div>

                    <div className="text-xs text-gray-500 flex items-center gap-4">
                      <span>Criado em: {new Date(dossie.createdAt).toLocaleString('pt-BR')}</span>
                      <span>•</span>
                      <span>Atualizado em: {new Date(dossie.updatedAt).toLocaleString('pt-BR')}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
