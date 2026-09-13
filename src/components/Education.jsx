import SectionHeading from './SectionHeading'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Education" title="Education" />
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.school} className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900">{edu.school}</h3>
                <span className="text-sm font-medium text-slate-500">{edu.period}</span>
              </div>
              <p className="mt-1 text-sm text-slate-600">{edu.program}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
