import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/motion';
import type { Dossie } from '../content/dossie';
import { renderBoldRed } from '../lib/markdown-bold';

type Growth = Dossie['growths'][number];
type Prova = Growth['provas'][number];

interface GrowthChapterProps {
  index: number;
  growth: Growth;
}

const PIFE_LABEL: Record<string, string> = {
  P: 'Professional',
  I: 'Intelectual',
  F: 'Fitness',
  E: 'Emocional',
};
const PIFE_CLASS: Record<string, string> = {
  P: 'chip-pife-p',
  I: 'chip-pife-i',
  F: 'chip-pife-f',
  E: 'chip-pife-e',
};
const CHAMP_ORDER = ['C', 'H', 'A', 'M', 'P'];

export function GrowthChapter({ index, growth }: GrowthChapterProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.growth-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const chapterNum = String(index).padStart(2, '0');

  return (
    <section ref={sectionRef} className="relative bg-dossie-default text-ink py-24 lg:py-32 rule-bottom border-dossie-rule">
      <div className="dossie-container">
        {/* MASTHEAD do capítulo */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-16">
          {/* Letra gigante editorial · esquerda */}
          <div className="col-span-12 lg:col-span-3">
            <div className="text-kicker mb-3">№ {chapterNum} · GROWTH</div>
            <div className="font-serif font-medium text-primary leading-none" style={{ fontSize: 'clamp(160px, 22vw, 280px)' }}>
              {growth.letra}
            </div>
          </div>

          {/* Título + citação · direita */}
          <div className="col-span-12 lg:col-span-9 lg:pl-8 lg:border-l border-dossie-rule">
            <h2 className="text-section-title text-balance mb-8 max-w-3xl">
              <span className="italic">{growth.titulo.split(' · ')[0].toLowerCase()}</span>
              {growth.titulo.includes(' · ') && (
                <span className="text-ink/50"> · {growth.titulo.split(' · ').slice(1).join(' · ')}</span>
              )}
            </h2>

            <blockquote className="pull-quote max-w-3xl mb-8">
              &ldquo;{growth.citacao}&rdquo;
              <div className="text-kicker not-italic font-sans mt-3 text-[10px]">
                — THE RED BOOK · V4 · CAP. {growth.letra}
              </div>
            </blockquote>

            <p className="font-serif italic text-fluid-deck text-ink/75 max-w-3xl">
              {renderBoldRed(growth.abertura)}
            </p>
          </div>
        </div>

        {/* Separador "PROVAS" */}
        <div className="flex items-center gap-4 mb-8 pb-3 border-b border-dossie-rule">
          <span className="editorial-number text-xl font-medium">PROVAS</span>
          <span className="text-byline">№ {growth.provas.length} · EVIDÊNCIAS</span>
          <div className="flex-1" />
          <span className="text-byline">PIFE: {Array.from(new Set(growth.provas.flatMap((p) => p.pife))).join(' · ')}</span>
        </div>

        {/* Grid de provas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          {growth.provas.map((prova, i) => (
            <ProvaCard key={i} prova={prova} index={i + 1} />
          ))}
        </div>

        {/* Encerramento */}
        <div className="mt-16 rule-top border-dossie-rule pt-6 max-w-3xl">
          <p className="font-serif italic text-fluid-quote text-ink/85">
            &ldquo;{renderBoldRed(growth.encerramento)}&rdquo;
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 rule-top border-dossie-rule pt-5 flex items-center justify-between text-byline">
          <span>→ A SEGUIR · {index < 10 ? 'PRÓXIMO PRINCÍPIO' : 'A CONSTANTE'}</span>
          <span className="animate-scroll-cue">↓</span>
        </div>
      </div>
    </section>
  );
}

/**
 * Router de variantes
 */
function ProvaCard({ prova, index }: { prova: Prova; index: number }) {
  const type = prova.type ?? 'narrative';
  switch (type) {
    case 'metric':
      return <MetricCard prova={prova} index={index} />;
    case 'person':
      return <PersonCard prova={prova} index={index} />;
    case 'milestone':
      return <MilestoneCard prova={prova} index={index} />;
    default:
      return <NarrativeCard prova={prova} index={index} />;
  }
}

/**
 * Chrome compartilhado — "artigo editorial" com borda superior
 */
function ArticleChrome({
  children,
  type,
  index,
  link,
  pife,
  champ,
}: {
  children: React.ReactNode;
  type: string;
  index: number;
  link?: Prova['link'];
  pife: string[];
  champ: string[];
}) {
  return (
    <article className="growth-card article-card flex flex-col">
      {/* Kicker editorial */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-byline text-[10px]">
          № {String(index).padStart(2, '0')} · {type.toUpperCase()}
        </span>
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-primary hover:underline"
          >
            {link.label}
          </a>
        )}
      </div>

      <div className="flex-1 space-y-5">{children}</div>

      {/* Footer · chips */}
      <div className="mt-6 pt-4 border-t border-dossie-ruleSoft flex items-end justify-between gap-3 flex-wrap">
        <div className="flex flex-wrap gap-1.5">
          {pife.map((p) => (
            <span key={p} className={PIFE_CLASS[p]} title={PIFE_LABEL[p]}>
              {p}
            </span>
          ))}
        </div>
        {champ.length > 0 && (
          <div className="flex gap-1">
            {CHAMP_ORDER.map((letter) => (
              <span
                key={letter}
                className={champ.includes(letter) ? 'chip-champ chip-champ-active' : 'chip-champ'}
              >
                {letter}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

/**
 * V1 · MÉTRICA — big number editorial
 */
function MetricCard({ prova, index }: { prova: Prova; index: number }) {
  const m = prova.metric;
  return (
    <ArticleChrome type="métrica" index={index} link={prova.link} pife={prova.pife} champ={prova.champ}>
      <div className="space-y-3 mb-3">
        <div className="big-number" style={{ fontSize: 'clamp(56px, 7vw, 96px)' }}>
          {m?.value ?? '—'}
        </div>
        <div className="font-sans text-[11px] uppercase tracking-widest text-ink/55">
          {m?.unit}
          {m?.context && <span className="text-ink/40 normal-case tracking-normal"> · {m.context}</span>}
        </div>
      </div>

      <div className="space-y-3 pt-3 border-t border-dossie-ruleSoft">
        <h3 className="font-serif font-medium text-fluid-h3 text-ink leading-tight">{prova.titulo}</h3>
        <p className="font-serif text-[16px] text-ink/75 leading-relaxed">{renderBoldRed(prova.corpo)}</p>
      </div>
    </ArticleChrome>
  );
}

/**
 * V2 · PESSOA — citação editorial
 */
function PersonCard({ prova, index }: { prova: Prova; index: number }) {
  const q = prova.quote;
  return (
    <ArticleChrome type="testemunho" index={index} link={prova.link} pife={prova.pife} champ={prova.champ}>
      <div className="space-y-4 mb-3">
        {prova.avatar && (
          <div className="flex items-center gap-3">
            {'url' in prova.avatar && prova.avatar.url ? (
              <img
                src={prova.avatar.url as string}
                alt={prova.avatar.nome}
                className="w-12 h-12 rounded-full object-cover border border-dossie-rule"
                style={{ filter: 'grayscale(15%)' }}
                loading="lazy"
              />
            ) : (
              <div className="character-avatar !w-12 !h-12 !text-sm">{prova.avatar.iniciais}</div>
            )}
            <div className="font-sans text-[12px] text-ink/65">{prova.avatar.nome}</div>
          </div>
        )}

        {q && (
          <blockquote className="pull-quote text-[20px]">
            &ldquo;{renderBoldRed(q.texto)}&rdquo;
            <div className="text-byline not-italic mt-2 text-[10px]">
              — {q.autor}
              {q.cargo && <span className="text-ink/45 normal-case tracking-normal"> · {q.cargo}</span>}
            </div>
          </blockquote>
        )}
      </div>

      <div className="space-y-3 pt-3 border-t border-dossie-ruleSoft">
        <h3 className="font-serif font-medium text-fluid-h3 text-ink leading-tight">{prova.titulo}</h3>
        <p className="font-serif text-[16px] text-ink/75 leading-relaxed">{renderBoldRed(prova.corpo)}</p>
      </div>
    </ArticleChrome>
  );
}

/**
 * V3 · MARCO — projeto/status editorial
 */
function MilestoneCard({ prova, index }: { prova: Prova; index: number }) {
  const m = prova.milestone;
  const stakeholders =
    'stakeholders' in prova
      ? (prova as Prova & { stakeholders?: Stakeholder[] }).stakeholders
      : undefined;
  return (
    <ArticleChrome type="marco" index={index} link={prova.link} pife={prova.pife} champ={prova.champ}>
      <div className="space-y-4 mb-3">
        {m?.oficial && (
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-amber-400 font-mono">
            <span className="w-1 h-1 rounded-full bg-amber-400" />
            OFICIAL
          </div>
        )}

        <div className="font-serif font-medium text-ink leading-tight text-balance" style={{ fontSize: 'clamp(22px, 2.6vw, 36px)' }}>
          {m?.label ?? prova.titulo.toUpperCase()}
        </div>

        <div className="space-y-1">
          <div className="font-mono text-[13px] text-ink/75">{m?.date}</div>
          {m?.meta && <div className="text-byline normal-case tracking-normal text-ink/55 text-[12px]">{renderBoldRed(m.meta)}</div>}
        </div>

        {stakeholders && stakeholders.length > 0 && (
          <div className="pt-3">
            <div className="text-byline mb-3 text-[10px]">KUDOS RECEBIDOS DE</div>
            <div className="flex items-end gap-3 flex-wrap">
              {stakeholders.map((s) => (
                <StakeholderAvatar key={s.nome} stakeholder={s} />
              ))}
              <div className="flex flex-col items-center gap-1.5" title="entre outros stakeholders">
                <div
                  className="rounded-full border border-dashed border-primary/40 flex items-center justify-center text-primary/70 font-serif text-lg font-medium"
                  style={{ width: 52, height: 52 }}
                >
                  +
                </div>
                <div className="text-center leading-tight">
                  <div className="font-sans uppercase tracking-wider text-[9px] text-ink/45">outros</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-3 pt-3 border-t border-dossie-ruleSoft">
        <h3 className="font-serif font-medium text-fluid-h3 text-ink leading-tight">{prova.titulo}</h3>
        <p className="font-serif text-[16px] text-ink/75 leading-relaxed">{renderBoldRed(prova.corpo)}</p>
      </div>
    </ArticleChrome>
  );
}

type Stakeholder = {
  nome: string;
  area?: string;
  iniciais: string;
  url?: string;
  recente?: boolean;
};

function StakeholderAvatar({ stakeholder }: { stakeholder: Stakeholder }) {
  const size = stakeholder.recente ? 36 : 52;
  return (
    <div
      className="flex flex-col items-center gap-1.5 group"
      title={`${stakeholder.nome}${stakeholder.area ? ' · ' + stakeholder.area : ''}`}
    >
      {stakeholder.url ? (
        <img
          src={stakeholder.url}
          alt={stakeholder.nome}
          loading="lazy"
          className="rounded-full object-cover border border-dossie-rule group-hover:border-primary transition-colors"
          style={{ width: size, height: size, filter: 'grayscale(15%)' }}
        />
      ) : (
        <div
          className="character-avatar"
          style={{ width: size, height: size, fontSize: size > 40 ? 13 : 10 }}
        >
          {stakeholder.iniciais}
        </div>
      )}
      <div className="text-center leading-tight">
        <div className={`font-sans uppercase tracking-wider ${stakeholder.recente ? 'text-[8px]' : 'text-[9px]'} text-ink/75`}>
          {stakeholder.nome.split(' ')[0]}
        </div>
        {stakeholder.area && (
          <div className={`${stakeholder.recente ? 'text-[7px]' : 'text-[8px]'} text-primary/75 uppercase tracking-widest mt-0.5`}>
            {stakeholder.area}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * V4 · NARRATIVO — frase-âncora editorial
 */
function NarrativeCard({ prova, index }: { prova: Prova; index: number }) {
  return (
    <ArticleChrome type="narrativo" index={index} link={prova.link} pife={prova.pife} champ={prova.champ}>
      {prova.anchor && (
        <blockquote className="font-editorial italic text-fluid-deck text-ink leading-snug text-balance mb-3 border-l-2 border-primary pl-4">
          {renderBoldRed(prova.anchor)}
        </blockquote>
      )}

      <div className={`space-y-3 ${prova.anchor ? 'pt-3 border-t border-dossie-ruleSoft' : ''}`}>
        <h3 className="font-serif font-medium text-fluid-h3 text-ink leading-tight">{prova.titulo}</h3>
        <p className="font-serif text-[16px] text-ink/75 leading-relaxed">{renderBoldRed(prova.corpo)}</p>
      </div>
    </ArticleChrome>
  );
}

