import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/features/hero';
import { ProductShowcase } from '@/features/products';
import { CustomDevelopment } from '@/features/custom-dev';
import { ContactSection } from '@/features/contact';

export default function HomePage() {
  return (
    <>
      {/* Grain texture overlay */}
      <div className="grain" />

      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <CustomDevelopment />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
