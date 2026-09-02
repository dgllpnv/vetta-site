import Image from 'next/image';
import Link from 'next/link';
import styles from './nexusvr.module.css';
import { NexusvrContactForm } from './nexusvr-contact-form';

const PILLARS = [
  {
    num: '01',
    className: styles.pillar1,
    ghostColor: 'rgba(34,211,238,.1)',
    kicker: 'CONTEÚDO',
    kickerColor: 'var(--nx-cyan)',
    title: 'Biblioteca de Conteúdo',
    body: 'Acesso a uma vasta biblioteca de experiências VR educacionais prontas para uso em sala de aula.',
  },
  {
    num: '02',
    className: styles.pillar2,
    ghostColor: 'rgba(168,85,247,.12)',
    kicker: 'PEDAGOGIA',
    kickerColor: '#D8B4FE',
    title: 'Conversão Pedagógica',
    body: 'Transformamos seu conteúdo tradicional em experiências imersivas com nossa equipe pedagógica.',
  },
  {
    num: '03',
    className: styles.pillar3,
    ghostColor: 'rgba(246,63,166,.12)',
    kicker: 'GESTÃO',
    kickerColor: '#F9A8D4',
    title: 'Plataforma de Gestão',
    body: 'Gerencie turmas, acompanhe progresso e gere relatórios de forma simples e intuitiva.',
  },
  {
    num: '04',
    className: styles.pillar4,
    ghostColor: 'rgba(255,107,53,.12)',
    kicker: 'IMPLANTAÇÃO',
    kickerColor: '#FDBA74',
    title: 'Suporte Dedicado',
    body: 'Equipe de suporte especializada para garantir a correta implantação e uso da tecnologia.',
  },
];

const APPS = [
  'Wander',
  'National Geographic Explore VR',
  'Anne Frank House VR',
  'Ecosphere',
  'Ocean Rift',
  'First Contact',
  'Apollo 11 VR',
  'Kingspray Graffiti',
  'Tilt Brush',
];

const MODULES = [
  { title: 'Escolas', body: 'Rede multi-instituição' },
  { title: 'Professores', body: 'Acesso por perfil' },
  { title: 'Conteúdos', body: 'Aulas por ano e matéria' },
  { title: 'Configurações', body: 'Perfil e segurança' },
];

const DEMO_URL = 'https://nexus-vr-edu-final.vercel.app/';

export function NexusvrPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.brand}>
            <span className={styles.brandMark}>N</span>
            <span className={styles.brandText}>Nexus VR Edu</span>
          </div>
          <nav className={styles.nav}>
            <span className={styles.navLinks}>
              <a href="#ecossistema" className={styles.navLink}>
                Ecossistema
              </a>
              <a href="#aula" className={styles.navLink}>
                Criar uma aula
              </a>
              <a href="#apps" className={styles.navLink}>
                Apps
              </a>
              <a href="#gestao" className={styles.navLink}>
                Gestão
              </a>
              <Link href="/" className={styles.navLink}>
                O estúdio
              </Link>
            </span>
            <a href="#falar" className={styles.navCta}>
              Acessar Portal
            </a>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGlowA} />
        <div className={styles.heroGlowB} />
        <div className={styles.heroStars} />

        <div className={styles.heroInner}>
          <div className={styles.heroBlock}>
            <div className={`${styles.heroBadge} ${styles.rise}`}>
              <span className={styles.heroBadgeDot} />
              <span className={styles.heroBadgeText}>Tecnologia Meta Quest</span>
            </div>

            <h1 className={`${styles.h1} ${styles.rise}`} style={{ animationDelay: '0.08s' }}>
              Do plano de aula
              <br />
              <span className={styles.h1Serif}>à realidade virtual</span>
            </h1>

            <p className={`${styles.heroLead} ${styles.rise}`} style={{ animationDelay: '0.16s' }}>
              A aula deixa de ser assistida e passa a ser vivida.
            </p>
          </div>

          <div className={styles.heroPortal}>
            <div className={styles.heroPortalRing} />
            <div className={styles.heroPortalFrame}>
              <Image
                src="/design/nexusvr/01-hero.jpg"
                alt="Nexus VR Edu, página inicial real do produto"
                width={900}
                height={640}
                priority
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          <div className={`${styles.heroActions} ${styles.rise}`} style={{ animationDelay: '0.26s' }}>
            <div className={styles.ctaRow}>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                Acessar o portal
              </a>
              <a href="#aula" className={styles.ctaSecondary}>
                Ver como funciona
              </a>
            </div>
            <div className={styles.heroStats}>
              <span className={styles.statCyan}>+500 Escolas</span>
              <span className={styles.statPink}>100% Imersivo</span>
            </div>
          </div>

          <p className={`${styles.heroSub} ${styles.rise}`} style={{ animationDelay: '0.34s' }}>
            Transforme a educação com experiências imersivas. Soluções completas em VR para todos os níveis de
            ensino, do conteúdo pronto ao acompanhamento da turma.
          </p>
        </div>
      </section>

      <section id="ecossistema" className={styles.section}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>Ecossistema completo</p>
          <h2 className={styles.h2}>
            Óculos na mão <span className={styles.h2Serif}>não vira aula</span>.
          </h2>
          <p className={styles.sectionLead}>
            O que garante impacto real são quatro camadas trabalhando juntas. Falta uma, a tecnologia vira
            enfeite na sala de informática.
          </p>
        </div>

        <div className={styles.stagger}>
          {PILLARS.map((pillar) => (
            <article key={pillar.num} className={`${styles.pillar} ${pillar.className}`}>
              <span className={styles.ghost} style={{ color: pillar.ghostColor }}>
                {pillar.num}
              </span>
              <p className={styles.pillarKicker} style={{ color: pillar.kickerColor }}>
                {pillar.kicker}
              </p>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarBody}>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="aula" className={styles.aulaSection}>
        <div className={styles.aulaInner}>
          <div className={styles.aulaHead}>
            <p className={styles.eyebrow}>Gestão de conteúdos</p>
            <h2 className={styles.h2}>
              Quatro passos entre o currículo e a <span className={styles.h2Serif}>aula imersiva</span>.
            </h2>
          </div>

          <div className={styles.spineWrap}>
            <div className={styles.spineLine} />

            <div className={styles.spineRow}>
              <span className={`${styles.spineNode} ${styles.nodeCyan}`} />
              <div>
                <p className={styles.stepKicker} style={{ color: 'var(--nx-cyan)' }}>
                  PASSO 01 · 02
                </p>
                <h3 className={styles.stepTitle}>Escolha o ano, depois a matéria</h3>
                <p className={styles.stepBody}>
                  Da Educação Infantil ao Ensino Médio, o currículo já está organizado. Cada disciplina mostra
                  quantas aulas existem prontas para ela, então dá para ver de imediato onde a biblioteca está
                  madura e onde falta construir.
                </p>
              </div>
              <div className={`${styles.spineMedia} ${styles.perspLeft}`}>
                <Image
                  src="/design/nexusvr/09-materias.jpg"
                  alt="Seleção de matéria dentro da gestão de conteúdos do Nexus VR Edu"
                  width={800}
                  height={520}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>

            <div className={`${styles.spineRow} ${styles.spineRowReverse}`}>
              <span className={`${styles.spineNode} ${styles.nodePurple}`} />
              <div className={`${styles.spineMedia} ${styles.perspRight}`}>
                <Image
                  src="/design/nexusvr/11-criar-aula.jpg"
                  alt="Formulário de criação de nova aula no Nexus VR Edu"
                  width={800}
                  height={520}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div>
                <p className={styles.stepKicker} style={{ color: '#D8B4FE' }}>
                  PASSO 03
                </p>
                <h3 className={styles.stepTitle}>O formulário já sabe o que uma aula em VR precisa</h3>
                <p className={styles.stepBody}>
                  Título, duração, tipo de aula e descrição. O professor não inventa a estrutura: ela vem
                  pronta, amarrada ao trimestre do planejamento.
                </p>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Aula Gamificada</span>
                  <span className={styles.chip}>45-50 min</span>
                  <span className={styles.chip}>1º Trimestre</span>
                </div>
              </div>
            </div>

            <div className={styles.spineRow}>
              <span className={`${styles.spineNode} ${styles.nodePink}`} />
              <div>
                <p className={styles.stepKicker} style={{ color: '#F9A8D4' }}>
                  PASSO 04
                </p>
                <h3 className={styles.stepTitle}>Os apps entram, e o roteiro nasce com eles</h3>
                <p className={`${styles.stepBody} ${styles.stepBodyGap}`}>
                  Escolhidos os aplicativos de VR, a aula ganha etapas com tempo e itens de checagem. É o que
                  separa uma turma usando óculos de uma turma tendo aula.
                </p>
                <div className={styles.stepList}>
                  <div className={styles.stepListItem}>
                    <span className={styles.stepListNum} style={{ color: 'var(--nx-cyan)' }}>
                      01
                    </span>
                    <div>
                      <p className={styles.stepListTitle}>Preparar</p>
                      <p className={styles.stepListBody}>Itens de checagem antes de entregar o óculos</p>
                    </div>
                  </div>
                  <div className={styles.stepListItem}>
                    <span className={styles.stepListNum} style={{ color: 'var(--nx-pink)' }}>
                      02
                    </span>
                    <div>
                      <p className={styles.stepListTitle}>Envolver</p>
                      <p className={styles.stepListBody}>Tempo e formato da atividade com a turma</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.spineMedia} ${styles.perspLeft}`}>
                <Image
                  src="/design/nexusvr/12-apps-vr.jpg"
                  alt="Seleção de aplicativos Meta Quest e roteiro da aula"
                  width={800}
                  height={520}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apps" className={styles.appsSection}>
        <div className={styles.aulaInner}>
          <div className={styles.appsHead}>
            <div className={styles.appsHeadTitle}>
              <p className={styles.eyebrow}>Aplicativos Meta Quest</p>
              <h2 className={styles.h2}>
                A prateleira que a aula <span className={styles.h2Serif}>já sabe usar</span>.
              </h2>
            </div>
            <p className={styles.appsHeadLead}>
              Aplicativos reais do ecossistema Meta Quest, ligados ao plano de aula. O professor marca quais
              entram e o roteiro se ajusta. Arraste para o lado.
            </p>
          </div>
        </div>

        <div className={styles.rail}>
          <div className={styles.railInner}>
            {APPS.map((app, i) => (
              <div key={app} className={styles.appCard}>
                <p className={styles.appCardNum}>{String(i + 1).padStart(2, '0')}</p>
                <p className={styles.appCardName}>{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gestao" className={styles.gestaoSection}>
        <div className={styles.gestaoGrid}>
          <div className={styles.gestaoMedia}>
            <Image
              src="/design/nexusvr/13-configuracoes.jpg"
              alt="Configurações do painel administrativo do Nexus VR Edu"
              width={900}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className={styles.overlapCard}>
            <p className={styles.eyebrow}>Plataforma de gestão</p>
            <h2 className={styles.gestaoTitle}>Escolas, professores e conteúdos em um painel</h2>
            <p className={styles.gestaoBody}>
              A rede cadastra suas escolas, cada escola cadastra seus professores, e a biblioteca de aulas
              cresce por ano e por matéria. Perfil e segurança ficam no mesmo lugar.
            </p>
            <div className={styles.modules}>
              {MODULES.map((mod) => (
                <div key={mod.title} className={styles.moduleCard}>
                  <p className={styles.moduleTitle}>{mod.title}</p>
                  <p className={styles.moduleBody}>{mod.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="falar" className={styles.contactSection}>
        <div className={styles.contactBg} />
        <div className={styles.contactRing} />
        <div className={styles.contactGlow} />

        <div className={styles.contactInner}>
          <div className={styles.contactGrid}>
            <div>
              <p className={styles.eyebrow}>Implantação com equipe pedagógica</p>
              <h2 className={styles.contactTitle}>
                Leve a sua escola para <span className={styles.h2Serif}>dentro da aula</span>.
              </h2>
              <p className={styles.contactLead}>
                Conversa inicial sem custo. A gente entende o seu currículo, a sua infraestrutura de VR e
                mostra o portal rodando com conteúdo real.
              </p>
              <div className={styles.ctaRow}>
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                  Acessar o portal
                </a>
                <Link href="/" className={styles.ctaGhost}>
                  Conhecer a Auri
                </Link>
              </div>
            </div>

            <NexusvrContactForm />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerBrand}>
              <span className={styles.footerMark}>N</span>
              <span className={styles.footerBrandText}>Nexus VR Edu</span>
            </div>
            <p className={styles.footerBody}>
              Transformando a educação através da Realidade Virtual. Soluções completas para escolas de todos
              os níveis.
            </p>
            <p className={styles.footerDomain}>
              <a href="https://nexusvr.com.br" target="_blank" rel="noopener noreferrer">
                nexusvr.com.br
              </a>
            </p>
          </div>
          <div className={styles.footerCols}>
            <div className={styles.footerCol}>
              <span className={styles.footerColLabel}>Plataforma</span>
              <a href="#ecossistema" className={styles.footerLink}>
                Ecossistema
              </a>
              <a href="#aula" className={styles.footerLink}>
                Criar uma aula
              </a>
              <a href="#apps" className={styles.footerLink}>
                Apps Meta Quest
              </a>
              <a href="#gestao" className={styles.footerLink}>
                Gestão
              </a>
            </div>
            <div className={styles.footerCol}>
              <span className={styles.footerColLabel}>AuriSolutions</span>
              <Link href="/" className={styles.footerLink}>
                O estúdio
              </Link>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                Demo ao vivo
              </a>
              <a href="#falar" className={styles.footerLink}>
                Contato
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span className={styles.footerMeta}>© 2026 AuriSolutions. Todos os direitos reservados.</span>
          <span className={styles.footerMeta}>Meta Quest · WebXR · Multi-escola</span>
        </div>
      </footer>
    </div>
  );
}
