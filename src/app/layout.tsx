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
    default: 'AuriSolutions | Estúdio de Produtos Digitais',
    template: '%s | AuriSolutions',
  },
  description:
    'Transformamos ideias em produtos digitais de classe mundial. Conheça Acolheduc, NexusVR e Lumina - soluções prontas para revolucionar seu mercado.',
  keywords: [
    'produtos digitais',
    'software',
    'SaaS',
    'gestão escolar',
    'realidade virtual',
    'hospitalidade',
    'AuriSolutions',
    'Auri',
    'Acolheduc',
    'NexusVR',
    'Lumina',
  ],
  authors: [{ name: 'AuriSolutions' }],
  creator: 'AuriSolutions',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://aurisolutions.com.br',
    siteName: 'AuriSolutions',
    title: 'AuriSolutions | Estúdio de Produtos Digitais',
    description:
      'Transformamos ideias em produtos digitais de classe mundial. Conheça Acolheduc, NexusVR e Lumina.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AuriSolutions | Estúdio de Produtos Digitais',
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
