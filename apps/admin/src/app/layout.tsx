'use client'
import './globals.css'
import type { Metadata } from 'next'
import { usePathname } from 'next/navigation'
import { Inter } from 'next/font/google'

import Sidebar from '~/components/Sidebar'
import Providers from '~/utils/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Charge UP Admin site',
  description: 'Charge UP Admin',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const sectionTitle = pathname.slice(1, pathname.length)

  console.log({ pathname })
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <div className='bg-slate-950 flex min-h-screen'>
            <Sidebar />
            <main className='flex w-full flex-col items-center'>
              <h1 className='py-8 text-5xl capitalize text-white'>{sectionTitle}</h1>
              <div>{children}</div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
