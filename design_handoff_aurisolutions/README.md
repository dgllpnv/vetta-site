# Handoff: Redesign AuriSolutions — landing do estúdio + 4 páginas de produto

## Visão geral

Pacote com cinco páginas redesenhadas para a AuriSolutions:

| Página | Arquivo | Papel |
|---|---|---|
| Landing do estúdio | `designs/AuriSolutions - Landing.dc.html` | Home institucional: quem é a Auri, os 4 produtos, sob medida, automações, contato |
| Acolheduc | `designs/Acolheduc.dc.html` | Produto — gestão escolar |
| NexusVR | `designs/NexusVR.dc.html` | Produto — educação em realidade virtual |
| Lumina | `designs/Lumina.dc.html` | Produto — hospitalidade (restaurante + pousada) |
| Coldre System | `designs/Coldre System.dc.html` | Produto — clubes de tiro esportivo |

O repositório de origem é `vetta-site` (Next.js 15 + React 19 + TypeScript + Tailwind + Framer Motion + Lucide), arquitetura feature-based em `src/features/`.

## Sobre os arquivos de design

**Os arquivos em `designs/` são referências de design feitas em HTML.** São protótipos que mostram a aparência e o comportamento pretendidos — não é código de produção para copiar e colar.

A tarefa é **recriar esses designs no ambiente existente do `vetta-site`**: componentes React, Tailwind, os padrões de pasta que o repo já usa. Não porte o HTML literalmente; leia-o como especificação visual.

Cada `.dc.html` abre direto no navegador (basta manter o `support.js` e a pasta `assets/` ao lado). Abra-os enquanto implementa.

## Fidelidade

**Alta fidelidade (hifi).** Cores, tipografia, espaçamentos, estados e microinterações são finais. Recrie pixel a pixel, usando as bibliotecas e convenções que o repo já tem.

Todas as capturas em `designs/assets/` são **telas reais dos produtos em produção**, fornecidas pelo cliente. Não substitua por mockups genéricos: a prova concreta é o argumento central de venda da Auri.

## Sistema tipográfico (comum às cinco páginas)

Três famílias do Google Fonts, com papéis fixos:

- **Bricolage Grotesque** (`opsz,wght@12..96, 400–700`) — display da marca Auri. Usada na landing e no Acolheduc.
- **Figtree** (400/500/600/700) — corpo de texto em todas as páginas.
- **Instrument Serif** (regular + itálico) — ênfases em itálico. Vira a fonte de título no Lumina.

Duas páginas de produto trocam o display para casar com o produto real:
- **NexusVR** usa **Chakra Petch** (500/600/700).
- **Coldre System** usa **Oswald** (500/600/700) + **JetBrains Mono** (400/500/700) para dados tabulares.

`text-wrap: balance` em títulos, `text-wrap: pretty` em parágrafos.

## Design tokens por página

Cada arquivo declara seus tokens num bloco `:root` no topo. Copie de lá — os valores abaixo são o resumo.

### Landing AuriSolutions — papel quente, índigo elétrico
```
--paper:#FBF9F4   --paper-2:#F4F1E9   --ink:#14141C     --ink-2:#3D3D4A
--muted:#6B6B78   --line:#E4E0D6      --primary:#3A2FD6 --primary-tint:#ECEAFC
Cores por produto: --acolheduc:#6D28D9  --nexus:#BE185D  --lumina:#B45309  --coldre:#166534
```
As cores por produto aqui são **versões escurecidas para uso sobre papel claro** — não são as cores de marca dos produtos. Cada página de produto usa a sua própria.

### Acolheduc — lilás lavado
```
--wash:#FAF7FE  --lilac-1:#F3EAFB  --lilac-2:#E9DDF7  --field:#F1EDFA
--ink:#241B33   --muted:#6E6180    --line:#E7DFF2
--brand:#7E22CE --brand-deep:#5B1E86 --brand-bright:#A855F7 --brand-soft:#C9A9EE
--sun:#F5C24B   --green:#34C77B    --amber:#F5A623    --coral:#EE6A6A
```

### NexusVR — escuro, neon
```
--void:#08040F  --panel:#150C26  --panel-2:#1D1338  --line:rgba(168,85,247,.22)
--text:#F3EDFF  --muted:#AEA0C9
--pink:#F63FA6  --magenta:#C026D3 --purple:#A855F7  --orange:#FF6B35  --cyan:#22D3EE
```

### Lumina — ciclo de 24 horas
```
--dawn:#FDFBF6  --noon:#F8F0E1  --dusk:#E9DFCF  --night:#1C1B3E  --midnight:#111029
--indigo:#312E81 --amber:#B45309 --amber-bright:#D97706 --gold:#E7C87A
--ink:#1E1B34   --muted:#585276 --muted-night:#B9B4D8
--line:#E3DACA  --line-night:rgba(255,255,255,.16)
```

### Coldre System — azul-noite militar
```
--navy:#0C1220  --navy-2:#111A2B  --panel:#161F31  --panel-2:#1D2740
--line:rgba(201,162,75,.20)  --line-2:rgba(255,255,255,.09)
--text:#EDF1F7  --muted:#9BA7BC
--orange:#F97316 --orange-soft:#FDBA74 --gold:#C9A24B --green:#34D399 --red:#F87171
```

## Escalas comuns

**Espaçamento** — grid de 4px. Seções usam `clamp()` para respirar em telas grandes:
`padding: clamp(56px,8vw,110px) clamp(20px,5vw,44px)`. Largura máxima de conteúdo: 1280px (Lumina/Acolheduc) ou 1320px (landing, NexusVR, Coldre).

**Raio de borda** — varia por página, e é parte da identidade:
Landing/Acolheduc 12–24px · NexusVR 18–26px (pílulas 999px) · Lumina 6–16px · Coldre 4–6px (deliberadamente duro).

**Sombra** — nas páginas claras, sombras longas e suaves: `0 24px 56px rgba(30,27,52,.10)` até `0 40px 90px rgba(...,.20)`. Nas escuras, `0 40px 90px rgba(0,0,0,.6)` mais borda de 1px.

**Motion** — easing único: `cubic-bezier(.16,1,.3,1)`. Entradas de 700–1000ms com stagger de 80ms. Hovers de 250–450ms. Toda animação comunica algo; nenhuma é enfeite.

## Telas, uma a uma

### 1. Landing AuriSolutions

Papel quente `#FBF9F4`, índigo elétrico como única cor de ação. Estrutura:

- **Header** fixo, 76px, borda inferior de 1px. Links somem abaixo de 1049px.
- **Hero** — headline em Bricolage Grotesque com ênfase em Instrument Serif itálico. CTA duplo.
- **Os quatro produtos** — cada um com sua cor, sua tela real e link para a página do produto.
- **Sob medida** — o modelo de desenvolvimento exclusivo.
- **Automações** — quarto pilar de oferta (WhatsApp Business API, n8n, IA).
- **Contato** — formulário + `aurisolutions@gmail.com`.

### 2. Acolheduc — gestão escolar

Lilás lavado sobre branco. A página é organizada por **quem usa**: o professor, a coordenação, a rede. Bloco Enterprise mostra o painel do administrador da escola com módulos ligáveis, identidade própria e cargos. Grifo amarelo `--sun` pintado como fundo da frase (acompanha a quebra de linha, não vaza).

### 3. NexusVR — realidade virtual na educação

Escuro, neon, conceito **Portal**: profundidade, perspectiva e descida diagonal.

- **Hero** — headline de 92px; a captura entra numa moldura em arco (`border-radius: 220px 220px 24px 24px`) inclinada em `perspective(1400px) rotateY(-9deg)`, com anel pulsante.
- **Ecossistema** — quatro pilares em escada diagonal (larguras 78/70/70/62%, recuos crescentes), numerais fantasma ao fundo.
- **Criar uma aula** — espinha vertical em degradê ciano→roxo→rosa com nós luminosos; capturas alternando de lado em perspectiva.
- **Apps Meta Quest** — prateleira horizontal com scroll (`overflow-x:auto`), 9 cartões numerados. Só os nomes reais dos apps; nenhuma descrição inventada.
- **Gestão** — captura em perspectiva forte com cartão de texto sobrepondo 18%.
- **Contato** — portal circular gigante vazando pelo topo, formulário em vidro fosco.

⚠️ **Contraste:** o botão fixo do topo usa magenta sólido `#C026D3` (4,71:1 com branco). O degradê laranja→magenta só é permitido em texto ≥19px peso 700.

### 4. Lumina — hospitalidade

Conceito **um dia na casa**: o fundo atravessa o ciclo de 24h de um estabelecimento, e cada seção é um horário real da operação.

- **07:00** — os quartos acordam: mapa de quartos, governança.
- **12:30** — o salão lotado: mapa de mesas, cardápio, pedido para a cozinha.
- **16:00** — entre serviços: estoque, equipe, financeiro, configurações.
- **23:45** — fechamento de caixa: painel financeiro consolidado.
- **Lumina Host** — a camada de rede, troca de unidade.

A hora fica carimbada na margem esquerda em vertical (`writing-mode: vertical-rl` + `rotate(180deg)`), mudando de cor conforme o dia passa.

⚠️ **Estrutura crítica do degradê:** a página é dividida em **dois invólucros**. O de cima leva o degradê do dia (`dawn → noon → dusk`); o de baixo, que envolve 23:45, Rede, Depoimento, Contato e rodapé, leva o seu próprio (`#8C7FA8 0 → --night 260px → --midnight 100%`). Não junte num degradê único de página inteira: paradas em porcentagem se ancoram na altura total do documento e desalinham assim que qualquer texto muda de tamanho, deixando texto claro sobre fundo claro.

### 5. Coldre System — clubes de tiro

Azul-noite militar. Conceito **registro auditado**: a página se comporta como a ficha do clube.

- **Retícula** — alvo de mira no canto do hero (círculo dourado + dois fios cruzados) e grade fixa de 64px cobrindo a página.
- **Trilha lateral** — cada seção carrega seu número (`01 / 04`) em monoespaçada e um fio vertical esmaecendo; na primeira, um pulso desce continuamente (animação `sweep`, 6s linear).
- **Presentes no clube** — chegada por facial ou busca, baias em tempo real, vendas na conta, fechamento.
- **Habitualidade CR/CAC** — a comprovação legal como subproduto da presença. Bloco de auditoria nativa destacado com borda esquerda laranja.
- **Cadastro** — tabela do quadro social recriada em HTML, com dados anonimizados e aviso explícito.
- **Financeiro** — receita, despesa, resultado, margem, ticket médio, inadimplência separada entre vencidas e a vencer.

## Comportamento e responsividade

**Breakpoints** (idênticos nas cinco páginas):
- `≤1049px` — links do menu somem; sobra marca + CTA.
- `≤1023px` — grids de duas colunas viram uma; transformações em perspectiva são zeradas; carimbos verticais viram horizontais; recuos laterais somem.
- `≤767px` — grids restantes viram uma coluna; linhas de CTA empilham em largura total.

Testar a partir de 320px.

**Regras que já custaram correção — não repita:**
1. Margens negativas de sobreposição precisam ser **zeradas explicitamente** com `!important` nos breakpoints menores, senão o conteúdo sai da tela.
2. `max-width` em `ch` num título precisa acomodar a linha mais longa, senão o `<br>` autoral nunca age.
3. Contraste mínimo **4,5:1** para texto normal e **3:1** para texto grande (≥24px ou ≥19px em peso 700). Um mesmo token não pode servir fundo claro e escuro.

**Estados:** todo elemento interativo tem hover explícito. Foco de teclado com `outline: 2px solid` na cor de ação, `outline-offset: 2px` — nunca o anel azul padrão. `::selection` tematizada por página.

## Formulários

As cinco páginas terminam em formulário de contato com os mesmos campos base — Nome, organização, E-mail, um `<select>` de qualificação específico do produto, botão de envio — e a linha `Ou escreva para aurisolutions@gmail.com`. **Nenhum está ligado a backend.** Escolha o serviço (Resend, Formspree, rota própria) e implemente validação: e-mail com formato válido, nome e organização obrigatórios, estado de carregando, sucesso e erro.

## Assets

`designs/assets/` — 52 arquivos, todos capturas reais dos produtos em produção, fornecidas pelo cliente:

- `assets/acolheduc/` — landing, dashboard, RTI, portfólio, planejamento, painel administrativo
- `assets/nexusvr/` — página inicial, matérias, criação de aula, apps VR, configurações
- `assets/lumina/` — landing, PDV restaurante, PDV hotel, financeiro, organizações, login
- `assets/coldre/` — site do clube, cursos, notícias, galeria, login, dashboard, associados, financeiro

Otimize para produção (WebP/AVIF, `next/image`, dimensões explícitas) antes de subir. **Não gere substitutos.**

Ícones: o repo já usa **Lucide**. As páginas HTML evitam ícones desenhados à mão; onde houver marcador tipográfico, troque por um ícone Lucide equivalente.

## O que não pode mudar

Âncoras de negócio, não de design:

- Nomes e domínios: Acolheduc (`acolheduc.com.br`), NexusVR (`nexusvr.com.br`), Lumina (`lumina.aurisolutions.com.br`), Coldre System.
- E-mail de contato: `aurisolutions@gmail.com`.
- Modelo de negócio duplo (produto próprio + sob medida) e a oferta de automações.
- Nenhum número inventado. Toda estatística exibida veio do cliente ou está marcada como demonstração.
- Textos e nomes de funcionalidade foram lidos das telas reais. Ao implementar, confira contra o produto antes de reescrever.

## Tom de voz

Frases diretas, confiantes, específicas. Headlines curtas. Sem buzzword ("soluções inovadoras disruptivas"), sem superlativo ("o melhor", "revolucionário"), sem promessa vaga ("transforme seu negócio").

## Checklist por componente

- [ ] Funciona a partir de 320px
- [ ] Hierarquia clara
- [ ] Sem decoração sem propósito
- [ ] Toda animação comunica algo
- [ ] Copy direto e específico
- [ ] Segue os tokens da página
- [ ] Espaçamento no grid de 4px
- [ ] Contraste 4,5:1 (3:1 para texto grande)
- [ ] Hover, foco e estados de formulário implementados

## Arquivos

```
design_handoff_aurisolutions/
├── README.md
└── designs/
    ├── AuriSolutions - Landing.dc.html
    ├── Acolheduc.dc.html
    ├── NexusVR.dc.html
    ├── Lumina.dc.html
    ├── Coldre System.dc.html
    ├── support.js          ← runtime dos protótipos; mantenha ao lado dos HTML
    └── assets/             ← 52 capturas reais dos produtos
```

Para abrir qualquer protótipo: sirva a pasta `designs/` num servidor local (`npx serve designs`) e abra o arquivo. Abrir por `file://` funciona na maioria dos navegadores, mas o servidor local evita bloqueio de CORS nas fontes.
