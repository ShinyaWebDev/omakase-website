'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import type { Service } from '@/types/sanity'

interface Props {
  services: Service[]
}

export default function ServicesSection({ services }: Props) {
  const { lang } = useLanguage()
  const displayed = services.slice(0, 3)

  return (
    <section className="py-20 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            {lang === 'en' ? 'What We Do' : 'サービス内容'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            {lang === 'en' ? 'Our Services' : 'サービス一覧'}
          </h2>
        </div>

        {displayed.length === 0 ? (
          <p className="text-center text-gray-400 py-12">
            {lang === 'en' ? 'Services coming soon.' : 'サービス情報は近日公開予定です。'}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {displayed.map((service) => (
              <div
                key={service._id}
                className={`relative p-7 rounded-2xl border transition-all duration-300 hover:shadow-lg group bg-white ${
                  service.isHighlighted
                    ? 'border-teal ring-1 ring-teal/20'
                    : 'border-gray-100 hover:border-teal/30'
                }`}
              >
                {service.isHighlighted && (
                  <span className="absolute top-4 right-4 text-xs font-semibold text-white bg-teal px-2.5 py-1 rounded-full">
                    {lang === 'en' ? 'Popular' : '人気'}
                  </span>
                )}

                {service.icon && (
                  <div className="text-3xl mb-4">{service.icon}</div>
                )}

                <h3 className="text-lg font-bold text-navy mb-1">
                  {lang === 'en' ? service.name_en : service.name_ja}
                </h3>

                {service.price && (
                  <p className="text-teal font-semibold text-sm mb-3">{service.price}</p>
                )}

                {(service.description_en || service.description_ja) && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 whitespace-pre-line">
                    {lang === 'en' ? service.description_en : service.description_ja}
                  </p>
                )}

                <Link
                  href="/services"
                  className="text-sm font-semibold text-navy hover:text-teal transition-colors inline-flex items-center gap-1.5"
                >
                  {lang === 'en' ? 'Learn More' : '詳しく見る'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3 border-2 border-navy text-navy font-semibold rounded-full hover:bg-navy hover:text-white transition-all duration-200"
          >
            {lang === 'en' ? 'View All Services' : 'すべてのサービスを見る'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
