'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import {
  ArrowLeft,
  GraduationCap,
  Users,
  Brain,
  BarChart3,
  BookOpen,
  Target,
  TrendingUp,
  Shield,
  Sparkles,
  CheckCircle2,
  Play,
  ExternalLink,
  Layers,
  Zap,
  Globe
} from 'lucide-react';

// Animated counter component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Floating orb component
function FloatingOrb({ delay = 0, size = 300, color = '#10B981' }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-20 pointer-events-none"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

const features = [
  {
    icon: Users,
    title: 'Multi-tenant',
    description: 'Gerencie múltiplas escolas em uma única plataforma centralizada.',
    highlight: true,
    span: 'col-span-1'
  },
  {
    icon: Brain,
    title: 'IA Generativa',
    description: 'Geração automática de planos de aula, atividades e relatórios personalizados.',
    highlight: false,
    span: 'col-span-1 md:col-span-2'
  },
  {
    icon: BarChart3,
    title: 'Dashboard RTI',
    description: 'Visualização em tempo real do progresso dos alunos com indicadores de intervenção.',
    highlight: true,
    span: 'col-span-1 md:col-span-2'
  },
  {
    icon: BookOpen,
    title: 'Portfólio Digital',
    description: 'Documente o desenvolvimento com fotos, vídeos e anotações.',
    highlight: false,
    span: 'col-span-1'
  },
  {
    icon: Target,
    title: 'Acompanhamento Individual',
    description: 'Perfil detalhado com histórico pedagógico completo.',
    highlight: false,
    span: 'col-span-1'
  },
  {
    icon: TrendingUp,
    title: 'Analytics Avançado',
    description: 'Relatórios automatizados para gestores e coordenadores.',
    highlight: false,
    span: 'col-span-1'
  },
];

const stats = [
  { value: 12, suffix: '+', label: 'Escolas Ativas', icon: GraduationCap },
  { value: 2000, suffix: '+', label: 'Educadores', icon: Users },
  { value: 5000, suffix: '+', label: 'Alunos Impactados', icon: Sparkles },
  { value: 99.9, suffix: '%', label: 'Uptime', icon: Shield },
];

const stack = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Prisma', category: 'ORM' },
  { name: 'OpenAI', category: 'AI' },
];

const benefits = [
  'Redução de 60% no tempo de documentação',
  'Acompanhamento individualizado em escala',
  'Relatórios automatizados para pais',
  'Integração completa com LGPD',
  'Suporte pedagógico 24/7',
  'Treinamento incluso para equipe',
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
      {/* Hero Section - Immersive */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-black to-black" />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10">
          <FloatingOrb delay={0} size={400} color="#10B981" />
        </div>
        <div className="absolute bottom-20 right-10">
          <FloatingOrb delay={2} size={300} color="#059669" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FloatingOrb delay={4} size={500} color="#10B981" />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container relative z-10 pt-32 pb-20"
        >
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#produtos"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-emerald-400 transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Voltar ao ecossistema</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/20 flex items-center justify-center"
                  animate={{
                    boxShadow: ['0 0 20px rgba(16, 185, 129, 0.2)', '0 0 40px rgba(16, 185, 129, 0.4)', '0 0 20px rgba(16, 185, 129, 0.2)']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <GraduationCap className="w-8 h-8 text-emerald-400" />
                </motion.div>
                <div>
                  <p className="text-emerald-400 font-medium text-lg">Acolheduc</p>
                  <p className="text-neutral-500 text-sm">Produto Auri</p>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                Gestão Escolar
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400">
                  Inteligente
                </span>
              </h1>

              <p className="text-xl text-neutral-400 leading-relaxed mb-10 max-w-xl">
                Plataforma completa para gestão pedagógica com acompanhamento individual,
                intervenções RTI e integração com IA generativa. Multi-tenant pronto para redes de escolas.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://acolheduc-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(16, 185, 129, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5 relative z-10 fill-current" />
                  <span className="relative z-10">Ver Demo ao Vivo</span>
                  <ExternalLink className="w-4 h-4 relative z-10 opacity-70" />
                  <span className="absolute top-1 right-2 text-[10px] px-2 py-0.5 rounded-full bg-black/20 text-white/80 font-medium">
                    Ambiente de Teste
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <motion.a
                  href="https://acolheduc.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-emerald-500/40 text-white font-medium rounded-xl hover:border-emerald-500/70 hover:bg-emerald-500/5 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Site Oficial</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Interface Preview */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              {/* Mock Interface */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl" />

                {/* Main Dashboard Card */}
                <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 shadow-2xl">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Dashboard RTI</p>
                        <p className="text-neutral-500 text-xs">Escola Municipal Centro</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-neutral-500">Tempo real</span>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: 'Alunos', value: '847', change: '+12' },
                      { label: 'Intervenções', value: '23', change: '-5' },
                      { label: 'Progresso', value: '78%', change: '+8%' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-neutral-800/50 rounded-lg p-3">
                        <p className="text-neutral-500 text-xs mb-1">{stat.label}</p>
                        <p className="text-white font-semibold text-lg">{stat.value}</p>
                        <p className="text-emerald-400 text-xs">{stat.change}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-neutral-800/30 rounded-lg p-4 mb-4">
                    <div className="flex items-end gap-2 h-24">
                      {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 70, 85].map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t"
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.5, delay: i * 0.05 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex gap-2">
                    <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 text-center">
                      <Brain className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                      <p className="text-xs text-neutral-400">Gerar Plano</p>
                    </div>
                    <div className="flex-1 bg-neutral-800/50 rounded-lg p-3 text-center">
                      <BookOpen className="w-4 h-4 text-neutral-400 mx-auto mb-1" />
                      <p className="text-xs text-neutral-400">Portfólios</p>
                    </div>
                    <div className="flex-1 bg-neutral-800/50 rounded-lg p-3 text-center">
                      <BarChart3 className="w-4 h-4 text-neutral-400 mx-auto mb-1" />
                      <p className="text-xs text-neutral-400">Relatórios</p>
                    </div>
                  </div>
                </div>

                {/* Floating Card 1 */}
                <motion.div
                  className="absolute -left-8 top-1/4 bg-neutral-900/90 backdrop-blur border border-neutral-800 rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">IA Ativa</p>
                      <p className="text-neutral-500 text-xs">Gerando relatório...</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card 2 */}
                <motion.div
                  className="absolute -right-4 bottom-1/4 bg-neutral-900/90 backdrop-blur border border-emerald-500/30 rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <p className="text-white text-sm">LGPD Compliant</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-neutral-700 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/10 to-black" />

        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm group-hover:border-emerald-500/30 transition-colors">
                  <stat.icon className="w-8 h-8 text-emerald-400 mb-4" />
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-neutral-500">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Bento Grid */}
      <section id="features" className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm mb-6">
              Funcionalidades
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tudo que sua escola precisa
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Uma plataforma completa pensada para revolucionar a gestão pedagógica
            </p>
          </motion.div>

          {/* Bento Grid */}
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
                <div className={`h-full p-8 rounded-2xl border transition-all duration-500 ${
                  feature.highlight
                    ? 'border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent hover:border-emerald-500/50'
                    : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-700'
                }`}>
                  <motion.div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      feature.highlight
                        ? 'bg-emerald-500/20'
                        : 'bg-neutral-800/50 group-hover:bg-emerald-500/20'
                    } transition-colors`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className={`w-7 h-7 ${
                      feature.highlight
                        ? 'text-emerald-400'
                        : 'text-neutral-400 group-hover:text-emerald-400'
                    } transition-colors`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-black to-emerald-950/20" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm mb-6">
                Por que Acolheduc?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Resultados que
                <br />
                <span className="text-emerald-400">transformam</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-10">
                Mais de 12 escolas já estão experimentando uma nova forma de
                acompanhar e desenvolver seus alunos.
              </p>

              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-emerald-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-neutral-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-3xl" />
              <div className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur">
                <div className="flex items-center gap-3 mb-8">
                  <Layers className="w-6 h-6 text-emerald-400" />
                  <p className="text-white font-semibold text-lg">Stack Tecnológica</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group p-4 rounded-xl bg-neutral-800/50 border border-neutral-700 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all"
                    >
                      <p className="text-white font-medium">{tech.name}</p>
                      <p className="text-neutral-500 text-sm">{tech.category}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="text-white font-medium">Arquitetura Gen 2</p>
                      <p className="text-neutral-500 text-sm">Performance e escalabilidade enterprise</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 via-black to-black" />

        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
            <motion.div
              className="absolute inset-0 rounded-full bg-emerald-500/10 blur-3xl"
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 mb-8"
              animate={{
                boxShadow: ['0 0 20px rgba(16, 185, 129, 0)', '0 0 40px rgba(16, 185, 129, 0.3)', '0 0 20px rgba(16, 185, 129, 0)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Globe className="w-4 h-4" />
              <span>Disponível em todo Brasil</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Pronto para transformar
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                sua gestão escolar?
              </span>
            </h2>

            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
              Explore o Acolheduc e descubra como mais de 12 escolas já estão
              revolucionando o acompanhamento pedagógico.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://acolheduc-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-lg rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(16, 185, 129, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5 relative z-10 fill-current" />
                <span className="relative z-10">Ver Demo ao Vivo</span>
                <ExternalLink className="w-4 h-4 relative z-10 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <Link
                href="/#contato"
                className="inline-flex items-center gap-3 px-10 py-5 border border-neutral-700 text-white font-semibold text-lg rounded-xl hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all"
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
