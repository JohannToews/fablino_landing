import FablinoMascot from "./FablinoMascot";
import { trackCTA, getCTALink } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

function renderHighlight(text: string) {
  const parts = text.split(/<highlight>(.*?)<\/highlight>/);
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts[0]}
      <span className="text-primary">{parts[1]}</span>
      {parts[2]}
    </>
  );
}

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section data-section="hero" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 overflow-hidden bg-background">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-0 w-72 h-72 rounded-full bg-fablino-orange-bg opacity-60 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-fablino-warm-beige opacity-50 blur-3xl -z-10" />

      <div className="container-fablino grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="mb-5 animate-fade-in-up">
            {renderHighlight(t("hero_headline"))}
          </h1>
          <p className="mb-8 max-w-lg mx-auto md:mx-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {t("hero_subline")}
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              id="hero-cta"
              href={getCTALink("hero")}
              onClick={() => trackCTA("hero")}
              className="inline-block bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-full shadow-fablino-orange hover:shadow-fablino-orange-hover hover:scale-[1.03] transition-all"
            >
              {t("hero_cta")}
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              {t("hero_subtext")}
            </p>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="flex justify-center relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="w-[260px] sm:w-[280px] h-[480px] sm:h-[520px] bg-card rounded-[2rem] border-[3px] border-fablino-light-gray shadow-fablino-xl overflow-hidden flex flex-col">
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-24 h-5 bg-fablino-light-gray rounded-full" />
              </div>
              <div className="flex-1 px-5 pb-5 flex flex-col justify-center">
                <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">{t("hero_mockup_label")}</p>
                <h3 className="text-lg font-extrabold mb-4 leading-snug">{t("hero_mockup_title")}</h3>
                <p className="text-sm leading-relaxed">
                  {t("hero_mockup_text")}
                </p>
                <div className="mt-4 flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-fablino-star text-lg">★</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 animate-float">
              <FablinoMascot size={110} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
