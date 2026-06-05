import { client } from '@/sanity/lib/client'
import { heroQuery, featuresQuery, areasQuery, contactQuery, pageTextQuery } from '@/sanity/lib/queries'
import type { Hero, Feature, Area, Contact, PageText } from '@/types/sanity'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import AreasSection from '@/components/AreasSection'
import ContactCTA from '@/components/ContactCTA'
import TherapySection from '@/components/TherapySection'
import AudienceSection from '@/components/AudienceSection'

export const revalidate = 60

export default async function HomePage() {
  const opts = { next: { revalidate: 60 } }
  const [hero, features, areas, contact, pageText] = await Promise.all([
    client.fetch<Hero | null>(heroQuery, {}, opts),
    client.fetch<Feature[]>(featuresQuery, {}, opts),
    client.fetch<Area[]>(areasQuery, {}, opts),
    client.fetch<Contact | null>(contactQuery, {}, opts),
    client.fetch<PageText | null>(pageTextQuery, {}, opts),
  ])

  return (
    <>
      <HeroSection data={hero} />
      <FeaturesSection features={features ?? []} />
      <TherapySection />
      <AudienceSection />
      <AreasSection areas={areas ?? []} />
      <ContactCTA contact={contact} pageText={pageText} />
    </>
  )
}
