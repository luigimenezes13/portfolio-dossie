import { useEffect, useRef } from 'react';
import Splitting from 'splitting';
import { gsap, prefersReducedMotion } from '../lib/motion';
import { useDossie } from '../contexts/DossieContext';
import { ProfileBadge } from '../components/ProfileBadge';

export function Hero() {
  const DOSSIE = useDossie();
  const nameRef = useRef<HTMLHeadingElement>(null);
  const deckRef = useRef<HTMLParagraphElement>(null);

  // SplitText leve no nome
  useEffect(() => {
    if (!nameRef.current) return;
    if (prefersReducedMotion()) return;
    Splitting({ target: nameRef.current, by: 'words' });
    const words = nameRef.current.querySelectorAll<HTMLSpanElement>('.word');
    gsap.set(words, { y: 40, opacity: 0 });
    gsap.to(words, {
      y: 0,
      opacity: 1,
      stagger: 0.12,
      duration: 1.2,
      ease: 'expo.out',
      delay: 0.3,
    });
  }, []);

  // Deck fade-in
  useEffect(() => {
    if (!deckRef.current) return;
    if (prefersReducedMotion()) return;
    gsap.from(deckRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power2.out',
      delay: 1.0,
    });
  }, []);

  return (
    <section className="relative bg-dossie-default text-ink">
      {/* MASTHEAD — top bar editorial */}
      <header className="rule-bottom border-ink/60">
        <div className="dossie-container py-5 grid grid-cols-3 items-center text-byline">
          <div>JUNHO 2026 · EDIÇÃO AVD</div>
          <div className="text-center font-serif text-2xl font-medium tracking-tight text-ink normal-case">
            O <span className="italic">Dossiê</span>
          </div>
          <div className="text-right">
            <span className="text-primary animate-pulse-soft">●</span> PLEITO PLENO · V4 COMPANY
          </div>
        </div>
      </header>

      {/* HERO MAIN */}
      <div className="dossie-container pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="text-kicker mb-7">№ 01 · O CANDIDATO</div>

        <h1
          ref={nameRef}
          className="text-hero-name mb-10 whitespace-nowrap italic"
          style={{ fontSize: 'clamp(28px, 8.5vw, 132px)', fontWeight: 500, lineHeight: 1.1, paddingBottom: '0.1em' }}
        >
          Luigi Bertoli Menezes
        </h1>

        <p
          ref={deckRef}
          className="text-deck max-w-3xl mb-14 text-ink/85"
        >
          &ldquo;{DOSSIE.tese}&rdquo;
        </p>

        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* COL ESQUERDA · Foto */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <ProfileBadge
              size={240}
              name={DOSSIE.colaborador.nome}
              tooltipSide="right"
            />
          </div>

          {/* COL DIREITA · Facts */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 rule-top border-ink/60 pt-6">
            <Fact label="LT · Lifetime" value="15" unit="meses" context="desde mar/2025" />
            <Fact label="Júnior" value="7" unit="meses" context="efetivado em nov/2025" />
            <Fact label="AVD" value="jul" unit="/26" context="próximo ciclo" valueColored />
            <Fact label="Owner" value="2" unit="produtos" context="Workforce + LMS" />
          </div>
        </div>

        {/* Footer hero · scroll cue */}
        <div className="mt-20 lg:mt-28 rule-top border-dossie-rule pt-6 flex items-center justify-between text-byline">
          <span>→ A SEGUIR · MANIFESTO</span>
          <span className="animate-scroll-cue">↓ DESÇA</span>
          <span className="hidden md:inline">GITHUB.COM/{DOSSIE.colaborador.github.toUpperCase()}</span>
        </div>
      </div>
    </section>
  );
}

function Fact({
  label,
  value,
  unit,
  context,
  valueColored = false,
}: {
  label: string;
  value: string;
  unit: string;
  context: string;
  valueColored?: boolean;
}) {
  return (
    <div>
      <div className="text-byline mb-2">{label}</div>
      <div className="flex items-baseline gap-1">
        <span className={`font-serif font-medium text-4xl leading-none ${valueColored ? 'text-primary' : 'text-ink'}`}>
          {value}
        </span>
        <span className="font-serif text-base text-ink/60">{unit}</span>
      </div>
      <div className="text-byline mt-2 normal-case tracking-normal text-ink/50 text-[11px]">{context}</div>
    </div>
  );
}
