import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AcolheducContent } from '@/features/products/components/acolheduc-page';

export const metadata: Metadata = {
  title: 'Acolheduc - Gestão Escolar Inteligente',
  description:
    'Plataforma completa para gestão pedagógica com acompanhamento individual, intervenções RTI e IA integrada para geração de conteúdo educacional.',
};

export default function AcolheducPage() {
  return (
    <>
      <Header />
      <main>
        <AcolheducContent />
      </main>
      <Footer />
    </>
  );
}
