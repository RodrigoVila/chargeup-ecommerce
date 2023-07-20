'use client'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

type BackgroundOverlayProps = {
  darker?: boolean
  lighter?: boolean
}

export const BackgroundOverlay = ({ darker, lighter }: BackgroundOverlayProps) => {
  const opacity = useMemo(
    () => (darker ? 'bg-overlayDark' : lighter ? 'bg-overlayLight' : 'bg-overlay'),
    [darker, lighter],
  )

  return <div className={twMerge('absolute inset-0 z-10 h-full', opacity)} />
}