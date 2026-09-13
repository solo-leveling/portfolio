import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolioData'

const groups = [
  { label: 'Languages', items: skills.languages },
  { label: 'Frameworks & Tools', items: skills.frameworks },
  { label: 'Cloud & Infrastructure', items: skills.cloud },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Skills" title="Technical Skills" />
        <div className="grid gap-8 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
