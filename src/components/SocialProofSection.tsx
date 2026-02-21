import { useLanguage } from "@/i18n/LanguageContext";

const SocialProofSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    { quote: t("testimonial_1_quote"), author: t("testimonial_1_author") },
    { quote: t("testimonial_2_quote"), author: t("testimonial_2_author") },
    { quote: t("testimonial_3_quote"), author: t("testimonial_3_author") },
  ];

  return (
    <section data-section="social-proof" className="section-padding bg-background">
      <div className="container-fablino">
        <h2 className="text-center mb-6 md:mb-10">{t("social_headline")}</h2>
        <div className="grid md:grid-cols-3 gap-3 md:gap-6">
          {testimonials.map((tm, i) => (
            <div
              key={i}
              className="fade-in-section bg-card rounded-xl md:rounded-2xl px-5 py-4 md:p-7 shadow-fablino border-l-4 border-primary hover-lift"
            >
              <p className="italic text-sm md:text-base leading-snug md:leading-relaxed mb-2 md:mb-4 text-foreground">"{tm.quote}"</p>
              <p className="text-xs md:text-sm font-bold text-muted-foreground">{tm.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
