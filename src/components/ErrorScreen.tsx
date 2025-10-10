import { XCircle } from 'lucide-react';

interface ErrorScreenProps {
  error: string;
}

export function ErrorScreen({ error }: ErrorScreenProps) {
  return (
    <div className="screen-container">
      <div className="max-w-lg w-full animate-scale-in">
        <div className="error-card group">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-error/20 blur-3xl rounded-full"></div>
            <XCircle className="w-20 h-20 text-error mx-auto animate-pulse relative drop-shadow-2xl group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-error via-red-400 to-error bg-clip-text text-transparent mb-4">
            Erro ao Carregar
          </h2>
          <p className="text-red-300 text-lg font-normal px-4">{error}</p>
          <div className="mt-6">
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-3 bg-error/20 border-2 border-error/40 text-error font-bold rounded-lg hover:bg-error/30 hover:border-error/60 hover:scale-105 transition-all duration-300"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
