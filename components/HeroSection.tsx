'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { urlFor } from '@/sanity/lib/image'
import type { Hero } from '@/types/sanity'

interface Props {
  data: Hero | null
}

const fallback = {
  en: {
    tagline: 'Cleaning is Therapy',
    heading: 'Japanese-style cleaning for your Sydney home',
    subheading:
      'Experience the calm of a truly clean home. We bring Japanese precision, personal care, and respectful service to every visit.',
    cta: 'Book Now',
  },
  ja: {
    tagline: 'お掃除はセラピー',
    heading: 'シドニーのご自宅に、日本式のお掃除を',
    subheading:
      '本当にきれいな空間が生む、静かな安らぎを体験してください。丁寧さ、心遣い、信頼を大切に、毎回のサービスをお届けします。',
    cta: '予約する',
  },
}

export default function HeroSection({ data }: Props) {
  const { lang } = useLanguage()
  const f = fallback[lang]

  const tagline = data?.[`tagline_${lang}` as keyof Hero] as string | undefined || f.tagline
  const heading = data?.[`heading_${lang}` as keyof Hero] as string | undefined || f.heading
  const subheading = data?.[`subheading_${lang}` as keyof Hero] as string | undefined || f.subheading
  const cta = data?.[`cta_label_${lang}` as keyof Hero] as string | undefined || f.cta

  const imageUrl = data?.background_image
    ? urlFor(data.background_image).width(1600).height(900).url()
    : null

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-navy">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-24 text-white">
        <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          {tagline}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
          {heading}
        </h1>
        <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white font-semibold rounded-full text-base hover:bg-opacity-90 transition-all duration-200 shadow-lg"
          >
            {cta}
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-full text-base hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            {lang === 'en' ? 'View Services' : 'サービスを見る'}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-warm-white to-transparent" />
    </section>
  )
}
