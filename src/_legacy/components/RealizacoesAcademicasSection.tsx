import { GraduationCap, BookOpen, Award, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { RealizacoesAcademicas } from '../types/api';
import { CARD_CLASSES, ICON_CONTAINERS, ICON_COLORS, TYPOGRAPHY } from '../constants/design-system';

interface RealizacoesAcademicasSectionProps {
  realizacoesAcademicas: RealizacoesAcademicas;
}

export function RealizacoesAcademicasSection({ realizacoesAcademicas }: RealizacoesAcademicasSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Concluído':
        return CheckCircle;
      case 'Em andamento':
        return Clock;
      case 'Planejado':
        return TrendingUp;
      default:
        return BookOpen;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'Em andamento':
        return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'Planejado':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      default:
        return 'text-neutral-400 bg-neutral-500/20 border-neutral-500/30';
    }
  };

  return (
    <section 
      ref={ref}
      className={`${CARD_CLASSES.section} ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="section-header">
        <div className={ICON_CONTAINERS.primary}>
          <GraduationCap className={`w-7 h-7 ${ICON_COLORS.primary} drop-shadow-lg`} />
        </div>
        <div>
          <h2 className={TYPOGRAPHY.sectionTitlePrimary}>Realizações Acadêmicas</h2>
          <p className={`${TYPOGRAPHY.bodySmall} mt-2 max-w-3xl font-medium`}>
            Performance acadêmica e participação em pesquisas
          </p>
        </div>
      </div>

      {/* Performance Acadêmica */}
      <div className="mb-10">
        <h3 className="text-subtitle">Performance Acadêmica</h3>
        <div className="bg-gradient-to-br from-primary/10 via-neutral-900/30 to-secondary/10 border border-primary/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className={`${ICON_CONTAINERS.secondary} flex-shrink-0`}>
              <Award className={`w-6 h-6 ${ICON_COLORS.secondary} drop-shadow-lg`} />
            </div>
            <div className="flex-1">
              <p className="text-neutral-200 text-lg leading-relaxed">
                {realizacoesAcademicas.performanceAcademica}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bolsas e Pesquisas */}
      {realizacoesAcademicas.bolsasEPesquisas && realizacoesAcademicas.bolsasEPesquisas.length > 0 && (
        <div>
          <h3 className="text-subtitle">Bolsas e Pesquisas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {realizacoesAcademicas.bolsasEPesquisas.map((bolsa, idx) => {
              const StatusIcon = getStatusIcon(bolsa.status);
              const statusColorClass = getStatusColor(bolsa.status);
              
              return (
                <div 
                  key={idx}
                  className="group relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                >
                  {/* Header com tipo e status */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 bg-gradient-to-br from-secondary/20 to-secondary-light/20 border border-secondary/30 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <BookOpen className={`w-6 h-6 ${ICON_COLORS.secondary}`} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">
                          {bolsa.titulo}
                        </h4>
                        <p className="text-sm text-secondary font-medium">
                          {bolsa.tipo}
                        </p>
                      </div>
                    </div>
                    
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${statusColorClass}`}>
                      <StatusIcon className="w-4 h-4" />
                      <span className="text-xs font-medium">
                        {bolsa.status}
                      </span>
                    </div>
                  </div>
                  
                  {/* Instituição */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-neutral-300">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="text-neutral-400">Instituição:</span>
                      <span className="font-medium">{bolsa.instituicao}</span>
                    </div>
                  </div>
                  
                  {/* Período */}
                  {bolsa.periodo && (
                    <div className="flex items-center gap-2 text-sm text-neutral-300">
                      <Clock className="w-4 h-4 text-tertiary" />
                      <span className="text-neutral-400">Período:</span>
                      <span className="font-medium">{bolsa.periodo}</span>
                    </div>
                  )}
                  
                  {/* Efeito decorativo */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary/60 via-secondary-light/40 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
