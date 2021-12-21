import { useState } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import CartButton from "@main/CartButton";
import BurgerButton from "@main/BurgerButton";
import Logo from "@main/Logo";
import useWindowDimensions from "@hooks/useWindowsDimensions";
import { displayInfoMessage } from "@redux/actions/toast_notifications";

type Props = {
  items: number;
  toggleCart: () => void;
  toggleDrawer: () => void;
};

const MobileTopBar = ({ items, toggleCart, toggleDrawer }: Props) => {
  const width = useWindowDimensions();
  const dispatch: Dispatch<any> = useDispatch();

  const iconSize = width >= 1024 ? 140 : 40;
  const logoSize = width >= 1024 ? 250 : 125;

  const showCartContentOrInfoToast = () => {
    return items !== 0
      ? toggleCart()
      : dispatch(displayInfoMessage("Cart is empty"));
  };
  return (
    <>
      {/* TODO: This one is exactly the same as Drawer component, but animated. Works good on mobile but others mediaqueries animations may look weird. */}
      {/* <DrawerMenu isOpen={isDrawerMenuOpen} close={closeDrawerMenu} /> */}

      <div className="z-20 flex justify-between w-full xl:hidden">
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
