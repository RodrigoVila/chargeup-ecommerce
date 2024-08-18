import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import './AnimatedBorderBottom.css'

type AnimatedBorderBottom = {
  children: ReactNode
  className?: string
  disabled?: boolean
}

export const AnimatedBorderBottom = ({ children, className, disabled }: AnimatedBorderBottom) => {
  return <div className={twMerge('mx-1', !disabled && 'hover-border', className)}>{children}</div>
}
