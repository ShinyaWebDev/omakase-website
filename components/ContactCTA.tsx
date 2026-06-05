'use client'

import { useLanguage } from '@/context/LanguageContext'
import type { Contact, PageText } from '@/types/sanity'

interface Props {
  contact: Contact | null
  pageText: PageText | null
}

export default function ContactCTA({ contact, pageText }: Props) {
  const { lang } = useLanguage()

  const ctaHeading = lang === 'en'
    ? (pageText?.home_cta_heading_en || 'Ready to Begin?')
    : (pageText?.home_cta_heading_ja || 'ご予約はこちら')

  const ctaBody = lang === 'en'
    ? (pageText?.home_cta_body_en || 'Reach out via WhatsApp, LINE, or phone. We respond quickly!')
    : (pageText?.home_cta_body_ja || 'WhatsApp・LINE・お電話にてお気軽にどうぞ。すぐにご返信いたします。')

  const whatsappUrl = contact?.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`
    : null
  const lineUrl = contact?.line_id
    ? `https://line.me/R/ti/p/@${contact.line_id}`
    : null
  const phoneUrl = contact?.phone ? `tel:${contact.phone.replace(/\s/g, '')}` : null
  const note = lang === 'en' ? contact?.booking_note_en : contact?.booking_note_ja

  return (
    <section className="bg-primary text-on-primary py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-16 text-center">
        <p className="text-on-primary/70 text-xs font-semibold tracking-widest uppercase mb-4">
          {lang === 'en' ? 'Get in Touch' : 'お問い合わせ'}
        </p>
        <h2 className="text-[32px] md:text-[56px] font-light leading-[1.2] mb-6">
          {ctaHeading}
        </h2>
        <p className="text-primary-fixed text-lg leading-relaxed mb-3 max-w-xl mx-auto">
          {ctaBody}
        </p>
        {note && (
          <p className="text-on-primary/60 text-sm mb-8 italic">{note}</p>
        )}

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-on-primary text-[#25D366] font-semibold rounded-full hover:bg-on-primary/90 transition-colors text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          )}
          {lineUrl && (
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-on-primary text-[#06C755] font-semibold rounded-full hover:bg-on-primary/90 transition-colors text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINE
            </a>
          )}
          {phoneUrl && contact?.phone && (
            <a
              href={phoneUrl}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-on-primary text-on-surface font-semibold rounded-full hover:bg-on-primary/90 transition-colors text-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {contact.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
