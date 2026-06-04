import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import SiteShell from '@/components/SiteShell'
import { client } from '@/sanity/lib/client'
import { contactQuery } from '@/sanity/lib/queries'
import type { Contact } from '@/types/sanity'

export const revalidate = 60

const noto = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'OMAKASE Japanese Cleaning — Sydney Lower North Shore',
  description:
    'Japanese-style residential cleaning service based in Sydney\'s Lower North Shore. Experience precision, care, and trust.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const contact = await client.fetch<Contact | null>(contactQuery, {}, { next: { revalidate: 60 } })

  return (
    <html lang="en" className={`${noto.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>
          <SiteShell contact={contact}>{children}</SiteShell>
        </LanguageProvider>
      </body>
    </html>
  )
}
