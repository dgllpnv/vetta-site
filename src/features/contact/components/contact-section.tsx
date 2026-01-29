'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Clock, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useFormTracking } from '@/hooks/useAnalytics';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  company: string;
  email: string;
  interest: string;
  message: string;
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { trackFormStart, trackFormSubmit, trackFormError } = useFormTracking();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    interest: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Track form start on first interaction
    if (!hasStartedTyping) {
      setHasStartedTyping(true);
      trackFormStart('contact');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem');
      }

      setStatus('success');
      trackFormSubmit('contact', true);

      // Reset form after success
      setFormData({
        name: '',
        company: '',
        email: '',
        interest: '',
        message: '',
      });
      setHasStartedTyping(false);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Erro ao enviar mensagem');
      trackFormSubmit('contact', false);
      trackFormError('contact', 'submission');
    }
  };

  return (
    <section id="contato" ref={sectionRef} className="py-32 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      <div className="container">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs uppercase tracking-widest text-neutral-500 mb-6">
              Contato
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
              Vamos
              <br />
              <span className="gradient-text">conversar</span>
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
              Interessado em algum dos nossos produtos ou precisa de
              desenvolvimento sob medida? Adoraríamos ouvir sobre seu projeto.
            </p>

            <div className="space-y-6">
              <motion.a
                href="mailto:contato@vetta.com.br"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group flex items-center gap-4 p-4 rounded-xl border border-neutral-800/50 bg-neutral-900/30 hover:border-neutral-700 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-neutral-800/50 flex items-center justify-center group-hover:bg-neutral-800 transition-colors">
                  <Mail className="w-5 h-5 text-neutral-400" />
                </div>
                <div>
                  <p className="text-xs text-neutral-600 uppercase tracking-wide mb-1">Email</p>
                  <p className="text-white group-hover:text-neutral-200 transition-colors">
                    contato@vetta.com.br
                  </p>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-neutral-800/50 bg-neutral-900/30"
              >
                <div className="w-12 h-12 rounded-lg bg-neutral-800/50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-neutral-400" />
                </div>
                <div>
                  <p className="text-xs text-neutral-600 uppercase tracking-wide mb-1">Horário</p>
                  <p className="text-neutral-400">Segunda a sexta, 9h às 18h</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl border border-neutral-800/50 bg-neutral-900/30 backdrop-blur-sm">
              {/* Success Message */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Mensagem enviada!
                  </h3>
                  <p className="text-neutral-400 mb-6">
                    Obrigado pelo contato. Responderemos em até 24 horas úteis.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm text-neutral-500 hover:text-white transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              )}

              {/* Form */}
              {status !== 'success' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Error Message */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-400 text-sm">{errorMessage}</p>
                    </motion.div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs text-neutral-500 uppercase tracking-wide mb-3">
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 rounded-lg bg-black/50 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs text-neutral-500 uppercase tracking-wide mb-3">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-4 rounded-lg bg-black/50 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition-all"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs text-neutral-500 uppercase tracking-wide mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-lg bg-black/50 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition-all"
                      placeholder="seu@empresa.com.br"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-xs text-neutral-500 uppercase tracking-wide mb-3">
                      Interesse
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-lg bg-black/50 border border-neutral-800 text-white focus:outline-none focus:border-neutral-600 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="text-neutral-600">Selecione uma opção</option>
                      <option value="acolheduc">Acolheduc - Gestão Escolar</option>
                      <option value="nexusvr">NexusVR - Realidade Virtual</option>
                      <option value="lumina">Lumina - Hospitalidade</option>
                      <option value="custom">Desenvolvimento Sob Medida</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs text-neutral-500 uppercase tracking-wide mb-3">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-lg bg-black/50 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition-all resize-none"
                      placeholder="Conte-nos sobre seu projeto ou necessidade..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group w-full py-4 flex items-center justify-center gap-2 bg-white text-black text-sm font-medium rounded-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensagem
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-neutral-600 text-center">
                    Respondemos em até 24 horas úteis
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
