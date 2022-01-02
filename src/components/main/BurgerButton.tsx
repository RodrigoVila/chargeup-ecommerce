import React from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

interface Props {
  isDrawerMenuOpen: boolean;
  toggleDrawer: () => void;
}

const BurgerButton = ({ isDrawerMenuOpen, toggleDrawer }: Props) => {
  return (
    <div
      className="relative z-40 w-10 h-10 m-2 mr-4 md:m-4"
      onClick={toggleDrawer}
    >
      {isDrawerMenuOpen ? (
        <IoMdClose color="white" />
      ) : (
        <HiMenu color="white" />
      )}
    </div>
  );
};

export default BurgerButton;
