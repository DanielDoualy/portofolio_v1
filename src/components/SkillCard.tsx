import { Brain, Cpu, Database, LayoutTemplate, Server, Wrench, type LucideIcon } from 'lucide-react';
import type { Proficiency, SkillCategory } from '../types';
import { useLanguage } from '../hooks/useLanguage';

const ICONS: Record<SkillCategory['icon'], LucideIcon> = {
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  wrench: Wrench,
  cpu: Cpu,
  brain: Brain,
};

/** Dot + text styles per proficiency level (no fake percentages). */
export const LEVEL_STYLES: Record<Proficiency, { dot: string; text: string }> = {
  intermediate: { dot: 'bg-accent', text: 'text-accent' },
  familiar: { dot: 'bg-accent2/70', text: 'text-accent2' },
  learning: { dot: 'border border-dashed border-warn bg-transparent', text: 'text-warn' },
};

export default function SkillCard({ category }: { category: SkillCategory }) {
  const { t, l } = useLanguage();
  const Icon = ICONS[category.icon];

  return (
    <article className="card card-hover h-full p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-elevated text-accent">
          <Icon size={19} aria-hidden="true" />
        </span>
        <h3 className="font-semibold tracking-tight text-fg">{l(category.title)}</h3>
      </div>
      <ul className="space-y-1">
        {category.skills.map((skill) => {
          const style = LEVEL_STYLES[skill.level];
          const name = l(skill.name);
          return (
            <li key={name} className="flex items-center justify-between gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-elevated/70">
              <span className="text-sm text-fg">{name}</span>
              <span className={`flex shrink-0 items-center gap-2 font-mono text-[11px] ${style.text}`}>
                <span className={`h-2 w-2 rounded-full ${style.dot}`} aria-hidden="true" />
                {t.skills.levels[skill.level]}
              </span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
