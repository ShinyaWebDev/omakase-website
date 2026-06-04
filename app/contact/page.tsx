import { client } from '@/sanity/lib/client'
import { contactQuery, pageTextQuery } from '@/sanity/lib/queries'
import type { Contact, PageText } from '@/types/sanity'
import ContactContent from './content'

export default async function ContactPage() {
  const [contact, pageText] = await Promise.all([
    client.fetch<Contact | null>(contactQuery),
    client.fetch<PageText | null>(pageTextQuery),
  ])

  return <ContactContent contact={contact} pageText={pageText} />
}
