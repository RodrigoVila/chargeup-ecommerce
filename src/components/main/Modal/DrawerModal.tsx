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

  useEffect(() => {
    console.log("userLogin", userLogin)
  }, [userLogin])

  return (
    <Modal isOpen={isDrawerModalOpen} fullScreen>
      <CloseModalButton color="black" position="left" onClose={() => closeDrawerModal()} />
      <NavItems direction="column" onClose={() => closeDrawerModal()} />
    </Modal>
  );
};

export default DrawerModal;
