# Dossiê Luigi · Redesign 2026 — Design Document

> **Status:** Aprovado para implementação · Fase 4 completa
> **Autor do dossiê:** Luigi Bertoli Menezes
> **Pleito:** Promoção Júnior → Software Engineer Pleno · V4 Company
> **Janela alvo:** AVD (Avaliação de Desempenho) · julho/2026
> **Data deste documento:** 21/junho/2026
> **Tagline pessoal autoral:** *"Planejo o que dá e presto atenção no que o plano não controla — o resto costuma se encaixar no tempo certo."*

---

## Índice

1. [Contexto e Tese](#1-contexto-e-tese)
2. [Alinhamento com o Red Book V4](#2-alinhamento-com-o-red-book-v4)
3. [Princípios de Design](#3-princípios-de-design)
4. [Stack Técnica](#4-stack-técnica)
5. [Design Tokens](#5-design-tokens)
6. [Estrutura de 15 Seções — Especificação Completa](#6-estrutura-de-15-seções)
7. [Conteúdo Editorial Final](#7-conteúdo-editorial-final)
8. [Personagens da Narrativa](#8-personagens-da-narrativa)
9. [Pesquisas Externas Consolidadas](#9-pesquisas-externas-consolidadas)
10. [Mapeamento Dados → Backend](#10-mapeamento-dados--backend)
11. [Acessibilidade e Performance](#11-acessibilidade-e-performance)
12. [Roadmap de Implementação (Fase 5)](#12-roadmap-de-implementação)
13. [Referências](#13-referências)

---

## 1. Contexto e Tese

### 1.1 Mudança de propósito

A versão anterior do dossiê era pleito de **efetivação como Júnior**. Esta versão é **tese de promoção para Pleno**, dirigida à AVD de jul/2026.

A diferença muda o tom: a v1 pedia entrada; a v2 documenta o salto já realizado. Não é pleito — é **case**. O leitor (gestor, comitê de avaliação) está sendo apresentado a evidências de comportamento já-Pleno.

### 1.2 Linha argumentativa central

> "Em 15 meses na V4, percorri de estagiário a Júnior efetivado. Os comportamentos G.R.O.W.T.H. viraram regime, não pico. As dimensões PIFE estão em equilíbrio. Pleiteio Pleno por evidência observável — não por tempo."

### 1.3 Fio condutor

O conceito de **consistência** é o tema central que conecta todas as seções. A última seção narrativa (bloco 11 · "A CONSTANTE") materializa esse tema: "Não fiz tudo isso porque sou rápido. Fiz porque não parei."

---

## 2. Alinhamento com o Red Book V4

### 2.1 Citações-âncora extraídas do Red Book

**Página 01 (Abertura):**
> "Alinhamento cultural é o que transforma talento individual em poder coletivo. Dominar esta cultura é sua vantagem competitiva — tanto para crescer na V4 quanto para acelerar sua carreira."

Usada como abertura do **Manifesto (bloco 02)**.

**Página 08 (Linha-Mestra):**
> "PIFE é o que queremos na vida — e isso nos conecta a trabalharmos juntos na V4 como veículo coletivo. G.R.O.W.T.H. descreve como vencemos por meio de comportamentos observáveis."

Define a estrutura: PIFE = o que / GROWTH = como. Tema reforçado na Visão Futuro (bloco 13).

### 2.2 Citações por capítulo GROWTH

Cada um dos 6 GROWTHs abre com 1 citação curta extraída diretamente do Red Book:

- **G · GTM to Learn Faster** (pp. 14, 15) — *"Lançamos pequeno, medimos, aprendemos e escalamos. Cada fracasso é aprendizado, cada sucesso é hipótese validada."*
- **R · Radical Candor** (p. 18) — *"Verdade desconfortável supera mentira conveniente. O foco é sempre no problema, nunca na pessoa."*
- **O · Ownership** (p. 21) — *"Ownership não é sobre ter competência — é sobre ter coragem de assumir o resultado e colher os frutos como proprietário."*
- **W · Working Backwards** (pp. 23, 25) — *"Working backwards não é sobre o que você consegue construir — é sobre o que o cliente consegue realizar com o que você constrói."*
- **T · Trust in Science** (p. 26) — *"Decisões baseadas em dados, não opinião. Método científico aplicado ao Growth."*
- **H · High Standards · Frugal Execution** (p. 29) — *"Excelência sem desperdício. Excelência sustentável, não heroísmo insustentável."*

### 2.3 Vocabulário PIFE (alinhado ao Red Book, não ao type antigo)

- **P · Professional** (não "Pessoal") — sócio, não empregado; equity; dividendos
- **I · Intelectual** — ser reconhecido como o melhor no que faz
- **F · Fitness/Físico** — saúde como vantagem competitiva sustentada
- **E · Emocional** — estabilidade sob pressão como superpoder

> **Nota técnica:** o tipo TypeScript em `src/types/api.ts` (linha 65-72) define `DimensaoCultural` como `'Pessoal' | 'Intelectual' | 'Físico' | 'Espiritual' | 'Profissional' | 'Financeiro' | 'Social'`. O Red Book usa **Emocional** no lugar de Espiritual. Esta refatoração padroniza para o vocabulário do Red Book. Ver §10.

### 2.4 CHAMP — uso lateral, não estrutural

Os 5 objetivos estratégicos do Red Book (**C**onsumer, **H**osted Companies, **A**nnual Revenue, **M**ilestone IPO, **P**erpetuity) aparecem como **chips/badges discretos** em cada card de prova nos GROWTHs — sem virar capítulo próprio. Decisão tomada para não soar como "amarração forçada" de dev Júnior conectar entregas técnicas ao IPO da V4.

---

## 3. Princípios de Design

### 3.1 Linguagem visual

Award-winning showcase com paleta Netflix-red preservada. Inspirações:

- Tipografia editorial (NYT, Bloomberg) → display serif gigante, hierarquia editorial
- Awwwards/portfólios premiados → scroll-driven storytelling, transições WebGL/canvas leves
- Red Book V4 → tom de "manifesto", citações em itálico serif, fechamentos dramáticos

### 3.2 Motion principles

1. **Reveal por scroll** — nada aparece sem o usuário rolar. Cada bloco "se ganha".
2. **Pin dramático** — blocos centrais usam ScrollTrigger pin (1.2x–2.0x viewport) para criar momentos contemplativos.
3. **SplitText em momentos-chave** — nome do Luigi (Hero), tese (Manifesto), palavra "CONSISTÊNCIA" (A Constante).
4. **Smooth scroll global** — Lenis com `lerp: 0.08` (sutil, não preguiçoso).
5. **Counter animation** — números do bloco 04 sobem de 0 até o valor real (`gsap.to({val:0}, {val:target, ease:'expo.out', duration:2.0})`).
6. **Letras gigantes** como marcadores de capítulo — escala 40-60vw, serif display, vermelho `#e50914`, com leve glow radial.

### 3.3 Tipografia hierárquica

- **Display serif** (Fraunces ou Instrument Serif) — nome, citações, letras de capítulo
- **Sans-serif** (Montserrat — já no projeto) — corpo, microcopy, labels
- **Mono** (JetBrains Mono) — números, métricas, código, períodos cronológicos

### 3.4 Pacto editorial

- **Citações** sempre em itálico serif, com atribuição em sans uppercase tracking-wider, atribuída ao Red Book V4 com capítulo
- **Microcopy de transição** entre seções em sans uppercase 11px, opacity 0.3-0.4 — guia o leitor sem competir
- **Linhas vermelhas 1px** como separadores narrativos, atravessando viewport horizontalmente

---

## 4. Stack Técnica

### 4.1 Manter (já no projeto)

- **React 19** + **TypeScript** (strict)
- **Vite** (build + dev)
- **Tailwind CSS** (utility-first)
- **Lucide React** (ícones)
- **Axios** (HTTP client pro backend Vercel)

### 4.2 Adicionar

| Lib | Razão | Bundle approx |
|-----|-------|---------------|
| `gsap` (Free) | Animações scroll-driven, timelines complexas | ~70kb |
| `gsap/ScrollTrigger` | Pin, scrub, reveal por viewport | incluso |
| `gsap/SplitText` (Club GreenSock — usar alternativa free) | Reveal letra a letra do nome/tese. **Alternativa free:** `splitting.js` (~15kb) | ~15kb |
| `lenis` (`@studio-freight/lenis`) | Smooth scroll global | ~12kb |

**Total adicionado:** ~100kb gz (~30kb gzip estimado). Aceitável para o ganho narrativo.

### 4.3 Fontes a adicionar

```html
<!-- index.html -->
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
```

Manter Montserrat. Adicionar **Fraunces** (display serif principal), **Instrument Serif** (citações editoriais), **JetBrains Mono** (métricas).

### 4.4 Stack tech do Luigi (decisão narrativa)

Conforme decisão do dia 21/jun/2026: o dossiê **NÃO destaca stack específica** (TypeScript, Node, React/Next, NestJS, Prisma, Fastify). Apenas conceitos:

- **DDD** (Domain-Driven Design)
- **Clean Architecture**
- **Event-Driven Architecture**

Razão: stack rotacionou ao longo dos 7 times; o que persistiu foi arquitetura/método. Mostra senioridade conceitual além de domínio técnico.

---

## 5. Design Tokens

### 5.1 Paleta (preservada do projeto atual)

```css
/* Primárias */
--red-primary:    #e50914;  /* Netflix Red */
--red-deep:       #842A3B;  /* Burgundy escuro */
--red-blood:      #662222;  /* Sangue maduro */

/* Acentos */
--orange:         #ea580c;
--amber:          #f59e0b;
--rose:           #e11d48;
--purple:         #8b5cf6;  /* substitui blue/sky/cyan */

/* Neutros */
--black-pure:     #000000;
--black-deeper:   #020000;  /* fundo bloco 11 · A Constante */
--black-deep:     #050000;  /* fundo bloco 04 · Os Números */
--black-dossie:   #0a0000;  /* fundo padrão */
--black-card:     rgba(20,4,4,0.6);  /* fundo cards (backdrop-blur) */
--white-95:       rgba(255,255,255,0.95);
--white-85:       rgba(255,255,255,0.85);
--white-60:       rgba(255,255,255,0.60);
--white-40:       rgba(255,255,255,0.40);
--white-30:       rgba(255,255,255,0.30);

/* Estados (PIFE chips) */
--pife-professional:  #e50914;
--pife-intelectual:   #ea580c;
--pife-fisico:        #16a34a;
--pife-emocional:     #8b5cf6;

/* CHAMP chips (cinza com letra ativa) */
--champ-inactive: rgba(255,255,255,0.2);
--champ-active:   #e50914;
```

**🚫 Cores proibidas:** `blue`, `sky`, `cyan` (mantém regra do design system anterior). Use roxo `#8b5cf6` ou outras da paleta.

### 5.2 Tipografia

```css
/* Famílias */
--font-display:   'Fraunces', 'Instrument Serif', Georgia, serif;
--font-editorial: 'Instrument Serif', Georgia, serif;  /* citações */
--font-sans:      'Montserrat', system-ui, sans-serif;
--font-mono:      'JetBrains Mono', 'SF Mono', Menlo, monospace;

/* Escalas (clamp para fluid type) */
--text-hero:        clamp(80px, 14vw, 220px);  /* nome principal */
--text-letter-cap:  clamp(180px, 40vw, 600px);  /* letras gigantes de capítulo */
--text-h1:          clamp(48px, 6vw, 96px);
--text-h2:          clamp(32px, 4vw, 56px);
--text-quote:       clamp(20px, 2.4vw, 32px);
--text-body:        clamp(15px, 1.2vw, 18px);
--text-small:       clamp(12px, 0.9vw, 14px);
--text-micro:       11px;  /* uppercase tracking-widest */

/* Pesos */
--weight-display: 500-600;  /* Fraunces */
--weight-body:    400;
--weight-emphasis: 600;
```

### 5.3 Espaçamento (preservado)

```css
gap-4, gap-6, gap-12      /* Small / Medium / Large */
p-4, p-6, p-8             /* Cards pequeno / médio / grande */
mb-6, mb-10, mb-12        /* Seções */
```

### 5.4 Sombras e blurs

```css
--shadow-glow-red:    0 0 80px rgba(229,9,20,0.15);
--shadow-card:        0 4px 24px rgba(0,0,0,0.5);
--shadow-card-hover:  0 8px 40px rgba(229,9,20,0.2);

--blur-card:          backdrop-blur(20px);
```

### 5.5 Animações canônicas

```css
/* Hover scales (preservado) */
--scale-icon:    1.10;
--scale-card:    1.02;
--scale-section: 1.01;
--scale-badge:   1.05;

/* Timings */
--duration-fast:   200ms;
--duration-base:   400ms;
--duration-slow:   800ms;
--duration-reveal: 1400ms;  /* SplitText nome */

/* Eases */
--ease-out:       cubic-bezier(0.16, 1, 0.3, 1);    /* expo.out */
--ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
--ease-smooth:    cubic-bezier(0.65, 0, 0.35, 1);
```

---

## 6. Estrutura de 15 Seções

### Mapa visual

```
01  HERO                         100vh + sticky photo card
02  MANIFESTO                    100vh + pin 1.5x
03  TIMELINE                     horizontal pin 2x viewport
04  OS NÚMEROS                   100vh + pin 1.5x (3 painéis)
05  G · GTM TO LEARN FASTER      100vh + pin 1.5x (template GROWTH)
06  R · RADICAL CANDOR           100vh + pin 1.5x
07  O · OWNERSHIP                100vh + pin 1.5x (mais denso · 6 cards)
08  W · WORKING BACKWARDS        100vh + pin 1.5x
09  T · TRUST IN SCIENCE         100vh + pin 1.5x
10  H · HIGH STANDARDS           100vh + pin 1.5x
11  A CONSTANTE · CONSISTÊNCIA   100vh + pin 1.2x (interlúdio)
12  ACADÊMICO                    min-h 80vh (informativo)
13  VISÃO FUTURO                 min-h 80vh (3 cards horizontais)
14  PLEITO PLENO                 100vh (formato Looking Ahead)
15  ASSINATURA                   60vh (rodapé · tagline)
```

### 6.01 · HERO

**Layout:** seção fullscreen 100vh. Fundo `#0a0000` com gradient radial sutil partindo do centro (`#1a0000` → `#0a0000`). Sobre ele, canvas WebGL leve renderizando ~80 partículas vermelhas com atração suave ao cursor.

**Conteúdo:**
- Centro: nome em duas linhas `Luigi Bertoli Menezes` (Fraunces, peso 500, `--text-hero`, tracking apertado)
- Sob o nome: linha vermelha 1px 30vw + subtítulo sans pequena: `Software Engineer · V4 Company · Júnior pleiteando Pleno`
- Tese revelada após 80vh de scroll: `"Júnior efetivado em 8 meses. Esta é a tese de Pleno."` — SplitText palavra a palavra, vermelho `#e50914`, Instrument Serif itálico, ~28-32px
- Cue de scroll: `↓ desça` pulsa infinitamente

**Foto do Luigi (`profile.jpg` substituído):** NÃO entra no hero principal. Move pra card sticky no canto inferior direito (192×192px) que aparece após o usuário rolar 1 viewport.

**Animações:**
1. Background gradient pulsa 1x ao carregar (1.2s, `ease-in-out`)
2. Partículas materializam-se (opacity 0→1 em 800ms, escalonado)
3. Nome split-reveal (1.4s total, stagger 40ms por letra)
4. Linha + subtítulo fade-in (300ms)
5. Tese (após scroll) aparece com SplitText palavra a palavra

**Mobile (<768px):**
- Partículas com densidade 50%
- Nome `clamp(56px, 16vw, 96px)`
- Foto entra logo abaixo do nome (card 160×160px)
- Sem canvas se `prefers-reduced-motion` — fallback gradient estático

**Performance:**
- Canvas em `<canvas>` puro com `requestAnimationFrame`
- Pausado fora de viewport (`IntersectionObserver`)
- Lenis com `lerp: 0.08`

**Acessibilidade:**
- `aria-hidden` no canvas
- `prefers-reduced-motion` desabilita partículas + split-text → fade simples
- Navegação por teclado mantida

---

### 6.02 · MANIFESTO

**Layout:** seção fullscreen com pin de 1.5x viewport (Lenis + GSAP ScrollTrigger). Fundo `#0a0000` com textura sutil de ruído (CSS `noise.svg` em 4% opacity). Centro vertical.

**3 camadas verticais com stagger:**

**Camada 1 — Citação âncora** (Red Book p. 01):
> *"Alinhamento cultural é o que transforma talento individual em poder coletivo. Dominar esta cultura é sua vantagem competitiva — tanto para crescer na V4 quanto para acelerar sua carreira."*
> `— THE RED BOOK · V4 COMPANY`

Instrument Serif itálico, max-width 720px, peso 400, `--text-quote`. Atribuição sans uppercase tracking-widest, vermelho.

**Camada 2 — Tese (SplitText palavra a palavra):**
> **PIFE é o que quero. GROWTH é como entrego. Este dossiê é a prova.**

Fraunces, peso 500, `--text-h2`. Frases separadas por `·` decorativos vermelhos.

**Camada 3 — Pleito explícito:**
> Em 15 meses, percorri de **estagiário a Júnior efetivado**. Os comportamentos GROWTH viraram regime, as dimensões PIFE estão em equilíbrio. Vim pleitear **Pleno** não pelo tempo — pelas evidências que seguem.

Sans, peso 400, `--text-body`, opacity 0.85.

**Animação:** scroll-pin de 1.5x viewport. Linha decorativa vermelha 1px desliza horizontalmente entre cada camada. Background sutilmente puxa vermelho de 0% a 8% saturation ao longo do pin.

**Mobile:** sem pin (penalty UX). Camadas empilhadas com reveal por viewport.

**Acessibilidade:**
- Citação como `<blockquote>` com `<cite>`
- Tese como `<h2>`, pleito como `<p>`
- `prefers-reduced-motion` desliga split-text + pin → fade simples

---

### 6.03 · TIMELINE

**Layout:** seção horizontal full-bleed (100vh × 200vw), **pinned no ScrollTrigger por 2x viewport** — usuário rola vertical e timeline se move horizontal. 7 nós conectados em linha vermelha 1px central.

**Visual:**
- Linha vermelha 1px atravessa toda a viewport
- 7 círculos vermelhos 12px com glow
- Acima de cada nó: nome do time/área em sans uppercase
- Abaixo: período em mono `JetBrains Mono` (cinza)
- Painel vertical aparece com fade-in conforme passa pelo centro

**Os 7 nós (cronologia confirmada):**

| Nó | Time/Área | Período | Status | Microcopy |
|----|-----------|---------|--------|-----------|
| 1 | Produto · Finance | mar/25 → mai/25 | Estagiário | *Contexto inicial. APIs, conceitos, postura.* |
| 2 | Workforce + HOps | mai/25 → set/25 | Estagiário | *850+ chamados. Confiança de franqueado. Frontend nasceu aqui.* |
| 3 | Contratos | set/25 → nov/25 | Estagiário | *Velocidade de adaptação técnica.* |
| 4 | Financeiro (1ª) | nov/25 → fev/26 | **Júnior** ⭐ | *Efetivado nov/25. Já com contexto único do Pós-Venda — sustentei dois fluxos.* |
| 5 | CRM | fev/26 → abr/26 | Júnior | *Maior tempo. Onde Davi Campos disse "confio em qualquer entrega sua".* |
| 6 | Pós-Venda | abr/26 → jun/26 | Júnior | *Knowledge Pills com estagiários. Pivô da migração.* |
| 7 | Financeiro (atual) | jun/26 → presente | Júnior | *Service Cart. Entrega em tempo recorde.* |

**Marca dramática no nó 4:** glow vermelho 2x mais intenso, badge `★ EFETIVADO NOV/25` em sans uppercase amarelo `--amber`.

**Contador rolando** (canto inferior direito, mono):
```
07 TIMES · 15 MESES · 02 OWNERSHIPS ATIVOS
```
Anima de `00` ao valor real conforme timeline avança.

**Animação:**
- Cada nó "acende" (glow + scale 1.2 → 1.0) no centro da viewport
- Microcopy aparece com fade-in palavra a palavra
- Linha vermelha pulsa onde está o nó ativo

**Mobile:** vira timeline **vertical** (sem pin horizontal), nós empilhados. Contador fixo no topo durante scroll.

---

### 6.04 · OS NÚMEROS

**Layout:** seção fullscreen com fundo `#050000` (mais escuro que GROWTHs). Pin de 1.5x viewport. Aberta com letra `N` gigante no canto.

**Header:**
```
CAPÍTULO 02 · NÚMEROS · MAR/2025 → JUN/2026
```

**Microcopy editorial:**
> *"PRs pequenos, mergeados rápido. É o playbook que o Red Book chama de Frugal Execution."*

**3 painéis horizontais (revelados em sequência):**

#### Painel 1 — GitHub · Entrega

```
   165         62.372         273
   PRs         linhas         code reviews
   merged      adicionadas    dados a outros

   ─────────────────────────────────────────
   78% merge rate · 73 mil linhas movimentadas
```

Números em mono JetBrains 96px, peso 600, vermelho `#e50914`. Counter animation `gsap.to({val:0}, {val:target, ease:'expo.out', duration:2.0})`. Labels sans 12px uppercase.

#### Painel 2 — PR Maturity · Qualidade de Fluxo

```
   3.2h        70%           86%
   mediana     <24h          <72h
   time-to-merge

   ─────────────────────────────────────────
   Mediana 142 linhas/PR. PR pequeno, revisão rápida — playbook DORA Elite.

   ▎  Benchmark DORA Elite (top 4%): lead time < 1 dia · você está em 3,2h.
```

#### Painel 3 — Linear · Criticidade *(versão sucinta)*

```
   76          26
   issues      P0/P1
   Linear      Urgent + High

   ─────────────────────────────────────────
   4 times · 34% de criticidade · CRM em Jira
```

> **Sucinto por decisão:** breakdown por time (30 SOS, 21 FIN, 18 REVMON, 7 REVACQ) removido para reduzir ruído. Detalhes ficam pra quem cavar.

**Encerramento (linha vermelha 1px):**
> `> Estes números cabem em uma linha. As decisões por trás deles ocupam os próximos seis capítulos.`

**Animação técnica:**
- 3 painéis pinados em sequência (~0.5 viewport cada)
- Counter animation com `ease: 'expo.out'`, duração 2.0s
- Linha vermelha sob cada painel se desenha (`drawSVG`) conforme paneo entra
- Benchmark (linha com `▎`) aparece 400ms depois dos números, itálico vermelho-pálido

**Mobile:** painéis empilhados sem pin. Números reduzidos a 64px. Counter inicia quando painel entra no viewport.

---

### 6.05 a 6.10 · Template comum dos 6 GROWTHs

Todos os 6 capítulos seguem **a mesma estrutura de 4 atos** (variando apenas conteúdo). O conteúdo editorial completo de cada um está em §7.

**Layout padrão (cada GROWTH):**

**Ato 1 — A Letra (entry)**
- Fundo `#0a0000`
- Letra única gigante no centro: `font-size: var(--text-letter-cap)` (40-60vw)
- Fraunces peso 600, vermelho `#e50914`, glow radial atrás
- Micro-tipografia em sans uppercase tracking-widest:
  ```
  CAPÍTULO NN · GROWTH

          [LETRA]

       N O M E   D O   P R I N C Í P I O
  ```
- Entra com `clip-path` revealing ou `drawSVG`, 1.2s ease `--ease-out`

**Ato 2 — A Citação Red Book (após ~0.5 viewport scroll)**
- Letra encolhe para canto superior esquerdo (scale 0.15, fica como marcador)
- Citação central, Instrument Serif itálico, alinhamento à esquerda
- Max-width 720px, `--text-quote`
- Frase-chave em vermelho `#e50914`
- Atribuição: `— THE RED BOOK · V4 · CAP. [LETRA]`

**Ato 3 — As Provas (cards revelados sequencialmente)**
- Grid de 2-6 cards (varia por GROWTH)
- Stagger horizontal 200ms apart, fade + translateY
- **Anatomia do card:**
  - Borda `1px solid rgba(229,9,20,0.2)`
  - Fundo `rgba(20,4,4,0.6)` + `backdrop-blur(20px)`
  - Título: sans uppercase tracking-wider, 12px, vermelho
  - Corpo: sans regular, 15px, branco 90%
  - **Chips PIFE** (canto inferior esquerdo): badges 11px arredondados `[P]Profess` `[I]Intelect` `[F]Fitness` `[E]Emoc`
  - **Chips CHAMP** (canto inferior direito): badges menores `[C][H][A][M][P]` — cinza com letra ativa em vermelho
  - **Avatares** (quando houver pessoa citada): círculo 32px com iniciais estilizadas mono vermelho, borda 1px vermelha
  - Hover: scale 1.02, glow vermelho intensifica, borda fica `rgba(229,9,20,0.6)`

**Ato 4 — Encerramento**
- Linha vermelha 1px horizontal atravessa
- Microcopy em mono:
  ```
  > [síntese narrativa do capítulo]
  ```

**Mobile:** sem pin (ou pin 1.2x menor). Cards empilhados em coluna única. Letras gigantes reduzidas a `clamp(120px, 30vw, 200px)`.

**Performance:** todos os cards lazy-rendered via IntersectionObserver. Hover effects desabilitados em touch.

**Acessibilidade:**
- Letra gigante = `aria-hidden="true"` (decorativa)
- Citação = `<blockquote><cite>`
- Cards = `<article>` semântico
- `prefers-reduced-motion` substitui pin + reveal por simples fade-in

---

### 6.11 · A CONSTANTE · CONSISTÊNCIA *(interlúdio)*

**Layout:** seção fullscreen 100vh com fundo `#020000` (mais escuro do dossiê — momento mais quieto). Sem cards, sem letras gigantes — **só tipografia editorial**. Pin de 1.2x viewport. **4 atos com fade-in cumulativo** (tela vai se preenchendo).

**Ato 1 — Pergunta**
Centro vertical, Instrument Serif itálico, `--text-quote`, branco 60% opacity:
> *"O que conecta sete times, cento e sessenta e cinco PRs, oitocentos e cinquenta chamados, setenta e seis issues e seis estagiários treinados?"*

**Ato 2 — Resposta (palavra única gigante)**
Apaga pergunta. Centro absoluto. Fraunces peso 600, `--text-letter-cap` (`clamp(120px, 22vw, 320px)`), vermelho `#e50914` com glow radial. SplitText letra a letra, stagger 80ms:

```
        CONSISTÊNCIA
```

Embaixo, sans 10px uppercase tracking-widest, branco 40%:
> `THE CONSTANT`

**Ato 3 — Desdobramento**
Palavra encolhe pra metade e desliza pro topo. Abre espaço pra parágrafo em mono `JetBrains Mono` 18px, branco 90%, alinhado à esquerda, max-width 720px:

```
  7 times rotacionados.       Qualidade não caiu.
  15 meses na V4.             165 PRs mergeados.
  850+ chamados resolvidos.   76 issues distribuídas.
  1 task cross-area doente.   1 TCC nível mestrado.
  6 estagiários treinados.    2 ownerships ativos.

  Nada disso é pico.
  Cada número resistiu ao mês seguinte.
  E ao seguinte.
```

**Ato 4 — Frase de fechamento**
Linha vermelha 1px horizontal 40vw desliza horizontal. Abaixo, Instrument Serif itálico ~40px, peso 500, centralizado:

> *"Não fiz tudo isso porque sou rápido."*
> *"Fiz porque não parei."*

Segunda linha entra 600ms depois da primeira, em vermelho `#e50914`.

**Microcopy de transição** (canto inferior, sans 11px uppercase, opacity 0.3):
> `→ A PRÓXIMA SEÇÃO MOSTRA QUE A CONSTANTE TEM RAIZ ACADÊMICA`

**Mobile:** mesma estrutura, palavra reduzida pra `clamp(72px, 24vw, 140px)`, mono parágrafo empilhado em coluna única.

**Acessibilidade:** parágrafo final como `<blockquote>`. Palavra "CONSISTÊNCIA" como `<h2>`. `prefers-reduced-motion` substitui ato 2 por fade-in simples.

---

### 6.12 · ACADÊMICO

**Layout:** seção `min-h: 80vh`, mais compacta (informativa, não cinematográfica). Grid de 3 cards horizontais + bloco final UNICAMP em destaque vertical.

**Header:**
Letra `A` gigante no canto esquerdo (40vw, peso 500, vermelho), e ao lado:
```
CAPÍTULO 12 · FORMAÇÃO
─────────────────────
Engenharia da Computação · PUC-Campinas
Penúltimo semestre → último → mestrado UNICAMP
```

**3 cards horizontais — conteúdo final em §7.**

**Bloco em destaque · Mestrado UNICAMP:**
Card vertical largura total da seção, borda lateral vermelha 4px:

> **MESTRADO EM PLANEJAMENTO · UNICAMP IC**
>
> Área pretendida: **Engenharia de Software + Visão Computacional**.
> Contato firmado com professores de referência: **Breno Cafeo** e **Juliana Borim**.
>
> *"O time de tech da V4 é um time de pesquisadores."* — O mestrado é o veículo formal pra essa identidade ser produzida, não apenas declarada.

**Animação:** cards entram com fade-stagger horizontal. Bloco UNICAMP entra com fade vertical (de baixo) + drawSVG da borda vermelha.

---

### 6.13 · VISÃO FUTURO

**Layout:** 3 cards horizontais (1 ano · 3 anos · 5 anos) conectados por linha vermelha temporal. Mesma linguagem da Timeline (bloco 03), agora projetada pra frente.

```
●─────────────●─────────────●
│             │             │
1 ANO         3 ANOS        5 ANOS
2027          2029          2031
```

**Conteúdo dos 3 cards em §7.**

**Frase de fechamento (sob os 3 cards, Instrument Serif itálico ~22px):**
> *"O mercado pede Product Engineers que conhecem código e produto na mesma profundidade. Estou no caminho — V4 Company é meu veículo coletivo."*

Cita-volta ao Red Book: *"PIFE é o que queremos na vida — e isso nos conecta a trabalharmos juntos na V4 como veículo coletivo."*

---

### 6.14 · PLEITO PLENO

**Layout:** seção 100vh, formato editorial "Looking Ahead" (estilo Red Book). Letra `P` gigante no canto. Blocos verticais como carta de tese.

**Header:**
```
CAPÍTULO 14 · O PLEITO

      P

PLENO · AVD JULHO/2026
```

**4 blocos em conteúdo em §7. Inclui:**

**Bloco 3 — Pretensão salarial — gráfico horizontal:**

```
P25 Campinas     Pretensão     Mediana Campinas    P75 Campinas    R.Half piso
R$ 7.132         R$ 7.500      R$ 7.967            R$ 9.333        R$ 9.550
   │             ▼                │                    │                 │
   ●─────────────●────────────────●────────────────────●─────────────────●
```

**Bloco 4 — Fechamento dramático:**
Linha vermelha 1px, e abaixo em Instrument Serif ~32px:
> *"Esta é a tese. As provas estão nos quatorze capítulos anteriores."*

---

### 6.15 · ASSINATURA

**Layout:** rodapé fullscreen 60vh, fundo `#000` puro, tudo centralizado verticalmente.

**Tagline (autoral):**
Instrument Serif itálico, peso 400, `clamp(28px, 4.5vw, 56px)`, max-width 880px, line-height 1.4, branco 95%:

> *"Planejo o que dá e presto atenção no que o plano não controla —*
> *o resto costuma se encaixar no tempo certo."*

Atribuição abaixo, sans uppercase tracking-widest 11px, vermelho:
> `— LUIGI BERTOLI MENEZES`

**Metadata final (linha fina, sans 12px, branco 50%, `·` separadores):**
```
Software Engineer · Júnior pleiteando Pleno · V4 Company · jul/2026
github.com/luigimenezes13
Construído por mim. Sem Lovable. Sem v0. Backend próprio em dossie-backend.vercel.app
```

**Linha vermelha final** 1px horizontal vermelho `#e50914`, 60vw, com fade nas extremidades. Único elemento gráfico desse rodapé.

---

## 7. Conteúdo Editorial Final

> Este é o **texto exato** que vai pra cada seção. Implementação deve preservar prosa, citações e atribuições.

### 7.01 · HERO

```
[NOME PRINCIPAL]
Luigi Bertoli Menezes

[SUBTÍTULO]
Software Engineer · V4 Company · Júnior pleiteando Pleno

[TESE REVELADA NO SCROLL]
Júnior efetivado em 8 meses. Esta é a tese de Pleno.

[CUE DE SCROLL]
↓ desça
```

### 7.02 · MANIFESTO

```
[CITAÇÃO RED BOOK · CAMADA 1]
"Alinhamento cultural é o que transforma talento individual em poder
coletivo. Dominar esta cultura é sua vantagem competitiva — tanto para
crescer na V4 quanto para acelerar sua carreira."
— THE RED BOOK · V4 COMPANY

[TESE · CAMADA 2]
PIFE é o que quero. GROWTH é como entrego. Este dossiê é a prova.

[PLEITO · CAMADA 3]
Em 15 meses, percorri de estagiário a Júnior efetivado. Os comportamentos
GROWTH viraram regime, as dimensões PIFE estão em equilíbrio. Vim
pleitear Pleno não pelo tempo — pelas evidências que seguem.
```

### 7.03 · TIMELINE

Conteúdo de cada nó já listado em §6.03. Manter exatamente.

### 7.04 · OS NÚMEROS

**Painel 1 (GitHub):** 165 · 62.372 · 273. Microcopy: *"78% merge rate · 73 mil linhas movimentadas"*

**Painel 2 (PR Maturity):** 3.2h · 70% · 86%. Microcopy: *"Mediana 142 linhas/PR. PR pequeno, revisão rápida — playbook DORA Elite. Benchmark DORA Elite (top 4%): lead time < 1 dia · você está em 3,2h."*

**Painel 3 (Linear):** 76 · 26. Microcopy: *"4 times · 34% de criticidade · CRM em Jira"*

**Encerramento:** `> Estes números cabem em uma linha. As decisões por trás deles ocupam os próximos seis capítulos.`

### 7.05 · G — GTM TO LEARN FASTER

```
[CITAÇÃO RED BOOK]
"Lançamos pequeno, medimos, aprendemos e escalamos. Cada fracasso é
aprendizado, cada sucesso é hipótese validada."
— THE RED BOOK · V4 · CAP. G

[PARÁGRAFO DE ABERTURA]
GTM, na V4, é ir ao mercado para aprender mais rápido. O meu "mercado"
foi o ecossistema interno: sete times em quinze meses, cada um um ciclo
de hipótese, entrega e ajuste.

[CARDS DE PROVAS]

◯ 7 ciclos GTM em 15 meses · [I][F]·[P] · CHAMP:[P]
Produto (Finance) mar/25 → mai/25 · Workforce + HOps mai/25 → set/25 ·
Contratos set/25 → nov/25 · Financeiro 1ª nov/25 → fev/26 · CRM fev/26 →
abr/26 · Pós-Venda abr/26 → jun/26 · Financeiro atual jun/26 → presente.
Em cada parada, três perguntas: qual problema esse time resolve · onde
estão os gargalos · como meu skill compõe a entrega. Resposta entregue em
código antes do final do ciclo.

◯ Knowledge Pills · ensinar é o GTM mais rápido · [I][P] · CHAMP:[P][H]
Primeira iniciativa no Pós-Venda foi destilar nossa stack (DDD + Clean
Architecture + Event-Driven) em sessões de 30 minutos para os novos
estagiários. Material aberto no Google Classroom, calendário recorrente.
6 estagiários passaram pela trilha; 2 permaneceram; um deles — Gustavo
Zorzo (gustavo.zorzo@v4company.com) — subiu a primeira PR na stack em
pouco mais de um mês. Curiosidade ávida, raciocínio rápido: a curva foi
acelerada também pelo aluno. O treinamento é um ciclo GTM clássico —
hipótese (a stack pode ser ensinada em pílulas), MVP (6 sessões), métrica
(tempo até primeira PR), validação. Funcionou.

◯ Adaptação por temperamento · [E]
CRM, Pós-Venda e Financeiro têm temperamentos distintos. Cada um pede um
repertório social diferente: onde no CRM existe debate intenso, no
Pós-Venda há cuidado com contexto novo. Cada rotação foi uma calibração
de comunicação, não apenas de stack. Aprender o time é parte do GTM.

[ENCERRAMENTO]
> 7 contextos. 6 estagiários treinados. 1ª PR do aluno em <30 dias.
  GTM observável em ciclo curto.
```

### 7.06 · R — RADICAL CANDOR

```
[CITAÇÃO RED BOOK]
"Verdade desconfortável supera mentira conveniente. O foco é sempre no
problema, nunca na pessoa."
— THE RED BOOK · V4 · CAP. R

[PARÁGRAFO DE ABERTURA]
Radical Candor não é teoria nem perfil — é evento. Aconteceu no CRM, sob
pressão, e foi o aprendizado mais denso de comportamento desde a
efetivação.

[CARDS DE PROVAS]

◯ Feedback ao líder · semana atípica + doente · [E][F]
Era a fase de maior tempo de atuação no CRM. Semana atípica. Doente. Em
vez de esperar a próxima 1:1, sentei com o líder, trouxe exemplos
concretos e substanciais sobre o que estava me travando — e o que eu via
que precisava mudar no fluxo do time. Não era reclamação. Era diagnóstico.
O foco esteve no problema, nunca na pessoa. Saí do encontro com plano,
e o líder com clareza. Comportamento antifrágil — exatamente o que o
Red Book descreve.

◯ A entrega que veio com o feedback · [P]·[I] · CHAMP:[H]
Na mesma semana atípica, completei uma task cross-area (mars-sales +
plataforma) que exigia decisões de arquitetura e comunicação direta com
outro time. Dar feedback e entregar simultaneamente comprova que Radical
Candor não é desculpa pra parar — é como acelera o time enquanto o time
melhora.

◯ Autogestão pedida ao próprio repertório · [E]
Antes do feedback ao líder, o feedback foi pra dentro. Aprendi a me gerir
melhor no CRM — calibrar quando puxar tarefa, quando consultar antes,
quando entregar e refinar depois. Maturidade emocional como pré-requisito
de candor: você não diz verdade desconfortável se não consegue ouvir a
sua.

[ENCERRAMENTO]
> Feedback dado. Task cross-area entregue. Semana doente. Mesma semana.
```

### 7.07 · O — OWNERSHIP

```
[CITAÇÃO RED BOOK]
"Ownership não é sobre ter competência — é sobre ter coragem de assumir
o resultado e colher os frutos como proprietário."
— THE RED BOOK · V4 · CAP. O

[PARÁGRAFO DE ABERTURA]
Ownership é a tese central deste dossiê. Aqui não é sobre tarefa entregue
— é sobre produto carregado. Dois deles vivem comigo independentemente
do time onde eu esteja atuando no momento.

[CARDS DE PROVAS]

◯ Owner do Workforce desde set/2025 · [P][I] · CHAMP:[H][P]
Assumi por necessidade quando o time precisava de continuidade técnica.
Dez meses contínuos, mesmo cruzando quatro times de origem (Contratos,
Financeiro 1ª, CRM, Pós-Venda). Em junho/2026, fui reconhecido
oficialmente como responsável pelo produto na WGO (What's Going On,
monthly de tech). Inovação em aberto — plano em construção, mas a
fundação está sob minha conta: report a stakeholders, decisões técnicas,
evolução incremental.

◯ LMS · Owner → Co-owner com Matheus · [P] · CHAMP:[H][P]
Owner do LMS de nov/25 → mai/26 (seis meses). Em mai/26 recebi Matheus
Almeida (almeida.matheus@v4company.com) como co-owner — ownership
compartilhado, não diluído. Continuo no fluxo de decisão, agora também
na curva de onboarding técnico dele.

◯ Pivô da migração no Pós-Venda · [P][I] · CHAMP:[H]
Liderança nova chegou ao Pós-Venda com know-how técnico forte mas pouca
contagem de V4. Carreguei a migração técnica do time: as tasks complexas,
o contexto histórico, o discovery + refinamento técnico das próximas
iniciativas. Recebi crédito explícito de teammates pelo papel de pivô.

◯ Contexto sustentado mesmo após troca de time · [E][P]
Quando saí do Pós-Venda para o Financeiro atual em jun/26, sustentei o
contexto do PV em paralelo — porque era o único com a memória completa
daquele fluxo. Continuei ajudando o time mesmo "geograficamente" longe.
Ownership não termina no commit final; termina quando o conhecimento foi
transferido.

◯ Task cross-area no CRM mesmo doente · [E][F] · CHAMP:[H]
A mesma task do capítulo R. Aqui ela conta por outra razão: ownership não
pede licença pra clima ou energia. Coragem de assumir o resultado é
independente do estado do dia.

◯ Davi Campos · validação externa · [P][I]
Davi Campos (davi.campos@v4company.com), dev sênior do CRM, articulou em
palavras o que os entregáveis mostravam: "confio em qualquer entrega sua
· nível de maturidade alto pra sua senioridade · know-how de V4 imenso."
Reconhecimento de sênior não muda quem você é — confirma que está visível.

[ENCERRAMENTO]
> Dois ownerships ativos. Uma migração pivotada. Uma validação de sênior.
  Pleno demonstra ownership de produto, não de feature.
```

### 7.08 · W — WORKING BACKWARDS

```
[CITAÇÃO RED BOOK]
"Working backwards não é sobre o que você consegue construir — é sobre o
que o cliente consegue realizar com o que você constrói."
— THE RED BOOK · V4 · CAP. W

[PARÁGRAFO DE ABERTURA]
Começo pelo outcome do cliente — interno ou externo — e volto pra solução.
Três casos provam o método.

[CARDS DE PROVAS]

◯ Service Cart · Pagamento na call · [P] · CHAMP:[C][A]
Outcome desejado: vendedor fecha o deal na call, com pagamento confirmado
antes do desligar. Voltei para a solução: integração Pagar.me completa —
Pix, Boleto, Cartão — com fluxo upfront, eventos de pagamento
(UpfrontPaymentPaidEvent), conciliação por conciliationId, e suporte
adicional a cheque fora do gateway. Resultado: a série FIN-647 (≈13 PRs
entre 28/mai → 11/jun/2026), com o PR #3182 "Pagamento na call" como
marco simbólico. Tempo recorde após troca de time. Qualidade não cedeu.
   LINK: https://github.com/V4-Company/v4company-backend/pull/3182

◯ Discovery e refinamento técnico no Pós-Venda · [I][P] · CHAMP:[H]
Antes de a tarefa virar PR, ela vira problema bem formado. Auxiliei o
líder novo no discovery + refinamento técnico das tasks do time —
partindo sempre da pergunta "o que esse time precisa realizar?" antes de
"como vamos implementar?". Working Backwards aplicado ao backlog, não só
ao deploy.

◯ Knowledge Pills · partiu do problema, não da vontade de ensinar · [I] · CHAMP:[P]
O problema era o tempo de rampagem de novos estagiários na stack. A
solução foi a trilha — não o contrário. Métrica de outcome (1ª PR em <30
dias para o Zorzo) provou a inversão.

[ENCERRAMENTO]
> Outcome do cliente vem antes da elegância da solução. Service Cart,
  refinamento PV, Knowledge Pills — três aplicações do mesmo princípio.
```

### 7.09 · T — TRUST IN SCIENCE

```
[CITAÇÃO RED BOOK]
"Decisões baseadas em dados, não opinião. Método científico aplicado ao
Growth."
— THE RED BOOK · V4 · CAP. T

[PARÁGRAFO DE ABERTURA]
Trust in Science é mais que disciplina de métrica — é hábito intelectual.
Aqui, ele vem da formação acadêmica formal e da postura que ela educa no
dia a dia.

[CARDS DE PROVAS]

◯ TCC · nível de tese de mestrado · [I] · CHAMP:[M]
TCC sobre arquitetura de softwares que usam IA de forma dinâmica em
mercados líquidos. Aclamado pelos professores na apresentação — o
orientador (Breno Cafeo, IC PUC-Campinas; ou Juliana Borim) classificou
como disruptivo, com nível de tese de mestrado. Trust in Science começa
em saber formular hipótese antes de programar.

◯ Iniciação Científica · Metaheurísticas em Eng. Elétrica (2024) · [I]
Aplicação de metaheurísticas a problemas de Engenharia Elétrica.
Disciplina de experimentação controlada — o mesmo método que aplico em
decisões de arquitetura no produto.

◯ Mestrado UNICAMP em planejamento · [I] · CHAMP:[M]
Em contato com Breno Cafeo e Juliana Borim no IC da UNICAMP — área
pretendida: Engenharia de Software + Visão Computacional. Alinhamento
explícito com a tese da V4 de que o time de tech é um time de
pesquisadores. Mestrado é pesquisa estruturada — Trust in Science
institucionalizado.

◯ Aprendizado contínuo · 1h/dia · [I]
Rotina diária separada para leitura técnica e científica. Não é "tempo
livre que sobrou" — é bloco fixo. Lifelong learning como prática, não
slogan.

[ENCERRAMENTO]
> Quem desafia verdade estabelecida com método não improvisa decisão
  técnica. Quem faz pesquisa pra valer não fica passivo no produto.
```

### 7.10 · H — HIGH STANDARDS · FRUGAL EXECUTION

```
[CITAÇÃO RED BOOK]
"Excelência sem desperdício. Excelência sustentável, não heroísmo
insustentável."
— THE RED BOOK · V4 · CAP. H

[PARÁGRAFO DE ABERTURA]
Padrão alto é fácil de declarar e difícil de manter. Os números mostram
que aqui ele virou regime, não pico.

[CARDS DE PROVAS]

◯ 165 PRs merged · 78% merge rate · [P] · CHAMP:[H]
Em 15 meses na V4, 165 PRs mergeados de 212 abertos — 78% de taxa de
merge, sinal de PRs bem estruturados antes do open. +62.372 linhas
adicionadas, -10.730 removidas, 73 mil linhas movimentadas distribuídas
em mais de 10 repositórios: v4company-backend (61 PRs · +17k linhas),
v4company-frontend-v4 (33 PRs), mars-workforce (20 PRs), mars-sales-*,
mars-contracts, e outros.

◯ PR Maturity · DORA Elite · [I]
Mediana time-to-merge: 3,2 horas. 70% dos PRs mergeados em <24h. 86% em
<72h. Mediana de tamanho por PR: 142 linhas — pequenos o suficiente pra
revisão rápida, grandes o suficiente pra terem corpo. Benchmark DORA
Elite (top 4% global): lead time < 1 dia. Você está em 3,2h.

◯ 273 code reviews dados a outros · [E][P] · CHAMP:[H]
Padrão não é só na entrega — é também na revisão. 273 PRs revisados/
comentados com olho cruzado em times além do seu. Frugal Execution
coletiva: o time inteiro mergeia melhor quando alguém olha de fora.

◯ Volumetria sustentada · 850+ tickets · 76 issues · [P][E] · CHAMP:[H][C]
850+ chamados com CSAT satisfatório na era Workforce + HOps (mai → set/
25). 76 issues no Linear desde mar/26 (34% Urgent/High) — CRM em Jira,
fora dessa contagem. Volumetria que resistiu ao mês seguinte. E ao
seguinte.

◯ Estagiário entregando em <30 dias · [I][P] · CHAMP:[P]
Métrica meta do treinamento Knowledge Pills: tempo até primeira PR. Para
o Zorzo, pouco mais de um mês. Eficiência do método mensurada em
comportamento observável de outra pessoa.

[ENCERRAMENTO]
> Excelência sustentável é regime, não pico. Os números acima são meses,
  não dias. Pleno opera nesse regime.
```

### 7.11 · A CONSTANTE · CONSISTÊNCIA

Conteúdo completo já especificado em §6.11. Manter exatamente.

### 7.12 · ACADÊMICO

```
[CARD 1 · TCC]
TCC · nível tese de mestrado
Tema: Arquitetura de softwares que usam IA de forma dinâmica em mercados
líquidos.
Aclamado na defesa. Orientação: Breno Cafeo (IC) ou Juliana Borim.
Classificação verbal do orientador: "disruptivo, com nível de tese de
mestrado."
Chips: [I] [T]Trust in Science

[CARD 2 · IC]
IC · Metaheurísticas em Eng. Elétrica · 2024
Iniciação Científica concluída. Aplicação de metaheurísticas a problemas
da Engenharia Elétrica. Disciplina formal de experimentação controlada
e hipótese estruturada.
Chips: [I] [T]Trust in Science

[CARD 3 · GRADUAÇÃO]
Graduação · PUC-Campinas
Engenharia da Computação. Penúltimo semestre — entrando no último.
Forma-se enquanto contribui em produção: disciplina simultânea, não
trade-off.
Chips: [I] [F] [E]

[BLOCO DESTAQUE · UNICAMP]
MESTRADO EM PLANEJAMENTO · UNICAMP IC
Área pretendida: Engenharia de Software + Visão Computacional.
Contato firmado com professores de referência: Breno Cafeo e Juliana
Borim.
"O time de tech da V4 é um time de pesquisadores." — O mestrado é o
veículo formal pra essa identidade ser produzida, não apenas declarada.
```

### 7.13 · VISÃO FUTURO

```
[CARD 1 — 2027 · 1 ANO]
Profissional:
- Pleno consolidado na V4 Company
- Forma-se em Engenharia da Computação · PUC-Campinas
- Inicia mestrado UNICAMP · Engenharia de Software + Visão Computacional

Pessoal:
- Equilíbrio acadêmico × produto
- PIFE em rotina sustentável

[CARD 2 — 2029 · 3 ANOS]
Profissional:
- Tech Lead em projeto crítico V4
- Especialização: Product Engineer com foco em tech
- Não vibe coder. Profissional que entende arquitetura de software E
  produto na mesma profundidade.
- Mestrado em andamento

Pessoal:
- Equilíbrio pesquisa × produto
- Contribuição cross-time na V4

[CARD 3 — 2031 · 5 ANOS]
Profissional:
- Mestrado concluído (PhD em horizonte)
- Referência interna em Product Engineering — ponte entre time de tech
  (pesquisadores) e produto
- Liderança técnica em iniciativa estratégica alinhada ao CHAMP

Pessoal:
- Estabilidade
- Continuidade no PIFE

[FECHAMENTO]
"O mercado pede Product Engineers que conhecem código e produto na mesma
profundidade. Estou no caminho — V4 Company é meu veículo coletivo."
```

### 7.14 · PLEITO PLENO

```
[BLOCO 1 · ONDE ESTOU]
Software Engineer · Júnior · SLU
Efetivado em nov/2025. 7 meses como Júnior até a AVD.
15 meses totais na V4 Company.
Ownership ativo em 2 produtos: Workforce (owner) e LMS (co-owner com
Matheus Almeida).

[BLOCO 2 · POR QUE PLENO (síntese GROWTH)]
G · 7 times rotacionados, 6 estagiários treinados, 1 PR em <30 dias.
R · Feedback ao líder com maturidade, sob pressão, sem cortar entrega.
O · Workforce sustentado por 10 meses cruzando 4 times. WGO de jun/26
    oficializou.
W · Service Cart entregue na call (FIN-647 · PR #3182).
T · TCC nível mestrado. Mestrado UNICAMP IC em planejamento.
H · 165 PRs · mediana time-to-merge 3,2h · DORA Elite.

Comportamentos observáveis. Não pleito de tempo — pleito de evidência.

[BLOCO 3 · PRETENSÃO SALARIAL]
[gráfico horizontal Glassdoor — ver §6.14]

"Pleiteio R$ 7.500 — abaixo da mediana de Campinas (R$ 7.967), abaixo do
piso Robert Half 2026 (R$ 9.550)."

"Não é o que ofertariam pra um Pleno em outro lugar. É o reconhecimento
justo do que já entrego como Júnior."

"Pleito de razoabilidade, não de retenção."

[BLOCO 4 · O QUE MUDA NO TIME]
Como Pleno, o que se torna possível:
- Ownership formal de produto, não só de feature
- Discovery + refinamento técnico como entregável recorrente, não pontual
- Mentoria estruturada dos estagiários (continuação das Knowledge Pills)
- Decisões de arquitetura como autoria primária, não apoio

[FECHAMENTO]
"Esta é a tese. As provas estão nos quatorze capítulos anteriores."
```

### 7.15 · ASSINATURA

```
[TAGLINE]
"Planejo o que dá e presto atenção no que o plano não controla —
o resto costuma se encaixar no tempo certo."
— LUIGI BERTOLI MENEZES

[METADATA]
Software Engineer · Júnior pleiteando Pleno · V4 Company · jul/2026
github.com/luigimenezes13
Construído por mim. Sem Lovable. Sem v0. Backend próprio em
dossie-backend.vercel.app
```

---

## 8. Personagens da Narrativa

Apareceem como **avatares com iniciais estilizadas** (Gravatar não disponível em nenhum dos 3 e-mails):

| Personagem | Email | Papel | Aparece em | Avatar |
|-----------|-------|-------|-----------|--------|
| **Davi Campos** | davi.campos@v4company.com | Dev sênior CRM · validação externa | Bloco 07 · Ownership · Card "Davi Campos · validação externa" | Círculo 32px, iniciais `DC` em mono vermelho, borda 1px vermelha |
| **Gustavo Zorzo** | gustavo.zorzo@v4company.com | Estagiário Knowledge Pills · subiu 1ª PR em <30 dias | Bloco 05 · GTM · Card "Knowledge Pills" | Círculo 32px, iniciais `GZ` |
| **Matheus Almeida** | almeida.matheus@v4company.com | Co-owner do LMS desde mai/26 | Bloco 07 · Ownership · Card "LMS · Owner → Co-owner" | Círculo 32px, iniciais `MA` |
| Líder do CRM | — | Recebeu Radical Candor do Luigi | Bloco 06 · Radical Candor | **Anônimo** — não citar |
| Líder do Pós-Venda | — | Migração pivotada com ajuda do Luigi | Bloco 07 · Ownership · Card "Pivô da migração" | **Anônimo** — não citar |
| Breno Cafeo | (IC PUC-Campinas) | Possível orientador TCC + alvo UNICAMP | Bloco 09 · T · Bloco 12 · Acadêmico | Sem avatar (só nome) |
| Juliana Borim | — | Possível orientadora TCC + alvo UNICAMP | Bloco 09 · T · Bloco 12 · Acadêmico | Sem avatar (só nome) |

---

## 9. Pesquisas Externas Consolidadas

### 9.1 Pesquisa salarial (Glassdoor · Robert Half · jun/2026)

| Fonte | Cargo | Recorte | Valor | Posição da pretensão R$ 7.500 |
|-------|-------|---------|-------|-------------------------------|
| Glassdoor | Software Engineer Pleno | Campinas/SP P25 | R$ 7.132 | **acima do P25** |
| Glassdoor | Software Engineer Pleno | Campinas/SP Mediana | R$ 7.967 | **abaixo da mediana (-5,9%)** |
| Glassdoor | Software Engineer Pleno | Campinas/SP P75 | R$ 9.333 | abaixo |
| Glassdoor | Software Engineer Pleno | Brasil Mediana | R$ 8.946 | abaixo |
| Robert Half 2026 | Desenvolvedor Full-Stack Pleno | Brasil (piso) | R$ 9.550 | **abaixo do piso (-21,5%)** |
| Robert Half 2026 | Desenvolvedor Full-Stack Pleno | Brasil (teto) | R$ 15.900 | muito abaixo |

**Enquadramento aprovado (decisão do Luigi):** "Pretensão abaixo da mediana porque é o reconhecimento justo do que já faço como Júnior, não a oferta pra um Pleno em outro lugar. Pleito de razoabilidade, não de retenção."

### 9.2 Big Numbers GitHub (`luigimenezes13`)

```
Período coberto:     15 meses (mar/2025 → jun/2026)
PRs totais:          212
PRs merged:          165
Merge rate:          78%
PRs open:            2
PRs revisados:       273 (code reviews)

Linhas adicionadas:  +62.372
Linhas removidas:    -10.730
Linhas líquidas:     +51.642
Linhas movimentadas: 73.102

PR Maturity:
  Mediana time-to-merge:  3,2 horas
  P25:                    0,2h
  P75:                    29,5h
  PRs merged em <24h:     70% (116 PRs)
  PRs merged em <72h:     86% (142 PRs)
  Mediana tamanho/PR:     142 linhas
  Maior PR:               6.542 linhas

Top repos:
  V4-Company/v4company-backend       61 PRs  +17.283
  V4-Company/v4company-frontend-v4   33 PRs  +7.991
  V4-Company/mars-workforce          20 PRs  +6.008
  V4-Company/mars-workforce-frontend  9 PRs
  V4-Company/mars-sales-frontend      8 PRs  +2.668  (CRM)
  V4-Company/mars-sales               7 PRs  +3.306  (CRM)
  V4-Company/mars-appointments        3 PRs
  V4-Company/mars-mktlab-frontend     3 PRs
  V4-Company/mars-contracts           2 PRs
```

### 9.3 Big Numbers Linear (desde mar/2026)

```
Período coberto:   4 meses
Total issues:      76 atribuídas

Por time:
  SOS:     30   (Service Operations / Pós-Venda)
  FIN:     21   (Financeiro)
  REVMON:  18
  REVACQ:   7

Por prioridade:
  Urgent:        8   (10,5%)
  High:         18   (23,7%)
  Medium:       16
  Low:           3
  No priority:  31
  Total P0/P1:  26   (34%)

[CRM excluído da contagem — está em Jira]
```

### 9.4 PRs âncora pré-selecionados (Service Cart / FIN-647)

| PR | Título | Data | Estado |
|----|--------|------|--------|
| [#3182](https://github.com/V4-Company/v4company-backend/pull/3182) | **[FIN-647] Pagamento na call** — marco simbólico | 04/jun/2026 | merged |
| [#3221](https://github.com/V4-Company/v4company-backend/pull/3221) | feat(payments): address formatting for Pagar.me + retry | 11/jun/2026 | merged |
| [#3205](https://github.com/V4-Company/v4company-backend/pull/3205) | UpfrontPaymentPaidEvent handling | 08/jun/2026 | merged |
| [#3165](https://github.com/V4-Company/v4company-backend/pull/3165) | UpsertOfferUpfrontPayment + PaymentChargeProvider | 29/mai/2026 | merged |
| [#3164](https://github.com/V4-Company/v4company-backend/pull/3164) | Payment entities + Session com customer/franchise | 29/mai/2026 | merged |

Total da série FIN-647: ≈13 PRs entre 28/mai e 11/jun/2026.

---

## 10. Mapeamento Dados → Backend

### 10.1 Tipos novos / atualizações no `src/types/api.ts`

**Updates necessários:**

```ts
// 1. DimensaoCultural — alinhar com Red Book
export type DimensaoCultural =
  | 'Professional'  // RED BOOK (substitui 'Profissional' / 'Pessoal')
  | 'Intelectual'
  | 'Fitness'        // RED BOOK (substitui 'Físico')
  | 'Emocional';     // RED BOOK (substitui 'Espiritual')

// 2. Senioridade atual e proposta
export interface Colaborador {
  // ... (mantém campos atuais)
  senioridade?: 'Júnior';  // atualizar de 'Estagiário' para 'Júnior'
}

export interface Objetivo {
  // ... (mantém)
  cargoProposto: 'Software Engineer Pleno';
  senioridadeProposta: 'Pleno';
  modeloContratacao: 'SLU';
}

// 3. Adicionar campo de tagline pessoal
export interface Colaborador {
  taglinePessoal?: string;  // "Planejo o que dá..."
}

// 4. Adicionar campo CHAMP nos itens de iniciativa/realização
export type ObjetivoCHAMP = 'Consumer' | 'Hosted' | 'Revenue' | 'Milestone' | 'Perpetuity';

// 5. Adicionar interface para Pleito (substitui Efetivacao)
export interface PleitoPromocao {
  cargoAtual: string;          // "Software Engineer · Júnior"
  cargoPretendido: string;     // "Software Engineer Pleno"
  modeloAtual: ModeloContratacao;
  tempoNivel: string;          // "7 meses como Júnior"
  tempoEmpresa: string;        // "15 meses na V4"
  dataAvd: string;             // "julho/2026"
  pretensao: PretensaoSalarial;
  oQueMuda: string[];          // Bloco 4 do Pleito
}
```

**Campos a remover:**
- `realizacoesAcademicas.bolsasEPesquisas` — remover entrada de "Bolsa Visão Computacional" (decisão do Luigi)
- `efetivacao` — substituir por `pleitoPromocao`

### 10.2 Atualizações no JSON do dossiê (DB)

```jsonc
{
  "colaborador": {
    "nome": "Luigi Bertoli Menezes",
    "idade": 22,
    "funcaoAtual": "Software Engineer · Júnior",
    "dataInicio": "março/2025",
    "tempoV4": "15 meses",
    "senioridade": "Júnior",
    "taglinePessoal": "Planejo o que dá e presto atenção no que o plano não controla — o resto costuma se encaixar no tempo certo.",
    "curso": {
      "nome": "Engenharia da Computação",
      "semestre": "9º semestre (penúltimo)",
      "faculdade": "PUC-Campinas"
    }
  },
  "objetivo": {
    "cargoProposto": "Software Engineer Pleno",
    "senioridadeProposta": "Pleno",
    "modeloContratacao": "SLU",
    "empresa": "V4 Company",
    "descricao": "Pleito de promoção para Pleno na AVD de julho/2026..."
  },
  "trajetoria": {
    "areas": [
      { "nome": "Produto", "projeto": "Finance", "periodo": "mar/25 → mai/25" },
      { "nome": "Atendimento", "projeto": "Workforce + HOps", "periodo": "mai/25 → set/25" },
      { "nome": "Desenvolvimento", "projeto": "Contratos", "periodo": "set/25 → nov/25" },
      { "nome": "Desenvolvimento", "projeto": "Financeiro (1ª)", "periodo": "nov/25 → fev/26" },
      { "nome": "Desenvolvimento", "projeto": "CRM", "periodo": "fev/26 → abr/26" },
      { "nome": "Desenvolvimento", "projeto": "Pós-Venda", "periodo": "abr/26 → jun/26" },
      { "nome": "Desenvolvimento", "projeto": "Financeiro (atual)", "periodo": "jun/26 → presente" }
    ],
    "fitCultural": {
      "pife": [
        { "dimensao": "Professional", "exemploPratico": "..." },
        { "dimensao": "Intelectual", "exemploPratico": "..." },
        { "dimensao": "Fitness", "exemploPratico": "..." },
        { "dimensao": "Emocional", "exemploPratico": "..." }
      ],
      "growth": [
        { "principio": "GTM Fast To Learn", "exemploPratico": "..." },
        { "principio": "Radical Candor", "exemploPratico": "..." },
        { "principio": "Ownership", "exemploPratico": "..." },
        { "principio": "Working Backwards", "exemploPratico": "..." },
        { "principio": "Trust in Science", "exemploPratico": "..." },
        { "principio": "High Standards Frugal Execution", "exemploPratico": "..." }
      ]
    }
  },
  "realizacoesProfissionais": {
    "descricao": "...",
    "destaques": [...],
    "metricas": [
      { "valor": 165, "atividade": "PRs", "escopo": "fullstack", "tempo": "15 meses" },
      { "valor": "+62.372", "atividade": "linhas de código", "escopo": "fullstack", "tempo": "15 meses" },
      { "valor": 273, "atividade": "code reviews", "escopo": "fullstack" },
      { "valor": "3.2h", "atividade": "mediana time-to-merge", "escopo": "fullstack" },
      { "valor": 76, "atividade": "issues resolvidos", "escopo": "fullstack", "tempo": "mar/26 → presente" },
      { "valor": "850+", "atividade": "chamados resolvidos com CSAT satisfatório", "escopo": "Help Desk", "tempo": "mai/25 → set/25" }
    ]
  },
  "realizacoesAcademicas": {
    "performanceAcademica": "Engenharia da Computação · PUC-Campinas · penúltimo semestre. TCC aclamado, classificado pelo orientador como 'disruptivo, com nível de tese de mestrado'.",
    "bolsasEPesquisas": [
      { "tipo": "Iniciação Científica", "titulo": "Metaheurísticas em Eng. Elétrica", "instituicao": "PUC-Campinas", "status": "Concluído", "periodo": "2024" }
    ]
  },
  "iniciativasEstrategicas": [
    { "projeto": "Workforce (Owner)", "impacto": "Crítico", "periodo": "set/25 → presente", "area": "Desenvolvimento", "descricao": "Ownership contínuo cruzando 4 times. Reconhecimento oficial WGO jun/26." },
    { "projeto": "LMS (Owner → Co-owner)", "impacto": "Alto", "periodo": "nov/25 → presente", "area": "Desenvolvimento", "descricao": "Owner solo nov/25→mai/26; co-owner com Matheus Almeida desde mai/26." },
    { "projeto": "Service Cart · FIN-647", "impacto": "Crítico", "periodo": "mai/26 → jun/26", "area": "Desenvolvimento", "descricao": "Integração Pagar.me (Pix/Boleto/Cartão) — 13 PRs. Pagamento na call entregue (PR #3182)." },
    { "projeto": "Knowledge Pills", "impacto": "Alto", "periodo": "abr/26 → jun/26", "area": "Educação", "descricao": "Treinamento DDD + Clean Arch para 6 estagiários. Gustavo Zorzo: 1ª PR em <30 dias." },
    { "projeto": "Pivô da Migração Pós-Venda", "impacto": "Alto", "periodo": "abr/26 → jun/26", "area": "Desenvolvimento", "descricao": "Liderança nova com pouco contexto V4. Carreguei tasks complexas + discovery + refinamento." },
    { "projeto": "Radical Candor cross-area", "impacto": "Médio", "periodo": "fev/26 → abr/26", "area": "Desenvolvimento", "descricao": "Feedback ao líder doente + entrega task cross-area (mars-sales + plataforma)." }
  ],
  "visaoFuturo": {
    "umAno": {
      "profissional": "Pleno consolidado · forma-se PUC-Campinas · inicia mestrado UNICAMP",
      "pessoal": "Equilíbrio acadêmico × produto · PIFE rotina sustentável"
    },
    "tresAnos": {
      "profissional": "Tech Lead · Product Engineer com foco em tech (não vibe coder) · mestrado em andamento",
      "pessoal": "Equilíbrio pesquisa × produto · contribuição cross-time V4"
    },
    "cincoAnos": {
      "profissional": "Mestrado concluído (PhD em horizonte) · referência em Product Engineering · liderança técnica alinhada ao CHAMP",
      "pessoal": "Estabilidade · continuidade no PIFE"
    }
  },
  "conclusao": "Esta é a tese. As provas estão nos quatorze capítulos anteriores."
}
```

---

## 11. Acessibilidade e Performance

### 11.1 Acessibilidade

- **`prefers-reduced-motion`**: desabilita TODOS os pins de scroll, SplitText, canvas WebGL, counter animations. Substitui por fade-in CSS simples (300ms).
- **`prefers-color-scheme`**: respeitado, mas o tema é monocromático dark — não muda significativamente em light.
- **Semântica**: cada citação Red Book como `<blockquote><cite>`. Cards como `<article>`. Letras gigantes como `aria-hidden="true"` (decorativas).
- **Navegação por teclado**: todos os links acessíveis. Cards interativos com `tabIndex={0}`, `role="button"`, e estados `focus-visible:ring-4`.
- **Skip links**: link "pular para o conteúdo" no topo (`<a href="#main">`).
- **ARIA labels**: imagens decorativas com `aria-hidden`; links externos com `aria-label` descritivo.
- **Contraste**: testar todos os pares de cor contra WCAG AA (mínimo 4.5:1 para texto normal). Branco 60% sobre `#0a0000` é OK; branco 30% pode falhar — usar só em microcopy decorativa.

### 11.2 Performance

- **Bundle total alvo**: < 250kb gzip (atual: ~180kb; +GSAP +Lenis +Splitting = ~210kb gzip).
- **Lazy loading**: GSAP plugins (ScrollTrigger, SplitText) só após `DOMContentLoaded`.
- **Canvas Hero**: pausado fora de viewport (`IntersectionObserver`); densidade 50% no mobile; desabilitado se `prefers-reduced-motion`.
- **Fontes**: `font-display: swap` em todas. Preload das críticas (Fraunces 500, Montserrat 600).
- **Imagens**: webp + fallback jpg. `loading="eager"` só na foto do Luigi (LCP). Demais com `loading="lazy"`.
- **Lenis tuning**: `lerp: 0.08` (já é sutil). Desabilitar em touch devices nativos.
- **CSS**: Tailwind purge ativo. `@layer` em vez de `!important`.

### 11.3 Métricas-alvo (Core Web Vitals)

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **INP** (Interaction to Next Paint): < 200ms

---

## 12. Roadmap de Implementação

### 12.1 Fase 5 — Tarefas em ordem sugerida

| # | Tarefa | Tempo estimado | Dependência |
|---|--------|----------------|-------------|
| 1 | **Substituir `profile.jpg`** com a nova foto (PNG → JPG, qualidade alta) | 5 min | — |
| 2 | **Atualizar tipos** (`src/types/api.ts`) — DimensaoCultural, Pleito, etc | 30 min | — |
| 3 | **Atualizar backend** — schema SQLite + JSON do dossiê com dados novos | 1h | #2 |
| 4 | **Adicionar fontes** (Google Fonts: Fraunces, Instrument Serif, JetBrains Mono) | 10 min | — |
| 5 | **Instalar libs** (`npm i gsap @studio-freight/lenis splitting`) | 5 min | — |
| 6 | **Setup global** — `LenisProvider`, GSAP plugins, `prefers-reduced-motion` hook | 1h | #5 |
| 7 | **Reescrever Design Tokens** (`tailwind.config.js` + `index.css`) | 1h | #4 |
| 8 | **Apagar componentes antigos** (15 .tsx) — backup em branch separada | 10 min | — |
| 9 | **Implementar bloco 01 · HERO** (canvas + SplitText + sticky photo) | 4h | #5, #6, #7 |
| 10 | **Implementar bloco 02 · MANIFESTO** (pin + 3 camadas + citação) | 3h | #9 |
| 11 | **Implementar bloco 03 · TIMELINE** (horizontal pin + 7 nós + counter) | 5h | #9 |
| 12 | **Implementar bloco 04 · OS NÚMEROS** (3 painéis + counter animation) | 3h | #9 |
| 13 | **Implementar template GROWTH** (Letra + Citação + Cards + Encerramento) | 4h | #9 |
| 14 | **Implementar 6 capítulos GROWTH** (05-10, usando template) | 6h (1h cada) | #13 |
| 15 | **Implementar bloco 11 · A CONSTANTE** (4 atos + SplitText) | 3h | #9 |
| 16 | **Implementar bloco 12 · ACADÊMICO** | 2h | #9 |
| 17 | **Implementar bloco 13 · VISÃO FUTURO** | 2h | #9 |
| 18 | **Implementar bloco 14 · PLEITO PLENO** (gráfico salarial + 4 blocos) | 3h | #9 |
| 19 | **Implementar bloco 15 · ASSINATURA** | 1h | #9 |
| 20 | **Avatares de personagens** (componente `CharacterAvatar` reusável) | 1h | #13 |
| 21 | **Chips PIFE + CHAMP** (componente `MetaChip` reusável) | 1h | #13 |
| 22 | **QA acessibilidade** (axe-core, teclado, reduced-motion, contraste WCAG) | 3h | #19 |
| 23 | **QA performance** (Lighthouse, LCP/CLS/INP) | 2h | #19 |
| 24 | **QA mobile** (iPhone Safari, Android Chrome) | 2h | #19 |
| 25 | **Deploy** (vercel preview → produção) | 30 min | #22, #23, #24 |

**Total estimado: ~50 horas de implementação.**

### 12.2 Critérios de "pronto" por bloco

Cada bloco está "pronto" quando:

- [x] Layout fiel ao especificado em §6
- [x] Conteúdo exato de §7 (sem improvisação de prosa)
- [x] Animações implementadas conforme §6 + §11
- [x] Mobile funciona (sem pin onde indicado)
- [x] `prefers-reduced-motion` testado (sem motion-induced nausea)
- [x] Lighthouse acessibilidade ≥ 95
- [x] Sem `console.error` no browser

### 12.3 Branch strategy

```
main                              ← produção atual
├── feature/dossie-redesign-2026 ← branch principal
│   ├── chore/photo-update       ← apenas troca de foto
│   ├── chore/deps-update        ← adiciona GSAP/Lenis/Splitting
│   ├── chore/types-update       ← atualiza types/api.ts
│   ├── feat/hero
│   ├── feat/manifesto
│   ├── feat/timeline
│   ├── feat/numbers
│   ├── feat/growth-template
│   ├── feat/growth-g
│   ├── feat/growth-r
│   ├── feat/growth-o
│   ├── feat/growth-w
│   ├── feat/growth-t
│   ├── feat/growth-h
│   ├── feat/constante
│   ├── feat/academico
│   ├── feat/visao-futuro
│   ├── feat/pleito
│   └── feat/assinatura
└── ...
```

Cada branch vira PR pequeno + deploy preview na Vercel para revisão visual incremental.

---

## 13. Referências

### 13.1 Documentos do projeto consultados

- `portfolio-dossie/src/types/api.ts` — Tipos atuais
- `portfolio-dossie/src/App.tsx` — Estrutura atual
- `portfolio-dossie/src/components/Header.tsx` — Hero atual
- `portfolio-dossie/src/components/TrajetoriaSection.tsx` — Onde PIFE × GROWTH vivem hoje
- `portfolio-dossie/src/constants/design-system.ts` — Design system atual
- `portfolio-dossie/README.md` — Design System documentado
- `dossie-backend/src/database/migrations/003_restructure_dossie.ts` — Schema atual

### 13.2 Red Book V4 (set/2025) — páginas-chave

| Página | Conteúdo extraído |
|--------|-------------------|
| 01 | Citação de abertura ("Alinhamento cultural...") |
| 02 | Visão BHAG (Forbes 2000), Problem to Solve |
| 04 | G.R.O.W.T.H. nomeado + CHAMP introduzido |
| 05 | CHAMP completo (C, H, A, M, P) |
| 06 | Consumers vs Clientes · Lógica estratégica |
| 07 | Culture as a System |
| 08 | PIFE introduzido · P · Professional |
| 09 | Looking Ahead Professional · I · Intelectual |
| 10 | I · Intelectual aprofundado |
| 11 | F · Fitness/Físico |
| 12 | E · Emocional |
| 14 | **GROWTH completo (G, R, O, W, T, H)** |
| 15 | G · GTM detalhado |
| 16 | G · O que esperamos / o que não aceitamos |
| 17 | G · Micro-comportamentos · Anti-padrões |
| 18 | R · Radical Candor detalhado |
| 19 | R · Práticas e anti-padrões |
| 21 | O · Ownership detalhado |
| 23 | W · Working Backwards detalhado |
| 25 | W · Anti-padrões |
| 26 | T · Trust in Science detalhado |
| 28 | T · A/B test exemplo |
| 29 | H · High Standards · Frugal Execution |

### 13.3 Pesquisas externas

- [Salário Software Engineer Pleno Campinas — Glassdoor](https://www.glassdoor.com.br/Sal%C3%A1rios/campinas-software-engineer-pleno-sal%C3%A1rio-SRCH_IL.0,8_IC2490130_KO9,32.htm)
- [Salário Software Engineer Pleno Brasil — Glassdoor](https://www.glassdoor.com.br/Sal%C3%A1rios/software-engineer-pleno-sal%C3%A1rio-SRCH_KO0,23.htm)
- [Desenvolvedor Full-Stack Pleno — Guia Salarial Robert Half 2026](https://www.roberthalf.com/br/pt/vagas-detalhes/desenvolvedora-full-stack-pleno)
- [Tendências em Tecnologia — Guia Salarial 2026 Robert Half](https://www.roberthalf.com/br/pt/insights/guia-salarial/tecnologia)
- [DORA State of DevOps Report (benchmark Elite top 4%)](https://dora.dev/)

### 13.4 PRs âncora (GitHub V4-Company)

- [#3182 · FIN-647 · Pagamento na call](https://github.com/V4-Company/v4company-backend/pull/3182)
- [#3221 · Pagar.me address](https://github.com/V4-Company/v4company-backend/pull/3221)
- [#3205 · UpfrontPaymentPaidEvent](https://github.com/V4-Company/v4company-backend/pull/3205)
- [#3165 · UpsertOfferUpfrontPayment](https://github.com/V4-Company/v4company-backend/pull/3165)
- [#3164 · Payment entities](https://github.com/V4-Company/v4company-backend/pull/3164)

### 13.5 Decisões registradas (histórico de brainstorm)

| Data | Decisão | Por quê |
|------|---------|---------|
| 21/jun/2026 | Approach "Award-winning Showcase" mantendo paleta vermelho | Cinematografia + identidade preservada |
| 21/jun/2026 | GSAP + ScrollTrigger (não Framer Motion) | Padrão Awwwards, timelines complexas |
| 21/jun/2026 | Reescrever 15 componentes do zero | Liberdade pra redesenhar sem amarras |
| 21/jun/2026 | Curar agressivamente seções (15 → 15 com reestrutura) | Foco narrativo |
| 21/jun/2026 | PIFE × GROWTH como espinha dorsal narrativa | Alinhamento Red Book |
| 21/jun/2026 | Mudança de propósito: efetivação → promoção Pleno | Contexto do usuário |
| 21/jun/2026 | CHAMP como chip lateral (não capítulo) | Evitar amarração forçada |
| 21/jun/2026 | Citações Red Book abrindo cada GROWTH | Ritmo editorial + domínio cultural |
| 21/jun/2026 | UNICAMP IC mestrado citado pelo nome | Concretude + ambição real |
| 21/jun/2026 | PUC-Campinas: "primeiro do time a formar enquanto contribui" (suavizado) | Sem soberba |
| 21/jun/2026 | Knowledge Pills: elogiar Zorzo nominalmente | Reconhecimento devolvido |
| 21/jun/2026 | Avatares: iniciais estilizadas (Gravatar não disponível) | Consistência visual |
| 21/jun/2026 | Pretensão R$ 7.500 enquadrada como razoabilidade | Decisão narrativa do Luigi |
| 21/jun/2026 | Stack tech NÃO destacada (só DDD/Clean Arch/EDA) | O que persistiu nos 7 times |
| 21/jun/2026 | Consistência como interlúdio narrativo (bloco 11) | Adição final do Luigi |
| 21/jun/2026 | Linear breakdown por time removido (sucinto) | Decisão do Luigi |
| 21/jun/2026 | PIFE dimensão E = Emocional (não Espiritual) | Alinhamento Red Book |
| 21/jun/2026 | Product Engineer com foco em tech na Visão Futuro | Adição do Luigi |
| 21/jun/2026 | Tagline pessoal autoral usada em Assinatura | Identidade autoral |

---

## Fim do documento

Próxima fase: **Fase 5 — Implementação**. Começar pelo passo #1 (substituir foto) e seguir o roadmap em §12.1.
