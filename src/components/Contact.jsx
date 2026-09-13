import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading eyebrow="Contact" title="Get In Touch" />
      <p className="max-w-2xl text-slate-600">
        I&apos;m currently looking for IT / Software Engineer opportunities in Japan. Feel free to
        reach out — I&apos;m happy to talk in either English or Japanese.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Email Me
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent"
        >
          GitHub
        </a>
        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
        )}
      </div>
    </section>
  )
}
