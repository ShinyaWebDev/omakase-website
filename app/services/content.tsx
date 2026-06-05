'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import type { Service, Contact, PageText } from '@/types/sanity'
import PricingContent from '@/components/PricingContent'

interface Props {
  services: Service[]
  contact: Contact | null
  pageText: PageText | null
}

interface ServiceDetail {
  _id: string
  name_en: string
  name_ja: string
  description_en: string
  description_ja: string
  price?: string
  duration?: string
  icon?: string
  isHighlighted?: boolean
}

const omakaseWay = {
  en: [
    {
      icon: 'do_not_step',
      title: 'Shoes-Off Policy',
      body: 'Respecting your sanctuary. We always change into clean indoor footwear.',
      label: '土足厳禁',
    },
    {
      icon: 'search',
      title: 'Meticulous Detail',
      body: 'Nothing missed. We clean skirtings, switches, edges, and quiet corners.',
      label: '細部へのこだわり',
    },
    {
      icon: 'schedule',
      title: 'Japanese Punctuality',
      body: 'Precision in time. We arrive as scheduled and work with calm consistency.',
      label: '時間厳守',
    },
  ],
  ja: [
    {
      icon: 'do_not_step',
      title: '土足厳禁',
      body: '大切な住まいを尊重し、清潔な室内用の履物でお伺いします。',
      label: 'Shoes-Off Policy',
    },
    {
      icon: 'search',
      title: '細部へのこだわり',
      body: '巾木、スイッチ周り、端や隅など、見落とされがちな箇所まで丁寧に。',
      label: 'Meticulous Detail',
    },
    {
      icon: 'schedule',
      title: '時間厳守',
      body: 'お約束の時間を大切にし、落ち着いた一定の品質で作業します。',
      label: 'Japanese Punctuality',
    },
  ],
}

const fallbackServices: ServiceDetail[] = [
  {
    _id: 'basic-cleaning',
    name_en: 'Basic Cleaning',
    name_ja: '基本清掃',
    description_en:
      'Our core ritual for a balanced home. Kitchen surfaces, bathrooms, vacuuming, mopping, dusting, and careful tidying for weekly or fortnightly maintenance.',
    description_ja:
      '日常の住まいを心地よく保つ基本清掃。キッチン、浴室、掃除機、モップ、ホコリ取り、整頓を丁寧に行います。',
    price: '$55 / hr',
    duration: '2-3 hours',
    icon: 'cleaning_services',
    isHighlighted: true,
  },
  {
    _id: 'reset-cleaning',
    name_en: 'Reset Cleaning',
    name_ja: 'リセット清掃',
    description_en:
      'A deeper seasonal or one-off clean for move-in, move-out, hosting, or when your home needs a full reset.',
    description_ja:
      '引越し前後、来客前、季節の切り替えなど、住まい全体をしっかり整えたい時の集中清掃です。',
    price: '$150+',
    duration: 'Half day or custom',
    icon: 'refresh',
  },
  {
    _id: 'pair-sessions',
    name_en: 'Pair Cleaning Sessions',
    name_ja: 'ペアクリーニング',
    description_en:
      'Two professionals working together for efficient cleaning when time is limited or the home needs broader coverage.',
    description_ja:
      '2名体制で効率よく作業します。短時間で広い範囲を整えたい場合におすすめです。',
    price: '$50 / hr per person',
    duration: 'Flexible',
    icon: 'groups',
  },
  {
    _id: 'lifestyle-support',
    name_en: 'Lifestyle Support',
    name_ja: '生活支援',
    description_en:
      'Beyond cleaning: laundry support, light organisation, grocery help, and household reset tasks tailored to your routine.',
    description_ja:
      '洗濯補助、簡単な整理整頓、買い物サポートなど、暮らしに合わせた生活支援にも対応します。',
    price: 'Custom',
    duration: 'By request',
    icon: 'local_mall',
  },
  {
    _id: 'seniors-ndis',
    name_en: 'Seniors & NDIS Support',
    name_ja: 'シニア・NDIS支援',
    description_en:
      'A gentle, safety-conscious service for community members who need consistent support to keep a dignified, comfortable home.',
    description_ja:
      '清潔で安全な住まいを保つための、穏やかで継続しやすいサポート。信頼関係を大切にします。',
    price: '$50+ / hr',
    duration: '1-hour minimum',
    icon: 'health_and_safety',
  },
]

const heroImage =
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=80'
const basicImage =
  'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80'
const supportImage =
  'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80'

export default function ServicesContent({ services, contact, pageText }: Props) {
  const { lang } = useLanguage()
  const items: ServiceDetail[] = services.length > 0 ? services.map((service) => ({
    _id: service._id,
    name_en: service.name_en,
    name_ja: service.name_ja,
    description_en: service.description_en || '',
    description_ja: service.description_ja || '',
    price: service.price,
    duration: service.duration,
    icon: service.icon,
    isHighlighted: service.isHighlighted,
  })) : fallbackServices

  const mainService = items[0] ?? fallbackServices[0]
  const options = items.slice(1)
  const supportService = items.find((service) => {
    const haystack = `${service.name_en} ${service.name_ja}`.toLowerCase()
    return haystack.includes('ndis') || haystack.includes('senior') || haystack.includes('シニア')
  })

  const heroDesc = lang === 'en'
    ? (pageText?.services_hero_desc_en || 'Our bespoke cleaning services are rooted in Omotenashi: wholehearted hospitality, quiet care, and meticulous Japanese precision.')
    : (pageText?.services_hero_desc_ja || 'おもてなしの心に根ざした、日本式の丁寧な清掃サービス。静かな気配りと細部へのこだわりで、住まいを整えます。')

  return (
    <div className="min-h-screen bg-background pt-18">
      <section className="relative flex min-h-[614px] items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt="Serene minimalist living room after careful cleaning"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <span className="japanese-label mb-4 block text-xs font-semibold uppercase text-primary">
            {lang === 'en' ? 'お任せクリーニング' : 'OMAKASE Cleaning'}
          </span>
          <h1 className="mb-6 text-[36px] md:text-[56px] font-light leading-[1.15] text-on-surface">
            {lang === 'en' ? 'Serenity in Every Corner' : '隅々まで、整う安心を'}
          </h1>
          <p className="text-lg leading-relaxed text-on-surface-variant">
            {heroDesc}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 md:px-16 py-20 md:py-30">
        <div className="mb-14">
          <h2 className="mb-2 text-2xl md:text-[32px] font-normal leading-[1.3]">
            {lang === 'en' ? 'The OMAKASE Way' : 'オマカセ・スタンダード'}
          </h2>
          <p className="japanese-label text-xs font-semibold text-primary">
            {lang === 'en' ? 'オマカセ・スタンダード' : 'THE OMAKASE WAY'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {omakaseWay[lang].map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl bg-surface-container p-8 md:p-10 text-center transition-transform hover:-translate-y-1"
            >
              <span className="material-symbols-outlined mb-6 text-5xl text-primary">
                {feature.icon}
              </span>
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{feature.body}</p>
              <p className="japanese-label mt-4 text-[10px] font-semibold text-outline">
                {feature.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 md:px-16 pb-20 md:pb-30">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm">
              <Image
                src={basicImage}
                alt="Freshly cleaned kitchen counter"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <ServiceLabel service={mainService} lang={lang} />
            <h2 className="mb-6 text-2xl md:text-[32px] font-normal leading-[1.3]">
              {lang === 'en' ? mainService.name_en : mainService.name_ja}
            </h2>
            <p className="mb-8 whitespace-pre-line text-lg leading-relaxed text-on-surface-variant">
              {localizedDescription(mainService, lang)}
            </p>
            <ServiceChecklist service={mainService} lang={lang} />
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-surface-container-low py-20 md:py-30 scroll-mt-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-16">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-2xl md:text-[32px] font-normal leading-[1.3]">
              {lang === 'en' ? 'Services & Pricing' : 'サービスと料金'}
            </h2>
            <p className="japanese-label text-xs font-semibold text-primary">
              {lang === 'en' ? 'サービスと料金' : 'SERVICES & PRICING'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(options.length > 0 ? options.slice(0, 3) : fallbackServices.slice(1, 4)).map((service) => (
              <ServiceCard key={service._id} service={service} lang={lang} />
            ))}
          </div>

          {options.length > 3 && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {options.slice(3).map((service) => (
                <ServiceCard key={service._id} service={service} lang={lang} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 md:px-16 py-20 md:py-30">
        <div className="overflow-hidden rounded-xl bg-primary text-on-primary flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 md:p-14 lg:p-16">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-primary-fixed">
              {lang === 'en' ? 'Supportive Care - シニア＆NDIS支援' : 'SUPPORTIVE CARE - Seniors & NDIS'}
            </span>
            <h2 className="mb-6 text-2xl md:text-[32px] font-normal leading-[1.3]">
              {supportService
                ? (lang === 'en' ? supportService.name_en : supportService.name_ja)
                : (lang === 'en' ? 'Seniors & NDIS Support' : 'シニア・NDIS支援')}
            </h2>
            <p className="mb-8 text-primary-fixed leading-relaxed">
              {supportService
                ? localizedDescription(supportService, lang)
                : (lang === 'en'
                  ? 'A gentle, safety-conscious approach for community members who need a helping hand. We prioritise consistency and trust.'
                  : '清潔で安全な住まいを保つための、穏やかで継続しやすいサポートです。')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                ['alarm', supportService?.duration || (lang === 'en' ? '1-hour minimum' : '1時間から')],
                ['payments', supportService?.price || '$50+ / hr'],
                ['verified_user', lang === 'en' ? 'Trust focused' : '信頼重視'],
                ['health_and_safety', lang === 'en' ? 'Safety-first' : '安全第一'],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-fixed">{icon}</span>
                  <span className="text-lg font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[320px] w-full md:w-1/2">
            <Image
              src={supportImage}
              alt="Supportive home care in a bright room"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 text-center pb-20 md:pb-30">
        <h3 className="mb-8 text-xs font-semibold uppercase tracking-widest text-outline">
          {lang === 'en' ? 'The Path to Zen' : '整いへの道'}
        </h3>
        <div className="relative flex justify-between items-center px-4">
          <div className="absolute left-0 top-1/2 z-0 h-px w-full -translate-y-1/2 bg-outline-variant" />
          {[0, 1, 2, 3].map((step) => (
            <div
              key={step}
              className={`relative z-10 size-3 rounded-full ring-4 ring-background ${
                step < 3 ? 'bg-primary' : 'bg-outline-variant'
              }`}
            />
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          {(lang === 'en' ? ['Consult', 'Service', 'Check', 'Peace'] : ['相談', '清掃', '確認', '安らぎ']).map((step, index) => (
            <span
              key={step}
              className={`text-xs font-semibold uppercase tracking-widest ${
                index < 3 ? 'text-on-surface-variant' : 'text-outline'
              }`}
            >
              {step}
            </span>
          ))}
        </div>
      </section>

      <PricingContent services={services} contact={contact} pageText={pageText} embedded />
    </div>
  )
}

function localizedDescription(service: ServiceDetail, lang: 'en' | 'ja') {
  const text = lang === 'en' ? service.description_en : service.description_ja
  if (text) return text
  return lang === 'en'
    ? 'A carefully tailored OMAKASE service for your home.'
    : 'ご自宅に合わせて丁寧にご提案するOMAKASEサービスです。'
}

function ServiceLabel({ service, lang }: { service: ServiceDetail; lang: 'en' | 'ja' }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-container/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
      {service.duration && <span>{service.duration}</span>}
      {service.duration && <span>-</span>}
      <span>{lang === 'en' ? service.name_ja : service.name_en}</span>
    </div>
  )
}

function ServiceChecklist({ service, lang }: { service: ServiceDetail; lang: 'en' | 'ja' }) {
  const fallback = lang === 'en'
    ? ['Kitchen and dining areas', 'Bathroom and toilet care', 'Vacuuming, mopping, and tidying']
    : ['キッチン・ダイニング', '浴室・トイレ清掃', '掃除機・モップ・整頓']
  const points = localizedDescription(service, lang)
    .split(/[.\n。]/)
    .map((item) => item.trim())
    .filter((item) => item.length > 8)
    .slice(0, 3)

  return (
    <ul className="space-y-4">
      {(points.length > 0 ? points : fallback).map((point) => (
        <li key={point} className="flex items-start gap-3">
          <ServiceIcon icon={service.icon || 'cleaning_services'} className="text-primary" />
          <p className="text-on-surface-variant">{point}</p>
        </li>
      ))}
    </ul>
  )
}

function ServiceCard({ service, lang }: { service: ServiceDetail; lang: 'en' | 'ja' }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-outline-variant/10 bg-surface p-8 transition-transform hover:-translate-y-1">
      <div className="mb-6 flex items-start justify-between gap-4">
        <ServiceIcon icon={service.icon || 'cleaning_services'} className="text-4xl text-primary" />
        {service.price && <span className="text-lg font-medium text-primary">{service.price}</span>}
      </div>
      {service.isHighlighted && (
        <span className="mb-3 self-start rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-on-primary">
          {lang === 'en' ? 'Popular' : '人気'}
        </span>
      )}
      <h3 className="mb-2 text-xl font-medium">{lang === 'en' ? service.name_en : service.name_ja}</h3>
      <ServiceDescription service={service} lang={lang} />
      {service.duration && (
        <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-outline">
          {service.duration}
        </p>
      )}
      <Link
        href="/services#booking"
        className="inline-flex items-center justify-center rounded-full border border-secondary px-5 py-2 text-xs font-semibold uppercase tracking-widest text-secondary transition-colors hover:bg-secondary hover:text-on-secondary"
      >
        {lang === 'en' ? 'Book This Service' : 'このサービスを予約'}
      </Link>
    </article>
  )
}

function ServiceDescription({ service, lang }: { service: ServiceDetail; lang: 'en' | 'ja' }) {
  const lines = localizedDescription(service, lang)
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  if (lines.length <= 1) {
    return (
      <p className="mb-6 flex-grow text-on-surface-variant leading-relaxed">
        {lines[0]}
      </p>
    )
  }

  const [intro, ...items] = lines

  return (
    <div className="mb-6 flex-grow">
      <p className="mb-4 text-on-surface-variant leading-relaxed">{intro}</p>
      <div className="divide-y divide-outline-variant/30 rounded-lg border border-outline-variant/20 bg-surface-container-lowest">
        {items.map((item) => {
          const [name, price] = item.split(/\s+[—-]\s+/)
          return (
            <div key={item} className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
              <span className="text-on-surface">{name || item}</span>
              {price && <span className="shrink-0 font-medium text-primary">{price}</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ServiceIcon({ icon, className = '' }: { icon: string; className?: string }) {
  const isMaterialIcon = icon.includes('_') || /^[a-z]+$/.test(icon)

  if (isMaterialIcon) {
    return <span className={`material-symbols-outlined ${className}`}>{icon}</span>
  }

  return <span className={className}>{icon}</span>
}
