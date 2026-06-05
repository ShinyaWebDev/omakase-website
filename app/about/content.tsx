'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import type { About, Feature } from '@/types/sanity'

const fallbackCopy = {
  en: {
    heading: 'About OMAKASE',
    lead: '"Cleaning is Therapy" - we believe a tidy space does not just look good. It resets your mind, restores your focus, and genuinely improves your day.',
    body: [
      'OMAKASE means "leave it to us" - and that is exactly the relationship we are here to build. Hand over your home with confidence, and we will care for it with the precision and respect it deserves.',
      'Our cleaning style is rooted in Japanese tradition: shoes off at the door, eyes trained to catch what others miss, and a calm respect for the rhythm of your home.',
      "We serve busy families, remote workers, elderly residents, and Sydney's Japanese community across the Lower North Shore. Whether you need a one-off reset or a regular visit, we will work with you.",
    ],
  },
  ja: {
    heading: 'OMAKASEについて',
    lead: '「お掃除はセラピー」- 空間を整えることは、心と体を整えること。私たちはそう信じています。',
    body: [
      '「おまかせ」とは、信頼して委ねること。お客様が安心してお家を預けられるサービスを、誠実にお届けします。',
      '私たちのスタイルは日本式。玄関で靴を脱ぎ、見逃さない視線で細部まで丁寧に。時間、身だしなみ、礼儀を大切にします。',
      '共働きや在宅ワークのご家庭、高齢者のお客様、シドニー在住の日本人の方まで、ローワーノースショアを中心に幅広くご対応します。',
    ],
  },
}

interface Props {
  about: About | null
  features: Feature[]
}

function parseParagraphs(text: string | undefined): string[] {
  if (!text) return []
  return text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean)
}

function FeatureIcon({ icon }: { icon?: string }) {
  if (!icon) return <span className="material-symbols-outlined text-primary text-3xl">spa</span>
  const isMaterialIcon = icon.includes('_') || /^[a-z]+$/.test(icon)
  return isMaterialIcon ? (
    <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
  ) : (
    <span className="text-3xl">{icon}</span>
  )
}

export default function AboutContent({ about, features }: Props) {
  const { lang } = useLanguage()
  const fb = fallbackCopy[lang]

  const heading = (about?.[`heading_${lang}` as keyof About] as string | undefined) || fb.heading
  const lead = (about?.[`lead_${lang}` as keyof About] as string | undefined) || fb.lead
  const bodyRaw = about?.[`body_${lang}` as keyof About] as string | undefined
  const paragraphs = bodyRaw ? parseParagraphs(bodyRaw) : fb.body
  const values = features.length > 0 ? features : [
    {
      _id: 'omotenashi',
      title_en: 'Omotenashi Spirit',
      title_ja: 'おもてなしの心',
      description_en: 'Thoughtful care that notices what makes a home feel peaceful.',
      description_ja: '住まいが心地よく整うための、小さな気配りを大切にします。',
      icon: 'favorite',
    },
    {
      _id: 'detail',
      title_en: 'Meticulous Detail',
      title_ja: '細部へのこだわり',
      description_en: 'Edges, switches, skirting boards, and quiet corners are part of the work.',
      description_ja: '巾木、スイッチ周り、端や隅まで、見落としやすい箇所も丁寧に。',
      icon: 'search',
    },
  ]

  return (
    <div className="min-h-screen bg-background pt-18">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80"
            alt="Calm Japanese inspired home interior"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-4 md:px-16 py-24 md:py-32 text-center">
          <p className="japanese-label mb-4 text-xs font-semibold uppercase text-primary">
            {lang === 'en' ? 'Our Story' : '私たちについて'}
          </p>
          <h1 className="mx-auto mb-6 max-w-3xl text-[36px] md:text-[56px] font-light leading-[1.15]">
            {heading}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            {lead}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 md:px-16 py-20 md:py-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="sticky top-28 overflow-hidden rounded-xl bg-surface-container">
              <div className="relative h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80"
                  alt="Freshly cleaned kitchen counter"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Cleaning is Therapy
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
              {paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((feature) => (
                <article
                  key={feature._id}
                  className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-sm"
                >
                  <FeatureIcon icon={feature.icon} />
                  <h3 className="mt-4 mb-2 text-xl font-medium">
                    {lang === 'en' ? feature.title_en : feature.title_ja}
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {lang === 'en' ? feature.description_en : feature.description_ja}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/services#booking"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-xs font-semibold uppercase tracking-widest text-on-primary hover:opacity-90"
              >
                {lang === 'en' ? 'Book a Clean' : '予約する'}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-primary px-8 py-3 text-xs font-semibold uppercase tracking-widest text-primary hover:bg-primary/5"
              >
                {lang === 'en' ? 'Explore Services' : 'サービスを見る'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
