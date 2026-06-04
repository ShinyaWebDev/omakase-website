import { client } from '@/sanity/lib/client'
import { aboutQuery, featuresQuery } from '@/sanity/lib/queries'
import type { About, Feature } from '@/types/sanity'
import AboutContent from './content'

export default async function AboutPage() {
  const [about, features] = await Promise.all([
    client.fetch<About | null>(aboutQuery),
    client.fetch<Feature[]>(featuresQuery),
  ])

  return <AboutContent about={about} features={features ?? []} />
}
