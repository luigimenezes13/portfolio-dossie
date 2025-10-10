import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ConclusaoSectionProps {
  conclusao: string;
}

export function ConclusaoSection({ conclusao }: ConclusaoSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className={`section-card-primary ${isVisible ? 'animate-on-scroll-visible' : 'animate-on-scroll'}`}
    >
      <h2 className="section-title-large">Conclusão</h2>
      <p className="text-description-large">
        {conclusao}
      </p>
    </section>
  );
}
