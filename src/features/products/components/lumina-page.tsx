'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import {
  ArrowLeft,
  Utensils,
  Bed,
  BarChart3,
  Package,
  Receipt,
  Play,
  ExternalLink,
  Zap,
  CheckCircle2,
  TrendingUp,
  Calendar,
  Sparkles,
  Star,
} from 'lucide-react';

const features = [
  {
    icon: Utensils,
    title: 'PDV Restaurante',
    description: 'Pedidos, comandas, mesas e pagamentos com elegância. Interface refinada para fine dining e bistrôs autorais.',
    span: 'col-span-1 md:col-span-2',
  },
  {
    icon: Bed,
    title: 'PMS Hoteleiro',
    description: 'Reservas, check-in/out e governança automatizados.',
    span: 'col-span-1',
  },
  {
    icon: BarChart3,
    title: 'DRE em tempo real',
    description: 'Demonstração de resultado sem planilhas paralelas.',
    span: 'col-span-1',
  },
  {
    icon: Package,
    title: 'Estoque & Insumos',
    description: 'Alertas de mínimo, inventário automatizado e movimentações auditadas.',
    span: 'col-span-1 md:col-span-2',
  },
  {
    icon: Calendar,
    title: 'Reservas centralizadas',
    description: 'Calendário único e integração com canais de venda.',
    span: 'col-span-1',
  },
  {
    icon: TrendingUp,
    title: 'Analytics elegante',
    description: 'Ocupação, ticket médio e conversão em tempo real.',
    span: 'col-span-1',
  },
];

const stack = [
  { name: 'Next.js', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Prisma', category: 'ORM' },
  { name: 'Stripe', category: 'Pagamentos' },
];

const useCases = [
  'Restaurantes fine dining e bistrôs autorais',
  'Pousadas boutique e hotéis de charme',
  'Redes com múltiplas unidades premium',
  'Estabelecimentos em expansão estratégica',
  'Operações com vários canais de venda',
  'Gestão integrada de estoque e financeiro',
];

export function LuminaContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero — dark Auri spine + indigo Lumina elegante */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Camadas de profundidade */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F0820] via-[#0A0612] to-black" />

        {/* Soft orbs indigo + amber (assinatura Lumina) */}
        <motion.div
          className="absolute top-10 -left-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 65%)' }}
          animate={{ scale: [1, 1.1, 1], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 -right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D97706 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1, 1.1], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container relative z-10 pt-32 pb-20"
        >
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/#produtos"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-indigo-300 transition-colors mb-12 group text-sm"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Voltar ao ecossistema</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left content (col-span-6) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6"
            >
              {/* Badge L */}
              <div className="inline-flex items-center gap-3 mb-8">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center shadow-lg"
                  animate={{
                    boxShadow: [
                      '0 8px 25px rgba(99, 102, 241, 0.3)',
                      '0 12px 40px rgba(99, 102, 241, 0.55)',
                      '0 8px 25px rgba(99, 102, 241, 0.3)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span
                    className="text-white text-2xl font-medium italic"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    L
                  </span>
                </motion.div>
                <div>
                  <p
                    className="text-indigo-300 font-medium text-lg"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Lumina
                  </p>
                  <p className="text-neutral-500 text-sm">Produto Auri · Hospitalidade</p>
                </div>
              </div>

              {/* Eyebrow */}
              <p className="text-[10px] uppercase tracking-[0.4em] text-amber-500/90 font-semibold mb-6">
                Para quem valoriza
              </p>

              {/* Headline real do produto: "Onde a excelência encontra a gestão" */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-8 tracking-tight">
                Onde a{' '}
                <span
                  className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-violet-300 to-amber-200"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  excelência
                </span>
                <br />
                encontra a{' '}
                <span
                  className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-200 to-indigo-300"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  gestão
                </span>
                <span className="text-neutral-500">.</span>
              </h1>

              <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-10 max-w-xl">
                Plataforma elegante para gestão de restaurantes e pousadas boutique.
                PDV moderno, controle financeiro e experiência do cliente refinada
                em uma única plataforma.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://lumina-host-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(99, 102, 241, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5 relative z-10 fill-current" />
                  <span className="relative z-10">Acessar Sistema</span>
                  <ExternalLink className="w-4 h-4 relative z-10 opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <Link
                  href="/#contato"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-indigo-400/40 text-white font-medium rounded-xl hover:border-indigo-400/70 hover:bg-indigo-400/5 transition-all"
                >
                  Falar com Especialista
                </Link>
              </div>

              {/* Trust mini */}
              <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-wrap gap-x-8 gap-y-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-1">Padrão</p>
                  <p
                    className="text-base text-white italic"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Boutique &amp; fine dining
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-1">Operação</p>
                  <p
                    className="text-base text-white italic"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Tempo real
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-1">Suporte</p>
                  <p
                    className="text-base text-white italic"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Dedicado
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right — screenshot real do site Lumina (col-span-6) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-6 hidden lg:block"
            >
              <div className="relative">
                {/* Glow elegante */}
                <div className="absolute -inset-6 bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-amber-500/15 rounded-[2rem] blur-3xl" />

                {/* Screenshot real do home Lumina */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden border border-indigo-500/20 shadow-2xl"
                  whileHover={{ scale: 1.01, boxShadow: '0 30px 60px rgba(99, 102, 241, 0.3)' }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src="/products/lumina/home.png"
                    alt="Lumina — interface real do produto"
                    width={1200}
                    height={750}
                    priority
                    className="w-full h-auto"
                  />
                  {/* Overlay sutil para integrar ao dark theme */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none rounded-2xl" />
                </motion.div>

                {/* Floating: rating */}
                <motion.div
                  className="absolute -left-6 -top-4 bg-[#0F0820]/95 backdrop-blur border border-indigo-500/30 rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div>
                      <p
                        className="text-white text-sm italic"
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        &ldquo;Hospitalidade reimaginada&rdquo;
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating: KPI */}
                <motion.div
                  className="absolute -right-4 -bottom-6 bg-[#0F0820]/95 backdrop-blur border border-amber-500/30 rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold mb-0.5">
                        Eficiência
                      </p>
                      <p
                        className="text-white text-sm italic font-medium"
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        operacional
                      </p>
                    </div>
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
          <div className="w-6 h-10 rounded-full border-2 border-indigo-400/40 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-indigo-300"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* "A arte de receber bem" — fotos reais magazine layout */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0612] to-black" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — screenshot real do home2 (galeria de fotos do site real) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-amber-500/15 to-indigo-500/15 rounded-[2rem] blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden border border-indigo-500/20 shadow-2xl">
                <Image
                  src="/products/lumina/home2.png"
                  alt="Lumina — galeria de hospitalidade premium"
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none rounded-2xl" />
              </div>
            </motion.div>

            {/* Right — copy elegante */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-amber-500/90 font-semibold mb-4">
                Para quem valoriza
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-8 text-white">
                A arte de receber{' '}
                <span
                  className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-amber-200"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  bem
                </span>
                <span className="text-neutral-500">.</span>
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-10">
                Desenvolvido para estabelecimentos que entendem que a experiência do
                cliente começa muito antes do primeiro contato. Cada detalhe foi
                pensado para refletir a mesma cultura que você tem com seus hóspedes.
              </p>

              <div className="space-y-3">
                {useCases.slice(0, 4).map((useCase, i) => (
                  <motion.div
                    key={useCase}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80 flex-shrink-0" />
                    <span className="text-neutral-300">{useCase}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="https://lumina-host-ten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium rounded-xl shadow-lg transition-all"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(99, 102, 241, 0.45)' }}
                whileTap={{ scale: 0.98 }}
              >
                Experimentar Agora
                <ExternalLink className="w-4 h-4 opacity-80" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid — funcionalidades */}
      <section id="features" className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 text-indigo-300 text-xs uppercase tracking-[0.3em] font-semibold mb-6">
              Funcionalidades
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-[1.1]">
              Cada operação,{' '}
              <span
                className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-amber-200"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                cada decisão
              </span>
              , em um só lugar.
            </h2>
            <p className="text-neutral-400 text-lg">
              Da recepção ao financeiro — sem planilhas paralelas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative ${feature.span}`}
              >
                <div className="h-full p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-indigo-400/40 hover:bg-neutral-900/60 transition-all duration-500">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center mb-6 shadow-md"
                    whileHover={{ scale: 1.05, rotate: -3 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </motion.div>
                  <h3
                    className="text-xl font-medium text-white mb-3"
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

      {/* Stack section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/15 via-black to-amber-950/10" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 text-indigo-300 text-xs uppercase tracking-[0.3em] font-semibold mb-6">
                Engenharia
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-[1.1]">
                Construído com{' '}
                <span
                  className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-amber-200"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  cuidado
                </span>
                <span className="text-neutral-500">.</span>
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                A mesma obsessão que sua equipe tem com o cliente, nós temos com a
                arquitetura. Stack moderna, performática e auditável.
              </p>

              <div className="grid gap-2.5">
                {useCases.slice(2).map((useCase, index) => (
                  <motion.div
                    key={useCase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-indigo-400/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-indigo-300 flex-shrink-0" />
                    <span className="text-neutral-300">{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 to-amber-500/10 rounded-3xl blur-3xl" />
              <div className="relative p-8 rounded-2xl border border-indigo-400/20 bg-neutral-900/80 backdrop-blur">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-indigo-400/15">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center">
                    <Receipt className="w-5 h-5 text-white" />
                  </div>
                  <p
                    className="text-white font-medium text-lg italic"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Stack Tecnológica
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
                      className="p-4 rounded-xl bg-neutral-800/50 border border-neutral-700 hover:border-indigo-400/40 hover:bg-indigo-400/5 transition-colors"
                    >
                      <p className="text-white font-medium">{tech.name}</p>
                      <p className="text-neutral-500 text-sm">{tech.category}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-indigo-500/10 to-amber-500/10 border border-indigo-400/20">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-indigo-300" />
                    <div>
                      <p className="text-white font-medium">Arquitetura Auri Gen 2</p>
                      <p className="text-neutral-500 text-sm">Performance enterprise, design boutique</p>
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
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/30 via-black to-black" />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12), transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-amber-500/90 font-semibold mb-6">
              Para o seu estabelecimento
            </p>

            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-[1.05]">
              A gestão pode ser{' '}
              <span
                className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-amber-200"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                tão refinada
              </span>
              <br />
              quanto a hospitalidade.
            </h2>

            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Junte-se aos estabelecimentos que já transformaram sua operação e
              descobriram uma nova forma de gerir.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://lumina-host-ten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-xl transition-all overflow-hidden relative"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5 fill-current relative z-10" />
                <span className="relative z-10">Acessar Sistema</span>
                <ExternalLink className="w-4 h-4 opacity-80 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <Link
                href="/#contato"
                className="inline-flex items-center gap-3 px-10 py-5 border border-indigo-400/40 text-white font-semibold rounded-xl hover:border-indigo-400/70 hover:bg-indigo-400/5 transition-all"
              >
                Falar com Especialista
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
