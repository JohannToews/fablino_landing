import { useLanguage } from "@/i18n/LanguageContext";

const TrustSection = () => {
  const { t } = useLanguage();

  const badges = [
    { icon: "🇪🇺", titleKey: "trust_1_title", descKey: "trust_1_desc" },
    { icon: "🔒", titleKey: "trust_2_title", descKey: "trust_2_desc" },
    { icon: "👶", titleKey: "trust_3_title", descKey: "trust_3_desc" },
  ];

  return (
    <section data-section="trust" className="section-padding bg-fablino-light-gray">
      <div className="container-fablino">
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {badges.map((b, i) => (
            <div key={i} className="fade-in-section bg-card rounded-2xl p-7 text-center shadow-fablino hover-lift">
              <div className="text-5xl mb-3">{b.icon}</div>
              <h3 className="mb-2">{t(b.titleKey)}</h3>
              <p className="text-sm">{t(b.descKey)}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm max-w-2xl mx-auto text-muted-foreground">
          {t("trust_paragraph")}
        </p>
      </div>
    </section>
  );
};

export default TrustSection;
