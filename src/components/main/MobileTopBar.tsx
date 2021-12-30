import { useState } from "react";
import CartButton from "@main/CartButton";
import BurgerButton from "@main/BurgerButton";
import Logo from "@main/Logo";
import Drawer from "@main/Drawer";
import { displayInfoMessage } from "@redux/actions/toast_notifications";
import { useAppDispatch } from "@hooks";

type Props = {
  items: number;
  toggleCart: () => void;
};

const MobileTopBar = ({ items, toggleCart }: Props) => {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);
  const toggleDrawer = () => setDrawerMenuOpen(!isDrawerMenuOpen);

  const dispatch = useAppDispatch();

  const showCartContentOrInfoToast = () => {
    return items !== 0
      ? toggleCart()
      : dispatch(displayInfoMessage("Cart is empty"));
  };
  return (
    <>
      <Drawer isOpen={isDrawerMenuOpen} toggleDrawer={toggleDrawer} />

      <div className="z-20 flex justify-between w-full xl:hidden">
        <BurgerButton
          isDrawerMenuOpen={isDrawerMenuOpen}
          toggleDrawer={toggleDrawer}
        />

        <Logo />

        <CartButton
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
