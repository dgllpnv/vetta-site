'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import styles from './lumina.module.css';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormState {
  name: string;
  company: string;
  email: string;
  operates: string;
}

const OPERATES_OPTIONS = [
  { value: 'restaurante', label: 'Restaurante' },
  { value: 'pousada', label: 'Pousada ou hotel' },
  { value: 'restaurante-hospedagem', label: 'Restaurante e hospedagem' },
  { value: 'rede', label: 'Grupo com várias unidades' },
];

const initialForm: FormState = {
  name: '',
  company: '',
  email: '',
  operates: OPERATES_OPTIONS[0]!.value,
};

export function LuminaContactForm() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const operatesLabel =
      OPERATES_OPTIONS.find((opt) => opt.value === formData.operates)?.label ?? '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          interest: 'lumina',
          message: `Estabelecimento opera: ${operatesLabel}. Quer agendar uma demonstração do Lumina.`,
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
      <p className={styles.formTitle}>Agendar uma demonstração</p>
      <p className={styles.formSub}>Resposta em até 24 horas úteis.</p>
      <form className={styles.formGrid} onSubmit={handleSubmit}>
        {status === 'error' && (
          <div className={styles.formStatusError}>
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
          <span className={styles.fieldLabel}>Estabelecimento</span>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nome da casa"
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
            placeholder="seu@estabelecimento.com.br"
            className={styles.input}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>O que você opera</span>
          <select
            name="operates"
            value={formData.operates}
            onChange={handleChange}
            className={styles.input}
          >
            {OPERATES_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
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
        <p className={styles.formNote}>
          Ou escreva para <a href="mailto:aurisolutions@gmail.com">aurisolutions@gmail.com</a>
        </p>
      </form>
    </div>
  );
}
