export type Lang = 'fr' | 'en';
export type Theme = 'dark' | 'light';

/** A string available in every supported language. */
export type Localized = Record<Lang, string>;

export type Proficiency = 'intermediate' | 'familiar' | 'learning';

export interface Skill {
  name: Localized | string;
  level: Proficiency;
}

export interface SkillCategory {
  id: string;
  title: Localized;
  icon: 'layout' | 'server' | 'database' | 'wrench' | 'cpu' | 'brain';
  skills: Skill[];
}

export type ProjectStatus = 'live' | 'in-progress';

export interface Project {
  id: string;
  name: string;
  tagline: Localized;
  description: Localized;
  objective: Localized;
  status: ProjectStatus;
  tech: string[];
  /** Features confirmed in the project's code. */
  implemented: Localized[];
  /** Features on the roadmap, not yet built. */
  planned: Localized[];
  repoUrl: string | null;
  demoUrl: string | null;
  visual: {
    icon: 'graduation' | 'compass' | 'library' | 'chart';
    hue: string;
  };
}

export interface Experience {
  id: string;
  title: Localized | string;
  role: Localized;
  badge: Localized;
  highlight: boolean;
  description: Localized;
  points: Localized[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: Localized;
  /** TODO: fill in from the certificate (e.g. "2025-11"). null hides it. */
  date: string | null;
  /** TODO: verification link. null hides the button. */
  credentialUrl: string | null;
}

export interface LanguageItem {
  id: string;
  name: Localized;
  level: Localized;
  detail: Localized;
  /** CEFR position on a 6-step scale (A1=1 … C2=6). */
  cefr: number;
  native: boolean;
}
