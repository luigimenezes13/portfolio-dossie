# ⚡ Guia Rápido de Padronização - Cheat Sheet

> Referência rápida para consulta durante desenvolvimento

---

## 🎨 Cores - Nunca Use Azul!

### ✅ USAR:
```tsx
text-primary        // Vermelho principal #e50914
text-accent-orange  // Laranja #ea580c
text-accent-amber   // Âmbar #f59e0b
text-accent-rose    // Rosa #e11d48
text-neutral-400    // Cinza neutro
text-info           // Roxo #8b5cf6 (substitui azul)
```

### ❌ NUNCA USAR:
```tsx
text-blue-*
text-sky-*
text-cyan-*
bg-blue-*
border-blue-*
```

---

## 📦 Cards - 3 Tipos Principais

### 1. Card Base (Padrão)
```tsx
<div className="card-base">
  {/* Conteúdo */}
</div>
```
**Quando usar**: Conteúdo geral, cards padrão

### 2. Card Primary (Destaque)
```tsx
<div className="card-primary">
  {/* Conteúdo destacado */}
</div>
```
**Quando usar**: CTAs, informações importantes, conclusões

### 3. Card Compact (Compacto)
```tsx
<div className="card-compact">
  {/* Item de lista */}
</div>
```
**Quando usar**: Listas, itens menores, informações secundárias

---

## 🏷️ Badges - Sempre Use Classes

### Status/Criticidade
```tsx
<span className="badge-critical">CRÍTICO</span>  // Vermelho
<span className="badge-high">ALTO</span>         // Laranja
<span className="badge-medium">MÉDIO</span>      // Âmbar
<span className="badge-low">BAIXO</span>         // Verde
```

### Tecnologia
```tsx
<span className="badge-tech">
  <Icon className="w-3.5 h-3.5" />
  REACT
</span>
```

---

## 🎯 Ícones - 5 Tamanhos

```tsx
w-7 h-7   // Seção principal
w-6 h-6   // Card/header
w-5 h-5   // Badge/label
w-4 h-4   // Inline/pequeno
w-12 h-12 // Decorativo grande
```

**Cores comuns**:
```tsx
text-primary                                  // Destaque
text-neutral-400                              // Neutro
text-neutral-400 group-hover:text-neutral-200 // Com hover
```

---

## 📏 Spacing - 3 Escalas

### Gap (Espaço entre elementos)
```tsx
gap-4   // Small (1rem)   - Itens próximos
gap-6   // Medium (1.5rem) - Grupos relacionados
gap-12  // Large (3rem)   - Seções principais
```

### Padding (Espaço interno)
```tsx
p-4  // Small (1rem)   - Cards pequenos
p-6  // Medium (1.5rem) - Cards médios
p-8  // Large (2rem)   - Cards grandes
```

### Margin Bottom
```tsx
mb-6  // Subseções
mb-10 // Seções
mb-12 // Major sections
```

---

## 🎭 Hover Effects - 4 Escalas

```tsx
hover:scale-[1.05]  // Small - Badges, ícones < 100px
hover:scale-[1.02]  // Medium - Cards 100-300px
hover:scale-[1.01]  // Large - Seções > 300px
hover:scale-110     // Icon - Ícones interativos
```

**Sempre combine com transição**:
```tsx
hover:scale-[1.02] transition-all duration-300
```

---

## ⏱️ Transições - 4 Velocidades

```tsx
duration-200  // Fast - Interações rápidas (botões, badges)
duration-300  // Normal - Padrão (cards, hover)
duration-500  // Slow - Animações complexas
duration-1000 // Very Slow - Efeitos especiais
```

---

## 📝 Tipografia - Hierarquia

### Títulos
```tsx
// H1 - Nome do usuário, título principal
<h1 className="text-5xl md:text-6xl lg:text-7xl font-black">

// H2 - Título de seção
<h2 className="text-3xl md:text-4xl font-bold">

// H3 - Subtítulo
<h3 className="text-xl md:text-2xl font-bold">

// H4 - Label de card
<h4 className="text-lg font-semibold">
```

### Corpo
```tsx
text-base leading-relaxed text-neutral-200  // Padrão
text-lg leading-relaxed text-neutral-100    // Destacado
text-sm text-neutral-400                     // Secundário
text-xs text-neutral-500 uppercase tracking-wider // Label/metadata
```

### Valores Numéricos
```tsx
text-4xl md:text-5xl font-bold text-white   // Grande (métricas)
text-2xl font-bold text-white               // Médio
text-4xl font-bold text-primary             // Com destaque
```

---

## 🔢 Grid Layouts - Padrões Comuns

```tsx
// 2 colunas no tablet
<div className="grid md:grid-cols-2 gap-6">

// 3 colunas no desktop
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

// 1 → 2 → 3 responsivo
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

## 🎨 Border Radius - Consistente

```tsx
rounded-lg    // Small (0.5rem) - Badges, elementos pequenos
rounded-xl    // Medium (0.75rem) - Cards compactos
rounded-2xl   // Large (1rem) - Cards principais
rounded-3xl   // Huge (1.5rem) - Seções
rounded-full  // Full (9999px) - Badges circulares, avatares
```

---

## 🚀 Imports Úteis

### Importar constantes do Design System
```tsx
import {
  CARD_CLASSES,
  BADGE_CLASSES,
  ICON_SIZES,
  HOVER_EFFECTS,
  TRANSITIONS,
  cn,
  getCriticalityConfig,
} from '@/constants/design-system';
```

### Exemplo de uso
```tsx
// Simples
<div className={CARD_CLASSES.base}>

// Com classes adicionais
<div className={cn(CARD_CLASSES.base, 'shadow-2xl', myCustomClass)}>

// Badges dinâmicos
const config = getCriticalityConfig(item.criticidade);
<span className={config.badge}>{config.icon} {item.criticidade}</span>
```

---

## 📋 Checklist Rápido (Antes de Commit)

- [ ] Nenhum `blue`, `sky`, ou `cyan` no código
- [ ] Cards usam `.card-base`, `.card-primary` ou `.card-compact`
- [ ] Badges usam classes padronizadas
- [ ] Ícones têm tamanho consistente (w-X h-X)
- [ ] Spacing usa valores padronizados (gap-4/6/12, p-4/6/8)
- [ ] Hover effects são consistentes (1.05/1.02/1.01/1.1)
- [ ] Transições têm duração definida (200/300/500/1000)
- [ ] Tipografia segue hierarquia estabelecida
- [ ] Border radius é consistente (lg/xl/2xl/3xl/full)

---

## 🔥 Padrões Mais Usados - Copy & Paste

### Card com Ícone e Título
```tsx
<div className={CARD_CLASSES.base}>
  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
    <div className="p-2.5 bg-neutral-700/20 border border-neutral-600/40 rounded-lg">
      <Icon className="w-5 h-5 text-neutral-400" />
    </div>
    <h4 className="text-xl font-bold text-white">Título</h4>
  </div>
  <p className="text-neutral-200">Conteúdo...</p>
</div>
```

### Card com Badge
```tsx
<div className={CARD_CLASSES.base}>
  <div className="flex items-start justify-between gap-4 mb-4">
    <h3 className="text-xl font-bold text-white">Título</h3>
    <span className={BADGE_CLASSES.high}>ALTO</span>
  </div>
  <p className="text-neutral-200 leading-relaxed">Descrição...</p>
</div>
```

### Lista Compacta
```tsx
<div className="space-y-4">
  {items.map((item, idx) => (
    <div key={idx} className={CARD_CLASSES.compact}>
      <div className="flex items-start gap-4">
        <CheckCircle className="w-6 h-6 text-neutral-400 flex-shrink-0" />
        <span className="text-neutral-200">{item.text}</span>
      </div>
    </div>
  ))}
</div>
```

### Header de Seção
```tsx
<div className="section-header">
  <div className="icon-container">
    <Icon className="w-7 h-7 text-primary" />
  </div>
  <h2 className="section-title">Título da Seção</h2>
</div>
```

### Grid de 3 Colunas
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className={CARD_CLASSES.base}>Card 1</div>
  <div className={CARD_CLASSES.base}>Card 2</div>
  <div className={CARD_CLASSES.base}>Card 3</div>
</div>
```

---

## 🆘 Quando em Dúvida

1. **Cor**: Use neutros, se destacar use `text-primary`
2. **Card**: 99% dos casos use `.card-base`
3. **Spacing**: Use `gap-6` como padrão
4. **Hover**: Use `hover:scale-[1.02]` para cards
5. **Transição**: Use `duration-300` como padrão
6. **Ícone**: Use `w-6 h-6` como padrão

---

## 🔗 Links Rápidos

- [Plano Completo](./PADRONIZACAO.md)
- [Design System Detalhado](./DESIGN_SYSTEM.md)
- [Constantes no Código](./src/constants/design-system.ts)

---

**💡 Dica**: Salve este arquivo nos favoritos do editor para consulta rápida!

