export type Lang = 'en' | 'ja'

export interface SanityImageAsset {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  hotspot?: { x: number; y: number; height: number; width: number }
}

export interface Hero {
  tagline_en?: string
  tagline_ja?: string
  heading_en?: string
  heading_ja?: string
  subheading_en?: string
  subheading_ja?: string
  cta_label_en?: string
  cta_label_ja?: string
  background_image?: SanityImageAsset
}

export interface Service {
  _id: string
  order?: number
  name_en: string
  name_ja: string
  description_en?: string
  description_ja?: string
  price?: string
  duration?: string
  isHighlighted?: boolean
  icon?: string
}

export interface Area {
  _id: string
  suburb: string
  isActive: boolean
  isComingSoon: boolean
  order?: number
}

export interface FAQ {
  _id: string
  order?: number
  question_en: string
  question_ja: string
  answer_en: string
  answer_ja: string
}

export interface Contact {
  phone?: string
  email?: string
  whatsapp?: string
  instagram_handle?: string
  line_id?: string
  booking_note_en?: string
  booking_note_ja?: string
}

export interface SiteSettings {
  site_name?: string
  logo?: SanityImageAsset
  meta_description_en?: string
  meta_description_ja?: string
  default_language?: Lang
}

export interface PageText {
  areas_hero_desc_en?: string; areas_hero_desc_ja?: string
  areas_cta_heading_en?: string; areas_cta_heading_ja?: string
  areas_cta_body_en?: string; areas_cta_body_ja?: string
  services_hero_desc_en?: string; services_hero_desc_ja?: string
  services_cta_heading_en?: string; services_cta_heading_ja?: string
  services_cta_body_en?: string; services_cta_body_ja?: string
  faq_hero_desc_en?: string; faq_hero_desc_ja?: string
  faq_cta_heading_en?: string; faq_cta_heading_ja?: string
  faq_cta_body_en?: string; faq_cta_body_ja?: string
  contact_hero_desc_en?: string; contact_hero_desc_ja?: string
  contact_whatsapp_sub_en?: string; contact_whatsapp_sub_ja?: string
  contact_line_sub_en?: string; contact_line_sub_ja?: string
  contact_phone_sub_en?: string; contact_phone_sub_ja?: string
  contact_email_sub_en?: string; contact_email_sub_ja?: string
  home_cta_heading_en?: string; home_cta_heading_ja?: string
  home_cta_body_en?: string; home_cta_body_ja?: string
}

export interface About {
  heading_en?: string
  heading_ja?: string
  lead_en?: string
  lead_ja?: string
  body_en?: string
  body_ja?: string
}

export interface Feature {
  _id: string
  order?: number
  icon?: string
  title_en: string
  title_ja: string
  description_en: string
  description_ja: string
}

export function t(data: Record<string, string | undefined>, field: string, lang: Lang): string {
  return data[`${field}_${lang}`] || data[`${field}_en`] || ''
}
