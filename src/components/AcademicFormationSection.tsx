import { GraduationCap, BookOpen, MapPin } from 'lucide-react';
import type { Curso } from '../types/api';
import { ICON_CONTAINERS, ICON_COLORS, TYPOGRAPHY } from '../constants/design-system';

interface AcademicFormationSectionProps {
  curso: Curso;
}

export function AcademicFormationSection({ curso }: AcademicFormationSectionProps) {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-neutral-900/30 to-secondary/10 border border-primary/20 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className={`${ICON_CONTAINERS.primary} flex-shrink-0`}>
          <GraduationCap className={`w-6 h-6 ${ICON_COLORS.primary} drop-shadow-lg`} />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-primary" />
            <h3 className={`${TYPOGRAPHY.h3} text-primary font-semibold`}>
              {curso.nome}
            </h3>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-neutral-200">
              <span className="text-neutral-400">Semestre:</span>
              <span className="font-medium">{curso.semestre}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-neutral-200">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="text-neutral-400">Instituição:</span>
              <span className="font-medium">{curso.faculdade}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
