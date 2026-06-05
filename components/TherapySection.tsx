'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const copy = {
  en: {
    heading: 'The Ritual of Clarity',
    subheading: '清掃という名の、心の調律',
    lead:
      'In Japanese culture, cleaning is not just about hygiene; it is a mindful practice called Soji. By refining your physical environment, you restore inner peace.',
    body:
      'At OMAKASE, we do not simply clean your home. We perform a restorative ritual that clears visual clutter and creates a sanctuary where you can truly breathe.',
    points: [
      'Mindful organization that reduces stress',
      'Natural, non-toxic cleaning rituals',
      'Quiet service that respects your solitude',
    ],
  },
  ja: {
    heading: '清掃という名の、心の調律',
    subheading: 'The Ritual of Clarity',
    lead:
      '日本では、掃除は衛生のためだけではなく、心を整える所作でもあります。空間を磨くことで、気持ちにも静けさが戻ります。',
    body:
      'OMAKASEは、ただ汚れを落とすだけではありません。目に入る乱れを整え、深く息ができるような住まいをつくります。',
    points: [
      'ストレスを減らす、丁寧な整理整頓',
      '自然で安心できる清掃へのこだわり',
      '暮らしの静けさを尊重するサービス',
    ],
  },
}

export default function TherapySection() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <section id="about" className="py-24 md:py-30 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 size-24 rounded-full bg-primary-container/10" />
              <div className="relative h-[360px] md:h-[500px] w-full overflow-hidden rounded-lg shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=80"
                alt="Carefully cleaned bright kitchen with calm natural light"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-[32px] md:text-[40px] font-light leading-[1.25] mb-6 text-primary">
              {t.heading}
              <span className="block text-2xl md:text-[32px] text-on-surface-variant">
                {t.subheading}
              </span>
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              {t.lead}
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              {t.body}
            </p>
            <ul className="space-y-4">
              {t.points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
