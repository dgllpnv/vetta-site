'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import styles from './acolheduc.module.css';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  company: string;
  email: string;
  role: string;
  message: string;
}

const ROLE_OPTIONS = [
  { key: 'direcao', label: 'Direção ou mantenedora' },
  { key: 'coordenacao', label: 'Coordenação pedagógica' },
  { key: 'professor', label: 'Professor' },
  { key: 'rede', label: 'Gestão de rede' },
] as const;

const initialForm: FormData = {
  name: '',
  company: '',
  email: '',
  role: ROLE_OPTIONS[0].key,
  message: '',
};

export function AcolheducContactForm() {
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
      const roleLabel = ROLE_OPTIONS.find((opt) => opt.key === formData.role)?.label ?? '';
      const message = formData.message.trim() || `Papel na escola: ${roleLabel}. Gostaria de agendar uma demonstração do Acolheduc.`;

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          interest: 'acolheduc',
          message,
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
          <span className={styles.fieldLabel}>Escola ou rede</span>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nome da instituição"
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
            placeholder="seu@escola.com.br"
            className={styles.input}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>Seu papel na escola</span>
          <select name="role" value={formData.role} onChange={handleChange} className={styles.input}>
            {ROLE_OPTIONS.map((opt) => (
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
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Conte um pouco sobre a sua escola ou rede (opcional)"
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

        <p className={styles.formFootnote}>
          Ou escreva para <a href="mailto:aurisolutions@gmail.com">aurisolutions@gmail.com</a>
        </p>
      </form>
    </div>
  );
}
