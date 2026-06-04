import { client } from '@/sanity/lib/client'
import { areasQuery, pageTextQuery } from '@/sanity/lib/queries'
import type { Area, PageText } from '@/types/sanity'
import AreasContent from './content'

export default async function AreasPage() {
  const [areas, pageText] = await Promise.all([
    client.fetch<Area[]>(areasQuery),
    client.fetch<PageText | null>(pageTextQuery),
  ])

  return <AreasContent areas={areas ?? []} pageText={pageText} />
}
