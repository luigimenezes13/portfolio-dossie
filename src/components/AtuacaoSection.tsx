import { TrendingUp, Lightbulb, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Dossie } from '../types/api';

interface AtuacaoSectionProps {
  atuacaoResultados: Dossie['atuacaoResultados'];
}

export function AtuacaoSection({ atuacaoResultados }: AtuacaoSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className={`section-card ${isVisible ? 'animate-on-scroll-visible' : 'animate-on-scroll'}`}
    >
      <div className="section-header">
        <div className="icon-container">
          <TrendingUp className="w-6 h-6 text-primary" />
        </div>
        <h2 className="section-title">Atuação e Resultados</h2>
      </div>

      <p className="text-description">{atuacaoResultados.descricao}</p>

      <div className="mb-6">
        <h3 className="text-subtitle">
          <Lightbulb className="w-4 h-4 text-primary" />
          Principais Destaques
        </h3>
        <div className="space-y-content">
          {atuacaoResultados.destaques.map((destaque, idx) => (
            <div key={idx} className="content-card content-card-hover">
              <span className="text-highlight">•</span>
              <span className="text-gray-300 font-normal">{destaque}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-subtitle">
          <BarChart3 className="w-4 h-4 text-primary" />
          Métricas de Performance
        </h3>
        <div className="space-y-content">
          {atuacaoResultados.metricas.map((metrica, idx) => (
            <div key={idx} className="content-card-glow content-card-scale">
              <p className="text-gray-300 font-normal text-sm">{metrica}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
