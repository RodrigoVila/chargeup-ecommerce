import { FC } from 'react';
import Image from 'next/image';

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';
import useMounted from '@hooks/useMounted';

const CartButton: FC = () => {
  const { cartItems } = useAppSelector();

  const { openCartModal, displayInfoMessage } = useAppActions();

  const { isMounted } = useMounted();

  const cartLength = cartItems?.length;

  const openCart = () =>
    cartLength > 0 ? openCartModal() : displayInfoMessage('No hay productos en el carrito');

  return (
    <div className={`relative mx-2 cursor-pointer`}>
      <button className="w-8 h-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-8 xl:w-8" onClick={openCart}>
        <Image
          className="text-white"
          objectFit="contain"
          layout="fill"
          src="/cart_white.svg"
          alt=""
        />
      </button>
      <div
        className={`absolute -right-2 -top-1 m-auto rounded-full bg-red-500 px-1 text-center text-sm font-bold leading-none text-white`}
      >
        {isMounted && cartLength !== 0 ? cartLength : null}
      </div>
    </div>
  );
};

export default CartButton;
