import type { SkillCategory } from '../types';

/**
 * Proficiency labels are intentionally modest:
 *  - intermediate: used in real projects
 *  - familiar: used occasionally / in coursework
 *  - learning: currently being studied
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: { fr: 'Développement frontend', en: 'Frontend Development' },
    icon: 'layout',
    skills: [
      { name: 'HTML5', level: 'intermediate' },
      { name: 'CSS3', level: 'intermediate' },
      { name: 'JavaScript', level: 'intermediate' },
      { name: 'React.js', level: 'intermediate' },
      { name: 'Tailwind CSS', level: 'intermediate' },
    ],
  },
  {
    id: 'backend',
    title: { fr: 'Développement backend', en: 'Backend Development' },
    icon: 'server',
    skills: [
      { name: 'Python', level: 'intermediate' },
      { name: 'Django', level: 'intermediate' },
      { name: 'Node.js', level: 'intermediate' },
      { name: 'Express.js', level: 'intermediate' },
      { name: 'PHP', level: 'intermediate' },
    ],
  },
  {
    id: 'databases',
    title: { fr: 'Bases de données', en: 'Databases' },
    icon: 'database',
    skills: [
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'SQLite', level: 'intermediate' },
      { name: 'MySQL', level: 'intermediate' },
    ],
  },
  {
    id: 'tools',
    title: { fr: 'Outils & technologies', en: 'Tools & Technologies' },
    icon: 'wrench',
    skills: [
      { name: 'Git', level: 'intermediate' },
      { name: 'GitHub', level: 'intermediate' },
      { name: 'VS Code', level: 'intermediate' },
      { name: 'REST APIs', level: 'intermediate' },
      { name: 'Postman', level: 'intermediate' },
    ],
  },
  {
    id: 'fundamentals',
    title: { fr: 'Fondamentaux de l’informatique', en: 'Computer Science Fundamentals' },
    icon: 'cpu',
    skills: [
      { name: { fr: 'Programmation orientée objet', en: 'Object-Oriented Programming' }, level: 'intermediate' },
      { name: { fr: 'Conception de bases de données', en: 'Database Design' }, level: 'intermediate' },
      { name: { fr: 'Résolution de problèmes', en: 'Problem Solving' }, level: 'intermediate' },
      { name: { fr: 'Structures de données & algorithmes', en: 'Data Structures & Algorithms' }, level: 'intermediate' },
      { name: { fr: 'Fondamentaux du génie logiciel', en: 'Software Engineering Fundamentals' }, level: 'intermediate' },
    ],
  },
  {
    id: 'data-ai',
    title: { fr: 'Data & intelligence artificielle', en: 'Data & Artificial Intelligence' },
    icon: 'brain',
    skills: [
      { name: 'Python', level: 'intermediate' },
      { name: 'Pandas', level: 'intermediate' },
      { name: 'NumPy', level: 'intermediate' },
      { name: { fr: 'Analyse de données', en: 'Data Analysis' }, level: 'learning' },
      { name: { fr: 'Bases du Machine Learning', en: 'Machine Learning fundamentals' }, level: 'learning' },
    ],
  },
];
