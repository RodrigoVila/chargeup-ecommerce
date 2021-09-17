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
          <div className="absolute top-0 left-0 z-10 m-2 bg-red-600" onClick={close}>
            <RiCloseFill color="black" size={45} />
          </div>
          <a id="home" className="menu-item" href="/">
            Home
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
    </Menu>
  );
};
export default DrawerMenu;
