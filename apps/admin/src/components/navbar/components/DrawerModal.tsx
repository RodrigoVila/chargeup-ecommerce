import { Modal } from '@packages/modal'

import { NavItems } from './NavItems'

type DrawerModalProps = {
  isOpen: boolean
  toggle: () => void
}

export const DrawerModal = ({ isOpen, toggle }: DrawerModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={toggle} fullScreen bodyClassName='relative max-w-xs'>
      <NavItems type='drawer' onClick={toggle} />
    </Modal>
  )
}
