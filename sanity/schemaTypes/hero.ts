// sanity/schemaTypes/hero.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section (Top Page)',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline_en',
      title: 'Tagline (English)',
      type: 'string',
      description: 'e.g. Cleaning is Therapy',
    }),
    defineField({
      name: 'tagline_ja',
      title: 'Tagline (Japanese)',
      type: 'string',
      description: 'e.g. お掃除はセラピー！',
    }),
    defineField({
      name: 'heading_en',
      title: 'Main Heading (English)',
      type: 'string',
      description: 'e.g. Japanese-style cleaning for your Sydney home',
    }),
    defineField({
      name: 'heading_ja',
      title: 'Main Heading (Japanese)',
      type: 'string',
    }),
    defineField({
      name: 'subheading_en',
      title: 'Subheading (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'subheading_ja',
      title: 'Subheading (Japanese)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'cta_label_en',
      title: 'Button Text (English)',
      type: 'string',
      description: 'e.g. Book Now',
    }),
    defineField({
      name: 'cta_label_ja',
      title: 'Button Text (Japanese)',
      type: 'string',
      description: 'e.g. 予約する',
    }),
    defineField({
      name: 'background_image',
      title: 'Background / Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})