import { Clock, Download } from 'lucide-react';
import { profile } from '../data/profile';
import { useLanguage } from '../hooks/useLanguage';

interface CvButtonProps {
  label: string;
  className?: string;
  compact?: boolean;
}

/** Downloads the CV, or shows a disabled "coming soon" state until the PDF is added. */
export default function CvButton({ label, className = '', compact = false }: CvButtonProps) {
  const { lang } = useLanguage();
  const size = compact ? 'px-3.5 py-2 text-xs' : '';

  if (!profile.cvAvailable) {
    const soon = lang === 'fr' ? 'bientôt disponible' : 'coming soon';
    return (
      <span
        className={`btn-ghost cursor-not-allowed opacity-60 ${size} ${className}`}
        aria-disabled="true"
        title={soon}
      >
        <Clock size={15} aria-hidden="true" />
        {label}
        <span className="sr-only">({soon})</span>
      </span>
    );
  }

  return (
    <a href={profile.cvPath} download={profile.cvFileName} className={`btn-ghost ${size} ${className}`}>
      <Download size={15} aria-hidden="true" />
      {label}
    </a>
  );
}
