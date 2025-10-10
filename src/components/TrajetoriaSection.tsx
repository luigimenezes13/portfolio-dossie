import { Award, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Dossie } from '../types/api';

interface TrajetoriaSectionProps {
  trajetoria: Dossie['trajetoria'];
}

export function TrajetoriaSection({ trajetoria }: TrajetoriaSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className={`section-card ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="section-header">
        <div className="icon-container">
          <Award className="w-7 h-7 text-primary" />
        </div>
        <h2 className="section-title">Trajetória Profissional</h2>
      </div>
      
      <div className="mb-10">
        <h3 className="text-subtitle">Perfil</h3>
        <p className="text-neutral-200 text-lg leading-relaxed">{trajetoria.perfil}</p>
      </div>

      <div className="mb-10">
        <h3 className="text-subtitle">Áreas de Atuação</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {trajetoria.areas.map((area, idx) => (
            <div key={idx} className="content-card content-card-scale-lg group">
              <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-lg">
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                {area.nome}
              </h4>
              <p className="text-base text-neutral-200 leading-relaxed">{area.descricao}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-subtitle">Alinhamento Cultural</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {trajetoria.alinhamentoCultural.map((item, idx) => (
            <div key={idx} className="content-card content-card-scale-lg">
              <p className="font-bold text-primary mb-3 text-lg">{item.valor}</p>
              <p className="text-base text-neutral-200 leading-relaxed">{item.exemploPratico}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
