'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import styles from './landing.module.css';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  company: string;
  email: string;
  need: string;
  message: string;
}

const NEED_OPTIONS: { key: string; label: string; interest: string }[] = [
  { key: 'license', label: 'Licenciar um produto', interest: 'other' },
  { key: 'custom', label: 'Construir software sob medida', interest: 'custom' },
  { key: 'automate', label: 'Automatizar processos', interest: 'other' },
  { key: 'unsure', label: 'Ainda não sei', interest: 'other' },
];

const initialForm: FormData = {
  name: '',
  company: '',
  email: '',
  need: NEED_OPTIONS[0]!.key,
  message: '',
};

export function LandingContactForm() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          interest: NEED_OPTIONS.find((opt) => opt.key === formData.need)?.interest ?? 'other',
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem');
      }

      setStatus('success');
      setFormData(initialForm);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Erro ao enviar mensagem');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.formCard}>
        <div className={styles.formSuccess}>
          <div className={styles.formSuccessIcon}>
            <CheckCircle2 size={26} />
          </div>
          <h3 className={styles.timelineTitle}>Mensagem enviada!</h3>
          <p className={styles.cardBody}>Obrigado pelo contato. Responderemos em até 24 horas úteis.</p>
          <button type="button" className={styles.formSuccessReset} onClick={() => setStatus('idle')}>
            Enviar outra mensagem
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <form className={styles.formGrid} onSubmit={handleSubmit}>
        {status === 'error' && (
          <div className={`${styles.formStatus} ${styles.formStatusError}`}>
            <AlertCircle size={18} />
            <span>{errorMessage}</span>
          </div>
        )}

        <div className={styles.formRow2}>
          <label className={styles.field}>
            <span className={styles.fieldLabel}>Nome</span>
            <input
              type="text"
              name="name"
              required
              minLength={2}
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              className={styles.input}
            />
          </label>
          <label className={styles.field}>
            <span className={styles.fieldLabel}>Empresa</span>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nome da empresa"
              className={styles.input}
            />
          </label>
        </div>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>E-mail</span>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@empresa.com.br"
            className={styles.input}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>O que você precisa</span>
          <select name="need" value={formData.need} onChange={handleChange} className={styles.input}>
            {NEED_OPTIONS.map((opt) => (
              <option key={opt.key} value={opt.key}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>Mensagem</span>
          <textarea
            name="message"
            required
            minLength={10}
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Conte sobre seu projeto ou necessidade"
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.submit} disabled={status === 'loading'}>
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Enviando...
            </>
          ) : (
            'Enviar mensagem'
          )}
        </button>
      </form>
    </div>
  );
}
