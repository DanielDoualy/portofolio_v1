import { ArrowDown, ArrowRight, Github, Linkedin, Mail, MapPin, Trophy } from 'lucide-react';
import { profile } from '../data/profile';
import { useLanguage } from '../hooks/useLanguage';
import portrait from '../assets/daniel.jpg';

/** Compact code snippet that overlaps the portrait. */
function CodeCard() {
  const { lang } = useLanguage();
  const fr = lang === 'fr';
  const k = 'text-accent';
  const s = 'text-success';
  const p = 'text-accent2';

  return (
    <div className="card overflow-hidden bg-surface/90 shadow-2xl shadow-black/30 backdrop-blur-md">
      <div className="flex items-center gap-3 border-b border-line px-3.5 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]/80" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]/80" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]/80" />
        </div>
        <span className="font-mono text-[10px] text-subtle">daniel.ts</span>
      </div>
      <pre className="p-3.5 font-mono text-[11px] leading-5 text-fg sm:text-xs sm:leading-6" aria-label={fr ? 'Profil sous forme de code' : 'Profile as code'}>
        <code>
          <span className={k}>const</span> daniel = {'{'}
          {'\n  '}
          <span className={p}>school</span>: <span className={s}>"UFHB · MIAGE L3"</span>,
          {'\n  '}
          <span className={p}>learning</span>: [<span className={s}>"AI"</span>, <span className={s}>"ML"</span>],
          {'\n'}
          {'};'}
          {'\n'}
          daniel.<span className={p}>next</span>(<span className={s}>"impact"</span>)
          <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-blink bg-accent motion-reduce:animate-none" aria-hidden="true" />
        </code>
      </pre>
    </div>
  );
}

function Portrait() {
  const { t } = useLanguage();

  return (
    <div className="relative mx-auto w-full max-w-[22rem] pb-10 pl-4 sm:max-w-sm sm:pl-10 lg:max-w-[25rem]">
      <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent/30 via-accent2/15 to-transparent blur-3xl" aria-hidden="true" />

      <figure className="relative overflow-hidden rounded-[1.75rem] border border-line bg-elevated shadow-2xl shadow-black/30">
        <img
          src={portrait}
          alt={t.hero.portraitAlt}
          width={733}
          height={1080}
          decoding="async"
          className="aspect-[4/5] w-full object-cover object-top"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" aria-hidden="true" />
      </figure>

      <p className="absolute right-3 top-4 flex items-center gap-2 rounded-full border border-line bg-surface/85 px-3 py-1.5 text-xs font-medium text-fg shadow-lg backdrop-blur-md sm:-right-4">
        <Trophy size={14} className="text-warn" aria-hidden="true" />
        {t.hero.badge}
      </p>

      <div className="absolute bottom-0 left-0 w-[15.5rem] animate-float motion-reduce:animate-none sm:w-[17rem]">
        <CodeCard />
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-36" aria-labelledby="home-title">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] max-w-[160vw] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent/20 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page grid grid-cols-1 items-center gap-14 pb-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-28">
        <div className="reveal is-visible min-w-0">
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs text-muted backdrop-blur">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            {t.hero.status}
          </p>

          <h1 id="home-title" className="text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-6xl lg:text-[4.1rem]">
            {t.hero.greeting} <span className="text-gradient">Daniel DOUALY.</span>
          </h1>
          <p className="mt-5 text-xl font-medium tracking-tight text-fg/85 sm:text-2xl">{t.hero.role}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{t.hero.intro}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary group">
              {t.hero.ctaProjects}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-ghost">
              {t.hero.ctaContact}
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
            <div className="flex gap-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={`GitHub ${t.common.external}`}>
                <Github size={17} aria-hidden="true" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={`LinkedIn ${t.common.external}`}>
                <Linkedin size={17} aria-hidden="true" />
              </a>
              <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email">
                <Mail size={17} aria-hidden="true" />
              </a>
            </div>
            <span className="flex items-center gap-1.5 text-subtle">
              <MapPin size={15} aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="reveal is-visible min-w-0">
          <Portrait />
        </div>
      </div>

      <a
        href="#about"
        className="mx-auto mb-6 hidden w-fit flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle transition-colors hover:text-fg lg:flex"
      >
        {t.hero.scroll}
        <ArrowDown size={14} className="animate-bounce motion-reduce:animate-none" aria-hidden="true" />
      </a>
    </section>
  );
}
