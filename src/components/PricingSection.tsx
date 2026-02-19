import { trackCTA, getCTALink } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

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
      "pricing_starter_f3",
      "pricing_shared_f4",
      "pricing_shared_f5",
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
      "pricing_standard_f1",
      "pricing_premium_f2",
      "pricing_premium_f3",
      "pricing_shared_f4",
      "pricing_shared_f5",
      "pricing_shared_f6",
      "pricing_shared_f7",
      "pricing_premium_f8",
    ],
    ctaKey: "pricing_cta_getstarted",
    highlight: false,
    ctaStyle: "outline",
  },
];

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" data-section="pricing" className="section-padding bg-background">
      <div className="container-fablino">
        <h2 className="text-center mb-3">{t("pricing_headline")}</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-base">
          {t("pricing_subline")}
        </p>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`fade-in-section relative bg-card rounded-3xl p-7 flex flex-col ${
                tier.highlight
                  ? "border-2 border-primary shadow-fablino-orange"
                  : "border border-border shadow-fablino-lg"
              }`}
            >
              {/* Most popular badge */}
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    {t("pricing_most_popular")}
                  </span>
                </div>
              )}

              {/* Tier name */}
              <p className="font-extrabold text-foreground text-lg mb-3">{t(tier.nameKey)}</p>

              {/* Price */}
              <div className="mb-5">
                <span className="text-4xl font-black text-foreground">{t(tier.priceKey)}</span>
                <span className="text-muted-foreground text-sm"> {t(tier.periodKey)}</span>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-7 flex-1">
                {tier.features.map((fKey, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-fablino-success font-bold mt-0.5 shrink-0">✓</span>
                    <span>{t(fKey)}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={getCTALink("pricing")}
                onClick={() => trackCTA("pricing")}
                className={`block text-center font-bold text-base py-3 rounded-full transition-all ${
                  tier.ctaStyle === "filled"
                    ? "bg-primary text-primary-foreground shadow-fablino-orange hover:shadow-fablino-orange-hover hover:scale-[1.03]"
                    : "bg-card text-primary border-2 border-primary hover:bg-fablino-orange-bg hover:scale-[1.02]"
                }`}
              >
                {t(tier.ctaKey)}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
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
