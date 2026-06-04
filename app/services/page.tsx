import { client } from '@/sanity/lib/client'
import { servicesQuery, contactQuery, pageTextQuery } from '@/sanity/lib/queries'
import type { Service, Contact, PageText } from '@/types/sanity'
import ServicesContent from './content'

export default async function ServicesPage() {
  const [services, contact, pageText] = await Promise.all([
    client.fetch<Service[]>(servicesQuery),
    client.fetch<Contact | null>(contactQuery),
    client.fetch<PageText | null>(pageTextQuery),
  ])

  return <ServicesContent services={services ?? []} contact={contact} pageText={pageText} />
}
