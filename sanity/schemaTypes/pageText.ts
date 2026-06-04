import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pageText',
  title: 'Page Text',
  type: 'document',
  fieldsets: [
    { name: 'areas', title: 'Areas Page', options: { collapsible: true, collapsed: false } },
    { name: 'services', title: 'Services Page', options: { collapsible: true, collapsed: true } },
    { name: 'faq', title: 'FAQ Page', options: { collapsible: true, collapsed: true } },
    { name: 'contact', title: 'Contact Page', options: { collapsible: true, collapsed: true } },
    { name: 'homeCta', title: 'Homepage — Contact CTA Section', options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    // ── Areas Page ──────────────────────────────────────────────
    defineField({
      name: 'areas_hero_desc_en',
      title: 'Hero Description (English)',
      type: 'text', rows: 2, fieldset: 'areas',
      description: 'Shown under "Service Areas" heading',
    }),
    defineField({
      name: 'areas_hero_desc_ja',
      title: 'Hero Description (Japanese)',
      type: 'text', rows: 2, fieldset: 'areas',
    }),
    defineField({
      name: 'areas_cta_heading_en',
      title: '"Don\'t see your suburb?" Heading (English)',
      type: 'string', fieldset: 'areas',
    }),
    defineField({
      name: 'areas_cta_heading_ja',
      title: '"Don\'t see your suburb?" Heading (Japanese)',
      type: 'string', fieldset: 'areas',
    }),
    defineField({
      name: 'areas_cta_body_en',
      title: '"Don\'t see your suburb?" Body (English)',
      type: 'text', rows: 2, fieldset: 'areas',
    }),
    defineField({
      name: 'areas_cta_body_ja',
      title: '"Don\'t see your suburb?" Body (Japanese)',
      type: 'text', rows: 2, fieldset: 'areas',
    }),

    // ── Services Page ────────────────────────────────────────────
    defineField({
      name: 'services_hero_desc_en',
      title: 'Hero Description (English)',
      type: 'text', rows: 2, fieldset: 'services',
    }),
    defineField({
      name: 'services_hero_desc_ja',
      title: 'Hero Description (Japanese)',
      type: 'text', rows: 2, fieldset: 'services',
    }),
    defineField({
      name: 'services_cta_heading_en',
      title: '"Not sure which service?" Heading (English)',
      type: 'string', fieldset: 'services',
    }),
    defineField({
      name: 'services_cta_heading_ja',
      title: '"Not sure which service?" Heading (Japanese)',
      type: 'string', fieldset: 'services',
    }),
    defineField({
      name: 'services_cta_body_en',
      title: '"Not sure which service?" Body (English)',
      type: 'text', rows: 2, fieldset: 'services',
    }),
    defineField({
      name: 'services_cta_body_ja',
      title: '"Not sure which service?" Body (Japanese)',
      type: 'text', rows: 2, fieldset: 'services',
    }),

    // ── FAQ Page ─────────────────────────────────────────────────
    defineField({
      name: 'faq_hero_desc_en',
      title: 'Hero Description (English)',
      type: 'text', rows: 2, fieldset: 'faq',
    }),
    defineField({
      name: 'faq_hero_desc_ja',
      title: 'Hero Description (Japanese)',
      type: 'text', rows: 2, fieldset: 'faq',
    }),
    defineField({
      name: 'faq_cta_heading_en',
      title: '"Still have questions?" Heading (English)',
      type: 'string', fieldset: 'faq',
    }),
    defineField({
      name: 'faq_cta_heading_ja',
      title: '"Still have questions?" Heading (Japanese)',
      type: 'string', fieldset: 'faq',
    }),
    defineField({
      name: 'faq_cta_body_en',
      title: '"Still have questions?" Body (English)',
      type: 'text', rows: 2, fieldset: 'faq',
    }),
    defineField({
      name: 'faq_cta_body_ja',
      title: '"Still have questions?" Body (Japanese)',
      type: 'text', rows: 2, fieldset: 'faq',
    }),

    // ── Contact Page ─────────────────────────────────────────────
    defineField({
      name: 'contact_hero_desc_en',
      title: 'Hero Description (English)',
      type: 'text', rows: 2, fieldset: 'contact',
    }),
    defineField({
      name: 'contact_hero_desc_ja',
      title: 'Hero Description (Japanese)',
      type: 'text', rows: 2, fieldset: 'contact',
    }),
    defineField({
      name: 'contact_whatsapp_sub_en',
      title: 'WhatsApp sub-label (English)',
      type: 'string', fieldset: 'contact',
      description: 'e.g. "Fastest response"',
    }),
    defineField({
      name: 'contact_whatsapp_sub_ja',
      title: 'WhatsApp sub-label (Japanese)',
      type: 'string', fieldset: 'contact',
    }),
    defineField({
      name: 'contact_line_sub_en',
      title: 'LINE sub-label (English)',
      type: 'string', fieldset: 'contact',
    }),
    defineField({
      name: 'contact_line_sub_ja',
      title: 'LINE sub-label (Japanese)',
      type: 'string', fieldset: 'contact',
    }),
    defineField({
      name: 'contact_phone_sub_en',
      title: 'Phone sub-label (English)',
      type: 'string', fieldset: 'contact',
    }),
    defineField({
      name: 'contact_phone_sub_ja',
      title: 'Phone sub-label (Japanese)',
      type: 'string', fieldset: 'contact',
    }),
    defineField({
      name: 'contact_email_sub_en',
      title: 'Email sub-label (English)',
      type: 'string', fieldset: 'contact',
    }),
    defineField({
      name: 'contact_email_sub_ja',
      title: 'Email sub-label (Japanese)',
      type: 'string', fieldset: 'contact',
    }),

    // ── Homepage CTA ─────────────────────────────────────────────
    defineField({
      name: 'home_cta_heading_en',
      title: 'CTA Heading (English)',
      type: 'string', fieldset: 'homeCta',
      description: 'e.g. "Ready to Book?"',
    }),
    defineField({
      name: 'home_cta_heading_ja',
      title: 'CTA Heading (Japanese)',
      type: 'string', fieldset: 'homeCta',
    }),
    defineField({
      name: 'home_cta_body_en',
      title: 'CTA Body (English)',
      type: 'text', rows: 2, fieldset: 'homeCta',
    }),
    defineField({
      name: 'home_cta_body_ja',
      title: 'CTA Body (Japanese)',
      type: 'text', rows: 2, fieldset: 'homeCta',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Page Text' }
    },
  },
})
