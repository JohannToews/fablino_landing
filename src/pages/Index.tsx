import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import UniqueFeaturesSection from "@/components/UniqueFeaturesSection";
import LanguagesSection from "@/components/LanguagesSection";
import AppPreviewSection from "@/components/AppPreviewSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import OurStorySection from "@/components/OurStorySection";
import TrustSection from "@/components/TrustSection";
import FooterSection from "@/components/FooterSection";
import MobileStickyCtaBar from "@/components/MobileStickyCtaBar";
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
      <UniqueFeaturesSection />
      <LanguagesSection />
      <AppPreviewSection />
      <PricingSection />
      <FaqSection />
      <OurStorySection />
      <TrustSection />
      <FooterSection />
      <MobileStickyCtaBar />
    </div>
  );
};

export default Index;
