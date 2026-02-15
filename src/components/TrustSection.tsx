const badges = [
  { icon: "🇪🇺", title: "Daten in Europa", text: "Gehostet in der EU. DSGVO-konform." },
  { icon: "🔒", title: "Privatsphäre geschützt", text: "Keine Daten an Dritte verkauft. Niemals." },
  { icon: "👶", title: "Kindersicher", text: "Keine Werbung, keine Tracker, keine In-App-Käufe." },
];

const TrustSection = () => (
  <section data-section="trust" className="section-padding bg-fablino-light-gray">
    <div className="container-fablino">
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {badges.map((b, i) => (
          <div key={i} className="fade-in-section bg-card rounded-2xl p-7 text-center shadow-fablino hover-lift">
            <div className="text-5xl mb-3">{b.icon}</div>
            <h3 className="mb-2">{b.title}</h3>
            <p className="text-sm">{b.text}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-sm max-w-2xl mx-auto text-muted-foreground">
        Fablino wurde in Belgien entwickelt, für europäische Familien. Wir nutzen künstliche Intelligenz um
        Geschichten zu erstellen — aber wir verkaufen niemals persönliche Daten.
      </p>
    </div>
  </section>
);

export default TrustSection;
