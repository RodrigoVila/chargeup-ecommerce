import React from "react";
import { HiMenu } from "react-icons/hi";

interface Props {
  open: () => void;
  size: number;
}

const CartButton = ({ open, size }: Props) => {
  return (
    <div className="z-40 m-2 md:m-4" onClick={open}>
      <HiMenu color="white" size={size} />
    </div>
  );
};

export default CartButton;
