import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="mx-auto max-w-5xl px-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
      </div>
    </footer>
  )
}
