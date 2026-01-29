import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { LuminaContent } from '@/features/products/components/lumina-page';

export const metadata: Metadata = {
  title: 'Lumina - Gestão para Hospitalidade',
  description:
    'Sistema completo para hotéis, pousadas e restaurantes. POS integrado, gestão financeira, controle de estoque e dashboard em tempo real.',
};

export default function LuminaPage() {
  return (
    <>
      <Header />
      <main>
        <LuminaContent />
      </main>
      <Footer />
    </>
  );
}
