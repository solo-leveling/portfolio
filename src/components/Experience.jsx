import SectionHeading from './SectionHeading'
import { experience, ui } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

export default function Experience() {
  const { lang } = useLanguage()

  return (
    <section id="experience" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow={ui.sections.experience.eyebrow[lang]}
          title={ui.sections.experience.title[lang]}
        />
        <div className="space-y-6">
          {experience.map((job, i) => (
            <div key={i} className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900">{job.role[lang]}</h3>
                <span className="text-sm font-medium text-slate-500">{job.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">{job.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{job.description[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
