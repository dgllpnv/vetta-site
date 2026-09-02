'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
  className?: string;
}

export function GradientButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'default',
  className = '',
}: GradientButtonProps) {
  const sizeClasses = size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm';

  const content = (
    <motion.span
      className={`
        relative z-10 inline-flex items-center justify-center gap-2 font-medium
        ${sizeClasses}
        ${variant === 'primary' ? 'text-white' : 'text-fg-primary'}
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  const wrapperClasses = `
    group relative inline-flex items-center justify-center overflow-hidden rounded-xl
    ${variant === 'primary' ? 'bg-accent' : 'bg-bg-1'}
  `;

  // Animated border gradient
  const borderGradient = (
    <>
      {/* Rotating gradient border */}
      <span
        className="absolute inset-0 overflow-hidden rounded-xl"
        style={{
          padding: '1px',
          background: 'linear-gradient(var(--gradient-angle, 0deg), #6366f1, #8b5cf6, #3b82f6, #6366f1)',
          animation: 'rotate-gradient 4s linear infinite',
        }}
      >
        <span className={`block h-full w-full rounded-xl ${variant === 'primary' ? 'bg-accent' : 'bg-bg-1'}`} />
      </span>

      {/* Glow effect on hover */}
      <span
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: '0 0 40px -10px rgba(99, 102, 241, 0.5)',
        }}
      />
    </>
  );

  if (href) {
    return (
      <a href={href} className={wrapperClasses}>
        {borderGradient}
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={wrapperClasses}>
      {borderGradient}
      {content}
    </button>
  );
}
