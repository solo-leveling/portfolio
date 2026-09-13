import SectionHeading from './SectionHeading'
import { profile, ui } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { lang } = useLanguage()

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading eyebrow={ui.sections.contact.eyebrow[lang]} title={ui.sections.contact.title[lang]} />
      <p className="max-w-2xl text-slate-600">{ui.contact.blurb[lang]}</p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          {ui.contact.emailBtn[lang]}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent"
        >
          {ui.contact.githubBtn[lang]}
        </a>
        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent"
          >
            {ui.contact.linkedinBtn[lang]}
          </a>
        )}
      </div>
    </section>
  )
}
