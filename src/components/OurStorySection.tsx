import { useLanguage } from "@/i18n/LanguageContext";

const OurStorySection = () => {
  const { t } = useLanguage();

  return (
    <section id="our-story" data-section="our-story" className="section-padding bg-fablino-light-gray">
      <div className="container-fablino max-w-3xl text-center">
        <h2 className="mb-2 md:mb-3">{t("story_headline")}</h2>
        <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-10">
          {t("story_subline")}
        </p>
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-fablino">
          <span className="text-5xl mb-4 block">🦊</span>
          <p className="text-muted-foreground text-sm md:text-base">
            {t("story_placeholder")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
