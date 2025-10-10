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
      className={`mt-20 pt-10 border-t border-tertiary/20 transition-all duration-700 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-400 font-normal">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            API Status: 
            {apiInfo ? (
              <CheckCircle2 className="w-4 h-4 text-green-400" />
            ) : (
              <XCircle className="w-4 h-4 text-red-400" />
            )}
          </span>
          <span>•</span>
          <span className="font-semibold">v{apiInfo?.version || '1.0.0'}</span>
        </div>
        <div className="flex items-center gap-6">
          <span>Atualizado: {new Date(dossie.updatedAt).toLocaleDateString('pt-BR')}</span>
          <span>•</span>
          <span className="text-neutral-500 font-semibold">Dossiê System</span>
        </div>
      </div>
    </footer>
  );
}
