const AppPreviewSection = () => (
  <section data-section="app-preview" className="section-padding bg-fablino-light-gray">
    <div className="container-fablino text-center">
      <h2 className="mb-3">Ein Leseerlebnis wie ein echtes Kinderbuch</h2>
      <p className="max-w-xl mx-auto mb-10">
        Personalisierte Illustrationen, Seite für Seite — direkt auf dem Tablet oder Handy.
      </p>

      {/* Tablet mockup */}
      <div className="fade-in-section inline-block">
        <div className="max-w-[800px] mx-auto bg-fablino-dark rounded-3xl p-3 sm:p-4 shadow-fablino-xl">
          <div className="bg-accent rounded-2xl aspect-[16/10] flex items-center justify-center">
            <div className="text-center p-10">
              <div className="text-5xl mb-4">📖✨</div>
              <h3 className="mb-2">Screenshot kommt bald</h3>
              <p className="text-sm text-muted-foreground">Immersive Reading Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AppPreviewSection;
