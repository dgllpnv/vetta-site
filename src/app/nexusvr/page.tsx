import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { NexusvrContent } from '@/features/products/components/nexusvr-page';

export const metadata: Metadata = {
  title: 'NexusVR - Educação em Realidade Virtual',
  description:
    'Experiências imersivas de aprendizado em VR. Transforme conteúdo educacional em jornadas interativas que engajam e fixam conhecimento.',
};

export default function NexusvrPage() {
  return (
    <>
      <Header />
      <main>
        <NexusvrContent />
      </main>
      <Footer />
    </>
  );
}
