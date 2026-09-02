import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import styles from './acolheduc.module.css';
import { AcolheducAudienceSwitch } from './acolheduc-audience-switch';
import { AcolheducProfileTabs } from './acolheduc-profile-tabs';
import { AcolheducContactForm } from './acolheduc-contact-form';

const CLIMATE_CELLS: { grade: string; letter: string; tone: 'green' | 'amber' | 'coral' }[] = [
  { grade: '1º', letter: 'A', tone: 'green' },
  { grade: '1º', letter: 'B', tone: 'amber' },
  { grade: '2º', letter: 'A', tone: 'green' },
  { grade: '2º', letter: 'B', tone: 'coral' },
  { grade: '3º', letter: 'A', tone: 'amber' },
  { grade: '3º', letter: 'B', tone: 'green' },
  { grade: '4º', letter: 'A', tone: 'amber' },
  { grade: '4º', letter: 'B', tone: 'coral' },
  { grade: '5º', letter: 'A', tone: 'green' },
  { grade: '5º', letter: 'B', tone: 'green' },
  { grade: '6º', letter: 'A', tone: 'amber' },
  { grade: '6º', letter: 'B', tone: 'coral' },
];

const CLIMATE_TONES = {
  green: { bg: 'var(--ac-green)', fg: '#0B3D24' },
  amber: { bg: 'var(--ac-amber)', fg: '#4A3005' },
  coral: { bg: 'var(--ac-coral)', fg: '#4A0F0F' },
};

const IA_CARDS = [
  { kicker: 'Relatórios', title: 'Relatório Individual', body: 'Descritivo sobre o desenvolvimento do aluno' },
  { kicker: 'Planos', title: 'Plano de Aula BNCC', body: 'Alinhado à Base Nacional Comum Curricular' },
  { kicker: 'Atividades', title: 'Atividade Diagnóstica', body: 'Para avaliar conhecimentos prévios' },
  { kicker: 'Boletins', title: 'Parecer Bimestral', body: 'Parecer descritivo para o boletim' },
];

const STACK_ITEMS = [
  { name: 'React', role: 'Frontend' },
  { name: 'TypeScript', role: 'Linguagem' },
  { name: 'Node.js', role: 'Backend' },
  { name: 'PostgreSQL', role: 'Banco de dados' },
  { name: 'Prisma', role: 'ORM' },
  { name: 'OpenAI', role: 'IA' },
];

const WHY_ITEMS = [
  'Reduz o tempo de documentação pedagógica',
  'Acompanhamento individualizado, mesmo em redes grandes',
  'Relatórios automatizados para pais e responsáveis',
  'Conformidade LGPD por padrão',
  'Treinamento da equipe incluso',
  'Suporte pedagógico contínuo',
];

const DEMO_HREF = 'https://acolheduc-app.vercel.app/';

export function AcolheducPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.brandRow}>
            <span className={styles.logo}>Acolheduc</span>
            <span className={styles.enterpriseTag}>Enterprise</span>
          </div>
          <nav className={styles.nav}>
            <span className={styles.navLinks}>
              <a href="#dois-mundos" className={styles.navLink}>
                A plataforma
              </a>
              <a href="#aluno" className={styles.navLink}>
                O aluno
              </a>
              <a href="#ia" className={styles.navLink}>
                IA
              </a>
              <a href="#enterprise" className={styles.navLink}>
                Enterprise
              </a>
              <Link href="/" className={styles.navLink}>
                O estúdio
              </Link>
            </span>
            <a href="#falar" className={styles.navCta}>
              Agendar demonstração
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroGrain} />

        <div className={styles.heroInner}>
          <div className={styles.heroGrid}>
            <div>
              <div className={`${styles.badge} ${styles.rise}`}>
                <span className={styles.badgeLive}>
                  <span className={styles.badgeDot} />
                  <span className={styles.badgeLiveText}>Em produção</span>
                </span>
                <span className={styles.badgeText}>Produto AuriSolutions para Educação</span>
              </div>

              <h1 className={`${styles.h1} ${styles.rise}`} style={{ animationDelay: '0.08s' }}>
                A escola inteira{' '}
                <span className={styles.h1Serif}>
                  enxergando o mesmo aluno
                  <span className={styles.h1SerifDot}>.</span>
                </span>
              </h1>

              <p className={`${styles.heroLead} ${styles.rise}`} style={{ animationDelay: '0.16s' }}>
                O professor registra a aula em segundos. A coordenação vê o clima de todas as turmas no
                mesmo instante. A IA transforma observação solta em relatório pronto.
              </p>

              <p className={`${styles.heroQuote} ${styles.rise}`} style={{ animationDelay: '0.2s' }}>
                &ldquo;Quando educamos com afeto, transformamos realidades.&rdquo;
              </p>

              <div className={`${styles.ctaRow} ${styles.rise}`} style={{ animationDelay: '0.24s' }}>
                <a href={DEMO_HREF} target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                  Entrar na demo ao vivo
                </a>
                <a href="#dois-mundos" className={styles.ctaSecondary}>
                  Ver por dentro
                </a>
              </div>
            </div>

            <div className={`${styles.heroMedia} ${styles.rise}`} style={{ animationDelay: '0.3s' }}>
              <div className={styles.heroBrowser}>
                <div className={styles.heroBrowserBar}>
                  <span className={styles.heroBrowserDot} style={{ background: '#F0A5B8' }} />
                  <span className={styles.heroBrowserDot} style={{ background: 'var(--ac-sun)' }} />
                  <span className={styles.heroBrowserDot} style={{ background: '#96D6A9' }} />
                  <span className={styles.heroBrowserLabel}>Painel de Clima Escolar · Coordenação</span>
                </div>
                <Image
                  src="/design/acolheduc/02-clima-topo.jpg"
                  alt="Painel de Clima Escolar do Acolheduc, tela real do produto"
                  width={1568}
                  height={745}
                  className={styles.heroBrowserImg}
                  priority
                />
              </div>

              <div className={styles.floatCard} style={{ '--ac-rot': '-3deg' } as CSSProperties}>
                <Image
                  src="/design/acolheduc/04-professor-inicio.jpg"
                  alt="Tela inicial do professor no Acolheduc"
                  width={1568}
                  height={745}
                />
              </div>

              <div className={styles.floatStat} style={{ '--ac-rot': '4deg' } as CSSProperties}>
                <p className={styles.floatStatLabel}>Cobertura BNCC</p>
                <p className={styles.floatStatValue}>70%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dois mundos */}
      <section id="dois-mundos" className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>A plataforma</p>
            <h2 className={styles.h2} style={{ maxWidth: '14ch' }}>
              Dois mundos, <span className={styles.h1Serif}>um clique</span> de distância.
            </h2>
          </div>
          <p className={styles.sectionLead}>
            O mesmo sistema muda de cara conforme quem entra. O professor vê a sala de aula. A coordenação
            vê a escola. Ninguém precisa aprender a tela do outro.
          </p>
        </div>

        <AcolheducAudienceSwitch />
      </section>

      {/* Clima */}
      <section className={styles.climateSection}>
        <div className={styles.climateInner}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.eyebrow}>Mapa de Clima Escolar</p>
              <h2 className={styles.h2} style={{ maxWidth: '15ch' }}>
                O problema aparece <span className={styles.h1Serif}>antes</span> de virar reunião de
                emergência.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Cada quadrado é uma turma. A cor vem dos registros que os professores fizeram naquela semana.
              Uma turma que esfria aparece na tela antes de aparecer no conselho de classe.
            </p>
          </div>

          <div className={styles.climateGrid}>
            <div className={styles.climateCard}>
              <p className={styles.climateCardTitle}>Mapa de Clima Escolar</p>
              <p className={styles.climateCardSub}>Visão geral do clima de todas as turmas</p>
              <div className={styles.climateMap}>
                {CLIMATE_CELLS.map((cell, i) => (
                  <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${cell.grade}${cell.letter}-${i}`}
                    className={styles.climateCell}
                    style={{
                      background: CLIMATE_TONES[cell.tone].bg,
                      color: CLIMATE_TONES[cell.tone].fg,
                    }}
                  >
                    <span>{cell.grade}</span>
                    <span>{cell.letter}</span>
                  </div>
                ))}
              </div>
              <div className={styles.climateLegend}>
                <span className={styles.legendItem}>
                  <span className={styles.legendDot} style={{ background: 'var(--ac-green)' }} />
                  Clima positivo
                </span>
                <span className={styles.legendItem}>
                  <span className={styles.legendDot} style={{ background: 'var(--ac-amber)' }} />
                  Atenção moderada
                </span>
                <span className={styles.legendItem}>
                  <span className={styles.legendDot} style={{ background: 'var(--ac-coral)' }} />
                  Atenção crítica
                </span>
              </div>
              <p className={styles.climateNote}>Reprodução da tela do produto com dados de demonstração.</p>
            </div>

            <div className={styles.climateSide}>
              <div className={styles.climateSummary}>
                <p className={styles.climateSummaryLabel}>O que a coordenação vê junto</p>
                <div className={styles.climateSummaryList}>
                  <div className={styles.climateSummaryRow}>
                    <span className={styles.climateSummaryKey}>Alunos em risco</span>
                    <span className={styles.climateSummaryVal}>por nível e por dias</span>
                  </div>
                  <div className={styles.climateSummaryRow}>
                    <span className={styles.climateSummaryKey}>Engajamento docente</span>
                    <span className={styles.climateSummaryVal}>semana a semana</span>
                  </div>
                  <div className={styles.climateSummaryRow}>
                    <span className={styles.climateSummaryKey}>Cobertura BNCC</span>
                    <span className={styles.climateSummaryVal}>por área</span>
                  </div>
                </div>
              </div>

              <div className={styles.riskCard}>
                <p className={styles.riskCardTitle}>Alunos em Risco</p>
                <p className={styles.riskCardBody}>
                  A lista sai do mapa e vira nome, turma e há quantos dias o sinal está aceso.
                </p>
                <div className={styles.riskList}>
                  <div className={styles.riskRow} style={{ background: '#FCE9E9' }}>
                    <span className={styles.riskDot} style={{ background: 'var(--ac-coral)' }} />
                    <span className={styles.riskLabel} style={{ color: '#9B2C2C' }}>
                      Risco alto
                    </span>
                    <span className={styles.riskMeta} style={{ color: '#9B2C2C' }}>
                      intervenção imediata
                    </span>
                  </div>
                  <div className={styles.riskRow} style={{ background: '#FDF1DF' }}>
                    <span className={styles.riskDot} style={{ background: 'var(--ac-amber)' }} />
                    <span className={styles.riskLabel} style={{ color: '#8A5A06' }}>
                      Risco médio
                    </span>
                    <span className={styles.riskMeta} style={{ color: '#8A5A06' }}>
                      acompanhar de perto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O aluno */}
      <section id="aluno" className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>Área de Perfil</p>
            <h2 className={styles.h2} style={{ maxWidth: '14ch' }}>
              Cada aluno tem uma <span className={styles.h1Serif}>história rastreável</span>.
            </h2>
          </div>
          <p className={styles.sectionLead}>
            Informações, resumo do dia, e três abas que respondem o que aconteceu, o que foi tentado e o
            que a IA leu nisso tudo.
          </p>
        </div>

        <AcolheducProfileTabs />
      </section>

      {/* IA */}
      <section id="ia" className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>IA pedagógica</p>
            <h2 className={styles.h2} style={{ maxWidth: '15ch' }}>
              Não é um chat solto. É um <span className={styles.h1Serif}>repositório de prompts</span> feito
              para escola.
            </h2>
          </div>
          <p className={styles.sectionLead}>
            Relatórios, planos, atividades e boletins já vêm escritos e categorizados. O professor escolhe,
            ajusta e gera. Nada de aprender engenharia de prompt.
          </p>
        </div>

        <div className={styles.iaCards}>
          {IA_CARDS.map((card) => (
            <div key={card.title} className={styles.iaCard}>
              <p className={styles.iaCardKicker}>{card.kicker}</p>
              <p className={styles.iaCardTitle}>{card.title}</p>
              <p className={styles.iaCardBody}>{card.body}</p>
            </div>
          ))}
        </div>

        <div className={styles.iaMediaGrid}>
          <div className={styles.iaMedia}>
            <Image
              src="/design/acolheduc/06-prompts-repositorio.jpg"
              alt="Repositório de Prompts do Acolheduc"
              width={1568}
              height={745}
            />
          </div>
          <div className={styles.iaMedia}>
            <Image
              src="/design/acolheduc/16-assistente-ia.jpg"
              alt="Assistente IA, gerador de relatórios personalizados"
              width={1568}
              height={745}
            />
          </div>
        </div>
      </section>

      {/* Insights e planejamento */}
      <section className={styles.section}>
        <div className={styles.flowRow}>
          <div>
            <p className={styles.eyebrow}>Insights pedagógicos</p>
            <h2 className={styles.flowTitle}>
              Participação por dia da semana, engajamento por turma
            </h2>
            <p className={styles.flowBody}>
              A Visão Geral da Turma separa Gráficos, Destaques e Atenção Especial. É o dado que já existe
              nos registros, virando gráfico sem ninguém montar planilha.
            </p>
            <div className={styles.chipRow}>
              <span className={styles.chip} style={{ fontWeight: 600 }}>
                Gráficos
              </span>
              <span className={styles.chip} style={{ fontWeight: 600 }}>
                Destaques
              </span>
              <span className={styles.chip} style={{ fontWeight: 600 }}>
                Atenção Especial
              </span>
            </div>
          </div>
          <div className={styles.flowMedia}>
            <Image
              src="/design/acolheduc/15-insights-2.jpg"
              alt="Gráficos de participação por dia da semana e engajamento por turma"
              width={1568}
              height={745}
            />
          </div>
        </div>

        <div className={`${styles.flowRow} ${styles.flowRowReverse}`}>
          <div className={styles.flowMedia}>
            <Image
              src="/design/acolheduc/08-planejamento.jpg"
              alt="Planejamento Pedagógico com status de aprovação"
              width={1568}
              height={745}
            />
          </div>
          <div>
            <p className={styles.eyebrow}>Planejamento pedagógico</p>
            <h2 className={styles.flowTitle}>Entrega de planejamento com fluxo de aprovação</h2>
            <p className={styles.flowBody}>
              Da Educação Infantil ao Ensino Médio, cada planejamento mensal tem etapa, turma, mês e um
              status que todo mundo enxerga.
            </p>
            <div className={styles.chipRow}>
              <span className={styles.chip} style={{ background: '#E3F7ED', color: '#137A4B', fontWeight: 600 }}>
                Aprovado
              </span>
              <span className={styles.chip} style={{ background: '#FDF1DF', color: '#8A5A06', fontWeight: 600 }}>
                Pendente
              </span>
              <span className={styles.chip} style={{ background: 'var(--ac-field)', color: 'var(--ac-muted)', fontWeight: 600 }}>
                Rascunho
              </span>
              <span className={styles.chip} style={{ background: '#FDE8D8', color: '#9A4B10', fontWeight: 600 }}>
                Em revisão
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section id="enterprise" className={styles.enterpriseSection}>
        <div className={styles.enterpriseOrb1} />
        <div className={styles.enterpriseOrb2} />
        <div className={styles.enterpriseInner}>
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.enterpriseTagBadge}>Acolheduc Enterprise</span>
              <h2 className={styles.h2OnBrand}>
                Uma rede inteira, <span className={styles.h1Serif}>com a marca de cada escola</span>.
              </h2>
            </div>
            <p className={styles.sectionLeadOnBrand}>
              Multi-tenant de verdade: cada escola tem seu endereço, seus usuários, seu logo e os módulos
              que ela decidiu ligar.
            </p>
          </div>

          <div className={styles.entGrid}>
            <div className={styles.entCard}>
              <p className={styles.entCardTitle}>Painel do administrador</p>
              <p className={styles.entCardBody}>
                Usuários com cargo e status, identidade da escola com upload de logo, e uma chave para cada
                módulo.
              </p>
              <div className={styles.entRows}>
                <div className={styles.entRow}>
                  <span className={styles.entRowLabel}>Módulo RTI</span>
                  <span className={styles.entToggle}>
                    <span className={styles.entToggleDot} />
                  </span>
                </div>
                <div className={styles.entRow}>
                  <span className={styles.entRowLabel}>Identidade da escola</span>
                  <span className={styles.entRowMeta}>logo próprio</span>
                </div>
                <div className={styles.entRow}>
                  <span className={styles.entRowLabel}>Cargos</span>
                  <span className={styles.entRowMeta}>coordenador e professor</span>
                </div>
              </div>
            </div>
            <div className={styles.entMedia}>
              <Image
                src="/design/acolheduc/18-admin-config.jpg"
                alt="Configurações da escola, identidade e módulos ativos"
                width={1568}
                height={745}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Por que Acolheduc */}
      <section className={styles.section}>
        <div className={styles.whyGrid}>
          <div>
            <p className={styles.eyebrow}>Por que Acolheduc</p>
            <h2 className={styles.whyTitle}>
              Acompanhamento que <span className={styles.h1Serif}>cabe na rotina</span> da escola.
            </h2>
            <p className={styles.whyLead}>
              Uma forma nova de acompanhar, documentar e desenvolver cada aluno, em qualquer rede de ensino.
            </p>
            <ul className={styles.whyList}>
              {WHY_ITEMS.map((item) => (
                <li key={item} className={styles.whyItem}>
                  <Check size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.stackCard}>
            <p className={styles.stackCardLabel}>Stack tecnológica</p>
            <div className={styles.stackGrid}>
              {STACK_ITEMS.map((item) => (
                <div key={item.name} className={styles.stackItem}>
                  <p className={styles.stackItemName}>{item.name}</p>
                  <p className={styles.stackItemRole}>{item.role}</p>
                </div>
              ))}
            </div>
            <div className={styles.stackFooter}>
              <p className={styles.stackFooterTitle}>Arquitetura Auri Gen 2</p>
              <p className={styles.stackFooterBody}>
                Performance e escalabilidade enterprise, com deploy contínuo e monitoramento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="falar" className={styles.contactSection}>
        <div className={styles.contactOrb} />
        <div className={styles.contactInner}>
          <div className={styles.contactGrid}>
            <div>
              <p className={styles.eyebrow}>Implantação em redes de qualquer porte</p>
              <h2 className={styles.contactTitle}>
                Sua gestão escolar pode ser{' '}
                <span className={styles.h1Serif} style={{ color: 'var(--ac-brand)', backgroundImage: 'none' }}>
                  mais humana
                </span>
                .
              </h2>
              <p className={styles.contactLead}>
                Veja o acompanhamento pedagógico sair das planilhas e virar inteligência em tempo real. A
                conversa inicial é sem custo.
              </p>
              <div className={styles.ctaRow}>
                <a href={DEMO_HREF} target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                  Entrar na demo
                </a>
                <Link href="/" className={styles.ctaSecondary}>
                  Conhecer a Auri
                </Link>
              </div>
            </div>

            <AcolheducContactForm />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerBrandRow}>
              <span className={styles.logo}>Acolheduc</span>
              <span className={styles.enterpriseTag}>Enterprise</span>
            </div>
            <p className={styles.footerBrandBody}>
              Gestão escolar inteligente. Um produto AuriSolutions, em produção.
            </p>
            <p className={styles.footerDomain}>
              <a href="https://acolheduc.com.br" target="_blank" rel="noopener noreferrer">
                acolheduc.com.br
              </a>
            </p>
          </div>
          <div className={styles.footerCols}>
            <div className={styles.footerCol}>
              <span className={styles.footerColLabel}>Plataforma</span>
              <a href="#dois-mundos" className={styles.footerLink}>
                Professor e Coordenação
              </a>
              <a href="#aluno" className={styles.footerLink}>
                Área de Perfil
              </a>
              <a href="#ia" className={styles.footerLink}>
                IA pedagógica
              </a>
              <a href="#enterprise" className={styles.footerLink}>
                Enterprise
              </a>
            </div>
            <div className={styles.footerCol}>
              <span className={styles.footerColLabel}>AuriSolutions</span>
              <Link href="/" className={styles.footerLink}>
                O estúdio
              </Link>
              <a href={DEMO_HREF} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
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
          <span className={styles.footerMeta}>LGPD compliant · BNCC integrada · Multi-tenant ready</span>
        </div>
      </footer>
    </div>
  );
}
