import { useState } from 'react'
import { profile, ui } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, toggleLang } = useLanguage()

  const links = [
    { href: '#about', label: ui.nav.about[lang] },
    { href: '#skills', label: ui.nav.skills[lang] },
    { href: '#projects', label: ui.nav.projects[lang] },
    { href: '#experience', label: ui.nav.experience[lang] },
    { href: '#certifications', label: ui.nav.certifications[lang] },
    { href: '#education', label: ui.nav.education[lang] },
    { href: '#contact', label: ui.nav.contact[lang] },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-bold text-slate-900">
          {profile.name}
        </a>

        <div className="flex items-center gap-4 sm:hidden">
          <button
            type="button"
            onClick={toggleLang}
            className="rounded-md border border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-600"
            aria-label="Toggle language"
          >
            {lang === 'en' ? '日本語' : 'EN'}
          </button>
          <button
            type="button"
            className="text-slate-700"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden items-center gap-6 sm:flex">
          <ul className="flex gap-6 text-sm font-medium text-slate-600">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={toggleLang}
            className="rounded-md border border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-600 transition-colors hover:border-accent hover:text-accent"
            aria-label="Toggle language"
          >
            {lang === 'en' ? '日本語' : 'EN'}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-600 sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 transition-colors hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
