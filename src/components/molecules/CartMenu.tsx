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
        <div className="absolute top-0 right-0 z-20 m-2" onClick={close}>
          <RiCloseFill color="black" size={45} />
        </div>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a id="snacks" className="menu-item" href="/contact">
          Snacks Dulces/Salados
        </a>
        <a id="delivery" className="menu-item" href="/contact">
          Entregas
        </a>
        <a id="cakes" className="menu-item" href="/contact">
          Cakes
        </a>
        <a id="faq" className="menu-item" href="/contact">
          FAQ
        </a>
        <a id="blog" className="menu-item" href="/contact">
          Blog
        </a>
      </div>
    </div>
  );
};

export default CartMenu;
