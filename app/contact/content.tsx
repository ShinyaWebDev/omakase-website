'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import type { Contact, PageText } from '@/types/sanity'

interface Channel {
  href: string
  label: string
  sub: string
  icon: ReactNode
  external?: boolean
}

interface Props {
  contact: Contact | null
  pageText: PageText | null
}

const iconClass = 'material-symbols-outlined text-primary text-2xl'

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
      external: true,
      icon: <span className={iconClass}>chat_bubble</span>,
    },
    lineUrl && {
      href: lineUrl,
      label: 'LINE',
      sub: lang === 'en'
        ? (pageText?.contact_line_sub_en || 'Great for Japanese speakers')
        : (pageText?.contact_line_sub_ja || '日本語でどうぞ'),
      external: true,
      icon: <span className={iconClass}>forum</span>,
    },
    phoneUrl && {
      href: phoneUrl,
      label: contact?.phone ?? '',
      sub: lang === 'en'
        ? (pageText?.contact_phone_sub_en || 'Call or SMS')
        : (pageText?.contact_phone_sub_ja || '電話・SMS'),
      icon: <span className={iconClass}>call</span>,
    },
    emailUrl && {
      href: emailUrl,
      label: contact?.email ?? '',
      sub: lang === 'en'
        ? (pageText?.contact_email_sub_en || 'Email us')
        : (pageText?.contact_email_sub_ja || 'メールでのお問い合わせ'),
      icon: <span className={iconClass}>mail</span>,
    },
    instagramUrl && {
      href: instagramUrl,
      label: `@${contact?.instagram_handle}`,
      sub: 'Instagram',
      external: true,
      icon: <span className={iconClass}>photo_camera</span>,
    },
  ] as (Channel | false)[]).filter(Boolean) as Channel[]

  return (
    <div className="min-h-screen bg-background pt-18">
      <section className="mx-auto max-w-[1200px] px-4 md:px-16 py-20 md:py-30 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
        <div>
          <p className="japanese-label mb-4 text-xs font-semibold uppercase text-primary">
            {lang === 'en' ? 'Get in Touch' : 'お問い合わせ'}
          </p>
          <h1 className="mb-6 text-[36px] md:text-[56px] font-light leading-[1.15]">
            {lang === 'en' ? 'Contact Us' : 'お問い合わせ'}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
            {heroDesc}
          </p>
          {note && (
            <p className="mt-6 max-w-xl rounded-xl border border-outline-variant/20 bg-surface-container-low p-4 text-sm italic text-on-surface-variant">
              {note}
            </p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/services#booking"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-xs font-semibold uppercase tracking-widest text-on-primary hover:opacity-90"
            >
              {lang === 'en' ? 'Booking Form' : '予約フォーム'}
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center rounded-full border border-primary px-8 py-3 text-xs font-semibold uppercase tracking-widest text-primary hover:bg-primary/5"
            >
              {lang === 'en' ? 'Read FAQ' : 'FAQを見る'}
            </Link>
          </div>
        </div>

        <div className="relative h-[380px] md:h-[500px] overflow-hidden rounded-xl shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
            alt="Calm clean living room ready for a booking"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent" />
        </div>
      </section>

      <section className="bg-surface-container-low paper-texture py-16 md:py-24">
        <div className="mx-auto max-w-[1000px] px-4 md:px-16">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-2xl md:text-[32px] font-normal leading-[1.3]">
              {lang === 'en' ? 'Choose the easiest way to reach us' : 'ご都合のよい方法でご連絡ください'}
            </h2>
            <p className="text-on-surface-variant">
              {lang === 'en' ? 'English and Japanese communication available.' : '日本語・英語どちらでも対応できます。'}
            </p>
          </div>

          {channels.length === 0 ? (
            <p className="rounded-2xl bg-surface-container-lowest p-10 text-center text-on-surface-variant">
              {lang === 'en' ? 'Contact info coming soon.' : '連絡先は近日公開予定です。'}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {channels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target={ch.external ? '_blank' : undefined}
                  rel={ch.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-5 rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-5 shadow-sm transition-colors hover:bg-primary-container/25"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary-fixed/50">
                    {ch.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-outline">{ch.sub}</span>
                    <span className="block truncate font-medium text-on-surface">{ch.label}</span>
                  </span>
                  <span className="material-symbols-outlined ml-auto text-outline transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: 'location_on',
              title: lang === 'en' ? 'Local Focus' : '地域密着',
              body: lang === 'en'
                ? "Based around Sydney's Lower North Shore."
                : 'シドニー・ローワーノースショアを中心に対応。',
            },
            {
              icon: 'translate',
              title: lang === 'en' ? 'Bilingual Support' : '日英対応',
              body: lang === 'en'
                ? 'Booking and service instructions in English or Japanese.'
                : 'ご予約や清掃のご希望を日本語・英語で確認できます。',
            },
            {
              icon: 'calendar_today',
              title: lang === 'en' ? 'Easy Booking' : '簡単予約',
              body: lang === 'en'
                ? 'Use the booking form or message us directly.'
                : '予約フォームまたはメッセージで簡単にご相談できます。',
            },
          ].map((item) => (
            <article key={item.title} className="rounded-xl bg-surface-container p-6">
              <span className="material-symbols-outlined text-3xl text-primary">{item.icon}</span>
              <h3 className="mt-4 mb-2 text-xl font-medium">{item.title}</h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
