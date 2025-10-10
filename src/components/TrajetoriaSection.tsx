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
      className={`bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-700 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
          <Award className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-white">Trajetória Profissional</h2>
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Perfil</h3>
        <p className="text-gray-300 font-normal">{trajetoria.perfil}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Áreas de Atuação</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {trajetoria.areas.map((area, idx) => (
            <div key={idx} className="bg-black/50 border border-tertiary/20 rounded-xl p-4 hover:bg-black/70 hover:border-primary/30 transition-all duration-300 hover:scale-105 group">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                {area.nome}
              </h4>
              <p className="text-sm text-gray-300 font-normal">{area.descricao}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Alinhamento Cultural</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {trajetoria.alinhamentoCultural.map((item, idx) => (
            <div key={idx} className="bg-black/50 border border-tertiary/20 rounded-xl p-4 hover:bg-black/70 hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <p className="font-bold text-primary mb-2">{item.valor}</p>
              <p className="text-sm text-gray-300 font-normal">{item.exemploPratico}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
