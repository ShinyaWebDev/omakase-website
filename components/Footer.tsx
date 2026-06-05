'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { lang } = useLanguage()

  return (
    <footer className="w-full bg-surface-container">
      <div className="max-w-300 mx-auto px-4 md:px-16 py-8 md:py-20 grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8">

        <div className="col-span-3 md:col-span-1">
          <div className="text-xl md:text-2xl font-light text-primary tracking-widest mb-2 md:mb-4">OMAKASE</div>
          <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed max-w-sm">
            {lang === 'en'
              ? '© 2025 OMAKASE Japanese Cleaning. Serenity in Every Corner.'
              : '© 2025 OMAKASE Japanese Cleaning. 隅々まで、整う安心を。'}
          </p>
        </div>

        <div className="flex flex-col gap-1.5 md:gap-2">
          <h4 className="text-xs font-semibold tracking-widest uppercase text-on-surface mb-2">
            {lang === 'en' ? 'Services' : 'サービス'}
          </h4>
          {[
            { en: 'Basic Cleaning', ja: '基本清掃', href: '/services' },
            { en: 'Reset Cleaning', ja: 'リセット清掃', href: '/services' },
            { en: 'NDIS Support', ja: 'NDIS支援', href: '/services' },
          ].map((item) => (
            <Link
              key={item.href + item.en}
              href={item.href}
              className="text-on-surface-variant hover:text-primary transition-colors text-xs md:text-sm leading-relaxed"
            >
              {lang === 'en' ? item.en : item.ja}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-1.5 md:gap-2">
          <h4 className="text-xs font-semibold tracking-widest uppercase text-on-surface mb-2">
            {lang === 'en' ? 'Company' : '会社情報'}
          </h4>
          {[
            { en: 'Our Philosophy', ja: '私たちの想い', href: '/#about' },
            { en: 'Service Areas', ja: 'エリア', href: '/areas' },
            { en: 'FAQ', ja: 'よくある質問', href: '/faq' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-on-surface-variant hover:text-primary transition-colors text-xs md:text-sm leading-relaxed"
            >
              {lang === 'en' ? item.en : item.ja}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-1.5 md:gap-2">
          <h4 className="text-xs font-semibold tracking-widest uppercase text-on-surface mb-2">
            {lang === 'en' ? 'Connect' : 'つながる'}
          </h4>
          {[
            { label: 'WhatsApp', href: '/contact' },
            { label: 'LINE', href: '/contact' },
            { label: 'Instagram', href: '/contact' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-on-surface-variant hover:text-primary transition-colors text-xs md:text-sm leading-relaxed"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
