import type { Metadata, Viewport } from 'next';
import {
  Inter,
  Bricolage_Grotesque,
  Figtree,
  Instrument_Serif,
  Chakra_Petch,
  Oswald,
  JetBrains_Mono,
} from 'next/font/google';
import { AnalyticsProvider } from '@/providers/analytics-provider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-bricolage',
});

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-figtree',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
});

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
  variable: '--font-chakra-petch',
});

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
  variable: '--font-oswald',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
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
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${inter.variable} ${bricolage.variable} ${figtree.variable} ${instrumentSerif.variable} ${chakraPetch.variable} ${oswald.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}
