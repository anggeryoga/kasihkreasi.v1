import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ValueSection } from "@/components/sections/ValueSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { VideoPortfolioSection } from "@/components/sections/VideoPortfolioSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <PartnersSection />
        <ValueSection />
        <ServicesSection />
        <ProcessSection />
        <VideoPortfolioSection />
        <PortfolioSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
