import { client } from '@/sanity/lib/client'
import { servicesQuery, contactQuery, pageTextQuery } from '@/sanity/lib/queries'
import type { Service, Contact, PageText } from '@/types/sanity'
import ServicesContent from './content'

export const revalidate = 60

export default async function ServicesPage() {
  const opts = { next: { revalidate: 60 } }
  const [services, contact, pageText] = await Promise.all([
    client.fetch<Service[]>(servicesQuery, {}, opts),
    client.fetch<Contact | null>(contactQuery, {}, opts),
    client.fetch<PageText | null>(pageTextQuery, {}, opts),
  ])

  return <ServicesContent services={services ?? []} contact={contact} pageText={pageText} />
}
