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
        <div className="icon-container">
          <CheckCircle className="w-7 h-7 text-primary" />
        </div>
        <h2 className="section-title">Conclusão</h2>
      </div>

      {/* Card principal de conclusão */}
      <div className="relative group card-base p-8 hover:shadow-2xl hover:shadow-neutral-700/20">
        
        {/* Ícone decorativo no canto */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <Sparkles className="w-16 h-16 text-primary" />
        </div>

        {/* Barra decorativa superior */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent rounded-t-2xl"></div>

        {/* Conteúdo da conclusão */}
        <div className="relative z-10">
          <p className="text-neutral-100 text-lg leading-relaxed whitespace-pre-line">
            {conclusao}
          </p>
        </div>

        {/* Barra decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neutral-600/30 to-neutral-600/60 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-2xl"></div>
      </div>
    </section>
  );
}
