import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

type AdminSection = {
  children: ReactNode
}

export const AdminSection = ({ children }: AdminSection) => {
  const { pathname } = useLocation()

  const generateTitleFromPath = (): string => {
    const segments = pathname.split('/').filter(Boolean)
    const lastSegment = segments.pop() || ''
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
  }

  return (
    <main>
      <h1 className='py-8 text-center text-5xl'>{generateTitleFromPath()}</h1>
      <section className='px-8'>{children}</section>
    </main>
  )
}
