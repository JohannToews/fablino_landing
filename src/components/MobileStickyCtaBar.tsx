import { useState, useEffect } from "react";
import { trackCTA, getCTALink } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

const MobileStickyCtaBar = () => {
  const [show, setShow] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    if (!heroCta) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  if (!show) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border px-4 py-3 shadow-[0_-2px_8px_rgba(0,0,0,0.06)]">
      <a
        href={getCTALink("mobile_sticky")}
        onClick={() => trackCTA("mobile_sticky")}
        className="block w-full text-center bg-primary text-primary-foreground font-bold text-base py-3 rounded-full shadow-fablino-orange"
      >
        {t("mobile_sticky_cta")}
      </a>
    </div>
  );
};

export default MobileStickyCtaBar;
