'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import type { Service, Contact, PageText } from '@/types/sanity'

interface Props {
  services: Service[]
  contact: Contact | null
  pageText: PageText | null
}

export default function ServicesContent({ services, contact, pageText }: Props) {
  const { lang } = useLanguage()

  const heroDesc = lang === 'en'
    ? (pageText?.services_hero_desc_en || 'Transparent pricing, no surprises. Every service includes our commitment to Japanese-standard cleanliness.')
    : (pageText?.services_hero_desc_ja || '明確な料金体系。すべてのサービスに、日本水準の丁寧さをお約束します。')

  const ctaHeading = lang === 'en'
    ? (pageText?.services_cta_heading_en || 'Not sure which service?')
    : (pageText?.services_cta_heading_ja || 'どのサービスかお迷いですか？')

  const ctaBody = lang === 'en'
    ? (pageText?.services_cta_body_en || "Get in touch and we'll recommend the right service for your home.")
    : (pageText?.services_cta_body_ja || 'お気軽にご相談ください。お住まいに合ったサービスをご提案します。')

  const whatsappUrl = contact?.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`
    : null

  return (
    <div className="min-h-screen bg-warm-white">
      <div className="bg-navy text-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            {lang === 'en' ? 'What We Offer' : 'サービス内容'}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {lang === 'en' ? 'Services & Pricing' : 'サービスと料金'}
          </h1>
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed">{heroDesc}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {services.length === 0 ? (
          <p className="text-center text-gray-400 py-20">
            {lang === 'en' ? 'Services coming soon.' : 'サービス情報は近日公開予定です。'}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service._id}
                className={`relative p-8 rounded-2xl border bg-white transition-all duration-200 hover:shadow-md ${
                  service.isHighlighted ? 'border-teal ring-1 ring-teal/20' : 'border-gray-100'
                }`}
              >
                {service.isHighlighted && (
                  <span className="absolute top-5 right-5 text-xs font-semibold text-white bg-teal px-2.5 py-1 rounded-full">
                    {lang === 'en' ? 'Popular' : '人気'}
                  </span>
                )}
                <div className="flex items-start gap-4 mb-4">
                  {service.icon && <span className="text-3xl shrink-0">{service.icon}</span>}
                  <div>
                    <h2 className="text-xl font-bold text-navy">
                      {lang === 'en' ? service.name_en : service.name_ja}
                    </h2>
                    {service.price && (
                      <p className="text-teal font-semibold mt-0.5">{service.price}</p>
                    )}
                  </div>
                </div>
                {(service.description_en || service.description_ja) && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 whitespace-pre-line">
                    {lang === 'en' ? service.description_en : service.description_ja}
                  </p>
                )}
                {service.duration && (
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service.duration}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-14 text-center bg-white rounded-2xl border border-gray-100 p-10">
          <h3 className="text-2xl font-bold text-navy mb-3">{ctaHeading}</h3>
          <p className="text-gray-500 mb-6">{ctaBody}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full hover:bg-opacity-90 transition-colors"
              >
                {lang === 'en' ? 'Ask on WhatsApp' : 'WhatsAppで相談'}
              </a>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-opacity-90 transition-colors"
            >
              {lang === 'en' ? 'Contact Us' : 'お問い合わせ'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
