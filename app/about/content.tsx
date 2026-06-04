'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import type { About, Feature } from '@/types/sanity'

const fallbackCopy = {
  en: {
    heading: 'About OMAKASE',
    lead: '"Cleaning is Therapy" — we believe a tidy space doesn\'t just look good. It resets your mind, restores your focus, and genuinely improves your day.',
    body: [
      'OMAKASE means "leave it to us" — and that\'s exactly the relationship we\'re here to build. Hand over your home with full confidence, and we\'ll take care of it with the precision and respect it deserves.',
      'We know the feeling: a messy room that kills your concentration. A home you can\'t relax in. A to-do list that never ends. Housework shouldn\'t be one more thing weighing you down. That\'s where we come in.',
      'Our cleaning style is rooted in Japanese tradition — shoes off at the door, eyes trained to catch what others miss (window frames, switch plates, skirting boards, every corner of the bathroom). We show up on time, dressed neatly, and treat your home as if it were our own.',
      'We serve busy families, remote workers, elderly residents, and the Japanese community across Sydney\'s Lower North Shore. Whether you need a one-off reset or a regular visit, we\'ll work with you.',
    ],
  },
  ja: {
    heading: 'OMAKASEについて',
    lead: '「お掃除はセラピー」― 空間を整えることは、心と体を整えること。私たちはそう信じています。',
    body: [
      '「おまかせ」とは、信頼して委ねること。お客様が安心してお家を預けられるサービスを、誠実にお届けするために、私たちは存在しています。',
      '散らかった部屋では集中できない。家にいてもリラックスできない。家事の負担で疲れ果てている。そんな日常のストレスを、「整った空間」が解決へ導きます。これがまさに、"Cleaning is Therapy"の考え方です。',
      '私たちのスタイルは日本式。玄関で靴を脱ぎ、「見逃さない視線」で細部まで丁寧に。窓枠、スイッチ周り、スカーティング、水回りの隅々まで。時間厳守、清潔な身だしなみ、礼儀を大切にした、日本人クオリティをお約束します。',
      '共働きや在宅ワークのご家庭、高齢者のお客様、シドニー在住の日本人の方まで、ローワーノースショアを中心に幅広くご対応。単発のリセット清掃から定期訪問まで、柔軟にご相談ください。',
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

export default function AboutContent({ about, features }: Props) {
  const { lang } = useLanguage()
  const fb = fallbackCopy[lang]

  const heading = about?.[`heading_${lang}` as keyof About] as string | undefined || fb.heading
  const lead = about?.[`lead_${lang}` as keyof About] as string | undefined || fb.lead
  const bodyRaw = about?.[`body_${lang}` as keyof About] as string | undefined
  const paragraphs = bodyRaw ? parseParagraphs(bodyRaw) : fb.body

  return (
    <div className="min-h-screen bg-warm-white">
      <div className="bg-navy text-white py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            {lang === 'en' ? 'Our Story' : '私たちについて'}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{heading}</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">{lead}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-5 mb-14">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {para}
            </p>
          ))}
        </div>

        {features.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-navy mb-8 text-center">
              {lang === 'en' ? 'What We Stand For' : '私たちの大切にすること'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
              {features.map((f) => (
                <div
                  key={f._id}
                  className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow"
                >
                  {f.icon && <div className="text-3xl mb-3">{f.icon}</div>}
                  <h3 className="font-bold text-navy mb-1.5">
                    {lang === 'en' ? f.title_en : f.title_ja}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {lang === 'en' ? f.description_en : f.description_ja}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-full hover:bg-opacity-90 transition-all duration-200"
          >
            {lang === 'en' ? 'Book a Clean' : '予約する'}
          </Link>
        </div>
      </div>
    </div>
  )
}
