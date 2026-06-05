'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { lang } = useLanguage()

  return (
    <footer className="w-full bg-surface-container">
      <div className="max-w-300 mx-auto px-4 md:px-16 py-20 grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="md:col-span-1">
          <div className="text-2xl font-light text-primary tracking-widest mb-4">OMAKASE</div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            {lang === 'en'
              ? '© 2025 OMAKASE Japanese Cleaning. Serenity in Every Corner.'
              : '© 2025 OMAKASE Japanese Cleaning. 隅々まで、整う安心を。'}
          </p>
        </div>

        <div className="flex flex-col gap-2">
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
              className="text-on-surface-variant hover:text-primary transition-colors text-sm"
            >
              {lang === 'en' ? item.en : item.ja}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
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
              className="text-on-surface-variant hover:text-primary transition-colors text-sm"
            >
              {lang === 'en' ? item.en : item.ja}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
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
              className="text-on-surface-variant hover:text-primary transition-colors text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
