import React from "react";
import { FiShoppingCart } from "react-icons/fi";

interface Props {
  open: () => void;
  size: number;
}

const CartButton = ({ open, size }: Props) => {
  return (
    <div className="z-40 m-2 md:m-4" onClick={open}>
      <FiShoppingCart color="white" size={size} />
    </div>
  );
};

export default CartButton;
