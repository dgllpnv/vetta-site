# Guia de Migração: Development → Production (Vercel + Railway)

> **Para:** Claude AI (ou outra IA assistente)
> **Autor:** Claude Opus 4.5
> **Data:** Janeiro 2026
> **Baseado em:** Migração real do projeto AuriSolutions

---

## CONTEXTO IMPORTANTE

Este documento descreve o processo completo de migração de uma aplicação **Next.js** de desenvolvimento local para produção usando:
- **Vercel** - Hospedagem do frontend/backend (Next.js)
- **Railway** - Banco de dados PostgreSQL

O processo foi testado e validado. Siga cada etapa na ordem apresentada.

---

## ÍNDICE

1. [Pré-requisitos](#1-pré-requisitos)
2. [Configuração do Railway (Banco de Dados)](#2-configuração-do-railway-banco-de-dados)
3. [Instalação e Configuração do Prisma](#3-instalação-e-configuração-do-prisma)
4. [Criação do Schema do Banco](#4-criação-do-schema-do-banco)
5. [Configuração do Prisma Client](#5-configuração-do-prisma-client)
6. [Criação das API Routes](#6-criação-das-api-routes)
7. [Preparação para Deploy](#7-preparação-para-deploy)
8. [Deploy no Vercel](#8-deploy-no-vercel)
9. [Problemas Comuns e Soluções](#9-problemas-comuns-e-soluções)
10. [Checklist Final](#10-checklist-final)

---

## 1. PRÉ-REQUISITOS

### Tecnologias esperadas:
- Next.js 14+ (App Router)
- Node.js 18+
- npm ou pnpm
- Git configurado com repositório no GitHub

### Contas necessárias (o usuário deve criar):
- [Railway](https://railway.app) - para o banco de dados
- [Vercel](https://vercel.com) - para hospedagem
- [GitHub](https://github.com) - repositório do código

---

## 2. CONFIGURAÇÃO DO RAILWAY (BANCO DE DADOS)

### 2.1 Instruções para o usuário criar o banco:

Diga ao usuário:
```
1. Acesse https://railway.app e faça login
2. Clique em "New Project" → "Provision PostgreSQL"
3. Aguarde o banco ser criado
4. Clique no serviço PostgreSQL criado
5. Vá na aba "Variables"
6. Copie o valor de DATABASE_URL
```

### 2.2 ATENÇÃO - URL de Conexão:

O Railway fornece DUAS URLs diferentes:

| Tipo | Formato | Uso |
|------|---------|-----|
| **Internal** | `postgres://...@postgres.railway.internal:5432/...` | Apenas dentro do Railway |
| **Public (TCP Proxy)** | `postgres://...@[cidade].proxy.rlwy.net:[porta]/...` | Conexões externas (Vercel) |

**CRÍTICO:** Para o Vercel, você PRECISA da URL pública (TCP Proxy).

Instrua o usuário:
```
No Railway, vá em:
Settings → Networking → TCP Proxy → Enable

Copie a URL que aparece com o formato:
postgresql://postgres:[senha]@[cidade].proxy.rlwy.net:[porta]/railway
```

### 2.3 Variáveis de ambiente necessárias:

Crie um arquivo `.env` na raiz do projeto:

```env
# Railway PostgreSQL - Use a URL do TCP Proxy (NÃO a internal)
DATABASE_URL="postgresql://postgres:SENHA@cidade.proxy.rlwy.net:PORTA/railway"

# Direct URL (mesma URL para Prisma migrations)
DIRECT_URL="postgresql://postgres:SENHA@cidade.proxy.rlwy.net:PORTA/railway"
```

**IMPORTANTE:** Adicione `.env` ao `.gitignore` se ainda não estiver.

---

## 3. INSTALAÇÃO E CONFIGURAÇÃO DO PRISMA

### 3.1 Instalar dependências:

```bash
npm install prisma@5.22.0 @prisma/client@5.22.0
```

**ATENÇÃO - VERSÃO DO PRISMA:**
- Use a versão **5.22.0** (ou 5.x)
- **NÃO use Prisma 6.x ou 7.x** - eles têm breaking changes que exigem configurações adicionais (adapters, accelerateUrl)
- Se o projeto já tem Prisma 6+, faça downgrade para 5.22.0

### 3.2 Inicializar Prisma:

```bash
npx prisma init
```

Isso cria:
- `prisma/schema.prisma` - arquivo de schema
- `.env` - arquivo de variáveis (se não existir)

### 3.3 Configurar schema.prisma:

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

**Nota:** O `directUrl` é necessário para conexões em ambientes serverless como Vercel.

---

## 4. CRIAÇÃO DO SCHEMA DO BANCO

### 4.1 Pergunte ao usuário qual a finalidade do banco:

Opções comuns:
- **Leads/Contatos** - Formulário de contato
- **CMS** - Conteúdo dinâmico editável
- **Analytics** - Métricas de acesso
- **Usuários** - Autenticação
- **Produtos** - Catálogo
- **Personalizado** - Necessidade específica

### 4.2 Exemplo de schema completo (Leads + CMS + Analytics):

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

// =============================================
// LEADS / CONTATOS
// =============================================
model Contact {
  id        String   @id @default(cuid())
  name      String
  email     String
  company   String?
  interest  String   // produto de interesse
  message   String   @db.Text
  status    ContactStatus @default(NEW)
  notes     String?  @db.Text
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([email])
  @@index([status])
  @@index([createdAt])
  @@map("contacts")
}

enum ContactStatus {
  NEW
  CONTACTED
  QUALIFIED
  PROPOSAL
  WON
  LOST
}

// =============================================
// CMS - CONTEÚDO DINÂMICO
// =============================================
model Content {
  id        String   @id @default(cuid())
  key       String   @unique // ex: "hero.title"
  title     String?
  content   String   @db.Text
  metadata  Json?
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([key])
  @@index([isActive])
  @@map("contents")
}

// =============================================
// ANALYTICS
// =============================================
model PageView {
  id        String   @id @default(cuid())
  sessionId String
  page      String
  referrer  String?
  userAgent String?
  device    String?
  createdAt DateTime @default(now())

  @@index([sessionId])
  @@index([page])
  @@index([createdAt])
  @@map("page_views")
}

model Event {
  id        String   @id @default(cuid())
  sessionId String
  name      String   // click, form_submit, etc
  page      String
  data      Json?
  createdAt DateTime @default(now())

  @@index([sessionId])
  @@index([name])
  @@index([createdAt])
  @@map("events")
}

model Session {
  id           String   @id @default(cuid())
  fingerprint  String?
  firstPage    String
  lastPage     String
  pageCount    Int      @default(1)
  utmSource    String?
  utmMedium    String?
  utmCampaign  String?
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  @@index([fingerprint])
  @@index([createdAt])
  @@map("sessions")
}
```

### 4.3 Sincronizar com o banco:

```bash
npx prisma db push
```

Este comando:
1. Conecta ao Railway
2. Cria as tabelas
3. Gera o Prisma Client

**Se der erro de conexão:** Verifique se está usando a URL do TCP Proxy, não a internal.

---

## 5. CONFIGURAÇÃO DO PRISMA CLIENT

### 5.1 Criar arquivo de instância do Prisma:

Crie `src/lib/prisma.ts`:

```typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
```

**Por que esse padrão?**
- Em desenvolvimento, o Next.js faz hot-reload
- Sem esse padrão, cada reload criaria uma nova conexão
- Isso causaria "too many connections" error

### 5.2 Criar barrel export (opcional mas recomendado):

Crie `src/lib/index.ts`:

```typescript
export { prisma } from './prisma';
```

---

## 6. CRIAÇÃO DAS API ROUTES

### 6.1 API de Contato (POST /api/contact):

Crie `src/app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, interest, message } = body;

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios' },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Salvar no banco
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        company: company || null,
        interest: interest || 'general',
        message,
      },
    });

    return NextResponse.json(
      { success: true, id: contact.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao salvar contato:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
```

### 6.2 API de Analytics (POST /api/analytics):

Crie `src/app/api/analytics/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, sessionId, ...data } = body;

    if (!sessionId) {
      return NextResponse.json({ error: 'sessionId obrigatório' }, { status: 400 });
    }

    switch (type) {
      case 'pageview':
        await prisma.pageView.create({
          data: {
            sessionId,
            page: data.page || '/',
            referrer: data.referrer,
            userAgent: data.userAgent,
            device: data.device,
          },
        });
        break;

      case 'event':
        await prisma.event.create({
          data: {
            sessionId,
            name: data.name || 'unknown',
            page: data.page || '/',
            data: data.eventData,
          },
        });
        break;

      case 'session':
        await prisma.session.upsert({
          where: { id: sessionId },
          update: {
            lastPage: data.page || '/',
            pageCount: { increment: 1 },
          },
          create: {
            id: sessionId,
            firstPage: data.page || '/',
            lastPage: data.page || '/',
            utmSource: data.utmSource,
            utmMedium: data.utmMedium,
            utmCampaign: data.utmCampaign,
          },
        });
        break;

      default:
        return NextResponse.json({ error: 'Tipo inválido' }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
```

### 6.3 API de Conteúdo (GET /api/content/[key]):

Crie `src/app/api/content/[key]/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ key: string }> }
) {
  try {
    const { key } = await params;

    const content = await prisma.content.findUnique({
      where: { key, isActive: true },
    });

    if (!content) {
      return NextResponse.json({ error: 'Conteúdo não encontrado' }, { status: 404 });
    }

    return NextResponse.json(content);
  } catch (error) {
    console.error('Erro ao buscar conteúdo:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
```

### 6.4 Health Check (GET /api/health):

Crie `src/app/api/health/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
}
```

---

## 7. PREPARAÇÃO PARA DEPLOY

### 7.1 Atualizar package.json:

Adicione/atualize os scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "next lint",
    "postinstall": "prisma generate",
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:studio": "prisma studio"
  }
}
```

**CRÍTICO:** O `postinstall` garante que o Prisma Client seja gerado no Vercel.

### 7.2 Criar vercel.json (opcional):

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs",
  "regions": ["gru1"],
  "env": {
    "NEXT_TELEMETRY_DISABLED": "1"
  }
}
```

**Nota:** `gru1` é São Paulo. Escolha a região mais próxima do Railway.

### 7.3 Verificar .gitignore:

Certifique-se de que contém:

```gitignore
# dependencies
node_modules
.pnpm-store

# next.js
.next
out

# env files
.env
.env*.local

# prisma
prisma/*.db
prisma/*.db-journal
```

### 7.4 Commit e Push:

```bash
git add .
git commit -m "feat: Preparação para deploy - Prisma + APIs"
git push origin main
```

---

## 8. DEPLOY NO VERCEL

### 8.1 Instruções para o usuário:

```
1. Acesse https://vercel.com e faça login
2. Clique em "Add New..." → "Project"
3. Importe o repositório do GitHub
4. Configure:
   - Project Name: [nome-do-projeto]
   - Framework: Next.js (detectado automaticamente)
   - Root Directory: ./ (raiz)

5. Em "Environment Variables", adicione:

   DATABASE_URL = [cole a URL do TCP Proxy do Railway]
   DIRECT_URL = [mesma URL]

6. Clique em "Deploy"
```

### 8.2 Verificação pós-deploy:

Após o deploy, teste:

```bash
# Health check
curl https://[seu-projeto].vercel.app/api/health

# Deve retornar:
# {"status":"healthy","timestamp":"..."}
```

---

## 9. PROBLEMAS COMUNS E SOLUÇÕES

### Problema 1: "Can't reach database server"

**Causa:** Usando URL internal do Railway
**Solução:** Use a URL do TCP Proxy (Settings → Networking → TCP Proxy)

### Problema 2: "Prisma Client not generated"

**Causa:** Falta do script postinstall
**Solução:** Adicione em package.json:
```json
"postinstall": "prisma generate"
```

### Problema 3: "Module not found: @prisma/client"

**Causa:** Prisma Client não foi gerado
**Solução:**
```bash
npx prisma generate
```

### Problema 4: Erros com Prisma 6.x ou 7.x

**Causa:** Breaking changes nas versões novas
**Solução:** Faça downgrade:
```bash
npm install prisma@5.22.0 @prisma/client@5.22.0
```

### Problema 5: "EPERM: operation not permitted" (Windows)

**Causa:** Arquivos do Prisma bloqueados por outro processo
**Solução:**
1. Pare o servidor de desenvolvimento (Ctrl+C)
2. Feche o VS Code
3. Tente novamente

### Problema 6: "useSearchParams() should be wrapped in Suspense"

**Causa:** Next.js 14+ exige Suspense para useSearchParams
**Solução:** Evite useSearchParams em hooks globais ou envolva com Suspense

### Problema 7: Vercel mostra versão antiga após deploy

**Causa:** Cache do build
**Solução:** No Vercel:
- Settings → General → Redeploy → "Clear Build Cache"

### Problema 8: "Too many connections"

**Causa:** Hot-reload criando múltiplas conexões
**Solução:** Use o padrão singleton do Prisma (seção 5.1)

---

## 10. CHECKLIST FINAL

Antes de considerar a migração completa, verifique:

### Código:
- [ ] Prisma instalado na versão 5.22.0
- [ ] Schema do banco criado em `prisma/schema.prisma`
- [ ] Arquivo `src/lib/prisma.ts` criado
- [ ] API routes criadas e funcionando
- [ ] Scripts do package.json atualizados (build, postinstall)
- [ ] .env adicionado ao .gitignore

### Railway:
- [ ] Banco PostgreSQL criado
- [ ] TCP Proxy habilitado
- [ ] URL pública copiada (não a internal)
- [ ] Tabelas criadas (`npx prisma db push`)

### Vercel:
- [ ] Projeto criado
- [ ] Repositório conectado
- [ ] Variáveis de ambiente configuradas (DATABASE_URL, DIRECT_URL)
- [ ] Deploy realizado com sucesso
- [ ] Health check respondendo

### Testes:
- [ ] `GET /api/health` retorna 200
- [ ] `POST /api/contact` salva no banco
- [ ] Dados aparecem no Railway (ou via `npx prisma studio`)

---

## NOTAS ADICIONAIS

### Sobre custos:
- **Vercel:** Gratuito para projetos hobby (limites generosos)
- **Railway:** $5/mês de créditos grátis, depois cobra por uso

### Sobre segurança:
- NUNCA commite o arquivo `.env`
- Use variáveis de ambiente do Vercel para produção
- Valide TODOS os inputs nas APIs

### Sobre performance:
- O Prisma Client é gerado no build
- Conexões são reusadas (pool)
- Região do Vercel deve ser próxima do Railway

---

## EXEMPLO DE FLUXO COMPLETO

```
1. Usuário cria banco no Railway
2. Usuário fornece URL do TCP Proxy
3. Você configura .env local
4. Você instala Prisma 5.22.0
5. Você cria o schema
6. Você roda: npx prisma db push
7. Você cria src/lib/prisma.ts
8. Você cria as API routes
9. Você atualiza package.json
10. Você faz commit e push
11. Usuário cria projeto no Vercel
12. Usuário adiciona variáveis de ambiente
13. Vercel faz deploy automaticamente
14. Você testa os endpoints
15. Migração completa!
```

---

**Documento criado em Janeiro 2026**
**Baseado na migração real do projeto AuriSolutions**
**Testado e validado em produção**
