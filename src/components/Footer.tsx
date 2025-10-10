import { CheckCircle2, XCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { ApiResponse, Dossie } from '../types/api';

interface FooterProps {
  apiInfo: ApiResponse | null;
  dossie: Dossie;
}

export function Footer({ apiInfo, dossie }: FooterProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });

  return (
    <footer 
      ref={ref}
      className={`mt-16 pt-8 border-t border-tertiary/20 transition-all duration-700 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            API Status: 
            {apiInfo ? (
              <CheckCircle2 className="w-3 h-3 text-green-400" />
            ) : (
              <XCircle className="w-3 h-3 text-red-400" />
            )}
          </span>
          <span>•</span>
          <span>v{apiInfo?.version || '1.0.0'}</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Atualizado: {new Date(dossie.updatedAt).toLocaleDateString('pt-BR')}</span>
          <span>•</span>
          <span className="text-gray-600">Dossiê System</span>
        </div>
      </div>
    </footer>
  );
}
