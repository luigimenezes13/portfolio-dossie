import { Briefcase, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Dossie, IniciativaEstrategica } from '../types/api';

interface IniciativasSectionProps {
  iniciativasEstrategicas: Dossie['iniciativasEstrategicas'];
}

export function IniciativasSection({ iniciativasEstrategicas }: IniciativasSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  // Ordenar iniciativas por criticidade (Médio -> Alto -> Crítico)
  const ordenarPorCriticidade = (a: IniciativaEstrategica, b: IniciativaEstrategica) => {
    const ordem = { 'Médio': 1, 'Alto': 2, 'Crítico': 3, 'Baixo': 0 };
    const nivelA = ordem[a.impacto as keyof typeof ordem] || 0;
    const nivelB = ordem[b.impacto as keyof typeof ordem] || 0;
    return nivelA - nivelB;
  };

  // Ordenar iniciativas por criticidade
  const iniciativasOrdenadas = iniciativasEstrategicas.sort(ordenarPorCriticidade);

  // Obter configuração visual baseada na criticidade (usando classes padronizadas)
  const getConfigCriticidade = (impacto?: string) => {
    switch (impacto) {
      case 'Crítico':
        return {
          badge: 'badge-critical',
          icon: '🔴'
        };
      case 'Alto':
        return {
          badge: 'badge-high',
          icon: '🟠'
        };
      case 'Médio':
        return {
          badge: 'badge-medium',
          icon: '🟡'
        };
      case 'Baixo':
        return {
          badge: 'badge-low',
          icon: '🟢'
        };
      default:
        return {
          badge: 'badge-base bg-neutral-600 text-white border-neutral-500',
          icon: '⚪'
        };
    }
  };

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


      {/* Grid de Iniciativas */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {iniciativasOrdenadas.map((iniciativa, idx) => {
          const config = getConfigCriticidade(iniciativa.impacto);
          
          return (
            <div 
              key={idx} 
              className="card-compact hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{config.icon}</span>
                  <h3 className="text-2xl font-bold text-primary">{iniciativa.projeto}</h3>
                </div>
                {iniciativa.impacto && (
                  <span className={config.badge}>
                    {iniciativa.impacto}
                  </span>
                )}
              </div>
              
              <p className="text-neutral-200 text-lg leading-relaxed mb-4">{iniciativa.descricao}</p>
              
              {/* Informações Adicionais */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                {iniciativa.periodo && (
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <Clock className="w-4 h-4" />
                    <span>{iniciativa.periodo}</span>
                  </div>
                )}
                {iniciativa.area && (
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Briefcase className="w-4 h-4" />
                    <span>{iniciativa.area}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
