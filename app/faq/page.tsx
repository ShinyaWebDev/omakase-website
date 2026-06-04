import { client } from '@/sanity/lib/client'
import { faqsQuery, pageTextQuery } from '@/sanity/lib/queries'
import type { FAQ, PageText } from '@/types/sanity'
import FAQContent from './content'

export const revalidate = 60

export default async function FAQPage() {
  const opts = { next: { revalidate: 60 } }
  const [faqs, pageText] = await Promise.all([
    client.fetch<FAQ[]>(faqsQuery, {}, opts),
    client.fetch<PageText | null>(pageTextQuery, {}, opts),
  ])

  return <FAQContent faqs={faqs ?? []} pageText={pageText} />
}
