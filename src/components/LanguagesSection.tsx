import { trackCTA } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import { useBetaModal } from "@/context/BetaModalContext";

const flags = ["🇩🇪", "🇫🇷", "🇬🇧", "🇪🇸", "🇳🇱", "🇮🇹", "🇵🇱", "🇹🇷", "🇭🇺", "🇧🇬", "🇱🇹", "🇵🇹", "🇧🇦"];

const LanguagesSection = () => {
  const { t } = useLanguage();
  const { open } = useBetaModal();

  return (
    <section data-section="languages" className="section-padding bg-fablino-teal-dark text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-fablino-teal-dark to-fablino-teal opacity-80" />
      <div className="container-fablino relative z-10 text-center">
        <h2 className="text-primary-foreground mb-4">
          {t("lang_headline")}
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          {t("lang_subline")}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {flags.map((flag, i) => (
            <span
              key={i}
              className="text-4xl animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {flag}
            </span>
          ))}
          <span className="text-2xl text-primary-foreground/60 self-center font-bold">
            …
          </span>
        </div>

        <button
          onClick={() => { trackCTA("languages"); open("languages"); }}
          className="inline-block bg-primary text-primary-foreground font-bold px-8 py-3.5 rounded-full hover:scale-[1.03] hover:shadow-lg transition-all shadow-fablino-lg"
        >
          {t("lang_cta")}
        </button>
      </div>
    </section>
  );
};

export default LanguagesSection;
