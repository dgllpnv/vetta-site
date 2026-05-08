'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import {
  ArrowLeft,
  Users,
  Brain,
  BarChart3,
  BookOpen,
  Target,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Play,
  ExternalLink,
  Layers,
  Zap,
  Globe,
  Heart,
  Quote,
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Multi-tenant',
    description: 'Gerencie múltiplas escolas em uma única plataforma centralizada.',
    highlight: true,
    span: 'col-span-1',
  },
  {
    icon: Brain,
    title: 'IA Pedagógica',
    description: 'Geração de planos de aula, atividades e relatórios alinhados à BNCC.',
    highlight: false,
    span: 'col-span-1 md:col-span-2',
  },
  {
    icon: BarChart3,
    title: 'Dashboard RTI',
    description:
      'Acompanhamento em tempo real do progresso dos alunos com indicadores de intervenção.',
    highlight: true,
    span: 'col-span-1 md:col-span-2',
  },
  {
    icon: BookOpen,
    title: 'Portfólio Digital',
    description: 'Documente o desenvolvimento com fotos, vídeos, evidências e anotações.',
    highlight: false,
    span: 'col-span-1',
  },
  {
    icon: Target,
    title: 'Acompanhamento Individual',
    description: 'Perfil detalhado com histórico pedagógico completo de cada aluno.',
    highlight: false,
    span: 'col-span-1',
  },
  {
    icon: TrendingUp,
    title: 'Analytics Pedagógico',
    description: 'Relatórios automatizados para gestores e coordenadores.',
    highlight: false,
    span: 'col-span-1',
  },
];

const stack = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Prisma', category: 'ORM' },
  { name: 'OpenAI', category: 'IA' },
];

const benefits = [
  'Reduz o tempo de documentação pedagógica significativamente',
  'Acompanhamento individualizado, mesmo em redes grandes',
  'Relatórios automatizados para pais e responsáveis',
  'Conformidade LGPD por padrão',
  'Treinamento da equipe incluso',
  'Suporte pedagógico contínuo',
];

export function AcolheducContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero, dark Auri spine + lavanda Acolheduc */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Camadas de profundidade */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0F2E] via-[#0F0A1A] to-black" />

        {/* Soft orbs lavender */}
        <motion.div
          className="absolute top-10 -left-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #A78BFA 0%, transparent 65%)' }}
          animate={{ scale: [1, 1.1, 1], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 -right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C4B5FD 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1, 1.1], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />

        {/* Confete sutil de pequenas estrelas */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 30%, #A78BFA 1px, transparent 1px), radial-gradient(circle at 70% 60%, #C4B5FD 1px, transparent 1px), radial-gradient(circle at 40% 80%, #DDD6FE 1px, transparent 1px)',
              backgroundSize: '120px 120px, 90px 90px, 150px 150px',
            }}
          />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container relative z-10 pt-32 pb-20"
        >
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/#produtos"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-violet-300 transition-colors mb-12 group text-sm"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Voltar ao ecossistema</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left, copy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6"
            >
              {/* Badge cérebro lavender */}
              <div className="inline-flex items-center gap-3 mb-8">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-300 via-violet-400 to-purple-500 flex items-center justify-center shadow-lg"
                  animate={{
                    boxShadow: [
                      '0 8px 25px rgba(167, 139, 250, 0.35)',
                      '0 12px 40px rgba(167, 139, 250, 0.55)',
                      '0 8px 25px rgba(167, 139, 250, 0.35)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Brain className="w-7 h-7 text-white" strokeWidth={2.4} />
                </motion.div>
                <div>
                  <p className="text-violet-300 font-medium text-lg">Acolheduc</p>
                  <p className="text-neutral-500 text-sm">Produto Auri · Educação</p>
                </div>
              </div>

              {/* Eyebrow */}
              <p className="text-[10px] uppercase tracking-[0.4em] text-violet-400/90 font-semibold mb-6">
                Bem-vindo(a) ao Acolheduc
              </p>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6 tracking-tight">
                Gestão escolar
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-violet-400 to-purple-300">
                  que acolhe
                </span>{' '}
                <span className="text-neutral-500">seu aluno.</span>
              </h1>

              <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-10 max-w-xl">
                Plataforma pedagógica com acompanhamento individual, intervenções RTI
                e geração de conteúdo por IA. Multi-tenant pronto para redes inteiras.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://acolheduc-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-medium rounded-xl shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(139, 92, 246, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5 relative z-10 fill-current" />
                  <span className="relative z-10">Ver Demo ao Vivo</span>
                  <ExternalLink className="w-4 h-4 relative z-10 opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <motion.a
                  href="https://acolheduc.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-violet-400/40 text-white font-medium rounded-xl hover:border-violet-400/70 hover:bg-violet-400/5 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Site Oficial</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Trust mini */}
              <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-wrap gap-x-8 gap-y-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-1">Padrão</p>
                  <p className="text-base text-white">BNCC integrada</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-1">Compliance</p>
                  <p className="text-base text-white">LGPD by default</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-1">Suporte</p>
                  <p className="text-base text-white">Pedagógico contínuo</p>
                </div>
              </div>
            </motion.div>

            {/* Right, screenshot real do produto */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-6 hidden lg:block"
            >
              <div className="relative">
                {/* Glow lavender */}
                <div className="absolute -inset-6 bg-gradient-to-br from-violet-400/30 via-purple-500/20 to-fuchsia-400/15 rounded-[2rem] blur-3xl" />

                {/* Screenshot real do login Acolheduc */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden border border-violet-400/20 shadow-2xl"
                  whileHover={{ scale: 1.01, boxShadow: '0 30px 60px rgba(167, 139, 250, 0.3)' }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src="/products/acolheduc/login.png"
                    alt="Acolheduc, interface real do produto"
                    width={1200}
                    height={750}
                    priority
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none rounded-2xl" />
                </motion.div>

                {/* Floating: IA pedagógica */}
                <motion.div
                  className="absolute -left-6 -top-4 bg-[#1A0F2E]/95 backdrop-blur border border-violet-400/30 rounded-xl p-3 shadow-xl"
                  animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-300 to-violet-500 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">IA pedagógica</p>
                      <p className="text-violet-300 text-xs">gerando relatório...</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating: LGPD */}
                <motion.div
                  className="absolute -right-4 -bottom-6 bg-[#1A0F2E]/95 backdrop-blur border border-violet-400/30 rounded-xl p-3 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 fill-violet-400 text-violet-400" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-violet-400 font-semibold mb-0.5">
                        Compliance
                      </p>
                      <p className="text-white text-sm font-semibold">LGPD by default</p>
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
          <div className="w-6 h-10 rounded-full border-2 border-violet-400/40 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-violet-300"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Manifesto pull-quote, frases reais do produto */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0F0A1A] to-black" />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.12), transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 9, repeat: Infinity }}
        />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 lg:col-start-2"
            >
              <Quote className="w-12 h-12 text-violet-400/40 mb-6" strokeWidth={1.5} />

              <blockquote className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-[1.15] mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-violet-300 to-purple-200">
                  &ldquo;A educação é a arma mais poderosa
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-violet-300 to-violet-400">
                  para mudar o mundo.&rdquo;
                </span>
              </blockquote>

              <p className="text-base text-neutral-500 mb-10 italic">Nelson Mandela</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl border border-violet-400/15 bg-violet-500/5 backdrop-blur">
                  <p className="text-violet-300 text-sm uppercase tracking-widest mb-2 font-semibold">
                    Nossa missão
                  </p>
                  <p className="text-white leading-relaxed">
                    Cada aluno é um mundo inteiro de possibilidades.
                    O Acolheduc devolve ao educador o tempo de cuidar de cada um.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-violet-400/15 bg-violet-500/5 backdrop-blur">
                  <p className="text-violet-300 text-sm uppercase tracking-widest mb-2 font-semibold">
                    Como ajudamos
                  </p>
                  <p className="text-white leading-relaxed">
                    Documentação automatizada, planejamento por IA,
                    intervenções RTI rastreáveis. A tecnologia trabalhando para o pedagogo.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section id="features" className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-violet-400/30 bg-violet-400/10 text-violet-300 text-sm mb-6">
              Funcionalidades
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tudo que sua escola precisa
              <span className="text-violet-300">.</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Uma plataforma pensada para revolucionar a gestão pedagógica.
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
                  className={`h-full p-8 rounded-3xl border transition-all duration-500 ${
                    feature.highlight
                      ? 'border-violet-400/30 bg-gradient-to-br from-violet-500/10 to-transparent hover:border-violet-400/60'
                      : 'border-neutral-800 bg-neutral-900/50 hover:border-violet-400/30'
                  }`}
                >
                  <motion.div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      feature.highlight
                        ? 'bg-gradient-to-br from-violet-400 to-violet-600 shadow-lg shadow-violet-500/30'
                        : 'bg-neutral-800/50 group-hover:bg-violet-500/20'
                    } transition-colors`}
                    whileHover={{ scale: 1.08, rotate: -3 }}
                  >
                    <feature.icon
                      className={`w-7 h-7 ${
                        feature.highlight ? 'text-white' : 'text-neutral-400 group-hover:text-violet-300'
                      } transition-colors`}
                      strokeWidth={2.2}
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Stack */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/20 via-black to-violet-950/20" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full border border-violet-400/30 bg-violet-400/10 text-violet-300 text-sm mb-6">
                Por que Acolheduc
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
                Acompanhamento que
                <br />
                <span className="text-violet-300">cabe na rotina</span> da escola.
              </h2>
              <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                Uma nova forma de acompanhar, documentar e desenvolver
                cada aluno, em qualquer rede de ensino.
              </p>

              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-violet-400/30 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-violet-300" />
                    </div>
                    <span className="text-neutral-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stack visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-purple-400/15 rounded-3xl blur-3xl" />
              <div className="relative p-8 rounded-3xl border border-violet-400/20 bg-neutral-900/80 backdrop-blur">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white font-semibold text-lg">Stack Tecnológica</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {stack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                      className="group p-4 rounded-2xl bg-neutral-800/50 border border-neutral-700 hover:border-violet-400/40 hover:bg-violet-400/5 transition-all"
                    >
                      <p className="text-white font-medium">{tech.name}</p>
                      <p className="text-neutral-500 text-sm">{tech.category}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-violet-500/15 to-transparent border border-violet-400/20">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-violet-300" />
                    <div>
                      <p className="text-white font-medium">Arquitetura Auri Gen 2</p>
                      <p className="text-neutral-500 text-sm">Performance e escalabilidade enterprise</p>
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
        <div className="absolute inset-0 bg-gradient-to-t from-violet-950/30 via-black to-black" />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.1), transparent 70%)' }}
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-violet-400/30 bg-violet-400/10 text-violet-300 mb-8"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(167, 139, 250, 0)',
                  '0 0 40px rgba(167, 139, 250, 0.3)',
                  '0 0 20px rgba(167, 139, 250, 0)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Globe className="w-4 h-4" />
              <span>Implantação em redes de qualquer porte</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.05]">
              Sua gestão escolar pode
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-300">
                ser mais humana.
              </span>
            </h2>

            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Explore o Acolheduc e veja como o acompanhamento pedagógico
              pode sair das planilhas e virar inteligência em tempo real.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://acolheduc-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold text-lg rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(139, 92, 246, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5 relative z-10 fill-current" />
                <span className="relative z-10">Ver Demo ao Vivo</span>
                <ExternalLink className="w-4 h-4 relative z-10 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <Link
                href="/#contato"
                className="inline-flex items-center gap-3 px-10 py-5 border border-violet-400/40 text-white font-semibold text-lg rounded-2xl hover:border-violet-400/70 hover:bg-violet-400/5 transition-all"
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
