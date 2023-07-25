import { useAppActions, useAppSelector } from '~hooks';

import { Modal } from '~features/modal';

import { NavItems } from './NavItems';
import { LanguageSelector } from './LanguageSelector';

export const DrawerModal = () => {
  const { isDrawerModalOpen } = useAppSelector();

  const { closeDrawerModal } = useAppActions();

  return (
    <Modal isOpen={isDrawerModalOpen} onClose={closeDrawerModal} bodyClassName="relative max-w-xs">
      <LanguageSelector className="absolute top-4 left-3" />
      <NavItems type="drawer" onClick={closeDrawerModal} />
    </Modal>
  );
};
