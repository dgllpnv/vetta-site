import Image from 'next/image';
import Link from 'next/link';
import {
  UserCheck,
  Radio,
  ShoppingCart,
  DoorClosed,
  ShieldCheck,
  Users,
  Wrench,
  Package,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  User,
  ShieldHalf,
} from 'lucide-react';
import styles from './coldre.module.css';
import { ColdreContactForm } from './coldre-contact-form';

const ARRIVAL_TILES = [
  { icon: UserCheck, label: 'Chegada', value: 'Facial ou busca' },
  { icon: Radio, label: 'Ocupação', value: 'Baias em tempo real' },
  { icon: ShoppingCart, label: 'Consumo', value: 'Vendas na conta' },
  { icon: DoorClosed, label: 'Saída', value: 'Fechamento de conta' },
] as const;

const HABIT_STEPS = [
  'A presença é registrada quando o associado chega',
  'Os disparos ficam vinculados à sessão e à baia',
  'O sistema acompanha a frequência exigida e alerta quem está para vencer',
  'Há lançamento manual para o que aconteceu fora do fluxo',
] as const;

const MEMBER_ROWS = [
  { name: 'Associado do quadro', cpf: '000.000.000-00', number: '0001', profile: 'Associado' },
  { name: 'Associado do quadro', cpf: '000.000.000-00', number: '0008', profile: 'Associado' },
  { name: 'Associado do quadro', cpf: '000.000.000-00', number: '0018', profile: 'Associado' },
] as const;

const CADASTRO_TILES = [
  { icon: Users, title: 'Visitantes', body: 'Quem entra sem ser do quadro também fica registrado' },
  { icon: Wrench, title: 'Equipamentos', body: 'Armas do clube, empréstimo e devolução auditados' },
  { icon: Package, title: 'Produtos', body: 'Munição e insumos com baixa no estoque a cada venda' },
] as const;

const FINANCE_TILES = [
  {
    icon: TrendingUp,
    label: 'Receita',
    value: 'Comparada ao período anterior',
    className: styles.finGreen,
  },
  {
    icon: TrendingDown,
    label: 'Despesas',
    value: 'Lançadas na hora',
    className: styles.finRed,
  },
  {
    icon: AlertTriangle,
    label: 'Inadimplência',
    value: 'Vencidas e a vencer',
    className: styles.finOrange,
  },
] as const;

export function ColdrePage() {
  return (
    <div className={styles.page}>
      <div className={styles.grid} aria-hidden="true" />

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.brand}>
            <span className={styles.brandBadge}>CBT</span>
            <div>
              <p className={styles.brandName}>Coldre System</p>
              <p className={styles.brandTag}>Excelência em tiro esportivo</p>
            </div>
          </div>
          <nav className={styles.nav}>
            <span className={styles.navLinks}>
              <a href="#linha" className={styles.navLink}>
                Linha de tiro
              </a>
              <a href="#habitualidade" className={styles.navLink}>
                Habitualidade
              </a>
              <a href="#cadastro" className={styles.navLink}>
                Associados
              </a>
              <a href="#caixa" className={styles.navLink}>
                Financeiro
              </a>
              <Link href="/" className={styles.navLink}>
                O estúdio
              </Link>
            </span>
            <a href="#falar" className={styles.navCta}>
              Falar com a Auri
            </a>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.reticleRing} aria-hidden="true" />
        <div className={styles.reticleCross} aria-hidden="true">
          <span className={styles.reticleCrossH} />
          <span className={styles.reticleCrossV} />
        </div>

        <div className={styles.heroInner}>
          <div className={`${styles.statusRow} ${styles.rise}`}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>Sistema operacional</span>
            <span className={styles.statusSep} />
            <span className={styles.statusMuted}>Produto AuriSolutions</span>
          </div>

          <h1 className={`${styles.h1} ${styles.rise}`} style={{ animationDelay: '0.08s' }}>
            O clube inteiro
            <br />
            <span className={styles.h1Accent}>registrado</span>, tiro a tiro
          </h1>

          <div className={styles.heroGrid}>
            <div className={styles.rise} style={{ animationDelay: '0.16s' }}>
              <p className={styles.heroLead}>
                Sistema operacional para clubes de tiro esportivo. Presença por baia, habitualidade
                CR/CAC, anuidades e auditoria nativa em toda operação sensível.
              </p>
              <div className={styles.ctaRow}>
                <a href="#linha" className={styles.ctaPrimary}>
                  Ver o sistema
                </a>
                <a href="#falar" className={styles.ctaSecondary}>
                  Falar com a equipe
                </a>
              </div>
            </div>
            <div className={`${styles.media} ${styles.rise}`} style={{ animationDelay: '0.26s' }}>
              <Image
                src="/design/coldre/01-hero.jpg"
                alt="Site do Clube Baiano de Tiro, tela real em produção"
                width={1568}
                height={745}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="linha" className={styles.section}>
        <div className={styles.inset}>
          <div className={styles.rail}>
            <p className={styles.railNumber}>01 / 04</p>
            <div className={styles.railLineActive}>
              <span className={styles.railSweep} />
            </div>
          </div>

          <p className={styles.eyebrow}>Presentes no clube</p>
          <h2 className={styles.h2} style={{ maxWidth: '17ch' }}>
            Quem está na linha agora, e em qual baia
          </h2>
          <p className={styles.sectionLead}>
            O balcão deixa de adivinhar. O associado chega, é identificado por reconhecimento
            facial ou pela busca, e a partir dali tudo que ele fizer no clube fica amarrado a
            essa presença: os tiros, as compras, o fechamento de conta.
          </p>

          <div className={styles.k4}>
            {ARRIVAL_TILES.map((tile) => (
              <div key={tile.label} className={styles.tile}>
                <tile.icon size={20} className={styles.tileIcon} aria-hidden="true" />
                <p className={styles.tileLabel}>{tile.label}</p>
                <p className={styles.tileValue}>{tile.value}</p>
              </div>
            ))}
          </div>

          <div className={styles.mediaSm}>
            <Image
              src="/design/coldre/06-dashboard.jpg"
              alt="Dashboard do Coldre System com presentes no clube e ranking"
              width={1568}
              height={745}
            />
          </div>

          <div className={styles.row2}>
            <div className={styles.card}>
              <h4 className={styles.cardTitle}>Top frequentadores</h4>
              <p className={styles.cardBody}>
                Ranking de presença por mês, por ano ou desde sempre. O clube passa a saber quem
                sustenta a operação.
              </p>
            </div>
            <div className={styles.card}>
              <h4 className={styles.cardTitle}>Top maestria</h4>
              <p className={styles.cardBody}>
                Desempenho filtrado por arma, do jeito que o esporte separa.
              </p>
              <div className={styles.chipRow}>
                <span className={styles.chip}>Pistola</span>
                <span className={styles.chip}>Revólver</span>
                <span className={styles.chip}>Carabina / Rifle</span>
                <span className={styles.chip}>Espingarda</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="habitualidade" className={styles.sectionBand}>
        <div className={styles.bandInner}>
          <div className={styles.inset}>
            <div className={styles.rail}>
              <p className={styles.railNumber}>02 / 04</p>
              <div className={styles.railLine} />
            </div>

            <p className={styles.eyebrow}>Habitualidade CR/CAC</p>
            <h2 className={styles.h2} style={{ maxWidth: '18ch' }}>
              A exigência legal deixa de morar numa planilha
            </h2>

            <div className={styles.habRow}>
              <p className={styles.habText}>
                Todo CR precisa comprovar frequência mínima. Hoje isso costuma viver numa
                planilha que alguém preenche de memória na véspera da vistoria. No Coldre, a
                comprovação é subproduto da presença que já foi registrada na porta.
              </p>
              <div className={styles.steps}>
                {HABIT_STEPS.map((step, index) => (
                  <div
                    key={step}
                    className={`${styles.step} ${
                      index === HABIT_STEPS.length - 1 ? styles.stepLast : ''
                    }`}
                  >
                    <span className={styles.stepNum}>{String(index + 1).padStart(2, '0')}</span>
                    <p className={styles.stepText}>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.auditBlock}>
              <div className={styles.auditHead}>
                <ShieldCheck size={20} color="var(--cd-orange-soft)" aria-hidden="true" />
                <p className={styles.auditTitle}>Auditoria nativa</p>
              </div>
              <p className={styles.auditBody}>
                Toda operação sensível grava um registro de auditoria em paralelo, sem nunca
                derrubar a operação principal. Transações garantem a integridade de venda,
                anuidade e empréstimo: ou tudo acontece, ou nada acontece.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cadastro" className={styles.section}>
        <div className={styles.inset}>
          <div className={styles.rail}>
            <p className={styles.railNumber}>03 / 04</p>
            <div className={styles.railLine} />
          </div>

          <p className={styles.eyebrow}>Cadastro</p>
          <h2 className={styles.h2} style={{ maxWidth: '16ch' }}>
            O quadro social com número, perfil e situação
          </h2>
          <p className={styles.sectionLead}>
            Busca por nome, CPF ou e-mail. Ordenação por número de associado ou alfabética.
            Filtro de apenas ativos, porque quem saiu não pode continuar contando como quadro.
          </p>

          <div className={styles.tableWrap}>
            <div className={styles.tableScroll}>
              <div className={styles.tableHead}>
                <span>Nome</span>
                <span>CPF</span>
                <span>Nº associado</span>
                <span>Perfil</span>
                <span>Status</span>
              </div>
              {MEMBER_ROWS.map((row) => (
                <div key={row.number} className={styles.tableRow}>
                  <span className={styles.tableCell}>{row.name}</span>
                  <span className={styles.tableCellMono}>{row.cpf}</span>
                  <span className={styles.tableCellMono}>{row.number}</span>
                  <span className={styles.tableCellMuted}>{row.profile}</span>
                  <span className={styles.statusTag}>
                    <CheckCircle2 size={13} aria-hidden="true" />
                    Ativo
                  </span>
                </div>
              ))}
            </div>
            <p className={styles.tableNote}>
              Dados anonimizados para demonstração. Reprodução da tela do produto — dados reais
              ficam no clube.
            </p>
          </div>

          <div className={styles.k3}>
            {CADASTRO_TILES.map((tile) => (
              <div key={tile.title} className={styles.card}>
                <tile.icon size={18} className={styles.tileIcon} aria-hidden="true" />
                <h4 className={styles.cardTitle}>{tile.title}</h4>
                <p className={styles.cardBody}>{tile.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="caixa" className={styles.sectionBandNoBottom}>
        <div className={styles.bandInner}>
          <div className={styles.inset}>
            <div className={styles.rail}>
              <p className={styles.railNumber}>04 / 04</p>
              <div className={styles.railLine} />
            </div>

            <p className={styles.eyebrow}>Caixa e financeiro</p>
            <h2 className={styles.h2} style={{ maxWidth: '17ch' }}>
              Fechamento por período, e a inadimplência na cara
            </h2>
            <p className={styles.sectionLead}>
              Receita, despesa, resultado, margem e ticket médio no mesmo painel, sempre
              comparados com o período anterior. A inadimplência aparece separada entre o que já
              venceu e o que está para vencer, com exportação em PDF para a diretoria.
            </p>

            <div className={styles.k3} style={{ margin: '36px 0 24px' }}>
              {FINANCE_TILES.map((tile) => (
                <div key={tile.label} className={`${styles.tileFinance} ${tile.className}`}>
                  <tile.icon size={18} className={styles.tileIcon} aria-hidden="true" />
                  <p className={styles.tileLabel}>{tile.label}</p>
                  <p className={styles.tileValueSm}>{tile.value}</p>
                </div>
              ))}
            </div>

            <div className={styles.mediaSm}>
              <Image
                src="/design/coldre/08-financeiro.jpg"
                alt="Painel financeiro do Coldre System com indicadores e evolução"
                width={1568}
                height={745}
              />
            </div>

            <div className={styles.row2}>
              <div className={styles.card}>
                <h4 className={styles.cardTitle}>Caixa do dia</h4>
                <p className={styles.cardBody}>
                  Abertura, movimento e fechamento do balcão, dia a dia
                </p>
              </div>
              <div className={styles.card}>
                <h4 className={styles.cardTitle}>Relatórios</h4>
                <p className={styles.cardBody}>
                  Exportação em PDF e impressão do fechamento por período
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.portalGrid}>
          <div>
            <p className={styles.eyebrow}>Duas portas</p>
            <h2 className={styles.portalTitle}>Balcão e associado, no mesmo sistema</h2>
            <p className={styles.portalLead}>
              O portal separa quem administra de quem frequenta. O associado entra para ver sua
              carteira, sua habitualidade e sua situação. O balcão entra para operar o clube.
            </p>
            <div className={styles.portalOptions}>
              <div className={styles.portalOption}>
                <span className={styles.portalOptionLetter}>
                  <User size={18} aria-hidden="true" />
                </span>
                <p className={styles.portalOptionText}>
                  Associado, com carteirinha digital e QR code
                </p>
              </div>
              <div className={styles.portalOption}>
                <span className={styles.portalOptionLetter}>
                  <ShieldHalf size={18} aria-hidden="true" />
                </span>
                <p className={styles.portalOptionText}>
                  Administração, com o clube inteiro na barra lateral
                </p>
              </div>
            </div>
            <p className={styles.portalFoot}>
              O site público do clube também é parte do sistema: cursos, notícias, galeria,
              parceiros e localização saem do mesmo lugar.
            </p>
          </div>
          <div className={styles.mediaSm}>
            <Image
              src="/design/coldre/05-login.jpg"
              alt="Portal do Coldre System com escolha entre Associado e Admin"
              width={1568}
              height={745}
            />
          </div>
        </div>
      </section>

      <section id="falar" className={styles.sectionBandNoBottom}>
        <div className={styles.bandInner}>
          <div className={styles.contactGrid}>
            <div>
              <p className={styles.eyebrow}>Implantação em clubes</p>
              <h2 className={styles.contactTitle}>
                Seu clube merece um sistema que <span className={styles.h1Accent}>aguenta vistoria</span>
              </h2>
              <p className={styles.contactLead}>
                Conversa inicial sem custo. A gente entende como o seu clube opera hoje, quantas
                baias tem e o que o Exército cobra de você.
              </p>
              <div className={styles.ctaRow}>
                <a href="#falar" className={styles.ctaPrimary}>
                  Agendar conversa
                </a>
                <Link href="/" className={styles.ctaSecondary}>
                  Conhecer a Auri
                </Link>
              </div>
            </div>

            <ColdreContactForm />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerBrandRow}>
              <span className={styles.footerBadge}>CBT</span>
              <p className={styles.footerBrandName}>Coldre System</p>
            </div>
            <p className={styles.footerBrandBody}>
              Sistema operacional para clubes de tiro esportivo. Um produto AuriSolutions, em
              produção.
            </p>
          </div>
          <div className={styles.footerCols}>
            <div className={styles.footerCol}>
              <span className={styles.footerColLabel}>Sistema</span>
              <a href="#linha" className={styles.footerLink}>
                Linha de tiro
              </a>
              <a href="#habitualidade" className={styles.footerLink}>
                Habitualidade
              </a>
              <a href="#cadastro" className={styles.footerLink}>
                Associados
              </a>
              <a href="#caixa" className={styles.footerLink}>
                Financeiro
              </a>
            </div>
            <div className={styles.footerCol}>
              <span className={styles.footerColLabel}>AuriSolutions</span>
              <Link href="/" className={styles.footerLink}>
                O estúdio
              </Link>
              <a href="#falar" className={styles.footerLink}>
                Contato
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span className={styles.footerMeta}>© 2026 AuriSolutions</span>
          <span className={styles.footerMeta}>Audit-first · Multi-portal · Transações ACID</span>
        </div>
      </footer>
    </div>
  );
}
