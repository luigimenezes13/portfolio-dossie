import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/motion';
import { useDossie } from '../contexts/DossieContext';
import type { Dossie } from '../content/dossie';

type TimelineNode = Dossie['timeline'][number];

export function Timeline() {
  const DOSSIE = useDossie();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.timeline-row', {
        opacity: 0,
        x: -20,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-dossie-default text-ink py-24 lg:py-32 rule-bottom border-dossie-rule">
      <div className="dossie-container">
        {/* Kicker */}
        <div className="text-kicker mb-5">№ 03 · TRAJETÓRIA</div>
        <h2 className="text-section-title text-balance max-w-5xl mb-6">
          <span className="em">7 times</span> em 15 meses.
          <br />
          <span className="red">Zero quedas</span> de qualidade.
        </h2>
        <p className="text-deck max-w-3xl mb-16 text-ink/65">
          A rotação entre contextos é a evidência mais difícil de fabricar: cada parada exigiu nova stack, nova regra de negócio, novo temperamento de time. A entrega manteve o mesmo padrão em todos os sete cenários.
        </p>

        {/* Layout 12 col · Stats sidebar à direita */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {/* Coluna principal · Timeline vertical */}
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-0">
              {DOSSIE.timeline.map((node, i) => (
                <TimelineRow key={i} node={node} index={i} isLast={i === DOSSIE.timeline.length - 1} />
              ))}
            </div>
          </div>

          {/* Sidebar · Stats */}
          <aside className="col-span-12 lg:col-span-4 lg:pl-8 lg:border-l border-dossie-rule">
            <div className="text-kicker mb-4 text-[10px]">CONTAGEM</div>
            <div className="space-y-6">
              <SidebarStat number="07" label="times rotacionados" />
              <SidebarStat number="15" label="meses na V4" />
              <SidebarStat number="02" label="owner em produtos" highlight />
              <SidebarStat number="★" label="EFETIVADO NOV/25" />
            </div>

            <div className="mt-10 rule-top border-dossie-rule pt-5 text-byline">
              <p className="font-serif italic text-ink/65 text-[14px] not-italic">
                <span className="italic">"Pegava o difícil quando o time confia."</span>
              </p>
            </div>
          </aside>
        </div>

        {/* BLOCO ARGUMENTATIVO · A TESE DA ROTAÇÃO */}
        <div className="mt-20 lg:mt-24 pt-12 lg:pt-16 rule-top border-dossie-rule">
          <div className="text-kicker mb-5">A TESE DA ROTAÇÃO</div>
          <h3 className="text-section-h2 text-balance max-w-4xl mb-4">
            <span className="em">Não fui consistente em um contexto.</span>
            <br />
            Fui consistente atravessando <span className="text-primary">sete</span>.
          </h3>
          <p className="font-editorial italic text-fluid-deck text-ink/70 max-w-3xl mb-10">
            Manter padrão em um único projeto é disciplina. Mantê-lo cruzando produto, atendimento, desenvolvimento, financeiro, CRM, pós-venda e financeiro de novo é evidência de <span className="text-primary font-medium">método</span> e <span className="text-primary font-medium">disciplina</span>.
          </p>

          {/* 4 evidências em grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            <RotacaoEvidencia
              num="01"
              titulo="Stack diferente, mesma profundidade"
              corpo="Cada time tinha contexto técnico próprio (Produto, HOps, CRM, Service Cart). Entreguei nos sete sem queda de qualidade — 165 PRs distribuídos em mais de 10 repositórios."
            />
            <RotacaoEvidencia
              num="02"
              titulo="Velocidade durante a transição"
              corpo="No último salto (Pós-Venda → Financeiro), entreguei o Service Cart na call em tempo recorde. Trocar de time não pausou a entrega; acelerou."
            />
            <RotacaoEvidencia
              num="03"
              titulo="Validação no momento mais difícil"
              corpo="Davi Campos (dev sênior do CRM) deu o elogio durante a passagem pelo CRM, não em retrospectiva. Maturidade reconhecida sob pressão de contexto novo."
            />
            <RotacaoEvidencia
              num="04"
              titulo="Ownership que não soltou"
              corpo="Sustentei Workforce por 10 meses contínuos cruzando 4 times. Co-owner do LMS continuou no fluxo de decisão mesmo após sair do time original."
            />
          </div>

          {/* Frase de fechamento dramático */}
          <div className="mt-12 pt-8 rule-top border-dossie-ruleSoft max-w-3xl">
            <p className="font-editorial italic text-fluid-quote text-ink">
              &ldquo;Rotação sem queda é a tese deste dossiê. Os 6 capítulos GROWTH só explicitam por quê.&rdquo;
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 rule-top border-dossie-rule pt-5 flex items-center justify-between text-byline">
          <span>→ A SEGUIR · OS NÚMEROS</span>
          <span className="animate-scroll-cue">↓</span>
        </div>
      </div>
    </section>
  );
}

function RotacaoEvidencia({ num, titulo, corpo }: { num: string; titulo: string; corpo: string }) {
  return (
    <article className="article-card">
      <div className="text-byline mb-3 text-[10px]">№ {num}</div>
      <h4 className="font-serif font-medium text-fluid-h3 text-ink leading-tight mb-3">{titulo}</h4>
      <p className="font-serif text-[16px] text-ink/75 leading-relaxed">{corpo}</p>
    </article>
  );
}

function TimelineRow({
  node,
  index,
  isLast,
}: {
  node: TimelineNode;
  index: number;
  isLast: boolean;
}) {
  return (
    <article className={`timeline-row grid grid-cols-12 gap-4 py-7 ${isLast ? '' : 'border-b border-dossie-ruleSoft'}`}>
      {/* Número editorial */}
      <div className="col-span-2 sm:col-span-1">
        <span className="font-serif text-[28px] font-medium text-primary leading-none">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Período + status */}
      <div className="col-span-10 sm:col-span-3">
        <div className="font-mono text-[12px] text-ink/55 mb-1">{node.periodo}</div>
        <div className={`font-sans uppercase tracking-widest text-[10px] ${node.marco ? 'text-amber-400 font-bold' : 'text-primary/80'}`}>
          {node.status} {node.marco && '· EFETIVADO'}
        </div>
      </div>

      {/* Time · destaque */}
      <div className="col-span-12 sm:col-span-3">
        <div className="font-serif font-medium text-section-h3 text-ink leading-tight">
          {node.time}
        </div>
      </div>

      {/* Microcopy editorial */}
      <div className="col-span-12 sm:col-span-5">
        <p className="font-serif italic text-[16px] text-ink/75 leading-snug">
          {node.micro}
        </p>
      </div>
    </article>
  );
}

function SidebarStat({ number, label, highlight = false }: { number: string; label: string; highlight?: boolean }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className={`font-serif font-medium text-4xl leading-none ${highlight ? 'text-primary' : 'text-ink'}`}>
        {number}
      </span>
      <span className="text-byline normal-case tracking-normal text-[12px] text-ink/55">
        {label}
      </span>
    </div>
  );
}
