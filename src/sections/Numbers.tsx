import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/motion';
import { DOSSIE } from '../content/dossie';

export function Numbers() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Counter animation
      const counters = sectionRef.current!.querySelectorAll<HTMLElement>('[data-counter]');
      counters.forEach((el) => {
        const target = parseFloat(el.dataset.counter ?? '0');
        const isDecimal = (el.dataset.decimal ?? '0') === '1';
        const suffix = el.dataset.suffix ?? '';
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2.2,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
          onUpdate: () => {
            const v = isDecimal ? obj.val.toFixed(1) : Math.round(obj.val).toLocaleString('pt-BR');
            el.textContent = `${v}${suffix}`;
          },
        });
      });

      // Reveal de cada painel
      gsap.from('.numbers-panel', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const gh = DOSSIE.numeros.github;
  const pr = DOSSIE.numeros.prMaturity;
  const lin = DOSSIE.numeros.linear;

  return (
    <section ref={sectionRef} className="relative bg-dossie-default text-ink py-24 lg:py-32 rule-bottom border-dossie-rule">
      <div className="dossie-container">
        <div className="text-kicker mb-5">№ 04 · NÚMEROS · MAR/2025 → JUN/2026</div>
        <h2 className="text-section-title text-balance max-w-4xl mb-6">
          Cabem em <span className="em">uma</span> <span className="red">linha</span>.
        </h2>
        <p className="text-deck max-w-2xl mb-16 text-ink/65">
          PRs pequenos, mergeados rápido. É o playbook que o Red Book chama de Frugal Execution.
        </p>

        <div className="space-y-20">
          {/* PAINEL 1 — GitHub */}
          <Panel
            num="01"
            label="GITHUB · ENTREGA"
            metrics={[
              { value: gh.prsMerged, label: 'PRs mergeados' },
              { value: gh.linhasAdicionadas, label: 'linhas adicionadas' },
              { value: gh.codeReviews, label: 'code reviews dados' },
            ]}
            note={`${gh.mergeRate}% merge rate · ${gh.linhasMovimentadas.toLocaleString('pt-BR')} linhas movimentadas`}
          />

          {/* PAINEL 2 — PR Maturity */}
          <Panel
            num="02"
            label="PR MATURITY · QUALIDADE DE FLUXO"
            metrics={[
              { value: pr.medianaHoras, label: 'mediana time-to-merge', suffix: 'h', decimal: true },
              { value: pr.pctMenor24h, label: '<24h', suffix: '%' },
              { value: pr.pctMenor72h, label: '<72h', suffix: '%' },
            ]}
            note={`Mediana ${pr.medianaLinhas} linhas/PR. ${pr.benchDORA} · você está em ${pr.medianaHoras}h.`}
          />

          {/* PAINEL 3 — Linear */}
          <Panel
            num="03"
            label="LINEAR · CRITICIDADE"
            metrics={[
              { value: lin.totalIssues, label: 'issues' },
              { value: lin.criticidade, label: 'P0/P1 · Urgent + High' },
            ]}
            note={`${lin.timesAtendidos} times · ${lin.criticidadePct}% de criticidade · ${lin.notaJira}`}
          />
        </div>

        {/* Encerramento */}
        <div className="mt-20 rule-top border-dossie-rule pt-6 max-w-3xl">
          <p className="font-serif italic text-fluid-quote text-ink/85">
            &ldquo;Estes números cabem em uma linha. As decisões por trás deles ocupam os próximos seis capítulos.&rdquo;
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 rule-top border-dossie-rule pt-5 flex items-center justify-between text-byline">
          <span>→ A SEGUIR · OS 6 CAPÍTULOS GROWTH</span>
          <span className="animate-scroll-cue">↓</span>
        </div>
      </div>
    </section>
  );
}

interface PanelProps {
  num: string;
  label: string;
  metrics: Array<{ value: number; label: string; suffix?: string; decimal?: boolean }>;
  note: string;
}

function Panel({ num, label, metrics, note }: PanelProps) {
  return (
    <div className="numbers-panel">
      {/* Header editorial */}
      <div className="flex items-center gap-4 mb-8 pb-3 border-b border-dossie-rule">
        <span className="editorial-number text-2xl font-medium">№ {num}</span>
        <span className="text-kicker">{label}</span>
      </div>

      {/* Métricas — counter sobre fundo */}
      <div className={`grid gap-8 lg:gap-12 mb-6 ${metrics.length === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl' : 'grid-cols-1 sm:grid-cols-3'}`}>
        {metrics.map((m, i) => (
          <div key={i}>
            <div
              className="big-number"
              style={{ fontSize: 'clamp(64px, 9vw, 128px)' }}
              data-counter={m.value}
              data-suffix={m.suffix ?? ''}
              data-decimal={m.decimal ? '1' : '0'}
            >
              0{m.suffix ?? ''}
            </div>
            <div className="text-byline mt-3 normal-case tracking-normal text-ink/55 text-[12px]">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Nota interpretativa */}
      <p className="font-serif italic text-[16px] text-ink/70 max-w-3xl border-l border-primary/40 pl-4">
        {note}
      </p>
    </div>
  );
}
