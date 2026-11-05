import SectionTitle from '../components/SectionTitle';
import SkillCard, { LEVEL_STYLES } from '../components/SkillCard';
import Reveal from '../components/Reveal';
import { skillCategories } from '../data/skills';
import { useLanguage } from '../hooks/useLanguage';
import type { Proficiency } from '../types';

// Legend lists only the levels actually used in the data.
const LEVELS = (['intermediate', 'familiar', 'learning'] as Proficiency[]).filter((level) =>
  skillCategories.some((c) => c.skills.some((s) => s.level === level)),
);

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section border-y border-line/60 bg-surface/30" aria-labelledby="skills-title">
      <div className="container-page">
        <SectionTitle id="skills" eyebrow={t.skills.eyebrow} title={t.skills.title} subtitle={t.skills.subtitle} />

        <Reveal className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted">
          <span className="font-mono uppercase tracking-wider text-subtle">{t.skills.legend}</span>
          {LEVELS.map((level) => (
            <span key={level} className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${LEVEL_STYLES[level].dot}`} aria-hidden="true" />
              {t.skills.levels[level]}
            </span>
          ))}
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.id} delay={(i % 3) * 80}>
              <SkillCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
