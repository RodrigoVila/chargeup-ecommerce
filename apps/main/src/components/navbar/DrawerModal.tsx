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

  useEffect(() => {
    console.log({ isOpen })
  }, [isOpen])

  const iconStyles = 'h-6 w-6 font-bold text-white md:h-8 md:w-8 lg:h-12 lg:w-12'

  return (
    <Modal open={isOpen} onOpenChange={setOpen}>
      <ModalTrigger onClick={() => setOpen(!isOpen)}>
        {isOpen ? (
          <IoCloseSharp className={iconStyles} />
        ) : (
          <FaBars className={twMerge(iconStyles, 'xl:hidden')} />
        )}
      </ModalTrigger>
      <ModalContent className='z-[2] flex h-screen w-full items-center justify-center bg-black'>
        <NavItems type='drawer' />
      </ModalContent>
    </Modal>
  )
}
