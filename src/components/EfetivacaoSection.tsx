import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Target, Users, BarChart3, MapPin, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Efetivacao } from '../types/api';
import { CARD_CLASSES, ICON_CONTAINERS, ICON_COLORS, TYPOGRAPHY } from '../constants/design-system';

interface EfetivacaoSectionProps {
  efetivacao: Efetivacao;
}

export function EfetivacaoSection({ efetivacao }: EfetivacaoSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const getUrgenciaColor = (urgencia: string) => {
    switch (urgencia) {
      case 'Urgente':
        return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'Alta':
        return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'Média':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'Baixa':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      default:
        return 'text-neutral-400 bg-neutral-500/20 border-neutral-500/30';
    }
  };

  const getUrgenciaIcon = (urgencia: string) => {
    switch (urgencia) {
      case 'Urgente':
      case 'Alta':
        return AlertTriangle;
      case 'Média':
        return TrendingUp;
      case 'Baixa':
        return CheckCircle;
      default:
        return Target;
    }
  };

  return (
    <section 
      ref={ref}
      className={`${CARD_CLASSES.section} ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="section-header">
        <div className={ICON_CONTAINERS.primary}>
          <Target className={`w-7 h-7 ${ICON_COLORS.primary} drop-shadow-lg`} />
        </div>
        <div>
          <h2 className={TYPOGRAPHY.sectionTitlePrimary}>Efetivação</h2>
          <p className={`${TYPOGRAPHY.bodySmall} mt-2 max-w-3xl font-medium`}>
            Proposta de efetivação e análise de mercado
          </p>
        </div>
      </div>

      {/* Top Section: Side-by-Side Comparison */}
      <div className="relative mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card - Situação Atual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-neutral-700/20 via-neutral-900/30 to-neutral-800/20 border border-neutral-600/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-neutral-500/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-neutral-700/50 rounded-xl flex items-center justify-center border-2 border-neutral-600/50">
                  <TrendingDown className="w-6 h-6 text-neutral-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-300">Situação Atual</h3>
                  <p className="text-sm text-neutral-500 font-medium">Posição atual</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-neutral-400 text-sm mb-2 font-medium uppercase tracking-wider">Estágio</p>
                <p className="text-neutral-100 text-4xl md:text-5xl font-bold">
                  {formatCurrency(3000)}
                </p>
              </div>
            </div>
          </div>

          {/* Right Card - Proposta */}
          <div className="relative">
            <div className="absolute -top-3 -right-3 z-10">
              <div className="bg-gradient-to-r from-primary to-tertiary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                PROPOSTA
              </div>
            </div>
            
            {efetivacao.pretensaoSalarial && (
              <div className="bg-gradient-to-br from-primary/12 via-neutral-900/35 to-tertiary/12 border border-primary/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/70 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-tertiary/5"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-tertiary/20 rounded-xl flex items-center justify-center border-2 border-primary/50">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Proposta</h3>
                      <p className="text-sm text-primary font-medium">Nova posição</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-neutral-200 text-sm mb-2 font-medium uppercase tracking-wider">{efetivacao.pretensaoSalarial.modelo}</p>
                    <p className="text-primary text-4xl md:text-5xl font-bold">
                      {formatCurrency(efetivacao.pretensaoSalarial.valorBruto)}
                    </p>
                    <p className="text-neutral-300 text-lg mt-2 font-medium">
                      Líquido: {formatCurrency(efetivacao.pretensaoSalarial.valorLiquido)}
                    </p>
                  </div>

                  {efetivacao.pretensaoSalarial.beneficios && efetivacao.pretensaoSalarial.beneficios.length > 0 && (
                    <div className="mb-4">
                      <h5 className="text-sm font-bold text-neutral-300 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Benefícios Inclusos
                      </h5>
                      <div className="space-y-2">
                        {efetivacao.pretensaoSalarial.beneficios.map((beneficio, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm text-neutral-200 p-2 bg-neutral-800/30 rounded-lg hover:bg-neutral-800/50 transition-colors duration-200">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="font-medium">{beneficio}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {efetivacao.pretensaoSalarial.observacoes && (
                    <div className="mt-4 p-4 bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 border border-neutral-700/50 rounded-xl">
                      <p className="text-sm text-neutral-300 leading-relaxed font-medium">
                        {efetivacao.pretensaoSalarial.observacoes}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-tertiary/10 border border-primary/30 rounded-full px-6 py-3">
            <span className="text-neutral-200 font-semibold">
              Proposta justa para o mercado de trabalho e as competências do colaborador
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Supporting Information */}
      <div className="space-y-8">
        {/* Row 1: Other Situação Atual + Ações do Colaborador */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Outras Situações */}
          <div>
            <h3 className="text-subtitle mb-4">Situação Detalhada</h3>
            <div className="space-y-3">
              {efetivacao.situacaoAtual.map((situacao, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-gradient-to-br from-primary/8 via-neutral-900/25 to-secondary/8 border border-primary/25 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:border-primary/40"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary drop-shadow-sm" />
                  </div>
                  <p className="text-neutral-200 leading-relaxed font-medium">{situacao}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ações do Colaborador */}
          <div>
            <h3 className="text-subtitle mb-4">Ações do Colaborador</h3>
            <div className="space-y-4">
              {efetivacao.acoesColaborador.map((acao, idx) => (
                <div 
                  key={idx}
                  className="group flex items-start gap-3 p-4 bg-gradient-to-br from-secondary/8 via-neutral-900/25 to-tertiary/8 border border-secondary/25 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 hover:border-secondary/40 hover:scale-[1.02]"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-1 bg-gradient-to-br from-secondary/20 to-secondary-light/20 border border-secondary/30 rounded-lg group-hover:border-secondary/50 transition-colors duration-200">
                      <Target className="w-4 h-4 text-secondary drop-shadow-sm" />
                    </div>
                  </div>
                  <p className="text-neutral-200 leading-relaxed font-medium group-hover:text-white transition-colors duration-200">{acao}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Market Reference + Return Potential */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Market Reference */}
          {efetivacao.referenciaMercado && (
            <div>
              <h3 className="text-subtitle mb-4">Referência de Mercado</h3>
              <div className="group bg-gradient-to-br from-orange-500/12 via-neutral-900/35 to-orange-600/12 border border-orange-500/25 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] hover:border-orange-500/35">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 bg-gradient-to-br from-orange-500/25 to-orange-600/25 border border-orange-500/35 rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <BarChart3 className="w-6 h-6 text-orange-400 drop-shadow-sm" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Análise Salarial de Mercado</h4>
                    {efetivacao.referenciaMercado.regiao && (
                      <div className="flex items-center gap-2 text-sm text-orange-400 font-medium">
                        <MapPin className="w-4 h-4" />
                        <span>{efetivacao.referenciaMercado.regiao}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl">
                    <p className="text-xs text-neutral-400 mb-1 font-medium">Mínimo</p>
                    <p className="text-lg font-bold text-orange-400 drop-shadow-sm">
                      {formatCurrency(efetivacao.referenciaMercado.faixaSalarial.minimo)}
                    </p>
                  </div>
                  {efetivacao.referenciaMercado.faixaSalarial.mediana && (
                    <div className="text-center p-3 bg-gradient-to-br from-orange-400/15 to-orange-500/15 border border-orange-400/25 rounded-xl">
                      <p className="text-xs text-neutral-400 mb-1 font-medium">Mediana</p>
                      <p className="text-lg font-bold text-orange-300 drop-shadow-sm">
                        {formatCurrency(efetivacao.referenciaMercado.faixaSalarial.mediana)}
                      </p>
                    </div>
                  )}
                  <div className="text-center p-3 bg-gradient-to-br from-orange-600/10 to-orange-700/10 border border-orange-600/20 rounded-xl">
                    <p className="text-xs text-neutral-400 mb-1 font-medium">Máximo</p>
                    <p className="text-lg font-bold text-orange-400 drop-shadow-sm">
                      {formatCurrency(efetivacao.referenciaMercado.faixaSalarial.pico ?? 0)}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="text-sm font-bold text-neutral-300 mb-3 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-orange-400" />
                    Fontes de Pesquisa
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {efetivacao.referenciaMercado.fontes.map((fonte, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs text-orange-300 font-medium hover:bg-orange-500/30 transition-colors duration-200"
                      >
                        {fonte}
                      </span>
                    ))}
                  </div>
                </div>

                {efetivacao.referenciaMercado.dataReferencia && (
                  <div className="flex items-center gap-2 text-sm text-neutral-400 p-3 bg-neutral-800/30 rounded-xl">
                    <Calendar className="w-4 h-4 text-orange-400" />
                    <span className="font-medium">Referência: {efetivacao.referenciaMercado.dataReferencia}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Potencial de Retorno */}
          {efetivacao.potencialRetorno && (
            <div>
              <h3 className="text-subtitle mb-4">Potencial de Retorno</h3>
              <div className="group bg-gradient-to-br from-purple-500/12 via-neutral-900/35 to-purple-600/12 border border-purple-500/25 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] hover:border-purple-500/35">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 bg-gradient-to-br from-purple-500/25 to-purple-600/25 border border-purple-500/35 rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <TrendingUp className="w-6 h-6 text-purple-400 drop-shadow-sm" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Projeção de Carreira</h4>
                    {efetivacao.potencialRetorno.projecaoCargo && (
                      <p className="text-sm text-purple-400 font-semibold">{efetivacao.potencialRetorno.projecaoCargo}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {efetivacao.potencialRetorno.prazoEvolucao && (
                    <div className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-xl">
                      <p className="text-sm text-neutral-400 mb-2 font-medium">Prazo de Evolução</p>
                      <p className="text-lg font-bold text-purple-300 drop-shadow-sm">{efetivacao.potencialRetorno.prazoEvolucao}</p>
                    </div>
                  )}

                  {efetivacao.potencialRetorno.estimativaROI && (
                    <div className="p-4 bg-gradient-to-br from-purple-400/10 to-purple-500/10 border border-purple-400/20 rounded-xl">
                      <p className="text-sm text-neutral-400 mb-2 font-medium">Estimativa de ROI</p>
                      <p className="text-lg font-bold text-purple-300 drop-shadow-sm">{efetivacao.potencialRetorno.estimativaROI}</p>
                    </div>
                  )}
                </div>

                {efetivacao.potencialRetorno.beneficios && efetivacao.potencialRetorno.beneficios.length > 0 && (
                  <div>
                    <h5 className="text-sm font-bold text-neutral-300 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-purple-400" />
                      Benefícios para a Empresa
                    </h5>
                    <div className="space-y-2">
                      {efetivacao.potencialRetorno.beneficios.map((beneficio, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-neutral-200 p-2 bg-neutral-800/30 rounded-lg hover:bg-neutral-800/50 transition-colors duration-200">
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span className="font-medium">{beneficio}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Row 3: Urgency + Desired Position */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group bg-gradient-to-br from-tertiary/12 via-neutral-900/35 to-primary/12 border border-tertiary/25 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-tertiary/35">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-tertiary/25 to-tertiary-light/25 border border-tertiary/35 rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <AlertTriangle className="w-5 h-5 text-tertiary drop-shadow-sm" />
              </div>
              <h4 className="text-lg font-bold text-white">Nível de Urgência</h4>
            </div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm ${getUrgenciaColor(efetivacao.urgencia)} group-hover:shadow-md transition-shadow duration-300`}>
              {(() => {
                const UrgenciaIcon = getUrgenciaIcon(efetivacao.urgencia);
                return <UrgenciaIcon className="w-4 h-4" />;
              })()}
              <span className="text-sm font-semibold">{efetivacao.urgencia}</span>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-primary/12 via-neutral-900/35 to-secondary/12 border border-primary/25 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/35">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-primary/25 to-primary-light/25 border border-primary/35 rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <Users className="w-5 h-5 text-primary drop-shadow-sm" />
              </div>
              <h4 className="text-lg font-bold text-white">Cargo Pretendido</h4>
            </div>
            <p className="text-primary font-bold text-xl group-hover:text-primary-light transition-colors duration-300">{efetivacao.cargoPretendido}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
