'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { urlFor } from '@/sanity/lib/image'
import type { SiteSettings } from '@/types/sanity'

const navItems = {
  en: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Areas', href: '/areas' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  ja: [
    { label: 'ホーム', href: '/' },
    { label: 'サービス', href: '/services' },
    { label: 'エリア', href: '/areas' },
    { label: 'よくある質問', href: '/faq' },
    { label: 'お問い合わせ', href: '/contact' },
  ],
}

interface Props {
  siteSettings: SiteSettings | null
}

export default function Header({ siteSettings }: Props) {
  const { lang, setLang } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const items = navItems[lang]
  const logoUrl = siteSettings?.logo
    ? urlFor(siteSettings.logo).width(96).height(96).fit('max').url()
    : null

  return (
    <header className="fixed top-0 w-full z-50 border-b border-outline-variant/30 backdrop-blur-md bg-surface/90">
      <div className="max-w-[1200px] mx-auto px-4 md:px-16 flex items-center justify-between h-18">

        <Link href="/" className="flex items-center gap-3 text-primary">
          <span className="grid size-10 place-items-center rounded-full border border-primary/30 bg-primary-fixed/50 text-lg font-light">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={siteSettings?.site_name || 'OMAKASE logo'}
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
                priority
              />
            ) : (
              'O'
            )}
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
            className="text-on-surface-variant text-xs font-semibold tracking-widest hover:text-primary transition-colors"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'JP' : 'EN'}
          </button>

          <Link
            href="/services#booking"
            className="hidden sm:inline-flex bg-primary text-on-primary px-6 py-2 rounded-full text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity"
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

      <div
        className={`fixed inset-0 top-18 z-40 bg-inverse-surface/30 backdrop-blur-sm transition-opacity md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed left-0 top-18 z-50 max-h-[calc(100dvh-7rem)] min-h-[360px] w-[82vw] max-w-80 overflow-y-auto rounded-br-2xl border-r border-b border-outline-variant/30 bg-surface shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex min-h-[360px] flex-col px-5 py-5">
          <nav className="flex flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-3 text-sm transition-colors ${
                  pathname === item.href
                    ? 'bg-primary-fixed/70 text-primary font-medium'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-outline-variant/20 pt-5">
            <button
              onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}
              className="mb-3 inline-flex w-full items-center justify-between rounded-lg bg-surface-container px-4 py-3 text-xs font-semibold tracking-widest text-on-surface-variant"
            >
              <span>{lang === 'en' ? 'Language' : '言語'}</span>
              <span>{lang === 'en' ? 'JP' : 'EN'}</span>
            </button>
            <Link
              href="/services#booking"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-widest text-on-primary"
              onClick={() => setMenuOpen(false)}
            >
              {lang === 'en' ? 'Book Now' : '予約する'}
            </Link>
          </div>
        </div>
      </aside>
    </header>
  )
}
