import { useState } from "react";

import CartButton from "@molecules/CartButton";
import BurgerButton from "@molecules/BurgerButton";
import DrawerMenu from "@molecules/DrawerMenu";
import CartMenu from "@molecules/CartMenu";
import Drawer from "@molecules/Drawer";
import useWindowDimensions from "@hooks/useWindowsDimensions";
import Logo from "@atoms/Logo";

const MobileTopBar = () => {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);
  const [isCartMenuOpen, setCartMenuOpen] = useState(false);
  const width = useWindowDimensions();

  const openDrawerMenu = () => setDrawerMenuOpen(true);
  const closeDrawerMenu = () => setDrawerMenuOpen(false);
  const openCartMenu = () => setCartMenuOpen(true);
  const closeCartMenu = () => setCartMenuOpen(false);

  const iconSize = width >= 768 ? 60 : 32;
  const logoSize = width >= 768 ? 150 : 100;
  return (
    <>
      {/* TODO: This one is exactly the same as Drawer component, but animated. Works good on mobile but others mediaqueries animations may look weird. */}
      {/* <DrawerMenu isOpen={isDrawerMenuOpen} close={closeDrawerMenu} /> */}

      <Drawer isOpen={isDrawerMenuOpen} close={closeDrawerMenu} />
      <CartMenu isOpen={isCartMenuOpen} close={closeCartMenu} />

      <div className="z-20 flex justify-between w-full">
        <BurgerButton open={openDrawerMenu} size={iconSize} />
        <Logo size={logoSize} />
        <CartButton open={openCartMenu} size={iconSize} />
      </div>
    </>
  );
};

export default MobileTopBar;
