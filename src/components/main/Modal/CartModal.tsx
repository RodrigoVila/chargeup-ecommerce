import { useMemo } from 'react';
import ReactTooltip from 'react-tooltip';

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Button from '@main/Buttons/Button';
import { colors } from '@constants';
import CartProduct from '@main/CartProduct';
import CloseModalButton from '@main/Buttons/CloseModalButton';
import Modal from '@shared/Modal';

const CartModal = () => {
  const { isCartModalOpen, cartItems } = useAppSelector();

  const { closeCartModal } = useAppActions();

  const totalSum = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cartItems]
  );

  return (
    <Modal isOpen={isCartModalOpen} transparent fullScreen border>
      <ReactTooltip />
      <div className="relative flex flex-col items-center w-full h-full max-w-xl p-2 my-2 bg-white ">
        <CloseModalButton color="black" position="right" onClose={() => closeCartModal()} />
        <div className="px-2 pt-8 pb-6 text-3xl text-center text-black">{`${cartItems.length} ${
          cartItems.length > 1 ? 'articulos' : 'articulo'
        } en la cesta`}</div>
        {cartItems.map((item) => (
          <CartProduct
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            nutritionalInfo={item.nutritionalInfo}
            suitableForInfo={item.suitableForInfo}
            price={item.price}
            quantity={item.quantity}
            imgUri={item.imgUri}
          />
        ))}

        <div className="flex items-center justify-between w-full py-2 pb-0 text-3xl text-black">
          <div>Total</div>
          <div>{`€${totalSum}`}</div>
        </div>
        <div className="flex flex-col items-center justify-between w-full py-4 text-xl text-white md:text-3xl">
          <form action="/api/checkout_session" method="POST" className="flex w-full">
            <Button title="Ir a pagar" color={colors.purple} size="2xl" onClick={() => {}} isSubmit />
          </form>
          <Button title="Cerrar" size="lg" onClick={() => closeCartModal()} type="outlined" />
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
