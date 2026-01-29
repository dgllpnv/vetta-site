# Vetta - Site Institucional

Site institucional da Vetta, um Estúdio de Produtos Digitais que desenvolve soluções tecnológicas de alta qualidade.

## Sobre a Vetta

A Vetta é um estúdio de produtos digitais com três produtos principais:

- **Acolheduc** - Plataforma de gestão escolar inteligente com IA
- **NexusVR** - Plataforma de aulas em realidade virtual com Meta Quest 3
- **Lumina** - Sistema de gestão para hospitalidade (hotéis e restaurantes)

---

## Requisitos do Sistema

Antes de começar, certifique-se de ter instalado:

- **Node.js** versão 18.x ou superior
  - Download: https://nodejs.org/
  - Verificar instalação: `node --version`

- **npm** (geralmente vem com o Node.js)
  - Verificar instalação: `npm --version`

- **Git** (para clonar o repositório)
  - Download: https://git-scm.com/
  - Verificar instalação: `git --version`

---

## Instalação Passo a Passo

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/vetta-site.git
cd vetta-site
```

### 2. Instalar Dependências

```bash
npm install
```

Este comando irá instalar todas as dependências listadas no `package.json`, incluindo:
- Next.js 15
- React 19
- Framer Motion (animações)
- Tailwind CSS (estilos)
- Lucide React (ícones)

### 3. Executar em Modo de Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento será iniciado. Acesse:
- **Local:** http://localhost:3000
- Se a porta 3000 estiver em uso, o Next.js escolherá automaticamente outra porta disponível (ex: 3001, 3002, etc.)

### 4. Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

### 5. Executar Build de Produção

Após o build, para executar a versão de produção localmente:

```bash
npm run start
```

---

## Estrutura do Projeto

```
vetta-site/
├── src/
│   ├── app/                    # Páginas (App Router do Next.js)
│   │   ├── page.tsx            # Página inicial (Home)
│   │   ├── layout.tsx          # Layout global
│   │   ├── globals.css         # Estilos globais
│   │   ├── acolheduc/          # Página do Acolheduc
│   │   ├── nexusvr/            # Página do NexusVR
│   │   └── lumina/             # Página do Lumina
│   │
│   ├── components/             # Componentes reutilizáveis
│   │   └── layout/
│   │       ├── header.tsx      # Cabeçalho do site
│   │       └── footer.tsx      # Rodapé do site
│   │
│   └── features/               # Features organizadas por domínio
│       ├── hero/               # Seção Hero da home
│       ├── products/           # Showcase de produtos e páginas
│       ├── custom-dev/         # Seção "Sob Medida"
│       └── contact/            # Seção de contato
│
├── public/                     # Arquivos estáticos
├── package.json                # Dependências e scripts
├── tailwind.config.ts          # Configuração do Tailwind CSS
├── tsconfig.json               # Configuração do TypeScript
└── next.config.ts              # Configuração do Next.js
```

---

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria build otimizado para produção |
| `npm run start` | Executa o build de produção |
| `npm run lint` | Executa verificação de código (ESLint) |
| `npm run lint:fix` | Corrige automaticamente erros de lint |
| `npm run typecheck` | Verifica tipos TypeScript |
| `npm run format` | Formata código com Prettier |
| `npm run format:check` | Verifica formatação do código |

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| Next.js | 15.x | Framework React com App Router |
| React | 19.x | Biblioteca de UI |
| TypeScript | 5.x | Tipagem estática |
| Tailwind CSS | 3.x | Framework de estilos utilitários |
| Framer Motion | 11.x | Biblioteca de animações |
| Lucide React | 0.x | Biblioteca de ícones |

---

## Customização

### Cores dos Produtos

As cores de cada produto estão definidas nos próprios componentes:

- **Acolheduc:** `#10B981` (Verde esmeralda)
- **NexusVR:** `#8B5CF6` (Violeta)
- **Lumina:** `#F59E0B` (Âmbar)

### Conteúdo dos Produtos

Os dados dos produtos podem ser editados em:
- **Home (cards):** `src/features/products/components/product-showcase.tsx`
- **Acolheduc:** `src/features/products/components/acolheduc-page.tsx`
- **NexusVR:** `src/features/products/components/nexusvr-page.tsx`
- **Lumina:** `src/features/products/components/lumina-page.tsx`

### Links Externos

Os links para os sites oficiais dos produtos estão nos arquivos de página de cada produto:
- Acolheduc: `https://acolheduc.com.br`
- NexusVR: `https://nexusvr.com.br`
- Lumina: `https://lumina.vetta.com.br`

---

## Troubleshooting

### Erro: "Port 3000 is in use"

O Next.js automaticamente escolhe outra porta. Verifique o terminal para ver qual porta foi escolhida.

Para liberar a porta manualmente:

**Windows (CMD/PowerShell):**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
lsof -i :3000
kill -9 <PID>
```

### Erro: Cache corrompido / Webpack errors

Se encontrar erros como `__webpack_modules__[moduleId] is not a function` ou `Cannot find module './XXX.js'`, o cache do webpack está corrompido.

**Solução rápida:**

**Mac/Linux:**
```bash
rm -rf .next
npm run dev
```

**Windows (PowerShell):**
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

**Windows (CMD):**
```cmd
rmdir /s /q .next
npm run dev
```

**Solução completa (se o erro persistir):**

1. Mate todos os processos Node.js:
   - Windows: `taskkill /F /IM node.exe`
   - Mac/Linux: `killall node`

2. Limpe cache e reinstale:
   ```bash
   rm -rf .next node_modules
   npm install
   npm run dev
   ```

3. Se ainda persistir, use Docker para ambiente isolado:
   ```bash
   docker compose --profile dev up --build
   ```

### Erro: Dependências não encontradas

Reinstale as dependências:

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

**Windows:**
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Erro: Versão do Node.js incompatível

Verifique se está usando Node.js 18 ou superior:

```bash
node --version
```

Se necessário, atualize o Node.js ou use o NVM para gerenciar versões:
- NVM para Windows: https://github.com/coreybutler/nvm-windows
- NVM para Mac/Linux: https://github.com/nvm-sh/nvm

---

## Docker

O projeto inclui configuração completa para Docker, tanto para desenvolvimento quanto produção.

### Pré-requisitos

- Docker 20.10 ou superior
- Docker Compose V2 ou superior

### Desenvolvimento com Docker

```bash
# Construir e iniciar em modo desenvolvimento
docker compose --profile dev up --build

# Ou em background
docker compose --profile dev up -d --build

# Ver logs
docker compose logs -f

# Parar
docker compose --profile dev down
```

O modo desenvolvimento inclui:
- Hot-reload automático
- Volumes montados para desenvolvimento
- Porta 3000 exposta

### Produção com Docker

```bash
# Construir imagem de produção
docker compose --profile prod build

# Iniciar em produção (background)
docker compose --profile prod up -d

# Ver logs
docker compose logs -f

# Parar
docker compose --profile prod down
```

O modo produção inclui:
- Build multi-stage otimizado
- Imagem mínima (~150MB)
- Health check automático
- Reinício automático
- Usuário não-root para segurança

### Health Check

A aplicação expõe um endpoint de health check:

```bash
curl http://localhost:3000/api/health
# Resposta: {"status":"healthy","timestamp":"...","version":"1.0.0"}
```

### Estrutura dos Arquivos Docker

```
vetta-site/
├── Dockerfile          # Build de produção (multi-stage)
├── Dockerfile.dev      # Build de desenvolvimento
├── docker-compose.yml  # Orquestração
└── .dockerignore       # Arquivos ignorados no build
```

---

## Deploy

### Vercel (Recomendado)

1. Acesse https://vercel.com e faça login
2. Clique em "New Project"
3. Importe o repositório do GitHub
4. A Vercel detectará automaticamente que é um projeto Next.js
5. Clique em "Deploy"

**Variáveis de ambiente (se necessário):**
- Configure no painel da Vercel em Settings > Environment Variables

### Netlify

1. Acesse https://netlify.com e faça login
2. Clique em "Add new site" > "Import an existing project"
3. Conecte ao GitHub e selecione o repositório
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Clique em "Deploy site"

### Deploy Manual (VPS/Servidor)

1. Clone o repositório no servidor
2. Instale as dependências: `npm install`
3. Faça o build: `npm run build`
4. Inicie o servidor: `npm run start`
5. Configure um reverse proxy (nginx/apache) para a porta 3000
6. (Opcional) Use PM2 para manter o processo rodando:
   ```bash
   npm install -g pm2
   pm2 start npm --name "vetta-site" -- start
   pm2 save
   pm2 startup
   ```

---

## Desenvolvimento

### Convenções de Código

- **Componentes:** PascalCase (ex: `ProductShowcase.tsx`)
- **Funções/variáveis:** camelCase (ex: `handleClick`)
- **Arquivos de estilo:** Tailwind CSS inline
- **Animações:** Framer Motion

### Estrutura de Features

Cada feature segue a estrutura:
```
features/
└── nome-feature/
    ├── components/    # Componentes da feature
    ├── hooks/         # Hooks customizados (se necessário)
    └── utils/         # Utilitários (se necessário)
```

---

## Licença

Projeto proprietário da Vetta. Todos os direitos reservados.

---

## Contato

- **Email:** contato@vetta.com.br
- **Website:** https://vetta.com.br

---

**Vetta Gen 2 - 2026**
