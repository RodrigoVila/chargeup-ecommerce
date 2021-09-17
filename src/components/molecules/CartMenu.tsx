import React from "react";
import { RiCloseFill } from "react-icons/ri";

interface Props {
  isOpen: boolean;
  close: () => void;
}

const CartMenu = ({ isOpen, close }: Props) => {
  return (
    <div
      className={`${
        !isOpen && "hidden"
      } z-30 left-0 absolute top-0  flex flex-col items-center h-screen w-screen bg-blue-300 justify-center`}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div
          className="absolute top-0 right-0 z-20 m-2 bg-blue-600"
          onClick={close}
        >
          <RiCloseFill color="black" size={45} />
        </div>
        <a id="home" className="menu-item" href="/">
          Item 1
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a id="social" className="menu-item" href="/contact">
          Social
        </a>
      </div>
    </div>
  );
};

export default CartMenu;
