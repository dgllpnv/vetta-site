import Image from 'next/image';
import Link from 'next/link';
import { Check, Minus } from 'lucide-react';
import styles from './landing.module.css';
import { LandingContactForm } from './landing-contact-form';

const PRODUCTS = [
  {
    key: 'acolheduc',
    kicker: 'Gestão escolar',
    name: 'Acolheduc',
    color: 'var(--lp-acolheduc)',
    body: 'Plataforma pedagógica para redes de ensino. Acompanhamento RTI, portfólio digital de evidências e geração de conteúdo assistida por IA, devolvendo ao educador o tempo de cuidar de cada aluno.',
    features: [
      'Multi-tenant para redes de 50 a 500 alunos',
      'Dashboard RTI com indicadores de intervenção',
      'LGPD por padrão',
    ],
    image: '/design/products/acolheduc/login.png',
    imageAlt: 'Acolheduc, interface real do produto',
    demoHref: 'https://acolheduc-app.vercel.app/',
    productHref: '/acolheduc',
    reverse: false,
  },
  {
    key: 'nexusvr',
    kicker: 'Educação imersiva',
    name: 'NexusVR',
    color: 'var(--lp-nexus)',
    body: 'Aulas imersivas em Meta Quest 3 e WebXR. O conteúdo que era assistido passa a ser vivido, com analytics de uso por turma e por aluno, sem instalar nada.',
    features: [
      'Meta Quest 3 e WebXR no navegador',
      'Biblioteca de aulas imersivas',
      'Analytics de engajamento',
    ],
    image: '/design/products/nexusvr/home.png',
    imageAlt: 'NexusVR, interface real do produto',
    demoHref: 'https://nexus-vr-edu-final.vercel.app/',
    productHref: '/nexusvr',
    reverse: true,
  },
  {
    key: 'lumina',
    kicker: 'Hospitalidade',
    name: 'Lumina',
    color: 'var(--lp-lumina)',
    body: 'PDV e PMS na mesma plataforma, com controle financeiro e DRE automático em tempo real. Feito para quem trata hospitalidade como ofício: pousadas boutique, hotéis e restaurantes fine dining.',
    features: [
      'PDV moderno integrado ao PMS',
      'DRE automático, sem planilha paralela',
      'Operação em tempo real',
    ],
    image: '/design/products/lumina/home.png',
    imageAlt: 'Lumina, interface real do produto',
    demoHref: 'https://lumina-host-ten.vercel.app/',
    productHref: '/lumina',
    reverse: false,
  },
  {
    key: 'coldre',
    kicker: 'Tiro esportivo',
    name: 'Coldre System',
    color: 'var(--lp-coldre)',
    body: 'O sistema operacional do clube. Associados, presença por baia, anuidades e habitualidade CR/CAC, com auditoria nativa e transações ACID em todas as operações sensíveis.',
    features: [
      'Habitualidade CR/CAC com alertas',
      'Auditoria nativa em cada operação',
      'Portal do associado e balcão',
    ],
    image: '/design/products/cbt/dashboard.png',
    imageAlt: 'Coldre System, interface real do produto',
    demoHref: null,
    productHref: '/coldre',
    reverse: true,
  },
] as const;

const FAN_CARDS = [
  { color: 'var(--lp-acolheduc)', image: '/design/products/acolheduc/login.png', alt: 'Acolheduc, interface real' },
  { color: 'var(--lp-nexus)', image: '/design/products/nexusvr/home.png', alt: 'NexusVR, interface real' },
  { color: 'var(--lp-lumina)', image: '/design/products/lumina/home.png', alt: 'Lumina, interface real' },
  { color: 'var(--lp-coldre)', image: '/design/products/cbt/dashboard.png', alt: 'Coldre System, interface real' },
];

export function LandingPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#" className={styles.logo}>
            AuriSolutions
          </a>
          <nav className={styles.nav}>
            <span className={styles.navLinks}>
              <a href="#produtos" className={styles.navLink}>
                Produtos
              </a>
              <a href="#sob-medida" className={styles.navLink}>
                Sob medida
              </a>
              <a href="#trabalhar" className={styles.navLink}>
                Como trabalhamos
              </a>
            </span>
            <a href="#contato" className={styles.navCta}>
              Falar com a gente
            </a>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={`${styles.badge} ${styles.rise}`}>
          <span className={styles.badgeDot} />
          <span className={styles.badgeText}>Quatro produtos em produção, agora</span>
        </div>

        <h1 className={`${styles.h1} ${styles.rise}`} style={{ animationDelay: '0.08s' }}>
          Software vertical de qualidade enterprise,{' '}
          <span className={styles.h1Serif}>entregue em semanas</span>.
        </h1>

        <div className={`${styles.heroGrid} ${styles.rise}`} style={{ animationDelay: '0.16s' }}>
          <p className={styles.heroLead}>
            A Auri é um estúdio de produtos digitais verticais. Construímos, somos donos e licenciamos
            quatro SaaS que hoje operam escolas, hotéis, aulas em realidade virtual e clubes de tiro
            esportivo.
          </p>
          <p className={styles.heroSub}>
            Quando o que você precisa não existe pronto, a gente constrói sob medida, e automatiza o que
            sua equipe ainda faz na mão.
          </p>
        </div>

        <div className={`${styles.ctaRow} ${styles.rise}`} style={{ animationDelay: '0.24s' }}>
          <a href="#produtos" className={styles.ctaPrimary}>
            Ver os produtos
          </a>
          <a href="#sob-medida" className={styles.ctaSecondary}>
            Preciso de algo sob medida
          </a>
        </div>
      </section>

      <section className={styles.fanSection}>
        <div className={styles.fan}>
          {FAN_CARDS.map((card) => (
            <div key={card.image} className={styles.fanCard}>
              <div className={styles.fanStripe} style={{ background: card.color }} />
              <Image src={card.image} alt={card.alt} width={480} height={300} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
        </div>
        <p className={styles.fanCaption}>
          Telas reais dos quatro produtos, capturadas em produção. Passe o mouse.
        </p>
      </section>

      <section className={styles.stackSection}>
        <div className={styles.stackBar}>
          <span className={styles.eyebrow}>Construído com</span>
          <div className={styles.stackItems}>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>PostgreSQL</span>
            <span>Prisma</span>
            <span>Vercel</span>
            <span>n8n</span>
          </div>
          <div className={styles.stackTags}>
            <span>LGPD compliant</span>
            <span>99,9% uptime</span>
            <span>Multi-tenant</span>
          </div>
        </div>
      </section>

      <section id="produtos" className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrowPrimary}>Produtos próprios</p>
            <h2 className={styles.h2}>
              Quatro verticais. Quatro produtos <span className={styles.h1Serif}>no ar</span>.
            </h2>
          </div>
          <p className={styles.sectionLead}>
            Cada um nasceu de um problema real de um setor específico, e continua rodando com cliente
            pagando. Não são conceitos: são sistemas em operação, com uptime medido e conformidade LGPD.
          </p>
        </div>

        <div className={styles.productList}>
          {PRODUCTS.map((product) => (
            <article
              key={product.key}
              className={`${styles.productCard} ${product.reverse ? styles.productCardReverse : ''}`}
            >
              <div>
                <div className={styles.productKicker}>
                  <span className={styles.productKickerBar} style={{ background: product.color }} />
                  <span className={styles.productKickerLabel} style={{ color: product.color }}>
                    {product.kicker}
                  </span>
                </div>
                <h3 className={styles.productTitle}>{product.name}</h3>
                <p className={styles.productBody}>{product.body}</p>
                <ul className={styles.productFeatures}>
                  {product.features.map((feature) => (
                    <li key={feature} className={styles.productFeature}>
                      <Minus size={14} style={{ color: product.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={styles.productActions}>
                  {product.demoHref && (
                    <a
                      href={product.demoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.productCtaSolid}
                      style={{ background: product.color }}
                    >
                      Ver demo ao vivo
                    </a>
                  )}
                  <Link href={product.productHref} className={styles.productCtaGhost}>
                    Conhecer o produto
                  </Link>
                </div>
              </div>
              <div className={styles.productMedia}>
                <Image src={product.image} alt={product.imageAlt} width={640} height={420} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="sob-medida" className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrowPrimary}>Sob medida</p>
            <h2 className={`${styles.h2} ${styles.h2Wide}`}>
              E quando o que você precisa <span className={styles.h1Serif}>ainda não existe</span>?
            </h2>
          </div>
          <p className={styles.sectionLead}>
            A gente constrói. Mesma equipe, mesma arquitetura, mesmo padrão de qualidade dos quatro
            produtos que você acabou de ver rodando.
          </p>
        </div>

        <div className={styles.beforeAfter}>
          <div className={styles.beforeCard}>
            <p className={styles.cardEyebrow}>Hoje</p>
            <h3 className={styles.cardTitle}>A ideia está travada em planilha e apresentação</h3>
            <p className={styles.cardBody}>
              O processo existe na cabeça das pessoas, o controle mora em abas de planilha, e cada nova
              exceção vira mais uma coluna. Cresce, mas não escala.
            </p>
          </div>
          <div className={styles.afterCard}>
            <p className={`${styles.cardEyebrow} ${styles.cardEyebrowAfter}`}>Depois</p>
            <h3 className={`${styles.cardTitle} ${styles.cardTitleAfter}`}>
              Vira software em produção, com dono e manutenção
            </h3>
            <p className={`${styles.cardBody} ${styles.cardBodyAfter}`}>
              Arquitetura Gen 2, deploy contínuo, monitoramento e uma equipe que continua por perto depois
              que entra no ar. Sem jargão e sem proposta de 80 páginas.
            </p>
          </div>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <p className={styles.timelineWeek}>SEMANA 0</p>
            <h4 className={styles.timelineTitle}>Você nos conta</h4>
            <p className={styles.timelineBody}>
              Trinta minutos, sem custo. Entendemos como você trabalha hoje, onde dói e o que já tentaram
              antes.
            </p>
          </div>
          <div className={styles.timelineItem}>
            <p className={styles.timelineWeek}>SEMANA 1</p>
            <h4 className={styles.timelineTitle}>A gente desenha</h4>
            <p className={styles.timelineBody}>
              Você navega um protótipo. Sem código ainda, só os caminhos do software. Aprova, ou voltamos
              para a prancheta.
            </p>
          </div>
          <div className={styles.timelineItem}>
            <p className={styles.timelineWeek}>SEMANA 4</p>
            <h4 className={styles.timelineTitle}>Construímos junto</h4>
            <p className={styles.timelineBody}>
              Entregas incrementais toda semana. Você vê o software crescer, então não existe surpresa no
              final.
            </p>
          </div>
          <div className={styles.timelineItem}>
            <p className={styles.timelineWeek}>DEPOIS</p>
            <h4 className={styles.timelineTitle}>A gente fica</h4>
            <p className={styles.timelineBody}>
              Suporte e evolução depois do lançamento. Software em produção precisa de quem cuide dele.
            </p>
          </div>
        </div>
      </section>

      <section id="trabalhar" className={styles.waysSection}>
        <div className={styles.waysInner}>
          <div className={styles.waysHead}>
            <div>
              <p className={styles.eyebrowOnPrimary}>Como trabalhamos juntos</p>
              <h2 className={styles.h2OnPrimary}>
                Três formas de <span className={styles.h1Serif}>começar</span> com a Auri.
              </h2>
            </div>
            <p className={styles.waysLead}>
              Escolha pelo que você precisa hoje. Todas começam pela mesma conversa de trinta minutos, sem
              custo e sem compromisso.
            </p>
          </div>

          <div className={styles.waysGrid}>
            <div className={styles.wayCard}>
              <span className={styles.wayNumber}>01 · LICENCIAR</span>
              <h3 className={styles.wayTitle}>Um produto que já existe</h3>
              <p className={styles.wayBody}>
                Você adota um dos quatro produtos, com implantação, migração de dados e treinamento da sua
                equipe inclusos.
              </p>
              <ul className={styles.wayFeatures}>
                <li className={styles.wayFeature}>
                  <Check size={16} />
                  No ar em semanas, não em meses
                </li>
                <li className={styles.wayFeature}>
                  <Check size={16} />
                  Multi-tenant e LGPD por padrão
                </li>
                <li className={styles.wayFeature}>
                  <Check size={16} />
                  Suporte e evolução contínuos
                </li>
              </ul>
              <a href="#contato" className={styles.wayCta}>
                Quero licenciar
              </a>
            </div>

            <div className={`${styles.wayCard} ${styles.wayCardHi}`}>
              <span className={styles.wayBadge}>MAIS PROCURADO</span>
              <span className={styles.wayNumber}>02 · CONSTRUIR</span>
              <h3 className={styles.wayTitle}>Software sob medida</h3>
              <p className={styles.wayBody}>
                Seu problema não tem produto pronto. A gente desenha, constrói e opera junto com você, por
                sprints de preço e prazo fechados.
              </p>
              <ul className={styles.wayFeatures}>
                <li className={styles.wayFeature}>
                  <Check size={16} />
                  Protótipo navegável em uma semana
                </li>
                <li className={styles.wayFeature}>
                  <Check size={16} />
                  Preço e prazo fechados por sprint
                </li>
                <li className={styles.wayFeature}>
                  <Check size={16} />
                  Software real rodando em 4 a 6 semanas
                </li>
              </ul>
              <a href="#contato" className={`${styles.wayCta} ${styles.wayCtaHi}`}>
                Quero construir
              </a>
            </div>

            <div className={styles.wayCard}>
              <span className={styles.wayNumber}>03 · AUTOMATIZAR</span>
              <h3 className={styles.wayTitle}>Processos no piloto automático</h3>
              <p className={styles.wayBody}>
                Seus sistemas e canais conversando entre si, para atender mais clientes sem aumentar o
                time.
              </p>
              <ul className={styles.wayFeatures}>
                <li className={styles.wayFeature}>
                  <Check size={16} />
                  Atendimento e agendamento por WhatsApp
                </li>
                <li className={styles.wayFeature}>
                  <Check size={16} />
                  Lead qualificado direto no seu CRM
                </li>
                <li className={styles.wayFeature}>
                  <Check size={16} />
                  Primeiros fluxos no ar em 2 a 4 semanas
                </li>
              </ul>
              <a href="#contato" className={styles.wayCta}>
                Quero automatizar
              </a>
            </div>
          </div>

          <div className={styles.waysFooter}>
            <span className={styles.eyebrowOnPrimary} style={{ marginBottom: 0 }}>
              Onde a automação já entrega
            </span>
            <span className={styles.waysFooterItem}>Escritórios de advocacia</span>
            <span className={styles.waysFooterItem}>Clínicas e consultórios</span>
            <span className={styles.waysFooterItem}>Atendimento ao cliente</span>
          </div>
        </div>
      </section>

      <section id="contato" className={styles.section}>
        <div className={styles.contactGrid}>
          <div>
            <p className={styles.eyebrowPrimary}>Fale com a gente</p>
            <h2 className={styles.h2Tight}>
              Trinta minutos. <span className={styles.h1Serif}>Sem custo.</span>
            </h2>
            <p className={styles.contactLead}>
              Você sai da conversa com um diagnóstico honesto do seu problema, mesmo que a resposta seja
              que a Auri não é a melhor opção para ele.
            </p>
            <dl className={styles.dl}>
              <div className={styles.dlRow}>
                <dt className={styles.dt}>E-mail</dt>
                <dd className={styles.dd}>
                  <a href="mailto:aurisolutions@gmail.com" className={styles.ddStrong}>
                    aurisolutions@gmail.com
                  </a>
                </dd>
              </div>
              <div className={styles.dlRow}>
                <dt className={styles.dt}>Horário</dt>
                <dd className={styles.dd}>Segunda a sexta, 9h às 18h</dd>
              </div>
              <div className={styles.dlRow}>
                <dt className={styles.dt}>Resposta</dt>
                <dd className={styles.dd}>Em até 24 horas úteis</dd>
              </div>
            </dl>
          </div>

          <LandingContactForm />
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <p className={styles.footerBrand}>AuriSolutions</p>
            <p className={styles.footerBrandBody}>
              Estúdio de produtos digitais verticais. Quatro produtos em produção e desenvolvimento sob
              medida.
            </p>
          </div>
          <div className={styles.footerCols}>
            <div className={styles.footerCol}>
              <span className={styles.footerColLabel}>Produtos</span>
              <Link href="/acolheduc" className={styles.footerLink}>
                Acolheduc
              </Link>
              <Link href="/nexusvr" className={styles.footerLink}>
                NexusVR
              </Link>
              <Link href="/lumina" className={styles.footerLink}>
                Lumina
              </Link>
              <Link href="/coldre" className={styles.footerLink}>
                Coldre System
              </Link>
            </div>
            <div className={styles.footerCol}>
              <span className={styles.footerColLabel}>Serviços</span>
              <a href="#sob-medida" className={styles.footerLink}>
                Sob medida
              </a>
              <a href="#trabalhar" className={styles.footerLink}>
                Automações
              </a>
              <a href="#contato" className={styles.footerLink}>
                Contato
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span className={styles.footerMeta}>© 2026 AuriSolutions. Todos os direitos reservados.</span>
          <span className={styles.footerMeta}>LGPD compliant · 99,9% uptime · Multi-tenant ready</span>
        </div>
      </footer>
    </div>
  );
}
