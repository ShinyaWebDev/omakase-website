import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heading_en',
      title: 'Heading (English)',
      type: 'string',
      description: 'e.g. About OMAKASE',
    }),
    defineField({
      name: 'heading_ja',
      title: 'Heading (Japanese)',
      type: 'string',
    }),
    defineField({
      name: 'lead_en',
      title: 'Lead / Intro (English)',
      type: 'text',
      rows: 3,
      description: 'The bold summary sentence shown under the heading.',
    }),
    defineField({
      name: 'lead_ja',
      title: 'Lead / Intro (Japanese)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body_en',
      title: 'Body Text (English)',
      type: 'text',
      rows: 12,
      description: 'Separate paragraphs with a blank line between them.',
    }),
    defineField({
      name: 'body_ja',
      title: 'Body Text (Japanese)',
      type: 'text',
      rows: 12,
      description: '段落と段落の間を1行空けてください。',
    }),
  ],
  preview: {
    select: { title: 'heading_en' },
  },
})
