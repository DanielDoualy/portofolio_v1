import { Award, ExternalLink } from 'lucide-react';
import type { Certification } from '../types';
import { useLanguage } from '../hooks/useLanguage';

export default function CertificationCard({ cert }: { cert: Certification }) {
  const { t, l, lang } = useLanguage();
  const date = cert.date
    ? new Date(`${cert.date}-01`).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { month: 'long', year: 'numeric' })
    : null;

  return (
    <article className="card card-hover flex h-full flex-col p-5">
      <div className="flex items-start gap-3.5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-elevated text-accent">
          <Award size={18} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">{cert.issuer}</p>
          <h4 className="mt-1 font-medium leading-snug text-fg">{cert.title}</h4>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{l(cert.description)}</p>
      {(date || cert.credentialUrl) && (
        <div className="mt-auto flex items-center justify-between gap-3 pt-4 text-xs text-subtle">
          {date && <time dateTime={cert.date ?? undefined}>{date}</time>}
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent hover:underline"
            >
              {t.education.verify}
              <ExternalLink size={12} aria-hidden="true" />
              <span className="sr-only">{t.common.external}</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}
