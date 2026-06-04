'use client'

import Link from 'next/link'
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

const copy = {
  en: {
    tagline: 'Japanese-style cleaning for your Sydney home.',
    rights: '© 2025 OMAKASE Japanese Cleaning. All rights reserved.',
    instagram: 'Instagram',
  },
  ja: {
    tagline: 'シドニーのご自宅に、日本式のお掃除を。',
    rights: '© 2025 OMAKASE Japanese Cleaning. 無断転載禁止。',
    instagram: 'Instagram',
  },
}

export default function Footer() {
  const { lang } = useLanguage()
  const items = navItems[lang]
  const c = copy[lang]

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-10 border-b border-white/10">
          <div className="sm:col-span-1">
            <div className="mb-3">
              <span className="font-bold text-lg tracking-tight">OMAKASE</span>
              <span className="block text-[10px] text-white/50 tracking-widest uppercase mt-0.5">
                Japanese Cleaning
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">{c.tagline}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              {lang === 'en' ? 'Pages' : 'ページ'}
            </h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              {lang === 'en' ? 'Connect' : 'つながる'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  LINE
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {c.instagram}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-6 text-xs text-white/40 text-center">{c.rights}</p>
      </div>
    </footer>
  )
}
