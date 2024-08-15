import { Modal } from '@packages/modal'

import { NavItems } from './NavItems'
import { LanguageSelector } from './LanguageSelector'

type DrawerModalProps = {
  isOpen: boolean
  toggle: () => void
}

export const DrawerModal = ({ isOpen, toggle }: DrawerModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={toggle} fullScreen bodyClassName='relative max-w-xs'>
      <LanguageSelector className='absolute left-3 top-4' />
      <NavItems type='drawer' onClick={toggle} />
    </Modal>
  )
}
