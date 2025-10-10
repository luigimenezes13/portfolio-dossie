import { XCircle } from 'lucide-react';

interface ErrorScreenProps {
  error: string;
}

export function ErrorScreen({ error }: ErrorScreenProps) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full animate-scale-in">
        <div className="bg-red-950/50 border border-red-500/50 rounded-xl p-8 text-center hover:border-red-500/80 transition-all duration-300">
          <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4 animate-pulse" />
          <h2 className="text-2xl font-bold text-red-400 mb-2">Erro ao Carregar</h2>
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      </div>
    </div>
  );
}
