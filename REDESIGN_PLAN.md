# PLANO DE REESTRUTURACAO - AURISOLUTIONS SITE

> **Status:** Aguardando Aprovacao
> **Data:** 19 de Janeiro de 2026
> **Baseado em:** Pesquisa de tendencias Awwwards, SaaSFrame, DesignRush (2025-2026)

---

## PARTE 1: DIAGNOSTICO DO PROBLEMA

### O que esta errado no design atual:

1. **Hero generico** - Texto centralizado + gradientes = template de 2022
2. **Falta de personalidade** - Poderia ser qualquer empresa de tech
3. **Sem demonstracao de produto** - Nao mostra as interfaces reais
4. **Animacoes decorativas** - Orbs flutuantes nao comunicam valor
5. **Bento Grid superficial** - Cards estaticos sem interatividade
6. **Ausencia de narrativa** - Nao conta a historia da AuriSolutions

---

## PARTE 2: REFERENCIAS DE CLASSE MUNDIAL

### Sites que vou usar como inspiracao:

| Site | O que absorver |
|------|----------------|
| [Linear.app](https://linear.app) | Tipografia editorial, motion design, minimalismo premium |
| [Ramp.com](https://ramp.com) | White space, ilustracoes financeiras, data viz |
| [Liveblocks.io](https://liveblocks.io) | Scroll storytelling, renders 3D-style, cores equilibradas |
| [Clerk.com](https://clerk.com) | Layout modular, iconografia, developer-friendly |
| [Firecrawl.dev](https://firecrawl.dev) | Personalidade ousada, animacoes bold, cor como identidade |
| [V7labs.com](https://v7labs.com) | Motion graphics, hierarquia de features, enterprise + humano |

### Tendencias 2026 que vou aplicar:

1. **Active Bento Grids** - Tiles que expandem, mostram video, revelam dados no hover
2. **Story-Driven Hero** - Narrativa problema → solucao em vez de tagline generica
3. **Immersive Product Previews** - Screenshots reais das interfaces dos produtos
4. **Split-Screen Layouts** - Divisao visual para antes/depois, problema/solucao
5. **Playful Typography** - Serifa bold para headlines, sans para corpo
6. **Micro Animations com Proposito** - Cada animacao comunica algo, nao e decorativa

---

## PARTE 3: NOVA DIRECAO DE ARTE

### Nome do conceito: "Precision Craft"

A AuriSolutions nao e uma startup qualquer - e um estudio de produtos digitais com solucoes maduras em producao. O design deve transmitir:

- **Maturidade tecnica** (nao somos amadores)
- **Sofisticacao visual** (nivel Linear/Stripe)
- **Confianca** (nossos produtos funcionam)
- **Personalidade** (nao somos mais um template)

### Paleta de Cores (Revisada)

```
PRIMARIAS
---------
Background:      #050505   (preto profundo, quase OLED)
Surface-1:       #0A0A0A   (cards primarios)
Surface-2:       #111111   (cards elevados)
Surface-3:       #1A1A1A   (hover states)

ACENTO PRINCIPAL
----------------
AuriSolutions Violet:    #6C47FF   (mais saturado, menos generico)
Violet Glow:     #8B6AFF   (versao light para gradientes)

ACENTOS SECUNDARIOS (por produto)
---------------------------------
Acolheduc:       #10B981   (verde educacao)
NexusVR:         #3B82F6   (azul imersao)
Lumina:          #F59E0B   (amber hospitalidade)

TEXTO
-----
Text Primary:    #FAFAFA
Text Secondary:  #888888
Text Muted:      #555555

BORDAS
------
Border Default:  #1F1F1F
Border Hover:    #2A2A2A
Border Active:   #6C47FF (violet)
```

### Tipografia

```
HEADLINES (Display)
-------------------
Font: "Instrument Serif" ou "Playfair Display"
Peso: 500-600
Uso: Hero headlines, titulos de secao

SUBHEADLINES
------------
Font: "Inter" ou "Satoshi"
Peso: 600
Uso: Subtitulos, labels de produtos

CORPO
-----
Font: "Inter"
Peso: 400
Line-height: 1.7
Uso: Paragrafos, descricoes

MONOSPACE (codigo/tech)
-----------------------
Font: "JetBrains Mono" ou "Fira Code"
Uso: Badges tecnicos, snippets
```

---

## PARTE 4: ESTRUTURA DE PAGINA (Wireframe Detalhado)

### SECAO 1: HERO (100vh)

**Conceito:** "The Studio That Ships"

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER (fixo, blur no scroll)                              │
│  [Logo AuriSolutions]          [Produtos] [Sob Medida] [Contato]    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │   Badge: "3 produtos em producao"                   │   │
│  │                                                     │   │
│  │   HEADLINE (Instrument Serif, 72px):                │   │
│  │   "Produtos digitais que                            │   │
│  │    ja transformam mercados"                         │   │
│  │                                                     │   │
│  │   Subline (Inter, 20px, muted):                     │   │
│  │   "Nao vendemos promessas. Entregamos solucoes      │   │
│  │    rodando em producao. Escolha um produto ou       │   │
│  │    solicite um desenvolvimento exclusivo."          │   │
│  │                                                     │   │
│  │   [Ver Produtos]  [Sob Medida →]                    │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  PRODUCT PREVIEW CAROUSEL (Screenshots reais)       │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐               │   │
│  │  │Acolheduc│ │ NexusVR │ │ Lumina  │               │   │
│  │  │ [img]   │ │ [img]   │ │ [img]   │               │   │
│  │  └─────────┘ └─────────┘ └─────────┘               │   │
│  │        (scroll horizontal, parallax sutil)          │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  Trust bar: "TypeScript · React · Supabase · Docker"        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Animacoes:**
- Headline com reveal por palavra (stagger 0.1s)
- Product cards com parallax no scroll
- Trust bar fade-in apos 1.5s

---

### SECAO 2: PRODUTOS (Active Bento Grid)

**Conceito:** Cada produto e um universo - o grid revela profundidade no hover

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   "Nossos Produtos"                                         │
│   Headline: "Solucoes completas, testadas, em producao"    │
│                                                             │
│   ┌───────────────────────────────┬─────────────────────┐   │
│   │                               │                     │   │
│   │  ACOLHEDUC                    │     NexusVR         │   │
│   │  ──────────                   │     ────────        │   │
│   │  Gestao Escolar               │     Educacao VR     │   │
│   │  Inteligente                  │                     │   │
│   │                               │  [Preview 3D]       │   │
│   │  • Multi-tenant               │                     │   │
│   │  • IA para pedagogia          │  "Aprenda dentro    │   │
│   │  • Dashboard RTI              │   da experiencia"   │   │
│   │                               │                     │   │
│   │  [Screenshot animado]         │  [Ver mais →]       │   │
│   │                               │                     │   │
│   │  [Conhecer →]                 ├─────────────────────┤   │
│   │                               │                     │   │
│   │  STATUS: Em producao          │     LUMINA          │   │
│   │  CLIENTES: 12 escolas         │     ──────          │   │
│   │                               │     Hospitalidade   │   │
│   │                               │                     │   │
│   │                               │  [Dashboard img]    │   │
│   │                               │                     │   │
│   │                               │  "Gestao completa   │   │
│   │                               │   de hoteis"        │   │
│   │                               │                     │   │
│   └───────────────────────────────┴─────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Comportamento do Active Grid:**
- **Hover:** Card expande levemente, revela video/gif do produto
- **Click:** Abre modal com demo interativa ou vai para pagina do produto
- **Scroll:** Parallax sutil nos elementos internos

---

### SECAO 3: SOCIAL PROOF / CREDIBILIDADE

**Conceito:** Mostrar que somos serios (sem fake testimonials)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐            │
│  │  100%  │  │   3    │  │  Gen2  │  │  24/7  │            │
│  │TypeScript│ │Produtos│  │ Stack  │  │ Uptime │            │
│  └────────┘  └────────┘  └────────┘  └────────┘            │
│                                                             │
│  "Arquitetura de software nao e nosso diferencial.         │
│   E nosso padrao minimo."                                  │
│                                                    — CTO    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### SECAO 4: SOB MEDIDA (Split-Screen)

**Conceito:** Problema → Solucao visual

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   ┌─────────────────────┬─────────────────────────────┐     │
│   │                     │                             │     │
│   │  ANTES              │  DEPOIS                     │     │
│   │  ──────             │  ──────                     │     │
│   │                     │                             │     │
│   │  "Sua ideia esta    │  "Sua ideia vira um        │     │
│   │   travada em        │   produto em producao      │     │
│   │   planilhas e       │   com arquitetura Gen2,    │     │
│   │   powerpoints"      │   CI/CD, e monitoramento"  │     │
│   │                     │                             │     │
│   │  [icone: frustrado] │  [icone: rocket]           │     │
│   │                     │                             │     │
│   └─────────────────────┴─────────────────────────────┘     │
│                                                             │
│   PROCESSO (Timeline horizontal)                            │
│   ────────                                                  │
│   [Discovery] ──→ [Arquitetura] ──→ [Sprints] ──→ [Deploy] │
│      1 sem           1 sem          4-12 sem       Continuo │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐   │
│   │  CTA CARD (glass, glow sutil)                       │   │
│   │                                                     │   │
│   │  "Vamos construir algo juntos?"                     │   │
│   │                                                     │   │
│   │  [Agendar Conversa]        Consultoria gratuita     │   │
│   │                            Proposta em 48h          │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### SECAO 5: FOOTER (Minimalista)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Logo AuriSolutions]                                               │
│                                                             │
│  Produtos        Empresa        Contato                     │
│  ─────────       ───────        ───────                     │
│  Acolheduc       Sobre          contato@aurisolutions.com.br        │
│  NexusVR         Carreiras      LinkedIn                    │
│  Lumina          Blog           Instagram                   │
│                                                             │
│  ──────────────────────────────────────────────────────     │
│                                                             │
│  © 2026 AuriSolutions. Feito com obsessao por qualidade.           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## PARTE 5: COMPONENTES A DESENVOLVER

### Novos Componentes

| Componente | Descricao | Prioridade |
|------------|-----------|------------|
| `ActiveBentoCard` | Card com hover expand, video reveal | Alta |
| `ProductPreview` | Screenshot com parallax e glow | Alta |
| `SplitSection` | Layout 50/50 com animacao | Media |
| `StatsBar` | Numeros animados com countup | Media |
| `ProcessTimeline` | Timeline horizontal interativa | Media |
| `GlassCTA` | Card CTA com glassmorphism premium | Alta |
| `WordReveal` | Headline com reveal por palavra | Alta |
| `TrustBar` | Logos/tech stack com fade-in | Baixa |

### Componentes a Refatorar

| Componente | Problema | Solucao |
|------------|----------|---------|
| `HeroSection` | Generico, sem produto | Adicionar product previews |
| `ProductShowcase` | Cards estaticos | Converter para Active Grid |
| `CustomDevelopment` | Layout plano | Split-screen + timeline |
| `Header` | Basico | Adicionar blur on scroll, sticky CTA |
| `Footer` | Muito cheio | Simplificar, mais espacamento |

---

## PARTE 6: CRONOGRAMA DE IMPLEMENTACAO

### Fase 1: Fundacao (Primeiro)
1. Atualizar design tokens (cores, tipografia)
2. Importar fontes (Instrument Serif + Inter)
3. Criar componentes base (`WordReveal`, `GlassCTA`)

### Fase 2: Hero Section (Segundo)
1. Refatorar hero com nova estrutura
2. Implementar product previews
3. Adicionar animacoes de reveal

### Fase 3: Active Bento Grid (Terceiro)
1. Criar `ActiveBentoCard` component
2. Implementar hover states com video
3. Layout responsivo

### Fase 4: Sob Medida + Footer (Quarto)
1. Split-screen layout
2. Timeline interativa
3. Footer minimalista

### Fase 5: Polish (Quinto)
1. Micro-interacoes finais
2. Performance (lazy loading)
3. Responsividade mobile

---

## PARTE 7: ASSETS NECESSARIOS

### Imagens/Videos
- [ ] Screenshot dashboard Acolheduc (dark mode)
- [ ] Screenshot interface NexusVR
- [ ] Screenshot dashboard Lumina
- [ ] Video curto (5s) de cada produto em uso
- [ ] Logo AuriSolutions em SVG (se disponivel)

### Fontes
- [ ] Instrument Serif (Google Fonts)
- [ ] Inter (ja temos)
- [ ] JetBrains Mono (Google Fonts)

---

## PARTE 8: PERGUNTAS PARA APROVACAO

Antes de iniciar, preciso de confirmacao:

1. **Screenshots dos produtos:** Voce tem imagens reais das interfaces do Acolheduc, NexusVR e Lumina? Se nao, posso criar mockups placeholder.

2. **Logo AuriSolutions:** Tem o logo em SVG ou devo usar o "V" estilizado que criei?

3. **Cores por produto:** Aprova verde para Acolheduc, azul para NexusVR, amber para Lumina?

4. **Tipografia serifa:** Aprova usar fonte serifada (Instrument Serif) para headlines? Isso quebra o padrao "tech = sans-serif" mas traz sofisticacao.

5. **Scope:** Devo criar paginas individuais para cada produto ou apenas a home por enquanto?

---

## FONTES DA PESQUISA

- [Awwwards - Business/Corporate](https://www.awwwards.com/websites/business-corporate/)
- [SaaSFrame - 10 Trends 2026](https://www.saasframe.io/blog/10-saas-landing-page-trends-for-2026-with-real-examples)
- [Best SaaS Websites 2025](https://www.bookmarkify.io/blog/best-saas-websites-of-2025-end-of-year-showcase)
- [Bento Grids 2026](https://writerdock.in/blog/bento-grids-and-beyond-7-ui-trends-dominating-web-design-2026)
- [DesignRush Corporate](https://www.designrush.com/best-designs/websites/corporate)

---

**Aguardo sua aprovacao para iniciar a implementacao.**
