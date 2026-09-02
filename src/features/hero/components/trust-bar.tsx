'use client';

import { motion } from 'framer-motion';

const stack = [
  'Next.js',
  'TypeScript',
  'PostgreSQL',
  'Prisma',
  'Vercel',
  'LGPD-compliant',
];

export function TrustBar() {
  return (
    <section
      aria-label="Stack tecnológica"
      className="relative border-y border-neutral-900/80 bg-black/30 backdrop-blur-sm"
    >
      <div className="container py-8 md:py-10">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-8">
          <p className="text-xs uppercase tracking-widest text-neutral-600">
            Construído com
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-8">
            {stack.map((tech, i) => (
              <motion.li
                key={tech}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-sm font-medium text-neutral-400 transition-colors hover:text-white"
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
