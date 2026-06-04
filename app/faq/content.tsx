'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import type { FAQ, PageText } from '@/types/sanity'

function FAQItem({ faq, lang }: { faq: FAQ; lang: 'en' | 'ja' }) {
  const [open, setOpen] = useState(false)
  const question = lang === 'en' ? faq.question_en : faq.question_ja
  const answer = lang === 'en' ? faq.answer_en : faq.answer_ja

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-navy text-sm sm:text-base leading-snug">{question}</span>
        <svg
          className={`w-5 h-5 text-teal shrink-0 mt-0.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 pr-9">
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

interface Props {
  faqs: FAQ[]
  pageText: PageText | null
}

export default function FAQContent({ faqs, pageText }: Props) {
  const { lang } = useLanguage()

  const heroDesc = lang === 'en'
    ? (pageText?.faq_hero_desc_en || "Everything you need to know before booking. Can't find an answer? Just ask.")
    : (pageText?.faq_hero_desc_ja || 'ご予約前によくいただくご質問です。見当たらない場合はお気軽にご連絡ください。')

  const ctaHeading = lang === 'en'
    ? (pageText?.faq_cta_heading_en || 'Still have questions?')
    : (pageText?.faq_cta_heading_ja || 'まだご不明な点がありますか？')

  const ctaBody = lang === 'en'
    ? (pageText?.faq_cta_body_en || "We're happy to help. Reach out via WhatsApp or LINE.")
    : (pageText?.faq_cta_body_ja || 'WhatsAppまたはLINEでお気軽にどうぞ。')

  return (
    <div className="min-h-screen bg-warm-white">
      <div className="bg-navy text-white py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            {lang === 'en' ? 'Got Questions?' : 'よくある質問'}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {lang === 'en' ? 'FAQ' : 'よくある質問'}
          </h1>
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed">{heroDesc}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {faqs.length === 0 ? (
          <p className="text-center text-gray-400 py-20">
            {lang === 'en' ? 'FAQ coming soon.' : 'よくある質問は近日公開予定です。'}
          </p>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 px-6 py-2">
            {faqs.map((faq) => (
              <FAQItem key={faq._id} faq={faq} lang={lang} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center bg-navy rounded-2xl p-10 text-white">
          <h3 className="text-xl font-bold mb-3">{ctaHeading}</h3>
          <p className="text-white/70 text-sm mb-6">{ctaBody}</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-teal text-white font-semibold rounded-full hover:bg-opacity-90 transition-colors"
          >
            {lang === 'en' ? 'Contact Us' : 'お問い合わせ'}
          </a>
        </div>
      </div>
    </div>
  )
}
