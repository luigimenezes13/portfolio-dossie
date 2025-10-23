import { Calendar, CheckCircle2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import type { Dossie } from '../types/api';
import profileImage from '../assets/profile.jpg';
import lovableIcon from '../assets/lovable-ai-icon.webp';
import v0Icon from '../assets/vercel-v0-icon.webp';
import { TYPOGRAPHY, ICON_COLORS, ANIMATIONS } from '../constants/design-system';
import { AcademicFormationSection } from './AcademicFormationSection';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

interface HeaderProps {
  dossie: Dossie;
}

export function Header({ dossie }: HeaderProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        if (isPinned) {
          setIsPinned(false);
          setShowTooltip(false);
        }
      }
    }

    if (isPinned) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isPinned]);

  const handleClick = () => {
    setIsPinned(!isPinned);
    setShowTooltip(!isPinned);
    setShowHint(false);
    setHasInteracted(true);
  };

  const handleMouseEnter = () => {
    if (!isPinned) {
      setShowTooltip(true);
    }
    setShowHint(false);
    setHasInteracted(true);
  };

  const handleMouseLeave = () => {
    if (!isPinned) {
      setShowTooltip(false);
    }
  };

  return (
    <header className="mb-16 md:mb-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12">
        <div className="relative flex-shrink-0 animate-fade-in-left">
          <div className="profile-image-container">
            <div className="profile-image">
              <img 
                src={profileImage} 
                alt={`Foto de ${dossie.colaborador.nome}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div 
              className={`profile-badge cursor-pointer hover:scale-110 transition-all duration-300 absolute bottom-0 right-0 hover:shadow-2xl hover:shadow-secondary/50 ${!hasInteracted ? ANIMATIONS.pulseBadge : ''}`}
              onClick={handleClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CheckCircle2 className="w-8 h-8 text-white drop-shadow-lg" />
              {!hasInteracted && <span className="notification-dot bg-secondary"></span>}
            </div>

            {showHint && !showTooltip && (
              <div className="hint-bubble">
                <div className="hint-content">
                  Clique no check! 👆
                  <div className="hint-arrow"></div>
                </div>
              </div>
            )}

            {showTooltip && (
              <div 
                ref={tooltipRef} 
                className="tooltip-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="tooltip-content">
                  <div className="relative">
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-arrow-inner"></div>
                    
                    <div className="space-y-3">
                      <div className="text-sm text-neutral-200 leading-relaxed">
                        Dossiê desenvolvido por{' '}
                        <a 
                          href="https://github.com/luigimenezes13" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 link-primary"
                        >
                          <GithubIcon className="w-4 h-4" />
                          github.com/luigimenezes13
                        </a>
                      </div>
                      
                      <div className="pt-2 border-t border-secondary/40">
                        <p className="text-xs text-neutral-300 mb-2 font-medium"><span className="text-primary">Não</span> foram usadas tecnologias como:</p>
                        <div className="flex flex-wrap gap-2">
                          <a 
                            href="https://lovable.dev" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="badge-tech"
                          >
                            <img src={lovableIcon} alt="Lovable AI" className="w-3.5 h-3.5" />
                            Lovable
                          </a>
                          <a 
                            href="https://v0.dev" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="badge-tech"
                          >
                            <img src={v0Icon} alt="Vercel v0" className="w-3.5 h-3.5" />
                            v0
                          </a>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-secondary/40">
                        <p className="text-xs text-neutral-300 font-medium">
                          Esse dossiê utiliza a API pública (também desenvolvida por mim) disponível em{' '}
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
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center text-center md:text-left animate-fade-in-right" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
          <h1 className={`py-6 mb-10 leading-tight animate-fade-in ${TYPOGRAPHY.h1} ${TYPOGRAPHY.gradientPrimary}`}>
            {dossie.colaborador.nome}
          </h1>
          <p className="text-neutral-200 text-2xl md:text-3xl mb-10 font-semibold leading-relaxed">
            {dossie.colaborador.funcaoAtual}
          </p>
          <div className="flex items-center justify-center md:justify-start gap-6 text-base text-neutral-300 font-medium flex-wrap">
            <span className={`flex items-center gap-2 hover:text-tertiary transition-colors group`}>
              <Calendar className={`w-5 h-5 ${ICON_COLORS.tertiary} group-hover:scale-110 transition-transform`} />
              {dossie.colaborador.idade} anos
            </span>
            <span>•</span>
            <span>Início: {dossie.colaborador.dataInicio}</span>
            {dossie.colaborador.tempoV4 && (
              <>
                <span>•</span>
                <span>Tempo V4: {dossie.colaborador.tempoV4}</span>
              </>
            )}
            {dossie.colaborador.senioridade && (
              <>
                <span>•</span>
                <span className={`${TYPOGRAPHY.bodySmall} font-semibold text-primary`}>{dossie.colaborador.senioridade}</span>
              </>
            )}
          </div>
          
          {/* Enhanced Academic Program Information */}
          {dossie.colaborador.curso && (
            <div className="mt-6">
              <AcademicFormationSection curso={dossie.colaborador.curso} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
