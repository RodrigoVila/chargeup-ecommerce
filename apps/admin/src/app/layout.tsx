import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '~components/Sidebar'
import Providers from '~utils/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Charge UP Admin site',
  description: 'Charge UP Admin',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <div className='bg-slate-950 flex min-h-screen'>
            <Sidebar />
            <main className='flex w-full'>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
