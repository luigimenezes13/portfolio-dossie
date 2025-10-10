import { XCircle } from 'lucide-react';

interface ErrorScreenProps {
  error: string;
}

export function ErrorScreen({ error }: ErrorScreenProps) {
  return (
    <div className="screen-container">
      <div className="max-w-md w-full animate-scale-in">
        <div className="error-card">
          <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4 animate-pulse" />
          <h2 className="text-2xl font-bold text-red-400 mb-2">Erro ao Carregar</h2>
          <p className="text-red-300 text-sm font-normal">{error}</p>
        </div>
      </div>
    </div>
  );
}
