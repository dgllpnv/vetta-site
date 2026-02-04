'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import {
  ArrowLeft,
  Hotel,
  Utensils,
  Bed,
  BarChart3,
  Package,
  Users,
  Receipt,
  Play,
  ExternalLink,
  Zap,
  CheckCircle2,
  CreditCard,
  Clock,
  TrendingUp,
  Shield,
  Calendar,
  DollarSign
} from 'lucide-react';

// Animated counter component
function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
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

  return <span ref={ref}>{prefix}{count.toLocaleString('pt-BR')}{suffix}</span>;
}

const features = [
  {
    icon: Utensils,
    title: 'PDV Restaurante',
    description: 'Sistema de vendas completo com gestão de mesas, comandas e pedidos em tempo real.',
    highlight: true,
    span: 'col-span-1 md:col-span-2'
  },
  {
    icon: Bed,
    title: 'PMS Hoteleiro',
    description: 'Gestão de reservas, check-in/out automatizado e governança.',
    highlight: false,
    span: 'col-span-1'
  },
  {
    icon: BarChart3,
    title: 'DRE Automático',
    description: 'Demonstração de resultado em tempo real, sem planilhas.',
    highlight: false,
    span: 'col-span-1'
  },
  {
    icon: Package,
    title: 'Controle de Estoque',
    description: 'Gestão de insumos com alertas de mínimo e inventário automatizado.',
    highlight: true,
    span: 'col-span-1 md:col-span-2'
  },
  {
    icon: Users,
    title: 'Gestão de Equipe',
    description: 'Controle de acesso por função, turnos e comissões.',
    highlight: false,
    span: 'col-span-1'
  },
  {
    icon: Receipt,
    title: 'Financeiro Integrado',
    description: 'Contas, fluxo de caixa, conciliação bancária e relatórios.',
    highlight: false,
    span: 'col-span-1'
  },
];

const stats = [
  { value: 50000, suffix: '+', label: 'Transações/mês', icon: CreditCard },
  { value: 2, suffix: 'M+', prefix: 'R$ ', label: 'Processado', icon: DollarSign },
  { value: 99.9, suffix: '%', label: 'Uptime', icon: Shield },
  { value: 24, suffix: '/7', label: 'Disponibilidade', icon: Clock },
];

const stack = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Supabase', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'TanStack Query', category: 'State' },
  { name: 'Stripe', category: 'Payments' },
];

const modules = [
  'PDV com gestão de mesas',
  'Reservas online integradas',
  'Controle de ocupação em tempo real',
  'Relatórios financeiros automatizados',
  'Gestão de fornecedores',
  'Integração com iFood e Rappi',
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
      {/* Hero Section - Hospitality Theme */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-black to-black" />

        {/* Warm Glow Effects */}
        <motion.div
          className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.2, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D97706 0%, transparent 70%)' }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Subtle Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(#F59E0B 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
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
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-amber-400 transition-colors mb-12 group"
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
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 border border-amber-500/20 flex items-center justify-center"
                  animate={{
                    boxShadow: ['0 0 20px rgba(245, 158, 11, 0.2)', '0 0 40px rgba(245, 158, 11, 0.4)', '0 0 20px rgba(245, 158, 11, 0.2)']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Hotel className="w-8 h-8 text-amber-400" />
                </motion.div>
                <div>
                  <p className="text-amber-400 font-medium text-lg">Lumina</p>
                  <p className="text-neutral-500 text-sm">Produto Auri</p>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                Gestão para
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">
                  Hospitalidade
                </span>
              </h1>

              <p className="text-xl text-neutral-400 leading-relaxed mb-10 max-w-xl">
                Sistema completo para hotéis, pousadas e restaurantes. PDV integrado,
                gestão financeira, controle de estoque e DRE automático em uma única plataforma.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://lumina-host-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(245, 158, 11, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5 relative z-10 fill-current" />
                  <span className="relative z-10">Ver Demo ao Vivo</span>
                  <ExternalLink className="w-4 h-4 relative z-10 opacity-70" />
                  <span className="absolute top-1 right-2 text-[10px] px-2 py-0.5 rounded-full bg-black/20 text-white/80 font-medium">
                    Ambiente de Teste
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <motion.a
                  href="https://lumina.aurisolutions.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-amber-500/40 text-white font-medium rounded-xl hover:border-amber-500/70 hover:bg-amber-500/5 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5" />
                  Ver Módulos
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
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl" />

                {/* Main Dashboard */}
                <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                        <Hotel className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Dashboard Lumina</p>
                        <p className="text-neutral-500 text-xs">Hotel & Restaurante</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-neutral-500">Online</span>
                    </div>
                  </div>

                  {/* Quick Stats Row */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: 'Ocupação', value: '87%', trend: '+5%', icon: Bed },
                      { label: 'Vendas Hoje', value: 'R$ 12.4k', trend: '+12%', icon: TrendingUp },
                      { label: 'Mesas Ativas', value: '18/24', trend: '', icon: Utensils },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-neutral-800/50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <stat.icon className="w-4 h-4 text-amber-400" />
                          <span className="text-neutral-500 text-xs">{stat.label}</span>
                        </div>
                        <p className="text-white font-semibold text-lg">{stat.value}</p>
                        {stat.trend && <p className="text-green-400 text-xs">{stat.trend}</p>}
                      </div>
                    ))}
                  </div>

                  {/* Revenue Chart */}
                  <div className="bg-neutral-800/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-neutral-400">Receita Semanal</span>
                      <span className="text-sm text-amber-400">+23% vs semana anterior</span>
                    </div>
                    <div className="flex items-end gap-2 h-20">
                      {[35, 52, 45, 68, 58, 72, 85].map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t"
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.5, delay: i * 0.05 }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day) => (
                        <span key={day} className="text-xs text-neutral-600">{day}</span>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { icon: CreditCard, label: 'PDV' },
                      { icon: Calendar, label: 'Reservas' },
                      { icon: Package, label: 'Estoque' },
                      { icon: BarChart3, label: 'DRE' },
                    ].map((action) => (
                      <div
                        key={action.label}
                        className="bg-neutral-800/50 hover:bg-amber-500/10 border border-transparent hover:border-amber-500/20 rounded-lg p-3 text-center cursor-pointer transition-all"
                      >
                        <action.icon className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                        <p className="text-xs text-neutral-400">{action.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Card - Reserva */}
                <motion.div
                  className="absolute -left-8 top-1/4 bg-neutral-900/90 backdrop-blur border border-neutral-800 rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Nova Reserva</p>
                      <p className="text-neutral-500 text-xs">Suite Master • 3 noites</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card - Transaction */}
                <motion.div
                  className="absolute -right-4 bottom-1/4 bg-neutral-900/90 backdrop-blur border border-green-500/30 rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-white text-sm">Venda Aprovada</p>
                      <p className="text-green-400 text-xs font-medium">R$ 847,00</p>
                    </div>
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
              className="w-1.5 h-1.5 rounded-full bg-amber-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/10 to-black" />

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
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm group-hover:border-amber-500/30 transition-colors">
                  <stat.icon className="w-8 h-8 text-amber-400 mb-4" />
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.prefix && <span>{stat.prefix}</span>}
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
            <span className="inline-block px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm mb-6">
              Módulos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Do check-in ao DRE
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Uma plataforma completa para toda a operação de hospitalidade
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
                    ? 'border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent hover:border-amber-500/50'
                    : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-700'
                }`}>
                  <motion.div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      feature.highlight
                        ? 'bg-amber-500/20'
                        : 'bg-neutral-800/50 group-hover:bg-amber-500/20'
                    } transition-colors`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className={`w-7 h-7 ${
                      feature.highlight
                        ? 'text-amber-400'
                        : 'text-neutral-400 group-hover:text-amber-400'
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

      {/* Modules Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/20 via-black to-amber-950/20" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm mb-6">
                Funcionalidades
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tudo integrado
                <br />
                <span className="text-amber-400">em um só lugar</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-10">
                Simplifique sua operação com módulos que conversam entre si
                e automatizam tarefas repetitivas.
              </p>

              <div className="grid gap-4">
                {modules.map((module, index) => (
                  <motion.div
                    key={module}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-amber-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-neutral-300">{module}</span>
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
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-3xl" />
              <div className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur">
                <div className="flex items-center gap-3 mb-8">
                  <Zap className="w-6 h-6 text-amber-400" />
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
                      className="group p-4 rounded-xl bg-neutral-800/50 border border-neutral-700 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all"
                    >
                      <p className="text-white font-medium">{tech.name}</p>
                      <p className="text-neutral-500 text-sm">{tech.category}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-amber-400" />
                    <div>
                      <p className="text-white font-medium">Dados Seguros</p>
                      <p className="text-neutral-500 text-sm">Backup automático e criptografia end-to-end</p>
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
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/30 via-black to-black" />

        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
            <motion.div
              className="absolute inset-0 rounded-full bg-amber-500/10 blur-3xl"
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 mb-8"
              animate={{
                boxShadow: ['0 0 20px rgba(245, 158, 11, 0)', '0 0 40px rgba(245, 158, 11, 0.3)', '0 0 20px rgba(245, 158, 11, 0)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Hotel className="w-4 h-4" />
              <span>Pronto para operar</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Simplifique sua
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                operação hoje
              </span>
            </h2>

            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
              Explore o Lumina e descubra como automatizar a gestão
              do seu hotel ou restaurante em uma única plataforma.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://lumina-host-ten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-lg rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(245, 158, 11, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5 relative z-10 fill-current" />
                <span className="relative z-10">Ver Demo ao Vivo</span>
                <ExternalLink className="w-4 h-4 relative z-10 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <Link
                href="/#contato"
                className="inline-flex items-center gap-3 px-10 py-5 border border-neutral-700 text-white font-semibold text-lg rounded-xl hover:border-amber-500/50 hover:bg-amber-500/5 transition-all"
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
