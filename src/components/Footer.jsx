import { profile, ui } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { lang } = useLanguage()

  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="mx-auto max-w-5xl px-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. {ui.footer.builtWith[lang]}
      </div>
    </footer>
  )
}
