import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

function getInitialLang() {
  try {
    const stored = localStorage.getItem('lang')
    if (stored === 'en' || stored === 'ja') return stored
  } catch {
    // localStorage unavailable — fall through to default
  }
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // ignore write failures (private browsing, etc.)
    }
  }, [lang])

  const toggleLang = () => setLang((current) => (current === 'en' ? 'ja' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
