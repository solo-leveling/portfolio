import SectionHeading from './SectionHeading'
import { projects, ui } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

export default function Projects() {
  const { lang } = useLanguage()

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading eyebrow={ui.sections.projects.eyebrow[lang]} title={ui.sections.projects.title[lang]} />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title.en}
            className="flex flex-col rounded-lg border border-slate-200 p-6 transition-shadow hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-900">{project.title[lang]}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
              {project.description[lang]}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm font-semibold">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark"
                >
                  {ui.projectLinks.github[lang]}
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark"
                >
                  {ui.projectLinks.demo[lang]}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
