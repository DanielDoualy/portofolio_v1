import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'miage-25',
    title: { fr: 'Hackathon des 25 ans de la MIAGE', en: 'MIAGE 25th Anniversary Hackathon' },
    role: { fr: 'Équipe lauréate', en: 'Winning team' },
    badge: { fr: 'Vainqueur', en: 'Winner' },
    highlight: true,
    description: {
      fr: 'Vainqueur du hackathon organisé pour célébrer le 25ᵉ anniversaire de la filière MIAGE. Une compétition où il fallait concevoir et présenter une solution en équipe, dans un temps limité.',
      en: 'Winner of the hackathon held to celebrate the 25th anniversary of the MIAGE program — a competition to design and present a solution as a team, against the clock.',
    },
    points: [
      { fr: 'Collaboration et répartition des rôles en équipe', en: 'Team collaboration and role distribution' },
      { fr: 'Créativité technique', en: 'Technical creativity' },
      { fr: 'Résolution de problèmes', en: 'Problem-solving' },
      { fr: 'Livrer une solution sous contrainte de temps', en: 'Delivering a solution under time constraints' },
    ],
  },
  {
    id: 'abihack',
    title: 'AbiHack',
    role: { fr: 'Participant', en: 'Participant' },
    badge: { fr: 'Hackathon IA panafricain', en: 'Pan-African AI hackathon' },
    highlight: false,
    description: {
      fr: 'Participation à AbiHack, un hackathon panafricain consacré à l’intelligence artificielle et soutenu par Google. Une immersion dans des problématiques concrètes où l’IA peut apporter des réponses.',
      en: 'Took part in AbiHack, a pan-African hackathon focused on Artificial Intelligence and sponsored by Google — a deep dive into real problems where AI can make a difference.',
    },
    points: [
      { fr: 'Innovation et créativité technologique', en: 'Innovation and technological creativity' },
      { fr: 'Résolution collaborative de problèmes', en: 'Collaborative problem-solving' },
      { fr: 'Confrontation à des défis liés à l’IA', en: 'Exposure to AI-related challenges' },
      { fr: 'Travail d’équipe', en: 'Teamwork' },
    ],
  },
];
