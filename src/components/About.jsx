import SectionHeading from './SectionHeading'
import { about, ui } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { lang } = useLanguage()

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading eyebrow={ui.sections.about.eyebrow[lang]} title={ui.sections.about.title[lang]} />
      <div className="space-y-4 max-w-3xl text-slate-600 leading-relaxed">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p[lang]}</p>
        ))}
      </div>
    </section>
  )
}
