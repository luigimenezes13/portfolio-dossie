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
        <div className="icon-container bg-gradient-to-br from-accent-gold/20 to-accent-amber/20 border-accent-gold/40 shadow-lg shadow-accent-gold/20">
          <DollarSign className="w-7 h-7 text-accent-gold drop-shadow-lg" />
        </div>
        <h2 className="section-title bg-gradient-to-r from-white via-accent-gold to-white bg-clip-text text-transparent">Proposta de Valorização</h2>
      </div>

      <div className="relative mb-12">
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="card-base">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center border-2 border-secondary/50 group-hover:bg-warning/10 group-hover:border-warning/30 transition-all duration-300">
                  <TrendingDown className="w-6 h-6 text-neutral-400 group-hover:text-warning transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-300">Situação Atual</h3>
                  <p className="text-sm text-neutral-500 font-medium">Posição atual</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-neutral-300 text-sm mb-2 font-bold uppercase tracking-wider">{propostaValorizacao.situacaoAtual.modelo}</p>
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
                  <div className="w-12 h-12 bg-gradient-to-br from-success/20 to-accent-green/20 rounded-xl flex items-center justify-center border-2 border-success/50 shadow-lg shadow-success/20">
                    <TrendingUp className="w-6 h-6 text-success drop-shadow-lg" />
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
                      <p className="text-xs text-accent-amber uppercase tracking-wider mb-2 font-bold">Benefícios:</p>
                      <ul className="text-sm text-neutral-200 space-y-2">
                        {propostaValorizacao.proposta.beneficios.map((beneficio, idx) => (
                          <li key={idx} className="flex items-start gap-2 group">
                            <span className="text-success text-lg leading-none mt-0.5 group-hover:scale-125 transition-transform">✓</span>
                            <span className="group-hover:text-white transition-colors">{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {propostaValorizacao.proposta.observacoes && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <p className="text-xs text-info uppercase tracking-wider mb-1 font-bold">Observações:</p>
                      <p className="text-sm text-neutral-200 italic">{propostaValorizacao.proposta.observacoes}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-success/15 to-accent-green/15 border-2 border-success/40 rounded-full px-6 py-3 hover:border-success/60 hover:shadow-lg hover:shadow-success/20 transition-all duration-300 group">
            <span className="text-2xl group-hover:scale-110 transition-transform">✓</span>
            <span className="text-neutral-100 font-bold group-hover:text-white transition-colors">
              Proposta justa para o mercado de trabalho e as competências do investidor
            </span>
          </div>
        </div>
      </div>

      <div className="card-base">
        <h3 className="text-subtitle">
          <Building className="w-5 h-5 text-info" />
          Referência de Mercado
        </h3>
        <div className="flex items-center gap-3 flex-wrap mb-6">
          <p className="text-value text-xl">{referenciaMercado.cargo}</p>
          {referenciaMercado.senioridade && (
            <span className="px-3 py-1 bg-info/15 border border-info/30 text-info rounded-full text-sm font-bold hover:bg-info/25 transition-colors">
              {referenciaMercado.senioridade}
            </span>
          )}
          {referenciaMercado.regiao && (
            <span className="text-accent-amber text-sm font-medium px-2 py-1 bg-accent-amber/10 border border-accent-amber/20 rounded-md">📍 {referenciaMercado.regiao}</span>
          )}
        </div>
        <div className="grid-responsive-3 mb-4">
          <div className="group">
            <p className="text-small mb-2 text-warning">Mínimo</p>
            <p className="text-neutral-200 text-lg font-semibold group-hover:text-warning transition-colors">{formatCurrency(referenciaMercado.faixaSalarial.minimo)}</p>
          </div>
          <div className="group">
            <p className="text-small mb-2 text-info">Máximo</p>
            <p className="text-neutral-200 text-lg font-semibold group-hover:text-info transition-colors">{formatCurrency(referenciaMercado.faixaSalarial.maximo)}</p>
          </div>
          {referenciaMercado.faixaSalarial.pico && (
            <div className="group">
              <p className="text-small mb-2 text-success">Pico</p>
              <p className="text-success text-lg font-bold group-hover:scale-105 transition-transform">{formatCurrency(referenciaMercado.faixaSalarial.pico)}</p>
            </div>
          )}
          {referenciaMercado.faixaSalarial.mediana && (
            <div className="group">
              <p className="text-small mb-2 text-accent-amber">Mediana</p>
              <p className="text-neutral-200 text-lg font-semibold group-hover:text-accent-amber transition-colors">{formatCurrency(referenciaMercado.faixaSalarial.mediana)}</p>
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
