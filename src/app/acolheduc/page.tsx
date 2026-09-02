import { Metadata } from 'next';
import { AcolheducPage } from '@/features/acolheduc/components/acolheduc-page';

export const metadata: Metadata = {
  title: 'Acolheduc - Gestão Escolar Inteligente',
  description:
    'Plataforma completa para gestão pedagógica com acompanhamento individual, intervenções RTI e IA integrada para geração de conteúdo educacional.',
};

export default function Page() {
  return <AcolheducPage />;
}
