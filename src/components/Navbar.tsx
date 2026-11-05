import { useEffect, useState, type MouseEvent } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';
import { useActiveSection } from '../hooks/useActiveSection';
import CvButton from './CvButton';

export const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'languages',
  'vision',
  'contact',
] as const;

type SectionId = (typeof SECTION_IDS)[number];
const SECTION_LIST = [...SECTION_IDS];
// Links shown in the desktop bar; the mobile menu lists every section.
const PRIMARY: SectionId[] = ['about', 'skills', 'projects', 'experience', 'education', 'vision', 'contact'];

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(SECTION_LIST);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1280 && setOpen(false);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = '';
    };
  }, [open]);

  // The open menu locks page scroll, which blocks the native anchor jump.
  // Close it first, then scroll once the lock has been released.
  const goToFromMenu = (e: MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView();
      history.pushState(null, '', `#${id}`);
    }, 0);
  };

  const linkClass = (id: SectionId) =>
    `relative rounded-lg px-3 py-2 text-sm transition-colors ${
      active === id ? 'text-fg' : 'text-muted hover:text-fg'
    }`;

  const themeLabel = theme === 'dark' ? t.nav.themeToLight : t.nav.themeToDark;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-line/70 bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2"
      >
        {t.nav.skipToContent}
      </a>
      <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Navigation principale">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Daniel DOUALY — accueil">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/40 bg-gradient-to-br from-accent/20 to-accent2/10 font-semibold tracking-tight text-fg transition-transform group-hover:scale-105">
            <span className="text-gradient text-sm font-bold">DD</span>
          </span>
          <span className="hidden font-medium tracking-tight text-fg sm:inline">
            Daniel<span className="text-subtle"> DOUALY</span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {PRIMARY.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)} aria-current={active === id ? 'true' : undefined}>
                {t.nav[id]}
                {active === id && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-accent to-accent2" aria-hidden="true" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            className="icon-btn w-auto px-3 font-mono text-xs font-medium"
            aria-label={t.nav.switchLang}
            title={t.nav.switchLang}
          >
            <span className={lang === 'fr' ? 'text-fg' : 'text-subtle'}>FR</span>
            <span className="mx-1 text-subtle">/</span>
            <span className={lang === 'en' ? 'text-fg' : 'text-subtle'}>EN</span>
          </button>
          <button type="button" onClick={toggleTheme} className="icon-btn" aria-label={themeLabel} title={themeLabel}>
            {theme === 'dark' ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
          </button>
          <CvButton label={t.nav.cv} compact className="hidden sm:inline-flex" />
          <button
            type="button"
            className="icon-btn xl:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line/70 xl:hidden">
          <ul className="container-page flex flex-col gap-1 py-6">
            {SECTION_IDS.map((id, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => goToFromMenu(e, id)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-lg transition-colors ${
                    active === id ? 'bg-elevated text-fg' : 'text-muted hover:bg-elevated/60 hover:text-fg'
                  }`}
                >
                  {t.nav[id]}
                  <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                </a>
              </li>
            ))}
            <li className="mt-4 sm:hidden">
              <CvButton label={t.nav.downloadCv} className="w-full" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
