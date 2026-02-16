import FablinoMascot from "./FablinoMascot";
import { trackCTA, getCTALink } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

  const featureKeys = [
    "pricing_feature_1",
    "pricing_feature_2",
    "pricing_feature_3",
    "pricing_feature_4",
    "pricing_feature_5",
    "pricing_feature_6",
  ];

  return (
    <section id="pricing" data-section="pricing" className="section-padding bg-background">
      <div className="container-fablino">
        <h2 className="text-center mb-8">{t("pricing_headline")}</h2>

        {/* Beta banner */}
        <div className="fade-in-section bg-fablino-orange-bg border-2 border-primary rounded-xl p-5 text-center max-w-md mx-auto mb-8 flex items-center gap-3 justify-center">
          <FablinoMascot size={48} />
          <div className="text-left">
            <p className="font-extrabold text-foreground text-lg">{t("pricing_beta_badge")}</p>
            <p className="text-sm text-muted-foreground">{t("pricing_beta_sub")}</p>
          </div>
        </div>

        {/* Pricing card */}
        <div className="fade-in-section max-w-sm mx-auto bg-card rounded-3xl p-10 shadow-fablino-lg border-2 border-fablino-orange-light text-center">
          <p className="font-black text-foreground text-lg mb-1">{t("pricing_plan_name")}</p>
          <div className="mb-1">
            <span className="text-5xl font-black text-foreground">{t("pricing_monthly")}</span>
            <span className="text-muted-foreground"> {t("pricing_monthly_label")}</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6">{t("pricing_yearly")}</p>

          <ul className="text-left space-y-3 mb-8">
            {featureKeys.map((key, i) => (
              <li key={i} className="flex items-center gap-2.5 text-foreground">
                <span className="text-fablino-success font-bold">✓</span>
                {t(key)}
              </li>
            ))}
          </ul>

          <a
            href={getCTALink("pricing")}
            onClick={() => trackCTA("pricing")}
            className="block bg-primary text-primary-foreground font-bold text-lg py-3.5 rounded-full shadow-fablino-orange hover:shadow-fablino-orange-hover hover:scale-[1.03] transition-all"
          >
            {t("pricing_cta")}
          </a>

          <div className="mt-5 bg-fablino-orange-bg rounded-lg px-4 py-3">
            <p className="text-sm font-bold text-foreground">{t("pricing_beta_offer")}</p>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          {t("pricing_footer")}
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
