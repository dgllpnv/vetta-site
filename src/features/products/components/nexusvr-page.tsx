'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useRef } from 'react';
import {
  ArrowLeft,
  Glasses,
  Globe,
  Gamepad2,
  MonitorPlay,
  Users,
  Layers,
  Play,
  ExternalLink,
  Zap,
  Eye,
  Cpu,
  CheckCircle2,
  Headphones,
  Sparkles,
} from 'lucide-react';

// Starfield decorativo (não-aleatório no SSR)
function Starfield() {
  const stars = useMemo(() => {
    const seed = (i: number) => Math.sin(i * 9999.31) * 43758.5453;
    const frac = (n: number) => n - Math.floor(n);
    return Array.from({ length: 80 }).map((_, i) => ({
      top: `${frac(seed(i + 1)) * 100}%`,
      left: `${frac(seed(i + 13)) * 100}%`,
      size: 1 + frac(seed(i + 27)) * 1.5,
      delay: frac(seed(i + 41)) * 4,
      duration: 2 + frac(seed(i + 67)) * 4,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
          }}
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

const features = [
  {
    icon: Globe,
    title: 'Meta Quest 3',
    description: 'Otimizado para Meta Quest 3, oferecendo a melhor experiência em VR do mercado.',
    highlight: true,
    span: 'col-span-1 md:col-span-2',
  },
  {
    icon: Eye,
    title: 'Aulas Imersivas',
    description: 'Ambientes 3D educacionais que transformam o aprendizado.',
    highlight: false,
    span: 'col-span-1',
  },
  {
    icon: Gamepad2,
    title: 'Interatividade',
    description: 'Mecânicas que aumentam o engajamento dos alunos.',
    highlight: false,
    span: 'col-span-1',
  },
  {
    icon: MonitorPlay,
    title: 'WebXR',
    description: 'Acesso via navegador e headsets VR sem instalação.',
    highlight: true,
    span: 'col-span-1 md:col-span-2',
  },
  {
    icon: Users,
    title: 'Salas Colaborativas',
    description: 'Múltiplos alunos interagindo na mesma sala virtual.',
    highlight: false,
    span: 'col-span-1',
  },
  {
    icon: Layers,
    title: 'Gestão de Conteúdo',
    description: 'Painel administrativo para gerenciar aulas e materiais.',
    highlight: false,
    span: 'col-span-1',
  },
];

const stack = [
  { name: 'Three.js', category: '3D Engine' },
  { name: 'WebXR', category: 'VR/AR API' },
  { name: 'React Three Fiber', category: 'React Binding' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'WebGL', category: 'Graphics' },
];

const useCases = [
  'Aulas de ciências com laboratórios virtuais',
  'Experiências históricas imersivas',
  'Treinamentos práticos em ambiente seguro',
  'Educação à distância interativa',
  'Simulações de situações reais',
  'Aprendizado colaborativo em VR',
];

export function NexusvrContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="relative bg-[#08020F]">
      {/* Hero — sci-fi com starfield, magenta-cyan */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0A2E] via-[#0A0218] to-black" />
        <Starfield />

        {/* Orbs magenta + cyan */}
        <motion.div
          className="absolute top-10 -left-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #EC4899 0%, transparent 65%)' }}
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 -right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1, 1.1], x: [0, -30, 0] }}
          transition={{ duration: 11, repeat: Infinity }}
        />

        {/* Grid 3D em perspectiva */}
        <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(236, 72, 153, 0.4) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              transform: 'perspective(500px) rotateX(60deg) translateY(20%)',
              transformOrigin: 'center top',
            }}
          />
        </div>

        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(236, 72, 153, 0.5) 2px, rgba(236, 72, 153, 0.5) 4px)',
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container relative z-10 pt-32 pb-20"
        >
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/#produtos"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-pink-400 transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Voltar ao ecossistema</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6"
            >
              {/* Logo "N" magenta-pink-cyan */}
              <div className="inline-flex items-center gap-3 mb-8">
                <motion.div
                  className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 flex items-center justify-center shadow-lg overflow-hidden"
                  animate={{
                    boxShadow: [
                      '0 0 25px rgba(236, 72, 153, 0.4)',
                      '0 0 50px rgba(236, 72, 153, 0.7)',
                      '0 0 25px rgba(236, 72, 153, 0.4)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span
                    className="text-white text-3xl font-black"
                    style={{ fontFamily: '"Courier New", monospace', letterSpacing: '-0.05em' }}
                  >
                    N
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-transparent" />
                </motion.div>
                <div>
                  <p
                    className="text-pink-400 font-bold text-lg uppercase tracking-[0.2em]"
                    style={{ fontFamily: '"Courier New", monospace' }}
                  >
                    Nexus VR Edu
                  </p>
                  <p className="text-neutral-500 text-sm">Produto Auri · Realidade Virtual</p>
                </div>
              </div>

              {/* Eyebrow tech */}
              <p
                className="text-cyan-400 text-xs md:text-sm uppercase tracking-[0.4em] mb-4 font-bold"
                style={{ fontFamily: '"Courier New", monospace' }}
              >
                &lt; Tecnologia Meta Quest /&gt;
              </p>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.0] mb-6 tracking-tight"
                style={{ fontFamily: '"Courier New", monospace' }}
              >
                Transforme a
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-400">
                  Educação
                </span>
                <br />
                com{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-fuchsia-400">
                  VR
                </span>
                .
              </h1>

              <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-10 max-w-xl">
                Plataforma completa de planos de aula imersivos para escolas do
                Ensino Fundamental com tecnologia Meta Quest. Transformamos seu
                conteúdo tradicional em experiência imersiva.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://nexus-vr-edu-final.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-bold uppercase tracking-wider text-sm rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(236, 72, 153, 0.6)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5 relative z-10 fill-current" />
                  <span className="relative z-10">Acessar Portal</span>
                  <ExternalLink className="w-4 h-4 relative z-10 opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <Link
                  href="/#contato"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-pink-500/40 text-pink-200 font-bold uppercase tracking-wider text-sm rounded-xl hover:border-pink-500/70 hover:bg-pink-500/5 transition-all"
                >
                  Falar com Especialista
                </Link>
              </div>

              {/* Trust mini */}
              <div className="mt-12 pt-8 border-t border-pink-500/15 flex flex-wrap gap-x-8 gap-y-4">
                <div>
                  <p
                    className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/70 mb-1 font-bold"
                    style={{ fontFamily: '"Courier New", monospace' }}
                  >
                    Hardware
                  </p>
                  <p className="text-base text-white">Meta Quest 3</p>
                </div>
                <div>
                  <p
                    className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/70 mb-1 font-bold"
                    style={{ fontFamily: '"Courier New", monospace' }}
                  >
                    Acesso
                  </p>
                  <p className="text-base text-white">WebXR + Browser</p>
                </div>
                <div>
                  <p
                    className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/70 mb-1 font-bold"
                    style={{ fontFamily: '"Courier New", monospace' }}
                  >
                    Padrão
                  </p>
                  <p className="text-base text-white">BNCC integrada</p>
                </div>
              </div>
            </motion.div>

            {/* Right — screenshot real do home Nexus */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-6 hidden lg:block"
            >
              <div className="relative">
                {/* Glow magenta-cyan */}
                <div className="absolute -inset-6 bg-gradient-to-r from-pink-500/40 via-fuchsia-500/30 to-cyan-500/30 rounded-[2rem] blur-3xl" />

                <motion.div
                  className="relative rounded-2xl overflow-hidden border border-pink-500/30 shadow-2xl"
                  whileHover={{ scale: 1.01, boxShadow: '0 30px 60px rgba(236, 72, 153, 0.4)' }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src="/products/nexusvr/home.png"
                    alt="Nexus VR Edu — interface real do produto"
                    width={1200}
                    height={750}
                    priority
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-pink-500/20 pointer-events-none rounded-2xl" />
                  {/* HUD corners */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/70" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/70" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-pink-400/70" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-pink-400/70" />
                </motion.div>

                {/* Floating: 90 FPS */}
                <motion.div
                  className="absolute -left-8 top-1/4 bg-[#0A0218]/95 backdrop-blur border border-cyan-500/40 rounded-xl p-3 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <p
                      className="text-cyan-300 text-xs font-bold uppercase tracking-wider"
                      style={{ fontFamily: '"Courier New", monospace' }}
                    >
                      90 FPS estável
                    </p>
                  </div>
                </motion.div>

                {/* Floating: zero install */}
                <motion.div
                  className="absolute -right-4 -bottom-6 bg-[#0A0218]/95 backdrop-blur border border-pink-500/40 rounded-xl p-3 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-pink-400" />
                    <div>
                      <p
                        className="text-[10px] uppercase tracking-widest text-pink-400 font-bold mb-0.5"
                        style={{ fontFamily: '"Courier New", monospace' }}
                      >
                        WebXR
                      </p>
                      <p className="text-white text-xs font-semibold">Zero install</p>
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
          <div className="w-6 h-10 rounded-full border-2 border-pink-500/40 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-pink-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Section: foto admin real (gestão escolar VR) */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0218] to-black" />
        <Starfield />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span
                className="inline-block px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs uppercase tracking-[0.3em] font-bold mb-6"
                style={{ fontFamily: '"Courier New", monospace' }}
              >
                Painel de Gestão
              </span>
              <h2
                className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.05]"
                style={{ fontFamily: '"Courier New", monospace' }}
              >
                Da{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  sala de aula
                </span>
                <br />
                ao{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                  multiverso
                </span>
                .
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                Gestão centralizada de escolas, professores, alunos e conteúdos VR.
                Cada plano de aula tem sua jornada imersiva — e cada turma, seu próprio
                analytics em tempo real.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Multi-escola', desc: 'redes inteiras' },
                  { label: 'Multi-professor', desc: 'controle granular' },
                  { label: 'Conteúdos VR', desc: 'biblioteca curada' },
                  { label: 'BNCC', desc: 'alinhamento nativo' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-4 rounded-xl bg-neutral-900/50 border border-pink-500/15 hover:border-pink-500/40 transition-colors"
                  >
                    <p
                      className="text-pink-300 text-sm font-bold mb-1"
                      style={{ fontFamily: '"Courier New", monospace' }}
                    >
                      {item.label}
                    </p>
                    <p className="text-neutral-500 text-xs">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — screenshot do painel admin */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-pink-500/30 to-cyan-500/30 rounded-[2rem] blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden border border-pink-500/25 shadow-2xl">
                <Image
                  src="/products/nexusvr/admin.png"
                  alt="Nexus VR Edu — painel de gestão de escolas"
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-cyan-500/20 pointer-events-none rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section id="features" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#08020F]" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className="inline-block px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs uppercase tracking-[0.3em] font-bold mb-6"
              style={{ fontFamily: '"Courier New", monospace' }}
            >
              Recursos
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-6"
              style={{ fontFamily: '"Courier New", monospace' }}
            >
              O futuro da{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                educação
              </span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Aulas imersivas com Meta Quest 3 e WebXR.
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
                  className={`h-full p-8 rounded-2xl border transition-all duration-500 ${
                    feature.highlight
                      ? 'border-pink-500/30 bg-gradient-to-br from-pink-500/[0.08] via-transparent to-cyan-500/[0.06] hover:border-pink-500/60'
                      : 'border-neutral-800 bg-neutral-900/50 hover:border-pink-500/30'
                  }`}
                >
                  <motion.div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      feature.highlight
                        ? 'bg-gradient-to-br from-pink-500 to-fuchsia-600 shadow-lg shadow-pink-500/40'
                        : 'bg-neutral-800/50 group-hover:bg-pink-500/15'
                    } transition-colors`}
                    whileHover={{ scale: 1.08, rotate: 6 }}
                  >
                    <feature.icon
                      className={`w-7 h-7 ${
                        feature.highlight ? 'text-white' : 'text-neutral-400 group-hover:text-pink-300'
                      } transition-colors`}
                      strokeWidth={2}
                    />
                  </motion.div>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: '"Courier New", monospace' }}
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

      {/* Use cases + stack */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-950/20 via-black to-cyan-950/20" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span
                className="inline-block px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs uppercase tracking-[0.3em] font-bold mb-6"
                style={{ fontFamily: '"Courier New", monospace' }}
              >
                Aplicações
              </span>
              <h2
                className="text-4xl md:text-5xl font-black text-white mb-6"
                style={{ fontFamily: '"Courier New", monospace' }}
              >
                Possibilidades{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  ilimitadas
                </span>
              </h2>
              <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                De treinamentos de segurança a tours virtuais —
                NexusVR se adapta às necessidades pedagógicas.
              </p>

              <div className="grid gap-3">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-pink-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0" />
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
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/15 to-cyan-500/15 rounded-3xl blur-3xl" />
              <div className="relative p-8 rounded-2xl border border-pink-500/20 bg-[#0A0218]/80 backdrop-blur">
                <div className="flex items-center gap-3 mb-8">
                  <Cpu className="w-6 h-6 text-pink-400" />
                  <p
                    className="text-white font-bold text-lg uppercase tracking-wider"
                    style={{ fontFamily: '"Courier New", monospace' }}
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
                      className="group p-4 rounded-xl bg-neutral-800/50 border border-neutral-700 hover:border-pink-500/40 hover:bg-pink-500/5 transition-all"
                    >
                      <p
                        className="text-white font-semibold"
                        style={{ fontFamily: '"Courier New", monospace' }}
                      >
                        {tech.name}
                      </p>
                      <p className="text-neutral-500 text-sm">{tech.category}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-500/20">
                  <div className="flex items-center gap-3">
                    <Headphones className="w-5 h-5 text-pink-400" />
                    <div>
                      <p className="text-white font-medium">Otimizado para Meta Quest 3</p>
                      <p className="text-neutral-500 text-sm">A melhor experiência em VR educacional</p>
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E] via-black to-black" />
        <Starfield />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]">
            <motion.div
              className="absolute inset-0 rounded-full bg-pink-500/15 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 mb-8"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(236, 72, 153, 0)',
                  '0 0 40px rgba(236, 72, 153, 0.4)',
                  '0 0 20px rgba(236, 72, 153, 0)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Glasses className="w-4 h-4" />
              <span
                className="text-xs uppercase tracking-[0.3em] font-bold"
                style={{ fontFamily: '"Courier New", monospace' }}
              >
                Pronto para WebXR
              </span>
            </motion.div>

            <h2
              className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.0]"
              style={{ fontFamily: '"Courier New", monospace' }}
            >
              Entre no futuro da
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-400">
                educação imersiva
              </span>
            </h2>

            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Explore o NexusVR e descubra como a realidade virtual
              transforma a forma como seus alunos aprendem.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://nexus-vr-edu-final.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-bold uppercase tracking-wider text-sm rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(236, 72, 153, 0.6)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5 relative z-10 fill-current" />
                <span className="relative z-10">Acessar Portal</span>
                <ExternalLink className="w-5 h-5 relative z-10 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <Link
                href="/#contato"
                className="inline-flex items-center gap-3 px-10 py-5 border border-pink-500/40 text-pink-200 font-bold uppercase tracking-wider text-sm rounded-xl hover:border-pink-500/70 hover:bg-pink-500/5 transition-all"
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
