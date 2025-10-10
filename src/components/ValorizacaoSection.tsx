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

      <div className="relative mb-12">
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="card-base border-2 border-neutral-600/30 hover:border-neutral-500/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-neutral-700/50 rounded-xl flex items-center justify-center border-2 border-neutral-600/50">
                  <TrendingDown className="w-6 h-6 text-neutral-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-300">Situação Atual</h3>
                  <p className="text-sm text-neutral-500 font-medium">Posição atual</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-neutral-400 text-sm mb-2 font-medium uppercase tracking-wider">{propostaValorizacao.situacaoAtual.modelo}</p>
                <p className="text-neutral-100 text-4xl md:text-5xl font-bold">
                  {formatCurrency(propostaValorizacao.situacaoAtual.valor)}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-3 -right-3 z-10">
              <div className="bg-gradient-to-r from-primary to-tertiary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                PROPOSTA
              </div>
            </div>
            
            <div className="card-primary border-2 border-primary/50 hover:border-primary/70 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-tertiary/5"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-tertiary/20 rounded-xl flex items-center justify-center border-2 border-primary/50">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Proposta</h3>
                    <p className="text-sm text-primary font-medium">Nova posição</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-neutral-200 text-sm mb-2 font-medium uppercase tracking-wider">{propostaValorizacao.proposta.modelo}</p>
                  <p className="text-primary text-4xl md:text-5xl font-bold">
                    {formatCurrency(propostaValorizacao.proposta.valorBruto)}
                  </p>
                  {propostaValorizacao.proposta.valorLiquido && (
                    <p className="text-neutral-300 text-lg mt-2 font-medium">
                      Líquido: {formatCurrency(propostaValorizacao.proposta.valorLiquido)}
                    </p>
                  )}
                  {propostaValorizacao.proposta.beneficios && propostaValorizacao.proposta.beneficios.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-white/10">
                      <p className="text-xs text-neutral-400 uppercase tracking-wider mb-2">Benefícios:</p>
                      <ul className="text-sm text-neutral-200 space-y-1">
                        {propostaValorizacao.proposta.beneficios.map((beneficio, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {propostaValorizacao.proposta.observacoes && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">Observações:</p>
                      <p className="text-sm text-neutral-200 italic">{propostaValorizacao.proposta.observacoes}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-tertiary/10 border border-primary/30 rounded-full px-6 py-3">
            <span className="text-neutral-200 font-semibold">
              Proposta justa para o mercado de trabalho e as competências do investidor
            </span>
          </div>
        </div>
      </div>

      <div className="card-base">
        <h3 className="text-subtitle">
          <Building className="w-5 h-5" />
          Referência de Mercado
        </h3>
        <div className="flex items-center gap-3 flex-wrap mb-6">
          <p className="text-value text-xl">{referenciaMercado.cargo}</p>
          {referenciaMercado.senioridade && (
            <span className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm font-semibold">
              {referenciaMercado.senioridade}
            </span>
          )}
          {referenciaMercado.regiao && (
            <span className="text-neutral-400 text-sm">📍 {referenciaMercado.regiao}</span>
          )}
        </div>
        <div className="grid-responsive-3 mb-4">
          <div>
            <p className="text-small mb-2">Mínimo</p>
            <p className="text-neutral-200 text-lg font-semibold">{formatCurrency(referenciaMercado.faixaSalarial.minimo)}</p>
          </div>
          <div>
            <p className="text-small mb-2">Máximo</p>
            <p className="text-neutral-200 text-lg font-semibold">{formatCurrency(referenciaMercado.faixaSalarial.maximo)}</p>
          </div>
          {referenciaMercado.faixaSalarial.pico && (
            <div>
              <p className="text-small mb-2">Pico</p>
              <p className="text-primary text-lg font-bold">{formatCurrency(referenciaMercado.faixaSalarial.pico)}</p>
            </div>
          )}
          {referenciaMercado.faixaSalarial.mediana && (
            <div>
              <p className="text-small mb-2">Mediana</p>
              <p className="text-neutral-200 text-lg font-semibold">{formatCurrency(referenciaMercado.faixaSalarial.mediana)}</p>
            </div>
          )}
        </div>
        <div className="space-y-2">
          <p className="text-small-gray">Fontes: {referenciaMercado.fontesPesquisa.join(', ')}</p>
          {referenciaMercado.dataReferencia && (
            <p className="text-small-gray">Data da pesquisa: {referenciaMercado.dataReferencia}</p>
          )}
        </div>
      </div>
    </section>
  );
}
