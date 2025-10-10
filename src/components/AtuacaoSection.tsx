import { TrendingUp, Lightbulb, BarChart3 } from 'lucide-react';
import type { Dossie } from '../types/api';

interface AtuacaoSectionProps {
  atuacaoResultados: Dossie['atuacaoResultados'];
}

export function AtuacaoSection({ atuacaoResultados }: AtuacaoSectionProps) {
  return (
    <section className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-8 animate-fade-in-up hover:shadow-xl hover:shadow-primary/10 transition-all duration-300" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
          <TrendingUp className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-white">Atuação e Resultados</h2>
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed">{atuacaoResultados.descricao}</p>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-primary" />
          Principais Destaques
        </h3>
        <div className="space-y-3">
          {atuacaoResultados.destaques.map((destaque, idx) => (
            <div key={idx} className="bg-black/50 border border-tertiary/20 rounded-xl p-4 flex items-start gap-3 hover:bg-black/70 hover:border-primary/30 transition-all duration-300 hover:translate-x-2">
              <span className="text-primary font-bold">•</span>
              <span className="text-gray-300">{destaque}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-primary" />
          Métricas de Performance
        </h3>
        <div className="space-y-3">
          {atuacaoResultados.metricas.map((metrica, idx) => (
            <div key={idx} className="bg-gradient-to-r from-primary/10 to-tertiary/10 border border-primary/30 rounded-xl p-4 hover:from-primary/20 hover:to-tertiary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <p className="text-gray-300 font-mono text-sm">{metrica}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
