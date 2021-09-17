import React from "react";
import { FiShoppingCart } from "react-icons/fi";

interface Props {
  open: () => void;
}

const CartButton = ({ open }: Props) => {
  return (
    <div className="z-40 mt-2 mr-4" onClick={open}>
      <FiShoppingCart color="white" size={35} />
    </div>
  );
};

export default CartButton;
