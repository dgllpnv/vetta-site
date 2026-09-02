# Brief Mestre — Redesign AuriSolutions (para sessão com Claude)

> Este documento existe para ser colado/anexado no início de uma sessão de design com Claude (Claude Code, Claude com artifacts, ou Claude for Chrome). Ele consolida tudo que a Claude precisa saber sobre a Auri para trabalhar com autonomia e qualidade, e define como conduzir o trabalho. Não é um documento de marketing — é um pacote de contexto operacional.

---

## 1. O que é a AuriSolutions (a "Auri")

**AuriSolutions** — internamente e no site também chamada apenas de **"Auri"** ("Conhecer a Auri") — é um **estúdio de produtos digitais verticais**, com foco inicial em **Educação**, que opera em dois modelos de negócio simultâneos:

1. **Produtos próprios (SaaS verticais)** — software que a Auri constrói, é dona, e vende/licencia para clientes em nichos específicos.
2. **Desenvolvimento sob medida + automações** — para clientes que precisam de algo que não existe pronto, ou de integração/automação de processos (ex.: WhatsApp Business API, n8n, IA).

Isso é a peça-chave para qualquer redesign: **a Auri não é uma agência genérica nem uma startup de produto único**. É um estúdio que já provou (com produtos reais em produção, clientes pagantes, uptime medido) que sabe entregar software vertical de qualidade enterprise rapidamente — e usa essa credibilidade para vender tanto os produtos prontos quanto o serviço sob medida.

Posicionamento textual atual (site em produção, aurisolutions.com.br):
- Headline: **"Software vertical de qualidade enterprise, entregue em semanas"**
- Subheadline: **"Estúdio de produtos para Educação. Quatro produtos próprios em produção e desenvolvimento sob medida com arquitetura Gen 2"**
- Institucional: **"Estúdio de Produtos Digitais. Construímos soluções robustas que já estão em produção, gerando valor real para nossos parceiros"**

**Importante:** o site em produção já evoluiu além do que está no repositório local (ver seção 6 — Estado Atual). Antes de redesenhar, confirme com o usuário qual é a fonte de verdade para conteúdo (produção vs. repo local vs. algo novo).

---

## 2. Os produtos (a prova, não a promessa)

A credibilidade da Auri vem de mostrar produtos reais rodando, não de adjetivos. Qualquer redesign deve **manter e reforçar essa prova concreta** — números reais, produtos reais, sem mockups genéricos de stock.

| Produto | Segmento | Tagline | O que faz | Cor funcional |
|---|---|---|---|---|
| **Acolheduc** | Gestão escolar | "Gestão Escolar Inteligente" | Plataforma completa para redes de ensino: dashboard de acompanhamento RTI, portfólio digital de evidências, geração de conteúdo pedagógico assistida por IA | Verde esmeralda `#10B981` |
| **NexusVR** | Educação imersiva | "Aulas em Realidade Virtual" | Plataforma de aulas imersivas com Meta Quest 3 e WebXR | Azul `#3B82F6` |
| **Lumina** | Hospitalidade | "Onde a excelência encontra a gestão" | Gestão de restaurantes e pousadas: PDV moderno, controle financeiro | Âmbar `#F59E0B` |
| **Coldre System** | Esportes (tiro esportivo) | "Excelência em tiro esportivo" | Sistema operacional para clubes de tiro esportivo, com auditoria nativa | *(a definir — repo local ainda não tem este produto)* |

Além disso, uma linha de **Automações** aparece como oferta própria no site atual: *"Atender mais clientes, gastando menos"* — integração de sistemas/canais (WhatsApp Business API, n8n, IA) para reduzir tarefas repetitivas. Trate isso como um **quarto pilar de oferta**, não só um detalhe técnico: Produtos próprios · Sob medida · Automações.

Stack técnica citada publicamente (usar com moderação visual, como selo de credibilidade técnica, não como enfeite): Next.js, TypeScript, PostgreSQL, Prisma, Vercel, n8n, WhatsApp Business API, Google Workspace, OpenAI, Anthropic, Telegram. Selos de confiança: **LGPD compliant · 99,9% uptime · Multi-tenant ready**.

---

## 3. Os 3 pilares de marca (o filtro para toda decisão visual)

Todo elemento de UI deve responder "sim" a pelo menos um destes:

1. **Autoridade técnica** — "nós sabemos o que fazemos". Produtos reais, números concretos ("12+ escolas", "50k transações/mês"), stack visível mas discreta, zero floreio decorativo.
2. **Pragmatismo** — "resolvemos seu problema da forma mais eficiente". Copy direto sem jargão, hierarquia óbvia, CTAs objetivos ("Ver Produtos", não "Descubra nossas soluções inovadoras"), navegação sem fricção.
3. **Encantamento** — "a experiência é boa o suficiente para justificar a parceria". Micro-interações sutis, transições de 150–400ms, espaço em branco como elemento de design, nunca decoração gratuita.

Analogia de referência interna já usada no projeto: *"se a Auri fosse um objeto, seria um relógio de precisão suíço ou um smartphone topo de linha — não um brinquedo colorido."*

### Tom de voz — regras explícitas
**Fazer:** frases diretas ("3 produtos em produção"), confiantes ("Entregamos soluções"), específicas ("12+ escolas ativas"). Headlines curtas (máx. ~8 palavras), focadas em resultado.
**Evitar:** buzzwords ("soluções inovadoras disruptivas"), superlativos ("o melhor", "revolucionário"), promessas vagas ("transforme seu negócio"), propostas de 80 páginas cheias de jargão — o próprio site já usa isso como diferencial: *"Sem jargão técnico. Sem proposta de 80 páginas."*

---

## 4. Referências de design já validadas internamente

Tier S (inspiração principal — "o que roubar"): **Linear** (dark mode, bordas finas, clareza cirúrgica), **Vercel** (simplicidade absoluta, grid, zero decoração), **Stripe** (hierarquia perfeita, animação que explica), **Supabase** (técnico mas acessível), **Raycast** (developer-first, precisão).

Tier A (elementos pontuais): Apple (whitespace dramático), PlanetScale (premium para infra), Arc (linhas limpas, gradiente sutil), Resend (minimalismo extremo), Clerk (componentes polidos).

Ao pedir para a Claude gerar variações visuais, é mais eficaz **mostrar** essas referências (screenshots ou URLs) do que só nomeá-las — Claude com acesso a browser (claude-in-chrome) ou com imagens anexadas rende decisões de design muito mais precisas do que a partir de descrição textual.

---

## 5. Sistema de design — dois rascunhos existentes, precisam de reconciliação

O repositório tem **dois documentos de design conflitantes** (`AURI_IDENTITY.md` e `REDESIGN_PLAN.md`), gerados em momentos diferentes. Antes de implementar, a Claude deve **escolher e declarar explicitamente uma única direção**, não misturar as duas. Principais divergências:

| Decisão | `AURI_IDENTITY.md` | `REDESIGN_PLAN.md` |
|---|---|---|
| Cor de marca | Indigo `#6366F1` (mais sóbrio) | Violet `#6C47FF` (mais saturado) |
| Tipografia de headline | Inter (sans, todos os pesos) | Serifa (Instrument Serif / Playfair Display) para headlines, Inter no corpo |
| Fundo | `#030303` | `#050505` |

**Recomendação para a sessão de design:** peça à Claude para **propor e justificar uma escolha única** (ou apresentar 2-3 variações lado a lado para o usuário escolher) em vez de herdar cegamente um dos dois documentos. O uso de serifa em headlines é uma aposta de diferenciação de marca — vale validar com o usuário antes de aplicar em todo o site, não assumir.

Tokens em comum entre os dois (provavelmente seguros de manter): fundo quase-preto em camadas (`bg-0`→`bg-3`), texto em hierarquia de 4 níveis (`fg-primary`→`fg-subtle`), bordas ultra-sutis (`rgba(255,255,255,0.06–0.12)`), sombras quase invisíveis (profundidade vem de camadas de fundo, não de shadow), spacing em grid de 4px, radius de 6–20px, easing `cubic-bezier(0.16, 1, 0.3, 1)`.

Note também que o site em produção hoje é descrito como **"tema predominantemente claro"** (light mode), o que contradiz totalmente os dois documentos de design (100% dark mode). Isso é uma divergência crítica a esclarecer com o usuário logo no início: **o site já mudou de direção visual em produção, ou a claude que analisou capturou algo desatualizado/diferente?** Não assumir — perguntar.

---

## 6. Estado atual do projeto (repo local vs. produção)

O repositório local (`vetta-site-main`) está em **Next.js 15 + React 19 + TypeScript + Tailwind + Framer Motion + Lucide**, arquitetura feature-based (`src/features/{hero,products,custom-dev,contact}`), com páginas de produto em `src/app/{acolheduc,nexusvr,lumina}`.

Discrepâncias conhecidas entre o repo local e o site publicado em aurisolutions.com.br:
- Repo local tem **3 produtos** (Acolheduc, NexusVR, Lumina). Produção tem **4** (+ Coldre System).
- Produção tem uma seção de **Automações** que não existe no repo local.
- Produção usa CTAs diferentes ("Explorar ecossistema", "Conhecer a Auri", "Ver demo ao vivo", "Iniciar conversa") dos descritos no plano local.
- Estilo visual percebido em produção foi reportado como claro/legível, não o dark mode "quase OLED" descrito nos dois documentos de design.

**Ação recomendada antes de qualquer refatoração visual:** confirmar se este repositório é de fato o código-fonte do site em produção (pode haver deploy mais recente em outro branch/repo, ou o site pode ter sido atualizado por outra via). Rodar `git log`, checar branch atual e comparar com o HTML/CSS servido em produção antes de escrever uma linha de CSS nova.

---

## 7. O que NÃO pode mudar (âncoras de negócio, não de design)

- Nomes e domínios dos produtos: Acolheduc (`acolheduc.com.br`), NexusVR (`nexusvr.com.br`), Lumina (`lumina.aurisolutions.com.br`), Coldre System.
- Fatos e números reais dos produtos — nunca inventar estatística nova ("50k transações/mês" etc. só se for real e fornecida pelo usuário).
- E-mail de contato (`contato@aurisolutions.com.br`) e demais dados de contato.
- Modelo de negócio dual (produto próprio + sob medida) e a oferta de automações — são pilares de receita, não detalhes de copy.
- Compliance/selo LGPD, uptime real, se declarados.

O redesign é de **aparência, hierarquia visual, motion e estrutura de página** — não de proposta de valor ou fatos do negócio, a menos que o usuário peça explicitamente.

---

## 8. Como conduzir a sessão de design com Claude (boas práticas)

Para aproveitar melhor a capacidade de design da Claude neste projeto, estruture o trabalho assim:

1. **Fase 0 — Alinhamento.** Peça para a Claude confirmar o entendimento da marca (resumir em poucas frases o que é a Auri) e sinalizar as divergências da seção 5 e 6 antes de tocar em código. Não deixar a Claude assumir decisões de negócio sozinha (paleta final, dark vs light, quais produtos existem) sem confirmação.
2. **Fase 1 — Design tokens primeiro.** Definir e aprovar paleta, tipografia, spacing, radius, shadows, motion — antes de qualquer componente. Isso evita retrabalho quando o usuário pedir ajuste de cor/fonte no meio do caminho.
3. **Fase 2 — Componentização, não página por página.** Redesenhar os componentes-base reutilizáveis primeiro (Button, Card, Container, Header, Footer), depois compor as seções (Hero, Product Showcase, Automações, Sob Medida, Contato). Isso é consistente com a arquitetura feature-based já usada no repo.
4. **Fase 3 — Uma seção por vez, com preview visual real.** Depois de cada seção, rodar `npm run dev` e olhar no navegador (via claude-in-chrome ou screenshot) antes de seguir para a próxima — não acumular várias seções sem checagem visual.
5. **Fase 4 — Responsividade e acessibilidade como parte do "pronto", não como polimento final.** Testar em 320px+ desde o início de cada componente, não só no fim. Contraste mínimo 4.5:1.
6. **Fase 5 — Revisão de copy em paralelo, não depois.** Como o redesign toca hierarquia e headlines, revisar o texto junto com o layout (headlines curtas, sem buzzword) em vez de só trocar CSS por cima de copy antigo.

### Dar contexto visual, não só textual
Sempre que possível, forneça à Claude:
- Screenshot(s) do site atual em produção (estado real, não o que o repo local mostra).
- Screenshots ou links das referências Tier S/A (seção 4), especialmente se pedir para "ficar mais parecido com X".
- Screenshots reais das interfaces dos 4 produtos (Acolheduc, NexusVR, Lumina, Coldre System) — são o ativo de credibilidade mais importante do site e claude não pode inventá-los.

### Checklist de qualidade por componente (herdado do projeto)
- [ ] Funciona em mobile (320px+)?
- [ ] Hierarquia clara — o olho sabe para onde ir?
- [ ] Sem decoração sem propósito?
- [ ] Toda animação comunica algo (não é só enfeite)?
- [ ] Copy direto e específico (sem buzzword/superlativo)?
- [ ] Segue os design tokens aprovados na Fase 1?
- [ ] Espaçamento consistente com o grid de 4px?
- [ ] Contraste acessível (4.5:1+)?

---

## 9. Primeiro prompt sugerido para abrir a sessão com Claude

> "Aqui está o brief completo do redesign da AuriSolutions (`CLAUDE_DESIGN_BRIEF.md`). Antes de escrever qualquer código: (1) resuma em 3-4 frases o que você entendeu sobre o negócio e os produtos; (2) liste as divergências que encontrou entre os documentos de design e a produção (seções 5 e 6) e pergunte o que confirmar; (3) proponha uma direção única de design tokens (paleta, tipografia, dark/light) para eu aprovar antes de tocar em componentes. Não implemente nada ainda."

Isso força a Claude a demonstrar entendimento e resolver as ambiguidades reais do projeto antes de gastar ciclos gerando código que pode ser jogado fora.

---

## 10. Fontes internas consultadas para este brief

- `README.md` — visão geral do projeto e stack.
- `ARCHITECTURE.md` — arquitetura Gen 2, feature-based.
- `AURI_IDENTITY.md` — sistema de design v1 (indigo, dark, Inter).
- `REDESIGN_PLAN.md` — plano de redesign v2 (violet, dark, serifa), com perguntas de aprovação ainda em aberto (screenshots reais, logo SVG, cores por produto, tipografia serifada, escopo de páginas) — essas perguntas continuam válidas e não respondidas.
- `aurisolutions.com.br` (produção, consultado em 2026-08-07) — conteúdo e estrutura reais publicados hoje.
