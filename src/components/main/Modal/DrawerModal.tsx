import { useEffect } from 'react'

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Modal from '@shared/Modal';
import CloseModalButton from '@main/Buttons/CloseModalButton';
import UserButton from '@main/Buttons/UserButton';
import NavItems from '@main/NavItems';
import Button from '@main/Buttons/Button';
import { colors, lang } from '@constants';

const DrawerModal = () => {
  const { isDrawerModalOpen, userLogin } = useAppSelector();

  const { closeDrawerModal, openLoginModal } = useAppActions();

  return (
    <Modal isOpen={isDrawerModalOpen} transparent fullScreen>
      <div className="relative p-4 px-16 pt-12 bg-white rounded-md">
        <CloseModalButton color="black" position="right" onClose={() => closeDrawerModal()} />
        <NavItems direction="column" onClose={() => closeDrawerModal()} />
      </div>
    </Modal>
  );
};

export default DrawerModal;
