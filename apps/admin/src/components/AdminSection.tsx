import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

type AdminSectionProps = {
  children: ReactNode
}

export const AdminSection = ({ children }: AdminSectionProps) => {
  const { pathname } = useLocation()

  const generateTitleFromPath = (): string => {
    const segments = pathname.split('/').filter(Boolean)
    const lastSegment = segments.pop() || ''
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
  }

  return (
    <main className='flex w-full flex-col items-center'>
      <h1 className='py-8 text-center text-5xl'>{generateTitleFromPath()}</h1>
      <section className='flex w-full max-w-6xl items-center justify-center overflow-x-auto px-8'>
        {children}
      </section>
    </main>
  )
}
