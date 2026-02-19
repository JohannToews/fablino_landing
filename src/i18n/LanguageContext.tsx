import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Language } from "./translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultContext: LanguageContextType = {
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2);
    if (["de", "fr", "es"].includes(browserLang)) {
      setLang(browserLang as Language);
    }
  }, []);

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
