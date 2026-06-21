import { Calendar, User, Briefcase, ArrowRight, Target, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { VisaoFuturo } from '../types/api';
import { CARD_CLASSES, ICON_CONTAINERS, ICON_COLORS, TYPOGRAPHY } from '../constants/design-system';

interface VisaoFuturoSectionProps {
  visaoFuturo: VisaoFuturo;
}

export function VisaoFuturoSection({ visaoFuturo }: VisaoFuturoSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const timelineItems = [
    {
      period: '1 Ano',
      data: visaoFuturo.umAno,
      color: 'primary',
      icon: Target,
      delay: '0.1s'
    },
    {
      period: '3 Anos',
      data: visaoFuturo.tresAnos,
      color: 'secondary',
      icon: Star,
      delay: '0.2s'
    },
    {
      period: '5 Anos',
      data: visaoFuturo.cincoAnos,
      color: 'tertiary',
      icon: Calendar,
      delay: '0.3s'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          gradient: 'from-primary/20 via-primary/10 to-primary/5',
          border: 'border-primary/30',
          iconBg: 'bg-primary/20',
          iconBorder: 'border-primary/40',
          iconColor: 'text-primary',
          textColor: 'text-primary',
          glow: 'hover:shadow-primary/20'
        };
      case 'secondary':
        return {
          gradient: 'from-secondary/20 via-secondary/10 to-secondary/5',
          border: 'border-secondary/30',
          iconBg: 'bg-secondary/20',
          iconBorder: 'border-secondary/40',
          iconColor: 'text-secondary',
          textColor: 'text-secondary',
          glow: 'hover:shadow-secondary/20'
        };
      case 'tertiary':
        return {
          gradient: 'from-tertiary/20 via-tertiary/10 to-tertiary/5',
          border: 'border-tertiary/30',
          iconBg: 'bg-tertiary/20',
          iconBorder: 'border-tertiary/40',
          iconColor: 'text-tertiary',
          textColor: 'text-tertiary',
          glow: 'hover:shadow-tertiary/20'
        };
      default:
        return {
          gradient: 'from-neutral-700/20 via-neutral-800/10 to-neutral-900/5',
          border: 'border-neutral-700/30',
          iconBg: 'bg-neutral-700/20',
          iconBorder: 'border-neutral-700/40',
          iconColor: 'text-neutral-400',
          textColor: 'text-neutral-300',
          glow: 'hover:shadow-neutral-700/20'
        };
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
          <Target className={`w-7 h-7 ${ICON_COLORS.primary} drop-shadow-lg`} />
        </div>
        <div>
          <h2 className={TYPOGRAPHY.sectionTitlePrimary}>Visão de Futuro</h2>
          <p className={`${TYPOGRAPHY.bodySmall} mt-2 max-w-3xl font-medium`}>
            Projeções e objetivos pessoais e profissionais
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-tertiary opacity-30"></div>
        
        <div className="space-y-8">
          {timelineItems.map((item, idx) => {
            const colors = getColorClasses(item.color);
            const Icon = item.icon;
            
            return (
              <div 
                key={idx}
                className={`relative flex items-start gap-6 animate-fade-in-up`}
                style={{ animationDelay: item.delay }}
              >
                {/* Timeline Dot */}
                <div className={`relative z-10 flex-shrink-0 w-16 h-16 ${colors.iconBg} border-2 ${colors.iconBorder} rounded-full flex items-center justify-center shadow-lg ${colors.glow} transition-all duration-300`}>
                  <Icon className={`w-7 h-7 ${colors.iconColor} drop-shadow-lg`} />
                </div>
                
                {/* Content Card */}
                <div className={`flex-1 bg-gradient-to-br ${colors.gradient} border ${colors.border} rounded-2xl p-6 hover:shadow-xl ${colors.glow} transition-all duration-300`}>
                  {/* Period Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className={`text-2xl font-bold ${colors.textColor}`}>
                      {item.period}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-current to-transparent opacity-30"></div>
                  </div>
                  
                  {/* Goals Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Pessoal */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`p-2 ${colors.iconBg} border ${colors.iconBorder} rounded-lg`}>
                          <User className={`w-5 h-5 ${colors.iconColor}`} />
                        </div>
                        <h4 className={`text-lg font-semibold ${colors.textColor}`}>
                          Pessoal
                        </h4>
                      </div>
                      <p className="text-neutral-200 leading-relaxed">
                        {item.data.pessoal}
                      </p>
                    </div>
                    
                    {/* Profissional */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`p-2 ${colors.iconBg} border ${colors.iconBorder} rounded-lg`}>
                          <Briefcase className={`w-5 h-5 ${colors.iconColor}`} />
                        </div>
                        <h4 className={`text-lg font-semibold ${colors.textColor}`}>
                          Profissional
                        </h4>
                      </div>
                      <p className="text-neutral-200 leading-relaxed">
                        {item.data.profissional}
                      </p>
                    </div>
                  </div>
                  
                  {/* Arrow to next item (except last) */}
                  {idx < timelineItems.length - 1 && (
                    <div className="flex justify-center mt-6">
                      <div className={`p-2 ${colors.iconBg} border ${colors.iconBorder} rounded-full`}>
                        <ArrowRight className={`w-5 h-5 ${colors.iconColor} rotate-90`} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
