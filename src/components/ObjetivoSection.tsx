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
      className={`bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-700 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
          <Target className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-white">Objetivo da Efetivação</h2>
      </div>
      
      <p className="text-gray-300 mb-6 leading-relaxed">{objetivo.descricao}</p>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-black/50 border border-tertiary/20 rounded-xl p-4 hover:bg-black/70 hover:border-primary/30 transition-all duration-300 hover:scale-105">
          <p className="text-xs text-gray-400 mb-2">Cargo Proposto</p>
          <p className="text-white font-bold text-lg">{objetivo.cargoProposto}</p>
        </div>
        <div className="bg-black/50 border border-tertiary/20 rounded-xl p-4 hover:bg-black/70 hover:border-primary/30 transition-all duration-300 hover:scale-105">
          <p className="text-xs text-gray-400 mb-2">Modelo</p>
          <p className="text-white font-bold text-lg">{objetivo.modeloContratacao}</p>
        </div>
        <div className="bg-black/50 border border-tertiary/20 rounded-xl p-4 hover:bg-black/70 hover:border-primary/30 transition-all duration-300 hover:scale-105">
          <p className="text-xs text-gray-400 mb-2">Empresa</p>
          <p className="text-white font-bold text-lg">{objetivo.empresa}</p>
        </div>
      </div>
    </section>
  );
}
