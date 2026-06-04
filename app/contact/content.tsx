'use client'

import type { ReactNode } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import type { Contact, PageText } from '@/types/sanity'

interface Channel {
  href: string
  label: string
  sub: string
  bg: string
  icon: ReactNode
}

interface Props {
  contact: Contact | null
  pageText: PageText | null
}

export default function ContactContent({ contact, pageText }: Props) {
  const { lang } = useLanguage()

  const heroDesc = lang === 'en'
    ? (pageText?.contact_hero_desc_en || 'Ready to book? Have a question? Reach out anytime.')
    : (pageText?.contact_hero_desc_ja || 'ご予約・ご質問はいつでもどうぞ。')

  const whatsappUrl = contact?.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`
    : null
  const lineUrl = contact?.line_id
    ? `https://line.me/R/ti/p/@${contact.line_id}`
    : null
  const phoneUrl = contact?.phone ? `tel:${contact.phone.replace(/\s/g, '')}` : null
  const emailUrl = contact?.email ? `mailto:${contact.email}` : null
  const instagramUrl = contact?.instagram_handle
    ? `https://instagram.com/${contact.instagram_handle}`
    : null

  const note = lang === 'en' ? contact?.booking_note_en : contact?.booking_note_ja

  const channels: Channel[] = ([
    whatsappUrl && {
      href: whatsappUrl,
      label: 'WhatsApp',
      sub: lang === 'en'
        ? (pageText?.contact_whatsapp_sub_en || 'Fastest response')
        : (pageText?.contact_whatsapp_sub_ja || '最も素早い返信'),
      bg: 'bg-[#25D366]',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    lineUrl && {
      href: lineUrl,
      label: 'LINE',
      sub: lang === 'en'
        ? (pageText?.contact_line_sub_en || 'Great for Japanese speakers')
        : (pageText?.contact_line_sub_ja || '日本語でどうぞ'),
      bg: 'bg-[#06C755]',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
      ),
    },
    phoneUrl && {
      href: phoneUrl,
      label: contact?.phone ?? '',
      sub: lang === 'en'
        ? (pageText?.contact_phone_sub_en || 'Call or SMS')
        : (pageText?.contact_phone_sub_ja || '電話・SMS'),
      bg: 'bg-navy',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    emailUrl && {
      href: emailUrl,
      label: contact?.email ?? '',
      sub: lang === 'en'
        ? (pageText?.contact_email_sub_en || 'Email us')
        : (pageText?.contact_email_sub_ja || 'メールでのお問い合わせ'),
      bg: 'bg-gray-700',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    instagramUrl && {
      href: instagramUrl,
      label: `@${contact?.instagram_handle}`,
      sub: 'Instagram',
      bg: 'bg-gradient-to-br from-purple-500 to-pink-500',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ] as (Channel | false)[]).filter(Boolean) as Channel[]

  return (
    <div className="min-h-screen bg-warm-white">
      <div className="bg-navy text-white py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            {lang === 'en' ? 'Get in Touch' : 'お問い合わせ'}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {lang === 'en' ? 'Contact Us' : 'お問い合わせ'}
          </h1>
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed">{heroDesc}</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        {note && <p className="text-center text-gray-500 text-sm mb-10 italic">{note}</p>}

        {channels.length === 0 ? (
          <p className="text-center text-gray-400 py-20">
            {lang === 'en' ? 'Contact info coming soon.' : '連絡先は近日公開予定です。'}
          </p>
        ) : (
          <div className="space-y-4">
            {channels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-5 p-5 rounded-2xl text-white ${ch.bg} hover:opacity-90 transition-opacity shadow-sm`}
              >
                <div className="shrink-0">{ch.icon}</div>
                <div>
                  <p className="font-bold text-base">{ch.label}</p>
                  <p className="text-white/70 text-sm">{ch.sub}</p>
                </div>
                <svg className="w-5 h-5 ml-auto shrink-0 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
