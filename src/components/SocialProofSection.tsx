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
        <h2 className="text-center mb-10">{t("social_headline")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((tm, i) => (
            <div
              key={i}
              className="fade-in-section bg-card rounded-2xl p-7 shadow-fablino border-l-4 border-primary hover-lift"
            >
              <p className="italic leading-relaxed mb-4 text-foreground">"{tm.quote}"</p>
              <p className="text-sm font-bold text-muted-foreground">{tm.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
