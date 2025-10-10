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
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-300 font-normal">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 group hover:text-success transition-colors duration-300">
            API Status: 
            {apiInfo ? (
              <CheckCircle2 className="w-4 h-4 text-success group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <XCircle className="w-4 h-4 text-error group-hover:scale-110 transition-transform duration-300" />
            )}
          </span>
          <span>•</span>
          <span className="font-semibold px-2 py-1 bg-info/10 border border-info/30 rounded-md text-info hover:bg-info/20 transition-all duration-300">v{apiInfo?.version || '1.0.0'}</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hover:text-neutral-200 transition-colors duration-300">Atualizado: {new Date(dossie.updatedAt).toLocaleDateString('pt-BR')}</span>
          <span>•</span>
          <span className="text-neutral-500 font-semibold bg-gradient-to-r from-primary/10 to-tertiary/10 px-3 py-1 rounded-md border border-primary/20 hover:border-primary/40 transition-all duration-300">Dossiê System</span>
        </div>
      </div>
    </footer>
  );
}
