import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import { useLanguage } from '../hooks/useLanguage';

export default function About() {
  const { t } = useLanguage();
  const facts = [
    { icon: MapPin, label: t.about.facts.location, value: t.about.facts.locationValue },
    { icon: GraduationCap, label: t.about.facts.studies, value: t.about.facts.studiesValue },
    { icon: Sparkles, label: t.about.facts.focus, value: t.about.facts.focusValue },
  ];

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container-page">
        <SectionTitle id="about" eyebrow={t.about.eyebrow} title={t.about.title} />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'text-fg/90' : undefined}>
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={120} className="space-y-4">
            <dl className="card divide-y divide-line">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-elevated text-accent">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">{label}</dt>
                    <dd className="mt-0.5 text-sm font-medium text-fg">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="card p-5">
              <h3 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-subtle">{t.about.interestsTitle}</h3>
              <ul className="flex flex-wrap gap-2">
                {t.about.interests.map((interest) => (
                  <li key={interest} className="rounded-lg border border-line bg-elevated/70 px-3 py-1.5 text-sm text-fg/90">
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
