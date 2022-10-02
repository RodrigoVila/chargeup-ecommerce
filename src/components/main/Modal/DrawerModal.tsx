import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Modal from '@shared/Modal';
import CloseModalButton from '@main/Buttons/CloseModalButton';
import UserButton from '@main/Buttons/UserButton';
import NavItems from '@main/NavItems';
import Button from '@main/Buttons/Button';
import { colors, lang } from '@constants';
import Link from '@main/Link';

const DrawerModal = () => {
  const { isDrawerModalOpen, userLogin } = useAppSelector();

  const { closeDrawerModal, openLoginModal } = useAppActions();

  return (
    <Modal isOpen={isDrawerModalOpen} fullScreen>
      <CloseModalButton color="black" position="left" onClose={() => closeDrawerModal()} />
      {userLogin?.name && (
        <div className="absolute top-3 right-2 z-50">
          <UserButton color="black" />
        </div>
      )}
      <NavItems direction="column" onClose={() => closeDrawerModal()} />
      {!userLogin && (
        <div className="absolute bottom-4 z-50 flex w-full flex-col items-center justify-center px-4">
          <Button
            title={`${lang.es.LOGIN}`}
            onClick={openLoginModal}
            color={colors.purple}
            hoverColor={colors.fuchsia}
          />
        </div>
      )}
    </Modal>
  );
};

export default DrawerModal;
