// sanity/schemaTypes/area.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'area',
  title: 'Service Areas',
  type: 'document',
  fields: [
    defineField({
      name: 'suburb',
      title: 'Suburb Name',
      type: 'string',
      description: 'e.g. St Leonards',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Currently Active?',
      type: 'boolean',
      description: 'Turn off to show as "Coming Soon" instead of hiding',
      initialValue: true,
    }),
    defineField({
      name: 'isComingSoon',
      title: 'Coming Soon?',
      type: 'boolean',
      description: 'Shows a "Coming Soon" badge — useful for Mosman, Manly etc.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = shown first',
    }),
  ],
  preview: {
    select: {
      title: 'suburb',
      subtitle: 'isActive',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? 'Active' : 'Coming soon',
      }
    },
  },
})