import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import LanguagesSection from "@/components/LanguagesSection";
import AppPreviewSection from "@/components/AppPreviewSection";
import PricingSection from "@/components/PricingSection";
import TrustSection from "@/components/TrustSection";
import FooterSection from "@/components/FooterSection";
import { useScrollAnimation, useSectionTracking } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();
  useSectionTracking();

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <HowItWorksSection />
      <FeaturesSection />
      <LanguagesSection />
      <AppPreviewSection />
      <PricingSection />
      <TrustSection />
      <FooterSection />
    </div>
  );
};

export default Index;
