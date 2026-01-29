'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, MouseEvent } from 'react';
import Link from 'next/link';
import { ArrowUpRight, GraduationCap, Glasses, Hotel, Sparkles } from 'lucide-react';

const products = [
  {
    id: 'acolheduc',
    name: 'Acolheduc',
    tagline: 'Gestão Escolar Inteligente',
    description: 'Plataforma completa para redes de ensino. Dashboard de acompanhamento RTI, portfólio digital de evidências e geração de conteúdo pedagógico assistida por IA.',
    icon: GraduationCap,
    color: '#10B981',
    colorName: 'emerald',
    gradient: 'from-emerald-500 to-teal-500',
    features: ['Multi-tenant', 'Dashboard RTI', 'IA Generativa', 'LGPD Compliant'],
    stats: [
      { value: '12+', label: 'Escolas' },
      { value: '2k+', label: 'Educadores' },
    ],
    url: '/acolheduc',
  },
  {
    id: 'nexusvr',
    name: 'NexusVR',
    tagline: 'Aulas em Realidade Virtual',
    description: 'Plataforma de aulas imersivas com foco em realidade virtual. Experiências educacionais completas utilizando Meta Quest 3 e tecnologia WebXR.',
    icon: Glasses,
    color: '#8B5CF6',
    colorName: 'violet',
    gradient: 'from-violet-500 to-purple-500',
    features: ['Meta Quest 3', 'WebXR', 'Aulas Imersivas', 'Analytics'],
    stats: [
      { value: '20+', label: 'Experiências' },
      { value: '95%', label: 'Engajamento' },
    ],
    url: '/nexusvr',
  },
  {
    id: 'lumina',
    name: 'Lumina',
    tagline: 'Gestão para Hospitalidade',
    description: 'Sistema integrado para hotéis e restaurantes. PDV, gestão de reservas, controle de estoque e demonstrativos financeiros automatizados.',
    icon: Hotel,
    color: '#F59E0B',
    colorName: 'amber',
    gradient: 'from-amber-500 to-orange-500',
    features: ['PDV + PMS', 'DRE Automático', 'Tempo Real', 'Integrações'],
    stats: [
      { value: '50k+', label: 'Transações/mês' },
      { value: '99.9%', label: 'Uptime' },
    ],
    url: '/lumina',
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = product.icon;

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformPerspective: 1000,
      }}
      className="group relative"
    >
      {/* Animated Glow Border */}
      <motion.div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${product.color}40, transparent 50%, ${product.color}40)`,
        }}
        animate={isHovered ? {
          background: [
            `linear-gradient(0deg, ${product.color}40, transparent 50%, ${product.color}40)`,
            `linear-gradient(90deg, ${product.color}40, transparent 50%, ${product.color}40)`,
            `linear-gradient(180deg, ${product.color}40, transparent 50%, ${product.color}40)`,
            `linear-gradient(270deg, ${product.color}40, transparent 50%, ${product.color}40)`,
            `linear-gradient(360deg, ${product.color}40, transparent 50%, ${product.color}40)`,
          ]
        } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at 50% 50%, ${product.color}15, transparent 40%)`,
        }}
      />

      <div className="relative h-full p-8 rounded-2xl border border-neutral-800/50 bg-neutral-900/80 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-neutral-700/50 group-hover:bg-neutral-900/90">
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${product.color}08, transparent 50%)`,
          }}
        />

        {/* Animated particles on hover */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{ backgroundColor: product.color }}
                initial={{
                  x: Math.random() * 100 + '%',
                  y: '100%',
                  opacity: 0,
                }}
                animate={{
                  y: '-20%',
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>
        )}

        {/* Header */}
        <div className="relative flex items-start justify-between mb-8">
          <motion.div
            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
            style={{
              backgroundColor: `${product.color}15`,
              boxShadow: isHovered ? `0 0 40px ${product.color}30` : 'none',
            }}
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          >
            <Icon className="w-8 h-8" style={{ color: product.color }} />
          </motion.div>

          {/* Status Badge */}
          <motion.div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border"
            style={{
              borderColor: `${product.color}30`,
              backgroundColor: `${product.color}10`,
            }}
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: product.color }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs font-medium" style={{ color: product.color }}>
              Ativo
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative">
          <p
            className="text-xs uppercase tracking-widest mb-3 font-medium"
            style={{ color: product.color }}
          >
            {product.tagline}
          </p>
          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors">
            {product.name}
          </h3>
          <p className="text-neutral-400 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-8">
            {product.features.map((feature, i) => (
              <motion.span
                key={feature}
                className="text-xs px-3 py-1.5 rounded-full border text-neutral-400 bg-black/30"
                style={{ borderColor: `${product.color}20` }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  borderColor: `${product.color}50`,
                  color: product.color,
                }}
              >
                {feature}
              </motion.span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-neutral-800/50 mb-8">
            {product.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <p
                  className="text-3xl font-bold"
                  style={{ color: isHovered ? product.color : '#ffffff' }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-neutral-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link href={product.url}>
          <motion.div
            className="w-full py-4 flex items-center justify-center gap-3 rounded-xl border text-base font-medium transition-all duration-300 overflow-hidden relative"
            style={{
              borderColor: isHovered ? product.color : 'rgb(38 38 38)',
              color: isHovered ? 'black' : 'white',
              backgroundColor: isHovered ? product.color : 'transparent',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Explorar {product.name}</span>
            <motion.div
              animate={isHovered ? { x: 4, y: -4 } : { x: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="w-5 h-5 relative z-10" />
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}

export function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="produtos" ref={sectionRef} className="py-32 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-transparent pointer-events-none" />

      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-800 bg-neutral-900/50 mb-8"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.2)' }}
          >
            <Sparkles className="w-4 h-4 text-neutral-400" />
            <span className="text-sm text-neutral-400">Nossos Produtos</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Soluções que já estão
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
              transformando mercados
            </span>
          </h2>
          <p className="text-neutral-400 text-xl max-w-2xl mx-auto">
            Três produtos próprios, desenvolvidos com excelência técnica,
            prontos para escalar seu negócio.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-neutral-500 mb-6 text-lg">
            Não encontrou o que precisa?
          </p>
          <Link
            href="#sob-medida"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-neutral-800 text-white hover:border-neutral-600 hover:bg-neutral-900/50 transition-all duration-300"
          >
            <span>Desenvolvemos soluções sob medida</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
