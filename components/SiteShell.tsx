'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import ContactBar from './ContactBar'
import type { Contact } from '@/types/sanity'

interface Props {
  children: React.ReactNode
  contact: Contact | null
}

export default function SiteShell({ children, contact }: Props) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (isStudio) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <Footer />
      <ContactBar contact={contact} />
    </>
  )
}
