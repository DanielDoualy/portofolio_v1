import CertificationCard from '../components/CertificationCard';
import Reveal from '../components/Reveal';
import { certifications } from '../data/certifications';
import { useLanguage } from '../hooks/useLanguage';

/** Rendered inside the Education section. */
export default function Certifications() {
  const { t } = useLanguage();

  return (
    <div className="mt-14">
      <Reveal>
        <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold tracking-tight text-fg">
          {t.education.certificationsTitle}
          <span className="rounded-full border border-line px-2 py-0.5 font-mono text-xs text-subtle">{certifications.length}</span>
        </h3>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.id} delay={(i % 3) * 80}>
            <CertificationCard cert={cert} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
