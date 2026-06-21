/**
 * Rail lateral reusável — mostra número do capítulo gigante + meta + microcopy.
 * Usado pra preencher espaço lateral e adicionar densidade visual.
 */
import type { ReactNode } from 'react';

interface ChapterRailProps {
  number: string;
  name: string;
  meta?: Array<{ label: string; texto: string }>;
  footer?: ReactNode;
  total?: string;
}

export function ChapterRail({ number, name, meta, footer, total = '15' }: ChapterRailProps) {
  return (
    <aside className="col-span-12 lg:col-span-3 space-y-6 lg:sticky lg:top-12">
      <div>
        <div className="text-microcopy mb-3">CAPÍTULO</div>
        <div className="font-display font-semibold text-primary leading-none text-[100px] lg:text-[160px]">
          {number}
        </div>
        <div className="text-microcopy text-white/40 mt-2">DE {total}</div>
      </div>

      <div className="red-line-thin w-full" />

      <div>
        <div className="text-microcopy mb-3">{name}</div>
      </div>

      {meta && meta.length > 0 && (
        <div className="space-y-3 pt-2">
          {meta.map((m, i) => (
            <div key={i} className="flex items-center gap-3 text-fluid-small">
              <span className="font-mono text-[10px] text-primary/60 w-6">{m.label}</span>
              <span className="text-white/70 text-pretty">{m.texto}</span>
            </div>
          ))}
        </div>
      )}

      {footer && (
        <>
          <div className="red-line-thin w-full opacity-30" />
          <div className="space-y-2 text-microcopy text-white/40">{footer}</div>
        </>
      )}
    </aside>
  );
}

interface ChapterSeparatorProps {
  number: string;
  label: string;
}

export function ChapterSeparator({ number, label }: ChapterSeparatorProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-[10px] text-primary">{number}</span>
      <div className="red-line-thin flex-1 opacity-40" />
      <span className="text-microcopy">{label}</span>
    </div>
  );
}
