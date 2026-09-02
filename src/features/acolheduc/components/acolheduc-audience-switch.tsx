'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './acolheduc.module.css';

export function AcolheducAudienceSwitch() {
  const [view, setView] = useState<'prof' | 'coord'>('prof');

  return (
    <>
      <div className={styles.switchPill}>
        <button
          type="button"
          onClick={() => setView('prof')}
          className={`${styles.switchBtn} ${view === 'prof' ? styles.switchBtnActive : ''}`}
        >
          Professor
        </button>
        <button
          type="button"
          onClick={() => setView('coord')}
          className={`${styles.switchBtn} ${view === 'coord' ? styles.switchBtnActive : ''}`}
        >
          Coordenação
        </button>
      </div>

      {view === 'prof' ? (
        <div key="prof" className={`${styles.switchGrid} ${styles.cut}`}>
          <div>
            <h3 className={styles.switchTitle}>O dia do professor cabe em um registro rápido</h3>
            <p className={styles.switchBody}>
              Escolhe a turma, avalia a participação e a interação, escreve uma linha. O sistema devolve o
              resumo automático e guarda a evidência no perfil de cada aluno.
            </p>
            <ul className={styles.switchList}>
              <li className={styles.switchListItem}>
                <span className={styles.switchListNum}>01</span>Registro Rápido de Aula, turma inteira de
                uma vez
              </li>
              <li className={styles.switchListItem}>
                <span className={styles.switchListNum}>02</span>Progresso semanal de observações, com meta
                visível
              </li>
              <li className={styles.switchListItem}>
                <span className={styles.switchListNum}>03</span>Memórias com foto, aluno, turma e autor
              </li>
            </ul>
            <div className={styles.chipRow}>
              <span className={styles.chip}>Início</span>
              <span className={styles.chip}>Memórias</span>
              <span className={styles.chip}>Planejamento</span>
            </div>
          </div>
          <div className={styles.switchMedia}>
            <Image
              src="/design/acolheduc/05-professor-prompts-memorias.jpg"
              alt="Prompts populares e Memórias recentes na visão do professor"
              width={1568}
              height={745}
            />
          </div>
        </div>
      ) : (
        <div key="coord" className={`${styles.switchGrid} ${styles.cut}`}>
          <div>
            <h3 className={styles.switchTitle}>A coordenação enxerga a escola inteira em uma tela</h3>
            <p className={styles.switchBody}>
              O Mapa de Clima Escolar pinta cada turma de verde, âmbar ou vermelho. Ao lado, os alunos que
              precisam de intervenção, por nível de risco e há quantos dias.
            </p>
            <ul className={styles.switchList}>
              <li className={styles.switchListItem}>
                <span className={styles.switchListNum}>01</span>Mapa de Clima Escolar por turma
              </li>
              <li className={styles.switchListItem}>
                <span className={styles.switchListNum}>02</span>Alunos em risco, separados por risco alto e
                médio
              </li>
              <li className={styles.switchListItem}>
                <span className={styles.switchListNum}>03</span>Cobertura Curricular BNCC por área do
                conhecimento
              </li>
            </ul>
            <div className={styles.chipRow}>
              <span
                className={styles.chipStatus}
                style={{ background: '#E3F7ED', color: '#137A4B' }}
              >
                <span className={styles.chipDot} style={{ background: 'var(--ac-green)' }} />
                Clima positivo
              </span>
              <span
                className={styles.chipStatus}
                style={{ background: '#FDF1DF', color: '#8A5A06' }}
              >
                <span className={styles.chipDot} style={{ background: 'var(--ac-amber)' }} />
                Atenção moderada
              </span>
              <span
                className={styles.chipStatus}
                style={{ background: '#FCE9E9', color: '#9B2C2C' }}
              >
                <span className={styles.chipDot} style={{ background: 'var(--ac-coral)' }} />
                Atenção crítica
              </span>
            </div>
          </div>
          <div className={styles.switchMedia}>
            <Image
              src="/design/acolheduc/03-clima-rodape.jpg"
              alt="Cobertura Curricular BNCC e alunos em risco no painel da coordenação"
              width={1568}
              height={745}
            />
          </div>
        </div>
      )}
    </>
  );
}
