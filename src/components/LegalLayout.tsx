import { Link } from "react-router-dom";

const LegalLayout = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    <nav className="bg-card shadow-fablino">
      <div className="container-fablino flex items-center justify-between h-14 md:h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🦊</span>
          <span className="text-xl font-black lowercase text-primary">fablino</span>
        </Link>
        <Link to="/" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
          ← Zurück
        </Link>
      </div>
    </nav>
    <main className="container-fablino py-8 md:py-12 max-w-3xl">
      <h1 className="mb-5 md:mb-8">{title}</h1>
      <div className="prose prose-lg max-w-none space-y-6 text-foreground [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:text-muted-foreground [&_li]:text-muted-foreground [&_ul]:space-y-1">
        {children}
      </div>
    </main>
  </div>
);

export default LegalLayout;
