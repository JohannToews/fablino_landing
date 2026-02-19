import { useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import syllablePreview from "@/assets/syllable-preview.png";

const AppPreviewSection = () => {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  // Re-run fade-in observer when this section mounts (language switch causes remount)
  useEffect(() => {
    if (!sectionRef.current) return;
    const els = sectionRef.current.querySelectorAll(".fade-in-section");
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  if (lang !== "de") return null;

  return (
    <section ref={sectionRef} data-section="app-preview" className="section-padding bg-fablino-light-gray">
      <div className="container-fablino text-center">
        <h2 className="mb-3">{t("preview_headline")}</h2>
        <p className="max-w-xl mx-auto mb-10">
          {t("preview_subline")}
        </p>

        <div className="fade-in-section inline-block">
          <div className="max-w-[700px] mx-auto bg-card rounded-[1.75rem] border-[10px] border-black shadow-[0_24px_64px_-8px_rgba(0,0,0,0.28),0_0_0_1px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col">
            {/* Tablet top bar with camera */}
            <div className="flex justify-center items-center py-2 bg-card border-b border-border/50">
              <div className="w-2 h-2 rounded-full bg-muted" />
            </div>

            {/* Screenshot */}
            <img
              src={syllablePreview}
              alt="Fablino Silbenfärbung — farbige Silben im Lesetext"
              className="w-full object-cover"
            />

            {/* Tablet bottom bar */}
            <div className="flex justify-center items-center py-2 bg-card border-t border-border/50">
              <div className="w-10 h-1 rounded-full bg-muted" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
