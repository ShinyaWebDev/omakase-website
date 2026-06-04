// sanity/schemaTypes/contact.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Info',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Phone / SMS',
      type: 'string',
      description: 'e.g. 0410 062 837',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'e.g. omakasejapanesecleaning@gmail.com',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'International format e.g. +61410062837',
    }),
    defineField({
      name: 'instagram_handle',
      title: 'Instagram Handle',
      type: 'string',
      description: 'Without @ — e.g. omakasejapanesecleaning',
    }),
    defineField({
      name: 'line_id',
      title: 'LINE ID',
      type: 'string',
    }),
    defineField({
      name: 'booking_note_en',
      title: 'Booking Note (English)',
      type: 'text',
      rows: 3,
      description: 'Short note shown near contact buttons, e.g. response times, preferred contact method',
    }),
    defineField({
      name: 'booking_note_ja',
      title: 'Booking Note (Japanese)',
      type: 'text',
      rows: 3,
    }),
  ],
})