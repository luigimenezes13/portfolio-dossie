import { useDossie } from '../contexts/DossieContext';

const PIFE_CLASS: Record<string, string> = {
  P: 'chip-pife-p',
  I: 'chip-pife-i',
  F: 'chip-pife-f',
  E: 'chip-pife-e',
  T: 'chip-pife border-amber-400/60 text-amber-400 bg-amber-400/10',
};

export function Academico() {
  const DOSSIE = useDossie();
  return (
    <section className="relative bg-dossie-default text-ink py-24 lg:py-32 rule-bottom border-dossie-rule">
      <div className="dossie-container">
        {/* Masthead */}
        <div className="text-kicker mb-5">№ 12 · FORMAÇÃO</div>
        <h2 className="text-section-title text-balance max-w-4xl mb-6">
          Engenharia da Computação · <span className="red">PUC-Campinas</span>
        </h2>
        <p className="text-deck max-w-2xl mb-16 text-ink/65">
          Penúltimo semestre → último → mestrado UNICAMP. Forma-se enquanto contribui em produção.
        </p>

        {/* Grid 12 col · 3 cards + sidebar */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-9">
            <div className="flex items-center gap-4 mb-6 pb-3 border-b border-dossie-rule">
              <span className="editorial-number text-xl font-medium">REGISTROS</span>
              <span className="text-byline">3 MARCOS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-0">
              {DOSSIE.academico.cards.map((card, i) => (
                <article key={i} className="article-card">
                  <div className="text-byline mb-4 text-[10px]">№ {String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-serif font-medium text-section-h3 text-ink leading-tight mb-3">
                    {card.titulo}
                  </h3>
                  <p className="font-serif text-[16px] text-ink/75 leading-relaxed mb-5">{card.corpo}</p>
                  <div className="pt-3 border-t border-dossie-ruleSoft flex gap-1.5 flex-wrap">
                    {card.chips.map((c) => (
                      <span key={c} className={PIFE_CLASS[c] ?? 'chip-pife border-ink/20 text-ink/60'}>
                        {c}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Bloco destaque UNICAMP */}
            <div className="mt-16 flex items-center gap-4 mb-6 pb-3 border-b border-dossie-rule">
              <span className="editorial-number text-xl font-medium">PRÓXIMO HORIZONTE</span>
              <span className="text-byline">MESTRADO</span>
            </div>

            <article className="proof-card border-l-2 !border-l-primary p-8 lg:p-10">
              <h3 className="proof-card-title text-base mb-4">{DOSSIE.academico.unicamp.titulo}</h3>
              <p className="font-serif text-[17px] text-ink/85 leading-relaxed mb-6">{DOSSIE.academico.unicamp.corpo}</p>
              <div className="mt-2 pt-6 border-t border-dossie-ruleSoft">
                <p className="font-editorial italic text-[18px] lg:text-[20px] text-ink/75 leading-relaxed">
                  {DOSSIE.academico.unicamp.citacao}
                </p>
              </div>
            </article>
          </div>

          {/* Sidebar · stats */}
          <aside className="col-span-12 lg:col-span-3 lg:pl-8 lg:border-l border-dossie-rule">
            <div className="text-kicker mb-4 text-[10px]">FICHA ACADÊMICA</div>
            <dl className="space-y-3 font-sans text-[13px]">
              <MetaItem label="Graduação" value="9º semestre" />
              <MetaItem label="IC" value="2024" />
              <MetaItem label="TCC" value="nível tese" highlight />
              <MetaItem label="Mestrado" value="UNICAMP IC" highlight />
              <MetaItem label="Área" value="ES + Visão" />
            </dl>
          </aside>
        </div>

        {/* Footer */}
        <div className="mt-20 rule-top border-dossie-rule pt-5 flex items-center justify-between text-byline">
          <span>→ A SEGUIR · VISÃO FUTURO</span>
          <span className="animate-scroll-cue">↓</span>
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
