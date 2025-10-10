import { XCircle } from 'lucide-react';

interface ErrorScreenProps {
  error: string;
}

export function ErrorScreen({ error }: ErrorScreenProps) {
  return (
    <div className="screen-container">
      <div className="max-w-lg w-full animate-scale-in">
        <div className="error-card">
          <XCircle className="w-20 h-20 text-red-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-4">Erro ao Carregar</h2>
          <p className="text-red-300 text-lg font-normal">{error}</p>
        </div>
      </div>
    </div>
  );
}
