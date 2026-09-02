import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './lumina.module.css';
import { LuminaContactForm } from './lumina-contact-form';

const DEMO_HREF = 'https://lumina-host-ten.vercel.app/';

export function LuminaPage() {
  return (
    <div className={styles.page}>
      {/* ===== Day wrapper: 07:00, 12:30, 16:00 (dawn -> noon -> dusk) ===== */}
      <div className={styles.dayWrap}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.brand}>
              <span className={styles.brandName}>Lumina</span>
              <span className={styles.brandTag}>Hospitalidade</span>
            </div>
            <nav className={styles.nav}>
              <span className={styles.navLinks}>
                <a href="#h07" className={styles.navLink}>
                  07:00
                </a>
                <a href="#h12" className={styles.navLink}>
                  12:30
                </a>
                <a href="#h16" className={styles.navLink}>
                  16:00
                </a>
                <a href="#h23" className={styles.navLink}>
                  23:45
                </a>
                <Link href="/" className={styles.navLink}>
                  O estúdio
                </Link>
              </span>
              <a href="#falar" className={styles.navCta}>
                Acessar Sistema
              </a>
            </nav>
          </div>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={`${styles.eyebrowAmber} ${styles.rise}`}>Experiência premium em gestão</p>

            <h1 className={`${styles.h1} ${styles.rise}`} style={{ animationDelay: '0.08s' }}>
              Onde a <span className={styles.emphasis}>excelência</span> encontra a gestão
            </h1>

            <div className={styles.heroGrid}>
              <div className={styles.rise} style={{ animationDelay: '0.16s' }}>
                <p className={styles.heroLead}>
                  Uma plataforma refinada para restaurantes e pousadas que entendem que cada detalhe
                  importa. Gestão elegante para hospitalidade de alto padrão.
                </p>
                <div className={styles.ctaRow}>
                  <a
                    href={DEMO_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaPrimary}
                  >
                    Ver demo ao vivo <ArrowRight size={16} />
                  </a>
                  <a href="#h07" className={styles.ctaSecondary}>
                    Acompanhar um dia
                  </a>
                </div>
              </div>

              <div className={styles.rise} style={{ animationDelay: '0.24s' }}>
                <div className={styles.heroNote}>
                  <p className={styles.heroNoteQuote}>
                    Uma casa de hospitalidade não abre e fecha. Ela gira em vinte e quatro horas.
                  </p>
                  <p className={styles.heroNoteSub}>
                    Esta página acompanha um dia inteiro de operação. Role e veja a luz mudar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07:00 */}
        <section id="h07" className={styles.hourSection}>
          <div className={styles.inset}>
            <span className={styles.stamp} style={{ color: 'var(--lm-amber-bright)' }}>
              07:00
            </span>
            <p className={`${styles.kicker} ${styles.kickerAmber}`}>O primeiro café e o último check-out</p>
            <h2 className={styles.h2} style={{ maxWidth: '15ch' }}>
              Os quartos acordam antes <span className={styles.emphasis}>da recepção</span>.
            </h2>

            <div className={`${styles.hourRow} ${styles.hourRowLeft}`}>
              <div>
                <p className={styles.copy}>
                  O mapa de quartos abre com tudo resolvido: quantos estão livres, quantos saem hoje,
                  quem já pediu limpeza. A governanta e a recepção olham a mesma tela e param de se
                  procurar pelo corredor.
                </p>
                <div className={styles.dl}>
                  <div className={styles.dlRow}>
                    <span className={styles.dt}>Mapa de quartos</span>
                    <span className={styles.dd}>Status por unidade, com foto</span>
                  </div>
                  <div className={styles.dlRow}>
                    <span className={styles.dt}>Reservas</span>
                    <span className={styles.dd}>Nova reserva em um clique</span>
                  </div>
                  <div className={styles.dlRow}>
                    <span className={styles.dt}>Governança</span>
                    <span className={styles.dd}>Fila de limpeza do dia</span>
                  </div>
                </div>
                <div className={styles.pillRow}>
                  <span className={`${styles.pill} ${styles.pillAvailable}`}>Disponível</span>
                  <span className={`${styles.pill} ${styles.pillOccupied}`}>Ocupado</span>
                  <span className={`${styles.pill} ${styles.pillReserved}`}>Reservado</span>
                  <span className={`${styles.pill} ${styles.pillCleaning}`}>Limpeza</span>
                </div>
              </div>
              <div className={`${styles.shot} ${styles.shotRotateNeg}`}>
                <Image
                  src="/design/lumina/08-pdv-hotel.jpg"
                  alt="Gestão de hospedagem do Lumina, mapa de quartos"
                  width={900}
                  height={620}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 12:30 */}
        <section id="h12" className={styles.hourSection}>
          <div className={styles.inset}>
            <span className={styles.stamp} style={{ color: 'var(--lm-amber)' }}>
              12:30
            </span>
            <p className={`${styles.kicker} ${styles.kickerAmber}`}>O salão lotado</p>
            <h2 className={styles.h2} style={{ maxWidth: '16ch' }}>
              Oito mesas, doze pratos, <span className={styles.emphasis}>nenhuma comanda perdida</span>.
            </h2>

            <div className={`${styles.hourRow} ${styles.hourRowRight}`}>
              <div className={`${styles.shot} ${styles.shotRotatePos}`}>
                <Image
                  src="/design/lumina/07-pdv-restaurante.jpg"
                  alt="PDV Restaurante do Lumina, mapa de mesas e cardápio"
                  width={900}
                  height={620}
                />
              </div>
              <div>
                <p className={styles.copy}>
                  O mapa de mesas mostra o nome de quem está sentado. Clique duplo troca o status. O
                  cardápio abre por categoria, o pedido monta ao lado e vai direto para a cozinha, sem
                  papel no caminho.
                </p>
                <div className={styles.tiles}>
                  <div className={styles.tile}>
                    <p className={styles.tileNum}>8</p>
                    <p className={styles.tileLabel}>mesas no mapa</p>
                  </div>
                  <div className={styles.tile}>
                    <p className={styles.tileNum}>12</p>
                    <p className={styles.tileLabel}>itens no cardápio</p>
                  </div>
                  <div className={styles.tile}>
                    <p className={styles.tileNum}>5</p>
                    <p className={styles.tileLabel}>categorias do menu</p>
                  </div>
                  <div className={styles.tile}>
                    <p className={styles.tileNum}>1</p>
                    <p className={styles.tileLabel}>toque até a cozinha</p>
                  </div>
                </div>
                <p className={styles.footnote}>Números da unidade de demonstração.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 16:00 */}
        <section id="h16" className={styles.hourSection}>
          <div className={styles.inset}>
            <span className={styles.stamp} style={{ color: 'var(--lm-indigo)' }}>
              16:00
            </span>
            <p className={`${styles.kicker} ${styles.kickerIndigo}`}>Entre um serviço e outro</p>
            <h2 className={styles.h2} style={{ maxWidth: '16ch' }}>
              A hora em que a casa <span style={{ fontStyle: 'italic', color: 'var(--lm-amber)' }}>se organiza</span>.
            </h2>
            <p className={styles.h2Sub}>
              O intervalo entre o almoço e o jantar é quando o estoque é conferido, a escala é ajustada e
              a unidade é configurada. Tudo mora no mesmo menu lateral, não em cinco sistemas.
            </p>

            <div className={`${styles.tiles} ${styles.tiles4}`}>
              <div className={styles.tileBig}>
                <p className={styles.tileTitle}>Estoque</p>
                <p className={styles.tileLabel}>Insumos do salão e da casa no mesmo controle</p>
              </div>
              <div className={styles.tileBig}>
                <p className={styles.tileTitle}>Equipe</p>
                <p className={styles.tileLabel}>Cada função enxerga o que lhe cabe</p>
              </div>
              <div className={styles.tileBig}>
                <p className={styles.tileTitle}>Financeiro</p>
                <p className={styles.tileLabel}>Contas a pagar e a receber do dia</p>
              </div>
              <div className={styles.tileBig}>
                <p className={styles.tileTitle}>Configurações</p>
                <p className={styles.tileLabel}>Ajustes da unidade que está ativa</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== Night wrapper: 23:45, Rede, Depoimento, Contato, Rodapé (own gradient) ===== */}
      <div className={styles.nightWrap}>
        {/* 23:45 */}
        <section id="h23" className={`${styles.hourSection} ${styles.hourSectionNight}`}>
          <div className={styles.inset}>
            <span className={styles.stamp} style={{ color: 'var(--lm-gold)' }}>
              23:45
            </span>
            <p className={`${styles.kicker} ${styles.kickerGold}`}>Fechamento de caixa</p>
            <h2 className={`${styles.h2} ${styles.h2Light}`} style={{ maxWidth: '15ch' }}>
              O DRE já está pronto quando a{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--lm-gold)' }}>última mesa levanta</span>.
            </h2>

            <div className={`${styles.hourRow} ${styles.hourRowLeft}`}>
              <div>
                <p className={`${styles.copy} ${styles.copyNight}`}>
                  Cada venda do salão e cada diária do hotel caíram no mesmo caixa ao longo do dia.
                  Ninguém consolida nada à mão: o painel já mostra o dia, o mês, o ticket médio, o que
                  está atrasado e a ocupação.
                </p>
                <div className={styles.dl}>
                  <div className={`${styles.dlRow} ${styles.dlRowNight}`}>
                    <span className={`${styles.dt} ${styles.dtNight}`}>Vendas de hoje</span>
                    <span className={`${styles.dd} ${styles.ddNight}`}>Comparado a ontem</span>
                  </div>
                  <div className={`${styles.dlRow} ${styles.dlRowNight}`}>
                    <span className={`${styles.dt} ${styles.dtNight}`}>Fluxo de caixa</span>
                    <span className={`${styles.dd} ${styles.ddNight}`}>Últimos sete dias</span>
                  </div>
                  <div className={`${styles.dlRow} ${styles.dlRowNight}`}>
                    <span className={`${styles.dt} ${styles.dtNight}`}>Despesas</span>
                    <span className={`${styles.dd} ${styles.ddNight}`}>Por categoria</span>
                  </div>
                  <div className={`${styles.dlRow} ${styles.dlRowNight}`}>
                    <span className={`${styles.dt} ${styles.dtNight}`}>Ocupação</span>
                    <span className={`${styles.dd} ${styles.ddNight}`}>Quartos ocupados</span>
                  </div>
                </div>
              </div>
              <div className={`${styles.shot} ${styles.shotNight} ${styles.shotRotateNeg}`}>
                <Image
                  src="/design/lumina/05-dashboard.jpg"
                  alt="Painel financeiro do Lumina com fluxo de caixa e despesas por categoria"
                  width={900}
                  height={620}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Rede / Lumina Host */}
        <section className={styles.hourSection} style={{ paddingTop: 'clamp(64px, 9vw, 120px)' }}>
          <div className={`${styles.hourRow} ${styles.hourRowNetwork}`} style={{ marginTop: 0 }}>
            <div className={`${styles.shot} ${styles.shotNight} ${styles.shotRotatePos}`}>
              <Image
                src="/design/lumina/04-organizacoes.jpg"
                alt="Lumina Host, painel de organizações da rede"
                width={900}
                height={620}
              />
            </div>
            <div>
              <p className={`${styles.kicker} ${styles.kickerGold}`}>Lumina Host</p>
              <h2 className={styles.h2Network}>
                E amanhã, <span style={{ fontStyle: 'italic', color: 'var(--lm-gold)' }}>na outra casa</span>.
              </h2>
              <p className={`${styles.copy} ${styles.copyNight}`} style={{ maxWidth: '42ch' }}>
                Quem tem mais de um estabelecimento troca de unidade sem sair do sistema. Cada
                organização entra como restaurante ou pousada, com plano e status próprios, e o dia
                recomeça com o mesmo ritual.
              </p>
              <div className={styles.networkSteps}>
                <div className={styles.networkStep}>
                  <span className={styles.networkStepNum}>01</span>
                  <p className={styles.networkStepBody}>
                    A rede cadastra suas organizações e escolhe o tipo de cada uma
                  </p>
                </div>
                <div className={styles.networkStep}>
                  <span className={styles.networkStepNum}>02</span>
                  <p className={styles.networkStepBody}>
                    Cada unidade ganha seu painel, sua equipe e seu caixa
                  </p>
                </div>
                <div className={styles.networkStep}>
                  <span className={styles.networkStepNum}>03</span>
                  <p className={styles.networkStepBody}>O operador escolhe qual casa está gerenciando agora</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimento */}
        <section className={styles.testimonialSection}>
          <div className={styles.testimonialInner}>
            <p className={styles.testimonialQuote}>
              &ldquo;A elegância do sistema reflete exatamente o que buscamos.&rdquo;
            </p>
            <div className={styles.testimonialAuthor}>
              <span className={styles.testimonialAvatar}>R</span>
              <div style={{ textAlign: 'left' }}>
                <p className={styles.testimonialName}>Ricardo Almeida</p>
                <p className={styles.testimonialRole}>Proprietário, Pousada Serra Dourada</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="falar" className={styles.contactSection}>
          <div className={styles.contactGrid}>
            <div>
              <span className={styles.contactBadge}>Comece hoje</span>
              <h2 className={styles.h2Contact}>
                Pronto para <span style={{ fontStyle: 'italic', color: 'var(--lm-gold)' }}>elevar sua gestão</span>?
              </h2>
              <p className={styles.contactLead}>
                Junte-se aos estabelecimentos que já transformaram sua operação e descobriram uma nova
                forma de gerir. A conversa inicial é sem custo.
              </p>
              <div className={styles.ctaRow}>
                <a href={DEMO_HREF} target="_blank" rel="noopener noreferrer" className={styles.ctaOnDark}>
                  Acessar Sistema <ArrowRight size={16} />
                </a>
                <Link href="/" className={styles.ctaGhostOnDark}>
                  Conhecer a Auri
                </Link>
              </div>
            </div>

            <LuminaContactForm />
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerTop}>
            <div>
              <div className={styles.footerBrand}>
                <span className={styles.footerBrandName}>Lumina</span>
                <span className={styles.footerBrandTag}>Hospitalidade</span>
              </div>
              <p className={styles.footerBrandBody}>
                Gestão elegante para hospitalidade de alto padrão. Um produto AuriSolutions, em produção.
              </p>
              <p className={styles.footerDomain}>
                <a href="https://lumina.aurisolutions.com.br" target="_blank" rel="noopener noreferrer">
                  lumina.aurisolutions.com.br
                </a>
              </p>
            </div>
            <div className={styles.footerCols}>
              <div className={styles.footerCol}>
                <span className={styles.footerColLabel}>O dia</span>
                <a href="#h07" className={styles.footerLink}>
                  07:00 · Hospedagem
                </a>
                <a href="#h12" className={styles.footerLink}>
                  12:30 · Salão
                </a>
                <a href="#h16" className={styles.footerLink}>
                  16:00 · A casa
                </a>
                <a href="#h23" className={styles.footerLink}>
                  23:45 · Caixa
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
            <span className={styles.footerMeta}>PDV · PMS · DRE automático</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
