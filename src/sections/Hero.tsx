import { ArrowDown, ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/profile';
import { useLanguage } from '../hooks/useLanguage';

function CodeWindow() {
  const { lang } = useLanguage();
  const fr = lang === 'fr';
  const k = 'text-accent';
  const s = 'text-success';
  const p = 'text-accent2';
  const c = 'text-subtle';

  return (
    <div className="relative animate-float motion-reduce:animate-none">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/25 via-accent2/10 to-transparent blur-2xl" aria-hidden="true" />
      <div className="card relative overflow-hidden shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
          </div>
          <span className="font-mono text-[11px] text-subtle">daniel.ts</span>
          <span className="w-10" aria-hidden="true" />
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 text-fg sm:text-[13px]" aria-label={fr ? 'Carte de profil sous forme de code' : 'Profile card as code'}>
          <code>
            <span className={c}>{fr ? '// en construction, en continu' : '// always a work in progress'}</span>
            {'\n'}
            <span className={k}>const</span> daniel <span className={c}>=</span> {'{'}
            {'\n  '}
            <span className={p}>role</span>: <span className={s}>"{fr ? 'Étudiant en génie logiciel' : 'Software Engineering Student'}"</span>,
            {'\n  '}
            <span className={p}>school</span>: <span className={s}>"UFHB · MIAGE L3"</span>,
            {'\n  '}
            <span className={p}>building</span>: [<span className={s}>"full-stack apps"</span>, <span className={s}>"APIs"</span>],
            {'\n  '}
            <span className={p}>learning</span>: [<span className={s}>"AI"</span>, <span className={s}>"ML"</span>, <span className={s}>"data"</span>],
            {'\n  '}
            <span className={p}>hackathons</span>: <span className={k}>2</span>,
            {'\n'}
            {'};'}
            {'\n\n'}
            daniel.<span className={p}>next</span>(<span className={s}>"{fr ? 'résoudre de vrais problèmes' : 'solve real problems'}"</span>)
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent motion-reduce:animate-none" aria-hidden="true" />
          </code>
        </pre>
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

        <div className="reveal is-visible mx-auto w-full min-w-0 max-w-lg lg:max-w-none">
          <CodeWindow />
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
