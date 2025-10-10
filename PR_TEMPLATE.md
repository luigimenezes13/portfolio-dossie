# [REFACTOR] Padronização do Design System - [Nome do Componente]

## 📋 Descrição

Este PR implementa as diretrizes de padronização e consistência do Design System conforme documentado em `PADRONIZACAO.md`.

### Componente(s) Afetado(s):
- [ ] ObjetivoSection
- [ ] TrajetoriaSection
- [ ] AtuacaoSection
- [ ] IniciativasSection
- [ ] PotencialSection
- [ ] ValorizacaoSection
- [ ] ConclusaoSection
- [ ] Header
- [ ] Outros: _____________

---

## 🎯 Objetivos Alcançados

### ✅ Padronizações Aplicadas:

#### Cards
- [ ] Substituído classes inline por `.card-base`, `.card-primary` ou `.card-compact`
- [ ] Removido gradientes e borders duplicados
- [ ] Aplicado hover effects padronizados (scale 1.02/1.05/1.01)
- [ ] Unificado border-radius (rounded-xl/2xl/3xl)

#### Badges
- [ ] Substituído lógica inline por classes `.badge-*`
- [ ] Aplicado helper `getCriticalityConfig()` ou `getStatusConfig()`
- [ ] Removido código duplicado de mapeamento de cores

#### Ícones
- [ ] Padronizado tamanhos (w-7/6/5/4 h-7/6/5/4)
- [ ] Aplicado cores consistentes (text-primary, text-neutral-400)
- [ ] Removido variações de tamanho não padronizadas

#### Cores
- [ ] **Removido todas as referências a `blue`, `sky`, `cyan`**
- [ ] Substituído por cores da paleta aprovada (primary, accent-*, info/purple)
- [ ] Verificado que estados usam cores semânticas corretas

#### Spacing
- [ ] Aplicado gaps padronizados (gap-4/6/12)
- [ ] Aplicado padding padronizado (p-4/6/8)
- [ ] Aplicado margin-bottom padronizado (mb-6/10/12)

#### Tipografia
- [ ] Aplicado hierarquia de títulos (h1-h4)
- [ ] Padronizado cores de texto (neutral-200/300/400)
- [ ] Aplicado line-height consistente (leading-relaxed)

#### Transições
- [ ] Aplicado durações padronizadas (200/300/500/1000)
- [ ] Removido valores customizados desnecessários

---

## 📊 Métricas de Melhoria

### Linhas de Código:
- **Antes**: ___ linhas
- **Depois**: ___ linhas
- **Redução**: ___% 

### Classes Inline:
- **Antes**: ___ ocorrências
- **Depois**: ___ ocorrências
- **Redução**: ___%

### Lógica Duplicada:
- **Antes**: ___ funções/arrays duplicados
- **Depois**: ___ (usando helpers centralizados)

---

## 🖼️ Screenshots

### Antes:
<!-- Cole screenshot do estado anterior -->

### Depois:
<!-- Cole screenshot do estado atual -->

### Comparação:
<!-- Se houver mudanças visuais significativas, descreva-as -->
- [ ] Sem mudanças visuais (apenas refatoração de código)
- [ ] Pequenas melhorias de consistência visual
- [ ] Mudanças visuais significativas (descrever): __________

---

## 🧪 Testes Realizados

### Funcionalidade:
- [ ] Componente renderiza corretamente
- [ ] Props são passadas e funcionam
- [ ] Estados interativos funcionam (hover, click)
- [ ] Animações funcionam suavemente

### Responsividade:
- [ ] Mobile (320px-640px) - Testado em _______
- [ ] Tablet (640px-1024px) - Testado em _______
- [ ] Desktop (1024px+) - Testado em _______
- [ ] Large Desktop (1440px+) - Testado em _______

### Navegadores:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (se disponível)

### Acessibilidade:
- [ ] Contraste de cores adequado (WCAG AA)
- [ ] Textos legíveis
- [ ] Elementos interativos acessíveis

---

## 🔍 Checklist de Revisão de Código

### Qualidade:
- [ ] Código segue convenções do TypeScript
- [ ] Sem `console.log` ou código de debug
- [ ] Imports organizados e otimizados
- [ ] Sem código comentado desnecessário

### Design System:
- [ ] Usa constantes de `src/constants/design-system.ts`
- [ ] Não usa cores fora da paleta
- [ ] **CRÍTICO: Sem `blue`, `sky`, `cyan` no código**
- [ ] Classes customizadas seguem nomenclatura padrão

### Performance:
- [ ] Sem re-renders desnecessários
- [ ] Animações performáticas (GPU accelerated)
- [ ] Sem cálculos pesados no render

### Documentação:
- [ ] Comentários onde necessário
- [ ] Código autodocumentado (nomes descritivos)
- [ ] TSDoc em funções complexas (se aplicável)

---

## 🚨 Mudanças Críticas (Breaking Changes)

<!-- Se houver mudanças que quebram compatibilidade, liste aqui -->

- [ ] Não há breaking changes
- [ ] Há breaking changes (descrever abaixo):

**Descrição**:
```
[Descrever mudanças que podem afetar outros componentes ou funcionalidades]
```

**Plano de Migração**:
```
[Se necessário, descrever como outros componentes devem ser atualizados]
```

---

## 🔗 Arquivos Modificados

### Componentes:
- `src/components/[NomeDoComponente].tsx`

### Constantes/Utils (se aplicável):
- `src/constants/design-system.ts`

### Estilos (se aplicável):
- `src/index.css`
- `tailwind.config.js`

### Outros:
- [ ] Nenhum outro arquivo afetado
- [ ] Outros arquivos (listar): __________

---

## 📝 Notas Adicionais

<!-- Informações extras, contexto, decisões de design, etc -->

### Decisões de Design:
```
[Por que certas escolhas foram feitas, trade-offs considerados, etc]
```

### TODOs Futuros (se aplicável):
- [ ] [Tarefa futura 1]
- [ ] [Tarefa futura 2]

### Dependências:
- [ ] Este PR depende de: #___
- [ ] Este PR bloqueia: #___
- [ ] Sem dependências

---

## 🎓 Aprendizados

<!-- O que você aprendeu durante esta refatoração? -->

```
[Compartilhe insights, dificuldades encontradas, soluções criativas, etc]
```

---

## ✅ Checklist Final (Antes de Merge)

### Código:
- [ ] Código revisado por pelo menos 1 pessoa
- [ ] Todos os comentários de revisão endereçados
- [ ] CI/CD passa sem erros
- [ ] Sem warnings do ESLint
- [ ] Sem erros do TypeScript

### Testes:
- [ ] Todos os testes passam
- [ ] Testes manuais realizados
- [ ] Sem regressões visuais

### Documentação:
- [ ] CHANGELOG atualizado (se aplicável)
- [ ] README atualizado (se necessário)
- [ ] Design System docs atualizados (se novos padrões)

### Deploy:
- [ ] Branch atualizada com main/master
- [ ] Conflitos resolvidos
- [ ] Pronto para merge

---

## 🔗 Links de Referência

- [Plano de Padronização](./PADRONIZACAO.md)
- [Design System](./DESIGN_SYSTEM.md)
- [Guia Rápido](./QUICK_REFERENCE.md)
- [Exemplos de Refatoração](./EXEMPLOS_REFATORACAO.md)

---

## 👥 Revisores Sugeridos

@[username1] - Revisor técnico
@[username2] - Revisor de design
@[username3] - Revisor de QA

---

**Tipo de PR**: 
- [ ] feat (nova feature)
- [x] refactor (refatoração sem mudança de funcionalidade)
- [ ] fix (correção de bug)
- [ ] style (mudanças de estilo/formatação)
- [ ] docs (apenas documentação)
- [ ] perf (melhoria de performance)
- [ ] test (adição/correção de testes)

**Prioridade**:
- [ ] 🔴 Alta (bloqueante)
- [x] 🟡 Média (importante)
- [ ] 🟢 Baixa (nice to have)

---

<sub>Template baseado em [PADRONIZACAO.md](./PADRONIZACAO.md) | Versão 1.0</sub>

