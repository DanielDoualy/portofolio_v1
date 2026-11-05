import type { LanguageItem } from '../types';

export const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export const languages: LanguageItem[] = [
  {
    id: 'fr',
    name: { fr: 'Français', en: 'French' },
    level: { fr: 'Courant / niveau natif', en: 'Fluent / native-level' },
    detail: {
      fr: 'Langue d’études et de communication au quotidien.',
      en: 'Language of study and everyday communication.',
    },
    cefr: 6,
    native: true,
  },
  {
    id: 'en',
    name: { fr: 'Anglais', en: 'English' },
    level: { fr: 'B1 — Intermédiaire', en: 'B1 — Intermediate' },
    detail: {
      fr: 'Certifié EF SET. Lecture de documentation technique et communication écrite et orale.',
      en: 'EF SET certified. Reading technical documentation, written and spoken communication.',
    },
    cefr: 3,
    native: false,
  },
];
