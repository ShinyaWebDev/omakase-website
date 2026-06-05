'use client'

import type { FormEvent, ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import type { Service, Contact, PageText } from '@/types/sanity'

interface Props {
  services: Service[]
  contact: Contact | null
  pageText: PageText | null
  embedded?: boolean
}

interface PricingPlan {
  id: string
  title_en: string
  title_ja: string
  subtitle_en: string
  subtitle_ja: string
  price: string
  note_en: string
  note_ja: string
  features_en: string[]
  features_ja: string[]
  action_en: string
  action_ja: string
  highlighted?: boolean
}

interface ContactAction {
  href: string
  eyebrow: string
  label: string
  icon: string
  external?: boolean
}

const fallbackPlans: PricingPlan[] = [
  {
    id: 'standard',
    title_en: 'Standard Ritual',
    title_ja: 'スタンダード清掃',
    subtitle_en: 'Regular maintenance',
    subtitle_ja: '定期的な清掃',
    price: '$55 / hr',
    note_en: 'Minimum 2 hours per visit',
    note_ja: '1回2時間から',
    features_en: [
      'Dusting and surface polishing',
      'Vacuuming and mopping',
      'Bathroom sanitisation',
      'Kitchen countertop care',
    ],
    features_ja: [
      'ホコリ取り・表面拭き上げ',
      '掃除機・モップがけ',
      '浴室・トイレの清掃',
      'キッチン天板のケア',
    ],
    action_en: 'Select Plan',
    action_ja: 'このプランを選ぶ',
  },
  {
    id: 'detail',
    title_en: 'Omakase Detail',
    title_ja: 'おまかせディープ清掃',
    subtitle_en: 'Deep cleaning',
    subtitle_ja: '集中清掃',
    price: '$75 / hr',
    note_en: 'Deep sanitisation and detail work',
    note_ja: '細部まで整える集中ケア',
    features_en: [
      'All Standard Ritual services',
      'Inside cabinets and oven',
      'Window tracks and skirting boards',
      'Limescale removal and grout detail',
    ],
    features_ja: [
      'スタンダード清掃の全内容',
      '棚内部・オーブン清掃',
      '窓レール・巾木の清掃',
      '水垢・目地の細部ケア',
    ],
    action_en: 'Book Deep Clean',
    action_ja: 'ディープ清掃を予約',
    highlighted: true,
  },
  {
    id: 'custom',
    title_en: 'Custom Sanctuary',
    title_ja: 'カスタム清掃',
    subtitle_en: 'Bespoke services',
    subtitle_ja: '特別オーダー',
    price: 'Quote',
    note_en: 'For events, move-in, or special needs',
    note_ja: '引越し・イベント・特別なご要望に',
    features_en: [
      'Move-in and move-out cleans',
      'Post-renovation dust clearing',
      'Decluttering and organisation',
      'Wall washing and extra care',
    ],
    features_ja: [
      '入居前・退去後清掃',
      'リノベーション後の粉塵清掃',
      '片付け・整理整頓',
      '壁拭きなど追加ケア',
    ],
    action_en: 'Inquire Now',
    action_ja: '相談する',
  },
]

const areas = ['St Leonards', 'Chatswood', 'Crows Nest', 'Artarmon', 'Willoughby', 'Cremorne']

function serviceToPlan(service: Service, index: number): PricingPlan {
  const descriptionEn = service.description_en?.split('\n').filter(Boolean) ?? []
  const descriptionJa = service.description_ja?.split('\n').filter(Boolean) ?? []

  return {
    id: service._id,
    title_en: service.name_en,
    title_ja: service.name_ja,
    subtitle_en: service.duration || 'OMAKASE service',
    subtitle_ja: service.duration || 'OMAKASEサービス',
    price: service.price || 'Quote',
    note_en: service.duration || 'Tailored to your home',
    note_ja: service.duration || 'ご自宅に合わせてご提案',
    features_en: descriptionEn.length > 0 ? descriptionEn : fallbackPlans[index % fallbackPlans.length].features_en,
    features_ja: descriptionJa.length > 0 ? descriptionJa : fallbackPlans[index % fallbackPlans.length].features_ja,
    action_en: service.isHighlighted ? 'Book This Service' : 'Select Plan',
    action_ja: service.isHighlighted ? 'このサービスを予約' : 'このプランを選ぶ',
    highlighted: service.isHighlighted,
  }
}

export default function PricingContent({ services, contact, pageText, embedded = false }: Props) {
  const { lang } = useLanguage()
  const [selectedPlan, setSelectedPlan] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const plans = useMemo(
    () => (services.length > 0 ? services.slice(0, 3).map(serviceToPlan) : fallbackPlans),
    [services],
  )

  const heroDesc = lang === 'en'
    ? (pageText?.services_hero_desc_en || "Experience the ritual of Japanese precision. Simple, honest pricing designed for residents of Sydney's Lower North Shore.")
    : (pageText?.services_hero_desc_ja || 'シドニー・ローワーノースショア地域の皆様へ、日本の高い清掃技術を明確な料金体系でお届けします。')

  const whatsappUrl = contact?.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`
    : null
  const lineUrl = contact?.line_id
    ? `https://line.me/R/ti/p/@${contact.line_id}`
    : null
  const phoneUrl = contact?.phone ? `tel:${contact.phone.replace(/\s/g, '')}` : null
  const emailUrl = contact?.email ? `mailto:${contact.email}` : null

  const contactActions: ContactAction[] = [
    phoneUrl && {
      href: phoneUrl,
      eyebrow: 'Phone / SMS',
      label: contact?.phone ?? '',
      icon: 'call',
    },
    whatsappUrl && {
      href: whatsappUrl,
      eyebrow: 'WhatsApp',
      label: contact?.whatsapp ?? 'Message us',
      icon: 'chat_bubble',
      external: true,
    },
    lineUrl && {
      href: lineUrl,
      eyebrow: 'LINE',
      label: contact?.line_id ? `@${contact.line_id}` : 'Japanese support',
      icon: 'forum',
      external: true,
    },
    emailUrl && {
      href: emailUrl,
      eyebrow: 'Email',
      label: contact?.email ?? '',
      icon: 'mail',
    },
  ].filter(Boolean) as ContactAction[]

  function handlePlanSelect(title: string) {
    setSelectedPlan(title)
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = [
      'OMAKASE booking request',
      `Name: ${form.get('name') || ''}`,
      `Language: ${form.get('language') || ''}`,
      `Address: ${form.get('address') || ''}`,
      `Service: ${form.get('service') || selectedPlan}`,
      `Preferred date: ${form.get('date') || ''}`,
      `Notes: ${form.get('notes') || ''}`,
    ].join('\n')

    setSubmitted(true)

    if (contact?.email) {
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('OMAKASE booking request')}&body=${encodeURIComponent(message)}`
      return
    }

    if (whatsappUrl) {
      window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className={embedded ? '' : 'min-h-screen bg-background pt-18'}>
      {!embedded && (
      <section className="max-w-[1200px] mx-auto px-4 md:px-16 py-20 md:py-30 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="space-y-6">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">
            {lang === 'en' ? 'Transparent Pricing - 明確な料金体系' : '明確な料金体系 - Transparent Pricing'}
          </span>
          <h1 className="text-[36px] md:text-[56px] font-light leading-[1.15] text-on-surface">
            {lang === 'en' ? (
              <>
                Premium cleaning for your <span className="italic text-primary">sanctuary</span>.
              </>
            ) : (
              <>
                大切な住まいを、<span className="italic text-primary">整う空間</span>へ。
              </>
            )}
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
            {heroDesc}
          </p>
          <div className="flex flex-wrap gap-3">
            {areas.slice(0, 4).map((area) => (
              <span
                key={area}
                className="rounded-full bg-secondary-container px-4 py-1 text-sm font-medium text-on-secondary-container"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-[380px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
            alt="Calm modern apartment interior prepared for professional cleaning"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent" />
        </div>
      </section>
      )}

      {!embedded && (
      <section id="pricing" className="bg-surface-container py-20 md:py-30 scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-16">
          <div className="text-center mb-14 space-y-2">
            <h2 className="text-2xl md:text-[32px] font-normal leading-[1.3] text-on-surface">
              {lang === 'en' ? 'Choose Your Path to Zen' : 'サービスのプランをお選びください'}
            </h2>
            <p className="text-on-surface-variant italic">
              {lang === 'en' ? 'サービスのプランをお選びください' : 'Choose Your Path to Zen'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const title = lang === 'en' ? plan.title_en : plan.title_ja
              return (
                <PricingCard
                  key={plan.id}
                  plan={plan}
                  title={title}
                  lang={lang}
                  onSelect={() => handlePlanSelect(title)}
                />
              )
            })}
          </div>
        </div>
      </section>
      )}

      <section id="booking" className="max-w-[1200px] mx-auto px-4 md:px-16 py-20 md:py-30 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 scroll-mt-24">
        <div className="lg:col-span-7 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-6 md:p-12 shadow-sm paper-texture">
          <div className="mb-10">
            <h2 className="text-2xl md:text-[32px] font-normal leading-[1.3] text-on-surface">
              {lang === 'en' ? 'Book Your Session' : 'ご予約・お問い合わせ'}
            </h2>
            <p className="text-on-surface-variant italic">
              {lang === 'en' ? 'ご予約・お問い合わせ' : 'Book Your Session'}
            </p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BookingField label="Full Name / 氏名">
                <input name="name" className={fieldClassName} placeholder="Yuki Tanaka" type="text" required />
              </BookingField>
              <BookingField label="Language / 対応言語">
                <select name="language" className={fieldClassName} defaultValue={lang === 'en' ? 'English preferred' : '日本語希望'}>
                  <option>English preferred</option>
                  <option>日本語希望</option>
                  <option>Bilingual / Both</option>
                </select>
              </BookingField>
            </div>

            <BookingField label="Address / 住所">
              <input
                name="address"
                className={fieldClassName}
                placeholder="e.g. Pacific Hwy, St Leonards NSW 2065"
                type="text"
                required
              />
            </BookingField>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BookingField label="Service Type / サービスの種類">
                <select
                  name="service"
                  className={fieldClassName}
                  value={selectedPlan}
                  onChange={(event) => setSelectedPlan(event.target.value)}
                  required
                >
                  <option value="">{lang === 'en' ? 'Select a service' : 'サービスを選択'}</option>
                  {plans.map((plan) => (
                    <option key={plan.id} value={lang === 'en' ? plan.title_en : plan.title_ja}>
                      {lang === 'en' ? plan.title_en : plan.title_ja}
                    </option>
                  ))}
                </select>
              </BookingField>
              <BookingField label="Preferred Date / 希望日">
                <input name="date" className={fieldClassName} type="date" />
              </BookingField>
            </div>

            <BookingField label="Additional Notes / 備考">
              <textarea
                name="notes"
                className={fieldClassName}
                placeholder={lang === 'en' ? 'Specific areas of focus, parking instructions, pets...' : '重点的に清掃したい箇所、駐車場所、ペットの有無など'}
                rows={3}
              />
            </BookingField>

            <button
              className="w-full rounded-xl bg-primary py-4 font-medium tracking-wide text-on-primary shadow-lg transition-opacity hover:opacity-90"
              type="submit"
            >
              {submitted ? (lang === 'en' ? 'Request prepared' : '送信内容を準備しました') : 'Submit Request - 送信する'}
            </button>
          </form>
        </div>

        <aside className="lg:col-span-5 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-[32px] font-normal leading-[1.3] text-on-surface">
              {lang === 'en' ? 'Direct Contact' : '直接お問い合わせ'}
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              {lang === 'en'
                ? 'Prefer a quick chat? Reach out via any platform. We will help you choose the right service before confirming a booking.'
                : 'まずは気軽に相談したい方は、各種連絡先からお問い合わせください。ご予約前のご相談も歓迎です。'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {contactActions.length > 0 ? (
              contactActions.map((action) => (
                <a
                  key={action.eyebrow}
                  className="group flex items-center rounded-xl bg-surface-container p-4 transition-colors hover:bg-primary-container"
                  href={action.href}
                  target={action.external ? '_blank' : undefined}
                  rel={action.external ? 'noopener noreferrer' : undefined}
                >
                  <span className="mr-4 grid size-12 place-items-center rounded-full bg-surface-container-highest transition-colors group-hover:bg-on-primary">
                    <span className="material-symbols-outlined text-primary">{action.icon}</span>
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-outline">{action.eyebrow}</span>
                    <span className="font-medium text-on-surface">{action.label}</span>
                  </span>
                </a>
              ))
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-4 font-medium text-on-primary"
              >
                {lang === 'en' ? 'Contact us' : 'お問い合わせ'}
              </Link>
            )}
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <div className="mb-3 flex items-center">
              <span className="material-symbols-outlined mr-2 text-primary">location_on</span>
              <h3 className="font-medium text-primary">
                {lang === 'en' ? 'Our Home Base' : '対応エリア'}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              {lang === 'en'
                ? 'We primarily serve the Lower North Shore, with dedicated availability in St Leonards, Chatswood, Crows Nest, Willoughby, and Artarmon.'
                : 'ローワーノースショアを中心に、St Leonards、Chatswood、Crows Nest、Willoughby、Artarmon周辺で対応しています。'}
            </p>
          </div>
        </aside>
      </section>
    </div>
  )
}

const fieldClassName = 'border-b border-outline-variant focus:border-primary outline-none py-2 bg-transparent transition-colors text-on-surface placeholder:text-outline'

function BookingField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col space-y-2">
      <span className="text-xs font-bold uppercase tracking-wider text-outline">{label}</span>
      {children}
    </label>
  )
}

function PricingCard({
  plan,
  title,
  lang,
  onSelect,
}: {
  plan: PricingPlan
  title: string
  lang: 'en' | 'ja'
  onSelect: () => void
}) {
  const features = lang === 'en' ? plan.features_en : plan.features_ja

  return (
    <article
      className={`relative flex h-full flex-col rounded-xl bg-surface-container-lowest p-8 transition-all duration-300 ${
        plan.highlighted
          ? 'z-10 border-2 border-primary shadow-2xl md:scale-105'
          : 'border border-outline-variant/30 hover:-translate-y-1 hover:shadow-xl'
      }`}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-on-primary">
          {lang === 'en' ? 'Most Popular' : '人気'}
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-medium leading-[1.4] text-on-surface">{title}</h3>
        <p className="text-sm text-on-surface-variant">
          {lang === 'en' ? plan.subtitle_en : plan.subtitle_ja}
        </p>
      </div>
      <div className="mb-6">
        <span className="text-4xl font-light text-primary">{plan.price}</span>
        <p className="mt-2 text-xs italic text-outline">
          {lang === 'en' ? plan.note_en : plan.note_ja}
        </p>
      </div>
      <ul className="mb-8 flex-grow space-y-4">
        {features.slice(0, 5).map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="material-symbols-outlined mt-0.5 text-sm text-primary">check_circle</span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full rounded-lg py-3 font-medium transition-colors ${
          plan.highlighted
            ? 'bg-primary text-on-primary shadow-md hover:opacity-90'
            : 'border border-primary text-primary hover:bg-primary hover:text-on-primary'
        }`}
        type="button"
        onClick={onSelect}
      >
        {lang === 'en' ? plan.action_en : plan.action_ja}
      </button>
    </article>
  )
}
