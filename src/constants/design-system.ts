/**
 * Design System Constants
 * 
 * Constantes reutilizáveis para manter consistência visual
 * e facilitar manutenção do código
 */

/**
 * CLASSES DE CARD PADRONIZADAS
 * Usar em todos os componentes de card
 */
export const CARD_CLASSES = {
  // Card padrão - uso geral
  base: 'bg-gradient-to-br from-neutral-900/40 via-neutral-900/30 to-neutral-900/35 border-2 border-neutral-700/40 rounded-2xl p-6 hover:border-neutral-600/60 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm',
  
  // Card com destaque - CTAs, informações importantes
  primary: 'bg-gradient-to-br from-primary/10 to-tertiary/10 border-2 border-primary/40 rounded-2xl p-6 hover:border-primary/60 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-primary/15',
  
  // Card compacto - listas, itens menores
  compact: 'bg-gradient-to-r from-neutral-800/30 to-transparent border border-neutral-700/40 rounded-xl p-4 hover:border-neutral-600/60 hover:from-neutral-800/50 transition-all duration-300',
  
  // Card de seção completa
  section: 'bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-3xl p-10 md:p-12 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-700 backdrop-blur-sm',
} as const;

/**
 * CLASSES DE BADGE PADRONIZADAS
 * Usar para status, criticidade, tags
 */
export const BADGE_CLASSES = {
  // Base para todos os badges
  base: 'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-transform duration-200',
  
  // Badges de criticidade
  critical: 'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 text-white border-2 border-red-500',
  high: 'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-600 text-white border-2 border-orange-500',
  medium: 'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-600 text-white border-2 border-amber-500',
  low: 'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white border-2 border-emerald-500',
  
  // Badge de tecnologia
  tech: 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-700/20 border-2 border-neutral-600/50 text-neutral-300 text-sm font-bold uppercase hover:scale-110 hover:border-neutral-500 transition-all duration-200',
  
  // Badge de status de desenvolvimento
  completed: 'inline-flex items-center px-3 py-1 rounded-lg border text-xs font-semibold text-emerald-300 bg-emerald-500/15 border-emerald-500/25',
  inProgress: 'inline-flex items-center px-3 py-1 rounded-lg border text-xs font-semibold text-amber-300 bg-amber-500/15 border-amber-500/25',
  planned: 'inline-flex items-center px-3 py-1 rounded-lg border text-xs font-semibold text-purple-300 bg-purple-500/15 border-purple-500/25',
} as const;

/**
 * CLASSES DE ÍCONE PADRONIZADAS
 * Tamanhos consistentes para ícones
 */
export const ICON_SIZES = {
  section: 'w-7 h-7',      // Ícone de seção principal
  card: 'w-6 h-6',         // Ícone de card/header
  badge: 'w-5 h-5',        // Ícone de badge/label
  inline: 'w-4 h-4',       // Ícone pequeno inline
  decorative: 'w-12 h-12', // Ícone decorativo grande
  large: 'w-16 h-16',      // Ícone muito grande
} as const;

/**
 * CLASSES DE COR PARA ÍCONES
 */
export const ICON_COLORS = {
  primary: 'text-primary',
  neutral: 'text-neutral-400',
  neutralWithHover: 'text-neutral-400 group-hover:text-neutral-200',
  white: 'text-white',
  muted: 'text-neutral-500',
} as const;

/**
 * CLASSES DE HOVER EFFECT PADRONIZADAS
 * Escalas consistentes para diferentes tamanhos
 */
export const HOVER_EFFECTS = {
  small: 'hover:scale-[1.05] transition-transform duration-200',   // Badges, ícones < 100px
  medium: 'hover:scale-[1.02] transition-transform duration-300',  // Cards 100-300px
  large: 'hover:scale-[1.01] transition-transform duration-300',   // Seções > 300px
  icon: 'hover:scale-110 transition-transform duration-200',       // Ícones interativos
} as const;

/**
 * CLASSES DE TRANSIÇÃO PADRONIZADAS
 */
export const TRANSITIONS = {
  fast: 'transition-all duration-200',      // Interações rápidas
  normal: 'transition-all duration-300',    // Padrão
  slow: 'transition-all duration-500',      // Animações complexas
  verySlow: 'transition-all duration-1000', // Efeitos especiais
} as const;

/**
 * CLASSES DE SPACING PADRONIZADAS
 */
export const SPACING = {
  // Gaps
  gapSmall: 'gap-4',    // 1rem - elementos próximos
  gapMedium: 'gap-6',   // 1.5rem - grupos relacionados
  gapLarge: 'gap-12',   // 3rem - seções principais
  
  // Padding
  paddingSmall: 'p-4',  // 1rem - cards pequenos
  paddingMedium: 'p-6', // 1.5rem - cards médios
  paddingLarge: 'p-8',  // 2rem - cards grandes
  
  // Margin Bottom
  mbSubsection: 'mb-6',  // 1.5rem - entre subseções
  mbSection: 'mb-10',    // 2.5rem - entre seções
  mbMajor: 'mb-12',      // 3rem - entre major sections
} as const;

/**
 * CLASSES DE TIPOGRAFIA PADRONIZADAS
 */
export const TYPOGRAPHY = {
  // Títulos
  h1: 'text-5xl md:text-6xl lg:text-7xl font-black tracking-tight',
  h2: 'text-3xl md:text-4xl font-bold',
  h3: 'text-xl md:text-2xl font-bold',
  h4: 'text-lg font-semibold',
  
  // Corpo
  bodyLarge: 'text-lg leading-relaxed text-neutral-100',
  body: 'text-base leading-relaxed text-neutral-200',
  bodySmall: 'text-sm text-neutral-400',
  bodyTiny: 'text-xs text-neutral-500 uppercase tracking-wider',
  
  // Valores/Números
  valueHuge: 'text-4xl md:text-5xl font-bold text-white',
  valueLarge: 'text-2xl font-bold text-white',
  valueMedium: 'text-xl font-bold text-white',
  
  // Especiais
  gradient: 'bg-gradient-to-r from-primary via-tertiary to-primary bg-clip-text text-transparent',
} as const;

/**
 * CONFIGURAÇÕES DE GRID PADRONIZADAS
 */
export const GRID_LAYOUTS = {
  cols2: 'grid md:grid-cols-2 gap-6',
  cols3: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6',
  cols3Responsive: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
  cols2to3: 'grid grid-cols-2 md:grid-cols-3 gap-6',
} as const;

/**
 * MAPEAMENTO DE CORES DE CRITICIDADE
 * Para uso consistente em badges e indicadores
 */
export const CRITICALITY_CONFIG = {
  'Crítico': {
    badge: BADGE_CLASSES.critical,
    icon: '🔴',
    color: 'red',
  },
  'Alto': {
    badge: BADGE_CLASSES.high,
    icon: '🟠',
    color: 'orange',
  },
  'Médio': {
    badge: BADGE_CLASSES.medium,
    icon: '🟡',
    color: 'amber',
  },
  'Baixo': {
    badge: BADGE_CLASSES.low,
    icon: '🟢',
    color: 'emerald',
  },
} as const;

/**
 * MAPEAMENTO DE STATUS DE DESENVOLVIMENTO
 */
export const STATUS_CONFIG = {
  'Concluído': {
    badge: BADGE_CLASSES.completed,
    color: 'text-emerald-300',
    bgColor: 'bg-emerald-500',
    progress: 100,
  },
  'Em andamento': {
    badge: BADGE_CLASSES.inProgress,
    color: 'text-amber-300',
    bgColor: 'bg-amber-500',
    progress: 66,
  },
  'Planejado': {
    badge: BADGE_CLASSES.planned,
    color: 'text-purple-300',
    bgColor: 'bg-purple-500',
    progress: 33,
  },
} as const;

/**
 * CONFIGURAÇÃO UNIFORME PARA CARDS NEUTROS
 * Para uso em componentes que precisam de estilo neutro consistente
 */
export const NEUTRAL_CARD_CONFIG = {
  gradient: 'from-neutral-900/40 via-neutral-900/30 to-neutral-900/35',
  borderColor: 'border-neutral-700/40',
  borderColorHover: 'hover:border-neutral-600/50',
  iconBg: 'bg-neutral-700/20',
  iconBorder: 'border-neutral-600/40',
  iconColor: 'text-neutral-400',
  textColor: 'text-neutral-300',
  glowColor: 'hover:shadow-neutral-700/20',
} as const;

/**
 * CLASSES DE ANIMAÇÃO PADRONIZADAS
 */
export const ANIMATIONS = {
  fadeIn: 'animate-fade-in',
  fadeInUp: 'animate-fade-in-up',
  fadeInDown: 'animate-fade-in-down',
  fadeInLeft: 'animate-fade-in-left',
  fadeInRight: 'animate-fade-in-right',
  scaleIn: 'animate-scale-in',
  pulseGlow: 'animate-pulse-glow',
  pulseBadge: 'animate-pulse-badge',
} as const;

/**
 * CLASSES DE BORDER RADIUS PADRONIZADAS
 */
export const BORDER_RADIUS = {
  small: 'rounded-lg',   // 0.5rem
  medium: 'rounded-xl',  // 0.75rem
  large: 'rounded-2xl',  // 1rem
  huge: 'rounded-3xl',   // 1.5rem
  full: 'rounded-full',  // 9999px
} as const;

/**
 * HELPER FUNCTION: Combinar classes
 * Uso: cn(CARD_CLASSES.base, 'shadow-2xl', customClass)
 */
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * HELPER FUNCTION: Obter configuração de criticidade
 */
export const getCriticalityConfig = (level?: string) => {
  if (!level) return CRITICALITY_CONFIG['Médio'];
  return CRITICALITY_CONFIG[level as keyof typeof CRITICALITY_CONFIG] || CRITICALITY_CONFIG['Médio'];
};

/**
 * HELPER FUNCTION: Obter configuração de status
 */
export const getStatusConfig = (status?: string) => {
  if (!status) return STATUS_CONFIG['Planejado'];
  return STATUS_CONFIG[status as keyof typeof STATUS_CONFIG] || STATUS_CONFIG['Planejado'];
};

/**
 * EXEMPLO DE USO:
 * 
 * import { CARD_CLASSES, ICON_SIZES, cn } from '@/constants/design-system';
 * 
 * <div className={cn(CARD_CLASSES.base, 'shadow-xl')}>
 *   <Icon className={ICON_SIZES.card} />
 * </div>
 */

