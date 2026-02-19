import { Link } from "react-router-dom";
import FablinoMascot from "./FablinoMascot";
import { trackCTA } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import { useBetaModal } from "@/context/BetaModalContext";

const FooterSection = () => {
  const { t } = useLanguage();
  const { open } = useBetaModal();

  return (
    <footer data-section="footer" className="bg-fablino-dark text-primary-foreground">
      {/* Final CTA */}
      <div className="section-padding text-center">
        <div className="container-fablino">
          <h2 className="text-primary-foreground mb-3">{t("footer_cta_headline")}</h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
            {t("footer_cta_subline")}
          </p>
          <button
            onClick={() => { trackCTA("footer"); open("footer"); }}
            className="inline-block bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-full shadow-fablino-orange hover:shadow-fablino-orange-hover hover:scale-[1.03] transition-all"
          >
            {t("footer_cta_button")}
          </button>
        </div>
      </div>

      {/* Links */}
      <div className="border-t border-primary-foreground/10 py-10">
        <div className="container-fablino grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-bold mb-3">{t("footer_product")}</p>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><button onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}>{t("nav_how")}</button></li>
              <li><button onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>{t("nav_features")}</button></li>
              <li><button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>{t("nav_pricing")}</button></li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-3">{t("footer_legal")}</p>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link to="/privacy" className="hover:text-primary-foreground transition-colors">{t("footer_privacy")}</Link></li>
              <li><Link to="/terms" className="hover:text-primary-foreground transition-colors">{t("footer_terms")}</Link></li>
              <li><Link to="/impressum" className="hover:text-primary-foreground transition-colors">{t("footer_impressum")}</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-3">{t("footer_contact")}</p>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="mailto:hello@fablino.eu">hello@fablino.eu</a></li>
              <li>{t("footer_made")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10 py-5">
        <div className="container-fablino flex items-center justify-between text-xs text-primary-foreground/50">
          <div className="flex items-center gap-2">
            <FablinoMascot size={32} />
            <span className="font-black lowercase">fablino</span>
          </div>
          <span>{t("footer_copyright")}</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
