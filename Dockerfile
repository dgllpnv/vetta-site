# =============================================================================
# VETTA GEN 2 - PRODUCTION DOCKERFILE
# Multi-stage build otimizado para Next.js 15
# =============================================================================

# -----------------------------------------------------------------------------
# Stage 1: Dependencies
# Instala apenas as dependencias (cache otimizado)
# -----------------------------------------------------------------------------
FROM node:22-alpine AS deps

WORKDIR /app

# Instala dependencias do sistema necessarias
RUN apk add --no-cache libc6-compat

# Copia apenas os arquivos de dependencias para cache otimizado
COPY package.json package-lock.json ./

# Instala dependencias com ci (clean install)
RUN npm ci

# -----------------------------------------------------------------------------
# Stage 2: Builder
# Compila a aplicacao Next.js
# -----------------------------------------------------------------------------
FROM node:22-alpine AS builder

WORKDIR /app

# Copia dependencias do stage anterior
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variaveis de ambiente para build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build da aplicacao
RUN npm run build

# -----------------------------------------------------------------------------
# Stage 3: Runner
# Imagem de producao minima
# -----------------------------------------------------------------------------
FROM node:22-alpine AS runner

WORKDIR /app

# Instala dependencias do sistema
RUN apk add --no-cache libc6-compat

# Seguranca: nao rodar como root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Variaveis de ambiente de producao
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copia arquivos necessarios do build
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Troca para usuario nao-root
USER nextjs

# Expoe a porta
EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/health || exit 1

# Comando de inicializacao
CMD ["node", "server.js"]
