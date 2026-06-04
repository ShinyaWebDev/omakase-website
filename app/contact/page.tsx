import { client } from '@/sanity/lib/client'
import { contactQuery, pageTextQuery } from '@/sanity/lib/queries'
import type { Contact, PageText } from '@/types/sanity'
import ContactContent from './content'

export const revalidate = 60

export default async function ContactPage() {
  const opts = { next: { revalidate: 60 } }
  const [contact, pageText] = await Promise.all([
    client.fetch<Contact | null>(contactQuery, {}, opts),
    client.fetch<PageText | null>(pageTextQuery, {}, opts),
  ])

  return <ContactContent contact={contact} pageText={pageText} />
}
