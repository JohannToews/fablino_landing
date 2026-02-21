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
        <h2 className="text-center mb-6 md:mb-12">{t("features_headline")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
          {features.map(({ Icon, titleKey, descKey }, i) => (
            <div
              key={i}
              className="fade-in-section bg-accent rounded-xl md:rounded-2xl px-5 py-4 md:p-8 text-center hover-lift flex flex-row sm:flex-col items-center sm:items-center gap-4 sm:gap-0"
            >
              <div className="flex justify-center flex-shrink-0 sm:mb-6">
                <Icon size={28} className="text-primary md:w-8 md:h-8" />
              </div>
              <div className="text-left sm:text-center min-w-0">
                <h3 className="text-base md:text-lg mb-1 md:mb-3">{t(titleKey)}</h3>
                <p className="text-sm md:text-base text-foreground/75 leading-snug md:leading-normal">{t(descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


