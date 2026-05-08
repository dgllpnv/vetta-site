'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, MouseEvent, type CSSProperties } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  GraduationCap,
  Glasses,
  Hotel,
  Sparkles,
  Play,
  ExternalLink,
  Target,
  Heart,
  Brain,
} from 'lucide-react';

type ProductVibe = 'acolhedor' | 'cyber' | 'elegante' | 'tactical';

type Product = {
  id: string;
  name: string;
  tagline: string;
  idealFor: string;
  description: string;
  icon: typeof GraduationCap;
  color: string;
  colorName: string;
  gradient: string;
  features: string[];
  url: string;
  demoUrl: string;
  vibe: ProductVibe;
};

const products: Product[] = [
  {
    id: 'acolheduc',
    name: 'Acolheduc',
    tagline: 'Gestão Escolar Inteligente',
    idealFor: 'Redes e escolas de 50 a 500 alunos',
    description:
      'Plataforma completa para redes de ensino. Dashboard de acompanhamento RTI, portfólio digital de evidências e geração de conteúdo pedagógico assistida por IA.',
    icon: Brain,
    color: '#A78BFA',
    colorName: 'lavender',
    gradient: 'from-violet-400 to-purple-500',
    features: ['Multi-tenant', 'Dashboard RTI', 'IA Generativa', 'LGPD Compliant'],
    url: '/acolheduc',
    demoUrl: 'https://acolheduc-app.vercel.app/',
    vibe: 'acolhedor',
  },
  {
    id: 'nexusvr',
    name: 'NexusVR',
    tagline: 'Aulas em Realidade Virtual',
    idealFor: 'Instituições com infraestrutura VR e inovação pedagógica',
    description:
      'Plataforma de aulas imersivas com Meta Quest 3 e WebXR. Experiências educacionais completas que transformam conteúdo tradicional em vivência imersiva.',
    icon: Glasses,
    color: '#EC4899',
    colorName: 'magenta',
    gradient: 'from-pink-500 via-fuchsia-500 to-cyan-400',
    features: ['Meta Quest 3', 'WebXR', 'Aulas Imersivas', 'Analytics'],
    url: '/nexusvr',
    demoUrl: 'https://nexus-vr-edu-final.vercel.app/',
    vibe: 'cyber',
  },
  {
    id: 'lumina',
    name: 'Lumina',
    tagline: 'Onde a excelência encontra a gestão',
    idealFor: 'Hotéis, pousadas boutique e restaurantes fine dining',
    description:
      'Plataforma elegante para gestão de restaurantes e pousadas. PDV moderno, controle financeiro e experiência do cliente refinada em uma única plataforma.',
    icon: Hotel,
    color: '#818CF8',
    colorName: 'indigo',
    gradient: 'from-indigo-400 via-violet-400 to-amber-300',
    features: ['PDV + PMS', 'DRE Automático', 'Tempo Real', 'Boutique'],
    url: '/lumina',
    demoUrl: 'https://lumina-host-ten.vercel.app/',
    vibe: 'elegante',
  },
  {
    id: 'cbt',
    name: 'Coldre System',
    tagline: 'Excelência em tiro esportivo',
    idealFor: 'Clubes de tiro com controle de habitualidade CR/CAC',
    description:
      'Sistema operacional para clubes esportivos: cadastro de associados, controle de presença e disparos por baia, financeiro, anuidades, eventos, habitualidade CR/CAC e auditoria nativa em todas as operações.',
    icon: Target,
    color: '#FB923C',
    colorName: 'orange',
    gradient: 'from-orange-500 to-amber-500',
    features: ['Audit-first', 'Multi-portal', 'Habitualidade CR/CAC', 'Transações ACID'],
    url: '/cbt',
    demoUrl: '',
    vibe: 'tactical',
  },
];

// ============================================
// Vibe-specific decorations
// ============================================

function VibeBackdrop({ vibe, color, isHovered }: { vibe: ProductVibe; color: string; isHovered: boolean }) {
  if (vibe === 'acolhedor') {
    // Sparkle field — pontos lavanda flutuando
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-70"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, ${color}40 1px, transparent 1px), radial-gradient(circle at 70% 60%, ${color}30 1px, transparent 1px), radial-gradient(circle at 40% 80%, ${color}40 1px, transparent 1px)`,
            backgroundSize: '70px 70px, 50px 50px, 90px 90px',
          }}
        />
        {isHovered &&
          [...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                top: `${20 + i * 18}%`,
                left: `${15 + i * 22}%`,
                opacity: 0,
                scale: 0,
              }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: [0, 180] }}
              transition={{ duration: 2.4, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="w-3 h-3" style={{ color }} />
            </motion.div>
          ))}
      </div>
    );
  }

  if (vibe === 'cyber') {
    // Grid em perspectiva 3D + scanlines
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
        <div
          className="absolute inset-x-0 bottom-0 h-2/3 opacity-25 transition-opacity duration-700 group-hover:opacity-45"
          style={{
            backgroundImage: `linear-gradient(${color}55 1px, transparent 1px), linear-gradient(90deg, ${color}55 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'perspective(400px) rotateX(60deg) translateY(40%)',
            transformOrigin: 'center bottom',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${color} 2px, ${color} 3px)`,
          }}
        />
      </div>
    );
  }

  if (vibe === 'elegante') {
    // Ornamento elegante nos cantos + soft amber wash no hover
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
        <svg
          className="absolute top-3 right-3 w-12 h-12 opacity-25 transition-opacity duration-700 group-hover:opacity-60"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M2 2 Q24 2 24 24 Q24 46 46 46"
            stroke={color}
            strokeWidth="0.6"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="24" cy="24" r="1.5" fill={color} />
        </svg>
        <svg
          className="absolute bottom-3 left-3 w-12 h-12 opacity-15 transition-opacity duration-700 group-hover:opacity-40 rotate-180"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M2 2 Q24 2 24 24 Q24 46 46 46"
            stroke="#D97706"
            strokeWidth="0.6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  // tactical (Coldre)
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
      {/* Faixa horizontal tactical no topo */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity"
        style={{
          backgroundImage: `linear-gradient(${color}80 1px, transparent 1px), linear-gradient(90deg, ${color}80 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* HUD corners */}
      <div className="absolute top-3 left-3 w-3 h-3 border-l-2 border-t-2 border-orange-500/40 transition-opacity duration-500 group-hover:border-orange-500/80" />
      <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-orange-500/40 transition-opacity duration-500 group-hover:border-orange-500/80" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-orange-500/40 transition-opacity duration-500 group-hover:border-orange-500/80" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2 border-orange-500/40 transition-opacity duration-500 group-hover:border-orange-500/80" />
    </div>
  );
}

// Estilo do nome do produto por vibe
function getNameStyle(vibe: ProductVibe): { className: string; style?: CSSProperties } {
  switch (vibe) {
    case 'acolhedor':
      return { className: 'text-3xl font-bold text-white mb-4' };
    case 'cyber':
      return {
        className: 'text-3xl font-black text-white mb-4 tracking-tight',
        style: { fontFamily: '"Courier New", monospace' },
      };
    case 'elegante':
      return {
        className: 'text-3xl font-medium italic text-white mb-4',
        style: { fontFamily: 'Georgia, "Times New Roman", serif' },
      };
    case 'tactical':
      return {
        className: 'text-3xl font-bold text-white mb-4 uppercase tracking-wide',
        style: { fontFamily: 'Georgia, serif' },
      };
  }
}

// Eyebrow / tagline accent
function getTaglineAccent(vibe: ProductVibe): { prefix?: string; suffix?: string; style?: CSSProperties } {
  switch (vibe) {
    case 'acolhedor':
      return { prefix: '✦' };
    case 'cyber':
      return { prefix: '<', suffix: ' />', style: { fontFamily: '"Courier New", monospace' } };
    case 'elegante':
      return { prefix: '—', style: { fontFamily: 'Georgia, serif', fontStyle: 'italic' } };
    case 'tactical':
      return {};
  }
}

// ============================================
// Card
// ============================================

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [demoUnavailable, setDemoUnavailable] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = product.icon;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

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

  const nameStyle = getNameStyle(product.vibe);
  const taglineAccent = getTaglineAccent(product.vibe);

  // Container styling per vibe
  const cardWrapperClass: Record<ProductVibe, string> = {
    acolhedor: 'rounded-3xl border-violet-400/15 bg-neutral-900/80 group-hover:border-violet-400/40',
    cyber: 'rounded-2xl border-pink-500/15 bg-neutral-900/80 group-hover:border-pink-500/40',
    elegante: 'rounded-3xl border-indigo-400/15 bg-neutral-900/80 group-hover:border-indigo-400/40',
    tactical: 'rounded-xl border-orange-500/15 bg-[#0F0A07]/90 group-hover:border-orange-500/40',
  };

  // Icon container per vibe
  const iconBoxClass: Record<ProductVibe, string> = {
    acolhedor: 'rounded-2xl',
    cyber: 'rounded-xl',
    elegante: 'rounded-2xl',
    tactical: 'rounded-lg',
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformPerspective: 1200,
      }}
      className="group relative"
    >
      {/* Animated glow border */}
      <motion.div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${product.color}40, transparent 50%, ${product.color}40)`,
        }}
        animate={
          isHovered
            ? {
                background: [
                  `linear-gradient(0deg, ${product.color}40, transparent 50%, ${product.color}40)`,
                  `linear-gradient(120deg, ${product.color}40, transparent 50%, ${product.color}40)`,
                  `linear-gradient(240deg, ${product.color}40, transparent 50%, ${product.color}40)`,
                  `linear-gradient(360deg, ${product.color}40, transparent 50%, ${product.color}40)`,
                ],
              }
            : {}
        }
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      {/* Outer glow on hover */}
      <motion.div
        className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at 50% 50%, ${product.color}18, transparent 40%)`,
        }}
      />

      <div
        className={`relative h-full p-8 border backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:bg-neutral-900/95 ${cardWrapperClass[product.vibe]}`}
      >
        {/* Vibe-specific decorations */}
        <VibeBackdrop vibe={product.vibe} color={product.color} isHovered={isHovered} />

        {/* Top tactical accent bar (only Coldre — visual signature) */}
        {product.vibe === 'tactical' && (
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-orange-500 to-orange-400"
            initial={{ width: '20%' }}
            animate={isHovered ? { width: '100%' } : { width: '20%' }}
            transition={{ duration: 0.5 }}
          />
        )}

        {/* Header */}
        <div className="relative flex items-start justify-between mb-7">
          <motion.div
            className={`w-16 h-16 flex items-center justify-center transition-all duration-500 ${iconBoxClass[product.vibe]}`}
            style={{
              backgroundColor: product.vibe === 'elegante' ? 'transparent' : `${product.color}15`,
              backgroundImage:
                product.vibe === 'elegante'
                  ? 'linear-gradient(135deg, #6366F1, #4C1D95)'
                  : product.vibe === 'cyber'
                    ? `linear-gradient(135deg, ${product.color}, #A855F7)`
                    : undefined,
              boxShadow: isHovered ? `0 0 40px ${product.color}40` : 'none',
              border: product.vibe === 'tactical' ? `1px solid ${product.color}60` : 'none',
            }}
            animate={isHovered ? { scale: 1.06 } : { scale: 1 }}
          >
            {product.vibe === 'elegante' ? (
              <span
                className="text-white text-2xl font-medium italic"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                L
              </span>
            ) : product.vibe === 'cyber' ? (
              <span
                className="text-white text-2xl font-black"
                style={{ fontFamily: '"Courier New", monospace' }}
              >
                N
              </span>
            ) : (
              <Icon
                className="w-8 h-8"
                style={{ color: product.vibe === 'tactical' ? product.color : product.color }}
                strokeWidth={product.vibe === 'tactical' ? 2.5 : 2.2}
              />
            )}
          </motion.div>

          {/* Status badge */}
          <motion.div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur"
            style={{
              borderColor: `${product.color}30`,
              backgroundColor: `${product.color}10`,
            }}
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: product.color }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span
              className="text-xs font-medium"
              style={{
                color: product.color,
                fontFamily:
                  product.vibe === 'cyber'
                    ? '"Courier New", monospace'
                    : product.vibe === 'tactical'
                      ? 'Georgia, serif'
                      : undefined,
                letterSpacing: product.vibe === 'tactical' ? '0.15em' : undefined,
                textTransform: product.vibe === 'tactical' ? 'uppercase' : undefined,
              }}
            >
              {product.vibe === 'tactical' ? 'Live' : 'Ativo'}
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Tagline */}
          <p
            className="text-xs uppercase tracking-widest mb-3 font-medium flex items-center gap-1.5"
            style={{ color: product.color, ...(taglineAccent.style ?? {}) }}
          >
            {taglineAccent.prefix && (
              <span className="opacity-70" aria-hidden="true">
                {taglineAccent.prefix}
              </span>
            )}
            {product.tagline}
            {taglineAccent.suffix && (
              <span className="opacity-70" aria-hidden="true">
                {taglineAccent.suffix}
              </span>
            )}
          </p>

          {/* Name */}
          <h3 className={nameStyle.className} style={nameStyle.style}>
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-neutral-400 leading-relaxed mb-5">{product.description}</p>

          {/* ICP */}
          <p className="text-xs mb-7 flex items-baseline gap-2">
            <span
              className="uppercase tracking-widest text-[10px] font-medium"
              style={{ color: `${product.color}AA` }}
            >
              Ideal para
            </span>
            <span className="text-neutral-400">{product.idealFor}</span>
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-7">
            {product.features.map((feature, i) => (
              <motion.span
                key={feature}
                className="text-xs px-3 py-1.5 rounded-full border text-neutral-400 bg-black/40"
                style={{
                  borderColor: `${product.color}25`,
                  fontFamily:
                    product.vibe === 'cyber' ? '"Courier New", monospace' : undefined,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{
                  borderColor: `${product.color}60`,
                  color: product.color,
                }}
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 relative">
          {/* Primary */}
          <Link href={product.url}>
            <motion.div
              className="w-full py-4 flex items-center justify-center gap-3 text-base font-semibold transition-all duration-300 overflow-hidden relative"
              style={{
                backgroundColor: product.color,
                color: product.vibe === 'tactical' ? 'black' : 'black',
                borderRadius:
                  product.vibe === 'tactical' ? '8px' : product.vibe === 'cyber' ? '10px' : '14px',
                fontFamily:
                  product.vibe === 'tactical'
                    ? 'Georgia, serif'
                    : product.vibe === 'cyber'
                      ? '"Courier New", monospace'
                      : undefined,
                letterSpacing: product.vibe === 'tactical' ? '0.1em' : undefined,
                textTransform: product.vibe === 'tactical' ? 'uppercase' : undefined,
              }}
              whileHover={{ scale: 1.02, boxShadow: `0 0 30px ${product.color}60` }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">
                {product.vibe === 'cyber'
                  ? 'Acessar Portal'
                  : product.vibe === 'elegante'
                    ? `Explorar ${product.name}`
                    : product.vibe === 'tactical'
                      ? `Conhecer ${product.name}`
                      : `Conhecer ${product.name}`}
              </span>
              <motion.div
                animate={isHovered ? { x: 4, y: -4 } : { x: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="w-5 h-5 relative z-10" />
              </motion.div>
            </motion.div>
          </Link>

          {/* Secondary text link — link real para produtos com demo, ou aviso inline para os sem demo público (mantém o alinhamento vertical entre os 4 cards) */}
          {product.demoUrl ? (
            <a
              href={product.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/demo flex items-center justify-center gap-2 py-1 text-xs text-neutral-500 hover:text-neutral-200 transition-colors"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Ver demo ao vivo</span>
              <ExternalLink className="w-3 h-3 opacity-60 group-hover/demo:translate-x-0.5 transition-transform" />
            </a>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setDemoUnavailable(true);
                window.setTimeout(() => setDemoUnavailable(false), 2800);
              }}
              aria-live="polite"
              className="group/demo flex items-center justify-center gap-2 py-1 text-xs text-neutral-500 hover:text-neutral-200 transition-colors cursor-pointer"
            >
              <Play className="w-3 h-3 fill-current" />
              <span className="transition-colors">
                {demoUnavailable ? 'Demo indisponível no momento' : 'Ver demo ao vivo'}
              </span>
              <ExternalLink className="w-3 h-3 opacity-60 group-hover/demo:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>

        {/* Hover signature: vibe-specific extra detail */}
        {product.vibe === 'acolhedor' && isHovered && (
          <motion.div
            className="absolute -top-2 -right-2"
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-9 h-9 rounded-full bg-violet-400/20 border border-violet-400/40 flex items-center justify-center backdrop-blur">
              <Heart className="w-4 h-4 fill-violet-400 text-violet-400" />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// ============================================
// Section
// ============================================

export function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="produtos" ref={sectionRef} className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-transparent pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container relative">
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
            Quatro produtos próprios, desenvolvidos com excelência técnica,
            prontos para escalar seu negócio.
          </p>
        </motion.div>

        {/* Products Grid — 2x2 to comfortably fit 4 produtos */}
        <div className="grid md:grid-cols-2 gap-8">
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
