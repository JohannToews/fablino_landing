import FablinoMascot from "./FablinoMascot";
import { trackCTA, getCTALink } from "@/hooks/useScrollAnimation";

const features = [
  "Unbegrenzte Geschichten",
  "14+ Sprachen",
  "Quizzes & Gamification",
  "Personalisierte Bilder",
  "Lernthemen wählbar",
  "Bis zu 3 Kinderprofile",
];

const PricingSection = () => (
  <section id="pricing" data-section="pricing" className="section-padding bg-background">
    <div className="container-fablino">
      <h2 className="text-center mb-8">Einfach und transparent</h2>

      {/* Beta banner */}
      <div className="fade-in-section bg-fablino-orange-bg border-2 border-primary rounded-xl p-5 text-center max-w-md mx-auto mb-8 flex items-center gap-3 justify-center">
        <FablinoMascot size={48} />
        <div className="text-left">
          <p className="font-extrabold text-foreground text-lg">Beta-Tester? Jetzt komplett kostenlos!</p>
          <p className="text-sm text-muted-foreground">Teste 14 Tage alle Features. Keine Kreditkarte nötig.</p>
        </div>
      </div>

      {/* Pricing card */}
      <div className="fade-in-section max-w-sm mx-auto bg-card rounded-3xl p-10 shadow-fablino-lg border-2 border-fablino-orange-light text-center">
        <p className="font-black text-foreground text-lg mb-1">Fablino</p>
        <div className="mb-1">
          <span className="text-5xl font-black text-foreground">4,99€</span>
          <span className="text-muted-foreground"> / Monat</span>
        </div>
        <p className="text-sm text-muted-foreground mb-6">oder 39,99€ / Jahr (spar 33%)</p>

        <ul className="text-left space-y-3 mb-8">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2.5 text-foreground">
              <span className="text-fablino-success font-bold">✓</span>
              {f}
            </li>
          ))}
        </ul>

        <a
          href={getCTALink("pricing")}
          onClick={() => trackCTA("pricing")}
          className="block bg-primary text-primary-foreground font-bold text-lg py-3.5 rounded-full shadow-fablino-orange hover:shadow-fablino-orange-hover hover:scale-[1.03] transition-all"
        >
          Kostenlos ausprobieren
        </a>

        <div className="mt-5 bg-fablino-orange-bg rounded-lg px-4 py-3">
          <p className="text-sm font-bold text-foreground">🎉 Beta-Angebot</p>
          <p className="text-sm text-muted-foreground">Erste 3 Monate nur <span className="font-bold text-primary">2,99€/Monat</span></p>
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Jederzeit kündbar. Keine versteckten Kosten.
      </p>
    </div>
  </section>
);

export default PricingSection;
