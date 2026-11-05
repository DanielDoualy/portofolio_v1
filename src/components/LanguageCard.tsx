import type { LanguageItem } from '../types';
import { CEFR_LEVELS } from '../data/languages';
import { useLanguage } from '../hooks/useLanguage';

export default function LanguageCard({ item }: { item: LanguageItem }) {
  const { t, l } = useLanguage();

  return (
    <article className="card card-hover h-full p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-fg">{l(item.name)}</h3>
          <p className="mt-1 text-sm font-medium text-accent">{l(item.level)}</p>
        </div>
        <span className="rounded-lg border border-line bg-elevated px-2.5 py-1 font-mono text-xs uppercase text-muted">{item.id}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{l(item.detail)}</p>

      <div className="mt-6">
        {item.native ? (
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {t.languages.native}
          </p>
        ) : (
          <>
            <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-subtle">{t.languages.scale}</p>
            <ol className="grid grid-cols-6 gap-1.5" aria-label={`${t.languages.scale} : ${CEFR_LEVELS[item.cefr - 1]}`}>
              {CEFR_LEVELS.map((lvl, i) => {
                const reached = i < item.cefr;
                const current = i === item.cefr - 1;
                return (
                  <li key={lvl} className="text-center">
                    <span
                      className={`block h-1.5 rounded-full ${reached ? 'bg-gradient-to-r from-accent to-accent2' : 'bg-line'}`}
                      aria-hidden="true"
                    />
                    <span className={`mt-1.5 block font-mono text-[10px] ${current ? 'font-semibold text-fg' : 'text-subtle'}`}>{lvl}</span>
                  </li>
                );
              })}
            </ol>
          </>
        )}
      </div>
    </article>
  );
}
