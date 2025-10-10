interface ConclusaoSectionProps {
  conclusao: string;
}

export function ConclusaoSection({ conclusao }: ConclusaoSectionProps) {
  return (
    <section className="bg-gradient-to-br from-primary/20 to-tertiary/20 border border-primary/40 rounded-2xl p-8 animate-fade-in-up hover:shadow-xl hover:shadow-primary/20 transition-all duration-300" style={{ animationDelay: '0.7s', animationFillMode: 'backwards' }}>
      <h2 className="text-2xl font-bold text-white mb-4">Conclusão</h2>
      <p className="text-gray-200 leading-relaxed text-lg">
        {conclusao}
      </p>
    </section>
  );
}
