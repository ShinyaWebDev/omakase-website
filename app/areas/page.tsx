import { client } from '@/sanity/lib/client'
import { areasQuery, pageTextQuery } from '@/sanity/lib/queries'
import type { Area, PageText } from '@/types/sanity'
import AreasContent from './content'

export const revalidate = 60

export default async function AreasPage() {
  const opts = { next: { revalidate: 60 } }
  const [areas, pageText] = await Promise.all([
    client.fetch<Area[]>(areasQuery, {}, opts),
    client.fetch<PageText | null>(pageTextQuery, {}, opts),
  ])

  return <AreasContent areas={areas ?? []} pageText={pageText} />
}
