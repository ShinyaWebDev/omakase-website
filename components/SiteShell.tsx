'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import type { SiteSettings } from '@/types/sanity'

interface Props {
  children: React.ReactNode
  siteSettings: SiteSettings | null
}

export default function SiteShell({ children, siteSettings }: Props) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (isStudio) {
    return <>{children}</>
  }

  return (
    <>
      <Header siteSettings={siteSettings} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
