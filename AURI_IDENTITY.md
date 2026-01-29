# AURISOLUTIONS - Identidade Visual Gen 2

> "Solidez que Cativa, Tecnologia que Resolve"

---

## A Essência

A AuriSolutions não é uma fábrica de código. É um **ateliê de soluções**.

Se a AuriSolutions fosse um objeto, seria um **relógio de precisão suíço** ou um **smartphone topo de linha** — não um brinquedo colorido.

---

## Os 3 Pilares Traduzidos em Design

### 1. Autoridade Técnica
**"Nós sabemos o que fazemos"**

- Mostrar produtos reais, não mockups genéricos
- Números concretos: "12+ escolas", "50k transações/mês"
- Stack tecnológica visível mas não gritante
- Zero floreios — cada pixel tem propósito

### 2. Pragmatismo
**"Resolvemos seu problema da forma mais eficiente"**

- Copy direto, sem jargões
- Hierarquia clara — o olho sabe onde ir
- CTAs objetivos: "Ver Produtos" não "Descubra nossas soluções inovadoras"
- Navegação óbvia

### 3. Encantamento
**"Experiência superior que justifica a parceria"**

- Micro-interações sutis que surpreendem
- Transições suaves (200-400ms)
- Hovers que fazem sentido, não que distraem
- Espaço em branco como elemento de design

---

## Referências Visuais Estudadas

### Tier S — Inspiração Principal
| Empresa | O que roubar |
|---------|--------------|
| **Linear** | Dark mode, bordas finas, clareza cirúrgica |
| **Vercel** | Simplicidade absoluta, grid, sem decoração |
| **Stripe** | Hierarquia perfeita, animações que explicam |
| **Supabase** | Técnico mas acessível, verde confiante |
| **Raycast** | Developer-first, keyboard shortcuts, precisão |

### Tier A — Elementos Específicos
| Empresa | Elemento |
|---------|----------|
| **Apple** | Whitespace dramático, tipografia bold |
| **PlanetScale** | Design premium para infra |
| **Arc** | Linhas limpas, gradientes sutis |
| **Resend** | Minimalismo extremo, developer-centric |
| **Clerk** | Componentes polidos, customização |

---

## Sistema de Design AuriSolutions

### Cores

```css
/* Background Layers — Profundidade sutil */
--bg-0: #030303;        /* Fundo absoluto */
--bg-1: #0A0A0A;        /* Cards principais */
--bg-2: #111111;        /* Cards hover / elevated */
--bg-3: #1A1A1A;        /* Elementos terciários */

/* Foreground — Hierarquia clara */
--fg-primary: #FAFAFA;   /* Títulos, texto importante */
--fg-secondary: #A1A1A1; /* Body text */
--fg-muted: #666666;     /* Captions, metadata */
--fg-subtle: #404040;    /* Placeholders, disabled */

/* Brand — AuriSolutions Violet (usado com parcimônia) */
--accent: #6366F1;       /* Indigo-500 — mais sóbrio que roxo vibrante */
--accent-hover: #818CF8; /* Indigo-400 */
--accent-muted: #6366F1/10; /* Para backgrounds sutis */

/* Products — Cores funcionais, não decorativas */
--product-acolheduc: #10B981;  /* Emerald-500 */
--product-nexusvr: #3B82F6;    /* Blue-500 */
--product-lumina: #F59E0B;     /* Amber-500 */

/* Semantic */
--success: #22C55E;
--warning: #EAB308;
--error: #EF4444;
```

### Tipografia

```css
/* Hierarquia — Inter em diferentes pesos */
--font-family: 'Inter', -apple-system, system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* Scale — Mobile-first, desktop scales up */
--text-xs: 0.75rem;      /* 12px - metadata */
--text-sm: 0.875rem;     /* 14px - captions */
--text-base: 1rem;       /* 16px - body */
--text-lg: 1.125rem;     /* 18px - body large */
--text-xl: 1.25rem;      /* 20px - subheadings */
--text-2xl: 1.5rem;      /* 24px - section titles */
--text-3xl: 1.875rem;    /* 30px - page titles */
--text-4xl: 2.25rem;     /* 36px - hero mobile */
--text-5xl: 3rem;        /* 48px - hero tablet */
--text-6xl: 3.75rem;     /* 60px - hero desktop */
--text-7xl: 4.5rem;      /* 72px - hero large */

/* Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Tracking — Mais apertado em headlines */
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
```

### Spacing — Sistema de 4px

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Borders — Sutis e Precisos

```css
--border-subtle: 1px solid rgba(255, 255, 255, 0.06);
--border-default: 1px solid rgba(255, 255, 255, 0.08);
--border-hover: 1px solid rgba(255, 255, 255, 0.12);
--border-active: 1px solid var(--accent);

--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 20px;
```

### Shadows — Profundidade Sutil

```css
/* Shadows são quase invisíveis — depth vem de background layers */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.3);
--shadow-glow: 0 0 40px -10px var(--accent);
```

---

## Componentes — Linguagem Visual

### Buttons

```
Primary:  bg-accent, text-white, hover:bg-accent-hover
          Borda: none
          Padding: 12px 24px
          Radius: 8px

Secondary: bg-transparent, border-default, text-fg-primary
           Hover: border-hover, bg-bg-2

Ghost:    bg-transparent, text-fg-secondary
          Hover: text-fg-primary, bg-bg-2
```

### Cards

```
Default:  bg-bg-1, border-subtle, radius-xl
          Hover: border-hover, translate-y(-2px), shadow-glow (muito sutil)

Elevated: bg-bg-2, border-default, radius-xl
          Para elementos em destaque
```

### Inputs

```
Default:  bg-bg-1, border-default, radius-md
          Focus: border-accent, ring (1px accent/30)
          Placeholder: fg-subtle
```

---

## Micro-Interações — O Encantamento

### Timing
- **Hover states**: 150-200ms
- **Page transitions**: 300-400ms
- **Reveal animations**: 400-600ms
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)

### Padrões de Hover

```css
/* Card Lift — sutil, não exagerado */
.card:hover {
  transform: translateY(-2px);
  border-color: var(--border-hover);
}

/* Glow Accent — só em elementos importantes */
.btn-primary:hover {
  box-shadow: 0 0 30px -5px var(--accent);
}

/* Link Underline — reveal progressivo */
.link::after {
  transform: scaleX(0);
  transition: transform 200ms ease-out;
}
.link:hover::after {
  transform: scaleX(1);
}
```

### Scroll Reveals

- Elementos entram de baixo (y: 20px → 0)
- Opacity: 0 → 1
- Stagger: 50-100ms entre elementos
- Trigger: quando 20% do elemento está visível

---

## Layout — Estrutura de Precisão

### Container

```css
.container {
  max-width: 1280px;
  padding-inline: 24px;  /* Mobile */

  @media (min-width: 768px) {
    padding-inline: 48px;
  }

  @media (min-width: 1024px) {
    padding-inline: 64px;
  }
}
```

### Grid

- 12 colunas em desktop
- Gap: 24px (desktop), 16px (mobile)
- Sections: padding-block de 96px (desktop), 64px (mobile)

### Whitespace

- Hero: min-height 90vh, conteúdo centralizado
- Entre sections: 96-128px
- Entre elementos relacionados: 24-32px
- Entre título e parágrafo: 16-24px

---

## Copywriting — Tom de Voz

### Fazer
- Direto: "3 produtos em produção"
- Confiante: "Entregamos soluções"
- Específico: "12+ escolas ativas"

### Evitar
- Buzzwords: "soluções inovadoras disruptivas"
- Superlativos: "o melhor", "incrível", "revolucionário"
- Promessas vagas: "transforme seu negócio"

### Headlines
- Curtos (máx 8 palavras)
- Focados em resultado
- Sem pontuação excessiva

---

## Estrutura da Home

### 1. Hero (90vh)
- Badge: "3 produtos em produção" (prova social imediata)
- Headline: "Produtos digitais que já transformam mercados"
- Subline: Uma frase sobre o que a AuriSolutions faz
- 2 CTAs: "Ver Produtos" (primary) + "Sob Medida" (secondary)
- Sem imagem de hero — o minimalismo É a imagem

### 2. Products Showcase
- Grid de 3 produtos
- Cada card mostra: nome, tagline, 1 stat real, preview minimalista
- Hover revela mais info
- Link para página individual

### 3. Trust Signals
- Stats agregados: "5.000+ usuários", "99.9% uptime", etc.
- Logo strip (quando houver clientes)
- Badges de tecnologia (discretos)

### 4. Custom Development
- Split simples: problema → solução
- Processo em 4 passos (sem floreios)
- CTA para contato

### 5. Footer
- Minimalista
- Links essenciais
- Copyright

---

## Checklist de Qualidade

Antes de considerar qualquer componente "pronto":

- [ ] Funciona em mobile? (320px+)
- [ ] Hierarquia clara? (o olho sabe onde ir)
- [ ] Sem decoração desnecessária?
- [ ] Animações têm propósito?
- [ ] Copy é direto e específico?
- [ ] Cores seguem o sistema?
- [ ] Espaçamento consistente?
- [ ] Acessível? (contraste 4.5:1+)

---

## Fontes de Referência

- [Vercel Design Guidelines](https://vercel.com/design/guidelines)
- [Linear Style Design](https://blog.logrocket.com/ux-design/linear-design/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Stripe Design Principles](https://medium.com/think-senpai/fundamental-design-principles-using-stripe-as-a-case-study-33a0a635e2ca)
- [PlanetScale Brand Design](https://planetscale.com/blog/how-brand-design-works-at-planetscale)
- [B2B Trust Signals](https://www.webstacks.com/blog/trust-signals)
- [Micro-interactions 2025](https://medium.com/@ryan.almeida86/5-micro-interactions-to-make-any-product-feel-premium-68e3b3eae3bf)
- [Developer Landing Pages Study](https://evilmartians.com/chronicles/we-studied-100-devtool-landing-pages-here-is-what-actually-works-in-2025)

---

*Documento criado em Janeiro 2026 — AuriSolutions Gen 2*
