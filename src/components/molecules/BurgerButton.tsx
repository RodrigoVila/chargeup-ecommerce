import React from "react";
import { HiMenu } from "react-icons/hi";

interface Props {
  size: number;
  toggleDrawer: () => void;
}

const BurgerButton = ({ toggleDrawer, size }: Props) => {
  return (
    <div className="z-40 m-2 md:m-4" onClick={toggleDrawer}>
      <HiMenu color="white" size={size} />
    </div>
  );
};

export default BurgerButton;
