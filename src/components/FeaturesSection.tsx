import { useLanguage } from "@/i18n/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: "🌍", titleKey: "feature_1_title", descKey: "feature_1_desc" },
    { icon: "⭐", titleKey: "feature_2_title", descKey: "feature_2_desc" },
    { icon: "🌱", titleKey: "feature_3_title", descKey: "feature_3_desc" },
    { icon: "🛡️", titleKey: "feature_4_title", descKey: "feature_4_desc" },
    { icon: "📖", titleKey: "feature_5_title", descKey: "feature_5_desc" },
  ];

  return (
    <section id="features" data-section="features" className="section-padding bg-background">
      <div className="container-fablino">
        <h2 className="text-center mb-12">{t("features_headline")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`fade-in-section bg-accent rounded-2xl p-8 text-center hover-lift ${
                i >= 3 ? "sm:col-span-1" : ""
              }`}
            >
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="mb-2">{t(f.titleKey)}</h3>
              <p className="text-sm">{t(f.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
