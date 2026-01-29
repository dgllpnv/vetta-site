'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50',
          // Variants
          {
            'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow-sm':
              variant === 'primary',
            'border border-border bg-surface hover:border-primary/50 hover:bg-surface-elevated':
              variant === 'secondary',
            'hover:bg-surface': variant === 'ghost',
            'text-primary underline-offset-4 hover:underline': variant === 'link',
          },
          // Sizes
          {
            'rounded-lg px-4 py-2 text-sm': size === 'sm',
            'rounded-xl px-6 py-3 text-sm': size === 'md',
            'rounded-xl px-8 py-4 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
