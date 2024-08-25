import { IoMdClose } from 'react-icons/io'

import { Modal, ModalContent, ModalTrigger, ModalClose } from '@packages/modal'
import { VerticalNavigation } from './VerticalNavigation'
import { BurgerButton } from './BurgerButton'

export const DrawerModal = () => {
  return (
    <Modal>
      <ModalTrigger className='lg:hidden'>
        <BurgerButton />
      </ModalTrigger>
      <ModalContent className='flex h-max justify-center bg-slate-800'>
        <ModalClose className='absolute top-2 left-2'>
          <IoMdClose size={24} color='white' />
        </ModalClose>
        <VerticalNavigation />
      </ModalContent>
    </Modal>
  )
}
