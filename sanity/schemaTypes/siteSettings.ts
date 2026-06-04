// sanity/schemaTypes/siteSettings.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'site_name',
      title: 'Site Name',
      type: 'string',
      description: 'e.g. OMAKASE Japanese Cleaning',
    }),
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'meta_description_en',
      title: 'SEO Description (English)',
      type: 'text',
      rows: 2,
      description: 'Shown in Google search results — keep under 160 characters',
    }),
    defineField({
      name: 'meta_description_ja',
      title: 'SEO Description (Japanese)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'default_language',
      title: 'Default Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Japanese / 日本語', value: 'ja' },
        ],
        layout: 'radio',
      },
      initialValue: 'en',
    }),
  ],
})