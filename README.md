# Dossiê Frontend

Frontend do sistema de dossiês profissionais desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **React 19** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **Lucide React** - Ícones
- **Axios** - Cliente HTTP

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🚀 Deploy na Vercel

O projeto está configurado para deploy automático na Vercel:

1. Conecte o repositório à Vercel
2. Configure as variáveis de ambiente (veja ENVIRONMENT.md)
3. Deploy automático será realizado

### 🔧 Variáveis de Ambiente Necessárias:

```bash
VITE_API_URL=https://dossie-backend.vercel.app
VITE_APP_NAME=Dossiê
VITE_APP_VERSION=1.0.0
```

**Configuração na Vercel:**
- Settings → Environment Variables
- Adicione as variáveis acima
- Configure para Production, Preview e Development

## 📁 Estrutura

```
src/
├── components/     # Componentes React
├── hooks/         # Custom hooks
├── services/      # Serviços de API
├── types/         # Definições TypeScript
├── utils/         # Utilitários
└── assets/        # Imagens e recursos
```

## 🎨 Features

- ✅ Design responsivo
- ✅ Animações suaves
- ✅ Tooltip interativo
- ✅ Loading states
- ✅ Error handling
- ✅ TypeScript completo
- ✅ Design System padronizado

## 🎨 Design System e Padronização

Este projeto segue um Design System rigoroso para garantir consistência visual e facilidade de manutenção.

### 📚 Documentação Completa

- **[PADRONIZACAO.md](./PADRONIZACAO.md)** - Plano completo de padronização e implementação
- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Guia visual com exemplos de todos os componentes
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Cheat sheet para consulta rápida durante desenvolvimento
- **[EXEMPLOS_REFATORACAO.md](./EXEMPLOS_REFATORACAO.md)** - Exemplos práticos de antes/depois
- **[PR_TEMPLATE.md](./PR_TEMPLATE.md)** - Template para Pull Requests de padronização

### 🎯 Princípios do Design System

#### 1. Paleta de Cores (Sem Azul)
```
Primárias: #e50914 (Netflix Red), #662222, #842A3B
Acentos:   #ea580c (Orange), #f59e0b (Amber), #e11d48 (Rose)
Neutros:   Escala de cinza completa
Estados:   Verde (success), Âmbar (warning), Vermelho (error), Roxo (info)
```

**🚫 Cores Proibidas**: `blue`, `sky`, `cyan` - substituir por roxo (#8b5cf6) ou outras da paleta

#### 2. Sistema de Cards (3 tipos)
```tsx
.card-base     // Uso geral (neutro)
.card-primary  // Destaque importante
.card-compact  // Listas e itens menores
```

#### 3. Badges Padronizados
```tsx
.badge-critical  // Vermelho
.badge-high      // Laranja
.badge-medium    // Âmbar
.badge-low       // Verde
.badge-tech      // Tecnologia (neutro)
```

#### 4. Spacing Consistente
```tsx
gap-4/6/12     // Small/Medium/Large
p-4/6/8        // Cards pequeno/médio/grande
mb-6/10/12     // Seções
```

#### 5. Hover Effects Padronizados
```tsx
scale-[1.05]  // Pequeno (badges)
scale-[1.02]  // Médio (cards)
scale-[1.01]  // Grande (seções)
scale-110     // Ícones
```

### 🛠️ Uso das Constantes

```tsx
// Importe as constantes do Design System
import { 
  CARD_CLASSES, 
  BADGE_CLASSES,
  ICON_SIZES,
  cn,
  getCriticalityConfig 
} from '@/constants/design-system';

// Use em seus componentes
<div className={CARD_CLASSES.base}>
  <Icon className={ICON_SIZES.card} />
  <span className={BADGE_CLASSES.high}>ALTO</span>
</div>

// Combine classes facilmente
<div className={cn(CARD_CLASSES.base, 'shadow-2xl')}>
```

### ✅ Checklist Rápido (Antes de Commit)

- [ ] Sem `blue`, `sky`, ou `cyan` no código
- [ ] Cards usam classes padronizadas
- [ ] Badges seguem o padrão
- [ ] Spacing é consistente (gap-4/6/12)
- [ ] Hover effects padronizados
- [ ] Transições com duração definida

### 🚀 Como Contribuir

1. Leia [PADRONIZACAO.md](./PADRONIZACAO.md) para entender o sistema completo
2. Consulte [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) durante desenvolvimento
3. Use [EXEMPLOS_REFATORACAO.md](./EXEMPLOS_REFATORACAO.md) como guia
4. Siga o [PR_TEMPLATE.md](./PR_TEMPLATE.md) ao criar Pull Requests

### 📊 Benefícios do Design System

- ✅ **Consistência**: 100% dos componentes seguem o mesmo padrão
- ✅ **Manutenibilidade**: Mudanças em um lugar afetam todo o app
- ✅ **Produtividade**: 40-50% menos código repetitivo
- ✅ **Qualidade**: Código autodocumentado e testável
- ✅ **Onboarding**: Novos devs entendem padrões rapidamente
