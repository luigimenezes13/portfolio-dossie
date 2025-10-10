import { Briefcase } from 'lucide-react';
import type { Dossie } from '../types/api';

interface IniciativasSectionProps {
  iniciativasEstrategicas: Dossie['iniciativasEstrategicas'];
}

export function IniciativasSection({ iniciativasEstrategicas }: IniciativasSectionProps) {
  return (
    <section className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-8 animate-fade-in-up hover:shadow-xl hover:shadow-primary/10 transition-all duration-300" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
          <Briefcase className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-white">Iniciativas Estratégicas</h2>
      </div>

      <div className="space-y-4">
        {iniciativasEstrategicas.map((iniciativa, idx) => (
          <div key={idx} className="bg-black/50 border border-tertiary/20 rounded-xl p-6 hover:bg-black/70 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-xl font-bold text-primary mb-3">{iniciativa.projeto}</h3>
            <p className="text-gray-300 leading-relaxed">{iniciativa.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
