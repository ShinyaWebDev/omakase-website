import { client } from '@/sanity/lib/client'
import { aboutQuery, featuresQuery } from '@/sanity/lib/queries'
import type { About, Feature } from '@/types/sanity'
import AboutContent from './content'

export const revalidate = 60

export default async function AboutPage() {
  const opts = { next: { revalidate: 60 } }
  const [about, features] = await Promise.all([
    client.fetch<About | null>(aboutQuery, {}, opts),
    client.fetch<Feature[]>(featuresQuery, {}, opts),
  ])

  return <AboutContent about={about} features={features ?? []} />
}
