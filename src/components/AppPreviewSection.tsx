import { useLanguage } from "@/i18n/LanguageContext";

const AppPreviewSection = () => {
  const { t } = useLanguage();

  return (
    <section data-section="app-preview" className="section-padding bg-fablino-light-gray">
      <div className="container-fablino text-center">
        <h2 className="mb-3">{t("preview_headline")}</h2>
        <p className="max-w-xl mx-auto mb-10">
          {t("preview_subline")}
        </p>

        <div className="fade-in-section inline-block">
          <div className="max-w-[800px] mx-auto bg-fablino-dark rounded-3xl p-3 sm:p-4 shadow-fablino-xl">
            <div className="bg-accent rounded-2xl aspect-[16/10] flex items-center justify-center">
              <div className="text-center p-10">
                <div className="text-5xl mb-4">📖✨</div>
                <h3 className="mb-2">{t("preview_placeholder")}</h3>
                <p className="text-sm text-muted-foreground">{t("preview_placeholder_sub")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
