'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import {
  ArrowLeft,
  Target,
  Users,
  ShieldCheck,
  Calendar,
  ClipboardList,
  Crosshair,
  PackageCheck,
  Receipt,
  Eye,
  CheckCircle2,
  Cpu,
  Building2,
  Home,
  ChevronRight,
} from 'lucide-react';

const features = [
  {
    icon: Crosshair,
    title: 'Controle de Baias',
    description:
      'Check-in transacional por baia, ocupação em tempo real e histórico completo de disparos por associado.',
    highlight: true,
    span: 'col-span-1 md:col-span-2',
  },
  {
    icon: ClipboardList,
    title: 'Habitualidade CR/CAC',
    description:
      'Acompanhamento das exigências legais de frequência mínima para CR/CAC com alertas e relatórios.',
    highlight: false,
    span: 'col-span-1',
  },
  {
    icon: Receipt,
    title: 'Anuidades & Financeiro',
    description:
      'Anuidades empilhadas (renovação automática), lançamentos financeiros e demonstrativos por período.',
    highlight: false,
    span: 'col-span-1',
  },
  {
    icon: PackageCheck,
    title: 'Estoque & Munições',
    description:
      'Controle de munições e EPIs com alertas de mínimo, movimentações auditadas (SALE_OUT / RETURN_IN).',
    highlight: true,
    span: 'col-span-1 md:col-span-2',
  },
  {
    icon: Calendar,
    title: 'Eventos & Competições',
    description:
      'Cadastro de eventos, controle de inscrições e divulgação interna no portal do associado.',
    highlight: false,
    span: 'col-span-1',
  },
  {
    icon: Eye,
    title: 'Auditoria Nativa',
    description:
      'AuditLog em todas as operações sensíveis, sem nunca falhar a operação principal, engole exceções por design.',
    highlight: false,
    span: 'col-span-1',
  },
];

const stack = [
  { name: 'React 18 + Vite', category: 'Frontend' },
  { name: 'TypeScript 5', category: 'Language' },
  { name: 'Express 4', category: 'Backend' },
  { name: 'PostgreSQL 16', category: 'Database' },
  { name: 'Prisma 5', category: 'ORM' },
  { name: 'shadcn/ui (Radix)', category: 'UI primitives' },
];

const compliance = [
  'Habitualidade CR/CAC com alertas automatizados',
  'AuditLog independente em todas as operações sensíveis',
  'Transações Prisma para integridade financeira (vendas, anuidades, empréstimos)',
  'Carteirinha digital do associado com QR code',
  'Multi-portal SPA: balcão (Admin) + área pessoal (Associado)',
  'Backup `coldre_backup.dump` versionado',
];

export function CbtContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="relative bg-[#0A0606]">
      {/* Hero, tactical, dark profundo, sotaque laranja */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0F08] via-[#0A0606] to-black" />

        {/* Vinheta lateral laranja */}
        <motion.div
          className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 65%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.22, 0.15] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 -right-40 w-[450px] h-[450px] rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #EA580C 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 11, repeat: Infinity }}
        />

        {/* Reticulado tactical sutil */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container relative z-10 pt-32 pb-20"
        >
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/#produtos"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-orange-400 transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Voltar ao ecossistema</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6"
            >
              {/* Badge tactical */}
              <div className="inline-flex items-center gap-3 mb-8">
                <motion.div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/30 to-orange-700/10 border border-orange-500/40 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(249, 115, 22, 0.25)',
                      '0 0 45px rgba(249, 115, 22, 0.5)',
                      '0 0 20px rgba(249, 115, 22, 0.25)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Target className="w-8 h-8 text-orange-400" strokeWidth={2.5} />
                </motion.div>
                <div>
                  <p className="text-orange-400 font-semibold text-lg tracking-wider uppercase">Coldre System</p>
                  <p className="text-neutral-500 text-sm">Produto Auri · +10 anos de operação</p>
                </div>
              </div>

              {/* Eyebrow */}
              <p className="text-neutral-400 text-sm md:text-base uppercase tracking-[0.3em] mb-3 font-medium">
                Sistema operacional para
              </p>

              {/* Headline serif bold, usa frase real do produto */}
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Excelência em
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
                  Tiro Esportivo
                </span>
                <span className="text-neutral-500">.</span>
              </h1>

              <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-10 max-w-xl">
                Sua jornada no mundo do tiro começa aqui. Cadastro de associados,
                presença por baia, anuidade, habitualidade CR/CAC, eventos e
                auditoria nativa em todas as operações sensíveis.
              </p>

              {/* Cliente nomeado tactical */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-10 inline-flex items-center gap-3 px-5 py-3 rounded-lg border-l-2 border-orange-500 bg-gradient-to-r from-orange-500/10 to-transparent"
              >
                <Building2 className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-orange-500/80 font-semibold">
                    Em produção
                  </p>
                  <p className="text-white font-semibold">Clube Baiano de Tiro</p>
                </div>
              </motion.div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contato"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-black font-bold uppercase tracking-wider text-sm rounded-lg shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] transition-all"
                >
                  Falar sobre seu clube
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/#produtos"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-orange-500/40 text-orange-300 font-semibold uppercase tracking-wider text-sm rounded-lg hover:border-orange-500/70 hover:bg-orange-500/5 transition-all"
                >
                  Outros produtos
                </Link>
              </div>

              {/* Trust mini tactical */}
              <div className="mt-12 pt-8 border-t border-orange-500/15 flex flex-wrap gap-x-8 gap-y-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-orange-500/70 mb-1 font-bold">
                    Operação
                  </p>
                  <p
                    className="text-base text-white"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    +10 anos
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-orange-500/70 mb-1 font-bold">
                    Compliance
                  </p>
                  <p
                    className="text-base text-white"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    CR/CAC nativo
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-orange-500/70 mb-1 font-bold">
                    Auditoria
                  </p>
                  <p
                    className="text-base text-white"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Por design
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right, screenshot real do dashboard Coldre */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-6 hidden lg:block"
            >
              <div className="relative">
                {/* Glow tactical */}
                <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/30 to-amber-500/15 rounded-[2rem] blur-3xl" />

                <motion.div
                  className="relative rounded-xl overflow-hidden border border-orange-500/30 shadow-2xl"
                  whileHover={{ scale: 1.01, boxShadow: '0 30px 60px rgba(249, 115, 22, 0.4)' }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src="/products/cbt/dashboard.png"
                    alt="Coldre System, painel administrativo real"
                    width={1200}
                    height={750}
                    priority
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-orange-500/15 pointer-events-none rounded-xl" />
                  {/* HUD corners tactical */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-orange-500/70" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-orange-500/70" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-orange-500/70" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-orange-500/70" />
                </motion.div>

                {/* Floating: CR/CAC OK */}
                <motion.div
                  className="absolute -left-8 top-1/4 bg-[#0F0A07]/95 backdrop-blur border-l-2 border-orange-500 rounded-lg p-3 shadow-xl"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-orange-400" />
                    <div>
                      <p className="text-[8px] uppercase tracking-[0.2em] text-orange-300 font-bold">CR/CAC</p>
                      <p className="text-white text-xs font-semibold">Habitualidade OK</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating: audit log */}
                <motion.div
                  className="absolute -right-4 -bottom-6 bg-[#0F0A07]/95 backdrop-blur border-l-2 border-orange-500 rounded-lg p-3 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-orange-400" />
                    <p className="text-white text-xs font-semibold">Audit log ativo</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-orange-500/40 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-orange-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Section: lancamentos.png, operação rica em ação */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0606] to-black" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left, screenshot lancamentos */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/25 to-amber-500/15 rounded-[2rem] blur-3xl" />
              <div className="relative rounded-xl overflow-hidden border border-orange-500/25 shadow-2xl">
                <Image
                  src="/products/cbt/lancamentos.png"
                  alt="Coldre System, lançamentos operacionais"
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-orange-500/15 pointer-events-none rounded-xl" />
              </div>
            </motion.div>

            {/* Right, copy */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs uppercase tracking-[0.3em] font-semibold mb-6">
                Operação no balcão
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.05]"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Tudo que o admin precisa,
                <br />
                <span className="text-orange-400 italic">um clique de distância</span>
                <span className="text-neutral-500">.</span>
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                Nova visita, nova venda, novo empréstimo, nova anuidade, cada
                operação dispara uma transação atômica e um registro de auditoria.
                Zero retrabalho, zero planilha paralela.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: 'Nova visita', desc: 'check-in com baia' },
                  { label: 'Nova venda', desc: 'estoque + financeiro' },
                  { label: 'Novo empréstimo', desc: 'controle de equipamento' },
                  { label: 'Nova anuidade', desc: 'pagamento + validade' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-4 rounded-lg bg-black/40 border-l-2 border-orange-500/40 hover:border-orange-500 transition-colors"
                  >
                    <p
                      className="text-orange-300 text-sm font-bold mb-0.5"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {item.label}
                    </p>
                    <p className="text-neutral-500 text-xs uppercase tracking-wider">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section id="features" className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs uppercase tracking-[0.3em] font-semibold mb-6">
              Capacidades
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Operação completa do clube
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Da catraca à demonstração financeira, sem planilhas paralelas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative ${feature.span}`}
              >
                <div
                  className={`h-full p-8 rounded-xl border transition-all duration-500 ${
                    feature.highlight
                      ? 'border-orange-500/40 bg-gradient-to-br from-orange-500/[0.08] to-transparent hover:border-orange-500/60'
                      : 'border-neutral-800 bg-neutral-900/40 hover:border-orange-500/30'
                  }`}
                >
                  <motion.div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${
                      feature.highlight
                        ? 'bg-orange-500/20 border border-orange-500/40'
                        : 'bg-neutral-800/50 group-hover:bg-orange-500/15 border border-transparent'
                    } transition-colors`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <feature.icon
                      className={`w-7 h-7 ${
                        feature.highlight ? 'text-orange-400' : 'text-neutral-400 group-hover:text-orange-400'
                      } transition-colors`}
                      strokeWidth={2}
                    />
                  </motion.div>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: relatorios.png, auditoria e relatórios */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/20 via-black to-orange-950/15" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs uppercase tracking-[0.3em] font-semibold mb-6">
                Por que Coldre
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.05]"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Conformidade
                <br />
                <span className="text-orange-400 italic">por design</span>
                <span className="text-neutral-500">.</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                Cada operação que toca pessoas, dinheiro ou equipamento entra no
                AuditLog. Cada fluxo financeiro acontece dentro de uma transação
                Prisma. Relatórios oficiais saem em PDF com um clique.
              </p>

              <div className="grid gap-3">
                {compliance.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-black/40 border-l-2 border-orange-500/40 hover:border-orange-500 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right, screenshot relatorios */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:sticky lg:top-32"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-[2rem] blur-3xl" />
              <div className="relative rounded-xl overflow-hidden border border-orange-500/25 shadow-2xl">
                <Image
                  src="/products/cbt/relatorios.png"
                  alt="Coldre System, relatórios oficiais e auditoria"
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-orange-500/15 pointer-events-none rounded-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stack section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0F0A07] to-black" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs uppercase tracking-[0.3em] font-semibold mb-6">
                Engenharia
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.05]"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Single-tenant
                <br />
                <span className="text-orange-400 italic">por escolha</span>
                <span className="text-neutral-500">.</span>
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                Cada clube recebe sua instalação dedicada. Banco e domínio próprios.
                Dados nunca cruzam clientes. Backup versionado.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/5 rounded-2xl blur-3xl" />
              <div className="relative p-8 rounded-2xl border border-orange-500/20 bg-[#0F0A07]/80 backdrop-blur">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-orange-500/15">
                  <Cpu className="w-6 h-6 text-orange-400" />
                  <p
                    className="text-white font-bold text-lg uppercase tracking-wider"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Stack Operacional
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {stack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                      className="group p-4 rounded-lg bg-black/50 border border-neutral-800 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all"
                    >
                      <p className="text-white font-semibold">{tech.name}</p>
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mt-0.5">{tech.category}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-orange-500/10 to-transparent border-l-2 border-orange-500">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-orange-400" />
                    <div>
                      <p className="text-white font-semibold text-sm">
                        Single-tenant, instalação por clube
                      </p>
                      <p className="text-neutral-500 text-xs">
                        Banco e domínio próprios. Dados nunca cruzam clientes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/30 via-black to-black" />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.12), transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-300 mb-8"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(249, 115, 22, 0)',
                  '0 0 40px rgba(249, 115, 22, 0.4)',
                  '0 0 20px rgba(249, 115, 22, 0)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Home className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold">
                Implantação dedicada por clube
              </span>
            </motion.div>

            <h2
              className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.05]"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Seu clube fora do
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 italic">
                regime de planilhas.
              </span>
            </h2>

            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Implantação em ambiente próprio com auditoria, financeiro e habitualidade
              CR/CAC desde o primeiro dia. Conversemos sobre o seu clube.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contato"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-orange-500 hover:bg-orange-400 text-black font-bold uppercase tracking-wider text-sm rounded-lg shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] transition-all"
              >
                Falar com Especialista
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#produtos"
                className="inline-flex items-center gap-3 px-10 py-5 border border-orange-500/40 text-orange-300 font-semibold uppercase tracking-wider text-sm rounded-lg hover:border-orange-500/70 hover:bg-orange-500/5 transition-all"
              >
                Ver outros produtos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
