import { Crosshair, Briefcase, FileText, Building2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Dossie } from '../types/api';

interface ObjetivoSectionProps {
  objetivo: Dossie['objetivo'];
}

export function ObjetivoSection({ objetivo }: ObjetivoSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className={`section-card ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="section-header">
        <div className="icon-container">
          <Crosshair className="w-7 h-7 text-primary" />
        </div>
        <h2 className="section-title">Objetivo da Efetivação</h2>
      </div>
      
      <p className="text-description mb-8">{objetivo.descricao}</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card: Cargo Proposto */}
        <div className="group relative card-base hover:shadow-xl hover:shadow-neutral-700/20">
          {/* Ícone */}
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
            <div className="p-2.5 bg-neutral-700/20 border border-neutral-600/40 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Briefcase className="w-5 h-5 text-neutral-400" />
            </div>
            <p className="text-neutral-400 text-sm font-semibold uppercase tracking-wider">Cargo Proposto</p>
          </div>
          
          {/* Conteúdo */}
          <div>
            <p className="text-white font-bold text-2xl mb-2 leading-tight">{objetivo.cargoProposto}</p>
            {objetivo.senioridadeProposta && (
              <div className="inline-flex items-center px-3 py-1.5 bg-primary/15 border border-primary/30 rounded-lg">
                <span className="text-primary text-sm font-bold">{objetivo.senioridadeProposta}</span>
              </div>
            )}
          </div>
          
          {/* Efeito decorativo */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral-600/60 via-neutral-600/30 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Card: Modelo de Contratação */}
        <div className="group relative card-base hover:shadow-xl hover:shadow-neutral-700/20">
          {/* Ícone */}
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
            <div className="p-2.5 bg-neutral-700/20 border border-neutral-600/40 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <FileText className="w-5 h-5 text-neutral-400" />
            </div>
            <p className="text-neutral-400 text-sm font-semibold uppercase tracking-wider">Modelo</p>
          </div>
          
          {/* Conteúdo */}
          <div>
            <p className="text-white font-bold text-2xl">{objetivo.modeloContratacao}</p>
          </div>
          
          {/* Efeito decorativo */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral-600/60 via-neutral-600/30 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Card: Empresa */}
        <div className="group relative card-base hover:shadow-xl hover:shadow-neutral-700/20">
          {/* Ícone */}
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
            <div className="p-2.5 bg-neutral-700/20 border border-neutral-600/40 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Building2 className="w-5 h-5 text-neutral-400" />
            </div>
            <p className="text-neutral-400 text-sm font-semibold uppercase tracking-wider">Empresa</p>
          </div>
          
          {/* Conteúdo */}
          <div>
            <p className="text-white font-bold text-2xl">{objetivo.empresa}</p>
          </div>
          
          {/* Efeito decorativo */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral-600/60 via-neutral-600/30 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </section>
  );
}
