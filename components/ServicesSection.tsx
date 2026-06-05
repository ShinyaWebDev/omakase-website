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
    <section className="bg-surface-container-low py-30">
      <div className="max-w-300 mx-auto px-4 md:px-16">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-[32px] font-normal leading-[1.3] mb-2">
            {lang === 'en' ? 'Our Services' : 'サービス一覧'}
          </h2>
          <p className="text-primary text-xs font-semibold japanese-label">
            {lang === 'en' ? 'サービス内容' : 'OUR SERVICES'}
          </p>
        </div>

        {displayed.length === 0 ? (
          <p className="text-center text-on-surface-variant py-12">
            {lang === 'en' ? 'Services coming soon.' : 'サービス情報は近日公開予定です。'}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {displayed.map((service) => (
              <div
                key={service._id}
                className={`bg-surface p-8 rounded-lg flex flex-col h-full border transition-all duration-200 hover:shadow-sm ${
                  service.isHighlighted
                    ? 'border-primary/30 ring-1 ring-primary/10'
                    : 'border-outline-variant/10'
                }`}
              >
                <div className="mb-6 flex justify-between items-start">
                  {service.icon ? (
                    <div className="text-3xl">{service.icon}</div>
                  ) : (
                    <span className="material-symbols-outlined text-primary text-4xl">
                      cleaning_services
                    </span>
                  )}
                  {service.price && (
                    <span className="text-primary text-xl font-medium">{service.price}</span>
                  )}
                </div>

                {service.isHighlighted && (
                  <span className="self-start mb-3 text-[10px] font-semibold tracking-widest uppercase text-on-primary bg-primary px-2.5 py-1 rounded-full">
                    {lang === 'en' ? 'Popular' : '人気'}
                  </span>
                )}

                <h3 className="text-xl font-medium leading-[1.4] mb-2">
                  {lang === 'en' ? service.name_en : service.name_ja}
                </h3>

                {(service.description_en || service.description_ja) && (
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 grow whitespace-pre-line">
                    {lang === 'en' ? service.description_en : service.description_ja}
                  </p>
                )}

                <Link
                  href="/services"
                  className="self-start border border-secondary text-secondary py-2 px-5 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-secondary hover:text-on-secondary transition-all"
                >
                  {lang === 'en' ? 'Learn More' : '詳しく見る'}
                </Link>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3 border border-on-surface text-on-surface text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-surface-container transition-colors"
          >
            {lang === 'en' ? 'View All Services' : 'すべてのサービスを見る'}
          </Link>
        </div>
      </div>
    </section>
  )
}
