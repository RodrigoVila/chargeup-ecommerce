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
    <button className="relative z-20 w-8 h-8 px-4 mr-4 md:w-10 md:h-10 lg:w-8 lg:h-8 cursor-pointe md:mr-8" onClick={openCart}>
      <Image className="" objectFit="cover" layout="fill" src="/cart_white.png" alt="" />
      {cartLength !== 0 && (
        <div
          className={`absolute -right-2 -top-1 m-auto rounded-full bg-red-500 px-1 text-center text-sm font-bold leading-none text-white`}
        >
          {cartLength}
        </div>
      )}
    </button>
  );
};

export default CartButton;
