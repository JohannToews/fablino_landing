import { useLanguage } from "@/i18n/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqKeys = Array.from({ length: 15 }, (_, i) => i + 1);

const FaqSection = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" data-section="faq" className="section-padding bg-card">
      <div className="container-fablino max-w-3xl">
        <h2 className="text-center mb-2 md:mb-3">{t("faq_headline")}</h2>
        <p className="text-center text-muted-foreground text-base md:text-lg mb-6 md:mb-10">
          {t("faq_subline")}
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqKeys.map((n) => (
            <AccordionItem key={n} value={`faq-${n}`} className="border-border">
              <AccordionTrigger className="text-left text-sm md:text-base font-semibold hover:no-underline">
                {t(`faq_${n}_q`)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {t(`faq_${n}_a`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
