'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import type { Area } from '@/types/sanity'

interface Props {
  areas: Area[]
}

export default function AreasSection({ areas }: Props) {
  const { lang } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            {lang === 'en' ? 'Where We Serve' : 'エリア'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            {lang === 'en' ? 'Service Areas' : 'サービスエリア'}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {lang === 'en'
              ? "Based on Sydney's Lower North Shore. Not sure if we cover your area? Just ask!"
              : 'シドニー・ローワーノースショア拠点。お住まいのエリアが対象かどうか、お気軽にご相談ください。'}
          </p>
        </div>

        {areas.length === 0 ? (
          <p className="text-center text-gray-400 py-8">
            {lang === 'en' ? 'Area information coming soon.' : 'エリア情報は近日公開予定です。'}
          </p>
        ) : (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {areas.map((area) => (
              <div key={area._id} className="relative">
                {area.isComingSoon ? (
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-400 border border-gray-200">
                    {area.suburb}
                    <span className="text-xs bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full">
                      {lang === 'en' ? 'Soon' : '近日'}
                    </span>
                  </span>
                ) : (
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-navy text-white hover:bg-opacity-90 transition-colors">
                    {area.suburb}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-navy transition-colors"
          >
            {lang === 'en' ? 'See full area map' : 'エリア詳細を見る'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
