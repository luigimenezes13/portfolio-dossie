import { DollarSign, TrendingDown, TrendingUp, Building } from 'lucide-react';
import type { Dossie } from '../types/api';

interface ValorizacaoSectionProps {
  propostaValorizacao: Dossie['propostaValorizacao'];
  referenciaMercado: Dossie['referenciaMercado'];
}

export function ValorizacaoSection({ propostaValorizacao, referenciaMercado }: ValorizacaoSectionProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <section className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-8 animate-fade-in-up hover:shadow-xl hover:shadow-primary/10 transition-all duration-300" style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
          <DollarSign className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-white">Proposta de Valorização</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-black/50 border border-tertiary/20 rounded-xl p-6 hover:bg-black/70 hover:border-tertiary/30 transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-300">Situação Atual</h3>
          </div>
          <p className="text-gray-400 text-sm mb-2">{propostaValorizacao.situacaoAtual.modelo}</p>
          <p className="text-white text-3xl font-bold">
            {formatCurrency(propostaValorizacao.situacaoAtual.valor)}
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/20 to-tertiary/20 border border-primary/40 rounded-xl p-6 hover:from-primary/30 hover:to-tertiary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105 animate-pulse-glow">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-white">Proposta</h3>
          </div>
          <p className="text-gray-300 text-sm mb-2">{propostaValorizacao.proposta.modelo}</p>
          <p className="text-primary text-3xl font-bold mb-1">
            {formatCurrency(propostaValorizacao.proposta.valorBruto)}
          </p>
          <p className="text-gray-400 text-xs">
            Líquido: {formatCurrency(propostaValorizacao.proposta.valorLiquido)}
          </p>
        </div>
      </div>

      <div className="bg-black/50 border border-tertiary/20 rounded-xl p-6">
        <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
          <Building className="w-4 h-4" />
          Referência de Mercado
        </h3>
        <p className="text-white font-semibold mb-3">{referenciaMercado.cargo}</p>
        <div className="grid grid-cols-3 gap-4 mb-3">
          <div>
            <p className="text-xs text-gray-400">Mínimo</p>
            <p className="text-gray-300 font-mono text-sm">{formatCurrency(referenciaMercado.faixaSalarial.minimo)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Máximo</p>
            <p className="text-gray-300 font-mono text-sm">{formatCurrency(referenciaMercado.faixaSalarial.maximo)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Pico</p>
            <p className="text-primary font-mono text-sm font-bold">{formatCurrency(referenciaMercado.faixaSalarial.pico)}</p>
          </div>
        </div>
        <p className="text-xs text-gray-500">Fontes: {referenciaMercado.fontesPesquisa.join(', ')}</p>
      </div>
    </section>
  );
}
