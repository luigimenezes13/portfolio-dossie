import { useEffect, useState } from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  User,
  Target,
  TrendingUp,
  Award,
  Briefcase,
  DollarSign,
  Calendar,
  Building,
  Lightbulb,
  BarChart3,
  Users,
  TrendingDown,
  ArrowRight,
  FileText
} from 'lucide-react';
import { ApiService, DossieService } from './services/api.service';
import type { ApiResponse, Dossie, DossiesResponse } from './types/api';

function App() {
  const [apiInfo, setApiInfo] = useState<ApiResponse | null>(null);
  const [dossie, setDossie] = useState<Dossie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [apiData, dossiesData] = await Promise.all([
          ApiService.healthCheck(),
          DossieService.getAll() as Promise<DossiesResponse>
        ]);
        
        setApiInfo(apiData);
        setDossie(dossiesData.data?.[0] || null);
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

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-400">Carregando dossiê...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-red-950/50 border border-red-500/50 rounded-xl p-8 text-center">
            <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-red-400 mb-2">Erro ao Carregar</h2>
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!dossie) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <div className="text-center">
          <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-400 mb-2">Nenhum dossiê encontrado</h2>
          <p className="text-gray-500">Não há dossiês cadastrados no momento.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-tertiary rounded-xl flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-tertiary to-primary bg-clip-text text-transparent">
                {dossie.colaborador.nome}
              </h1>
              <p className="text-gray-400 text-lg">{dossie.colaborador.funcaoAtual}</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {dossie.colaborador.idade} anos
            </span>
            <span>•</span>
            <span>Início: {dossie.colaborador.dataInicio}</span>
          </div>
        </header>

        <div className="space-y-8">
          <section className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Objetivo da Efetivação</h2>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">{dossie.objetivo.descricao}</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/50 border border-tertiary/20 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-2">Cargo Proposto</p>
                <p className="text-white font-bold text-lg">{dossie.objetivo.cargoProposto}</p>
              </div>
              <div className="bg-black/50 border border-tertiary/20 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-2">Modelo</p>
                <p className="text-white font-bold text-lg">{dossie.objetivo.modeloContratacao}</p>
              </div>
              <div className="bg-black/50 border border-tertiary/20 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-2">Empresa</p>
                <p className="text-white font-bold text-lg">{dossie.objetivo.empresa}</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Trajetória Profissional</h2>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Perfil</h3>
              <p className="text-gray-300">{dossie.trajetoria.perfil}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Áreas de Atuação</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {dossie.trajetoria.areas.map((area, idx) => (
                  <div key={idx} className="bg-black/50 border border-tertiary/20 rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      {area.nome}
                    </h4>
                    <p className="text-sm text-gray-300">{area.descricao}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Alinhamento Cultural</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {dossie.trajetoria.alinhamentoCultural.map((item, idx) => (
                  <div key={idx} className="bg-black/50 border border-tertiary/20 rounded-xl p-4">
                    <p className="font-bold text-primary mb-2">{item.valor}</p>
                    <p className="text-sm text-gray-300">{item.exemploPratico}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Atuação e Resultados</h2>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">{dossie.atuacaoResultados.descricao}</p>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-primary" />
                Principais Destaques
              </h3>
              <div className="space-y-3">
                {dossie.atuacaoResultados.destaques.map((destaque, idx) => (
                  <div key={idx} className="bg-black/50 border border-tertiary/20 rounded-xl p-4 flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-gray-300">{destaque}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-primary" />
                Métricas de Performance
              </h3>
              <div className="space-y-3">
                {dossie.atuacaoResultados.metricas.map((metrica, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-primary/10 to-tertiary/10 border border-primary/30 rounded-xl p-4">
                    <p className="text-gray-300 font-mono text-sm">{metrica}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Iniciativas Estratégicas</h2>
            </div>

            <div className="space-y-4">
              {dossie.iniciativasEstrategicas.map((iniciativa, idx) => (
                <div key={idx} className="bg-black/50 border border-tertiary/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{iniciativa.projeto}</h3>
                  <p className="text-gray-300 leading-relaxed">{iniciativa.descricao}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Proposta de Valorização</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-black/50 border border-tertiary/20 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingDown className="w-5 h-5 text-gray-400" />
                  <h3 className="text-lg font-semibold text-gray-300">Situação Atual</h3>
                </div>
                <p className="text-gray-400 text-sm mb-2">{dossie.propostaValorizacao.situacaoAtual.modelo}</p>
                <p className="text-white text-3xl font-bold">
                  {formatCurrency(dossie.propostaValorizacao.situacaoAtual.valor)}
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/20 to-tertiary/20 border border-primary/40 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-white">Proposta</h3>
                </div>
                <p className="text-gray-300 text-sm mb-2">{dossie.propostaValorizacao.proposta.modelo}</p>
                <p className="text-primary text-3xl font-bold mb-1">
                  {formatCurrency(dossie.propostaValorizacao.proposta.valorBruto)}
                </p>
                <p className="text-gray-400 text-xs">
                  Líquido: {formatCurrency(dossie.propostaValorizacao.proposta.valorLiquido)}
                </p>
              </div>
            </div>

            <div className="bg-black/50 border border-tertiary/20 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                <Building className="w-4 h-4" />
                Referência de Mercado
              </h3>
              <p className="text-white font-semibold mb-3">{dossie.referenciaMercado.cargo}</p>
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div>
                  <p className="text-xs text-gray-400">Mínimo</p>
                  <p className="text-gray-300 font-mono text-sm">{formatCurrency(dossie.referenciaMercado.faixaSalarial.minimo)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Máximo</p>
                  <p className="text-gray-300 font-mono text-sm">{formatCurrency(dossie.referenciaMercado.faixaSalarial.maximo)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Pico</p>
                  <p className="text-primary font-mono text-sm font-bold">{formatCurrency(dossie.referenciaMercado.faixaSalarial.pico)}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">Fontes: {dossie.referenciaMercado.fontesPesquisa.join(', ')}</p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Potencial de Retorno</h2>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Benefícios para a Empresa</h3>
              <div className="space-y-2">
                {dossie.potencialRetorno.beneficios.map((beneficio, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-tertiary/10 border border-primary/30 rounded-xl p-4">
              <div className="flex items-center justify-between">
      <div>
                  <p className="text-sm text-gray-400">Projeção de Cargo</p>
                  <p className="text-white font-bold text-lg">{dossie.potencialRetorno.projecaoCargo}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Prazo de Evolução</p>
                  <p className="text-primary font-bold text-lg">{dossie.potencialRetorno.prazoEvolucao}</p>
                </div>
              </div>
      </div>
          </section>

          <section className="bg-gradient-to-br from-primary/20 to-tertiary/20 border border-primary/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusão</h2>
            <p className="text-gray-200 leading-relaxed text-lg">
              {dossie.conclusao}
            </p>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-tertiary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                API Status: 
                {apiInfo ? (
                  <CheckCircle2 className="w-3 h-3 text-green-400" />
                ) : (
                  <XCircle className="w-3 h-3 text-red-400" />
                )}
              </span>
              <span>•</span>
              <span>v{apiInfo?.version || '1.0.0'}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Atualizado: {new Date(dossie.updatedAt).toLocaleDateString('pt-BR')}</span>
              <span>•</span>
              <span className="text-gray-600">Dossiê System</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
