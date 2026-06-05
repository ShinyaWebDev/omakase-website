'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import type { Area, PageText } from '@/types/sanity'

interface Props {
  areas: Area[]
  pageText: PageText | null
}

const fallbackAreas: Area[] = [
  { _id: 'st-leonards', suburb: 'St Leonards', isActive: true, isComingSoon: false, order: 1 },
  { _id: 'chatswood', suburb: 'Chatswood', isActive: true, isComingSoon: false, order: 2 },
  { _id: 'crows-nest', suburb: 'Crows Nest', isActive: true, isComingSoon: false, order: 3 },
  { _id: 'artarmon', suburb: 'Artarmon', isActive: true, isComingSoon: false, order: 4 },
  { _id: 'willoughby', suburb: 'Willoughby', isActive: true, isComingSoon: false, order: 5 },
  { _id: 'cremorne', suburb: 'Cremorne', isActive: true, isComingSoon: false, order: 6 },
  { _id: 'mosman', suburb: 'Mosman', isActive: false, isComingSoon: true, order: 7 },
  { _id: 'manly', suburb: 'Manly', isActive: false, isComingSoon: true, order: 8 },
]

export default function AreasContent({ areas, pageText }: Props) {
  const { lang } = useLanguage()
  const displayed = areas.length > 0 ? areas : fallbackAreas

  const activeAreas = displayed.filter((a) => a.isActive && !a.isComingSoon)
  const comingSoonAreas = displayed.filter((a) => a.isComingSoon || !a.isActive)

  const heroDesc = lang === 'en'
    ? (pageText?.areas_hero_desc_en || "We currently service Sydney's Lower North Shore, with a local focus that keeps visits reliable, punctual, and personal.")
    : (pageText?.areas_hero_desc_ja || 'シドニー・ローワーノースショアを中心に、地域に根ざした丁寧で信頼できる清掃サービスをお届けしています。')

  const ctaHeading = lang === 'en'
    ? (pageText?.areas_cta_heading_en || "Don't see your suburb?")
    : (pageText?.areas_cta_heading_ja || 'お住まいのエリアが見当たりませんか？')

  const ctaBody = lang === 'en'
    ? (pageText?.areas_cta_body_en || "We may still be able to help. Tell us your suburb and we'll confirm availability.")
    : (pageText?.areas_cta_body_ja || '対応可能な場合があります。お住まいのエリアをお知らせいただければ確認いたします。')

  return (
    <div className="min-h-screen bg-background pt-18">
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1523428096881-5bd79d043006?auto=format&fit=crop&w=1800&q=80"
          alt="Sydney harbour and Lower North Shore skyline"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
        <div className="relative mx-auto max-w-[1200px] px-4 md:px-16 py-24 md:py-32 text-center">
          <p className="japanese-label mb-4 text-xs font-semibold uppercase text-primary">
            {lang === 'en' ? 'Where We Serve' : 'エリア情報'}
          </p>
          <h1 className="mx-auto mb-6 max-w-3xl text-[36px] md:text-[56px] font-light leading-[1.15]">
            {lang === 'en' ? 'Service Areas' : 'サービスエリア'}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            {heroDesc}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 md:px-16 pb-20 md:pb-30">
        <div className="overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface flex flex-col lg:flex-row shadow-sm">
          <div className="p-8 md:p-12 lg:w-1/2">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-primary">
              {lang === 'en' ? 'Lower North Shore Focus' : 'ローワーノースショア中心'}
            </span>
            <h2 className="mb-6 text-2xl md:text-[32px] font-normal leading-[1.3]">
              {lang === 'en' ? 'Local care, consistent visits' : '地域密着だから、安心して頼める'}
              <span className="block font-light text-on-surface-variant">
                {lang === 'en' ? 'シドニー北支部・地域密着' : 'Local Sydney Care'}
              </span>
            </h2>
            <p className="mb-8 leading-relaxed text-on-surface-variant">
              {lang === 'en'
                ? 'A focused service area means we can protect quality: punctual arrival, realistic travel time, and better continuity for regular clients.'
                : '対応エリアを絞ることで、時間厳守、安定した品質、定期のお客様への継続的なサポートを大切にしています。'}
            </p>

            <div className="grid grid-cols-3 gap-3">
              {[
                [activeAreas.length.toString(), lang === 'en' ? 'Active areas' : '対応中'],
                [comingSoonAreas.length.toString(), lang === 'en' ? 'Expanding' : '拡大予定'],
                ['JP/EN', lang === 'en' ? 'Support' : '対応'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl bg-surface-container-low p-4 text-center">
                  <p className="text-xl font-medium text-primary">{value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-outline">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] lg:w-1/2 bg-primary-fixed/30">
            <Image
              src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=1200&q=80"
              alt="Sydney harbour near the Lower North Shore"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-primary/10" />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-surface/90 p-5 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {lang === 'en' ? 'Primary base' : '主な拠点'}
              </p>
              <p className="mt-1 text-lg font-medium">
                {lang === 'en' ? 'Sydney Lower North Shore' : 'シドニー・ローワーノースショア'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low paper-texture py-20 md:py-30">
        <div className="mx-auto max-w-[1200px] px-4 md:px-16">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-2xl md:text-[32px] font-normal leading-[1.3]">
              {lang === 'en' ? 'Currently Servicing' : '現在対応中のエリア'}
            </h2>
            <p className="japanese-label text-xs font-semibold text-primary">
              {lang === 'en' ? '現在対応中のエリア' : 'CURRENTLY SERVICING'}
            </p>
          </div>

          {activeAreas.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeAreas.map((area) => (
                <AreaCard key={area._id} area={area} status={lang === 'en' ? 'Available' : '対応中'} />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl bg-surface-container-lowest p-10 text-center text-on-surface-variant">
              {lang === 'en' ? 'Area information coming soon.' : 'エリア情報は近日公開予定です。'}
            </p>
          )}

          {comingSoonAreas.length > 0 && (
            <div className="mt-14">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium">
                    {lang === 'en' ? 'Expansion Watchlist' : '近日対応予定'}
                  </h3>
                  <p className="mt-1 text-sm text-on-surface-variant">
                    {lang === 'en'
                      ? 'These suburbs are being considered as availability grows.'
                      : '対応枠の拡大に合わせて検討中のエリアです。'}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {comingSoonAreas.map((area) => (
                  <span
                    key={area._id}
                    className="inline-flex items-center gap-2 rounded-full border border-outline-variant/30 bg-surface-container-lowest px-5 py-2.5 text-sm font-medium text-on-surface-variant"
                  >
                    {area.suburb}
                    <span className="rounded-full bg-surface-container-high px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-outline">
                      {lang === 'en' ? 'Soon' : '近日'}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-4 md:px-16 py-16 md:py-24 text-center">
        <div className="rounded-2xl bg-primary p-8 md:p-10 text-on-primary">
          <h2 className="mb-3 text-2xl md:text-[32px] font-light leading-[1.3]">{ctaHeading}</h2>
          <p className="mx-auto mb-8 max-w-xl text-primary-fixed">{ctaBody}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/services#booking"
              className="inline-flex items-center justify-center rounded-full bg-on-primary px-8 py-3 text-xs font-semibold uppercase tracking-widest text-primary hover:bg-surface-bright"
            >
              {lang === 'en' ? 'Ask About My Suburb' : 'エリアを相談する'}
            </Link>
            <Link
              href="/services#pricing"
              className="inline-flex items-center justify-center rounded-full border border-on-primary/40 px-8 py-3 text-xs font-semibold uppercase tracking-widest text-on-primary hover:bg-on-primary/10"
            >
              {lang === 'en' ? 'View Services' : 'サービスを見る'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function AreaCard({ area, status }: { area: Area; status: string }) {
  return (
    <article className="flex items-center gap-4 rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-5 shadow-sm transition-transform hover:-translate-y-1">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary-fixed/50">
        <span className="material-symbols-outlined text-primary">location_on</span>
      </span>
      <div>
        <h3 className="font-medium text-on-surface">{area.suburb}</h3>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-primary">{status}</p>
      </div>
    </article>
  )
}
