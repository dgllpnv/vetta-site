'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import styles from './nexusvr.module.css';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  company: string;
  email: string;
  vr: string;
}

const VR_LABELS: Record<string, string> = {
  'ja-temos': 'Já temos Meta Quest na escola',
  avaliando: 'Estamos avaliando a compra',
  entender: 'Ainda não, queremos entender',
};

const initialForm: FormData = {
  name: '',
  company: '',
  email: '',
  vr: 'ja-temos',
};

export function NexusvrContactForm() {
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
          interest: 'nexusvr',
          message: `Pedido de demonstração do NexusVR para ${formData.company || 'a escola'}. Já tem óculos de VR? ${
            VR_LABELS[formData.vr] ?? formData.vr
          }.`,
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
          <p className={styles.formTitle} style={{ marginBottom: 0 }}>
            Mensagem enviada!
          </p>
          <p className={styles.formSub} style={{ marginBottom: 0 }}>
            Obrigado pelo contato. Respondemos em até 24 horas úteis.
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
          <div className={styles.formStatus}>
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
          <span className={styles.fieldLabel}>Já tem óculos de VR?</span>
          <select name="vr" value={formData.vr} onChange={handleChange} className={styles.input}>
            <option value="ja-temos">Já temos Meta Quest na escola</option>
            <option value="avaliando">Estamos avaliando a compra</option>
            <option value="entender">Ainda não, queremos entender</option>
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

        <p className={styles.formFoot}>
          Ou escreva para <a href="mailto:aurisolutions@gmail.com">aurisolutions@gmail.com</a>
        </p>
      </form>
    </div>
  );
}
