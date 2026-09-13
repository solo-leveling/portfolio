import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading eyebrow="Projects" title="Selected Projects" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-lg border border-slate-200 p-6 transition-shadow hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
              {project.description}
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
                  GitHub →
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
