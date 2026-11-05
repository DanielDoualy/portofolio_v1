import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import CvButton from '../components/CvButton';
import { profile } from '../data/profile';
import { useLanguage } from '../hooks/useLanguage';

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable: the mailto link still works */
    }
  };

  const links = [
    { icon: Github, label: t.contact.github, value: `@${profile.githubHandle}`, href: profile.github },
    { icon: Linkedin, label: t.contact.linkedin, value: profile.linkedinHandle, href: profile.linkedin },
  ];

  return (
    <section id="contact" className="section border-t border-line/60 bg-surface/30" aria-labelledby="contact-title">
      <div className="container-page">
        <SectionTitle id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="card relative h-full overflow-hidden p-6 sm:p-8">
              <div className="pointer-events-none absolute -bottom-24 -right-16 h-60 w-60 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-subtle">
                  <Mail size={14} aria-hidden="true" />
                  {t.contact.email}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <a href={`mailto:${profile.email}`} className="break-all text-xl font-medium text-fg hover:text-accent sm:text-2xl">
                    {profile.email}
                  </a>
                  <button type="button" onClick={copyEmail} className="icon-btn h-9 w-9" aria-label={copied ? t.contact.copied : t.contact.copy} title={t.contact.copy}>
                    {copied ? <Check size={15} className="text-success" aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
                  </button>
                  <span className="sr-only" aria-live="polite">
                    {copied ? t.contact.copied : ''}
                  </span>
                </div>
                <p className="mt-4 flex items-center gap-1.5 text-sm text-muted">
                  <MapPin size={15} aria-hidden="true" />
                  {profile.location}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={`mailto:${profile.email}`} className="btn-primary">
                    <Mail size={16} aria-hidden="true" />
                    {t.contact.sendEmail}
                  </a>
                  <CvButton label={t.contact.downloadCv} />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {links.map(({ icon: Icon, label, value, href }, i) => (
              <Reveal key={label} delay={100 + i * 80}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="card card-hover group flex items-center gap-4 p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-elevated text-fg">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-subtle">{label}</span>
                    <span className="block truncate font-medium text-fg">{value}</span>
                  </span>
                  <ArrowUpRight size={18} className="text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
                  <span className="sr-only">{t.common.external}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
