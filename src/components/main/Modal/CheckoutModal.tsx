import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Modal from '@shared/Modal';

const CheckoutModal = () => {
  const { isCheckoutModalOpen, checkoutSession } = useAppSelector();

  const { closeCheckoutModal } = useAppActions();

  return (
    <Modal isOpen={isCheckoutModalOpen} onClose={closeCheckoutModal}>
      <div className="px-16 mb-6">
        {checkoutSession ? <iframe src={checkoutSession} title="description"></iframe> : null}
      </div>
    </Modal>
  );
};

export default CheckoutModal;
