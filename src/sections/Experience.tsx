import { Trophy, Users } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import { experiences } from '../data/experiences';
import { useLanguage } from '../hooks/useLanguage';

export default function Experience() {
  const { t, l } = useLanguage();

  return (
    <section id="experience" className="section border-y border-line/60 bg-surface/30" aria-labelledby="experience-title">
      <div className="container-page">
        <SectionTitle id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title} subtitle={t.experience.subtitle} />

        <div className="grid gap-6 lg:grid-cols-5">
          {experiences.map((exp, i) => {
            const Icon = exp.highlight ? Trophy : Users;
            return (
              <Reveal key={exp.id} delay={i * 120} className={exp.highlight ? 'lg:col-span-3' : 'lg:col-span-2'}>
                <article
                  className={`card card-hover relative h-full overflow-hidden p-6 sm:p-8 ${
                    exp.highlight ? 'border-accent/40' : ''
                  }`}
                >
                  {exp.highlight && (
                    <div
                      className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-accent/30 to-accent2/10 blur-3xl"
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                          exp.highlight
                            ? 'border-accent/40 bg-gradient-to-br from-accent/25 to-accent2/10 text-accent'
                            : 'border-line bg-elevated text-accent2'
                        }`}
                      >
                        <Icon size={22} aria-hidden="true" />
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${
                          exp.highlight ? 'bg-accent text-bg' : 'border border-line text-muted'
                        }`}
                      >
                        {l(exp.badge)}
                      </span>
                    </div>
                    <h3 className={`mt-6 font-semibold tracking-tight text-fg ${exp.highlight ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                      {l(exp.title)}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">{l(exp.role)}</p>
                    <p className="mt-4 leading-relaxed text-muted">{l(exp.description)}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {exp.points.map((point) => (
                        <li key={point.en} className="rounded-lg border border-line bg-elevated/70 px-3 py-1.5 text-sm text-fg/90">
                          {l(point)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
