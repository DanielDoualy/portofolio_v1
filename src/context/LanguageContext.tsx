import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { dictionaries, type Dictionary } from '../i18n';
import type { Lang, Localized } from '../types';

const STORAGE_KEY = 'dd-lang';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  /** UI strings for the active language. */
  t: Dictionary;
  /** Pick the active-language value from a data-file entry. */
  l: (value: Localized | string) => string;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'fr' || stored === 'en') return stored;
  } catch {
    // Storage unavailable (private mode): fall back to the default.
  }
  return 'fr';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    const t = dictionaries[lang];
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(() => setLangState((p) => (p === 'fr' ? 'en' : 'fr')), []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: dictionaries[lang],
      l: (v) => (typeof v === 'string' ? v : v[lang]),
    }),
    [lang, setLang, toggleLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
