import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { useLanguage } from '../hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-line/70">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-10 text-sm text-subtle sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-fg">© {new Date().getFullYear()} Daniel DOUALY</p>
          <p className="mt-1">{t.footer.built}</p>
        </div>
        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={`GitHub ${t.common.external}`}>
            <Github size={17} aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={`LinkedIn ${t.common.external}`}>
            <Linkedin size={17} aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email">
            <Mail size={17} aria-hidden="true" />
          </a>
          <a href="#home" className="icon-btn ml-2" aria-label={t.footer.backToTop} title={t.footer.backToTop}>
            <ArrowUp size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
