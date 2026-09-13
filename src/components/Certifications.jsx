import SectionHeading from './SectionHeading'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading eyebrow="Certifications" title="Certifications" />
      <div className="grid gap-4 sm:grid-cols-3">
        {certifications.map((cert) => (
          <div key={cert.name} className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">{cert.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{cert.issuer}</p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-400">
              {cert.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
