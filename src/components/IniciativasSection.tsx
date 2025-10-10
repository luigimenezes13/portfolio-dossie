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
          <Briefcase className="w-6 h-6 text-primary" />
        </div>
        <h2 className="section-title">Iniciativas Estratégicas</h2>
      </div>

      <div className="space-y-content-lg">
        {iniciativasEstrategicas.map((iniciativa, idx) => (
          <div key={idx} className="content-card content-card-scale">
            <h3 className="text-xl font-bold text-primary mb-3">{iniciativa.projeto}</h3>
            <p className="text-description">{iniciativa.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
