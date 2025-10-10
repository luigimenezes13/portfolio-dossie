import { TrendingUp, BarChart3, Target, Github, BookOpen, CheckCircle, Star, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Dossie, Metrica } from '../types/api';
import PipefyIcon from '../assets/pipefy.svg';

interface AtuacaoSectionProps {
  atuacaoResultados: Dossie['atuacaoResultados'];
}

interface MetricasPorEscopo {
  [escopo: string]: Metrica[];
}

const escopoColors = [
  // Backend - Bege pastel elegante e sofisticado
  'from-stone-400/20 to-amber-200/20 border-stone-400/40 hover:from-stone-400/30 hover:to-amber-200/30 hover:border-stone-400/60',
  // Frontend - Verde vibrante para inovação (GitHub-like)
  'from-emerald-600/20 to-teal-600/20 border-emerald-500/40 hover:from-emerald-600/30 hover:to-teal-600/30 hover:border-emerald-500/60',
  // Help Desk - Laranja energético para automação (Pipefy-inspired)
  'from-orange-600/20 to-amber-600/20 border-orange-500/40 hover:from-orange-600/30 hover:to-amber-600/30 hover:border-orange-500/60',
  // Educação - Roxo sábio para aprendizado (Academic)
  'from-violet-600/20 to-purple-600/20 border-violet-500/40 hover:from-violet-600/30 hover:to-purple-600/30 hover:border-violet-500/60',
  // Fallback colors
  'from-indigo-600/20 to-blue-600/20 border-indigo-500/40 hover:from-indigo-600/30 hover:to-blue-600/30 hover:border-indigo-500/60',
  'from-rose-600/20 to-pink-600/20 border-rose-500/40 hover:from-rose-600/30 hover:to-pink-600/30 hover:border-rose-500/60',
];

const escopoTextColors = [
  // Backend - Bege pastel para contraste
  'text-amber-200',
  // Frontend - Verde claro para contraste
  'text-emerald-400',
  // Help Desk - Laranja claro para contraste
  'text-orange-400',
  // Educação - Roxo claro para contraste
  'text-violet-400',
  // Fallback colors
  'text-indigo-400',
  'text-rose-400',
];

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
                <span key={index} className="text-emerald-400" style={{ color: '#10b981' }}>
                  {part}
                </span>
              );
            } else if (part.includes('--')) {
              return (
                <span key={index} className="text-red-400" style={{ color: '#ef4444' }}>
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
      className={`section-card ${isVisible ? 'animate-on-scroll-visible' : 'animate-on-scroll'}`}
    >
      <div className="section-header">
        <div className="icon-container">
          <TrendingUp className="w-7 h-7 text-primary" />
        </div>
        <h2 className="section-title">Atuação e Resultados</h2>
      </div>

      <p className="text-description">{atuacaoResultados.descricao}</p>

      <div className="mb-10">
        <h3 className="text-subtitle mb-6">
          <Award className="w-5 h-5 text-primary" />
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
                className="group relative bg-gradient-to-r from-neutral-800/50 to-neutral-700/30 border border-neutral-600/30 rounded-xl p-5 hover:border-primary/40 hover:from-neutral-700/60 hover:to-neutral-600/40 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm"
              >
                {/* Ícone de destaque */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  
                  {/* Conteúdo do destaque */}
                  <div className="flex-1">
                    <p className="text-neutral-200 text-base leading-relaxed font-medium">
                      {destaque}
                    </p>
                  </div>
                  
                  {/* Indicador numérico */}
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/20 border border-primary/40 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">
                      {idx + 1}
                    </span>
                  </div>
                </div>
                
                {/* Linha de destaque sutil */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>

      {escopos.length > 0 && (
        <div>
          <h3 className="text-subtitle">
            <BarChart3 className="w-5 h-5 text-primary" />
            Métricas de Performance por Escopo
          </h3>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 md:grid-rows-[1fr_0.5fr_0.5fr]">
            {escopos.map((escopo, escopoIdx) => {
            const colorClass = escopoColors[escopoIdx % escopoColors.length];
            const textColorClass = escopoTextColors[escopoIdx % escopoTextColors.length];
            
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
                className={`bg-gradient-to-br ${colorClass} border-2 rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm shadow-lg flex flex-col ${gridClasses}`}
              >
                {/* Header do Card */}
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 bg-black/30 rounded-lg`}>
                      {escopoIdx === 0 || escopoIdx === 1 ? (
                        <Github className={`w-5 h-5 ${textColorClass}`} />
                      ) : escopoIdx === 2 ? (
                        <img src={PipefyIcon} alt="Pipefy" className={`w-5 h-5`} style={{ filter: 'brightness(0) saturate(100%) invert(70%) sepia(100%) saturate(2000%) hue-rotate(200deg)' }} />
                      ) : escopoIdx === 3 ? (
                        <BookOpen className={`w-5 h-5 ${textColorClass}`} />
                      ) : (
                        <Target className={`w-5 h-5 ${textColorClass}`} />
                      )}
                    </div>
                    <h4 className={`text-xl font-bold ${textColorClass}`}>
                      {escopo}
                    </h4>
                  </div>
                  <span className={`text-xs font-bold ${textColorClass} bg-black/30 px-2.5 py-1 rounded-full`}>
                    {metricasPorEscopo[escopo].length}
                  </span>
                </div>

                {/* Métricas do Escopo */}
                <div className="space-y-3 flex-1">
                  {metricasPorEscopo[escopo].map((metrica, idx) => (
                    <div 
                      key={idx}
                      className="bg-black/40 rounded-xl p-4 border border-white/5 hover:bg-black/50 transition-all duration-200"
                    >
                      {/* Valor e Atividade */}
                      <div className="flex items-baseline gap-2 mb-2">
                        {renderMetricValue(metrica.valor, textColorClass)}
                      </div>
                      <p className="text-white text-sm font-medium leading-snug mb-2">
                        {metrica.atividade}
                      </p>
                      
                      {/* Período */}
                      {metrica.tempo && (
                        <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                          <span className="text-xs text-neutral-400 uppercase tracking-wider">
                            Período:
                          </span>
                          <span className="text-xs text-neutral-200 font-semibold">
                            {metrica.tempo}
                          </span>
                        </div>
                      )}
                      
                      {/* Observação */}
                      {metrica.observacao && (
                        <div className="flex items-start gap-2 pt-2 border-t border-white/5 mt-2">
                          <span className="text-xs text-neutral-400 uppercase tracking-wider">
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
