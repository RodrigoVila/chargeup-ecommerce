import React from "react";
import { bubble as Menu } from "react-burger-menu";
import { RiCloseFill } from "react-icons/ri";

interface Props {
  isOpen: boolean;
  close: () => void;
}

const DrawerMenu = ({ isOpen, close }: Props) => {
  return (
    <Menu isOpen={isOpen}>
      <div className="w-screen h-screen m-0 bg-white">
        <div className="flex flex-col items-center justify-center h-full bg-red-200">
          <div
            className="absolute top-0 left-0 z-10 m-2 bg-red-600"
            onClick={close}
          >
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
    </Menu>
  );
};
export default DrawerMenu;
