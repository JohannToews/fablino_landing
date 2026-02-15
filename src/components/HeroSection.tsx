import FablinoMascot from "./FablinoMascot";
import { trackCTA, getCTALink } from "@/hooks/useScrollAnimation";

const HeroSection = () => (
  <section data-section="hero" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 overflow-hidden bg-background">
    {/* Decorative blobs */}
    <div className="absolute top-10 right-0 w-72 h-72 rounded-full bg-fablino-orange-bg opacity-60 blur-3xl -z-10" />
    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-fablino-warm-beige opacity-50 blur-3xl -z-10" />

    <div className="container-fablino grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      {/* Text */}
      <div className="text-center md:text-left">
        <h1 className="mb-5 animate-fade-in-up">
          Geschichten, in denen dein Kind der{" "}
          <span className="text-primary">Held</span> ist
        </h1>
        <p className="mb-8 max-w-lg mx-auto md:mx-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Fablino erstellt personalisierte Leseabenteuer für Kinder von 6–10.
          Mit dem Namen deines Kindes, seinen Interessen und in seiner Sprache.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href={getCTALink("hero")}
            onClick={() => trackCTA("hero")}
            className="inline-block bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-full shadow-fablino-orange hover:shadow-fablino-orange-hover hover:scale-[1.03] transition-all"
          >
            Jetzt kostenlos ausprobieren →
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Keine Kreditkarte nötig · In 60 Sekunden zur ersten Geschichte
          </p>
        </div>
      </div>

      {/* Phone mockup */}
      <div className="flex justify-center relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="relative">
          {/* Phone frame */}
          <div className="w-[260px] sm:w-[280px] h-[480px] sm:h-[520px] bg-card rounded-[2rem] border-[3px] border-fablino-light-gray shadow-fablino-xl overflow-hidden flex flex-col">
            {/* Notch */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-24 h-5 bg-fablino-light-gray rounded-full" />
            </div>
            {/* Screen content */}
            <div className="flex-1 px-5 pb-5 flex flex-col justify-center">
              <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">FABLINO</p>
              <h3 className="text-lg font-extrabold mb-4 leading-snug">Emmas großes Abenteuer im Zauberwald</h3>
              <p className="text-sm leading-relaxed">
                Emma lief durch den dichten Wald. Die Bäume waren so hoch,
                dass sie den Himmel kaum sehen konnte. Plötzlich hörte sie ein leises Flüstern…
              </p>
              <div className="mt-4 flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="text-fablino-star text-lg">★</span>
                ))}
              </div>
            </div>
          </div>
          {/* Mascot overlapping */}
          <div className="absolute -bottom-6 -right-6 animate-float">
            <FablinoMascot size={110} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
