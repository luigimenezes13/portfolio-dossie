import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/motion';
import { DOSSIE } from '../content/dossie';

export function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.manifesto-reveal', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-dossie-default text-ink py-24 lg:py-32 rule-bottom border-dossie-rule">
      <div className="dossie-container">
        {/* Kicker editorial */}
        <div className="manifesto-reveal text-kicker mb-5">№ 02 · MANIFESTO</div>

        {/* Título principal */}
        <h2 className="manifesto-reveal text-section-title text-balance max-w-5xl mb-16">
          <span className="em">PIFE</span> é o que quero.
          <br />
          <span className="red">GROWTH</span> é como entrego.
        </h2>

        {/* Pull-quote editorial */}
        <blockquote className="manifesto-reveal pull-quote max-w-4xl mb-16">
          &ldquo;{DOSSIE.manifesto.citacaoRedBook}&rdquo;
          <div className="text-kicker not-italic font-sans mt-4 text-[10px]">
            — {DOSSIE.manifesto.citacaoFonte}
          </div>
        </blockquote>

        {/* Body em duas colunas com dropcap */}
        <div className="manifesto-reveal grid grid-cols-12 gap-6 lg:gap-16">
          <div className="col-span-12 lg:col-span-8">
            <div className="columns-2 text-body-editorial">
              <p className="dropcap">
                {DOSSIE.manifesto.pleito}
              </p>
              <p>
                O Red Book diz que PIFE é o que queremos na vida — e que GROWTH descreve <em>como vencemos</em> por meio de comportamentos observáveis. Este dossiê é a prova de que esses comportamentos viraram regime, não pico.
              </p>
              <p>
                O que segue está organizado pelos <strong className="text-primary">seis princípios GROWTH</strong>. Cada princípio abre com uma citação do Red Book e fecha com a evidência concreta. A consistência é o fio condutor — todos os números abaixo são meses, não dias.
              </p>
            </div>
          </div>

          {/* Sidebar editorial · metadados */}
          <aside className="col-span-12 lg:col-span-4 lg:pl-8 lg:border-l border-dossie-rule">
            <div className="text-kicker mb-4 text-[10px]">FICHA DO PLEITO</div>
            <dl className="space-y-3 font-sans text-[13px]">
              <MetaItem label="LT (lifetime)" value={DOSSIE.colaborador.tempoV4} />
              <MetaItem label="Como Júnior" value={DOSSIE.colaborador.tempoJunior} />
              <MetaItem label="Times atravessados" value="7" />
              <MetaItem label="Owner em produtos" value="2" />
              <MetaItem label="Próximo ciclo (AVD)" value={DOSSIE.colaborador.avd} highlight />
            </dl>

            {/* LEGENDA · PIFE */}
            <div className="text-kicker mt-10 mb-2 text-[10px]">LEGENDA · PIFE</div>
            <div className="font-serif text-[12px] text-ink/50 italic mb-4">o que quero na vida</div>
            <ul className="space-y-2.5 text-[13px]">
              <LegendItemPife letter="P" chipClass="chip-pife-p" name="Professional" desc="dono do próprio resultado" />
              <LegendItemPife letter="I" chipClass="chip-pife-i" name="Intelectual" desc="referência no que faz" />
              <LegendItemPife letter="F" chipClass="chip-pife-f" name="Fitness" desc="vitalidade sustentável" />
              <LegendItemPife letter="E" chipClass="chip-pife-e" name="Emocional" desc="estabilidade sob pressão" />
            </ul>

            {/* LEGENDA · CHAMP */}
            <div className="text-kicker mt-10 mb-2 text-[10px]">LEGENDA · CHAMP</div>
            <div className="font-serif text-[12px] text-ink/50 italic mb-4">os 5 objetivos estratégicos V4</div>
            <ul className="space-y-2.5 text-[13px]">
              <LegendItemChamp letter="C" name="Consumer" desc="100M usuários finais" />
              <LegendItemChamp letter="H" name="Hosted Companies" desc="100k marcas hospedadas" />
              <LegendItemChamp letter="A" name="Annual Revenue" desc="US$ 1B de receita" />
              <LegendItemChamp letter="M" name="Milestone" desc="IPO" />
              <LegendItemChamp letter="P" name="Perpetuity" desc="perpetuar o negócio" />
            </ul>
          </aside>
        </div>

        {/* Footer transição */}
        <div className="manifesto-reveal mt-20 rule-top border-dossie-rule pt-5 flex items-center justify-between text-byline">
          <span>→ A SEGUIR · TRAJETÓRIA · 7 TIMES · 15 MESES</span>
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

function LegendItemPife({ letter, chipClass, name, desc }: { letter: string; chipClass: string; name: string; desc: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className={`${chipClass} flex-shrink-0 mt-0.5`}>{letter}</span>
      <div className="leading-snug">
        <div className="font-serif font-medium text-ink text-[14px]">{name}</div>
        <div className="font-serif text-ink/55 text-[12px] italic">{desc}</div>
      </div>
    </li>
  );
}

function LegendItemChamp({ letter, name, desc }: { letter: string; name: string; desc: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="chip-champ chip-champ-active flex-shrink-0 mt-0.5">{letter}</span>
      <div className="leading-snug">
        <div className="font-serif font-medium text-ink text-[14px]">{name}</div>
        <div className="font-serif text-ink/55 text-[12px] italic">{desc}</div>
      </div>
    </li>
  );
}
