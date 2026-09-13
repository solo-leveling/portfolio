import { profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-20 sm:pt-28">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">
        {profile.role} · {profile.location}
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">{profile.tagline}</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Get in touch
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent"
        >
          View GitHub
        </a>
      </div>
    </section>
  )
}
