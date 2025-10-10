import { Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Dossie } from '../types/api';

interface ObjetivoSectionProps {
  objetivo: Dossie['objetivo'];
}

export function ObjetivoSection({ objetivo }: ObjetivoSectionProps) {
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
          <Target className="w-7 h-7 text-primary" />
        </div>
        <h2 className="section-title">Objetivo da Efetivação</h2>
      </div>
      
      <p className="text-description">{objetivo.descricao}</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="content-card content-card-scale-lg">
          <p className="text-small mb-3">Cargo Proposto</p>
          <p className="text-white font-bold text-xl">{objetivo.cargoProposto}</p>
          {objetivo.senioridadeProposta && (
            <p className="text-primary text-sm mt-2 font-medium">{objetivo.senioridadeProposta}</p>
          )}
        </div>
        <div className="content-card content-card-scale-lg">
          <p className="text-small mb-3">Modelo</p>
          <p className="text-white font-bold text-xl">{objetivo.modeloContratacao}</p>
        </div>
        <div className="content-card content-card-scale-lg">
          <p className="text-small mb-3">Empresa</p>
          <p className="text-white font-bold text-xl">{objetivo.empresa}</p>
        </div>
      </div>
    </section>
  );
}
