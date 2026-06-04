import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'feature',
  title: 'Why OMAKASE? (Feature Cards)',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = shown first. e.g. 1, 2, 3',
    }),
    defineField({
      name: 'icon',
      title: 'Emoji Icon',
      type: 'string',
      description: 'e.g. 🧘 👁 🤝 🌏',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title_en',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title_ja',
      title: 'Title (Japanese)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description_en',
      title: 'Description (English)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description_ja',
      title: 'Description (Japanese)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'title_en', subtitle: 'icon' },
    prepare({ title, subtitle }) {
      return { title: `${subtitle ?? ''} ${title ?? ''}`.trim() }
    },
  },
})
