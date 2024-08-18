import React, { ReactNode } from 'react'

type AdminSection = {
  children: ReactNode
}

export const AdminSection = ({ children }: AdminSection) => {
  return <section className='px-8'>{children}</section>
}
