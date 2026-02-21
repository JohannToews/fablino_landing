import { trackCTA } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import { useBetaModal } from "@/context/BetaModalContext";

type PricingTier = {
  nameKey: string;
  priceKey: string;
  periodKey: string;
  features: string[];
  ctaKey: string;
  highlight: boolean;
  ctaStyle: "outline" | "filled";
};

const tiers: PricingTier[] = [
  {
    nameKey: "pricing_starter_name",
    priceKey: "pricing_starter_price",
    periodKey: "pricing_period",
    features: [
      "pricing_starter_f1",
      "pricing_starter_f2",
      "pricing_starter_f3",
      "pricing_shared_f4",
      "pricing_shared_f5",
    ],
    ctaKey: "pricing_cta_getstarted",
    highlight: false,
    ctaStyle: "outline",
  },
  {
    nameKey: "pricing_standard_name",
    priceKey: "pricing_standard_price",
    periodKey: "pricing_period",
    features: [
      "pricing_standard_f1",
      "pricing_standard_f2",
      "pricing_standard_f3",
      "pricing_shared_f4",
      "pricing_shared_f5",
      "pricing_shared_f8",
      "pricing_shared_f6",
      "pricing_shared_f7",
    ],
    ctaKey: "pricing_cta_getstarted",
    highlight: true,
    ctaStyle: "filled",
  },
  {
    nameKey: "pricing_premium_name",
    priceKey: "pricing_premium_price",
    periodKey: "pricing_period",
    features: [
      "pricing_premium_f1",
      "pricing_premium_f2",
      "pricing_premium_f3",
      "pricing_shared_f4",
      "pricing_shared_f5",
      "pricing_shared_f8",
      "pricing_shared_f6",
      "pricing_shared_f7",
    ],
    ctaKey: "pricing_cta_getstarted",
    highlight: false,
    ctaStyle: "outline",
  },
];

const PricingSection = () => {
  const { t } = useLanguage();
  const { open } = useBetaModal();

  return (
    <section id="pricing" data-section="pricing" className="section-padding bg-background">
      <div className="container-fablino">
        <h2 className="text-center mb-2 md:mb-3">{t("pricing_headline")}</h2>
        <p className="text-center text-muted-foreground mb-6 md:mb-10 max-w-xl mx-auto text-base">
          {t("pricing_subline")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`fade-in-section relative bg-card rounded-2xl md:rounded-3xl p-5 md:p-7 flex flex-col h-full ${
                tier.highlight
                  ? "border-2 border-primary shadow-fablino-orange"
                  : "border border-border shadow-fablino-lg"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    {t("pricing_most_popular")}
                  </span>
                </div>
              )}
              <p className="font-extrabold text-foreground text-base md:text-lg mb-2 md:mb-3">{t(tier.nameKey)}</p>
              <div className="mb-3 md:mb-5">
                <span className="text-3xl md:text-4xl font-black text-foreground">{t(tier.priceKey)}</span>
                <span className="text-muted-foreground text-sm"> {t(tier.periodKey)}</span>
              </div>
              <ul className="space-y-2 md:space-y-2.5 mb-5 md:mb-7 flex-1">
                {tier.features.map((fKey, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-fablino-success font-bold mt-0.5 shrink-0">✓</span>
                    <span className={fi === 0 ? "font-bold" : ""}>{t(fKey)}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => { trackCTA("pricing"); open("pricing"); }}
                className={`block w-full text-center font-bold text-base py-2.5 md:py-3 rounded-full transition-all ${
                  tier.ctaStyle === "filled"
                    ? "bg-primary text-primary-foreground shadow-fablino-orange hover:shadow-fablino-orange-hover hover:scale-[1.03]"
                    : "bg-card text-primary border-2 border-primary hover:bg-fablino-orange-bg hover:scale-[1.02]"
                }`}
              >
                {t(tier.ctaKey)}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          {t("pricing_credits_note")}
        </p>
        <p className="text-center text-xs text-muted-foreground mt-2">
          {t("pricing_footer")}
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
