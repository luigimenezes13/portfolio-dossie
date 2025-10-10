import { TrendingUp, CheckCircle2, Crosshair, Clock, LineChart, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Dossie } from '../types/api';

interface PotencialSectionProps {
  potencialRetorno: Dossie['potencialRetorno'];
}

export function PotencialSection({ potencialRetorno }: PotencialSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className={`section-card ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="section-header">
        <div className="icon-container bg-gradient-to-br from-info/20 to-accent-purple/20 border-info/50 shadow-lg shadow-info/20">
          <TrendingUp className="w-7 h-7 text-info drop-shadow-lg" />
        </div>
        <div>
          <h2 className="section-title bg-gradient-to-r from-white via-info to-white bg-clip-text text-transparent">Potencial de Retorno</h2>
          <p className="text-neutral-300 text-sm mt-2 max-w-3xl font-medium">
            Valor estratégico e impacto esperado para a organização
          </p>
        </div>
      </div>

      {/* Seção de Benefícios */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-5 h-5 text-accent-amber" />
          <h3 className="text-subtitle">Benefícios para a Empresa</h3>
        </div>
        <div className="grid gap-4">
          {potencialRetorno.beneficios.map((beneficio, idx) => (
            <div 
              key={idx} 
              className="card-compact group hover:border-success/30 hover:shadow-success/10"
              style={{ 
                transitionDelay: `${idx * 50}ms`,
                animationDelay: `${idx * 100}ms`
              }}
            >
              <CheckCircle2 className="w-6 h-6 text-success group-hover:text-success/80 flex-shrink-0 group-hover:scale-110 transition-all duration-300 mt-0.5" />
              <span className="text-base leading-relaxed text-neutral-300 group-hover:text-white transition-colors duration-300">
                {beneficio}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Métricas - Cards Individuais */}
      {(potencialRetorno.projecaoCargo || potencialRetorno.prazoEvolucao || potencialRetorno.estimativaROI) && (
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <LineChart className="w-5 h-5 text-info" />
            <h3 className="text-subtitle">Projeção de Crescimento</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {potencialRetorno.projecaoCargo && (
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-info/10 via-neutral-800/30 to-neutral-900/20 border border-info/30 hover:border-info/50 p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-info/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-info/20 rounded-full blur-3xl group-hover:bg-info/30 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Crosshair className="w-8 h-8 text-info group-hover:text-info/80 group-hover:rotate-12 transition-all duration-500" />
                    <div className="px-3 py-1 rounded-full bg-info/20 border border-info/30 text-info text-xs font-semibold">
                      Cargo
                    </div>
                  </div>
                  <p className="text-sm text-info/70 mb-3 uppercase tracking-wide font-bold">
                    Projeção de Cargo
                  </p>
                  <p className="text-white font-bold text-2xl leading-tight">
                    {potencialRetorno.projecaoCargo}
                  </p>
                </div>
              </div>
            )}

            {potencialRetorno.prazoEvolucao && (
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-warning/10 via-neutral-800/30 to-neutral-900/20 border border-warning/30 hover:border-warning/50 p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-warning/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-warning/20 rounded-full blur-3xl group-hover:bg-warning/30 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Clock className="w-8 h-8 text-warning group-hover:text-warning/80 group-hover:rotate-12 transition-all duration-500" />
                    <div className="px-3 py-1 rounded-full bg-warning/20 border border-warning/30 text-warning text-xs font-semibold">
                      Prazo
                    </div>
                  </div>
                  <p className="text-sm text-warning/70 mb-3 uppercase tracking-wide font-bold">
                    Prazo de Evolução
                  </p>
                  <p className="text-white font-bold text-2xl leading-tight">
                    {potencialRetorno.prazoEvolucao}
                  </p>
                </div>
              </div>
            )}

            {potencialRetorno.estimativaROI && (
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-800/50 via-neutral-800/30 to-neutral-900/20 border border-neutral-700/50 hover:border-primary/40 p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-700/20 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="w-8 h-8 text-neutral-300 group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                    <div className="px-3 py-1 rounded-full bg-neutral-700/50 text-neutral-300 group-hover:bg-primary/20 group-hover:text-primary text-xs font-semibold transition-all duration-300">
                      ROI
                    </div>
                  </div>
                  <p className="text-sm text-primary/70 mb-3 uppercase tracking-wide font-bold">
                    Estimativa de ROI
                  </p>
                  <p className="text-white font-bold text-xl leading-tight group-hover:text-primary transition-colors duration-300">
                    {potencialRetorno.estimativaROI}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
