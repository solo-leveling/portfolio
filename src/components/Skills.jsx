import SectionHeading from './SectionHeading'
import { skillGroups, ui } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

export default function Skills() {
  const { lang } = useLanguage()

  return (
    <section id="skills" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow={ui.sections.skills.eyebrow[lang]} title={ui.sections.skills.title[lang]} />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label.en}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                {group.label[lang]}
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
