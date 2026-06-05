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
    tagline: 'Omotenashi Spirit',
    heading: 'Cleaning is Therapy',
    subheading:
      'Japanese precision for a serene home. Thoughtful cleaning that restores order, calm, and breathing room.',
    cta: 'Book Your Ritual',
    secondary: 'View Services',
  },
  ja: {
    tagline: 'お任せクリーニング',
    heading: 'お掃除はセラピー',
    subheading:
      '日本式の丁寧な清掃で、心整う暮らしを。清潔さだけでなく、空間と気持ちを整えます。',
    cta: '予約する',
    secondary: 'サービスを見る',
  },
}

export default function HeroSection({ data }: Props) {
  const { lang } = useLanguage()
  const f = fallback[lang]

  const tagline = (data?.[`tagline_${lang}` as keyof Hero] as string | undefined) || f.tagline
  const heading = (data?.[`heading_${lang}` as keyof Hero] as string | undefined) || f.heading
  const subheading = (data?.[`subheading_${lang}` as keyof Hero] as string | undefined) || f.subheading
  const cta = (data?.[`cta_label_${lang}` as keyof Hero] as string | undefined) || f.cta

  const imageUrl = data?.background_image
    ? urlFor(data.background_image).width(1600).height(900).url()
    : null

  return (
    <section className="relative min-h-[680px] h-[90vh] flex items-center overflow-hidden pt-18">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center opacity-60"
          sizes="100vw"
        />
      ) : (
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80"
          alt="Serene sunlit home interior with natural materials"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/5" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-16">
        <div className="max-w-2xl">
        <span className="inline-block rounded-full bg-primary-container/20 px-4 py-1 text-primary text-xs font-semibold tracking-[0.1em] uppercase mb-6">
          {tagline}
        </span>
        <h1 className="text-[36px] md:text-[56px] font-light leading-[1.15] text-on-background mb-5">
          {heading}
          {lang === 'en' && (
            <span className="block text-primary italic">お掃除はセラピー</span>
          )}
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary text-xs font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity"
          >
            {cta}
            <span className="material-symbols-outlined text-lg">calendar_today</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 border border-secondary text-secondary text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-secondary/5 transition-colors"
          >
            {f.secondary}
          </Link>
        </div>
        </div>
      </div>
    </section>
  )
}
