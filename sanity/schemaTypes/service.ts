// sanity/schemaTypes/service.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  fields: [
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = shown first. e.g. 1, 2, 3...',
    }),
    defineField({
      name: 'name_en',
      title: 'Service Name (English)',
      type: 'string',
      description: 'e.g. Regular Cleaning',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name_ja',
      title: 'Service Name (Japanese)',
      type: 'string',
      description: 'e.g. 定期清掃',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description_en',
      title: 'Description (English)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'description_ja',
      title: 'Description (Japanese)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'price',
      title: 'Price (AUD)',
      type: 'string',
      description: 'e.g. $150+ or $80 / session — use text for flexibility',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g. 2–3 hours',
    }),
    defineField({
      name: 'isHighlighted',
      title: 'Highlight this service?',
      type: 'boolean',
      description: 'Shows a "Popular" or featured badge on the card',
      initialValue: false,
    }),
    defineField({
      name: 'icon',
      title: 'Emoji Icon',
      type: 'string',
      description: 'e.g. 🧹 🛁 👴 — just paste an emoji',
    }),
  ],
  preview: {
    select: {
      title: 'name_en',
      subtitle: 'price',
    },
  },
})