import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ConclusaoSectionProps {
  conclusao: string;
}

export function ConclusaoSection({ conclusao }: ConclusaoSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className={`bg-gradient-to-br from-primary/20 to-tertiary/20 border border-primary/40 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/20 transition-all duration-700 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-2xl font-bold text-white mb-4">Conclusão</h2>
      <p className="text-gray-200 leading-relaxed text-lg">
        {conclusao}
      </p>
    </section>
  );
}
