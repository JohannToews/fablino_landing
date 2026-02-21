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

  const renderCardContent = (tier: PricingTier, mobile: boolean) => (
    <>
      {tier.highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
            {t("pricing_most_popular")}
          </span>
        </div>
      )}
      <p className={`font-extrabold text-foreground ${mobile ? "text-base mb-2" : "text-base md:text-lg mb-2 md:mb-3"}`}>
        {t(tier.nameKey)}
      </p>
      <div className={mobile ? "mb-3" : "mb-3 md:mb-5"}>
        <span className={`font-black text-foreground ${mobile ? "text-3xl" : "text-3xl md:text-4xl"}`}>
          {t(tier.priceKey)}
        </span>
        <span className="text-muted-foreground text-sm"> {t(tier.periodKey)}</span>
      </div>
      <ul className={`flex-1 ${mobile ? "space-y-2 mb-5" : "space-y-2 mb-5 md:space-y-2.5 md:mb-7"}`}>
        {tier.features.map((fKey, fi) => (
          <li key={fi} className="flex items-start gap-2 text-sm text-foreground">
            <span className="text-fablino-success font-bold mt-0.5 shrink-0">✓</span>
            <span className={fi === 0 ? "font-bold" : ""}>{t(fKey)}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => { trackCTA("pricing"); open("pricing"); }}
        className={`block w-full text-center font-bold text-base ${mobile ? "py-2.5" : "py-2.5 md:py-3"} rounded-full transition-all ${
          tier.ctaStyle === "filled"
            ? "bg-primary text-primary-foreground shadow-fablino-orange hover:shadow-fablino-orange-hover hover:scale-[1.03]"
            : "bg-card text-primary border-2 border-primary hover:bg-fablino-orange-bg hover:scale-[1.02]"
        }`}
      >
        {t(tier.ctaKey)}
      </button>
    </>
  );

  return (
    <section id="pricing" data-section="pricing" className="section-padding bg-background">
      <div className="container-fablino">
        <h2 className="text-center mb-2 md:mb-3">{t("pricing_headline")}</h2>
        <p className="text-center text-muted-foreground mb-6 md:mb-10 max-w-xl mx-auto text-base">
          {t("pricing_subline")}
        </p>

        {/* Mobile: horizontal scroll with snap */}
        <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`snap-center flex-shrink-0 w-[85vw] relative bg-card rounded-2xl p-5 flex flex-col ${
                tier.highlight
                  ? "border-2 border-primary shadow-fablino-orange"
                  : "border border-border shadow-fablino-lg"
              }`}
            >
              {renderCardContent(tier, true)}
            </div>
          ))}
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`fade-in-section relative bg-card rounded-2xl md:rounded-3xl p-5 md:p-7 flex flex-col h-full ${
                tier.highlight
                  ? "border-2 border-primary shadow-fablino-orange"
                  : "border border-border shadow-fablino-lg"
              }`}
            >
              {renderCardContent(tier, false)}
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
