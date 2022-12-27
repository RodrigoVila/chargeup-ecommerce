import { useEffect, useMemo, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { v4 as uuidv4 } from 'uuid';

import useAppSelector from '@hooks/useAppSelector';
import useAppActions from '@hooks/useAppActions';
import useMounted from '@hooks/useMounted';

import Modal from '@shared/Modal';
import Button from '@main/Buttons/Button';
import CartProduct from '@main/CartProduct';
import CloseModalButton from '@main/Buttons/CloseModalButton';
import { colors } from '@constants/colors';

const CartModal = () => {
  const [disabled, setDisabled] = useState(false);
  const { isCartModalOpen, cartItems,userLogin } = useAppSelector();
  const { closeCartModal, createCheckoutSession } = useAppActions();
  const { isMounted } = useMounted();

  const totalSum = useMemo(() => cartItems.reduce((acc, item) => acc + item.total, 0), [cartItems]);

  const onSubmit = () => {
    const email= userLogin?.email ? userLogin.email : null
    
    const newOrder:OrderType = {
      id: uuidv4(),
      status: "pending",
      email,
      totalAmount: totalSum.toFixed(2),
      items: cartItems,
      created: new Date()
    }
    setDisabled(true);
    createCheckoutSession(newOrder,email);
  };

  useEffect(() => {
    isCartModalOpen && setDisabled(false);
  }, [isCartModalOpen]);

  useEffect(() => {
    cartItems.length === 0 ? closeCartModal() : null;
  }, [cartItems]);

  return (
    <Modal isOpen={isCartModalOpen} transparent fullScreen>
      {/* This avoid Hydration error so the Tooltip will be used only if the component is already mounted */}
      {isMounted ? <ReactTooltip /> : null}
      <div className="relative flex flex-col items-center w-full h-full max-w-xl p-2 my-2 overflow-y-scroll bg-white">
        <CloseModalButton color="black" isAbsolute position="right" onClose={closeCartModal} />
        <div className="px-2 pt-8 pb-6 text-3xl text-center text-black">{`${cartItems.length} ${
          cartItems.length > 1 ? 'articulos' : 'articulo'
        } en la cesta`}</div>
        {cartItems.map((item) => (
          <CartProduct key={item.id} product={item} />
        ))}

        <div className="flex items-center justify-between w-full py-2 pb-0 text-3xl text-black">
          <div>Total</div>
          <div>{`€${totalSum.toFixed(2)}`}</div>
        </div>
        <div className="flex flex-col items-center justify-between w-full py-4 text-xl text-white md:text-3xl">
          <div className="flex w-full">
            {/* <form action="/checkout_sessions" method="POST">
          <Button title="Ir a pagar" color={colors.purple} onClick={()=>{}} isSubmit />
          </form> */}
            <Button
              className="text-base"
              title="Ir a pagar"
              color={colors.purple}
              onClick={onSubmit}
              disabled={disabled}
            />
          </div>
          <Button className="text-base" title="Cerrar" onClick={closeCartModal} type="outlined" />
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
