import { ArrowUpRight, BarChart3, Check, Circle, Compass, Github, GraduationCap, Library, Target, type LucideIcon } from 'lucide-react';
import type { Project } from '../types';
import { useLanguage } from '../hooks/useLanguage';

const ICONS: Record<Project['visual']['icon'], LucideIcon> = {
  graduation: GraduationCap,
  compass: Compass,
  library: Library,
  chart: BarChart3,
};

/** Abstract, code-free illustration of the project (no fake screenshots). */
function ProjectVisual({ project }: { project: Project }) {
  const Icon = ICONS[project.visual.icon];
  const hue = project.visual.hue;
  return (
    <div
      className="relative h-44 overflow-hidden rounded-xl border border-line"
      style={{
        background: `radial-gradient(120% 90% at 85% 0%, hsl(${hue} 85% 62% / 0.28), transparent 60%),
                     radial-gradient(90% 80% at 0% 100%, hsl(${hue} 80% 55% / 0.14), transparent 60%),
                     rgb(var(--elevated))`,
      }}
      role="img"
      aria-label={`${project.name} — ${project.tech.slice(0, 3).join(', ')}`}
    >
      <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
      {/* Mock window */}
      <div className="absolute bottom-0 left-6 right-6 top-8 rounded-t-lg border border-b-0 border-line bg-surface/80 p-3 backdrop-blur transition-transform duration-500 group-hover:-translate-y-1.5" aria-hidden="true">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
        </div>
        <div className="flex gap-3">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
            style={{ background: `hsl(${hue} 85% 60% / 0.16)`, color: `hsl(${hue} 85% 66%)` }}
          >
            <Icon size={22} />
          </span>
          <div className="flex-1 space-y-2 pt-1">
            <div className="h-2 w-3/5 rounded-full bg-fg/15" />
            <div className="h-2 w-4/5 rounded-full bg-fg/10" />
            <div className="h-2 w-2/5 rounded-full bg-fg/10" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[0.5, 0.8, 0.35].map((h, i) => (
            <div key={i} className="flex h-10 items-end rounded-md bg-fg/[0.04] p-1.5">
              <div className="w-full rounded-sm" style={{ height: `${h * 100}%`, background: `hsl(${hue} 85% 62% / 0.45)` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const { t, l } = useLanguage();
  const live = project.status === 'live';

  return (
    <article className="card card-hover group flex h-full flex-col p-5 sm:p-6" aria-labelledby={`${project.id}-name`}>
      <ProjectVisual project={project} />

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <h3 id={`${project.id}-name`} className="text-xl font-semibold tracking-tight text-fg">
          {project.name}
        </h3>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] ${
            live ? 'border-success/40 text-success' : 'border-warn/40 text-warn'
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-success' : 'bg-warn'}`} aria-hidden="true" />
          {t.projects.status[project.status]}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium text-accent">{l(project.tagline)}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{l(project.description)}</p>

      <div className="mt-5 flex gap-3 rounded-xl border border-line bg-elevated/50 p-3.5">
        <Target size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-muted">
          <span className="font-medium text-fg">{t.projects.objective} — </span>
          {l(project.objective)}
        </p>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <h4 className="mb-2.5 font-mono text-[11px] uppercase tracking-wider text-subtle">{t.projects.implemented}</h4>
          <ul className="space-y-2">
            {project.implemented.map((f) => (
              <li key={f.en} className="flex gap-2 text-sm text-fg/90">
                <Check size={15} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
                {l(f)}
              </li>
            ))}
          </ul>
        </div>
        {project.planned.length > 0 && (
          <div>
            <h4 className="mb-2.5 font-mono text-[11px] uppercase tracking-wider text-subtle">{t.projects.planned}</h4>
            <ul className="space-y-2">
              {project.planned.map((f) => (
                <li key={f.en} className="flex gap-2 text-sm text-muted">
                  <Circle size={13} className="mt-1 shrink-0 text-subtle" strokeDasharray="3 3" aria-hidden="true" />
                  {l(f)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-auto pt-6">
        <h4 className="sr-only">{t.projects.tech}</h4>
        <ul className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost px-4 py-2.5">
              <Github size={15} aria-hidden="true" />
              {t.projects.code}
              <span className="sr-only">{t.common.external}</span>
            </a>
          )}
          {project.demoUrl ? (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-2.5">
              {t.projects.demo}
              <ArrowUpRight size={15} aria-hidden="true" />
              <span className="sr-only">{t.common.external}</span>
            </a>
          ) : (
            !live && <span className="inline-flex items-center px-2 py-2.5 text-xs text-subtle">{t.projects.demoSoon}</span>
          )}
        </div>
      </div>
    </article>
  );
}
