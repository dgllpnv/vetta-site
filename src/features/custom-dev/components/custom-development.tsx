'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import {
  MessageCircle,
  Pencil,
  Hammer,
  Heart,
  ArrowRight,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

const journey = [
  {
    n: '01',
    icon: MessageCircle,
    title: 'Você nos conta',
    plain: 'Conversa de 30 minutos. Sem custo. Sem proposta de 80 páginas.',
    detail:
      'A gente entende como você trabalha hoje, onde dói, e o que já tentaram antes. Sem jargão.',
  },
  {
    n: '02',
    icon: Pencil,
    title: 'A gente desenha',
    plain: 'Em uma semana você vê um protótipo navegável.',
    detail:
      'Sem código ainda, só os caminhos do software. Você aprova, ou voltamos para a prancheta.',
  },
  {
    n: '03',
    icon: Hammer,
    title: 'Construímos junto',
    plain: 'Toda semana você vê o software crescer.',
    detail:
      'Entregas incrementais, conversas frequentes, zero surpresa no final. Você sabe o que está sendo feito.',
  },
  {
    n: '04',
    icon: Heart,
    title: 'A gente fica',
    plain: 'Software em produção precisa de carinho.',
    detail:
      'Suporte, evolução e novas funcionalidades depois do lançamento. Não somos empreiteiros, somos parceiros.',
  },
];

const concerns = [
  {
    q: '...mas não sei se a ideia é viável?',
    a: 'A primeira conversa é nossa. Você sai dela com um diagnóstico honesto, mesmo que a resposta seja "essa ideia não vai dar".',
  },
  {
    q: '...mas já tentei antes e deu errado?',
    a: 'A gente começa de onde você parou. Não jogamos código fora por orgulho, entendemos o que existe e construímos em cima.',
  },
  {
    q: '...mas acho que vai demorar muito?',
    a: 'Em quatro a seis semanas você costuma ter algo real para mostrar. Software de verdade, rodando, não slide bonito.',
  },
  {
    q: '...mas tenho orçamento apertado?',
    a: 'Trabalhamos por sprints fixos: você sabe o preço e o prazo antes de começar. Sem fatura surpresa no fim do mês.',
  },
];

export function CustomDevelopment() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [openConcern, setOpenConcern] = useState<number | null>(0);

  return (
    <section id="sob-medida" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      {/* Soft glow background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-white/[0.02] to-transparent pointer-events-none" />

      <div className="container relative">
        {/* Header, conversational + accessible */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs uppercase tracking-widest text-neutral-500 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Desenvolvimento sob medida
          </span>

          <h2 className="text-4xl md:text-6xl font-semibold text-white leading-[1.05] mb-6">
            Você tem uma ideia.
            <br />
            <span className="text-neutral-500">Nós entregamos software.</span>
          </h2>

          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
            Sem jargão técnico. Sem proposta de 80 páginas. Sem promessas que ninguém entende.
            Conversamos, desenhamos, construímos, e ficamos depois que entra no ar.
          </p>
        </motion.div>

        {/* Os 4 momentos, flow horizontal com setas conectoras */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28 relative">
          {journey.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative"
            >
              {/* Conector entre cards (apenas em lg+) */}
              {i < journey.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5 text-neutral-700 group-hover:text-neutral-500 transition-colors" />
                </div>
              )}

              <div className="h-full p-6 rounded-2xl border border-neutral-800/50 bg-neutral-900/30 backdrop-blur-sm hover:border-neutral-700 hover:bg-neutral-900/60 transition-all duration-500">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-5xl font-mono font-light text-neutral-700 group-hover:text-neutral-500 transition-colors">
                    {step.n}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center group-hover:bg-neutral-800 transition-colors">
                    <step.icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-base text-neutral-300 mb-3 leading-relaxed">{step.plain}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conversa franca, Q&A acessível */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          {/* Coluna esquerda, header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-xs uppercase tracking-widest text-neutral-600 mb-3 block">
              Conversa franca
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">
              Você tem uma ideia,
              <br />
              <span className="text-neutral-500">mas...</span>
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Essas são as quatro frases que mais ouvimos na primeira conversa.
              As respostas curtas estão aqui, as longas, ao vivo, com você.
            </p>
          </motion.div>

          {/* Coluna direita, accordion */}
          <div className="space-y-3">
            {concerns.map((c, i) => {
              const isOpen = openConcern === i;
              return (
                <motion.div
                  key={c.q}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenConcern(isOpen ? null : i)}
                    className="w-full text-left p-5 rounded-xl border border-neutral-800/50 bg-neutral-900/30 hover:border-neutral-700 transition-all"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-white font-medium text-base md:text-lg">{c.q}</span>
                      <ChevronRight
                        className={`w-5 h-5 flex-shrink-0 transition-all ${
                          isOpen ? 'rotate-90 text-white' : 'text-neutral-600'
                        }`}
                      />
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p className="text-neutral-400 leading-relaxed mt-3 pr-9">{c.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-neutral-800/50 bg-gradient-to-br from-neutral-900/80 to-neutral-900/30 backdrop-blur-sm p-10 md:p-16 text-center"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.05), transparent 60%)',
            }}
          />
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 relative">
            Vamos conversar?
          </h3>
          <p className="text-neutral-400 text-base md:text-lg mb-8 max-w-xl mx-auto relative leading-relaxed">
            30 minutos. Sem custo. Sem compromisso.
            Você sai com um diagnóstico honesto, mesmo que a gente não seja a melhor opção para o seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center relative">
            <Link
              href="#contato"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium rounded-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
            >
              Iniciar conversa
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#produtos"
              className="inline-flex items-center gap-2 px-8 py-4 text-neutral-400 hover:text-white text-sm font-medium transition-colors"
            >
              Ver nossos produtos
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
