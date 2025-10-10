# 🎨 Design System - Guia Visual de Referência

## 📖 Visão Geral

Este documento serve como referência visual rápida para o Design System do projeto. Use-o como guia ao criar ou modificar componentes.

---

## 🎨 Paleta de Cores

### Principais

#### Vermelho (Primary)
```
█ #e50914  primary          - Destaque principal, CTAs, links
█ #f43f5e  primary-light    - Hover states, highlights
█ #be123c  primary-dark     - Textos importantes
```

#### Complementares
```
█ #662222  secondary        - Backgrounds escuros acentuados
█ #842A3B  tertiary         - Gradientes e variações
```

#### Acentos Quentes
```
█ #ea580c  accent-orange    - Alertas de atenção
█ #f59e0b  accent-amber     - Destaques dourados
█ #e11d48  accent-rose      - Variação rosa vibrante
```

### Neutros

#### Backgrounds
```
█ #000000  Black            - Fundo principal
█ #171717  neutral-900      - Cards e seções
█ #262626  neutral-800      - Cards secundários
█ #404040  neutral-700      - Elementos elevados
```

#### Textos
```
█ #ffffff  White            - Texto principal
█ #e5e5e5  neutral-200      - Texto secundário
█ #d4d4d4  neutral-300      - Texto terciário
█ #a3a3a3  neutral-400      - Texto desativado
```

### Estados

```
█ #10b981  success (emerald-500)   - Sucesso, métricas positivas
█ #f59e0b  warning (amber-500)     - Avisos, atenção
█ #ef4444  error (red-500)         - Erros, métricas negativas
█ #8b5cf6  info (purple-500)       - Informação (substitui azul)
```

---

## 📦 Componentes

### Cards

#### Card Base (Padrão)
**Uso**: Cards de conteúdo geral, seções padrão

```tsx
<div className="card-base">
  <h3 className="text-xl font-bold text-white mb-4">Título do Card</h3>
  <p className="text-neutral-200">Conteúdo do card...</p>
</div>
```

**Visual**:
- Background: Gradiente neutro (neutral-900/40 → neutral-900/35)
- Border: 2px neutral-700/40
- Radius: rounded-2xl (1.5rem)
- Padding: p-6 (1.5rem)
- Hover: scale(1.02) + border-neutral-600/60

**Exemplo de uso**: Cards em ObjetivoSection, TrajetoriaSection

---

#### Card Primary (Destaque)
**Uso**: Cards que precisam chamar atenção, CTAs principais

```tsx
<div className="card-primary">
  <h3 className="text-xl font-bold text-primary mb-4">Destaque Importante</h3>
  <p className="text-neutral-200">Conteúdo destacado...</p>
</div>
```

**Visual**:
- Background: Gradiente vermelho (primary/10 → tertiary/10)
- Border: 2px primary/40
- Radius: rounded-2xl (1.5rem)
- Padding: p-6 (1.5rem)
- Hover: scale(1.02) + border-primary/60 + shadow-primary/15

**Exemplo de uso**: Card de proposta em ValorizacaoSection, ConclusaoSection

---

#### Card Compact (Compacto)
**Uso**: Listas, itens menores, informações secundárias

```tsx
<div className="card-compact">
  <div className="flex items-center gap-3">
    <Icon className="w-5 h-5 text-neutral-400" />
    <span className="text-neutral-200">Item compacto</span>
  </div>
</div>
```

**Visual**:
- Background: Gradiente horizontal (neutral-800/30 → transparent)
- Border: 1px neutral-700/40
- Radius: rounded-xl (0.75rem)
- Padding: p-4 (1rem)
- Hover: border-neutral-600/60 + from-neutral-800/50

**Exemplo de uso**: Benefícios em PotencialSection, lista de destaques

---

### Badges e Tags

#### Badge de Status (Criticidade)

**Critical**
```tsx
<span className="badge-critical">CRÍTICO</span>
```
- Background: bg-red-600
- Border: border-red-500
- Text: text-white

**High**
```tsx
<span className="badge-high">ALTO</span>
```
- Background: bg-orange-600
- Border: border-orange-500
- Text: text-white

**Medium**
```tsx
<span className="badge-medium">MÉDIO</span>
```
- Background: bg-amber-600
- Border: border-amber-500
- Text: text-white

**Low**
```tsx
<span className="badge-low">BAIXO</span>
```
- Background: bg-emerald-600
- Border: border-emerald-500
- Text: text-white

**Exemplo de uso**: IniciativasSection para mostrar impacto

---

#### Badge de Tecnologia

```tsx
<span className="badge-tech">
  <IconComponent className="w-3.5 h-3.5" />
  REACT
</span>
```

**Visual**:
- Background: neutral-700/20
- Border: 2px neutral-600/50
- Text: neutral-300
- Size: text-sm, px-3 py-1.5
- Hover: scale(1.1) + border-neutral-500

**Exemplo de uso**: TrajetoriaSection para keywords técnicas

---

### Ícones

#### Tamanhos Padronizados

```tsx
{/* Ícone de seção principal */}
<TrendingUp className="w-7 h-7 text-primary" />

{/* Ícone de card/header */}
<Briefcase className="w-6 h-6 text-neutral-400" />

{/* Ícone de badge/label */}
<Calendar className="w-5 h-5 text-neutral-400" />

{/* Ícone inline/pequeno */}
<Clock className="w-4 h-4 text-neutral-400" />

{/* Ícone decorativo */}
<Sparkles className="w-12 h-12 text-primary opacity-10" />
```

**Cores de ícone**:
- `text-primary`: Ícones de destaque, seções principais
- `text-neutral-400`: Ícones neutros, secundários
- `text-neutral-400 group-hover:text-neutral-200`: Com hover interativo

---

### Botões e Interações

#### Botão Primary

```tsx
<button className="btn-primary">
  Ação Principal
</button>
```

**Visual**:
- Background: bg-primary
- Hover: bg-primary/80
- Text: text-white font-semibold
- Padding: py-2 px-4
- Radius: rounded-lg

---

#### Link Primary

```tsx
<a href="#" className="link-primary">
  Link de Destaque
</a>
```

**Visual**:
- Text: text-primary
- Hover: text-tertiary
- Font: font-semibold

---

## 📏 Sistema de Espaçamento

### Gaps (Espaço entre elementos)

#### Small (Elementos próximos)
```tsx
<div className="gap-4"> {/* 1rem */}
  {/* Itens relacionados, cards pequenos */}
</div>
```

#### Medium (Seções relacionadas)
```tsx
<div className="gap-6"> {/* 1.5rem */}
  {/* Grupos de conteúdo, cards médios */}
</div>
```

#### Large (Seções principais)
```tsx
<div className="gap-12"> {/* 3rem */}
  {/* Entre seções principais da página */}
</div>
```

### Padding (Espaço interno)

#### Cards Pequenos
```tsx
<div className="p-4"> {/* 1rem */}
```

#### Cards Médios
```tsx
<div className="p-6"> {/* 1.5rem */}
```

#### Cards Grandes
```tsx
<div className="p-8"> {/* 2rem */}
```

### Margin Bottom (Separação vertical)

```tsx
{/* Entre subseções */}
<div className="mb-6">

{/* Entre seções principais */}
<div className="mb-10">

{/* Entre major sections */}
<div className="mb-12">
```

---

## 🎭 Animações e Transições

### Hover Effects

#### Small (Badges, ícones pequenos)
```tsx
<span className="hover-small"> {/* scale(1.05) */}
  Badge
</span>
```

#### Medium (Cards principais)
```tsx
<div className="hover-medium"> {/* scale(1.02) */}
  Card
</div>
```

#### Large (Seções grandes)
```tsx
<section className="hover-large"> {/* scale(1.01) */}
  Seção Grande
</section>
```

#### Icon (Ícones interativos)
```tsx
<Icon className="hover-icon" /> {/* scale(1.1) */}
```

### Transições

```tsx
{/* Rápida - Interações simples */}
<div className="transition-all duration-200">

{/* Média - Cards e elementos principais */}
<div className="transition-all duration-300">

{/* Lenta - Animações complexas */}
<div className="transition-all duration-500">

{/* Muito lenta - Efeitos especiais */}
<div className="transition-all duration-1000">
```

### Animações de Entrada

```tsx
{/* Fade in com slide up */}
<section className="animate-fade-in-up">

{/* Fade in simples */}
<div className="animate-fade-in">

{/* Scale in */}
<div className="animate-scale-in">
```

---

## 📝 Tipografia

### Hierarquia de Títulos

#### H1 - Título Principal (Nome do usuário)
```tsx
<h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
  Título Principal
</h1>
```

#### H2 - Título de Seção
```tsx
<h2 className="text-3xl md:text-4xl font-bold">
  Título de Seção
</h2>
```

#### H3 - Subtítulo
```tsx
<h3 className="text-xl md:text-2xl font-bold">
  Subtítulo
</h3>
```

#### H4 - Label de Card
```tsx
<h4 className="text-lg font-semibold">
  Label do Card
</h4>
```

### Corpo de Texto

#### Texto Principal
```tsx
<p className="text-base leading-relaxed text-neutral-200">
  Parágrafo principal com boa legibilidade.
</p>
```

#### Texto Grande (Destacado)
```tsx
<p className="text-lg leading-relaxed text-neutral-100">
  Texto um pouco maior para destaque.
</p>
```

#### Texto Secundário
```tsx
<p className="text-sm text-neutral-400">
  Informação secundária ou metadata.
</p>
```

#### Texto Muito Pequeno (Labels)
```tsx
<span className="text-xs text-neutral-500 uppercase tracking-wider">
  LABEL
</span>
```

### Valores Numéricos

#### Grande (Destaque)
```tsx
<span className="text-4xl md:text-5xl font-bold text-white">
  R$ 10.000
</span>
```

#### Médio
```tsx
<span className="text-2xl font-bold text-white">
  15 projetos
</span>
```

#### Com cor de destaque
```tsx
<span className="text-4xl font-bold text-primary">
  95%
</span>
```

---

## 🧩 Padrões de Composição

### Card com Ícone e Título

```tsx
<div className="card-base">
  {/* Header */}
  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
    <div className="p-2.5 bg-neutral-700/20 border border-neutral-600/40 rounded-lg">
      <Icon className="w-5 h-5 text-neutral-400" />
    </div>
    <h4 className="text-xl font-bold text-white">Título</h4>
  </div>
  
  {/* Conteúdo */}
  <p className="text-neutral-200">Conteúdo do card...</p>
</div>
```

---

### Card com Badge de Status

```tsx
<div className="card-base">
  <div className="flex items-start justify-between gap-4 mb-4">
    <h3 className="text-xl font-bold text-white">Título</h3>
    <span className="badge-high">ALTO</span>
  </div>
  
  <p className="text-neutral-200 leading-relaxed">Descrição...</p>
</div>
```

---

### Lista com Ícones

```tsx
<div className="space-y-4">
  {items.map((item, idx) => (
    <div key={idx} className="card-compact">
      <div className="flex items-start gap-4">
        <CheckCircle className="w-6 h-6 text-neutral-400 flex-shrink-0" />
        <span className="text-neutral-200">{item.text}</span>
      </div>
    </div>
  ))}
</div>
```

---

### Grid de Cards

```tsx
{/* 2 colunas no tablet, 3 no desktop */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="card-base">Card 1</div>
  <div className="card-base">Card 2</div>
  <div className="card-base">Card 3</div>
</div>

{/* 1 coluna no mobile, 2 no tablet */}
<div className="grid md:grid-cols-2 gap-6">
  <div className="card-base">Card 1</div>
  <div className="card-base">Card 2</div>
</div>
```

---

### Timeline Vertical

```tsx
<div className="relative pl-8">
  {/* Linha vertical */}
  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-600"></div>
  
  <div className="space-y-6">
    {items.map((item, idx) => (
      <div key={idx} className="relative">
        {/* Dot */}
        <div className="absolute -left-8 w-4 h-4 bg-neutral-600 border-4 border-black rounded-full"></div>
        
        {/* Conteúdo */}
        <div className="card-base">
          {item.content}
        </div>
      </div>
    ))}
  </div>
</div>
```

---

## 🎯 Exemplos de Uso por Contexto

### Seção de Perfil (Header)

```tsx
<header className="mb-16">
  <div className="flex flex-col md:flex-row items-center gap-10">
    {/* Foto de perfil */}
    <div className="relative flex-shrink-0">
      <div className="profile-image-container">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="profile-badge">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
    
    {/* Informações */}
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary via-tertiary to-primary bg-clip-text text-transparent mb-6">
        Nome do Usuário
      </h1>
      <p className="text-2xl md:text-3xl text-neutral-200 mb-6">
        Cargo Atual
      </p>
      <div className="flex items-center gap-6 text-neutral-400">
        <span className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          25 anos
        </span>
        <span>•</span>
        <span>Início: Jan 2020</span>
      </div>
    </div>
  </div>
</header>
```

---

### Seção com Cards em Grid

```tsx
<section className="section-card">
  {/* Header */}
  <div className="section-header">
    <div className="icon-container">
      <TrendingUp className="w-7 h-7 text-primary" />
    </div>
    <h2 className="section-title">Título da Seção</h2>
  </div>
  
  {/* Descrição */}
  <p className="text-description">
    Descrição da seção com contexto...
  </p>
  
  {/* Grid de cards */}
  <div className="grid md:grid-cols-3 gap-6">
    <div className="card-base">
      <h3 className="text-xl font-bold text-white mb-2">Card 1</h3>
      <p className="text-neutral-200">Conteúdo...</p>
    </div>
    <div className="card-base">
      <h3 className="text-xl font-bold text-white mb-2">Card 2</h3>
      <p className="text-neutral-200">Conteúdo...</p>
    </div>
    <div className="card-base">
      <h3 className="text-xl font-bold text-white mb-2">Card 3</h3>
      <p className="text-neutral-200">Conteúdo...</p>
    </div>
  </div>
</section>
```

---

### Lista de Benefícios/Destaques

```tsx
<div className="mb-10">
  <h3 className="text-subtitle mb-6">
    <Award className="w-5 h-5 text-neutral-400" />
    Principais Destaques
  </h3>
  
  <div className="grid gap-4 md:grid-cols-2">
    {items.map((item, idx) => (
      <div key={idx} className="card-compact group">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-neutral-700/20 border border-neutral-600/40 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-neutral-400" />
          </div>
          <p className="flex-1 text-neutral-200 leading-relaxed">
            {item.text}
          </p>
          <div className="flex-shrink-0 w-6 h-6 bg-neutral-700/30 rounded-full flex items-center justify-center">
            <span className="text-neutral-300 text-xs font-bold">
              {idx + 1}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
```

---

### Métricas com Destaque

```tsx
<div className="grid md:grid-cols-3 gap-6">
  <div className="card-base">
    <div className="flex items-center justify-between mb-4">
      <Crosshair className="w-8 h-8 text-neutral-300" />
      <span className="badge-tech">MÉTRICA</span>
    </div>
    <p className="text-sm text-neutral-400 mb-3 uppercase tracking-wide">
      Label da Métrica
    </p>
    <p className="text-white font-bold text-4xl">
      120
    </p>
  </div>
</div>
```

---

## ❓ FAQ - Perguntas Frequentes

### Quando usar `.card-base` vs `.card-primary`?

- **`.card-base`**: Conteúdo padrão, informações gerais
- **`.card-primary`**: Quando precisa chamar atenção, destaque especial (ex: proposta de valorização, conclusão)

### Quando usar `gap-4` vs `gap-6` vs `gap-12`?

- **`gap-4`**: Elementos muito próximos (itens de lista, badges)
- **`gap-6`**: Grupos relacionados (cards, seções internas)
- **`gap-12`**: Seções principais da página

### Posso usar azul em algum contexto?

**Não.** A paleta foi desenhada sem azul. Alternativas:
- Para informação: use `text-info` (roxo #8b5cf6)
- Para destaque frio: use `text-accent-rose`
- Para links: use `text-primary` (vermelho)

### Como escolher o tamanho de hover effect?

- **Pequeno (1.05)**: Badges, ícones, elementos < 100px
- **Médio (1.02)**: Cards principais, elementos 100-300px
- **Grande (1.01)**: Seções, elementos > 300px

### Preciso sempre usar as classes customizadas?

**Sim**, sempre que possível. Elas garantem:
- Consistência visual
- Facilidade de manutenção
- Redução de código duplicado

Se precisar customizar, adicione classes Tailwind extras:
```tsx
<div className="card-base shadow-2xl">
  {/* Customização adicional */}
</div>
```

### Como adicionar uma nova variação de card?

1. Documente o caso de uso
2. Adicione a classe em `src/index.css` na seção `@layer components`
3. Use nomenclatura consistente: `.card-{variação}`
4. Atualize este documento com exemplos

---

## 🔗 Links Úteis

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons (Biblioteca de ícones)](https://lucide.dev/)
- [Plano de Padronização Completo](./PADRONIZACAO.md)
- [README do Projeto](./README.md)

---

**Última atualização**: 2025-10-10  
**Versão**: 1.0  
**Mantenedor**: Design System Team

