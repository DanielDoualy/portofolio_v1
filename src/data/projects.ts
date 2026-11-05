import type { Project } from '../types';

/**
 * "implemented" lists only what exists in each repository today.
 * "planned" is the roadmap. Keep the two separate when updating.
 */
export const projects: Project[] = [
  {
    id: 'educhat',
    name: 'EduChat',
    tagline: {
      fr: 'Plateforme éducative avec assistance intelligente',
      en: 'Educational platform with intelligent assistance',
    },
    description: {
      fr: 'Une plateforme EdTech qui place un assistant conversationnel au cœur de l’apprentissage, pour rendre l’accès au savoir plus simple et plus interactif.',
      en: 'An EdTech platform that puts a conversational assistant at the heart of learning, to make knowledge more accessible and interactive.',
    },
    objective: {
      fr: 'Rendre l’apprentissage plus accessible : poser une question et obtenir une explication claire, à son rythme.',
      en: 'Make learning more accessible: ask a question and get a clear explanation, at your own pace.',
    },
    status: 'live',
    tech: ['Next.js', 'React', 'Django', 'Python', 'Axios'],
    implemented: [
      { fr: 'Pages d’inscription et de connexion', en: 'Sign-up and login pages' },
      { fr: 'Interface de discussion (fenêtre de chat)', en: 'Chat interface (conversation window)' },
      { fr: 'Socle backend Django initialisé', en: 'Django backend foundation set up' },
    ],
    planned: [
      { fr: 'Intégration de l’assistant intelligent via le backend', en: 'Intelligent assistant integration through the backend' },
      { fr: 'Authentification reliée à l’API Django', en: 'Authentication connected to the Django API' },
    ],
    repoUrl: 'https://github.com/DanielDoualy/EduChat',
    demoUrl: null,
    visual: { icon: 'graduation', hue: '262' },
  },
  {
    id: 'scholarpath',
    name: 'ScholarPath',
    tagline: {
      fr: 'Accompagnement et orientation académique',
      en: 'Academic guidance and orientation',
    },
    description: {
      fr: 'Une plateforme centrée sur l’étudiant qui l’accompagne dans son parcours : suivi académique, analyse des résultats et recommandations d’orientation.',
      en: 'A student-centered platform that supports learners throughout their journey: academic tracking, results analysis and orientation recommendations.',
    },
    objective: {
      fr: 'Simplifier les décisions d’orientation en s’appuyant sur le parcours réel de chaque étudiant.',
      en: 'Simplify orientation decisions by building on each student’s actual academic record.',
    },
    status: 'live',
    tech: ['React', 'Vite', 'Django', 'Django REST Framework', 'PostgreSQL', 'Groq API'],
    implemented: [
      { fr: 'Authentification (inscription / connexion)', en: 'Authentication (sign-up / login)' },
      { fr: 'Tableau de bord et historique académique', en: 'Dashboard and academic history' },
      { fr: 'Analyse des résultats', en: 'Results analysis' },
      { fr: 'Recommandations d’orientation assistées par IA (Groq)', en: 'AI-assisted orientation recommendations (Groq)' },
      { fr: 'Documents, notifications et profil', en: 'Documents, notifications and profile' },
      { fr: 'Documentation de l’API (Swagger)', en: 'API documentation (Swagger)' },
    ],
    planned: [],
    repoUrl: 'https://github.com/DanielDoualy/ScholarPath',
    demoUrl: null,
    visual: { icon: 'compass', hue: '220' },
  },
  {
    id: 'e-miage-gi',
    name: 'E-MIAGE-GI',
    tagline: {
      fr: 'Bibliothèque virtuelle de la communauté MIAGE',
      en: 'Virtual library for the MIAGE community',
    },
    description: {
      fr: 'Une plateforme de partage de ressources pédagogiques — cours, TD/TP, anciens sujets — pour les étudiants de la filière MIAGE, de la L1 au M2.',
      en: 'A platform for sharing learning resources — lectures, tutorials, past exams — for MIAGE students from first year to master’s level.',
    },
    objective: {
      fr: 'Centraliser les ressources de la filière pour que chaque étudiant trouve facilement ce dont il a besoin.',
      en: 'Centralize the program’s resources so every student can easily find what they need.',
    },
    status: 'live',
    tech: ['Django', 'Python', 'PostgreSQL', 'Tailwind CSS', 'Cloudflare R2', 'Render'],
    implemented: [
      { fr: 'Bibliothèque organisée par niveau (L1 → M2), UE et ECUE', en: 'Library organized by level (L1 → M2), course units and modules' },
      { fr: 'Classement par type : cours, TD/TP, examens', en: 'Sorting by type: lectures, tutorials, exams' },
      { fr: 'Commandes d’import automatisé des documents', en: 'Automated document import commands' },
      { fr: 'Stockage des fichiers sur Cloudflare R2, base PostgreSQL', en: 'File storage on Cloudflare R2, PostgreSQL database' },
      { fr: 'Déployé en production sur Render', en: 'Deployed to production on Render' },
    ],
    planned: [],
    repoUrl: 'https://github.com/Dani-code17/EMIAGE_GI',
    demoUrl: 'https://emiage-gi.onrender.com',
    visual: { icon: 'library', hue: '190' },
  },
  {
    id: 'student-analytics',
    name: 'Student Analytics',
    tagline: {
      fr: 'Gestion des données étudiantes et analyse académique',
      en: 'Student data management and academic analytics',
    },
    description: {
      fr: 'Une application qui organise les données académiques — étudiants, matières, semestres, notes — et les analyse pour mieux comprendre les performances.',
      en: 'An application that organizes academic data — students, subjects, semesters, grades — and analyzes it to better understand performance.',
    },
    objective: {
      fr: 'Mettre en pratique le développement backend, la modélisation de bases de données et l’analyse de données.',
      en: 'Put backend development, database modeling and data analysis into practice.',
    },
    status: 'in-progress',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Python', 'Pandas', 'Matplotlib'],
    implemented: [
      { fr: 'API REST (CRUD) : étudiants, matières, semestres, notes', en: 'REST API (CRUD): students, subjects, semesters, grades' },
      { fr: 'Modèle relationnel PostgreSQL', en: 'Relational PostgreSQL schema' },
      { fr: 'Chargement et analyse des données avec Pandas', en: 'Data loading and analysis with Pandas' },
      { fr: 'Génération de graphiques (Matplotlib)', en: 'Chart generation (Matplotlib)' },
    ],
    planned: [
      { fr: 'Tableau de bord d’analyse intégré à l’interface web', en: 'Analytics dashboard built into the web interface' },
    ],
    repoUrl: 'https://github.com/DanielDoualy/Student-Analytics',
    demoUrl: null,
    visual: { icon: 'chart', hue: '160' },
  },
];
