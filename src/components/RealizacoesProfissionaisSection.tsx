import { TrendingUp, BarChart3, Github, BookOpen, CheckCircle, GitPullRequest, Code, Headphones } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { RealizacoesProfissionais, Metrica } from '../types/api';
import { CARD_CLASSES, ICON_CONTAINERS, ICON_COLORS, TYPOGRAPHY } from '../constants/design-system';

interface RealizacoesProfissionaisSectionProps {
  realizacoesProfissionais: RealizacoesProfissionais;
}

interface MetricasPorEscopo {
  [escopo: string]: Metrica[];
}

export function RealizacoesProfissionaisSection({ realizacoesProfissionais }: RealizacoesProfissionaisSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  // Função para renderizar valor com cores para linhas de código
  const renderMetricValue = (valor: string | number, textColorClass: string) => {
    if (typeof valor === 'number') {
      return (
        <span className={`text-4xl font-extrabold ${textColorClass}`}>
          {valor.toLocaleString('pt-BR')}
        </span>
      );
    }

    const valorStr = valor.toString();
    
    // Verifica se contém padrão de linhas de código (número++ ou número--)
    if (valorStr.includes('++') || valorStr.includes('--')) {
      // Divide o texto em partes e aplica cores
      const parts = valorStr.split(/(\d+\+\+|\d+--)/);
      
      return (
        <span className={`text-4xl font-extrabold`}>
          {parts.map((part, index) => {
            if (part.includes('++')) {
              return (
                <span key={index} className="metric-positive">
                  {part}
                </span>
              );
            } else if (part.includes('--')) {
              return (
                <span key={index} className="metric-negative">
                  {part}
                </span>
              );
            } else {
              return (
                <span key={index} className={textColorClass}>
                  {part}
                </span>
              );
            }
          })}
        </span>
      );
    }
    
    return (
      <span className={`text-4xl font-extrabold ${textColorClass}`}>
        {valorStr}
      </span>
    );
  };

  // Agrupar métricas por escopo
  const metricasPorEscopo: MetricasPorEscopo = {};
  if (realizacoesProfissionais.metricas) {
    realizacoesProfissionais.metricas.forEach(metrica => {
      if (!metricasPorEscopo[metrica.escopo]) {
        metricasPorEscopo[metrica.escopo] = [];
      }
      metricasPorEscopo[metrica.escopo].push(metrica);
    });
  }

  // Função para obter ícone baseado na atividade
  const getActivityIcon = (atividade: string) => {
    const activityLower = atividade.toLowerCase();
    if (activityLower.includes('commit')) return Github;
    if (activityLower.includes('pr') || activityLower.includes('pull request')) return GitPullRequest;
    if (activityLower.includes('linha') || activityLower.includes('código')) return Code;
    if (activityLower.includes('chamado')) return Headphones;
    if (activityLower.includes('aprendizado')) return BookOpen;
    return BarChart3;
  };

  // Função para obter cor baseada no escopo
  const getScopeColor = (escopo: string) => {
    const escopoLower = escopo.toLowerCase();
    if (escopoLower.includes('backend')) return 'text-primary';
    if (escopoLower.includes('frontend')) return 'text-secondary';
    if (escopoLower.includes('help desk') || escopoLower.includes('atendimento')) return 'text-tertiary';
    if (escopoLower.includes('educação')) return 'text-primary-light';
    return 'text-neutral-300';
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
          <TrendingUp className={`w-7 h-7 ${ICON_COLORS.primary} drop-shadow-lg`} />
        </div>
        <div>
          <h2 className={TYPOGRAPHY.sectionTitlePrimary}>Realizações Profissionais</h2>
          <p className={`${TYPOGRAPHY.bodySmall} mt-2 max-w-3xl font-medium`}>
            {realizacoesProfissionais.descricao}
          </p>
        </div>
      </div>

      {/* Destaques */}
      {realizacoesProfissionais.destaques && realizacoesProfissionais.destaques.length > 0 && (
        <div className="mb-10">
          <h3 className="text-subtitle">Principais Destaques</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {realizacoesProfissionais.destaques.map((destaque, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3 p-4 bg-gradient-to-br from-primary/5 via-neutral-900/20 to-secondary/5 border border-primary/20 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <p className="text-neutral-200 leading-relaxed">{destaque}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Métricas por Escopo */}
      {Object.keys(metricasPorEscopo).length > 0 && (
        <div className="space-y-8">
          <h3 className="text-subtitle">Métricas de Performance</h3>
          
          {Object.entries(metricasPorEscopo).map(([escopo, metricas]) => (
            <div key={escopo} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 bg-gradient-to-br from-primary/20 to-primary-light/20 border border-primary/30 rounded-lg`}>
                  <BarChart3 className={`w-5 h-5 ${getScopeColor(escopo)}`} />
                </div>
                <h4 className={`text-xl font-bold ${getScopeColor(escopo)} capitalize`}>
                  {escopo}
                </h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {metricas.map((metrica, idx) => {
                  const ActivityIcon = getActivityIcon(metrica.atividade);
                  
                  return (
                    <div 
                      key={idx}
                      className="group relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                    >
                      {/* Ícone da atividade */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 bg-gradient-to-br from-primary/20 to-primary-light/20 border border-primary/30 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <ActivityIcon className={`w-6 h-6 ${ICON_COLORS.primary}`} />
                        </div>
                        
                        {metrica.tempo && (
                          <span className="text-xs text-neutral-400 font-medium bg-neutral-800/50 px-2 py-1 rounded-full">
                            {metrica.tempo}
                          </span>
                        )}
                      </div>
                      
                      {/* Valor da métrica */}
                      <div className="mb-3">
                        {renderMetricValue(metrica.valor, getScopeColor(escopo))}
                      </div>
                      
                      {/* Descrição da atividade */}
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-neutral-200 capitalize">
                          {metrica.atividade}
                        </h5>
                        
                        {metrica.observacao && (
                          <p className="text-xs text-neutral-400 leading-relaxed">
                            {metrica.observacao}
                          </p>
                        )}
                      </div>
                      
                      {/* Efeito decorativo */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary-light/40 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
