# VETTA SITE - ARQUITETURA GEN 2

> Primeira aplicacao construida seguindo o padrao Vetta Gen 2

## Stack Tecnologica

| Camada | Tecnologia | Versao |
|--------|------------|--------|
| Framework | Next.js (App Router) | 15.1 |
| Linguagem | TypeScript (Strict) | 5.7 |
| Estilizacao | Tailwind CSS | 3.4 |
| Animacoes | Framer Motion | 11.15 |
| Icones | Lucide React | 0.468 |
| Runtime | Node.js | 22 |
| Container | Docker (Alpine) | Multi-stage |

## Estrutura de Pastas

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # Route Handlers
│   │   └── health/        # Healthcheck endpoint
│   ├── globals.css        # Design tokens + Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
│
├── components/            # Componentes GLOBAIS
│   ├── layout/           # Header, Footer
│   └── ui/               # Button, Container (reutilizaveis)
│
├── features/             # Features (auto-contidas)
│   ├── hero/             # Hero Section
│   │   ├── components/
│   │   └── index.ts      # Public API
│   ├── products/         # Product Showcase (Bento Grid)
│   │   ├── components/
│   │   └── index.ts
│   └── custom-dev/       # Secao Sob Medida
│       ├── components/
│       └── index.ts
│
└── lib/                  # Utilitarios
    └── utils.ts          # cn() helper
```

## Principios Arquiteturais

### 1. Feature-Based Architecture
Cada feature e uma pasta auto-contida com seus proprios componentes, hooks, services e types.

### 2. Public API Pattern
Features exportam apenas o necessario via `index.ts`:
```typescript
// Correto
import { HeroSection } from '@/features/hero';

// Evitar
import { HeroSection } from '@/features/hero/components/hero-section';
```

### 3. TypeScript Strict Mode
- `strictNullChecks: true`
- `noImplicitAny: true`
- `noUncheckedIndexedAccess: true`

### 4. Design Tokens via CSS Variables
Cores e espacamentos definidos em `globals.css` como CSS custom properties:
```css
:root {
  --primary: 262 83% 58%;
  --background: 240 10% 4%;
}
```

## Docker Strategy

### Desenvolvimento
```bash
docker compose --profile dev up
```
- Hot-reload habilitado
- Volume mounts para codigo fonte
- Node modules preservados no container

### Producao
```bash
docker compose --profile prod build
docker compose --profile prod up -d
```
- Multi-stage build (deps -> builder -> runner)
- Usuario nao-root (nextjs:nodejs)
- Healthcheck configurado
- Standalone output (~100MB)

## Performance

- **Standalone Output**: Next.js compila para output standalone, reduzindo tamanho do container
- **Font Optimization**: Inter carregada via `next/font` com swap
- **Image Optimization**: AVIF e WebP automaticos via `next/image`

## Proximos Passos

1. [ ] Adicionar paginas individuais dos produtos
2. [ ] Implementar formulario de contato
3. [ ] Configurar analytics (Vercel Analytics)
4. [ ] Adicionar testes com Vitest
5. [ ] Configurar Sentry para monitoramento
