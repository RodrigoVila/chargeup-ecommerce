import { useState } from "react";
import CartButton from "@main/CartButton";
import RegisterLoginButton from "@main/RegisterLoginButton";
import NavItems from "@main/NavItems";
import Logo from "@main/Logo";
import BackgroundOverlay from "components/main/BackgroundOverlay";
import useWindowDimensions from "@hooks/useWindowsDimensions";

type Props = {
  items: number;
  toggleCart: () => void;
};

const TopBar = ({ items, toggleCart }: Props) => {
  const width = useWindowDimensions();
  const logoSize = width >= 1024 ? 300 : 190;

  return (
    <div className="z-20 flex-col hidden w-full xl:flex">
      <div className="mx-auto">
        <Logo size={logoSize} />
      </div>
      <div className="relative flex flex-row items-center justify-between pt-2 pr-4">
        <BackgroundOverlay color="White" />
        <>
          <div className="w-2 h-2" />
        </>
        <>
          <NavItems />
        </>
        <div className="flex flex-row ">
          <RegisterLoginButton />
          <CartButton
            toggleCart={toggleCart}
            size={40}
            color={"#fff"}
            badgesColor={"danger"}
            cartCount={items}
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full py-4 text-2xl text-white bg-purple-700">
        TEXTO CARROUSEL EN MOVIMIENTO
      </div>
    </div>
  );
};

export default TopBar;
