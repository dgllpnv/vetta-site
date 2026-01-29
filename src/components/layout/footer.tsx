'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const products = [
  { name: 'Acolheduc', href: '/acolheduc', desc: 'Gestão Escolar' },
  { name: 'NexusVR', href: '/nexusvr', desc: 'Realidade Virtual' },
  { name: 'Lumina', href: '/lumina', desc: 'Hospitalidade' },
];

export function Footer() {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-white/[0.02] to-transparent pointer-events-none" />

      <div className="container relative">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg border border-neutral-800 flex items-center justify-center group-hover:border-neutral-600 transition-colors">
                <span className="text-sm font-semibold text-white">V</span>
              </div>
              <span className="text-xl font-medium text-white tracking-tight">
                Vetta
              </span>
            </Link>
            <p className="mt-6 text-neutral-500 max-w-sm leading-relaxed">
              Estúdio de Produtos Digitais. Construímos soluções robustas
              que já estão em produção, gerando valor real para nossos parceiros.
            </p>

            {/* Status indicator */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-neutral-400">Todos os sistemas operacionais</span>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-4">
            <p className="text-xs text-neutral-600 uppercase tracking-widest mb-6">
              Nossos Produtos
            </p>
            <div className="space-y-4">
              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="group flex items-center justify-between py-3 border-b border-neutral-900 hover:border-neutral-700 transition-colors"
                >
                  <div>
                    <p className="text-white group-hover:text-neutral-200 transition-colors">
                      {product.name}
                    </p>
                    <p className="text-sm text-neutral-600">{product.desc}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-700 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-xs text-neutral-600 uppercase tracking-widest mb-6">
              Contato
            </p>
            <div className="space-y-4">
              <a
                href="mailto:contato@vetta.com.br"
                className="block text-white hover:text-neutral-300 transition-colors"
              >
                contato@vetta.com.br
              </a>
              <p className="text-neutral-600">
                Segunda a sexta
                <br />
                9h às 18h
              </p>
            </div>

            <Link
              href="/#contato"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-800 text-sm text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Falar com a equipe
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-neutral-700">
            © {new Date().getFullYear()} Vetta. Todos os direitos reservados.
          </p>
          <p className="text-sm text-neutral-800">
            Feito com precisão técnica
          </p>
        </div>
      </div>
    </footer>
  );
}
