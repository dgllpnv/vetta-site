import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CbtContent } from '@/features/products/components/cbt-page';

export const metadata: Metadata = {
  title: 'Coldre System - Gestão para Clubes Esportivos',
  description:
    'Sistema operacional para clubes de tiro esportivo: associados, baias, anuidades, habitualidade CR/CAC, eventos e auditoria nativa. Em produção no Clube Baiano de Tiro.',
};

export default function CbtPage() {
  return (
    <>
      <Header />
      <main>
        <CbtContent />
      </main>
      <Footer />
    </>
  );
}
