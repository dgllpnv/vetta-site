import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection, TrustBar } from '@/features/hero';
import { ProductShowcase } from '@/features/products';
import { CustomDevelopment } from '@/features/custom-dev';
import { AutomationsSection } from '@/features/automations';
import { ContactSection } from '@/features/contact';

export default function HomePage() {
  return (
    <>
      {/* Grain texture overlay */}
      <div className="grain" />

      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ProductShowcase />
        <CustomDevelopment />
        <AutomationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
