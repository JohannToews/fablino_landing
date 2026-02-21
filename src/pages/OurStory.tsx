import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import OurStorySection from "@/components/OurStorySection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const OurStory = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <OurStorySection />
      </div>
      <FooterSection />
    </div>
  );
};

export default OurStory;
