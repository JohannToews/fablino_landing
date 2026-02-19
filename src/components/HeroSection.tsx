import FablinoMascot from "./FablinoMascot";
import { trackCTA, getCTALink } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import storyCover from "@/assets/story-cover-mummies.jpg";

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

        {/* Tablet mockup */}
        <div className="flex justify-center relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            {/* Tablet frame */}
            <div className="w-[300px] sm:w-[330px] bg-card rounded-[1.75rem] border-[5px] border-fablino-light-gray shadow-fablino-xl overflow-hidden flex flex-col">
              {/* Tablet top bar with camera */}
              <div className="flex justify-center items-center py-2 bg-card border-b border-fablino-light-gray/50">
                <div className="w-2 h-2 rounded-full bg-fablino-light-gray" />
              </div>

              {/* Cover image */}
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img
                  src={storyCover}
                  alt="Story cover"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Story content */}
              <div className="px-4 pt-3 pb-4 flex flex-col gap-2">
                {/* App label */}
                <span className="text-[9px] font-bold text-secondary uppercase tracking-widest">
                  {t("hero_mockup_label")}
                </span>

                {/* Title */}
                <h3 className="text-sm font-extrabold leading-snug text-foreground">
                  {t("hero_mockup_title")}
                </h3>

                {/* Story text excerpt */}
                <p className="text-xs leading-relaxed text-muted-foreground line-clamp-4">
                  {t("hero_mockup_text")}
                </p>

                {/* Stars */}
                <div className="flex gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <span key={i} className="text-fablino-star text-sm">★</span>
                  ))}
                </div>
              </div>

              {/* Tablet bottom bar */}
              <div className="flex justify-center items-center py-2 border-t border-fablino-light-gray/50">
                <div className="w-10 h-1 rounded-full bg-fablino-light-gray" />
              </div>
            </div>

            {/* Mascot */}
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
