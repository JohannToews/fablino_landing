import { useState, useEffect } from "react";
import { trackCTA, getCTALink } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const flags: { lang: Language; flag: string }[] = [
  { lang: "de", flag: "🇩🇪" },
  { lang: "fr", flag: "🇫🇷" },
  { lang: "en", flag: "🇬🇧" },
  { lang: "es", flag: "🇪🇸" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-fablino" : "bg-transparent"
      }`}
    >
      <div className="container-fablino flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl">🦊</span>
          <span className="text-xl font-black lowercase text-primary">fablino</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollTo("how-it-works")} className="text-sm font-semibold text-fablino-dark hover:text-primary transition-colors">{t("nav_how")}</button>
          <button onClick={() => scrollTo("features")} className="text-sm font-semibold text-fablino-dark hover:text-primary transition-colors">{t("nav_features")}</button>
          <button onClick={() => scrollTo("pricing")} className="text-sm font-semibold text-fablino-dark hover:text-primary transition-colors">{t("nav_pricing")}</button>

          {/* Language flags */}
          <div className="flex items-center gap-1">
            {flags.map((f) => (
              <button
                key={f.lang}
                onClick={() => setLang(f.lang)}
                className={`text-lg w-8 h-8 flex items-center justify-center rounded-full transition-all ${
                  lang === f.lang ? "ring-2 ring-primary bg-fablino-orange-bg" : "hover:bg-muted"
                }`}
                aria-label={f.lang.toUpperCase()}
              >
                {f.flag}
              </button>
            ))}
          </div>

          <a
            href={getCTALink("nav")}
            onClick={() => trackCTA("nav")}
            className="bg-primary text-primary-foreground font-bold text-sm px-6 py-2.5 rounded-full shadow-fablino-orange hover:shadow-fablino-orange-hover hover:scale-[1.03] transition-all"
          >
            {t("nav_cta")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-0.5 bg-fablino-dark transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-fablino-dark transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-fablino-dark transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border px-5 pb-6 pt-2 space-y-4">
          {/* Language flags mobile */}
          <div className="flex items-center gap-2 py-2">
            {flags.map((f) => (
              <button
                key={f.lang}
                onClick={() => setLang(f.lang)}
                className={`text-xl w-9 h-9 flex items-center justify-center rounded-full transition-all ${
                  lang === f.lang ? "ring-2 ring-primary bg-fablino-orange-bg" : "hover:bg-muted"
                }`}
              >
                {f.flag}
              </button>
            ))}
          </div>
          <button onClick={() => scrollTo("how-it-works")} className="block w-full text-left font-semibold text-fablino-dark py-2">{t("nav_how")}</button>
          <button onClick={() => scrollTo("features")} className="block w-full text-left font-semibold text-fablino-dark py-2">{t("nav_features")}</button>
          <button onClick={() => scrollTo("pricing")} className="block w-full text-left font-semibold text-fablino-dark py-2">{t("nav_pricing")}</button>
          <a
            href={getCTALink("nav")}
            onClick={() => trackCTA("nav")}
            className="block text-center bg-primary text-primary-foreground font-bold px-6 py-3 rounded-full shadow-fablino-orange"
          >
            {t("nav_cta")}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
