'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Code2, Shield, Rocket, HeadphonesIcon, ArrowRight } from 'lucide-react';

const benefits = [
  { icon: Code2, title: 'Arquitetura escalável', desc: 'Soluções que crescem com seu negócio' },
  { icon: Shield, title: 'Padrão enterprise', desc: 'Mesma qualidade dos nossos produtos' },
  { icon: Rocket, title: 'CI/CD desde o dia 1', desc: 'Pipeline automatizado de deploy' },
  { icon: HeadphonesIcon, title: 'Suporte pós-entrega', desc: 'Acompanhamento após lançamento' },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'Análise profunda do seu negócio e requisitos técnicos' },
  { step: '02', title: 'Arquitetura', desc: 'Projeto técnico detalhado com stack e infraestrutura' },
  { step: '03', title: 'Desenvolvimento', desc: 'Sprints semanais com entregas incrementais' },
  { step: '04', title: 'Entrega', desc: 'Deploy, documentação e transferência de conhecimento' },
];

export function CustomDevelopment() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="sob-medida" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs uppercase tracking-widest text-neutral-500 mb-6">
              Desenvolvimento Sob Medida
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
              Sua visão,
              <br />
              <span className="text-neutral-500">nossa expertise</span>
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
              Se nenhum dos nossos produtos atende sua necessidade,
              desenvolvemos soluções personalizadas com o mesmo rigor técnico
              e compromisso com excelência.
            </p>

            {/* Benefits grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {benefits.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="group flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center group-hover:bg-neutral-800 transition-colors">
                    <item.icon className="w-5 h-5 text-neutral-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-sm text-neutral-600 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="#contato"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
            >
              Iniciar conversa
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right side - Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl border border-neutral-800/50 bg-neutral-900/30 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-8">
                Nosso Processo
              </p>

              <div className="space-y-0">
                {process.map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="group relative flex gap-6 pb-8 last:pb-0"
                  >
                    {/* Timeline line */}
                    {i < process.length - 1 && (
                      <div className="absolute left-[22px] top-12 w-px h-[calc(100%-32px)] bg-gradient-to-b from-neutral-700 to-transparent" />
                    )}

                    {/* Step number */}
                    <div className="relative z-10 w-11 h-11 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center text-sm font-mono text-neutral-400 group-hover:border-neutral-500 group-hover:text-white transition-all">
                      {item.step}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h4 className="text-lg font-medium text-white group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-neutral-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
