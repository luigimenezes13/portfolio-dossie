import { FileText } from 'lucide-react';
import { ICON_COLORS, TYPOGRAPHY } from '../constants/design-system';

export function EmptyState() {
  return (
    <div className="screen-container">
      <div className="empty-card group">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
          <FileText className={`w-20 h-20 ${ICON_COLORS.info} mx-auto animate-pulse relative drop-shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`} />
        </div>
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${TYPOGRAPHY.h2} ${TYPOGRAPHY.gradientPrimary}`}>
          Nenhum dossiê encontrado
        </h2>
        <p className={`${TYPOGRAPHY.bodyLarge} px-4`}>
          Não há dossiês cadastrados no momento.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary text-sm font-semibold">
            📊 Em breve novos dossiês
          </div>
        </div>
      </div>
    </div>
  );
}
