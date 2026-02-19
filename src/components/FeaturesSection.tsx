import { useLanguage } from "@/i18n/LanguageContext";

const features = [
  { titleKey: "feature_1_title", descKey: "feature_1_desc" },
  { titleKey: "feature_2_title", descKey: "feature_2_desc" },
  { titleKey: "feature_3_title", descKey: "feature_3_desc" },
];

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="features" data-section="features" className="section-padding bg-background">
      <div className="container-fablino">
        <h2 className="text-center mb-12">{t("features_headline")}</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="fade-in-section bg-accent rounded-2xl p-8 text-center hover-lift"
            >
              {/* Icon placeholder — to be filled with illustration */}
              <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-6" />
              <h3 className="mb-3">{t(f.titleKey)}</h3>
              <p className="text-base text-foreground/75">{t(f.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

