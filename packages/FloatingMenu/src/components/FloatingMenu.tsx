import * as React from 'react'
import { FloatingMenuContext, useFloatingMenu, FloatingMenuOptions } from '../hooks/useFloatingMenu'

export function FloatingMenu({
  children,
  modal = false,
  ...restOptions
}: {
  children: React.ReactNode
} & FloatingMenuOptions) {
  const floatingMenu = useFloatingMenu({ modal, ...restOptions })
  return (
    <FloatingMenuContext.Provider value={floatingMenu}>{children}</FloatingMenuContext.Provider>
  )
}
