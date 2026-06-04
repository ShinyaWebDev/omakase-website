'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const navItems = {
  en: [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Areas', href: '/areas' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  ja: [
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
  const items = navItems[lang]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="flex flex-col leading-none">
            <span className="text-navy font-bold text-lg tracking-tight">OMAKASE</span>
            <span className="text-[10px] text-gray-400 tracking-widest uppercase font-normal">
              Japanese Cleaning
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 hover:text-navy transition-colors duration-200 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}
            className="text-sm font-medium text-teal border border-teal rounded-full px-3 py-1 hover:bg-teal hover:text-white transition-all duration-200"
            aria-label="Toggle language"
          >
            {lang === 'en' ? '日本語' : 'EN'}
          </button>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-4 py-2 bg-navy text-white text-sm font-semibold rounded-full hover:bg-opacity-90 transition-all duration-200"
          >
            {lang === 'en' ? 'Book Now' : '予約する'}
          </Link>

          <button
            className="md:hidden p-1 text-gray-600 hover:text-navy transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2 space-y-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-2 py-2.5 text-sm text-gray-700 hover:text-navy hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              className="block text-center px-4 py-2.5 bg-navy text-white text-sm font-semibold rounded-full"
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
