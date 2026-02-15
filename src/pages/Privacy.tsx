import LegalLayout from "@/components/LegalLayout";

const Privacy = () => (
  <LegalLayout title="Datenschutzerklärung">
    <p>Verantwortlich: [FIRMENNAME SPRL], [ADRESSE], Belgien<br />E-Mail: privacy@fablino.eu</p>

    <h2>1. Welche Daten wir erheben</h2>
    <ul className="list-disc pl-6">
      <li>E-Mail-Adresse (bei Registrierung)</li>
      <li>Vorname und Alter des Kindes (für Story-Personalisierung)</li>
      <li>Leseaktivitäten (welche Geschichten gelesen, Quiz-Ergebnisse)</li>
      <li>Spracheinstellungen</li>
    </ul>

    <h2>2. Wofür wir die Daten nutzen</h2>
    <ul className="list-disc pl-6">
      <li>Erstellung personalisierter Geschichten</li>
      <li>Fortschrittsverfolgung und Gamification</li>
      <li>Verbesserung des Produkts</li>
    </ul>

    <h2>3. Wo die Daten gespeichert werden</h2>
    <ul className="list-disc pl-6">
      <li>Supabase (EU-Region)</li>
      <li>Google Cloud (für KI-Textgenerierung)</li>
      <li>Keine Datenweitergabe an Werbetreibende</li>
    </ul>

    <h2>4. Drittanbieter</h2>
    <ul className="list-disc pl-6">
      <li>Google Gemini (Story- und Bildgenerierung)</li>
      <li>ElevenLabs (optionale Vorlesefunktion)</li>
      <li>Plausible Analytics (cookiefrei, DSGVO-konform)</li>
    </ul>

    <h2>5. Deine Rechte</h2>
    <ul className="list-disc pl-6">
      <li>Auskunft über gespeicherte Daten</li>
      <li>Löschung aller Daten</li>
      <li>Export deiner Daten</li>
      <li>Widerruf der Einwilligung</li>
    </ul>
    <p>Kontakt: privacy@fablino.eu</p>

    <h2>6. Kinder</h2>
    <ul className="list-disc pl-6">
      <li>Wir erheben Daten von Kindern nur mit Einverständnis der Eltern</li>
      <li>Eltern können jederzeit die Löschung aller Kinderdaten beantragen</li>
    </ul>

    <h2>7. Cookies</h2>
    <ul className="list-disc pl-6">
      <li>Wir nutzen keine Tracking-Cookies</li>
      <li>Plausible Analytics ist cookiefrei</li>
      <li>Nur technisch notwendige Session-Cookies</li>
    </ul>

    <p className="text-sm">Stand: Februar 2026</p>
  </LegalLayout>
);

export default Privacy;
