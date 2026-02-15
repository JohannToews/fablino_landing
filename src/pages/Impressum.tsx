import LegalLayout from "@/components/LegalLayout";

const Impressum = () => (
  <LegalLayout title="Impressum">
    <p>
      [FIRMENNAME] SPRL<br />
      [Straße und Hausnummer]<br />
      [PLZ Ort]<br />
      Belgien
    </p>
    <p>
      Unternehmensregisternummer: [BCE/KBO-Nummer]<br />
      USt-IdNr: [falls vorhanden]
    </p>
    <p>Kontakt: hello@fablino.eu</p>
    <p>Verantwortlich für den Inhalt: [Dein Name]</p>
  </LegalLayout>
);

export default Impressum;
