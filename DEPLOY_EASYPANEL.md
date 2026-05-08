# Deploy Auri Solutions — EasyPanel (Hostinger VPS)

> Guia passo-a-passo para subir o site da **Auri Solutions** (Next.js 15 + Prisma + PostgreSQL) numa **VPS Hostinger** gerenciada pelo **EasyPanel**. Adaptado a partir do guia do Coldre System (Clube Baiano de Tiro), com as diferenças desta aplicação destacadas em ⚠️ **Diferença vs CBT**.

---

## Sumário

1. [O que é diferente do CBT (leia primeiro)](#0-o-que-e-diferente-do-cbt)
2. [Antes de começar — pré-requisitos](#1-antes-de-comecar)
3. [Conceitos fundamentais](#2-conceitos-fundamentais)
4. [Fase 1 — DNS na Hostinger](#fase-1--dns-na-hostinger)
5. [Fase 2 — Gerar segredos](#fase-2--gerar-segredos)
6. [Fase 3 — Projeto + Postgres no EasyPanel](#fase-3--projeto--postgres-no-easypanel)
7. [Fase 4 — Subir o serviço auri-site (Next.js)](#fase-4--subir-o-servico-auri-site-nextjs)
8. [Fase 5 — Criar tabelas no banco (prisma db push)](#fase-5--criar-tabelas-no-banco-prisma-db-push)
9. [Fase 6 — Smoke test em produção](#fase-6--smoke-test-em-producao)
10. [Fase 7 — Hardening](#fase-7--hardening)
11. [Apêndice A — Atualizações futuras](#apendice-a--atualizacoes-futuras)
12. [Apêndice B — Problemas comuns](#apendice-b--problemas-comuns)

---

## 0. O que é diferente do CBT

| Tópico | CBT (Clube de Tiro) | **Auri Solutions** |
|---|---|---|
| **Arquitetura** | Backend Express + Frontend React/Vite separados | **Next.js 15 fullstack** (frontend + API routes na mesma app) |
| **Quantidade de serviços EasyPanel** | 3 (postgres, backend, frontend) | **2** (postgres, site) |
| **Domínios** | `seudominio.com` + `api.seudominio.com` | **1 só** — `aurisolutions.com.br` (as APIs ficam em `/api/*` da mesma origem, não precisa subdomínio) |
| **Build Path no GitHub source** | `/backend` e `/frontend` (monorepo) | **`/`** (raiz) |
| **Porta interna do container** | 3002 (backend) / 80 (frontend nginx) | **3000** (Next.js standalone) |
| **Build args** | `VITE_API_URL` para o frontend | **`NEXT_PUBLIC_SITE_URL`** para o Next |
| **CORS** | `ALLOWED_ORIGINS` no backend | Não aplica — mesma origem |
| **Migração de banco** | Restaurar dump via `pg_restore` | **Sem dump** — banco zerado, criamos tabelas com `prisma db push` |

⚠️ **Resumo da fofoca**: Auri é uma só caixinha que serve a página E as APIs, então simplifica bem: 1 domínio, 1 serviço de app, 1 banco.

---

## 1. Antes de começar

### 1.1 — Pré-requisitos

| Item | Como obter |
|---|---|
| **VPS Hostinger** com EasyPanel ativo | hpanel.hostinger.com → VPS |
| **IP público da VPS** | hpanel.hostinger.com → VPS → "Visão geral" |
| **Acesso SSH** (usuário, senha, porta) | hpanel.hostinger.com → VPS → "Acesso SSH" — geralmente `root` na porta `22` |
| **Domínio próprio** | Recomendo `aurisolutions.com.br` (ou o domínio que vocês usarem). Se ainda não tem, registre na Hostinger ou registro.br. |
| **Repositório no GitHub** com este código | `git push origin main` antes de começar |
| **Computador com Node.js** | Para gerar segredos (item 2.1) |

### 1.2 — Tempo

- Configuração ativa: **40-60 minutos**
- Espera de DNS propagar: **5 min a 2 h** (em paralelo, não trava)
- Build inicial: **3-6 minutos**

Reserve **~1h30** para fazer com calma.

---

## 2. Conceitos fundamentais

### 2.1 — O que o EasyPanel faz

Painel web em `http://<IP_VPS>:3000` que:

- Faz `docker build` a partir do GitHub
- Roteia domínios via Traefik (reverse proxy embutido)
- Emite HTTPS automático via Let's Encrypt
- Gerencia variáveis de ambiente, logs, métricas, restart

### 2.2 — Build time vs Runtime (importante!)

| Categoria | Quando é lida | Exemplos | Mudou? Como aplicar |
|---|---|---|---|
| **Build time** | Durante `docker build` | `NEXT_PUBLIC_SITE_URL` (Next congela em JS final) | **Implantar** (rebuild ~3-5 min) |
| **Runtime** | Quando o container está rodando | `DATABASE_URL`, `DIRECT_URL`, `NODE_ENV` | **Reiniciar** (~10s) |

⚠️ **Diferença Auri vs CBT**: aqui só temos **uma** variável `NEXT_PUBLIC_*` (que é build-time). Todo o resto é runtime.

### 2.3 — O fluxo de deploy

```
1. git push origin main
2. EasyPanel detecta o commit
3. Você clica "Implantar" no painel
4. EasyPanel clona o repo na VPS, roda docker build (Dockerfile da raiz)
5. Sobe o container novo, derruba o antigo (zero downtime via Traefik)
6. Done
```

---

## Fase 1 — DNS na Hostinger

### Por que primeiro

DNS leva 5 min a 2h pra propagar. Configure agora pra ele propagar enquanto você faz o resto.

### 1.1 — Acessar a Zona DNS

1. https://hpanel.hostinger.com → **Domínios**
2. Encontre `aurisolutions.com.br` → **Gerenciar**
3. Menu lateral → **Zona DNS**

### 1.2 — Limpar registros antigos (se houver)

Apague registros tipo `A` apontando para IPs de "parking" da Hostinger (algo como `185.230.63.X`). **Mantenha** os registros `MX`, `TXT` (verificações) e `NS` (nameservers).

### 1.3 — Adicionar 1 (ou 2) registros

⚠️ **Diferença vs CBT**: como Auri usa **1 domínio só**, você só precisa de 1 registro `A` (não dois). Se quiser `www` também, adicione um `CNAME`.

**Registro 1 (obrigatório, domínio raiz):**

| Campo | Valor |
|---|---|
| Tipo | `A` |
| Nome (Host) | `@` (significa o domínio raiz puro) |
| Aponta para | `<IP_DA_SUA_VPS>` (ex: `123.45.67.89`) |
| TTL | `3600` |

**Registro 2 (opcional, redirect www):**

| Campo | Valor |
|---|---|
| Tipo | `CNAME` |
| Nome | `www` |
| Aponta para | `aurisolutions.com.br.` (com ponto final) |
| TTL | `3600` |

### 1.4 — Verificar propagação

No terminal do seu PC:

```bash
nslookup aurisolutions.com.br
```

Espere ver:
```
Name:    aurisolutions.com.br
Address: <IP_DA_SUA_VPS>
```

Se não propagou ainda, espere 10-15 min e tente de novo. Não precisa esperar pra começar a Fase 3 — só é necessário ter propagado quando a Fase 4 emitir o certificado HTTPS.

---

## Fase 2 — Gerar segredos

### 2.1 — Gerar senha forte para o Postgres

Não é estritamente obrigatório (o EasyPanel oferece um botão "Gerar"), mas se preferir gerar você mesmo:

```bash
node -e "console.log(require('crypto').randomBytes(24).toString('base64url'))"
```

Saída tipo: `z2T1hF...K8wQ`. **Copie e guarde** num cofre/bloco de notas seguro.

### 2.2 — (Opcional) Gerar token interno se quiser proteger /api/contact futuramente

Não é obrigatório agora — o site não tem auth ainda. Se quiser preparar:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

⚠️ **Diferença vs CBT**: o Auri **não tem JWT_SECRET** porque a app pública não tem login. Se um dia adicionar admin, você gera e plugga em `JWT_SECRET`.

---

## Fase 3 — Projeto + Postgres no EasyPanel

### 3.1 — Acessar o EasyPanel

1. `http://<IP_VPS>:3000` no navegador
2. Login com as credenciais do EasyPanel (definidas no primeiro acesso à VPS)

### 3.2 — Criar o Projeto

1. Menu lateral → **Projetos** → **+ Criar Projeto**
2. Nome: **`auri`** (curto, minúsculo, sem espaços)
3. Criar

### 3.3 — Adicionar serviço PostgreSQL

1. Dentro do projeto `auri` → **+ Serviço** → **Postgres**
2. Preencha:

   | Campo | Valor |
   |---|---|
   | Nome do Serviço | `auri-postgres` |
   | Versão da Imagem | `16-alpine` |
   | Banco de Dados | `auri_db` |
   | Usuário | `auri_user` |
   | Senha | gere/cole a senha forte da Fase 2.1. **Anote.** |

3. **NÃO marque "Expor Externamente"** — Postgres deve ficar só na rede interna
4. Volume Persistente: deixe habilitado (default)
5. Criar

### 3.4 — Anotar a connection string

Hostname interno do EasyPanel segue o padrão **`<projeto>_<servico>`**. Para nós:

```
postgresql://auri_user:<SUA_SENHA>@auri_auri-postgres:5432/auri_db
```

Confira na aba **Visão Geral** do serviço — costuma ter uma string copiável. **Anote completa.** Vai ser usada na Fase 4.

---

## Fase 4 — Subir o serviço auri-site (Next.js)

### 4.1 — Criar o serviço

1. Projeto `auri` → **+ Serviço** → **App** *(não Postgres dessa vez)*
2. Nome: **`auri-site`**

### 4.2 — Aba **Fonte**

| Campo | Valor |
|---|---|
| Tipo | **GitHub** |
| Proprietário | seu usuário GitHub (ex: `dgllpnv`) |
| Repositório | nome do repo (ex: `aurisolutions-site`) |
| Ramo | `main` (ou `master`, conforme o seu) |
| **Caminho de Build** | **`/`** *(raiz — Auri não é monorepo, o Dockerfile mora na raiz)* |

⚠️ **Diferença vs CBT**: o CBT tinha `/backend` e `/frontend`. Aqui é `/`.

Em **Construção**:
- Selecione **Dockerfile**
- Arquivo: `Dockerfile`

Salvar.

### 4.3 — Aba **Ambiente**

Cole tudo de uma vez (substituindo os placeholders):

```env
DATABASE_URL=postgresql://auri_user:SUA_SENHA_PG@auri_auri-postgres:5432/auri_db
DIRECT_URL=postgresql://auri_user:SUA_SENHA_PG@auri_auri-postgres:5432/auri_db
NEXT_PUBLIC_SITE_URL=https://aurisolutions.com.br
NODE_ENV=production
```

**Cuidados** (igual CBT):
- **Sem aspas** ao redor dos valores
- **Sem espaços** antes/depois do `=`
- Cada variável em uma linha
- `NEXT_PUBLIC_SITE_URL` é **build time** — o `Dockerfile` declara `ARG NEXT_PUBLIC_SITE_URL` e o EasyPanel propaga essa env como build-arg automaticamente. Mudou? **Implantar** (rebuild), não Reiniciar.
- `DATABASE_URL` e `DIRECT_URL` podem ser idênticas (Postgres tradicional, sem pooler).

Salvar.

### 4.4 — Aba **Domínios**

⚠️ **Diferença vs CBT**: aqui você adiciona **um domínio só** (talvez dois, se quiser `www`).

**Domínio principal:**

1. **+ Adicionar Domínio**
2. Preencha:

   | Campo | Valor |
   |---|---|
   | Host | `aurisolutions.com.br` *(sem `https://`, sem barra)* |
   | Path | `/` *(uma barra só)* |
   | **Porta** | **`3000`** *(porta interna do Next.js standalone)* |
   | HTTPS | ✓ marcado |

3. Salvar

**Domínio www (opcional):**

1. **+ Adicionar Domínio**
2. Host: `www.aurisolutions.com.br`, Path: `/`, Porta: `3000`, HTTPS ✓
3. Se houver opção "Redirect to" / "Redirecionar para", aponte para `https://aurisolutions.com.br`
4. Salvar

### 4.5 — Aba **Recursos**

| Recurso | Valor |
|---|---|
| **Memória durante build** | **1024 MB** *(Next.js + Prisma generate consomem bastante; 256 MB causa OOM)* |
| **CPU** | 1 |
| **Memória runtime** | 512 MB *(Next.js standalone roda confortavelmente)* |

Salvar.

### 4.6 — Implantar

1. Aba **Implantações** → **Implantar**
2. EasyPanel vai:
   - Clonar o repo (~10s)
   - `docker build` em multi-stage (deps → builder → runner) — primeira vez ~4-7 min
   - Subir o container, derrubar o antigo
   - Configurar HTTPS via Let's Encrypt (precisa do DNS propagado)
3. Acompanhe a aba **Logs** durante o build
4. Build sucesso aparece linhas tipo:
   ```
   Successfully built abc123def
   Successfully tagged easypanel/auri-auri-site:latest
   ```
5. Container rodando aparece (no log de runtime, separado do build):
   ```
   ▲ Next.js 15.x.x
   - Local:        http://0.0.0.0:3000
   ```

### 4.7 — Verificar resposta

Aguarde DNS ter propagado (Fase 1.4). No seu PC:

```bash
curl https://aurisolutions.com.br/api/health
```

**Resposta esperada:**
```json
{"status":"healthy","timestamp":"2026-...","version":"1.0.0"}
```

Se aparecer:
- Erro de SSL "self-signed" → aguarde mais 5-10 min, Let's Encrypt está emitindo
- 502/503 → veja Logs no EasyPanel
- 500 com erro Prisma → o banco existe mas as tabelas ainda não. Vá pra Fase 5.

---

## Fase 5 — Criar tabelas no banco (prisma db push)

⚠️ **Diferença vs CBT**: o CBT migrou dados via `pg_restore`. Aqui o banco está **zerado** — só precisamos criar as tabelas a partir do `prisma/schema.prisma`. É um único comando.

### 5.1 — Abrir o Console do auri-site

1. EasyPanel → projeto `auri` → serviço `auri-site` → aba **Console**
2. Clique em **Abrir Terminal** (ou similar)
3. Você cai num shell dentro do container

### 5.2 — Rodar prisma db push

```bash
npx prisma db push --accept-data-loss
```

> ⚠️ A flag `--accept-data-loss` é segura aqui porque o banco está vazio. Em deploys futuros com dados existentes, **não use** — use `prisma migrate deploy` ou `prisma db push` sem a flag.

Saída esperada:
```
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "auri_db" ...

🚀  Your database is now in sync with your Prisma schema.

✔ Generated Prisma Client (v5.22.0) ...
```

### 5.3 — Validar que as tabelas foram criadas

Ainda no console do `auri-site`:

```bash
npx prisma db pull --print 2>/dev/null | head -50
```

Deve listar os models do schema (`Contact`, `Content`, `PageView`, `Event`, `Session`).

Alternativa: abrir o **Console** do `auri-postgres` e rodar:

```bash
psql -U auri_user -d auri_db -c '\dt'
```

Saída esperada (tabelas mapeadas pelos `@@map` do schema):
```
 Schema |     Name      | Type  |   Owner
--------+---------------+-------+-----------
 public | contacts      | table | auri_user
 public | contents      | table | auri_user
 public | events        | table | auri_user
 public | page_views    | table | auri_user
 public | sessions      | table | auri_user
```

### 5.4 — Reiniciar o auri-site (garantia)

Aba **Implantações** do `auri-site` → **Reiniciar**. Isso força o Next.js a reconectar ao banco com as tabelas já criadas.

---

## Fase 6 — Smoke test em produção

Sempre em **aba anônima** (Ctrl+Shift+N) — evita cache.

### Checklist

Acesse `https://aurisolutions.com.br` e marque:

- [ ] **Home renderiza** (sem 502/503/erro de SSL)
- [ ] **HTTPS funcionando** — cadeado verde, sem aviso de "conexão não segura"
- [ ] **Páginas dos 4 produtos abrem**: `/acolheduc`, `/nexusvr`, `/lumina`, `/cbt`
- [ ] **Imagens reais carregam** nas páginas dos produtos (`/products/lumina/home.png` etc.)
- [ ] **Health check responde JSON** — `curl https://aurisolutions.com.br/api/health`
- [ ] **Form de contato envia** — preencha nome/email/mensagem e verifique:
  - Resposta visual de sucesso
  - Console do `auri-postgres`: `psql -U auri_user -d auri_db -c 'SELECT id, name, email, created_at FROM contacts ORDER BY created_at DESC LIMIT 5;'` — deve aparecer o contato
- [ ] **Analytics gravando** — abra a home, depois rode no Postgres: `SELECT page, COUNT(*) FROM page_views GROUP BY page;` — deve ter linhas
- [ ] **Logs do auri-site** sem erros recorrentes 5xx nas últimas linhas
- [ ] **DevTools (F12) → Network** — todas as chamadas a `/api/*` retornam 200 (ou 201 no POST de contato)

Se tudo OK, deploy concluído 🚀

---

## Fase 7 — Hardening

### 7.1 — Confirmar que `.env` NÃO está no repo

```bash
git ls-files | grep -E '^\.env$|^\.env\.'
```

Não deve retornar nada (ou só `.env.example`). Se retornar `.env`, **APAGUE do repo agora** (`git rm --cached .env`) — credenciais não vão pro GitHub.

### 7.2 — Configurar backup automático do Postgres

1. EasyPanel → `auri-postgres` → aba **Backups** ou **Snapshots**
2. Habilite backup diário
3. Idealmente configure destino externo (S3 / Backblaze B2 / outro storage fora da VPS)
4. Anote frequência e retenção (ex: diário, 30 dias)

### 7.3 — Verificar HTTPS / HSTS

```bash
curl -I https://aurisolutions.com.br
```

Procure no header:
- `strict-transport-security: max-age=...` → HSTS ativo (forçará HTTPS no futuro)
- `server: ...` → confirma que está servindo via Traefik

### 7.4 — Monitorar primeiras 24-48h

- EasyPanel → Logs do `auri-site` → procure por `[error]`, `5xx`, exceções
- Postgres → métricas de CPU/memória (se houver picos estranhos)
- Form de contato: confirme que leads estão chegando

### 7.5 — README com info de produção

Anote em local seguro (não no repo):
- URL de produção
- Credenciais do EasyPanel
- Senha do Postgres
- Onde estão os backups
- Quem é o responsável

---

## Apêndice A — Atualizações futuras

### Push de código novo

```bash
git push origin main
```

EasyPanel detecta mas não implanta sozinho. Vá em `auri-site` → **Implantações** → **Implantar**. ~3-5 min.

### Mudar `DATABASE_URL` ou variáveis runtime

Aba **Ambiente** → editar → Salvar → **Reiniciar** (~10s).

### Mudar `NEXT_PUBLIC_SITE_URL` (build-time)

Aba **Ambiente** → editar → Salvar → **Implantar** (rebuild ~5 min). **NÃO** basta Reiniciar — Next congela em build time.

### Atualização de schema do Prisma

Após editar `prisma/schema.prisma` e dar push:

1. Implantar `auri-site` (build novo já roda `prisma generate`)
2. Console do `auri-site` → `npx prisma db push` (sem `--accept-data-loss` se já houver dados)
3. Reiniciar `auri-site`

### Adicionar domínio extra (ex: staging)

1. DNS: novo subdomínio apontando para o IP da VPS
2. EasyPanel → `auri-site` → **Domínios** → **+ Adicionar Domínio**
3. Host, Path `/`, Porta `3000`, HTTPS ✓
4. Salvar — Let's Encrypt emite cert em ~1-2 min

### Debug em produção

- Aba **Console** → shell direto no container
- Pode rodar `psql`, `node -e`, `curl localhost:3000/api/health`
- Logs em tempo real: aba **Logs** → marcar "Acompanhar" / "Tail"

---

## Apêndice B — Problemas comuns

### "Build do auri-site falha em prisma generate"

**Causa:** Postgres ainda não está rodando, ou `npm ci` rodou postinstall antes do schema ser copiado.

**Correção:** O `Dockerfile` já usa `npm ci --ignore-scripts` no stage `deps` e roda `npx prisma generate` em `builder` após copiar o schema. Se ainda assim falhar, confirme que `prisma/schema.prisma` está commitado no repo.

### "Build trava ou OOM"

**Causa:** memória insuficiente.

**Correção:** **Recursos** → **Memória** → **1024 MB**. Salvar e Implantar.

### "API retorna HTML em vez de JSON"

**Sintoma:** `curl https://aurisolutions.com.br/api/health` retorna HTML.

**Causa:** domínio mal configurado — provavelmente Host com `https://` ou Path com `//`.

**Correção:**
1. EasyPanel → `auri-site` → **Domínios** → apague a entrada
2. **+ Adicionar Domínio**:
   - Host: `aurisolutions.com.br` (sem `https://`, sem barra)
   - Path: `/` (uma barra só)
   - Porta: `3000`
   - HTTPS: ✓
3. Salvar e aguardar 1-2 min

### Form de contato falha com 500

**Sintoma:** mensagem não envia, log do `auri-site` mostra erro Prisma.

**Causa A:** `DATABASE_URL` errada (hostname não resolve).

**Correção:** confirmar que é `auri_auri-postgres` (formato `<projeto>_<servico>`) e a senha bate com a do `auri-postgres`.

**Causa B:** tabelas ainda não criadas.

**Correção:** Fase 5 — `npx prisma db push` no Console.

### Status amarelo "Service is not reachable"

**Causa:** healthcheck do Dockerfile falhando (Alpine + `wget --spider` é instável).

**Correção:** o `Dockerfile` deste repo **já não tem** `HEALTHCHECK` — o EasyPanel/Traefik faz probe HTTP direto via domínio. Se você adicionou um manualmente, remova.

### Cadeado vermelho / "Sua conexão não é particular"

**Causa:** Let's Encrypt ainda não emitiu o cert (DNS pode não ter propagado completamente).

**Correção:** aguarde 5-10 min após `nslookup` confirmar o IP. Se persistir, EasyPanel → Domínio → "Renovar Certificado" / "Reemitir SSL".

### `ERR_NAME_NOT_RESOLVED` no navegador

**Causa:** DNS ainda propagando.

**Correção:** `nslookup aurisolutions.com.br` periodicamente. Se 24h depois não resolver, conferir Zona DNS no painel Hostinger.

### Variável `NEXT_PUBLIC_SITE_URL` foi alterada e não tem efeito

**Causa:** você reiniciou em vez de re-buildar. Variáveis `NEXT_PUBLIC_*` são congeladas em build time.

**Correção:** **Implantações** → **Implantar** (não Reiniciar). ~5 min.

---

## Encerramento

Esse tutorial cobre o caminho completo do "VPS recém-contratada" até "site da Auri em produção com HTTPS". Como Auri é uma app Next.js fullstack, o setup é mais simples que o do CBT — 2 serviços em vez de 3, 1 domínio em vez de 2, sem CORS pra configurar.

Para qualquer travamento, o Apêndice B cobre os erros mais comuns. Boa sorte 🚀
