import { useEffect, useMemo, useState } from 'react';
import ReactTooltip   from 'react-tooltip';

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Button from '@main/Buttons/Button';
import { colors } from '@constants';
import CartProduct from '@main/CartProduct';
import CloseModalButton from '@main/Buttons/CloseModalButton';
import Modal from '@shared/Modal';
import { useRouter } from 'next/router';
import useLocalStorage from '@hooks/useLocalStorage';
import useMounted from '@hooks/useMounted';

const CartModal = () => {
  const [disabled, setDisabled] = useState(false);
  const { isCartModalOpen, cartItems, checkoutSession } = useAppSelector();

  const { closeCartModal, createCheckoutSession } = useAppActions();

  const { isMounted } = useMounted();

  const router = useRouter();

  const totalSum = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cartItems]
  );

  const onSubmit = () => {
    setDisabled(true)
    const items = cartItems.map((item) => {
      return {
        price: item.strapiId,
        quantity: item.quantity,
      };
    });
    createCheckoutSession(items);
  };

  useEffect(() => {
    isCartModalOpen && setDisabled(false)
  }, [isCartModalOpen]);

  useEffect(() => {
    cartItems.length === 0 ? closeCartModal() : null;
  }, [cartItems]);

  useEffect(() => {
    checkoutSession ? router.push(checkoutSession) : null;
  }, [checkoutSession]);

  return (
    <Modal isOpen={isCartModalOpen} transparent fullScreen>
      {/* This avoid Hydration error so the Tooltip will be used only if the component is already mounted */}
      {isMounted ? <ReactTooltip /> : null}
      <div className="relative flex flex-col items-center w-full h-full max-w-xl p-2 my-2 bg-white ">
        <CloseModalButton color="black" isAbsolute position="right" onClose={closeCartModal} />
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
            strapiId={item.strapiId}
          />
        ))}

        <div className="flex items-center justify-between w-full py-2 pb-0 text-3xl text-black">
          <div>Total</div>
          <div>{`€${totalSum}`}</div>
        </div>
        <div className="flex flex-col items-center justify-between w-full py-4 text-xl text-white md:text-3xl">
          <div className="flex w-full">
            {/* <form action="/checkout_sessions" method="POST">
          <Button title="Ir a pagar" color={colors.purple} onClick={()=>{}} isSubmit />
          </form> */}
            <Button title="Ir a pagar" color={colors.purple} onClick={onSubmit} disabled={disabled} />
          </div>
          <Button title="Cerrar" onClick={closeCartModal} type="outlined" />
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
