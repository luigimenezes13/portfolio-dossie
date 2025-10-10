import { FileText } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="text-center animate-fade-in-up">
        <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4 animate-pulse" />
        <h2 className="text-2xl font-bold text-gray-400 mb-2">Nenhum dossiê encontrado</h2>
        <p className="text-gray-500">Não há dossiês cadastrados no momento.</p>
      </div>
    </div>
  );
}
