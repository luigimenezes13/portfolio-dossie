import { Users, CheckCircle2 } from 'lucide-react';
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
        <div className="icon-container">
          <Users className="w-7 h-7 text-primary" />
        </div>
        <h2 className="section-title">Potencial de Retorno</h2>
      </div>

      <div className="mb-10">
        <h3 className="text-subtitle">Benefícios para a Empresa</h3>
        <div className="space-y-4">
          {potencialRetorno.beneficios.map((beneficio, idx) => (
            <div key={idx} className="flex items-start gap-4 text-neutral-200 hover:text-white transition-colors duration-300 group">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mt-1" />
              <span className="text-base leading-relaxed">{beneficio}</span>
            </div>
          ))}
        </div>
      </div>

      {(potencialRetorno.projecaoCargo || potencialRetorno.prazoEvolucao || potencialRetorno.estimativaROI) && (
        <div className="bg-gradient-to-r from-primary/10 to-tertiary/10 border-2 border-primary/40 rounded-2xl p-8 shadow-lg shadow-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {potencialRetorno.projecaoCargo && (
              <div className="text-center md:text-left flex-1">
                <p className="text-small mb-3">Projeção de Cargo</p>
                <p className="text-white font-bold text-2xl">{potencialRetorno.projecaoCargo}</p>
              </div>
            )}
            {potencialRetorno.prazoEvolucao && (
              <div className="text-center md:text-center flex-1">
                <p className="text-small mb-3">Prazo de Evolução</p>
                <p className="text-primary font-bold text-2xl">{potencialRetorno.prazoEvolucao}</p>
              </div>
            )}
            {potencialRetorno.estimativaROI && (
              <div className="text-center md:text-right flex-1">
                <p className="text-small mb-3">Estimativa de ROI</p>
                <p className="text-tertiary font-bold text-xl leading-tight">{potencialRetorno.estimativaROI}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
