'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const navItems = {
  en: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Areas', href: '/areas' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  ja: [
    { label: 'ホーム', href: '/' },
    { label: 'サービス', href: '/services' },
    { label: '私たちについて', href: '/about' },
    { label: 'エリア', href: '/areas' },
    { label: 'よくある質問', href: '/faq' },
    { label: 'お問い合わせ', href: '/contact' },
  ],
}

export default function Header() {
  const { lang, setLang } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const items = navItems[lang]

  return (
    <header className="fixed top-0 w-full z-50 border-b border-outline-variant/30 backdrop-blur-md bg-surface/90">
      <div className="max-w-[1200px] mx-auto px-4 md:px-16 flex items-center justify-between h-18">

        <Link href="/" className="flex items-center gap-3 text-primary">
          <span className="grid size-10 place-items-center rounded-full border border-primary/30 bg-primary-fixed/50 text-lg font-light">
            O
          </span>
          <span className="font-light tracking-widest text-2xl">
            OMAKASE
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors duration-300 ${
                pathname === item.href
                  ? 'text-primary font-medium border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}
            className="text-on-surface-variant text-xs font-semibold tracking-widest hidden sm:block hover:text-primary transition-colors"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'JP' : 'EN'}
          </button>

          <Link
            href="/services#booking"
            className="bg-primary text-on-primary px-6 py-2 rounded-full text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            {lang === 'en' ? 'Book Now' : '予約する'}
          </Link>

          <button
            className="md:hidden p-1 text-on-surface-variant"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/20 px-4 pb-4 pt-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2.5 text-sm text-on-surface-variant hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}
              className="text-xs font-semibold tracking-widest text-on-surface-variant"
            >
              {lang === 'en' ? 'JP' : 'EN'}
            </button>
            <Link
              href="/services#booking"
              className="bg-primary text-on-primary px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {lang === 'en' ? 'Book Now' : '予約する'}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
