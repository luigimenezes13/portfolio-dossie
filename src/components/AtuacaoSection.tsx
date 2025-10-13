import { TrendingUp, BarChart3, Crosshair, Github, BookOpen, CheckCircle, Star, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Dossie, Metrica } from '../types/api';
import PipefyIcon from '../assets/pipefy.svg';
import { CARD_CLASSES, ICON_CONTAINERS, ICON_COLORS, TYPOGRAPHY } from '../constants/design-system';

interface AtuacaoSectionProps {
  atuacaoResultados: Dossie['atuacaoResultados'];
}

interface MetricasPorEscopo {
  [escopo: string]: Metrica[];
}

export function AtuacaoSection({ atuacaoResultados }: AtuacaoSectionProps) {
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

    // Para outros valores, usa a cor padrão
    return (
      <span className={`text-4xl font-extrabold ${textColorClass}`}>
        {valorStr}
      </span>
    );
  };

  // Agrupar métricas por escopo
  const metricasPorEscopo: MetricasPorEscopo = (atuacaoResultados.metricas || []).reduce((acc, metrica) => {
    if (!acc[metrica.escopo]) {
      acc[metrica.escopo] = [];
    }
    acc[metrica.escopo].push(metrica);
    return acc;
  }, {} as MetricasPorEscopo);

  const escopos = Object.keys(metricasPorEscopo);

  return (
    <section 
      ref={ref}
      className={`${CARD_CLASSES.section} ${isVisible ? 'animate-on-scroll-visible' : 'animate-on-scroll'}`}
    >
      <div className="section-header">
        <div className={ICON_CONTAINERS.secondary}>
          <TrendingUp className={`w-7 h-7 ${ICON_COLORS.secondary} drop-shadow-lg`} />
        </div>
        <h2 className={TYPOGRAPHY.sectionTitleSecondary}>Atuação e Resultados</h2>
      </div>

      <p className="text-description">{atuacaoResultados.descricao}</p>

      <div className="mb-10">
        <h3 className="text-subtitle mb-6">
          <Award className={`w-5 h-5 ${ICON_COLORS.secondary}`} />
          Principais Destaques
        </h3>
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
          {atuacaoResultados.destaques.map((destaque, idx) => {
            // Ícones variados para cada destaque
            const highlightIcons = [Star, CheckCircle, Award, TrendingUp];
            const IconComponent = highlightIcons[idx % highlightIcons.length];
            
            return (
              <div 
                key={idx} 
                className="group relative card-compact hover:shadow-xl hover:shadow-secondary/10 hover:border-secondary/20"
              >
                {/* Ícone de destaque */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 border border-secondary/30 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-secondary" />
                  </div>
                  
                  {/* Conteúdo do destaque */}
                  <div className="flex-1">
                    <p className="text-neutral-200 text-base leading-relaxed font-medium">
                      {destaque}
                    </p>
                  </div>
                  
                  {/* Indicador numérico */}
                  <div className="flex-shrink-0 w-6 h-6 bg-neutral-700/30 border border-neutral-600/50 rounded-full flex items-center justify-center">
                    <span className="text-neutral-300 text-xs font-bold">
                      {idx + 1}
                    </span>
                  </div>
                </div>
                
                {/* Linha de destaque sutil */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neutral-600/60 via-neutral-600/30 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>

      {escopos.length > 0 && (
        <div>
          <h3 className="text-subtitle">
            <BarChart3 className={`w-5 h-5 ${ICON_COLORS.primary}`} />
            Métricas de Performance por Escopo
          </h3>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 md:grid-rows-[1fr_0.5fr_0.5fr]">
            {escopos.map((escopo, escopoIdx) => {
            // Definir classes específicas para cada card baseado no índice
            let gridClasses = '';
            if (escopoIdx === 0) {
              gridClasses = 'md:col-span-1 md:row-span-2'; // Backend - ocupa 2 linhas no desktop
            } else if (escopoIdx === 1) {
              gridClasses = 'md:col-span-1 md:row-span-2'; // Frontend - ocupa 2 linhas no desktop
            } else if (escopoIdx === 2) {
              gridClasses = 'md:col-span-1 md:row-span-1'; // Help Desk - ocupa 1 linha no desktop
            } else if (escopoIdx === 3) {
              gridClasses = 'md:col-span-1 md:row-span-1'; // Educação - ocupa 1 linha no desktop
            } else {
              gridClasses = 'md:col-span-1 md:row-span-1'; // Outros cards
            }
            
            return (
              <div 
                key={escopo}
                className={`${CARD_CLASSES.base} shadow-lg flex flex-col ${gridClasses}`}
              >
                {/* Header do Card */}
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      escopoIdx === 0 ? 'bg-primary/15 border border-primary/30' :
                      escopoIdx === 1 ? 'bg-primary-light/15 border border-primary-light/30' :
                      escopoIdx === 2 ? 'bg-tertiary/15 border border-tertiary/30' :
                      escopoIdx === 3 ? 'bg-secondary/15 border border-secondary/30' :
                      'bg-neutral-700/30'
                    }`}>
                      {escopoIdx === 0 ? (
                        <Github className={`w-5 h-5 ${ICON_COLORS.primary}`} />
                      ) : escopoIdx === 1 ? (
                        <Github className={`w-5 h-5 ${ICON_COLORS.secondary}`} />
                      ) : escopoIdx === 2 ? (
                        <img src={PipefyIcon} alt="Pipefy" className="w-5 h-5 opacity-80 brightness-125" />
                      ) : escopoIdx === 3 ? (
                        <BookOpen className={`w-5 h-5 ${ICON_COLORS.secondary}`} />
                      ) : (
                        <Crosshair className={`w-5 h-5 ${ICON_COLORS.tertiary}`} />
                      )}
                    </div>
                    <h4 className={`text-xl font-bold ${
                      escopoIdx === 0 ? 'text-primary' :
                      escopoIdx === 1 ? 'text-primary-light' :
                      escopoIdx === 2 ? 'text-tertiary' :
                      escopoIdx === 3 ? 'text-secondary' :
                      'text-neutral-300'
                    }`}>
                      {escopo}
                    </h4>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    escopoIdx === 0 ? 'text-primary bg-primary/20 border border-primary/30' :
                    escopoIdx === 1 ? 'text-primary-light bg-primary-light/20 border border-primary-light/30' :
                    escopoIdx === 2 ? 'text-tertiary bg-tertiary/20 border border-tertiary/30' :
                    escopoIdx === 3 ? 'text-secondary bg-secondary/20 border border-secondary/30' :
                    'text-neutral-300 bg-neutral-800/50'
                  }`}>
                    {metricasPorEscopo[escopo].length}
                  </span>
                </div>

                {/* Métricas do Escopo */}
                <div className="space-y-3 flex-1">
                  {metricasPorEscopo[escopo].map((metrica, idx) => (
                    <div 
                      key={idx}
                      className="bg-neutral-800/40 rounded-xl p-4 border border-neutral-700/20 hover:bg-neutral-800/60 transition-all duration-200"
                    >
                      {/* Valor e Atividade */}
                      <div className="flex items-baseline gap-2 mb-2">
                        {renderMetricValue(metrica.valor, 'metric-neutral')}
                      </div>
                      <p className="text-white text-sm font-medium leading-snug mb-2">
                        {metrica.atividade}
                      </p>
                      
                      {/* Período */}
                      {metrica.tempo && (
                        <div className="flex items-center gap-2 pt-2 border-t border-neutral-700/20">
                          <span className="text-xs text-primary uppercase tracking-wider font-bold">
                            Período:
                          </span>
                          <span className="text-xs text-neutral-100 font-semibold">
                            {metrica.tempo}
                          </span>
                        </div>
                      )}
                      
                      {/* Observação */}
                      {metrica.observacao && (
                        <div className="flex items-start gap-2 pt-2 border-t border-neutral-700/20 mt-2">
                          <span className="text-xs text-tertiary uppercase tracking-wider font-bold">
                            Obs:
                          </span>
                          <span className="text-xs text-neutral-200">
                            {metrica.observacao}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          </div>
        </div>
      )}
    </section>
  );
}
