import { CheckCircle, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ConclusaoSectionProps {
  conclusao: string;
}

export function ConclusaoSection({ conclusao }: ConclusaoSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className={`section-card ${isVisible ? 'animate-on-scroll-visible' : 'animate-on-scroll'}`}
    >
      {/* Header com ícone */}
      <div className="section-header mb-8">
        <div className="icon-container bg-gradient-to-br from-success/20 to-accent-green/20 border-success/50 shadow-lg shadow-success/20">
          <CheckCircle className="w-7 h-7 text-success drop-shadow-lg" />
        </div>
        <h2 className="section-title bg-gradient-to-r from-white via-success to-white bg-clip-text text-transparent">Conclusão</h2>
      </div>

      {/* Card principal de conclusão */}
      <div className="relative group card-base p-8 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30">
        
        {/* Ícone decorativo no canto */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
          <Sparkles className="w-16 h-16 text-accent-gold animate-pulse" />
        </div>

        {/* Barra decorativa superior */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-rose to-accent-orange rounded-t-2xl"></div>

        {/* Conteúdo da conclusão */}
        <div className="relative z-10">
          <p className="text-neutral-100 text-lg leading-relaxed whitespace-pre-line">
            {conclusao}
          </p>
        </div>

        {/* Barra decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-accent-orange/60 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-accent-orange/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-2xl"></div>
      </div>
    </section>
  );
}
