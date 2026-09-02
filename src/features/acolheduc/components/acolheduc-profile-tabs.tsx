'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './acolheduc.module.css';

type Tab = 'hist' | 'int' | 'an';

export function AcolheducProfileTabs() {
  const [tab, setTab] = useState<Tab>('hist');

  return (
    <div className={styles.profileCard}>
      <div className={styles.tabRow}>
        <button
          type="button"
          onClick={() => setTab('hist')}
          className={`${styles.tabBtn} ${tab === 'hist' ? styles.tabBtnActive : ''}`}
        >
          Histórico
        </button>
        <button
          type="button"
          onClick={() => setTab('int')}
          className={`${styles.tabBtn} ${tab === 'int' ? styles.tabBtnActive : ''}`}
        >
          Intervenções
        </button>
        <button
          type="button"
          onClick={() => setTab('an')}
          className={`${styles.tabBtn} ${tab === 'an' ? styles.tabBtnActive : ''}`}
        >
          Análise
        </button>
      </div>

      {tab === 'hist' && (
        <div key="hist" className={`${styles.tabGrid} ${styles.cut}`}>
          <div>
            <h3 className={styles.tabTitle}>A observação vira registro datado</h3>
            <p className={styles.tabBody}>
              Participação de 1 a 5, interesse, interação, o texto do professor e um resumo automático. Com
              o nome de quem registrou, para a conversa com a família ter lastro.
            </p>
            <div className={styles.chipRow}>
              <span className={styles.chip} style={{ background: '#E3F7ED', color: '#137A4B', fontWeight: 600 }}>
                Participação 5/5
              </span>
              <span className={styles.chip} style={{ background: '#E3F7ED', color: '#137A4B', fontWeight: 600 }}>
                Interesse: sim
              </span>
              <span className={styles.chip} style={{ background: '#E3F7ED', color: '#137A4B', fontWeight: 600 }}>
                Interação: positiva
              </span>
            </div>
          </div>
          <div className={styles.tabMedia}>
            <Image
              src="/design/acolheduc/11-historico.jpg"
              alt="Aba Histórico com registro datado do aluno"
              width={1568}
              height={745}
            />
          </div>
        </div>
      )}

      {tab === 'int' && (
        <div key="int" className={`${styles.tabGrid} ${styles.cut}`}>
          <div>
            <h3 className={styles.tabTitle}>As intervenções RTI ficam no mesmo lugar</h3>
            <p className={styles.tabBody}>
              Resposta à Intervenção deixa de ser uma pasta separada. O que foi proposto para o aluno vive
              ao lado do que foi observado dele, e a coordenação acompanha sem pedir relatório.
            </p>
            <div className={styles.tabNote}>
              <p className={styles.tabNoteTitle}>Módulo RTI</p>
              <p className={styles.tabNoteBody}>
                Ligado ou desligado por escola, nas configurações do administrador.
              </p>
            </div>
          </div>
          <div className={styles.tabMedia}>
            <Image
              src="/design/acolheduc/12-intervencoes.jpg"
              alt="Aba Intervenções do perfil do aluno"
              width={1568}
              height={745}
            />
          </div>
        </div>
      )}

      {tab === 'an' && (
        <div key="an" className={`${styles.tabGrid} ${styles.cut}`}>
          <div>
            <h3 className={styles.tabTitle}>A IA lê o histórico e devolve leitura, não achismo</h3>
            <p className={styles.tabBody}>
              Com base nos registros, a Análise de Progresso aponta pontos fortes e áreas de
              desenvolvimento, sempre dizendo em quantos registros ela se apoiou.
            </p>
            <div className={styles.tabNoteGradient}>
              <p className={styles.tabNoteTitle}>Insights baseados nos registros</p>
              <p className={styles.tabNoteBody}>
                A quantidade de observações usada aparece junto com o insight.
              </p>
            </div>
          </div>
          <div className={styles.tabMedia}>
            <Image
              src="/design/acolheduc/13-analise-ia.jpg"
              alt="Aba Análise com insights gerados por IA"
              width={1568}
              height={745}
            />
          </div>
        </div>
      )}
    </div>
  );
}
