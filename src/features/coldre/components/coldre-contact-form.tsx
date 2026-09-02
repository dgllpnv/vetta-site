'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import styles from './coldre.module.css';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormState {
  name: string;
  company: string;
  email: string;
  lanes: string;
  message: string;
}

const LANE_OPTIONS = [
  'Até 6 baias',
  'De 7 a 15 baias',
  'Mais de 15 baias',
  'Mais de uma unidade',
] as const;

const initialForm: FormState = {
  name: '',
  company: '',
  email: '',
  lanes: LANE_OPTIONS[0],
  message: '',
};

export function ColdreContactForm() {
  const [formData, setFormData] = useState<FormState>(initialForm);
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
          interest: 'other',
          message: `Clube de tiro — ${formData.lanes}. ${formData.message}`.trim(),
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
          <h3 className={styles.formSuccessTitle}>Mensagem enviada!</h3>
          <p className={styles.formSuccessBody}>
            Obrigado pelo contato. Responderemos em até 24 horas úteis.
          </p>
          <button type="button" className={styles.formSuccessReset} onClick={() => setStatus('idle')}>
            Enviar outra mensagem
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <h3 className={styles.formTitle}>Agendar uma demonstração</h3>
      <p className={styles.formSub}>Resposta em até 24 horas úteis</p>

      <form className={styles.formGrid} onSubmit={handleSubmit}>
        {status === 'error' && (
          <div className={`${styles.formStatus} ${styles.formStatusError}`}>
            <AlertCircle size={18} />
            <span>{errorMessage}</span>
          </div>
        )}

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
          <span className={styles.fieldLabel}>Clube</span>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nome do clube"
            className={styles.input}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>E-mail</span>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@clube.com.br"
            className={styles.input}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>Quantas baias</span>
          <select name="lanes" value={formData.lanes} onChange={handleChange} className={styles.input}>
            {LANE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
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
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Conte um pouco sobre a operação do clube"
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

        <p className={styles.formFoot}>
          Ou escreva para <a href="mailto:aurisolutions@gmail.com">aurisolutions@gmail.com</a>
        </p>
      </form>
    </div>
  );
}
