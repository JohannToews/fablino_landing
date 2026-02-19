import { BookHeart, BrainCircuit, Sprout } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const features = [
  { Icon: BookHeart, titleKey: "feature_1_title", descKey: "feature_1_desc" },
  { Icon: BrainCircuit, titleKey: "feature_2_title", descKey: "feature_2_desc" },
  { Icon: Sprout, titleKey: "feature_3_title", descKey: "feature_3_desc" },
];

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="features" data-section="features" className="section-padding bg-card">
      <div className="container-fablino">
        <h2 className="text-center mb-12">{t("features_headline")}</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map(({ Icon, titleKey, descKey }, i) => (
            <div
              key={i}
              className="fade-in-section bg-accent rounded-2xl p-8 text-center hover-lift"
            >
              <div className="flex justify-center mb-6">
                <Icon size={32} className="text-primary" />
              </div>
              <h3 className="mb-3">{t(titleKey)}</h3>
              <p className="text-base text-foreground/75">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


