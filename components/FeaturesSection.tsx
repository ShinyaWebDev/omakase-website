'use client'

import { useLanguage } from '@/context/LanguageContext'
import type { Feature } from '@/types/sanity'

const fallbackFeatures: Feature[] = [
  {
    _id: 'f1',
    order: 1,
    icon: '🧘',
    title_en: 'Cleaning is Therapy',
    title_ja: 'お掃除はセラピー',
    description_en: "A clean space resets your mind. We're not just tidying rooms — we're helping you reclaim your calm, focus, and quality of life.",
    description_ja: '整った空間は、心をリセットします。ただ部屋をきれいにするだけでなく、暮らしの質を高めるお手伝いをしています。',
  },
  {
    _id: 'f2',
    order: 2,
    icon: '👁',
    title_en: 'The No-Miss Gaze',
    title_ja: '見逃さない視線',
    description_en: 'Window frames, switch plates, skirting boards, every corner of the water area. We see what others overlook — and we clean it.',
    description_ja: '窓枠・スイッチ周り・スカーティング・水回りの細部まで。他が見落とすところを、私たちは見逃しません。',
  },
  {
    _id: 'f3',
    order: 3,
    icon: '🤝',
    title_en: 'Flexible & Personal',
    title_ja: '柔軟なサービス',
    description_en: 'One-off trial, regular visits, pair cleaning sessions, elderly support — we adapt to what you actually need, not a fixed package.',
    description_ja: 'お試し単発・定期訪問・ペア掃除・高齢者向けプランなど、お客様のニーズに合わせてカスタマイズします。',
  },
]

interface Props {
  features: Feature[]
}

export default function FeaturesSection({ features }: Props) {
  const { lang } = useLanguage()
  const items = features.length > 0 ? features : fallbackFeatures

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            {lang === 'en' ? 'Why Choose Us' : 'なぜOMAKASEか'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            {lang === 'en' ? 'Why OMAKASE?' : 'OMAKASEを選ぶ理由'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((feature) => (
            <div
              key={feature._id}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-teal/20 hover:shadow-lg transition-all duration-300 bg-warm-white"
            >
              {feature.icon && (
                <div className="text-4xl mb-5">{feature.icon}</div>
              )}
              <h3 className="text-xl font-bold text-navy mb-3">
                {lang === 'en' ? feature.title_en : feature.title_ja}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {lang === 'en' ? feature.description_en : feature.description_ja}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
