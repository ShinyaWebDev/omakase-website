'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function PathToZenSection() {
  const { lang } = useLanguage()

  const steps = lang === 'en'
    ? ['Consult', 'Service', 'Check', 'Peace']
    : ['ご相談', 'サービス', '確認', '安らぎ']

  return (
    <section className="max-w-3xl mx-auto px-4 text-center py-30">
      <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-outline mb-8">
        {lang === 'en' ? 'THE PATH TO ZEN' : '整いへの道'}
      </h3>

      <div className="relative flex justify-between items-center px-4">
        <div className="absolute top-1/2 left-0 w-full h-px bg-outline-variant -translate-y-1/2 z-0" />
        {steps.map((step, i) => (
          <div
            key={step}
            className={`relative z-10 w-3 h-3 rounded-full ring-4 ring-background ${
              i < steps.length - 1 ? 'bg-primary' : 'bg-outline-variant'
            }`}
          />
        ))}
      </div>

      <div className="flex justify-between mt-4 px-1">
        {steps.map((step, i) => (
          <span
            key={step}
            className={`text-xs font-semibold tracking-widest ${
              i < steps.length - 1 ? 'text-on-surface-variant' : 'text-outline'
            }`}
          >
            {step}
          </span>
        ))}
      </div>
    </section>
  )
}
