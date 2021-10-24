import { useState } from "react";

import CartButton from "@molecules/CartButton";
import BurgerButton from "@molecules/BurgerButton";
import useWindowDimensions from "@hooks/useWindowsDimensions";
import Logo from "@atoms/Logo";

type Props = {
  items: number;
  toggleCart: () => void;
  toggleDrawer: () => void;
};

const MobileTopBar = ({ items, toggleCart,toggleDrawer }: Props) => {
  const width = useWindowDimensions();

  const iconSize = width >= 768 ? 150 : 32;
  const logoSize = width >= 768 ? 150 : 100;
  return (
    <>
      {/* TODO: This one is exactly the same as Drawer component, but animated. Works good on mobile but others mediaqueries animations may look weird. */}
      {/* <DrawerMenu isOpen={isDrawerMenuOpen} close={closeDrawerMenu} /> */}

      <div className="z-20 flex justify-between w-full">
        <BurgerButton toggleDrawer={toggleDrawer} size={iconSize} />
        <Logo size={logoSize} />
        <CartButton
          size={iconSize}
          color={"white"}
          badgesColor={"danger"}
          cartCount={items}
          toggleCart={toggleCart}
        />
      </div>
    </>
  );
};

export default MobileTopBar;
