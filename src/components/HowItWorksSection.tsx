import { trackCTA, getCTALink } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    { num: "1", icon: "✏️", title: t("how_step1_title"), text: t("how_step1_desc") },
    { num: "2", icon: "🎨", title: t("how_step2_title"), text: t("how_step2_desc") },
    { num: "3", icon: "📖", title: t("how_step3_title"), text: t("how_step3_desc") },
  ];

  return (
    <section id="how-it-works" data-section="how-it-works" className="section-padding bg-fablino-light-gray">
      <div className="container-fablino">
        <h2 className="text-center mb-12">{t("how_headline")}</h2>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[2px] border-t-2 border-dashed border-fablino-orange-light" />
          {steps.map((s, i) => (
            <div key={i} className="fade-in-section flex flex-col items-center text-center relative">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-black mb-4 relative z-10">
                {s.num}
              </div>
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="mb-2">{s.title}</h3>
              <p className="text-sm max-w-xs">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={getCTALink("how_it_works")}
            onClick={() => trackCTA("steps")}
            className="inline-block border-2 border-secondary text-secondary font-bold px-8 py-3.5 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all"
          >
            {t("how_cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
