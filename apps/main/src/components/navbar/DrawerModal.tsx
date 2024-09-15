import { useEffect, useState } from 'react'
import { Modal, ModalContent, ModalTrigger, ModalClose } from '@packages/modal'

import { NavItems } from './NavItems'
import { LanguageSelector } from './LanguageSelector'
import { BurgerButton } from './BurgerButton'
import { FaBars } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import { twMerge } from 'tailwind-merge'

export const DrawerModal = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Modal open={isOpen} onOpenChange={setOpen}>
      <ModalTrigger onClick={() => setOpen(!isOpen)}>
        {isOpen ? (
          <IoCloseSharp className='h-7 w-7 font-bold text-white xl:h-12 xl:w-12' />
        ) : (
          <FaBars
            className={twMerge('h-7 w-7 font-bold text-white xl:h-12 xl:w-12', 'xl:hidden')}
          />
        )}
      </ModalTrigger>
      <ModalContent className='bg-black' isFullScreen>
        <NavItems type='drawer' />
      </ModalContent>
    </Modal>
  )
}
