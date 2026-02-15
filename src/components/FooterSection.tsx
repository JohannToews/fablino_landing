import { Link } from "react-router-dom";
import FablinoMascot from "./FablinoMascot";
import { trackCTA, getCTALink } from "@/hooks/useScrollAnimation";

const FooterSection = () => (
  <footer data-section="footer" className="bg-fablino-dark text-primary-foreground">
    {/* Final CTA */}
    <div className="section-padding text-center">
      <div className="container-fablino">
        <h2 className="text-primary-foreground mb-3">Bereit für die erste Geschichte?</h2>
        <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
          In 60 Sekunden erstellt Fablino ein personalisiertes Leseabenteuer für dein Kind.
        </p>
        <a
          href={getCTALink("footer")}
          onClick={() => trackCTA("footer")}
          className="inline-block bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-full shadow-fablino-orange hover:shadow-fablino-orange-hover hover:scale-[1.03] transition-all"
        >
          Jetzt kostenlos ausprobieren →
        </a>
      </div>
    </div>

    {/* Links */}
    <div className="border-t border-primary-foreground/10 py-10">
      <div className="container-fablino grid sm:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-bold mb-3">Produkt</p>
          <ul className="space-y-2 text-primary-foreground/70">
            <li><button onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}>So funktioniert's</button></li>
            <li><button onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>Features</button></li>
            <li><button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>Preise</button></li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-3">Legal</p>
          <ul className="space-y-2 text-primary-foreground/70">
            <li><Link to="/privacy" className="hover:text-primary-foreground transition-colors">Datenschutz</Link></li>
            <li><Link to="/terms" className="hover:text-primary-foreground transition-colors">AGB</Link></li>
            <li><Link to="/impressum" className="hover:text-primary-foreground transition-colors">Impressum</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-3">Kontakt</p>
          <ul className="space-y-2 text-primary-foreground/70">
            <li><a href="mailto:hello@fablino.eu">hello@fablino.eu</a></li>
            <li>Made with 🦊 in Belgium</li>
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
        <span>© 2026 Fablino. Alle Rechte vorbehalten.</span>
      </div>
    </div>
  </footer>
);

export default FooterSection;
