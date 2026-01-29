'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Glasses,
  Globe,
  Sparkles,
  Gamepad2,
  MonitorPlay,
  Users,
  Layers,
  Play,
  ExternalLink,
  Zap,
  Eye,
  Box,
  Cpu,
  CheckCircle2,
  Headphones
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

// 3D Grid effect component
function Grid3D() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center top',
        }}
      />
    </div>
  );
}

// Floating VR Element
function FloatingElement({ delay = 0, children, className = '' }: { delay?: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -15, 0],
        rotateY: [0, 5, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

const features = [
  {
    icon: Globe,
    title: 'Meta Quest 3',
    description: 'Otimizado para Meta Quest 3, oferecendo a melhor experiência em VR do mercado.',
    highlight: true,
    span: 'col-span-1 md:col-span-2'
  },
  {
    icon: Eye,
    title: 'Aulas Imersivas',
    description: 'Ambientes 3D educacionais que transformam o aprendizado.',
    highlight: false,
    span: 'col-span-1'
  },
  {
    icon: Gamepad2,
    title: 'Interatividade',
    description: 'Mecânicas interativas que aumentam o engajamento dos alunos.',
    highlight: false,
    span: 'col-span-1'
  },
  {
    icon: MonitorPlay,
    title: 'Plataforma WebXR',
    description: 'Tecnologia WebXR para acesso via navegador e headsets VR.',
    highlight: true,
    span: 'col-span-1 md:col-span-2'
  },
  {
    icon: Users,
    title: 'Salas Colaborativas',
    description: 'Múltiplos alunos interagindo na mesma sala de aula virtual.',
    highlight: false,
    span: 'col-span-1'
  },
  {
    icon: Layers,
    title: 'Gestão de Conteúdo',
    description: 'Painel administrativo para gerenciar aulas e materiais.',
    highlight: false,
    span: 'col-span-1'
  },
];

const stats = [
  { value: 20, suffix: '+', label: 'Experiências Criadas', icon: Box },
  { value: 95, suffix: '%', label: 'Engajamento', icon: Sparkles },
  { value: 3, suffix: 'x', label: 'Mais Retenção', icon: Zap },
  { value: 85, suffix: '%', label: 'Satisfação', icon: Users },
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
    <div ref={containerRef} className="relative">
      {/* Hero Section - Immersive VR Theme */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 via-black to-black" />

        {/* 3D Grid */}
        <Grid3D />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)' }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Scan Lines Effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 246, 0.5) 2px, rgba(139, 92, 246, 0.5) 4px)',
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
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-violet-400 transition-colors mb-12 group"
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
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/10 border border-violet-500/20 flex items-center justify-center"
                  animate={{
                    boxShadow: ['0 0 20px rgba(139, 92, 246, 0.2)', '0 0 40px rgba(139, 92, 246, 0.4)', '0 0 20px rgba(139, 92, 246, 0.2)']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Glasses className="w-8 h-8 text-violet-400" />
                </motion.div>
                <div>
                  <p className="text-violet-400 font-medium text-lg">NexusVR</p>
                  <p className="text-neutral-500 text-sm">Produto Auri</p>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                Aulas em
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">
                  Realidade Virtual
                </span>
              </h1>

              <p className="text-xl text-neutral-400 leading-relaxed mb-10 max-w-xl">
                Plataforma completa de aulas imersivas com foco em realidade virtual.
                Experiências educacionais revolucionárias utilizando Meta Quest 3 e tecnologia WebXR.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://nexusvr.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-medium rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Visitar Site Oficial</span>
                  <ExternalLink className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <motion.a
                  href="#features"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-neutral-700 text-white font-medium rounded-xl hover:border-violet-500/50 hover:bg-violet-500/5 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5" />
                  Ver Demo
                </motion.a>
              </div>
            </motion.div>

            {/* Right - VR Interface Preview */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              {/* Mock VR Interface */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-3xl blur-2xl" />

                {/* Main VR Dashboard */}
                <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                        <Glasses className="w-5 h-5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Experiência Ativa</p>
                        <p className="text-neutral-500 text-xs">Treinamento de Segurança</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30">
                      <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                      <span className="text-xs text-violet-400">LIVE</span>
                    </div>
                  </div>

                  {/* 3D Scene Preview */}
                  <div className="relative bg-gradient-to-br from-violet-900/30 to-purple-900/20 rounded-xl p-4 mb-6 overflow-hidden">
                    <div className="aspect-video flex items-center justify-center relative">
                      {/* Fake 3D Elements */}
                      <FloatingElement delay={0} className="absolute top-4 left-8">
                        <div className="w-16 h-16 rounded-lg bg-violet-500/30 border border-violet-500/40" />
                      </FloatingElement>
                      <FloatingElement delay={1} className="absolute bottom-8 right-8">
                        <div className="w-12 h-12 rounded-full bg-purple-500/30 border border-purple-500/40" />
                      </FloatingElement>
                      <FloatingElement delay={2} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-20 h-20 rounded-xl bg-fuchsia-500/20 border border-fuchsia-500/30 flex items-center justify-center">
                          <Box className="w-8 h-8 text-fuchsia-400" />
                        </div>
                      </FloatingElement>

                      {/* Play Button Overlay */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-16 h-16 rounded-full bg-violet-500/80 flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {[
                      { label: 'Usuários', value: '24', icon: Users },
                      { label: 'Tempo', value: '12:34', icon: Zap },
                      { label: 'FPS', value: '60', icon: Cpu },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-neutral-800/50 rounded-lg p-3 text-center">
                        <stat.icon className="w-4 h-4 text-violet-400 mx-auto mb-1" />
                        <p className="text-white font-semibold">{stat.value}</p>
                        <p className="text-neutral-500 text-xs">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Device Compatibility */}
                  <div className="flex items-center justify-between p-3 bg-violet-500/10 border border-violet-500/20 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-violet-400" />
                      <span className="text-sm text-neutral-300">WebXR Compatível</span>
                    </div>
                    <div className="flex gap-1">
                      {['🖥️', '📱', '🥽'].map((emoji, i) => (
                        <span key={i} className="text-sm">{emoji}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Card - Performance */}
                <motion.div
                  className="absolute -left-8 top-1/4 bg-neutral-900/90 backdrop-blur border border-neutral-800 rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Performance</p>
                      <p className="text-green-400 text-xs">60 FPS estável</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card - Zero Install */}
                <motion.div
                  className="absolute -right-4 bottom-1/4 bg-neutral-900/90 backdrop-blur border border-violet-500/30 rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-400" />
                    <p className="text-white text-sm">Zero Install</p>
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
              className="w-1.5 h-1.5 rounded-full bg-violet-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black" />

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
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm group-hover:border-violet-500/30 transition-colors">
                  <stat.icon className="w-8 h-8 text-violet-400 mb-4" />
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
            <span className="inline-block px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm mb-6">
              Recursos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O futuro da educação
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Aulas imersivas com tecnologia Meta Quest 3 e WebXR
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
                    ? 'border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-transparent hover:border-violet-500/50'
                    : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-700'
                }`}>
                  <motion.div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      feature.highlight
                        ? 'bg-violet-500/20'
                        : 'bg-neutral-800/50 group-hover:bg-violet-500/20'
                    } transition-colors`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className={`w-7 h-7 ${
                      feature.highlight
                        ? 'text-violet-400'
                        : 'text-neutral-400 group-hover:text-violet-400'
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

      {/* Use Cases Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/20 via-black to-violet-950/20" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm mb-6">
                Casos de Uso
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Aplicações
                <br />
                <span className="text-violet-400">ilimitadas</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-10">
                De treinamentos de segurança a tours virtuais,
                o NexusVR se adapta às suas necessidades.
              </p>

              <div className="grid gap-4">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-violet-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0" />
                    <span className="text-neutral-300">{useCase}</span>
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
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
              <div className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur">
                <div className="flex items-center gap-3 mb-8">
                  <Cpu className="w-6 h-6 text-violet-400" />
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
                      className="group p-4 rounded-xl bg-neutral-800/50 border border-neutral-700 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all"
                    >
                      <p className="text-white font-medium">{tech.name}</p>
                      <p className="text-neutral-500 text-sm">{tech.category}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-transparent border border-violet-500/20">
                  <div className="flex items-center gap-3">
                    <Headphones className="w-5 h-5 text-violet-400" />
                    <div>
                      <p className="text-white font-medium">Otimizado para Meta Quest 3</p>
                      <p className="text-neutral-500 text-sm">A melhor experiência em realidade virtual</p>
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
        <div className="absolute inset-0 bg-gradient-to-t from-violet-950/30 via-black to-black" />

        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
            <motion.div
              className="absolute inset-0 rounded-full bg-violet-500/10 blur-3xl"
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 mb-8"
              animate={{
                boxShadow: ['0 0 20px rgba(139, 92, 246, 0)', '0 0 40px rgba(139, 92, 246, 0.3)', '0 0 20px rgba(139, 92, 246, 0)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Glasses className="w-4 h-4" />
              <span>Pronto para WebXR</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Entre no futuro da
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                educação imersiva
              </span>
            </h2>

            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
              Explore o NexusVR e descubra como a realidade virtual
              pode transformar a forma como seus alunos aprendem.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://nexusvr.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold text-lg rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Explorar NexusVR</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <Link
                href="/#contato"
                className="inline-flex items-center gap-3 px-10 py-5 border border-neutral-700 text-white font-semibold text-lg rounded-xl hover:border-violet-500/50 hover:bg-violet-500/5 transition-all"
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
