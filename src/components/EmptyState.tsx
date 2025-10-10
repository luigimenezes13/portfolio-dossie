import { FileText } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="screen-container">
      <div className="empty-card">
        <FileText className="w-20 h-20 text-neutral-500 mx-auto mb-6 animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-300 mb-4">Nenhum dossiê encontrado</h2>
        <p className="text-neutral-400 text-lg font-normal">Não há dossiês cadastrados no momento.</p>
      </div>
    </div>
  );
}
