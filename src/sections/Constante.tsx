import { useEffect, useRef } from 'react';
import Splitting from 'splitting';
import { gsap, prefersReducedMotion } from '../lib/motion';
import { useDossie } from '../contexts/DossieContext';
import { Editable } from '../components/Editable';

export function Constante() {
  const DOSSIE = useDossie();
  const sectionRef = useRef<HTMLElement>(null);
  const palavraRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // SplitText na palavra principal · sutil
      if (palavraRef.current) {
        Splitting({ target: palavraRef.current, by: 'chars' });
        const chars = palavraRef.current.querySelectorAll<HTMLSpanElement>('.char');
        gsap.set(chars, { y: 30, opacity: 0 });
        gsap.to(chars, {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: { trigger: palavraRef.current, start: 'top 75%' },
        });
      }

      gsap.from('.constante-reveal', {
        opacity: 0,
        y: 25,
        stagger: 0.18,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-dossie-deeper text-ink py-32 lg:py-40 rule-bottom border-dossie-rule">
      <div className="dossie-container">
        <div className="text-kicker mb-6 constante-reveal">№ 11 · INTERLÚDIO</div>

        {/* Pergunta editorial */}
        <p className="constante-reveal font-editorial italic text-fluid-quote text-ink/65 text-balance max-w-3xl mb-20">
          &ldquo;<Editable path="constante.pergunta" multiline>{DOSSIE.constante.pergunta}</Editable>&rdquo;
        </p>

        {/* Palavra dominante — uma linha só */}
        <div className="constante-reveal text-center mb-20 overflow-hidden">
          <h2
            ref={palavraRef}
            className="font-serif font-medium text-primary leading-[0.95] whitespace-nowrap inline-block"
            style={{ fontSize: 'clamp(36px, 11vw, 200px)', letterSpacing: '-0.02em' }}
          >
            {DOSSIE.constante.palavra}
          </h2>
          <div className="text-byline mt-4 text-[10px]">{DOSSIE.constante.subtitulo}</div>
        </div>

        {/* Desdobramento — duas colunas editoriais */}
        <div className="constante-reveal grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 max-w-3xl mx-auto mb-12">
          {DOSSIE.constante.desdobramento.map(([left, right], i) => (
            <div key={i} className="contents">
              <div className="font-serif text-[18px] text-ink/85 py-2 border-b border-dossie-ruleSoft">{left}</div>
              <div className="font-serif text-[18px] text-ink/70 py-2 border-b border-dossie-ruleSoft">{right}</div>
            </div>
          ))}
        </div>

        <div className="constante-reveal max-w-3xl mx-auto mb-20 text-center space-y-1">
          {DOSSIE.constante.fechamento.map((linha, i) => (
            <p key={i} className="font-serif italic text-[18px] text-ink/70">{linha}</p>
          ))}
        </div>

        {/* Moral */}
        <div className="constante-reveal max-w-3xl mx-auto text-center space-y-6">
          <div className="red-line-glow w-32 mx-auto" />
          {DOSSIE.constante.moral.map((linha, i) => (
            <p
              key={i}
              className={`font-editorial italic text-section-h2 text-balance ${i === 1 ? 'text-primary' : 'text-ink'}`}
            >
              <Editable path={`constante.moral[${i}]`} multiline as="span">{linha}</Editable>
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 rule-top border-dossie-rule pt-5 flex items-center justify-between text-byline">
          <span>→ A SEGUIR · FORMAÇÃO · A CONSTANTE TEM RAIZ ACADÊMICA</span>
          <span className="animate-scroll-cue">↓</span>
        </div>
      </div>
    </section>
  );
}
