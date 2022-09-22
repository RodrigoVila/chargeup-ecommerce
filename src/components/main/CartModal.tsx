import { useEffect, useMemo } from 'react';
import ReactTooltip from 'react-tooltip';

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Button from '@main/Button';
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

  useEffect(() => {
    cartItems.length === 0 && closeCartModal();
  }, [cartItems]);

  return (
    <Modal isOpen={isCartModalOpen} fullScreen transparent>
      <ReactTooltip />
      <div className="relative flex w-full flex-col items-center bg-white px-2 pt-4">
        <CloseModalButton color="black" position="right" onClose={() => closeCartModal()} />
        <div className="px-2 pb-6 pt-8 text-center text-3xl text-black">{`${cartItems.length} ${
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

        <div className="flex w-full items-center justify-between py-2 pb-0 text-3xl text-black">
          <div>Total</div>
          <div>{`€${totalSum}`}</div>
        </div>
        {/* <div className="flex w-full items-center justify-between py-2">
          <div className="h-full text-xl text-gray-700">Envio</div>
          <div className="h-full text-xl text-gray-700">€0</div>
        </div>
        <div className="flex w-full items-center justify-between py-2">
          <div className="h-full text-xl text-gray-700">Entrega</div>
          <div className="h-full text-xl text-gray-700">48hs</div>
        </div> */}
        <div className="flex w-full flex-col items-center justify-between py-4 text-xl text-white md:text-3xl">
          <form action="/api/checkout_session" method="POST" className="flex w-full">
            <Button title="Ir a pagar" color={colors.purple} onClick={() => {}} isSubmit />
          </form>
          <Button title="Cerrar" onClick={() => closeCartModal()} type="outlined" />
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
