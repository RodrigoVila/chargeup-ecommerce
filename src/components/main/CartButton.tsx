import React from "react";
import { FiShoppingCart } from "react-icons/fi";

interface Props {
  color: string;
  badgesColor: string;
  cartCount: number;
  toggleCart: () => void;
}

const CartButton = ({
  color,
  badgesColor,
  cartCount,
  toggleCart,
}: Props) => {
  return (
    <div
      className="relative z-20 w-8 h-8 m-2 mr-4 md:m-4"
      onClick={toggleCart}
    >
      <FiShoppingCart color={color} size={30}/>
      {cartCount !== 0 && (
        <div
          className={`absolute px-1 text-sm font-bold text-white rounded-full bg-${badgesColor} -right-2 -top-1`}
        >
          {cartCount}
        </div>
      )}
    </div>
  );
};

export default CartButton;
