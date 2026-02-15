const testimonials = [
  {
    quote: "Seit Fablino fragt mein Sohn jeden Abend nach einer neuen Geschichte. Das hatten wir mit keinem Buch geschafft.",
    author: "Sarah, Mama von Noah (7)",
  },
  {
    quote: "Endlich eine App die Geschichten in unserer Familiensprache erstellt. Meine Tochter liest jetzt auch auf Polnisch.",
    author: "Katarzyna, Mama von Zofia (8)",
  },
  {
    quote: "Die Geschichten sind erstaunlich gut. Mein Kind erkennt sich selbst in der Hauptfigur und will immer weiterlesen.",
    author: "Thomas, Papa von Lina (6)",
  },
];

const SocialProofSection = () => (
  <section data-section="social-proof" className="section-padding bg-background">
    <div className="container-fablino">
      <h2 className="text-center mb-10">Was Eltern über Fablino sagen</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="fade-in-section bg-card rounded-2xl p-7 shadow-fablino border-l-4 border-primary hover-lift"
          >
            <p className="italic leading-relaxed mb-4 text-foreground">"{t.quote}"</p>
            <p className="text-sm font-bold text-muted-foreground">— {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
