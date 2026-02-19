import { useLanguage } from "@/i18n/LanguageContext";
import syllablePreview from "@/assets/syllable-preview.png";

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
            <img
              src={syllablePreview}
              alt="Fablino Silbenfärbung — farbige Silben im Lesetext"
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
