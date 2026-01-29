import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { AnalyticsProvider } from '@/providers/analytics-provider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Vetta | Estudio de Produtos Digitais',
    template: '%s | Vetta',
  },
  description:
    'Transformamos ideias em produtos digitais de classe mundial. Conheca Acolheduc, NexusVR e Lumina - solucoes prontas para revolucionar seu mercado.',
  keywords: [
    'produtos digitais',
    'software',
    'SaaS',
    'gestao escolar',
    'realidade virtual',
    'hospitalidade',
    'Vetta',
    'Acolheduc',
    'NexusVR',
    'Lumina',
  ],
  authors: [{ name: 'Vetta' }],
  creator: 'Vetta',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vetta.com.br',
    siteName: 'Vetta',
    title: 'Vetta | Estudio de Produtos Digitais',
    description:
      'Transformamos ideias em produtos digitais de classe mundial. Conheca Acolheduc, NexusVR e Lumina.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vetta | Estudio de Produtos Digitais',
    description: 'Transformamos ideias em produtos digitais de classe mundial.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#09090B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} font-sans`}>
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}
