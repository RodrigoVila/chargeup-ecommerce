import { FC } from 'react';
import Image from 'next/image';

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

const CartButton: FC = () => {
  const { cartLength } = useAppSelector();

  const { openCartModal, displayInfoMessage } = useAppActions();

  const openCart = () =>
    cartLength > 0 ? openCartModal() : displayInfoMessage('No hay productos en el carrito');

  return (
    <div className={`relative mx-2 cursor-pointer`}>
    <button className="w-8 h-8 lg:w-12 lg:h-12 md:h-10 md:w-10 xl:w-8 xl:h-8" onClick={openCart}>
      <Image className="text-white" objectFit="cover" layout="fill" src="/cart_white.svg" alt="" />
      {cartLength !== 0 && (
        <span
          className={`absolute -right-2 -top-1 m-auto rounded-full bg-red-500 px-1 text-center text-sm font-bold leading-none text-white`}
        >
          {cartLength}
        </span>
      )}
    </button>
    </div>
  );
};

export default CartButton;
