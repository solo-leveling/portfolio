import SectionHeading from './SectionHeading'
import { education, ui } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

export default function Education() {
  const { lang } = useLanguage()

  return (
    <section id="education" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow={ui.sections.education.eyebrow[lang]}
          title={ui.sections.education.title[lang]}
        />
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div key={i} className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900">{edu.school}</h3>
                <span className="text-sm font-medium text-slate-500">{edu.period}</span>
              </div>
              <p className="mt-1 text-sm text-slate-600">{edu.program[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
