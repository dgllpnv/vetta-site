'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  Workflow,
  Scale,
  Stethoscope,
  MessagesSquare,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

const verticals = [
  {
    icon: Scale,
    label: 'Jurídico',
    description: 'Escritórios de advocacia que querem captar e atender sem inflar o time.',
    cases: [
      'Triagem inicial por área e urgência via WhatsApp',
      'Monitoramento de andamentos e intimações com alerta no canal certo',
      'Geração de documentos com assinatura eletrônica',
      'Distribuição automática de lead por especialidade',
    ],
  },
  {
    icon: Stethoscope,
    label: 'Clínicas & Saúde',
    description: 'Operação clínica que precisa lembrar, confirmar e reativar — sem fila na recepção.',
    cases: [
      'Agendamento conversacional integrado ao sistema da clínica',
      'Confirmação e lembrete sem passar pela recepção',
      'Reativação de pacientes inativos por especialidade',
      'NPS e pós-atendimento automatizados',
    ],
  },
  {
    icon: MessagesSquare,
    label: 'Atendimento & CRM',
    description: 'Times de relacionamento que querem qualificar mais sem perder o tom humano.',
    cases: [
      'Roteamento por intenção com handoff humano sem fricção',
      'Qualificação de lead com gravação no CRM',
      'Resumo automático antes do handoff',
      'Sincronização entre WhatsApp, e-mail e helpdesk',
    ],
  },
];

const process = [
  {
    n: '01',
    title: 'Mapeamos o processo',
    desc: 'Uma conversa de 30 min e algumas tardes acompanhando sua operação. Saímos com diagnóstico e proposta — mesmo que automação não seja a resposta certa.',
  },
  {
    n: '02',
    title: 'Sprint inicial em produção',
    desc: 'De 1 a 3 fluxos no ar em 2 a 4 semanas. Você acompanha cada entrega e aprova antes de ir ao ar — nada vira surpresa no final.',
  },
  {
    n: '03',
    title: 'Evolução contínua',
    desc: 'APIs mudam, processos evoluem. Continuamos observando, ajustando e expandindo a camada quando faz sentido para o negócio.',
  },
];

const integrations = [
  'n8n',
  'WhatsApp Business API',
  'Google Workspace',
  'CRMs & ERPs',
  'OpenAI / Anthropic',
  'Telegram',
];

export function AutomationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="automacoes"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      {/* Soft teal wash de fundo (sutil) */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.06), transparent 70%)' }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-400/20 bg-teal-400/5 text-teal-300 text-xs uppercase tracking-[0.3em] font-semibold mb-6">
            <Workflow className="w-3.5 h-3.5" />
            Automações &amp; Agentes
          </span>

          <h2 className="text-4xl md:text-6xl font-semibold text-white leading-[1.05] mb-6">
            Operação que continua{' '}
            <span
              className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              quando você dorme
            </span>
            <span className="text-neutral-500">.</span>
          </h2>

          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
            Fluxos em n8n com agentes conversacionais no WhatsApp, Telegram e web —
            construídos para o seu processo, não para um template. Triagem, agendamento,
            roteamento e follow-up seguem funcionando fora do horário comercial,
            sem ampliar o time.
          </p>
        </motion.div>

        {/* Verticais — grid 3 colunas */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {verticals.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-7 rounded-2xl border border-neutral-800/60 bg-neutral-900/30 backdrop-blur-sm hover:border-teal-400/30 hover:bg-neutral-900/60 transition-all duration-500">
                {/* Icon + label */}
                <div className="flex items-start gap-4 mb-5">
                  <motion.div
                    className="w-11 h-11 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center group-hover:bg-teal-400/15 group-hover:border-teal-400/40 transition-colors"
                    whileHover={{ rotate: -3 }}
                  >
                    <v.icon className="w-5 h-5 text-teal-300" strokeWidth={2} />
                  </motion.div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{v.label}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>

                {/* Cases */}
                <ul className="space-y-2.5 pt-5 border-t border-neutral-800/60">
                  {v.cases.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed"
                    >
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full bg-teal-400/70 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Processo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-12 items-start mb-24"
        >
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-600 font-semibold mb-3 block">
              Como funciona
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold text-white leading-[1.1] mb-6">
              Sprint fixo,
              <br />
              <span
                className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                evolução contínua
              </span>
              <span className="text-neutral-500">.</span>
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Começamos por um diagnóstico honesto. Se a automação resolve, entramos
              com sprint fechado. Depois, evoluímos a camada conforme seu negócio cresce.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-3">
            {process.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex gap-6 p-6 rounded-2xl border border-neutral-800/60 bg-neutral-900/30 hover:border-teal-400/30 hover:bg-neutral-900/60 transition-all"
              >
                <div className="flex-shrink-0">
                  <span
                    className="text-4xl font-mono font-light text-neutral-700 group-hover:text-teal-400/70 transition-colors"
                    aria-hidden="true"
                  >
                    {step.n}
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-neutral-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stack / integrações — linha sutil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-y border-neutral-800/60 py-8 mb-20"
        >
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between md:gap-8">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600 font-semibold flex-shrink-0">
              Construído sobre
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end">
              {integrations.map((tech) => (
                <li
                  key={tech}
                  className="text-sm font-medium text-neutral-400 hover:text-teal-300 transition-colors"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-teal-400/15 bg-gradient-to-br from-neutral-900/80 to-neutral-900/30 backdrop-blur-sm p-10 md:p-16 text-center"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 0%, rgba(20,184,166,0.08), transparent 60%)',
            }}
          />
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 relative">
            Quer mapear o que pode virar fluxo?
          </h3>
          <p className="text-neutral-400 text-base md:text-lg mb-8 max-w-xl mx-auto relative leading-relaxed">
            30 minutos. Sem custo. Saímos da chamada com uma lista do que vale automatizar
            primeiro — e do que ainda não vale.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center relative">
            <Link
              href="#contato"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium rounded-xl hover:shadow-[0_0_30px_rgba(20,184,166,0.25)] transition-all duration-300"
            >
              Agendar conversa
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#sob-medida"
              className="inline-flex items-center gap-2 px-8 py-4 text-neutral-400 hover:text-white text-sm font-medium transition-colors"
            >
              Ver desenvolvimento sob medida
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
