# =============================================================================
# AURISOLUTIONS - PRODUCTION DOCKERFILE
# Multi-stage build para Next.js 15 + Prisma, output standalone
# Otimizado para EasyPanel (Hostinger VPS)
# =============================================================================

# -----------------------------------------------------------------------------
# Stage 1: deps
# Instala dependencias com --ignore-scripts (pula postinstall do Prisma).
# O Prisma Client e gerado em "builder" depois que o schema for copiado.
# -----------------------------------------------------------------------------
FROM node:22-alpine AS deps
WORKDIR /app

RUN apk add --no-cache libc6-compat openssl

COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

# -----------------------------------------------------------------------------
# Stage 2: builder
# Compila o Next.js. Recebe NEXT_PUBLIC_SITE_URL como build arg porque o
# Vite/Next congela variaveis NEXT_PUBLIC_* no JS final em build time.
# -----------------------------------------------------------------------------
FROM node:22-alpine AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat openssl

# Build args do EasyPanel — qualquer variavel "NEXT_PUBLIC_*" definida na aba
# Ambiente do servico e propagada automaticamente como --build-arg.
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Copia node_modules do stage anterior + codigo fonte
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Gera o Prisma Client agora (apos o schema estar disponivel)
RUN npx prisma generate

# Build do Next.js (gera .next/standalone com output: 'standalone')
RUN npm run build

# -----------------------------------------------------------------------------
# Stage 3: runner
# Imagem minima de producao. Roda como usuario nao-root.
# -----------------------------------------------------------------------------
FROM node:22-alpine AS runner
WORKDIR /app

RUN apk add --no-cache libc6-compat openssl

# Cria usuario nao-root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Copia o build standalone do Next.js
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copia o schema do Prisma + Client gerado (necessario em runtime)
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/@prisma/client ./node_modules/@prisma/client

USER nextjs

EXPOSE 3000

# Sem HEALTHCHECK aqui — o EasyPanel/Traefik faz probe HTTP via dominio
# configurado. wget --spider em Alpine tem comportamento inconsistente e
# costuma marcar o servico como "not reachable" mesmo rodando OK.

CMD ["node", "server.js"]
