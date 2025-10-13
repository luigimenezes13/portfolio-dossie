import { CheckCircle, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CARD_CLASSES, ICON_CONTAINERS, ICON_COLORS, TYPOGRAPHY } from '../constants/design-system';

interface ConclusaoSectionProps {
  conclusao: string;
}

export function ConclusaoSection({ conclusao }: ConclusaoSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className={`${CARD_CLASSES.section} ${isVisible ? 'animate-on-scroll-visible' : 'animate-on-scroll'}`}
    >
      {/* Header com ícone */}
      <div className="section-header mb-8">
        <div className={ICON_CONTAINERS.secondary}>
          <CheckCircle className={`w-7 h-7 ${ICON_COLORS.secondary} drop-shadow-lg`} />
        </div>
        <h2 className={TYPOGRAPHY.sectionTitleSecondary}>Conclusão</h2>
      </div>

      {/* Card principal de conclusão */}
      <div className={`relative group ${CARD_CLASSES.base} p-8 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30 overflow-hidden`}>
        
        {/* Ícone decorativo no canto */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
          <Sparkles className={`w-16 h-16 ${ICON_COLORS.secondary} animate-pulse`} />
        </div>

        {/* Barra decorativa superior */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary rounded-t-2xl"></div>

        {/* Conteúdo da conclusão */}
        <div className="relative z-10">
          <p className={`${TYPOGRAPHY.bodyLarge} whitespace-pre-line`}>
            {conclusao}
          </p>
        </div>

        {/* Barra decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-tertiary/60 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-tertiary/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-2xl"></div>
      </div>
    </section>
  );
}
