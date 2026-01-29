# 🚀 Guia Completo de Instalação - AuriSolutions Site

Este guia vai te ajudar a rodar o projeto AuriSolutions em qualquer computador, passo a passo.

---

## 📋 Índice

1. [Requisitos](#-requisitos)
2. [Instalação Rápida (5 minutos)](#-instalação-rápida)
3. [Instalação Detalhada](#-instalação-detalhada)
4. [Usando Docker (Recomendado)](#-usando-docker)
5. [Problemas Comuns](#-problemas-comuns)
6. [Comandos Úteis](#-comandos-úteis)

---

## 📦 Requisitos

### Opção A: Instalação Normal
- **Node.js 18+** - [Download aqui](https://nodejs.org/)
- **Git** - [Download aqui](https://git-scm.com/)

### Opção B: Usando Docker (mais fácil)
- **Docker Desktop** - [Download aqui](https://www.docker.com/products/docker-desktop/)

### Como verificar se já tenho instalado?

Abra o terminal (CMD, PowerShell ou Terminal) e digite:

```bash
# Verificar Node.js
node --version
# Deve mostrar: v18.x.x ou superior

# Verificar npm
npm --version
# Deve mostrar: 9.x.x ou superior

# Verificar Git
git --version
# Deve mostrar: git version 2.x.x

# Verificar Docker (se for usar)
docker --version
# Deve mostrar: Docker version 20.x.x ou superior
```

---

## ⚡ Instalação Rápida

Se você já tem Node.js instalado, execute estes comandos:

```bash
# 1. Clonar o projeto
git clone https://github.com/dgllpnv/aurisolutions-site.git

# 2. Entrar na pasta
cd aurisolutions-site

# 3. Instalar dependências
npm install

# 4. Rodar o projeto
npm run dev
```

Acesse: **http://localhost:3000**

---

## 📖 Instalação Detalhada

### Passo 1: Instalar Node.js

1. Acesse https://nodejs.org/
2. Clique no botão verde **"LTS"** (versão recomendada)
3. Execute o instalador baixado
4. Clique em **Next** em todas as telas
5. Reinicie o computador (recomendado)

### Passo 2: Instalar Git

1. Acesse https://git-scm.com/
2. Clique em **Download for Windows/Mac**
3. Execute o instalador
4. Aceite todas as opções padrão

### Passo 3: Clonar o Projeto

Abra o **terminal** (CMD, PowerShell, ou Terminal no Mac):

**Windows:**
- Pressione `Win + R`
- Digite `cmd` e pressione Enter

**Mac:**
- Pressione `Cmd + Espaço`
- Digite `Terminal` e pressione Enter

Agora digite os comandos:

```bash
# Navegar para onde você quer salvar o projeto
# Exemplo: Documentos
cd Documents

# Clonar o projeto do GitHub
git clone https://github.com/dgllpnv/aurisolutions-site.git

# Entrar na pasta do projeto
cd aurisolutions-site
```

### Passo 4: Instalar Dependências

Ainda no terminal, dentro da pasta `aurisolutions-site`:

```bash
npm install
```

⏳ Aguarde... isso pode demorar de 1 a 5 minutos dependendo da internet.

Você verá várias linhas sendo impressas. Quando terminar, você verá algo como:

```
added 350 packages in 45s
```

### Passo 5: Rodar o Projeto

```bash
npm run dev
```

Você verá:

```
▲ Next.js 15.5.9
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 1767ms
```

### Passo 6: Abrir no Navegador

1. Abra seu navegador (Chrome, Firefox, Edge, etc.)
2. Digite na barra de endereço: **http://localhost:3000**
3. Pressione Enter

🎉 **Pronto!** O site deve estar funcionando!

### Passo 7: Parar o Servidor

Para parar o servidor, volte ao terminal e pressione:
- **Windows/Linux:** `Ctrl + C`
- **Mac:** `Cmd + C`

---

## 🐳 Usando Docker

Docker é a forma mais fácil e confiável de rodar o projeto, pois cria um ambiente isolado.

### Passo 1: Instalar Docker Desktop

1. Acesse https://www.docker.com/products/docker-desktop/
2. Baixe e instale o Docker Desktop
3. Abra o Docker Desktop (ele precisa estar rodando)

### Passo 2: Clonar o Projeto

```bash
git clone https://github.com/dgllpnv/aurisolutions-site.git
cd aurisolutions-site
```

### Passo 3: Rodar com Docker

**Modo Desenvolvimento (com hot-reload):**
```bash
docker compose --profile dev up --build
```

**Modo Produção:**
```bash
docker compose --profile prod up -d --build
```

### Passo 4: Acessar

Abra o navegador em: **http://localhost:3000**

### Passo 5: Parar o Docker

```bash
# Modo desenvolvimento
docker compose --profile dev down

# Modo produção
docker compose --profile prod down
```

---

## 🔧 Problemas Comuns

### ❌ "Port 3000 is in use"

A porta 3000 está sendo usada por outro programa.

**Solução 1:** Usar outra porta
```bash
npm run dev -- -p 4000
# Acesse: http://localhost:4000
```

**Solução 2:** Matar o processo na porta 3000

Windows:
```bash
netstat -ano | findstr :3000
taskkill /PID <numero_do_PID> /F
```

Mac/Linux:
```bash
lsof -i :3000
kill -9 <PID>
```

---

### ❌ "Cannot find module" ou erros de webpack

O cache está corrompido.

**Solução:**

Windows (PowerShell):
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

Windows (CMD):
```cmd
rmdir /s /q .next
npm run dev
```

Mac/Linux:
```bash
rm -rf .next
npm run dev
```

**Se persistir:**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

---

### ❌ "'npm' não é reconhecido como comando"

Node.js não está instalado ou não está no PATH.

**Solução:**
1. Reinstale o Node.js: https://nodejs.org/
2. Marque a opção "Add to PATH" durante a instalação
3. Reinicie o computador
4. Tente novamente

---

### ❌ "EACCES permission denied"

Problema de permissão (comum no Mac/Linux).

**Solução:**
```bash
sudo npm install
```

---

### ❌ Tela branca ou erro no navegador

**Solução:**
1. Pare o servidor (`Ctrl+C`)
2. Limpe o cache:
   ```bash
   rm -rf .next
   ```
3. Reinicie:
   ```bash
   npm run dev
   ```
4. Faça hard refresh no navegador: `Ctrl+Shift+R` ou `Cmd+Shift+R`

---

## 📝 Comandos Úteis

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Inicia em modo desenvolvimento |
| `npm run build` | Cria versão de produção |
| `npm run start` | Roda versão de produção |
| `npm run lint` | Verifica erros no código |
| `npm run lint:fix` | Corrige erros automaticamente |

---

## 🌐 Estrutura do Projeto

```
aurisolutions-site/
├── src/
│   ├── app/                    # Páginas do site
│   │   ├── page.tsx            # Home (/)
│   │   ├── acolheduc/          # Página Acolheduc
│   │   ├── nexusvr/            # Página NexusVR
│   │   ├── lumina/             # Página Lumina
│   │   └── api/health/         # API de health check
│   │
│   ├── components/             # Componentes reutilizáveis
│   └── features/               # Features por domínio
│
├── public/                     # Arquivos estáticos
├── Dockerfile                  # Config Docker produção
├── Dockerfile.dev              # Config Docker desenvolvimento
├── docker-compose.yml          # Orquestração Docker
└── package.json                # Dependências
```

---

## 🔗 Links das Páginas

Após rodar o projeto, acesse:

| Página | URL |
|--------|-----|
| Home | http://localhost:3000 |
| Acolheduc | http://localhost:3000/acolheduc |
| NexusVR | http://localhost:3000/nexusvr |
| Lumina | http://localhost:3000/lumina |
| Health Check | http://localhost:3000/api/health |

---

## 💡 Dicas

1. **Use Docker** se tiver problemas com Node.js
2. **Sempre limpe o cache** (`.next`) se encontrar erros estranhos
3. **Reinicie o terminal** após instalar Node.js
4. **Use o VS Code** para editar o código: https://code.visualstudio.com/

---

## 🆘 Precisa de Ajuda?

Se nada funcionar:

1. Delete a pasta do projeto
2. Clone novamente:
   ```bash
   git clone https://github.com/dgllpnv/aurisolutions-site.git
   cd aurisolutions-site
   npm install
   npm run dev
   ```

---

**AuriSolutions Gen 2 - 2026** ✨
