import { client } from '@/sanity/lib/client'
import { heroQuery, featuresQuery, servicesQuery, areasQuery, contactQuery, pageTextQuery } from '@/sanity/lib/queries'
import type { Hero, Feature, Service, Area, Contact, PageText } from '@/types/sanity'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import ServicesSection from '@/components/ServicesSection'
import AreasSection from '@/components/AreasSection'
import ContactCTA from '@/components/ContactCTA'

export default async function HomePage() {
  const [hero, features, services, areas, contact, pageText] = await Promise.all([
    client.fetch<Hero | null>(heroQuery),
    client.fetch<Feature[]>(featuresQuery),
    client.fetch<Service[]>(servicesQuery),
    client.fetch<Area[]>(areasQuery),
    client.fetch<Contact | null>(contactQuery),
    client.fetch<PageText | null>(pageTextQuery),
  ])

  return (
    <>
      <HeroSection data={hero} />
      <FeaturesSection features={features ?? []} />
      <ServicesSection services={services ?? []} />
      <AreasSection areas={areas ?? []} />
      <ContactCTA contact={contact} pageText={pageText} />
    </>
  )
}
