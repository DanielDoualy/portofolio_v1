import Reveal from './Reveal';

interface SectionTitleProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({ id, eyebrow, title, subtitle, align = 'left' }: SectionTitleProps) {
  const centered = align === 'center';
  return (
    <Reveal className={`mb-12 sm:mb-16 ${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      <p className={`mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent ${centered ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>}
    </Reveal>
  );
}
