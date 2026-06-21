import { useDossie } from '../contexts/DossieContext';
import { renderBoldRed } from '../lib/markdown-bold';
import { Editable } from '../components/Editable';

export function PleitoPleno() {
  const DOSSIE = useDossie();
  const sal = DOSSIE.pleitoPleno.salario;
  const min = Math.min(...sal.benchmarks.map((b) => b.valor));
  const max = Math.max(...sal.benchmarks.map((b) => b.valor));
  const range = max - min;

  return (
    <section className="relative bg-dossie-default text-ink py-24 lg:py-32 rule-bottom border-dossie-rule">
      <div className="dossie-container">
        {/* Masthead */}
        <div className="text-kicker mb-5">№ 14 · O PLEITO</div>
        <h2 className="text-section-title text-balance max-w-4xl mb-6">
          Pleno · <span className="red">AVD julho/2026</span>.
        </h2>
        <p className="text-deck max-w-2xl mb-20 text-ink/65">
          Não pleito de tempo. Pleito de evidência. Os comportamentos GROWTH viraram regime.
        </p>

        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {/* COL PRINCIPAL · 8 col */}
          <div className="col-span-12 lg:col-span-8 space-y-16">
            {/* Bloco 1 — Onde estou */}
            <div>
              <div className="flex items-center gap-4 mb-6 pb-3 border-b border-dossie-rule">
                <span className="editorial-number text-xl font-medium">01</span>
                <span className="text-kicker">ONDE ESTOU</span>
              </div>
              <ul className="space-y-2 font-serif text-fluid-deck text-ink/85 leading-relaxed">
                {DOSSIE.pleitoPleno.ondeEstou.map((linha, i) => (
                  <li key={i} className="text-pretty">
                    <Editable path={`pleitoPleno.ondeEstou[${i}]`} multiline as="span">{linha}</Editable>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bloco 2 — Por que Pleno */}
            <div>
              <div className="flex items-center gap-4 mb-6 pb-3 border-b border-dossie-rule">
                <span className="editorial-number text-xl font-medium">02</span>
                <span className="text-kicker">POR QUE PLENO · SÍNTESE GROWTH</span>
              </div>
              <div className="space-y-3 max-w-3xl">
                {DOSSIE.pleitoPleno.porQuePleno.map((item, i) => (
                  <div key={i} className="grid grid-cols-[auto_1fr] gap-5 items-baseline border-b border-dossie-ruleSoft pb-3">
                    <span className="font-serif text-primary text-2xl font-medium leading-none">{item.letra}</span>
                    <span className="font-serif text-[16px] text-ink/85 text-pretty">
                      <Editable path={`pleitoPleno.porQuePleno[${i}].texto`} multiline as="span">{item.texto}</Editable>
                    </span>
                  </div>
                ))}
              </div>
              <p className="font-editorial italic text-fluid-quote text-ink/70 mt-6 max-w-3xl">
                Comportamentos observáveis. Não pleito de tempo — pleito de evidência.
              </p>
            </div>

            {/* Bloco 3 — Salário */}
            <div>
              <div className="flex items-center gap-4 mb-6 pb-3 border-b border-dossie-rule">
                <span className="editorial-number text-xl font-medium">03</span>
                <span className="text-kicker">PRETENSÃO · MERCADO CAMPINAS</span>
              </div>

              {/* Gráfico horizontal editorial · labels alternados acima/baixo */}
              <div className="bg-dossie-card border border-dossie-rule p-8 pb-10 mb-8">
                {/* Sorted por valor pra alternância previsível */}
                {(() => {
                  const sorted = [...sal.benchmarks].sort((a, b) => a.valor - b.valor);
                  return (
                    <div className="relative" style={{ paddingTop: 64, paddingBottom: 64 }}>
                      {/* Eixo horizontal */}
                      <div className="relative h-px bg-ink/15">
                        {sorted.map((b, i) => {
                          const pct = ((b.valor - min) / range) * 100;
                          // Alterna posição: 0=baixo, 1=cima, 2=baixo, 3=cima...
                          // Destaque (pretensão) sempre tem posição própria — mais alta
                          const above = b.destaque ? true : i % 2 === 1;
                          return (
                            <div
                              key={i}
                              className="absolute -top-1.5 -translate-x-1/2 flex flex-col items-center"
                              style={{ left: `${pct}%` }}
                            >
                              {/* Dot */}
                              <div
                                className={`rounded-full ${
                                  b.destaque
                                    ? 'w-5 h-5 bg-amber-400 ring-4 ring-amber-400/15 z-20 relative'
                                    : 'w-2.5 h-2.5 bg-primary z-10 relative'
                                }`}
                              />

                              {/* Linha conectora + label · acima ou abaixo */}
                              {above ? (
                                <div
                                  className="absolute flex flex-col items-center"
                                  style={{ bottom: '100%', marginBottom: 6 }}
                                >
                                  <div
                                    className={`font-serif text-[12px] whitespace-nowrap font-medium ${
                                      b.destaque ? 'text-amber-400' : 'text-ink/70'
                                    }`}
                                  >
                                    R$ {b.valor.toLocaleString('pt-BR')}
                                  </div>
                                  <div
                                    className={`mt-1 text-[10px] uppercase tracking-wider whitespace-nowrap ${
                                      b.destaque ? 'text-amber-400 font-bold' : 'text-ink/55'
                                    }`}
                                  >
                                    {b.label}
                                  </div>
                                  {/* Conector vertical */}
                                  <div
                                    className={`mt-1 w-px ${b.destaque ? 'bg-amber-400/50' : 'bg-ink/20'}`}
                                    style={{ height: 14 }}
                                  />
                                </div>
                              ) : (
                                <div
                                  className="absolute flex flex-col items-center"
                                  style={{ top: '100%', marginTop: 6 }}
                                >
                                  {/* Conector vertical */}
                                  <div
                                    className="w-px bg-ink/20"
                                    style={{ height: 14 }}
                                  />
                                  <div className="mt-1 text-[10px] uppercase tracking-wider whitespace-nowrap text-ink/55">
                                    {b.label}
                                  </div>
                                  <div className="mt-1 font-serif text-[12px] whitespace-nowrap font-medium text-ink/70">
                                    R$ {b.valor.toLocaleString('pt-BR')}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}
              </div>

              <div className="space-y-4 max-w-3xl">
                {sal.narrativa.map((linha, i) => (
                  <p
                    key={i}
                    className={`text-pretty ${
                      i === sal.narrativa.length - 1
                        ? 'font-editorial italic text-fluid-quote text-primary'
                        : 'font-serif text-[17px] text-ink/85'
                    }`}
                  >
                    &ldquo;{renderBoldRed(linha)}&rdquo;
                  </p>
                ))}
              </div>
            </div>

            {/* Bloco 4 — O que muda */}
            <div>
              <div className="flex items-center gap-4 mb-6 pb-3 border-b border-dossie-rule">
                <span className="editorial-number text-xl font-medium">04</span>
                <span className="text-kicker">O QUE MUDA NO TIME</span>
              </div>
              <ul className="space-y-2 font-serif text-fluid-deck text-ink/85 leading-relaxed">
                {DOSSIE.pleitoPleno.oQueMuda.map((linha, i) => (
                  <li key={i} className="text-pretty">
                    — <Editable path={`pleitoPleno.oQueMuda[${i}]`} multiline as="span">{linha}</Editable>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SIDEBAR · ficha do pleito */}
          <aside className="col-span-12 lg:col-span-4 lg:pl-8 lg:border-l border-dossie-rule">
            <div className="text-kicker mb-4 text-[10px]">FICHA DO PLEITO</div>
            <dl className="space-y-3 font-sans text-[13px]">
              <MetaItem label="De" value="Júnior · SLU" />
              <MetaItem label="Para" value="Pleno · SLU" highlight />
              <MetaItem label="Pretensão" value="R$ 7.500" highlight />
              <MetaItem label="Janela" value="AVD jul/26" />
              <MetaItem label="LT (lifetime)" value={DOSSIE.colaborador.tempoV4} />
              <MetaItem label="Tempo Júnior" value={DOSSIE.colaborador.tempoJunior} />
            </dl>

            <div className="mt-10 rule-top border-dossie-rule pt-5">
              <p className="font-serif italic text-[15px] text-ink/65 leading-relaxed">
                "Pleito de razoabilidade, não de retenção."
              </p>
            </div>
          </aside>
        </div>

        {/* Fechamento dramático */}
        <div className="mt-24 rule-top border-dossie-rule pt-12 max-w-4xl mx-auto text-center">
          <div className="red-line-glow w-32 mx-auto mb-8" />
          <p className="font-editorial italic text-section-h2 text-balance text-ink">
            &ldquo;<Editable path="pleitoPleno.fechamento" multiline>{DOSSIE.pleitoPleno.fechamento}</Editable>&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

function MetaItem({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-baseline border-b border-dossie-ruleSoft pb-2">
      <dt className="text-ink/50">{label}</dt>
      <dd className={`font-serif font-medium text-[15px] ${highlight ? 'text-primary' : 'text-ink'}`}>{value}</dd>
    </div>
  );
}
