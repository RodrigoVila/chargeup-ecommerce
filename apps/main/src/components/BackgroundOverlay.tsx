
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

type BackgroundOverlayProps = {
  darker?: boolean
  lighter?: boolean
}

export const BackgroundOverlay = ({ darker, lighter }: BackgroundOverlayProps) => {
  const opacity = useMemo(
    () => (darker ? 'bg-[rgba(0,0,0,0.7)]' : lighter ? 'bg-[rgba(0,0,0,0.2)]' : 'bg-[rgba(0,0,0,0.5)]'),
    [darker, lighter],
  )

  return <div className={twMerge('absolute inset-0 z-10 h-full', opacity)} />
}