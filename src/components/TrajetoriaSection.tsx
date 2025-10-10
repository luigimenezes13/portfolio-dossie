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
        {typeof trajetoria.perfil === 'string' ? (
          <p className="text-neutral-200 text-lg leading-relaxed">{trajetoria.perfil}</p>
        ) : (
          <div className="flex flex-wrap gap-3">
            {trajetoria.perfil.map((caracteristica, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors duration-200"
              >
                {caracteristica}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mb-10">
        <h3 className="text-subtitle">Áreas de Atuação</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {trajetoria.areas.map((area, idx) => (
            <div key={idx} className="content-card content-card-scale-lg group">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h4 className="font-bold text-white flex items-center gap-2 text-lg">
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                  {area.nome}
                </h4>
                {area.periodo && (
                  <span className="text-xs text-neutral-400 whitespace-nowrap">
                    {area.periodo}
                  </span>
                )}
              </div>
              {area.descricao && (
                <p className="text-base text-neutral-200 leading-relaxed">{area.descricao}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-subtitle">Alinhamento Cultural</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {trajetoria.alinhamentoCultural.map((item, idx) => (
            <div key={idx} className="content-card content-card-scale-lg">
              <p className="font-bold text-primary mb-3 text-lg">
                {item.dimensao}
              </p>
              <p className="text-base text-neutral-200 leading-relaxed">{item.exemploPratico}</p>
            </div>
          ))}
        </div>
      </div>

      {trajetoria.desenvolvimentoPessoal && trajetoria.desenvolvimentoPessoal.length > 0 && (
        <div>
          <h3 className="text-subtitle">Desenvolvimento Pessoal</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {trajetoria.desenvolvimentoPessoal.map((item, idx) => {
              if (typeof item === 'string') {
                return (
                  <div key={idx} className="content-card content-card-scale-lg">
                    <p className="text-base text-neutral-200 leading-relaxed">{item}</p>
                  </div>
                );
              }
              return (
                <div key={idx} className="content-card content-card-scale-lg">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-tertiary/20 border border-tertiary/40 text-tertiary rounded text-xs font-semibold">
                        {item.tipo}
                      </span>
                      {item.status && (
                        <span 
                          className={`text-xs font-medium ${
                            item.status === 'Concluído' ? 'text-green-400' :
                            item.status === 'Em andamento' ? 'text-yellow-400' :
                            'text-blue-400'
                          }`}
                        >
                          {item.status}
                        </span>
                      )}
                    </div>
                    {item.periodo && (
                      <span className="text-xs text-neutral-400 whitespace-nowrap">
                        {item.periodo}
                      </span>
                    )}
                  </div>
                  <p className="text-white font-semibold text-base mb-2">{item.titulo}</p>
                  {item.instituicao && (
                    <p className="text-sm text-neutral-300">{item.instituicao}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
