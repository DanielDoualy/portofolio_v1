import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import { projects } from '../data/projects';
import { useLanguage } from '../hooks/useLanguage';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container-page">
        <SectionTitle id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle} />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
