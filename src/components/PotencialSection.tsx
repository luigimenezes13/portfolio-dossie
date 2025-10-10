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
      className={`bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-700 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
          <Users className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-white">Potencial de Retorno</h2>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-400 mb-3">Benefícios para a Empresa</h3>
        <div className="space-y-2">
          {potencialRetorno.beneficios.map((beneficio, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span>{beneficio}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-tertiary/10 border border-primary/30 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Projeção de Cargo</p>
            <p className="text-white font-bold text-lg">{potencialRetorno.projecaoCargo}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Prazo de Evolução</p>
            <p className="text-primary font-bold text-lg">{potencialRetorno.prazoEvolucao}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
