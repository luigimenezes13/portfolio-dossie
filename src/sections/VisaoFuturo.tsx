import { DOSSIE } from '../content/dossie';

export function VisaoFuturo() {
  return (
    <section className="relative bg-dossie-default text-ink py-24 lg:py-32 rule-bottom border-dossie-rule">
      <div className="dossie-container">
        {/* Masthead */}
        <div className="text-kicker mb-5">№ 13 · VISÃO FUTURO</div>
        <h2 className="text-section-title text-balance max-w-4xl mb-6">
          O que vem <span className="red">a seguir</span>.
        </h2>
        <p className="text-deck max-w-2xl mb-16 text-ink/65">
          Três horizontes. Cada um conecta o que entrego hoje ao que o mercado pede amanhã.
        </p>

        {/* Separador */}
        <div className="flex items-center gap-4 mb-8 pb-3 border-b border-dossie-rule">
          <span className="editorial-number text-xl font-medium">HORIZONTES</span>
          <span className="text-byline">2027 · 2029 · 2031</span>
        </div>

        {/* 3 cards horizontais editoriais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-0">
          {DOSSIE.visaoFuturo.map((bloco, i) => (
            <article key={i} className="article-card flex flex-col">
              <div className="flex items-baseline justify-between mb-6">
                <div className="font-serif font-medium text-primary text-3xl leading-none">{bloco.ano}</div>
                <div className="text-byline">{bloco.horizonte}</div>
              </div>

              <div className="space-y-6 flex-1">
                <div>
                  <div className="text-kicker mb-3 text-[10px]">PROFISSIONAL</div>
                  <ul className="space-y-1.5 font-serif text-[15px] text-ink/80 leading-snug">
                    {bloco.profissional.map((item, j) => (
                      <li key={j} className="text-pretty">— {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-dossie-ruleSoft">
                  <div className="text-kicker mb-3 text-[10px]">PESSOAL</div>
                  <ul className="space-y-1.5 font-serif text-[15px] text-ink/80 leading-snug">
                    {bloco.pessoal.map((item, j) => (
                      <li key={j} className="text-pretty">— {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Frase de fechamento */}
        <div className="mt-16 rule-top border-dossie-rule pt-6 max-w-4xl">
          <p className="font-editorial italic text-fluid-quote text-ink/85 text-balance">
            &ldquo;O mercado pede Product Engineers que conhecem código e produto na mesma profundidade. Estou no caminho — V4 Company é meu veículo coletivo.&rdquo;
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 rule-top border-dossie-rule pt-5 flex items-center justify-between text-byline">
          <span>→ A SEGUIR · PLEITO PLENO</span>
          <span className="animate-scroll-cue">↓</span>
        </div>
      </div>
    </section>
  );
}
