import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/motion';
import { useDossie } from '../contexts/DossieContext';
import { useMetrics } from '../hooks/useMetrics';

export function Numbers() {
  const DOSSIE = useDossie();
  const metrics = useMetrics();
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

  // Prioriza métricas frescas do endpoint; cai pro snapshot estático
  const gh = metrics.data?.github ?? DOSSIE.numeros.github;
  const pr = metrics.data?.prMaturity ?? DOSSIE.numeros.prMaturity;
  const lin = metrics.data?.linear ?? DOSSIE.numeros.linear;

  return (
    <section ref={sectionRef} className="relative bg-dossie-default text-ink py-24 lg:py-32 rule-bottom border-dossie-rule">
      <div className="dossie-container">
        <div className="text-kicker mb-5 flex items-center gap-3">
          <span>№ 04 · NÚMEROS · MAR/2025 → JUN/2026</span>
          {metrics.loading && (
            <span className="text-amber-400 normal-case font-sans text-[10px] tracking-normal flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              calculando ao vivo...
            </span>
          )}
          {!metrics.loading && !metrics.degraded && metrics.data && (
            <span className="text-green-400 normal-case font-sans text-[10px] tracking-normal flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              dados ao vivo · {Math.round((metrics.durationMs ?? 0) / 100) / 10}s
            </span>
          )}
          {metrics.degraded && (
            <span className="text-amber-400/70 normal-case font-sans text-[10px] tracking-normal">
              snapshot estático (live indisponível)
            </span>
          )}
        </div>
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

          {/* PAINEL 4 — Consistência (Throughput + Size Discipline) */}
          <ConsistenciaPanel
            throughput={metrics.data?.consistencia?.throughputMensal ?? []}
            sizeDiscipline={metrics.data?.github?.sizeDiscipline ?? null}
            totalPRs={gh.prsMerged}
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

// =========================================================
// PAINEL 4 · CONSISTÊNCIA — sparkline + size discipline
// =========================================================
interface ConsistenciaPanelProps {
  throughput: Array<{ month: string; prs: number }>;
  sizeDiscipline: { below100: number; mid: number; above500: number } | null;
  totalPRs: number;
}

function ConsistenciaPanel({ throughput, sizeDiscipline, totalPRs }: ConsistenciaPanelProps) {
  const hasThroughput = throughput.length > 0;
  const maxPrs = hasThroughput ? Math.max(...throughput.map((t) => t.prs)) : 0;
  const totalThroughput = throughput.reduce((s, t) => s + t.prs, 0);
  const peakMonth = hasThroughput
    ? throughput.reduce((max, t) => (t.prs > max.prs ? t : max), throughput[0])
    : null;

  // Size discipline percentages
  const sizeTotal = sizeDiscipline
    ? sizeDiscipline.below100 + sizeDiscipline.mid + sizeDiscipline.above500
    : 0;
  const pctBelow = sizeTotal ? Math.round((sizeDiscipline!.below100 / sizeTotal) * 100) : 0;
  const pctMid = sizeTotal ? Math.round((sizeDiscipline!.mid / sizeTotal) * 100) : 0;
  const pctAbove = sizeTotal ? Math.round((sizeDiscipline!.above500 / sizeTotal) * 100) : 0;

  return (
    <div className="numbers-panel">
      <div className="flex items-center gap-4 mb-8 pb-3 border-b border-dossie-rule">
        <span className="editorial-number text-2xl font-medium">№ 04</span>
        <span className="text-kicker">CONSISTÊNCIA · O FIO CONDUTOR</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-6">
        {/* Throughput sparkline */}
        <div>
          <div className="text-byline mb-3 text-[10px]">THROUGHPUT MENSAL · PRs MERGED</div>
          {hasThroughput ? (
            <>
              <Sparkline data={throughput} max={maxPrs} />
              <div className="flex justify-between items-end mt-3 text-byline text-ink/45">
                <span className="font-mono text-[10px]">{throughput[0].month}</span>
                <span className="font-mono text-[10px]">{throughput[throughput.length - 1].month}</span>
              </div>
              {peakMonth && (
                <div className="mt-4 font-serif text-[14px] text-ink/70">
                  Pico: <span className="text-primary font-medium">{peakMonth.prs} PRs</span> · {peakMonth.month} · total {totalThroughput} em {throughput.length} meses
                </div>
              )}
            </>
          ) : (
            <div className="text-byline text-ink/30 py-12 text-center border border-dashed border-dossie-rule rounded">
              SEM DADOS DE THROUGHPUT
            </div>
          )}
        </div>

        {/* Size discipline */}
        <div>
          <div className="text-byline mb-3 text-[10px]">TAMANHO DE PR · FRUGAL EXECUTION</div>
          {sizeDiscipline ? (
            <>
              <div className="space-y-3">
                <SizeBar label="Pequeno · <100 linhas" pct={pctBelow} count={sizeDiscipline.below100} color="bg-green-400" />
                <SizeBar label="Médio · 100–500 linhas" pct={pctMid} count={sizeDiscipline.mid} color="bg-amber-400" />
                <SizeBar label="Grande · 500+ linhas" pct={pctAbove} count={sizeDiscipline.above500} color="bg-primary" />
              </div>
              <div className="mt-4 font-serif text-[14px] text-ink/70">
                <span className="text-primary font-medium">{pctBelow}%</span> dos {totalPRs} PRs são pequenos — revisáveis em minutos.
              </div>
            </>
          ) : (
            <div className="text-byline text-ink/30 py-12 text-center border border-dashed border-dossie-rule rounded">
              SEM DADOS DE TAMANHO
            </div>
          )}
        </div>
      </div>

      <p className="font-serif italic text-[16px] text-ink/70 max-w-3xl border-l border-primary/40 pl-4">
        {totalThroughput || sizeTotal
          ? 'Nada disso é pico. Cada número resistiu ao mês seguinte — e ao seguinte.'
          : 'Métricas de consistência aguardando dados live do GitHub.'}
      </p>
    </div>
  );
}

function Sparkline({ data, max }: { data: Array<{ month: string; prs: number }>; max: number }) {
  if (!data.length) return null;
  const W = 100; // SVG viewBox width
  const H = 32;
  const barW = W / data.length;
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className="w-full"
      style={{ height: 72 }}
      aria-label="Sparkline de PRs por mês"
    >
      {data.map((d, i) => {
        const h = max ? (d.prs / max) * H : 0;
        return (
          <rect
            key={d.month}
            x={i * barW + 0.3}
            y={H - h}
            width={Math.max(barW - 0.6, 0.5)}
            height={Math.max(h, 0.5)}
            fill="#e50914"
            opacity={0.45 + (d.prs / max) * 0.55}
          >
            <title>{`${d.month}: ${d.prs} PRs`}</title>
          </rect>
        );
      })}
    </svg>
  );
}

function SizeBar({ label, pct, count, color }: { label: string; pct: number; count: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-byline text-[10px] normal-case tracking-normal text-ink/65">{label}</span>
        <span className="font-mono text-[11px] text-ink/80">
          <span className="text-primary font-medium">{pct}%</span>
          <span className="text-ink/40"> · {count}</span>
        </span>
      </div>
      <div className="h-2 bg-dossie-rule/40 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-700`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
