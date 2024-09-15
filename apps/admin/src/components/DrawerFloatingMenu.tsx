import { FloatingMenu, FloatingMenuTrigger, FloatingMenuContent } from '@packages/floating-menu'

import { VerticalNavigation } from './VerticalNavigation'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { Logo } from './Logo'

export const DrawerFloatingMenu = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <FloatingMenu open={isOpen} onOpenChange={setOpen}>
      <FloatingMenuTrigger className='w-max p-2 lg:hidden' onClick={() => setOpen(true)}>
        <FaBars size={24} color='white' />
      </FloatingMenuTrigger>
      <FloatingMenuContent className='rounded-lg bg-gray-800 px-4' onClick={() => setOpen(false)}>
        <Logo />
        <VerticalNavigation />
      </FloatingMenuContent>
    </FloatingMenu>
  )
}
