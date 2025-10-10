import { DollarSign, TrendingDown, TrendingUp, Building } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Dossie } from '../types/api';

interface ValorizacaoSectionProps {
  propostaValorizacao: Dossie['propostaValorizacao'];
  referenciaMercado: Dossie['referenciaMercado'];
}

export function ValorizacaoSection({ propostaValorizacao, referenciaMercado }: ValorizacaoSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <section 
      ref={ref}
      className={`section-card-primary ${isVisible ? 'animate-on-scroll-visible' : 'animate-on-scroll'}`}
    >
      <div className="section-header">
        <div className="icon-container">
          <DollarSign className="w-7 h-7 text-primary" />
        </div>
        <h2 className="section-title">Proposta de Valorização</h2>
      </div>

      <div className="grid-responsive mb-10">
        <div className="content-card content-card-scale-lg">
          <div className="flex items-center gap-3 mb-4">
            <TrendingDown className="w-6 h-6 text-neutral-400" />
            <h3 className="text-xl font-semibold text-neutral-200">Situação Atual</h3>
          </div>
          <p className="text-muted mb-3">{propostaValorizacao.situacaoAtual.modelo}</p>
          <p className="text-value text-value-large">
            {formatCurrency(propostaValorizacao.situacaoAtual.valor)}
          </p>
        </div>

        <div className="content-card-glow content-card-scale-lg">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-white">Proposta</h3>
          </div>
          <p className="text-neutral-200 text-base mb-3 font-normal">{propostaValorizacao.proposta.modelo}</p>
          <p className="text-primary-value">
            {formatCurrency(propostaValorizacao.proposta.valorBruto)}
          </p>
          <p className="text-small-gray mt-1">
            Líquido: {formatCurrency(propostaValorizacao.proposta.valorLiquido)}
          </p>
        </div>
      </div>

      <div className="content-card">
        <h3 className="text-subtitle">
          <Building className="w-5 h-5" />
          Referência de Mercado
        </h3>
        <p className="text-value mb-6 text-xl">{referenciaMercado.cargo}</p>
        <div className="grid-responsive-3 mb-4">
          <div>
            <p className="text-small mb-2">Mínimo</p>
            <p className="text-neutral-200 text-lg font-semibold">{formatCurrency(referenciaMercado.faixaSalarial.minimo)}</p>
          </div>
          <div>
            <p className="text-small mb-2">Máximo</p>
            <p className="text-neutral-200 text-lg font-semibold">{formatCurrency(referenciaMercado.faixaSalarial.maximo)}</p>
          </div>
          <div>
            <p className="text-small mb-2">Pico</p>
            <p className="text-primary text-lg font-bold">{formatCurrency(referenciaMercado.faixaSalarial.pico)}</p>
          </div>
        </div>
        <p className="text-small-gray">Fontes: {referenciaMercado.fontesPesquisa.join(', ')}</p>
      </div>
    </section>
  );
}
