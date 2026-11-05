import type { Certification } from '../types';

/**
 * TODO: add `date` (e.g. "2025-11") and `credentialUrl` for each certificate.
 * Both are hidden in the UI while they are null.
 */
export const certifications: Certification[] = [
  {
    id: 'cs50w',
    title: "CS50's Web Programming with Python and JavaScript",
    issuer: 'Harvard University',
    description: {
      fr: 'Conception d’applications web avec Python, Django, JavaScript et SQL.',
      en: 'Designing web applications with Python, Django, JavaScript and SQL.',
    },
    date: null,
    credentialUrl: null,
  },
  {
    id: 'cs50p',
    title: "CS50's Introduction to Programming with Python",
    issuer: 'Harvard University',
    description: {
      fr: 'Fondamentaux de la programmation en Python : fonctions, exceptions, tests, POO.',
      en: 'Python programming fundamentals: functions, exceptions, testing, OOP.',
    },
    date: null,
    credentialUrl: null,
  },
  {
    id: 'cisco-networking',
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    description: {
      fr: 'Principes des réseaux : adressage, protocoles et communication entre équipements.',
      en: 'Networking principles: addressing, protocols and device communication.',
    },
    date: null,
    credentialUrl: null,
  },
  {
    id: 'cisco-ai',
    title: 'Apply AI: Analyze Customer Reviews',
    issuer: 'Cisco Networking Academy',
    description: {
      fr: 'Application de l’IA à l’analyse d’avis clients.',
      en: 'Applying AI to the analysis of customer reviews.',
    },
    date: null,
    credentialUrl: null,
  },
  {
    id: 'efset',
    title: 'EF SET English Certificate',
    issuer: 'EF Standard English Test',
    description: {
      fr: 'Niveau d’anglais certifié : B1.',
      en: 'Certified English level: B1.',
    },
    date: null,
    credentialUrl: null,
  },
];
