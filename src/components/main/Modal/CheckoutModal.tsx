import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import CloseModalButton from '@main/Buttons/CloseModalButton';
import Modal from '@shared/Modal';

const CheckoutModal = () => {
  const { isCheckoutModalOpen, checkoutSession } = useAppSelector();

  const { closeCheckoutModal } = useAppActions();

  return (
    <Modal isOpen={isCheckoutModalOpen} transparent fullScreen>
      <div className="bg-white rounded-md ">
        <div className="flex items-center justify-between w-full px-4 pt-4 pb-0">
          <CloseModalButton color="black" onClose={() => closeCheckoutModal()} />
        </div>
        <div className="px-16 mb-6">
          {checkoutSession ? <iframe src={checkoutSession} title="description"></iframe> : null}
        </div>
      </div>
    </Modal>
  );
};

export default CheckoutModal;
