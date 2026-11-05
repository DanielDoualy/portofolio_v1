import SectionTitle from '../components/SectionTitle';
import LanguageCard from '../components/LanguageCard';
import Reveal from '../components/Reveal';
import { languages } from '../data/languages';
import { useLanguage } from '../hooks/useLanguage';

export default function Languages() {
  const { t } = useLanguage();

  return (
    <section id="languages" className="section border-y border-line/60 bg-surface/30" aria-labelledby="languages-title">
      <div className="container-page">
        <SectionTitle id="languages" eyebrow={t.languages.eyebrow} title={t.languages.title} />
        <div className="grid gap-5 md:grid-cols-2">
          {languages.map((item, i) => (
            <Reveal key={item.id} delay={i * 100}>
              <LanguageCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
