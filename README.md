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
