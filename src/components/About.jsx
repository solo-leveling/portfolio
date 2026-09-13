import SectionHeading from './SectionHeading'
import { about } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading eyebrow="About" title="About Me" />
      <div className="space-y-4 max-w-3xl text-slate-600 leading-relaxed">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  )
}
