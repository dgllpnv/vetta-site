import { Metadata } from 'next';
import { LuminaPage } from '@/features/lumina/components/lumina-page';

export const metadata: Metadata = {
  title: 'Lumina - Gestão para Hospitalidade',
  description:
    'Sistema completo para hotéis, pousadas e restaurantes. POS integrado, gestão financeira, controle de estoque e dashboard em tempo real.',
};

export default function Page() {
  return <LuminaPage />;
}
