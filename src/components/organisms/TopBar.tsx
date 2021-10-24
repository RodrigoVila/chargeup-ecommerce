import { useState } from "react";
import CartButton from "@molecules/CartButton";
import RegisterLoginButton from "@molecules/RegisterLoginButton";
import NavItems from "@molecules/NavItems";
import Logo from "@atoms/Logo";
import BackgroundOverlay from "@atoms/BackgroundOverlay";
import useWindowDimensions from "@hooks/useWindowsDimensions";

type Props = {
  items: number;
  toggleCart: () => void;
};

const TopBar = ({ items, toggleCart }: Props) => {
  const width = useWindowDimensions();
  const logoSize = width >= 1024 ? 300 : 190;

  return (
    <div className="z-20 flex flex-col w-full">
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
            color={"#494295"}
            badgesColor={"danger"}
            cartCount={items}
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full py-4 text-2xl text-white bg-purple3">
        TEXTO CARROUSEL EN MOVIMIENTO
      </div>
    </div>
  );
};

export default TopBar;
