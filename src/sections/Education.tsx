import { GraduationCap, MapPin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import Certifications from './Certifications';
import { useLanguage } from '../hooks/useLanguage';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container-page">
        <SectionTitle id="education" eyebrow={t.education.eyebrow} title={t.education.title} />

        <Reveal>
          <article className="card relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent to-accent2" aria-hidden="true" />
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-elevated text-accent">
                <GraduationCap size={26} aria-hidden="true" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight text-fg">{t.education.degree}</h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-success/40 px-2.5 py-1 font-mono text-[11px] text-success">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                    {t.education.current}
                  </span>
                </div>
                <p className="mt-1 font-medium text-accent">{t.education.university}</p>
                <p className="mt-4 text-fg/90">{t.education.field}</p>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{t.education.fieldDescription}</p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-subtle">
                  <span className="font-mono">{t.education.level}</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} aria-hidden="true" />
                    {t.education.location}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <Certifications />
      </div>
    </section>
  );
}
