import { trackCTA, getCTALink } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import step1Img from "@/assets/how-step-1.png";
import step2Img from "@/assets/how-step-2.png";
import step3Img from "@/assets/how-step-3.png";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    { num: "1", img: step1Img, title: t("how_step1_title"), text: t("how_step1_desc") },
    { num: "2", img: step2Img, title: t("how_step2_title"), text: t("how_step2_desc") },
    { num: "3", img: step3Img, title: t("how_step3_title"), text: t("how_step3_desc") },
  ];

  return (
    <section id="how-it-works" data-section="how-it-works" className="section-padding bg-fablino-light-gray">
      <div className="container-fablino">
        <h2 className="text-center mb-6 md:mb-12">{t("how_headline")}</h2>

        {/* Mobile layout */}
        <div className="flex flex-col gap-4 md:hidden">
          {steps.map((s, i) => (
            <div key={i} className="fade-in-section flex items-center gap-4">
              <div className="flex flex-col items-center flex-shrink-0">
                <img src={s.img} alt={s.title} className="h-[72px] w-auto object-contain mb-1 drop-shadow-md" />
                <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-black">
                  {s.num}
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="text-base mb-0.5">{s.title}</h3>
                <p className="text-sm leading-snug" style={{ color: "hsl(var(--fablino-dark))", opacity: 0.75 }}>
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="fade-in-section flex flex-col items-center text-center">
              <img
                src={s.img}
                alt={s.title}
                className="h-[130px] w-auto object-contain mb-4 drop-shadow-md"
              />
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-base font-black mb-3">
                {s.num}
              </div>
              <h3 className="mb-2">{s.title}</h3>
              <p className="text-base max-w-xs" style={{ color: "hsl(var(--fablino-dark))", opacity: 0.75 }}>
                {s.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a
            href={getCTALink("how_it_works")}
            onClick={() => trackCTA("steps")}
            className="inline-block bg-primary text-primary-foreground font-bold px-8 py-3.5 rounded-full shadow-fablino-orange hover:shadow-fablino-orange-hover hover:scale-[1.03] transition-all"
          >
            {t("how_cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
