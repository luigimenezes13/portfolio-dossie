import { FileText } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="screen-container">
      <div className="empty-card group">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-info/20 blur-3xl rounded-full"></div>
          <FileText className="w-20 h-20 text-info mx-auto animate-pulse relative drop-shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-info via-accent-purple to-info bg-clip-text text-transparent mb-4">
          Nenhum dossiê encontrado
        </h2>
        <p className="text-neutral-300 text-lg font-normal px-4">
          Não há dossiês cadastrados no momento.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <div className="px-4 py-2 bg-info/10 border border-info/30 rounded-lg text-info text-sm font-semibold">
            📊 Em breve novos dossiês
          </div>
        </div>
      </div>
    </div>
  );
}
