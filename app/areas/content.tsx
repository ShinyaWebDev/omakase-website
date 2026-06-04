'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import type { Area, PageText } from '@/types/sanity'

interface Props {
  areas: Area[]
  pageText: PageText | null
}

export default function AreasContent({ areas, pageText }: Props) {
  const { lang } = useLanguage()

  const activeAreas = areas.filter((a) => a.isActive && !a.isComingSoon)
  const comingSoonAreas = areas.filter((a) => a.isComingSoon)

  const heroDesc = lang === 'en'
    ? (pageText?.areas_hero_desc_en || "We currently service Sydney's Lower North Shore suburbs. Expanding soon!")
    : (pageText?.areas_hero_desc_ja || 'シドニー・ローワーノースショアのエリアを中心にサービスを提供しています。エリア拡大予定！')

  const ctaHeading = lang === 'en'
    ? (pageText?.areas_cta_heading_en || "Don't see your suburb?")
    : (pageText?.areas_cta_heading_ja || 'お住まいのエリアが見当たりませんか？')

  const ctaBody = lang === 'en'
    ? (pageText?.areas_cta_body_en || "We may still be able to help. Get in touch and we'll let you know.")
    : (pageText?.areas_cta_body_ja || 'ご相談いただければ、対応可能かお伝えします。お気軽にどうぞ。')

  return (
    <div className="min-h-screen bg-warm-white">
      <div className="bg-navy text-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            {lang === 'en' ? 'Where We Are' : 'エリア情報'}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {lang === 'en' ? 'Service Areas' : 'サービスエリア'}
          </h1>
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed">{heroDesc}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {activeAreas.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-navy mb-6">
              {lang === 'en' ? 'Currently Servicing' : '現在対応中のエリア'}
            </h2>
            <div className="flex flex-wrap gap-3">
              {activeAreas.map((area) => (
                <span
                  key={area._id}
                  className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-navy text-white"
                >
                  {area.suburb}
                </span>
              ))}
            </div>
          </div>
        )}

        {comingSoonAreas.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-navy mb-6">
              {lang === 'en' ? 'Coming Soon' : '近日対応予定'}
            </h2>
            <div className="flex flex-wrap gap-3">
              {comingSoonAreas.map((area) => (
                <span
                  key={area._id}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gray-100 text-gray-500 border border-gray-200"
                >
                  {area.suburb}
                  <span className="text-xs bg-gray-200 text-gray-400 px-2 py-0.5 rounded-full">
                    {lang === 'en' ? 'Soon' : '近日'}
                  </span>
                </span>
              ))}
            </div>
          </div>
        )}

        {areas.length === 0 && (
          <p className="text-center text-gray-400 py-20">
            {lang === 'en' ? 'Area information coming soon.' : 'エリア情報は近日公開予定です。'}
          </p>
        )}

        <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
          <h3 className="text-xl font-bold text-navy mb-3">{ctaHeading}</h3>
          <p className="text-gray-500 text-sm mb-6">{ctaBody}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-teal text-white font-semibold rounded-full hover:bg-opacity-90 transition-colors"
          >
            {lang === 'en' ? 'Ask Us' : '問い合わせる'}
          </Link>
        </div>
      </div>
    </div>
  )
}
