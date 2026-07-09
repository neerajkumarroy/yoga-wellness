"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import en from "../lib/locales/en.json";
import hi from "../lib/locales/hi.json";

type Lang = "en" | "hi";
const dictionaries: Record<Lang, Record<string, string>> = { en, hi };

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("yw-lang") as Lang | null;
    if (stored) setLangState(stored);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("yw-lang", next);
  };

  const t = (key: string) => dictionaries[lang][key] || dictionaries.en[key] || key;

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
