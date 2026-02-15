import { trackCTA, getCTALink } from "@/hooks/useScrollAnimation";

const flags = ["🇩🇪", "🇫🇷", "🇬🇧", "🇪🇸", "🇳🇱", "🇮🇹", "🇵🇱", "🇹🇷", "🇭🇺", "🇧🇬", "🇱🇹", "🇵🇹", "🇧🇦"];

const LanguagesSection = () => (
  <section data-section="languages" className="section-padding bg-fablino-teal-dark text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-fablino-teal-dark to-fablino-teal opacity-80" />
    <div className="container-fablino relative z-10 text-center">
      <h2 className="text-primary-foreground mb-4">
        Kindergeschichten in der Sprache eurer Familie
      </h2>
      <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
        Litauisch, Ungarisch, Katalanisch, Türkisch, Bulgarisch, Polnisch, Portugiesisch —
        Fablino erstellt Geschichten in Sprachen, für die es vor Ort kaum Kinderbücher gibt.
        <br />
        <span className="font-bold text-primary-foreground">Damit dein Kind auch in der Familiensprache liest.</span>
      </p>

      {/* Flags */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {flags.map((flag, i) => (
          <span
            key={i}
            className="text-4xl animate-fade-in-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {flag}
          </span>
        ))}
        <span className="text-2xl text-primary-foreground/60 self-center font-bold">und mehr…</span>
      </div>

      <a
        href={getCTALink("languages")}
        onClick={() => trackCTA("languages")}
        className="inline-block bg-primary-foreground text-secondary font-bold px-8 py-3.5 rounded-full hover:scale-[1.03] transition-all shadow-fablino-lg"
      >
        Geschichte in deiner Sprache erstellen →
      </a>
    </div>
  </section>
);

export default LanguagesSection;
