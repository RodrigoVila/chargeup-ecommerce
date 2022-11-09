import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import CloseModalButton from '@main/Buttons/CloseModalButton';

const CheckoutModal = () => {
  const { isCheckoutModalOpen } = useAppSelector();

  const { closeCheckoutModal } = useAppActions();

  return (
    <div
      className={`${
        !isCheckoutModalOpen && 'hidden'
      } absolute inset-0 z-40  flex h-screen w-screen flex-col items-center justify-center bg-violet-500 text-xl text-white`}
    >
      <CloseModalButton color="white" isAbsolute position="right" onClose={() => closeCheckoutModal()} />
      {/* Stripe needs below form in order to redirect. Cant be made with JS */}
      <form action="/api/checkout_session" method="POST">
        <button type="submit" role="link">
          Checkout
        </button>
      </form>
    </div>
  );
};

export default CheckoutModal;
