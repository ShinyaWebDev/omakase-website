'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const audiences = {
  en: [
    {
      title: 'Busy Families',
      body: 'Reset the home after full days, school runs, meals, and the beautiful mess of family life.',
      label: '忙しいご家族へ',
      span: 'md:row-span-2',
      tint: 'from-on-surface/80',
      image:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Japanese Expats & Professionals',
      body: 'Experience the familiar quality of Japan in Australia, with clear communication and high standards.',
      label: '日本人駐在員・プロフェッショナルの方へ',
      span: 'md:col-span-2',
      tint: 'from-primary/80',
      image:
        'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Seniors & NDIS Clients',
      body: 'Respectful, patient support for maintaining a clean, safe, and dignified home.',
      label: 'シニア・NDISをご利用の方へ',
      span: 'md:col-span-2',
      tint: 'from-secondary/80',
      image:
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80',
    },
  ],
  ja: [
    {
      title: '忙しいご家族へ',
      body: '仕事、学校、食事、家族の毎日で散らかった空間を、心地よくリセットします。',
      label: 'Busy Families',
      span: 'md:row-span-2',
      tint: 'from-on-surface/80',
      image:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: '日本人駐在員・プロフェッショナルの方へ',
      body: '日本の基準に近い丁寧さと、安心できるコミュニケーションでサポートします。',
      label: 'Japanese Expats & Professionals',
      span: 'md:col-span-2',
      tint: 'from-primary/80',
      image:
        'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'シニア・NDISをご利用の方へ',
      body: '清潔で安全な住まいを保つために、敬意を持って穏やかにお手伝いします。',
      label: 'Seniors & NDIS Clients',
      span: 'md:col-span-2',
      tint: 'from-secondary/80',
      image:
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80',
    },
  ],
}

export default function AudienceSection() {
  const { lang } = useLanguage()
  const items = audiences[lang]

  return (
    <section className="bg-surface-container-low paper-texture py-24 md:py-30">
      <div className="max-w-[1200px] mx-auto px-4 md:px-16">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-[32px] font-normal leading-[1.3] mb-4">
            {lang === 'en' ? 'Tailored for Your Lifestyle' : 'あなたのライフスタイルに寄り添って'}
            <span className="block font-light text-on-surface-variant">
              {lang === 'en' ? 'あなたのライフスタイルに寄り添って' : 'Tailored for Your Lifestyle'}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-6 md:h-[600px]">
          {items.map((item) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface shadow-sm transition-transform duration-300 hover:-translate-y-1 ${item.span}`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${item.tint} via-transparent to-transparent`} />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <h3 className="text-xl font-medium leading-[1.4] mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{item.body}</p>
                <p className="mt-4 text-[10px] font-semibold tracking-widest uppercase opacity-80">
                  {item.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
