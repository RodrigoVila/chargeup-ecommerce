import React from "react";
import { FiShoppingCart } from "react-icons/fi";

interface Props {
  size: number;
  color: string;
  badgesColor: string;
  cartCount: number;
  toggleCart: () => void;
}

const CartButton = ({
  size,
  color,
  badgesColor,
  cartCount,
  toggleCart,
}: Props) => {
  return (
    <div
      className="relative z-40 m-2 mr-4 md:m-4"
      onClick={toggleCart}
    >
      <FiShoppingCart color={color} size={size} />
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
