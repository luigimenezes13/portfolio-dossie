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
          badge: 'badge-tech',
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
        <div className="icon-container bg-gradient-to-br from-accent-orange/20 to-accent-rose/20 border-accent-orange/50 shadow-lg shadow-accent-orange/20">
          <Briefcase className="w-7 h-7 text-accent-orange drop-shadow-lg" />
        </div>
        <h2 className="section-title bg-gradient-to-r from-white via-accent-orange to-white bg-clip-text text-transparent">Iniciativas Estratégicas</h2>
      </div>


      {/* Grid de Iniciativas */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {iniciativasOrdenadas.map((iniciativa, idx) => {
          const config = getConfigCriticidade(iniciativa.impacto);
          
          return (
            <div 
              key={idx} 
              className="card-compact hover:shadow-xl hover:shadow-accent-orange/10 hover:border-accent-orange/20"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl drop-shadow-lg">{config.icon}</span>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent-rose to-accent-orange bg-clip-text text-transparent">{iniciativa.projeto}</h3>
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
                  <div className="flex items-center gap-2 text-sm text-info px-2 py-1 bg-info/10 border border-info/20 rounded-md">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{iniciativa.periodo}</span>
                  </div>
                )}
                {iniciativa.area && (
                  <div className="flex items-center gap-2 text-sm text-accent-rose font-medium px-2 py-1 bg-accent-rose/10 border border-accent-rose/30 rounded-md hover:bg-accent-rose/20 transition-all duration-300">
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
