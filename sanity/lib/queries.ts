export const pageTextQuery = `*[_type == "pageText"][0]{
  areas_hero_desc_en, areas_hero_desc_ja,
  areas_cta_heading_en, areas_cta_heading_ja,
  areas_cta_body_en, areas_cta_body_ja,
  services_hero_desc_en, services_hero_desc_ja,
  services_cta_heading_en, services_cta_heading_ja,
  services_cta_body_en, services_cta_body_ja,
  faq_hero_desc_en, faq_hero_desc_ja,
  faq_cta_heading_en, faq_cta_heading_ja,
  faq_cta_body_en, faq_cta_body_ja,
  contact_hero_desc_en, contact_hero_desc_ja,
  contact_whatsapp_sub_en, contact_whatsapp_sub_ja,
  contact_line_sub_en, contact_line_sub_ja,
  contact_phone_sub_en, contact_phone_sub_ja,
  contact_email_sub_en, contact_email_sub_ja,
  home_cta_heading_en, home_cta_heading_ja,
  home_cta_body_en, home_cta_body_ja
}`

export const aboutQuery = `*[_type == "about"][0]{
  heading_en, heading_ja,
  lead_en, lead_ja,
  body_en, body_ja
}`

export const featuresQuery = `*[_type == "feature"] | order(order asc){
  _id,
  order,
  icon,
  title_en, title_ja,
  description_en, description_ja
}`

export const heroQuery = `*[_type == "hero"][0]{
  tagline_en, tagline_ja,
  heading_en, heading_ja,
  subheading_en, subheading_ja,
  cta_label_en, cta_label_ja,
  background_image
}`

export const servicesQuery = `*[_type == "service"] | order(order asc){
  _id,
  order,
  name_en, name_ja,
  description_en, description_ja,
  price,
  duration,
  isHighlighted,
  icon
}`

export const areasQuery = `*[_type == "area"] | order(order asc){
  _id,
  suburb,
  isActive,
  isComingSoon,
  order
}`

export const faqsQuery = `*[_type == "faq"] | order(order asc){
  _id,
  order,
  question_en, question_ja,
  answer_en, answer_ja
}`

export const contactQuery = `*[_type == "contact"][0]{
  phone,
  email,
  whatsapp,
  instagram_handle,
  line_id,
  booking_note_en, booking_note_ja
}`

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  site_name,
  logo,
  meta_description_en,
  meta_description_ja,
  default_language
}`
