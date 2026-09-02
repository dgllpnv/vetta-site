import { Metadata } from 'next';
import { NexusvrPage } from '@/features/nexusvr/components/nexusvr-page';

export const metadata: Metadata = {
  title: 'NexusVR - Educação em Realidade Virtual',
  description:
    'Experiências imersivas de aprendizado em VR. Transforme conteúdo educacional em jornadas interativas que engajam e fixam conhecimento.',
};

export default function NexusVRPage() {
  return <NexusvrPage />;
}
