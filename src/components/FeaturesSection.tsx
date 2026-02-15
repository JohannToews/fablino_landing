const features = [
  {
    icon: "🌍",
    title: "14+ Sprachen",
    text: "Deutsch, Französisch, Englisch, Spanisch, Polnisch, Türkisch, Ungarisch und viele mehr. Perfekt für mehrsprachige Familien.",
  },
  {
    icon: "⭐",
    title: "Lesen wird zum Spiel",
    text: "Sterne sammeln, Level aufsteigen, Quizzes bestehen. Dein Kind will von selbst weiterlesen.",
  },
  {
    icon: "🌱",
    title: "Mehr als nur Geschichten",
    text: "Jede Geschichte fördert spielerisch wichtige Fähigkeiten — Empathie, Geduld, Selbstvertrauen. Du wählst die Lernthemen.",
  },
  {
    icon: "🛡️",
    title: "100% kindersicher",
    text: "Keine Werbung. Keine In-App-Käufe. Keine Tracker. Altersgerechte Inhalte. Du bestimmst was dein Kind liest.",
  },
];

const FeaturesSection = () => (
  <section id="features" data-section="features" className="section-padding bg-background">
    <div className="container-fablino">
      <h2 className="text-center mb-12">Warum Eltern Fablino lieben</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div key={i} className="fade-in-section bg-accent rounded-2xl p-8 text-center hover-lift">
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="mb-2">{f.title}</h3>
            <p className="text-sm">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
