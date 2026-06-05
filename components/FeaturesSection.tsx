'use client'

import { useLanguage } from '@/context/LanguageContext'
import type { Feature } from '@/types/sanity'

const fallbackFeatures: Feature[] = [
  {
    _id: 'f1',
    order: 1,
    icon: 'favorite',
    title_en: 'Omotenashi Spirit',
    title_ja: 'おもてなしの心',
    description_en: 'Wholehearted hospitality in every corner.',
    description_ja: '隅々まで心を込めたおもてなし。',
  },
  {
    _id: 'f2',
    order: 2,
    icon: 'do_not_step',
    title_en: 'Japanese-Style Shoes Off',
    title_ja: '日本式・土足厳禁',
    description_en: "Respecting your home's sacred boundaries.",
    description_ja: '大切な住まいの境界を丁寧に尊重します。',
  },
  {
    _id: 'f3',
    order: 3,
    icon: 'flare',
    title_en: 'Meticulous Attention',
    title_ja: '細部へのこだわり',
    description_en: 'No detail is too small for our precision.',
    description_ja: '小さな箇所まで丁寧に整えます。',
  },
]

interface Props {
  features: Feature[]
}

function FeatureIcon({ icon }: { icon: string | undefined }) {
  const isMaterialIcon = icon && !icon.includes(' ') && icon === icon.toLowerCase()

  if (isMaterialIcon) {
    return (
      <span className="material-symbols-outlined text-primary text-3xl shrink-0">
        {icon}
      </span>
    )
  }

  return <div className="text-3xl shrink-0">{icon}</div>
}

export default function FeaturesSection({ features }: Props) {
  const { lang } = useLanguage()
  const items = features.length > 0 ? features : fallbackFeatures

  const jaLabels: Record<string, string> = {
    'f1': '土足厳禁',
    'f2': '細部へのこだわり',
    'f3': '時間厳守',
  }

  return (
    <section className="bg-surface-container py-10 md:py-12 border-y border-outline-variant/20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((feature) => (
          <div
            key={feature._id}
            className="flex items-center gap-4"
          >
            {/* <FeatureIcon icon={feature.icon} /> */}
            <div>
              <h3 className="text-lg md:text-xl font-medium leading-[1.4] mb-1">
                {lang === 'en' ? feature.title_en : feature.title_ja}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {lang === 'en' ? feature.description_en : feature.description_ja}
              </p>
              {lang === 'en' && jaLabels[feature._id] && (
                <p className="mt-2 text-outline text-[10px] font-semibold japanese-label">
                  {jaLabels[feature._id]}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
