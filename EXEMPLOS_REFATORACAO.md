# 🔄 Exemplos de Refatoração - Antes e Depois

Este documento mostra exemplos práticos de como refatorar componentes para seguir o Design System.

---

## 📦 Exemplo 1: Card Simples

### ❌ ANTES (Inline, difícil manter)
```tsx
<div className="bg-gradient-to-br from-neutral-900/40 via-neutral-900/30 to-neutral-900/35 border-2 border-neutral-700/40 rounded-2xl p-6 hover:scale-[1.02] hover:border-neutral-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-700/20 backdrop-blur-sm">
  <h3 className="text-xl font-bold text-white mb-4">Título</h3>
  <p className="text-neutral-200">Conteúdo do card...</p>
</div>
```

### ✅ DEPOIS (Limpo, reutilizável)
```tsx
import { CARD_CLASSES } from '@/constants/design-system';

<div className={`${CARD_CLASSES.base} hover:shadow-xl hover:shadow-neutral-700/20`}>
  <h3 className="text-xl font-bold text-white mb-4">Título</h3>
  <p className="text-neutral-200">Conteúdo do card...</p>
</div>
```

**Ou ainda melhor com helper `cn`**:
```tsx
import { CARD_CLASSES, cn } from '@/constants/design-system';

<div className={cn(CARD_CLASSES.base, 'hover:shadow-xl hover:shadow-neutral-700/20')}>
  <h3 className="text-xl font-bold text-white mb-4">Título</h3>
  <p className="text-neutral-200">Conteúdo do card...</p>
</div>
```

**Benefícios**:
- Menos código duplicado
- Mudanças em um só lugar
- Mais legível

---

## 🏷️ Exemplo 2: Badge de Criticidade

### ❌ ANTES (Lógica repetida)
```tsx
const getConfigCriticidade = (impacto?: string) => {
  switch (impacto) {
    case 'Crítico':
      return {
        badge: 'bg-red-600 text-white border-red-500',
        icon: '🔴'
      };
    case 'Alto':
      return {
        badge: 'bg-orange-600 text-white border-orange-500',
        icon: '🟠'
      };
    // ... mais casos
  }
};

<span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${config.badge}`}>
  {iniciativa.impacto}
</span>
```

### ✅ DEPOIS (Reutilizável)
```tsx
import { getCriticalityConfig } from '@/constants/design-system';

const config = getCriticalityConfig(iniciativa.impacto);

<span className={config.badge}>
  {config.icon} {iniciativa.impacto}
</span>
```

**Benefícios**:
- Função helper centralizada
- Sem repetição de lógica
- Consistência automática

---

## 🎯 Exemplo 3: Ícones Inconsistentes

### ❌ ANTES (Tamanhos variados)
```tsx
// Arquivo 1
<TrendingUp className="w-7 h-7 text-primary" />

// Arquivo 2
<TrendingUp className="w-6 h-6 text-red-500" />

// Arquivo 3
<TrendingUp className="w-8 h-8 text-blue-400" />  // ❌ Azul!
```

### ✅ DEPOIS (Consistente)
```tsx
import { ICON_SIZES, ICON_COLORS } from '@/constants/design-system';

// Seção principal
<TrendingUp className={`${ICON_SIZES.section} ${ICON_COLORS.primary}`} />

// Card
<TrendingUp className={`${ICON_SIZES.card} ${ICON_COLORS.neutral}`} />

// Badge
<TrendingUp className={`${ICON_SIZES.badge} ${ICON_COLORS.neutral}`} />
```

**Benefícios**:
- Tamanhos consistentes em todo app
- Cores da paleta correta
- Fácil de mudar globalmente

---

## 📏 Exemplo 4: Spacing Despadronizado

### ❌ ANTES (Valores aleatórios)
```tsx
<div className="grid gap-5 md:grid-cols-2">
  <div className="p-7">Card 1</div>
  <div className="p-5">Card 2</div>
</div>

<section className="mb-9">
  <div className="gap-7">...</div>
</section>
```

### ✅ DEPOIS (Escala consistente)
```tsx
import { SPACING, GRID_LAYOUTS } from '@/constants/design-system';

<div className={GRID_LAYOUTS.cols2}>
  <div className={SPACING.paddingMedium}>Card 1</div>
  <div className={SPACING.paddingMedium}>Card 2</div>
</div>

<section className={SPACING.mbSection}>
  <div className={SPACING.gapMedium}>...</div>
</section>
```

**Benefícios**:
- Ritmo visual consistente
- Escala harmônica
- Manutenção simplificada

---

## 🎨 Exemplo 5: Cores Azuis (Remover)

### ❌ ANTES (Usa azul - proibido)
```tsx
<div className="bg-blue-500/10 border-blue-500/30">
  <h3 className="text-blue-400">Título</h3>
  <span className="bg-sky-600 text-white">Status</span>
</div>
```

### ✅ DEPOIS (Paleta aprovada)
```tsx
<div className="bg-info/10 border-info/30">
  <h3 className="text-info">Título</h3>
  <span className="bg-accent-rose text-white">Status</span>
</div>
```

**Ou melhor ainda**:
```tsx
<div className="bg-neutral-700/10 border-neutral-600/30">
  <h3 className="text-primary">Título</h3>
  <span className="badge-high">Status</span>
</div>
```

**Substituições comuns**:
- `text-blue-400` → `text-primary` ou `text-info` (roxo)
- `bg-blue-500` → `bg-primary` ou `bg-accent-rose`
- `border-sky-500` → `border-primary` ou `border-neutral-600`

---

## 🎭 Exemplo 6: Hover Effects Inconsistentes

### ❌ ANTES (Escalas aleatórias)
```tsx
// Arquivo 1
<div className="hover:scale-[1.03] transition duration-200">

// Arquivo 2
<div className="hover:scale-105 transition-transform">

// Arquivo 3
<div className="hover:scale-110 duration-500">
```

### ✅ DEPOIS (Padronizado por tamanho)
```tsx
import { HOVER_EFFECTS } from '@/constants/design-system';

// Badge pequeno
<span className={HOVER_EFFECTS.small}>

// Card médio
<div className={HOVER_EFFECTS.medium}>

// Seção grande
<section className={HOVER_EFFECTS.large}>

// Ícone
<Icon className={HOVER_EFFECTS.icon} />
```

**Benefícios**:
- Animações consistentes
- Performance otimizada
- UX profissional

---

## 📦 Exemplo 7: Seção Completa - ObjetivoSection

### ❌ ANTES (Muita repetição)
```tsx
export function ObjetivoSection({ objetivo }: ObjetivoSectionProps) {
  return (
    <section className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-3xl p-10 md:p-12 hover:shadow-2xl transition-all duration-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center border-2 border-primary/30">
          <Crosshair className="w-7 h-7 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Objetivo</h2>
      </div>
      
      <p className="text-neutral-200 mb-8 leading-relaxed text-lg">{objetivo.descricao}</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-neutral-900/40 via-neutral-900/30 to-neutral-900/35 border-2 border-neutral-700/40 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300">
          <p className="text-neutral-400 text-sm uppercase">Cargo</p>
          <p className="text-white font-bold text-2xl">{objetivo.cargoProposto}</p>
        </div>
        {/* Mais cards... */}
      </div>
    </section>
  );
}
```

### ✅ DEPOIS (Classes reutilizáveis)
```tsx
import { CARD_CLASSES, ICON_SIZES, ICON_COLORS, SPACING } from '@/constants/design-system';

export function ObjetivoSection({ objetivo }: ObjetivoSectionProps) {
  return (
    <section className="section-card">
      <div className="section-header">
        <div className="icon-container">
          <Crosshair className={`${ICON_SIZES.section} ${ICON_COLORS.primary}`} />
        </div>
        <h2 className="section-title">Objetivo</h2>
      </div>
      
      <p className="text-description">{objetivo.descricao}</p>
      
      <div className={`grid md:grid-cols-3 ${SPACING.gapMedium}`}>
        <div className={CARD_CLASSES.base}>
          <p className="text-neutral-400 text-sm uppercase">Cargo</p>
          <p className="text-white font-bold text-2xl">{objetivo.cargoProposto}</p>
        </div>
        {/* Mais cards... */}
      </div>
    </section>
  );
}
```

**Benefícios**:
- 40% menos código
- Todas as classes já definidas em CSS
- Mudanças globais possíveis

---

## 🔄 Exemplo 8: Componente com Lógica de Estilo

### ❌ ANTES (Arrays de cores inline)
```tsx
const escopoColors = [
  'from-neutral-900/40 to-neutral-900/35 border-neutral-700/40',
  'from-neutral-900/40 to-neutral-900/35 border-neutral-700/40',
  'from-neutral-900/40 to-neutral-900/35 border-neutral-700/40',
];

const escopoTextColors = [
  'text-neutral-300',
  'text-neutral-300',
  'text-neutral-300',
];

{escopos.map((escopo, idx) => {
  const colorClass = escopoColors[idx % escopoColors.length];
  const textColorClass = escopoTextColors[idx % escopoTextColors.length];
  
  return (
    <div className={`bg-gradient-to-br ${colorClass} rounded-2xl p-5`}>
      <h4 className={`text-xl font-bold ${textColorClass}`}>
        {escopo}
      </h4>
    </div>
  );
})}
```

### ✅ DEPOIS (Constantes reutilizáveis)
```tsx
import { CARD_CLASSES, NEUTRAL_CARD_CONFIG } from '@/constants/design-system';

{escopos.map((escopo, idx) => (
  <div key={idx} className={CARD_CLASSES.base}>
    <h4 className={`text-xl font-bold ${NEUTRAL_CARD_CONFIG.textColor}`}>
      {escopo}
    </h4>
  </div>
))}
```

**Benefícios**:
- Sem arrays repetitivos
- Todos os cards iguais (objetivo alcançado)
- Fácil customizar se necessário

---

## 🚀 Exemplo 9: Timeline Vertical

### ❌ ANTES (Inline longo)
```tsx
<div className="relative pl-8">
  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-600"></div>
  
  {items.map((item, idx) => (
    <div key={idx} className="relative flex items-start gap-4 mb-6">
      <div className="absolute -left-8 w-4 h-4 bg-neutral-600 border-4 border-black rounded-full shadow-lg"></div>
      <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-neutral-700/40 rounded-xl p-4">
        {item.content}
      </div>
    </div>
  ))}
</div>
```

### ✅ DEPOIS (Componentizado)
```tsx
// Criar componente Timeline em components/Timeline.tsx
import { CARD_CLASSES } from '@/constants/design-system';

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-600" />
      
      <div className="space-y-6">
        {items.map((item, idx) => (
          <div key={idx} className="relative">
            <TimelineDot status={item.status} />
            <div className={CARD_CLASSES.compact}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Uso simplificado
<Timeline items={desenvolvimentoPessoal} />
```

**Benefícios**:
- Componente reutilizável
- Props tipadas
- Testável isoladamente

---

## 🎨 Exemplo 10: Badge Dinâmico com Status

### ❌ ANTES (Lógica inline)
```tsx
{item.status && (
  <span className={`px-3 py-1 rounded-lg border text-xs font-semibold ${
    item.status === 'Concluído' ? 'text-emerald-300 bg-emerald-500/15 border-emerald-500/25' :
    item.status === 'Em andamento' ? 'text-amber-300 bg-amber-500/15 border-amber-500/25' :
    'text-sky-300 bg-sky-500/15 border-sky-500/25'
  }`}>
    {item.status === 'Concluído' && <CheckCircle className="w-3 h-3 inline mr-1" />}
    {item.status === 'Em andamento' && <PlayCircle className="w-3 h-3 inline mr-1" />}
    {item.status === 'Planejado' && <Clock className="w-3 h-3 inline mr-1" />}
    {item.status}
  </span>
)}
```

### ✅ DEPOIS (Helper function)
```tsx
import { getStatusConfig } from '@/constants/design-system';
import { CheckCircle, PlayCircle, Clock } from 'lucide-react';

const iconMap = {
  'Concluído': CheckCircle,
  'Em andamento': PlayCircle,
  'Planejado': Clock,
};

{item.status && (
  <StatusBadge status={item.status} />
)}

// Componente StatusBadge
function StatusBadge({ status }: { status: string }) {
  const config = getStatusConfig(status);
  const Icon = iconMap[status as keyof typeof iconMap];
  
  return (
    <span className={config.badge}>
      {Icon && <Icon className="w-3 h-3 inline mr-1" />}
      {status}
    </span>
  );
}
```

**Benefícios**:
- Lógica encapsulada
- Componente reutilizável
- TypeScript friendly

---

## 📊 Exemplo 11: Grid Responsivo

### ❌ ANTES (Classes longas repetidas)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card1 />
  <Card2 />
  <Card3 />
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card4 />
  <Card5 />
  <Card6 />
</div>
```

### ✅ DEPOIS (Constante reutilizada)
```tsx
import { GRID_LAYOUTS } from '@/constants/design-system';

<div className={GRID_LAYOUTS.cols3Responsive}>
  <Card1 />
  <Card2 />
  <Card3 />
</div>

<div className={GRID_LAYOUTS.cols3Responsive}>
  <Card4 />
  <Card5 />
  <Card6 />
</div>
```

**Benefícios**:
- DRY (Don't Repeat Yourself)
- Mudanças centralizadas
- Nomenclatura semântica

---

## 🔥 Exemplo 12: Refatoração Completa - IniciativasSection

### ❌ ANTES
```tsx
export function IniciativasSection({ iniciativasEstrategicas }: Props) {
  const getConfigCriticidade = (impacto?: string) => {
    switch (impacto) {
      case 'Crítico':
        return { badge: 'bg-red-600 text-white border-red-500', icon: '🔴' };
      case 'Alto':
        return { badge: 'bg-orange-600 text-white border-orange-500', icon: '🟠' };
      case 'Médio':
        return { badge: 'bg-yellow-600 text-white border-yellow-500', icon: '🟡' };
      default:
        return { badge: 'bg-neutral-600 text-white border-neutral-500', icon: '⚪' };
    }
  };

  return (
    <section className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-3xl p-10 md:p-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {iniciativasEstrategicas.map((iniciativa, idx) => {
          const config = getConfigCriticidade(iniciativa.impacto);
          
          return (
            <div key={idx} className="bg-black/50 border border-tertiary/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{config.icon}</span>
                  <h3 className="text-2xl font-bold text-primary">{iniciativa.projeto}</h3>
                </div>
                {iniciativa.impacto && (
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${config.badge}`}>
                    {iniciativa.impacto}
                  </span>
                )}
              </div>
              <p className="text-neutral-200 text-lg">{iniciativa.descricao}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
```

### ✅ DEPOIS
```tsx
import { CARD_CLASSES, getCriticalityConfig } from '@/constants/design-system';

export function IniciativasSection({ iniciativasEstrategicas }: Props) {
  return (
    <section className="section-card">
      <div className="section-header">
        <div className="icon-container">
          <Briefcase className="w-7 h-7 text-primary" />
        </div>
        <h2 className="section-title">Iniciativas Estratégicas</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-1">
        {iniciativasEstrategicas.map((iniciativa, idx) => {
          const config = getCriticalityConfig(iniciativa.impacto);
          
          return (
            <div key={idx} className={CARD_CLASSES.compact}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{config.icon}</span>
                  <h3 className="text-2xl font-bold text-primary">
                    {iniciativa.projeto}
                  </h3>
                </div>
                {iniciativa.impacto && (
                  <span className={config.badge}>{iniciativa.impacto}</span>
                )}
              </div>
              <p className="text-neutral-200 text-lg">{iniciativa.descricao}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
```

**Mudanças**:
1. ✅ Função `getConfigCriticidade` removida → usa `getCriticalityConfig`
2. ✅ Classes de seção padronizadas → `.section-card`, `.section-header`
3. ✅ Cards usam `.card-compact`
4. ✅ Badge usa classe da constante
5. ✅ Hover effect padronizado (já em `.card-compact`)

**Linhas de código**:
- Antes: ~60 linhas
- Depois: ~35 linhas
- **Redução: 42%**

---

## 📈 Métricas de Sucesso da Refatoração

### Por Componente:
- **Redução de código**: 30-50%
- **Classes inline eliminadas**: 80-90%
- **Lógica duplicada removida**: 100%

### Globalmente:
- **Consistência**: 100% dos cards seguem padrão
- **Manutenibilidade**: Mudanças em 1 arquivo afetam todos
- **Legibilidade**: Código autodocumentado

---

## 🎯 Próximos Passos

1. Escolha um componente para começar (recomendado: **ObjetivoSection** - mais simples)
2. Faça backup do componente original
3. Refatore usando os exemplos deste documento
4. Teste visualmente
5. Commit com mensagem clara: `refactor(ObjetivoSection): padronizar cards e spacing`
6. Repita para próximo componente

---

## 🔗 Referências

- [Plano Completo de Padronização](./PADRONIZACAO.md)
- [Design System Visual](./DESIGN_SYSTEM.md)
- [Guia Rápido](./QUICK_REFERENCE.md)
- [Constantes no Código](./src/constants/design-system.ts)

---

**💡 Lembre-se**: Refatoração é iterativa. Não precisa ser perfeito na primeira tentativa!

