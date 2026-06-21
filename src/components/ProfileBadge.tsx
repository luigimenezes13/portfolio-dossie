/**
 * ProfileBadge — versão editorial dark.
 * Foto em moldura cinza fina, badge discreto, tooltip light-on-dark.
 */
import { useState, useEffect, useRef } from 'react';
import { Info } from 'lucide-react';
import profile from '../assets/profile.jpg';
import lovableIcon from '../assets/lovable-ai-icon.webp';
import v0Icon from '../assets/vercel-v0-icon.webp';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

interface ProfileBadgeProps {
  size?: number;
  name: string;
  tooltipSide?: 'left' | 'right' | 'auto';
}

export function ProfileBadge({ size = 176, name, tooltipSide = 'auto' }: ProfileBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isPinned) return;
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsPinned(false);
        setShowTooltip(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isPinned]);

  const handleClick = () => {
    setIsPinned(!isPinned);
    setShowTooltip(!isPinned);
    setShowHint(false);
    setHasInteracted(true);
  };

  const handleMouseEnter = () => {
    if (!isPinned) setShowTooltip(true);
    setShowHint(false);
    setHasInteracted(true);
  };

  const handleMouseLeave = () => {
    if (!isPinned) setShowTooltip(false);
  };

  const tooltipPositionClass =
    tooltipSide === 'right'
      ? 'left-full ml-5 top-1/2 -translate-y-1/2'
      : tooltipSide === 'left'
        ? 'right-full mr-5 top-1/2 -translate-y-1/2'
        : 'top-full mt-5 left-1/2 -translate-x-1/2';

  return (
    <div ref={wrapperRef} className="relative inline-block">
      {/* Foto · moldura editorial fina (sem glow vermelho) */}
      <div
        className="relative overflow-hidden border border-dossie-rule"
        style={{ width: size, height: size, borderRadius: 2 }}
      >
        <img
          src={profile}
          alt={`Foto de ${name}`}
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(8%) contrast(1.03)' }}
          loading="eager"
        />
      </div>

      {/* Badge "info" — discreto bege/ink no canto inferior direito */}
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Sobre este dossiê"
        className={`absolute bottom-2 right-2 w-9 h-9 rounded-full flex items-center justify-center bg-dossie-card border border-dossie-rule text-ink/80 hover:text-primary hover:border-primary transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none ${
          !hasInteracted ? 'animate-pulse-soft' : ''
        }`}
      >
        <Info className="w-4 h-4" strokeWidth={2} />
        {!hasInteracted && (
          <span
            className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-primary"
            aria-hidden="true"
          />
        )}
      </button>

      {/* Hint bubble · estilo editorial */}
      {showHint && !showTooltip && (
        <div
          className="absolute z-30 pointer-events-none animate-fade-in-up"
          style={{ bottom: 16, left: '100%', marginLeft: 18 }}
        >
          <div className="relative bg-ink text-dossie-default text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 whitespace-nowrap">
            <span className="absolute -left-1.5 bottom-3 w-0 h-0 border-y-[6px] border-y-transparent border-r-[6px] border-r-ink" />
            ← Sobre este dossiê
          </div>
        </div>
      )}

      {/* Tooltip · editorial light-on-dark */}
      {showTooltip && (
        <div
          className={`absolute ${tooltipPositionClass} z-40 w-[340px] max-w-[90vw] animate-fade-in-up`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative bg-dossie-card border border-dossie-rule p-6 space-y-5">
            {/* Header */}
            <div className="flex items-center gap-2 pb-3 rule-bottom-soft">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-kicker text-[10px]">SOBRE ESTE DOSSIÊ</span>
            </div>

            {/* Autoria */}
            <div className="font-serif text-[15px] text-ink leading-relaxed">
              Dossiê desenvolvido por{' '}
              <a
                href="https://github.com/luigimenezes13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 link-primary"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                github.com/luigimenezes13
              </a>
            </div>

            {/* Sem Lovable / v0 */}
            <div className="pt-3 rule-top-soft border-t border-dossie-ruleSoft">
              <p className="font-sans text-[11px] text-ink/65 mb-2.5">
                <span className="text-primary font-semibold">Não</span> foram usadas tecnologias como:
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://lovable.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2 py-1 bg-dossie-default border border-dossie-rule text-[11px] text-ink/70 hover:text-ink hover:border-primary/60 transition-colors"
                >
                  <img src={lovableIcon} alt="Lovable AI" className="w-3.5 h-3.5" />
                  Lovable
                </a>
                <a
                  href="https://v0.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2 py-1 bg-dossie-default border border-dossie-rule text-[11px] text-ink/70 hover:text-ink hover:border-primary/60 transition-colors"
                >
                  <img src={v0Icon} alt="Vercel v0" className="w-3.5 h-3.5" />
                  v0
                </a>
              </div>
            </div>

            {/* API */}
            <div className="pt-3 border-t border-dossie-ruleSoft">
              <p className="font-sans text-[11px] text-ink/65 leading-relaxed">
                Este dossiê consome a API pública (também desenvolvida por mim) em{' '}
                <a
                  href="https://dossie-backend.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary"
                >
                  dossie-backend.vercel.app
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
