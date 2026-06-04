import { client } from '@/sanity/lib/client'
import { faqsQuery, pageTextQuery } from '@/sanity/lib/queries'
import type { FAQ, PageText } from '@/types/sanity'
import FAQContent from './content'

export default async function FAQPage() {
  const [faqs, pageText] = await Promise.all([
    client.fetch<FAQ[]>(faqsQuery),
    client.fetch<PageText | null>(pageTextQuery),
  ])

  return <FAQContent faqs={faqs ?? []} pageText={pageText} />
}
