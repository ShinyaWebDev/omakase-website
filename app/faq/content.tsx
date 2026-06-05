'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import type { FAQ, PageText } from '@/types/sanity'

const fallbackFaqs: FAQ[] = [
  {
    _id: 'area',
    question_en: 'Which areas do you service?',
    question_ja: '対応エリアはどこですか？',
    answer_en: "We primarily serve Sydney's Lower North Shore, including St Leonards, Chatswood, Crows Nest, Artarmon, Willoughby, Cremorne, and nearby suburbs.",
    answer_ja: 'シドニー・ローワーノースショアを中心に、St Leonards、Chatswood、Crows Nest、Artarmon、Willoughby、Cremorne周辺で対応しています。',
  },
  {
    _id: 'supplies',
    question_en: 'Do you bring cleaning supplies?',
    question_ja: '清掃道具は持参しますか？',
    answer_en: 'Yes, we can bring core cleaning supplies. If you prefer specific products for your home, we are happy to use what you provide.',
    answer_ja: '基本的な清掃用品は持参可能です。ご自宅で指定の洗剤や道具がある場合は、そちらを使用できます。',
  },
  {
    _id: 'language',
    question_en: 'Can I communicate in Japanese?',
    question_ja: '日本語で相談できますか？',
    answer_en: 'Yes. We support English and Japanese communication, including booking questions and cleaning instructions.',
    answer_ja: 'はい。ご予約、ご相談、清掃内容のご希望など、日本語・英語どちらでも対応可能です。',
  },
]

function FAQItem({ faq, lang, index }: { faq: FAQ; lang: 'en' | 'ja'; index: number }) {
  const [open, setOpen] = useState(index === 0)
  const question = lang === 'en' ? faq.question_en : faq.question_ja
  const answer = lang === 'en' ? faq.answer_en : faq.answer_ja

  return (
    <article className="border-b border-outline-variant/30 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-6 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-lg font-medium leading-snug text-on-surface">{question}</span>
        <span className={`material-symbols-outlined mt-0.5 shrink-0 text-primary transition-transform ${open ? 'rotate-180' : ''}`}>
          keyboard_arrow_down
        </span>
      </button>
      {open && (
        <div className="pb-6 pr-8">
          <p className="leading-relaxed text-on-surface-variant">{answer}</p>
        </div>
      )}
    </article>
  )
}

interface Props {
  faqs: FAQ[]
  pageText: PageText | null
}

export default function FAQContent({ faqs, pageText }: Props) {
  const { lang } = useLanguage()
  const items = faqs.length > 0 ? faqs : fallbackFaqs

  const heroDesc = lang === 'en'
    ? (pageText?.faq_hero_desc_en || "Everything you need to know before booking. Can't find an answer? Just ask.")
    : (pageText?.faq_hero_desc_ja || 'ご予約前によくいただくご質問です。見当たらない場合はお気軽にご連絡ください。')

  const ctaHeading = lang === 'en'
    ? (pageText?.faq_cta_heading_en || 'Still have questions?')
    : (pageText?.faq_cta_heading_ja || 'まだご不明な点がありますか？')

  const ctaBody = lang === 'en'
    ? (pageText?.faq_cta_body_en || "We're happy to help you choose the right service before booking.")
    : (pageText?.faq_cta_body_ja || 'ご予約前のご相談も歓迎です。最適なサービスをご提案します。')

  return (
    <div className="min-h-screen bg-background pt-18">
      <section className="paper-texture border-b border-outline-variant/20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-16 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="japanese-label mb-4 text-xs font-semibold uppercase text-primary">
              {lang === 'en' ? 'Got Questions?' : 'よくある質問'}
            </p>
            <h1 className="mb-6 text-[36px] md:text-[56px] font-light leading-[1.15]">
              {lang === 'en' ? 'FAQ' : 'よくある質問'}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              {heroDesc}
            </p>
          </div>
          <div className="lg:col-span-4 rounded-xl bg-primary p-6 text-on-primary">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-fixed">
              {lang === 'en' ? 'Before booking' : 'ご予約前に'}
            </p>
            <p className="text-sm leading-relaxed text-primary-fixed">
              {lang === 'en'
                ? 'Most questions can be handled quickly by WhatsApp, LINE, or the booking form.'
                : 'WhatsApp、LINE、予約フォームからお気軽にご相談いただけます。'}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-4 md:px-8 py-16 md:py-24">
        <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest px-6 md:px-8 shadow-sm">
          {items.map((faq, index) => (
            <FAQItem key={faq._id} faq={faq} lang={lang} index={index} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-primary p-8 md:p-10 text-center text-on-primary">
          <h2 className="mb-3 text-2xl md:text-[32px] font-light leading-[1.3]">{ctaHeading}</h2>
          <p className="mx-auto mb-8 max-w-xl text-primary-fixed">{ctaBody}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-on-primary px-8 py-3 text-xs font-semibold uppercase tracking-widest text-primary hover:bg-surface-bright"
            >
              {lang === 'en' ? 'Contact Us' : 'お問い合わせ'}
            </Link>
            <Link
              href="/services#booking"
              className="inline-flex items-center justify-center rounded-full border border-on-primary/40 px-8 py-3 text-xs font-semibold uppercase tracking-widest text-on-primary hover:bg-on-primary/10"
            >
              {lang === 'en' ? 'Book Now' : '予約する'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
