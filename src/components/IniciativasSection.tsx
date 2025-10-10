import { Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Dossie } from '../types/api';

interface IniciativasSectionProps {
  iniciativasEstrategicas: Dossie['iniciativasEstrategicas'];
}

export function IniciativasSection({ iniciativasEstrategicas }: IniciativasSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className={`section-card ${isVisible ? 'animate-on-scroll-visible' : 'animate-on-scroll'}`}
    >
      <div className="section-header">
        <div className="icon-container">
          <Briefcase className="w-7 h-7 text-primary" />
        </div>
        <h2 className="section-title">Iniciativas Estratégicas</h2>
      </div>

      <div className="space-y-content-lg">
        {iniciativasEstrategicas.map((iniciativa, idx) => (
          <div key={idx} className="content-card content-card-scale-lg">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-2xl font-bold text-primary">{iniciativa.projeto}</h3>
              {iniciativa.impacto && (
                <span 
                  className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                    iniciativa.impacto === 'Crítico' ? 'bg-red-500/20 text-red-400 border border-red-500/40' :
                    iniciativa.impacto === 'Alto' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40' :
                    iniciativa.impacto === 'Médio' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40' :
                    'bg-green-500/20 text-green-400 border border-green-500/40'
                  }`}
                >
                  {iniciativa.impacto}
                </span>
              )}
            </div>
            <p className="text-neutral-200 text-lg leading-relaxed mb-3">{iniciativa.descricao}</p>
            <div className="flex flex-wrap gap-3 mt-4 pt-3 border-t border-white/10">
              {iniciativa.periodo && (
                <span className="text-xs text-neutral-400">
                  📅 {iniciativa.periodo}
                </span>
              )}
              {iniciativa.area && (
                <span className="text-xs text-primary font-medium">
                  🎯 {iniciativa.area}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
