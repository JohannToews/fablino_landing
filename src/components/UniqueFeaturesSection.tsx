import { useLanguage } from "@/i18n/LanguageContext";

const uniqueCards = [
  { titleKey: "unique_1_title", descKey: "unique_1_desc" },
  { titleKey: "unique_2_title", descKey: "unique_2_desc" },
  { titleKey: "unique_3_title", descKey: "unique_3_desc" },
  { titleKey: "unique_4_title", descKey: "unique_4_desc" },
  { titleKey: "unique_5_title", descKey: "unique_5_desc" },
  { titleKey: "unique_6_title", descKey: "unique_6_desc" },
];

const UniqueFeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="unique" data-section="unique" className="section-padding bg-accent">
      <div className="container-fablino">
        <h2 className="text-center mb-12">{t("unique_headline")}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {uniqueCards.map((card, i) => (
            <div
              key={i}
              className="fade-in-section bg-card rounded-2xl p-8 shadow-sm hover-lift flex flex-col gap-3"
            >
              {/* Icon placeholder */}
              <div className="w-10 h-10 rounded-full bg-primary/10 mb-1" />
              <h3 className="text-lg font-bold text-foreground">{t(card.titleKey)}</h3>
              <p className="text-base text-foreground/75 leading-relaxed">{t(card.descKey)}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-primary text-primary-foreground font-bold px-8 py-3.5 rounded-full shadow-fablino-orange hover:shadow-fablino-orange-hover hover:scale-[1.03] transition-all"
          >
            {t("unique_cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeaturesSection;
