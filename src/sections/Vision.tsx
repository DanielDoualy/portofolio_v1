import { Blocks, BrainCircuit, Globe2, LineChart, Server, Workflow } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import { useLanguage } from '../hooks/useLanguage';

const AREA_ICONS = [Blocks, Server, BrainCircuit, Workflow, LineChart, Globe2];

export default function Vision() {
  const { t } = useLanguage();

  return (
    <section id="vision" className="section relative overflow-hidden" aria-labelledby="vision-title">
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[720px] max-w-[150vw] -translate-x-1/2 rounded-full bg-gradient-to-r from-accent/15 to-accent2/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page">
        <SectionTitle id="vision" eyebrow={t.vision.eyebrow} title={t.vision.title} subtitle={t.vision.intro} align="center" />

        <Reveal as="figure" className="mx-auto mb-16 max-w-3xl text-center">
          <blockquote className="text-2xl font-medium leading-snug tracking-tight text-fg sm:text-3xl">
            <span className="text-gradient">“</span>
            {t.vision.quote}
            <span className="text-gradient">”</span>
          </blockquote>
          <figcaption className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-subtle">— Daniel DOUALY</figcaption>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.vision.areas.map((area, i) => {
            const Icon = AREA_ICONS[i];
            return (
              <Reveal key={area.title} delay={(i % 3) * 80}>
                <div className="card card-hover h-full p-5">
                  <Icon size={20} className="text-accent" aria-hidden="true" />
                  <h3 className="mt-4 font-medium text-fg">{area.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{area.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            { label: t.vision.now, text: t.vision.nowText, dot: 'bg-success' },
            { label: t.vision.next, text: t.vision.nextText, dot: 'bg-accent' },
          ].map((step) => (
            <div key={step.label} className="flex gap-4 rounded-2xl border border-dashed border-line p-5">
              <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${step.dot}`} aria-hidden="true" />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">{step.label}</p>
                <p className="mt-1 text-fg/90">{step.text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
