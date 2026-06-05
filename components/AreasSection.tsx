'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import type { Area } from '@/types/sanity'

interface Props {
  areas: Area[]
}

export default function AreasSection({ areas }: Props) {
  const { lang } = useLanguage()
  const displayed = areas.length > 0 ? areas : [
    { _id: 'mosman', suburb: 'Mosman', isActive: true, isComingSoon: false, order: 1 },
    { _id: 'neutral-bay', suburb: 'Neutral Bay', isActive: true, isComingSoon: false, order: 2 },
    { _id: 'chatswood', suburb: 'Chatswood', isActive: true, isComingSoon: false, order: 3 },
    { _id: 'north-sydney', suburb: 'North Sydney', isActive: true, isComingSoon: false, order: 4 },
    { _id: 'cremorne', suburb: 'Cremorne', isActive: true, isComingSoon: false, order: 5 },
    { _id: 'artarmon', suburb: 'Artarmon', isActive: true, isComingSoon: false, order: 6 },
  ]

  return (
    <section className="py-24 md:py-30">
      <div className="max-w-[1200px] mx-auto px-4 md:px-16">
        <div className="overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface flex flex-col md:flex-row">
          <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
            <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              {lang === 'en' ? 'Our Neighborhood' : 'サービスエリア'}
            </span>
            <h2 className="text-2xl md:text-[32px] font-normal leading-[1.3] mb-6">
              {lang === 'en' ? 'Lower North Shore Focus' : 'ローワーノースショア中心'}
              <span className="block font-light text-on-surface-variant">
                {lang === 'en' ? 'シドニー北支部・地域密着' : 'Local Sydney Care'}
              </span>
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              {lang === 'en'
                ? 'We take pride in serving our local community with the highest standards of Japanese cleaning. Our primary service areas include:'
                : 'シドニー・ローワーノースショアを中心に、日本式の丁寧な清掃サービスをお届けしています。'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {displayed.slice(0, 8).map((area) => (
                <div key={area._id} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                  <span>{area.suburb}</span>
                  {area.isComingSoon && (
                    <span className="text-[10px] font-semibold tracking-widest uppercase bg-surface-container-high text-outline px-1.5 py-0.5 rounded-full">
                      {lang === 'en' ? 'Soon' : '近日'}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <Link
              href="/areas"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-on-surface transition-colors"
            >
              {lang === 'en' ? 'See all service areas' : 'エリア詳細を見る'}
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="relative md:w-1/2 min-h-[360px] md:min-h-[460px] bg-primary-fixed/30">
            <Image
              src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=1200&q=80"
              alt="Sydney harbour and North Shore homes"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
