import { DollarSign, TrendingDown, TrendingUp, Building } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Dossie } from '../types/api';
import { CARD_CLASSES, ICON_CONTAINERS, ICON_COLORS, TYPOGRAPHY } from '../constants/design-system';

interface ValorizacaoSectionProps {
  propostaValorizacao: Dossie['propostaValorizacao'];
  referenciaMercado: Dossie['referenciaMercado'];
}

export function ValorizacaoSection({ propostaValorizacao, referenciaMercado }: ValorizacaoSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  if (!propostaValorizacao || !referenciaMercado) {
    return null;
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <section 
      ref={ref}
      className={`${CARD_CLASSES.sectionPrimary} ${isVisible ? 'animate-on-scroll-visible' : 'animate-on-scroll'}`}
    >
      <div className="section-header">
        <div className={ICON_CONTAINERS.secondary}>
          <DollarSign className={`w-7 h-7 ${ICON_COLORS.secondary} drop-shadow-lg`} />
        </div>
        <h2 className={TYPOGRAPHY.sectionTitleSecondary}>Proposta de Valorização</h2>
      </div>

      <div className="relative mb-12">
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <div className={CARD_CLASSES.base}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-neutral-700/20 rounded-xl flex items-center justify-center border-2 border-neutral-600/50 group-hover:bg-neutral-600/10 group-hover:border-neutral-500/30 transition-all duration-300">
                  <TrendingDown className="w-6 h-6 text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300" />
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
            
            <div className={`${CARD_CLASSES.primary} border-2 border-primary/50 hover:border-primary/70 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-tertiary/5"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-xl flex items-center justify-center border-2 border-primary/50 shadow-lg shadow-primary/20`}>
                    <TrendingUp className={`w-6 h-6 ${ICON_COLORS.primary} drop-shadow-lg`} />
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
                      <p className="text-xs text-tertiary uppercase tracking-wider mb-2 font-bold">Benefícios:</p>
                      <ul className="text-sm text-neutral-200 space-y-2">
                        {propostaValorizacao.proposta.beneficios.map((beneficio, idx) => (
                          <li key={idx} className="flex items-start gap-2 group">
                            <span className="text-secondary text-lg leading-none mt-0.5 group-hover:scale-125 transition-transform">✓</span>
                            <span className="group-hover:text-white transition-colors">{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {propostaValorizacao.proposta.observacoes && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                    <p className="text-xs text-primary uppercase tracking-wider mb-1 font-bold">Observações:</p>
                      <p className="text-sm text-neutral-200 italic">{propostaValorizacao.proposta.observacoes}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-secondary/15 to-secondary-light/15 border-2 border-secondary/40 rounded-full px-6 py-3 hover:border-secondary/60 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 group`}>
            <span className="text-2xl group-hover:scale-110 transition-transform">✓</span>
            <span className="text-neutral-100 font-bold group-hover:text-white transition-colors">
              Proposta justa para o mercado de trabalho e as competências do investidor
            </span>
          </div>
        </div>
      </div>

      <div className={CARD_CLASSES.base}>
        <h3 className="text-subtitle">
          <Building className={`w-7 h-7 ${ICON_COLORS.primary}`} />
          Referência de Mercado
        </h3>
        <div className="flex items-center gap-3 flex-wrap mb-6">
          <p className="text-value text-xl">{referenciaMercado.cargo}</p>
          {referenciaMercado.senioridade && (
            <span className="px-3 py-1 bg-primary/15 border border-primary/30 text-primary rounded-full text-sm font-bold hover:bg-primary/25 transition-colors">
              {referenciaMercado.senioridade}
            </span>
          )}
          {referenciaMercado.regiao && (
            <span className="text-tertiary text-sm font-medium px-2 py-1 bg-tertiary/10 border border-tertiary/20 rounded-md">📍 {referenciaMercado.regiao}</span>
          )}
        </div>
        <div className="grid-responsive-3 mb-4">
          <div className="group">
            <p className="text-small mb-2 text-warning">Mínimo</p>
            <p className="text-neutral-200 text-lg font-semibold group-hover:text-warning transition-colors">{formatCurrency(referenciaMercado.faixaSalarial.minimo)}</p>
          </div>
          <div className="group">
            <p className="text-small mb-2 text-primary">Máximo</p>
            <p className="text-neutral-200 text-lg font-semibold group-hover:text-primary transition-colors">{formatCurrency(referenciaMercado.faixaSalarial.maximo)}</p>
          </div>
          {referenciaMercado.faixaSalarial.pico && (
            <div className="group">
              <p className="text-small mb-2 text-secondary">Pico</p>
              <p className="text-secondary text-lg font-bold group-hover:scale-105 transition-transform">{formatCurrency(referenciaMercado.faixaSalarial.pico)}</p>
            </div>
          )}
          {referenciaMercado.faixaSalarial.mediana && (
            <div className="group">
              <p className="text-small mb-2 text-tertiary">Mediana</p>
              <p className="text-neutral-200 text-lg font-semibold group-hover:text-tertiary transition-colors">{formatCurrency(referenciaMercado.faixaSalarial.mediana)}</p>
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
