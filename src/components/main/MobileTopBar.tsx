import { useState } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import CartButton from "@main/CartButton";
import BurgerButton from "@main/BurgerButton";
import Logo from "@main/Logo";
import useWindowDimensions from "@hooks/useWindowsDimensions";
import { displayInfoMessage } from "@redux/toast notifications/actions";

type Props = {
  items: number;
  toggleCart: () => void;
  toggleDrawer: () => void;
};

const MobileTopBar = ({ items, toggleCart, toggleDrawer }: Props) => {
  const width = useWindowDimensions();
  const dispatch: Dispatch<any> = useDispatch();

  const iconSize = width >= 768 ? 150 : 32;
  const logoSize = width >= 768 ? 150 : 100;

  const showCartContentOrInfoToast = () => {
    return items !== 0
      ? toggleCart()
      : dispatch(displayInfoMessage("Cart is empty"));
  };
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
          toggleCart={showCartContentOrInfoToast}
        />
      </div>
    </>
  );
};

export default MobileTopBar;
