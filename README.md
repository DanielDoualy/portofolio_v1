# Portfolio — Daniel DOUALY

Portfolio personnel bilingue (FR/EN), statique, construit avec **React 18 + Vite + TypeScript + Tailwind CSS + Lucide React**.
Aucun backend, aucune base de données, aucune API externe.

## Démarrer

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # vérification TypeScript + build dans dist/
npm run preview   # sert le build localement
```

## Modifier le contenu

Tout le contenu est dans des fichiers de données — pas besoin de toucher aux composants.

| Fichier | Contenu |
|---|---|
| `src/data/profile.ts` | Email, GitHub, LinkedIn, localisation, CV |
| `src/data/projects.ts` | Projets (fonctionnalités **réalisées** vs **prévues**, liens) |
| `src/data/skills.ts` | Compétences et niveaux (`intermediate` / `familiar` / `learning`) |
| `src/data/experiences.ts` | Hackathons et réussites |
| `src/data/certifications.ts` | Certifications (dates et liens de vérification à compléter) |
| `src/data/languages.ts` | Langues |
| `src/i18n/fr.ts`, `src/i18n/en.ts` | Tous les textes de l'interface (bio, vision, boutons…) |

Les champs localisés s'écrivent `{ fr: '…', en: '…' }`. La langue par défaut est le français ;
le choix de langue et de thème est mémorisé dans `localStorage`.

## À compléter

- [x] **CV** : `public/assets/Daniel_Doualy_CV.pdf` (pour le mettre à jour, remplacer ce fichier en gardant le même nom).
- [ ] **Certifications** : renseigner `date` (ex. `"2025-11"`) et `credentialUrl` — ils restent masqués tant qu'ils valent `null`.
- [ ] **Démos** : ajouter `demoUrl` pour EduChat, ScholarPath et Student Analytics quand ils seront déployés.
- [ ] **Photo** (optionnel) : aucun portrait n'est utilisé pour l'instant.
- [ ] **Image Open Graph** (optionnel) : ajouter `public/og-image.png` (1200×630) et la balise `og:image` dans `index.html`.

## Structure

```
src/
├── components/   Navbar, Footer, ProjectCard, SkillCard, CertificationCard, LanguageCard, SectionTitle, Reveal, CvButton
├── sections/     Hero, About, Skills, Projects, Experience, Education (+ Certifications), Languages, Vision, Contact
├── data/         Contenu structuré
├── i18n/         fr.ts, en.ts
├── context/      LanguageContext, ThemeContext
├── hooks/        useLanguage, useTheme, useReveal, useActiveSection
├── App.tsx
└── main.tsx
```

## Déploiement

**Vercel** : importer le dépôt — Vercel détecte Vite (build `npm run build`, sortie `dist`).

**GitHub Pages** : pousser sur `main`, puis dans *Settings → Pages*, choisir *Source : GitHub Actions*.
Le workflow `.github/workflows/deploy.yml` construit et publie le site. Les chemins sont relatifs
(`base: './'`), donc le site fonctionne aussi depuis `https://<user>.github.io/<repo>/`.
