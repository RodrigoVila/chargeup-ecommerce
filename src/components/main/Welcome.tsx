import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { shallowEqual } from "react-redux";

import TopBar from "@main/TopBar";
import MobileTopBar from "@main/MobileTopBar";
import CartMenu from "@main/CartMenu";
import { useAppSelector } from "@hooks";

const Welcome = () => {
  const [isCartMenuOpen, setCartMenuOpen] = useState(false);
  const toggleCart = () => setCartMenuOpen(!isCartMenuOpen);

  const cart: ProductType[] = useAppSelector(
    (state: any) => state.cart.cart,
    shallowEqual
  );
  return (
    <div className="w-full relative h-screen bg-center bg-no-repeat bg-cover bg-[url('/glutenFree.png')] ">
      <Toaster />

      <CartMenu isOpen={isCartMenuOpen} toggleCart={toggleCart} items={cart} />

      <TopBar items={cart.length} toggleCart={toggleCart} />

      <MobileTopBar items={cart.length} toggleCart={toggleCart} />

      <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full">
        <div className="pb-4 mt-2 text-5xl font-semibold tracking-wide text-center text-white leading-0 md:px-4 md:text-6xl">
          TASTE THE LOVE AND FEEL RECHARGED
        </div>
        <div className="px-2 text-xl font-semibold text-center text-white leading-0 md:text-3xl">
          OUR MISSION IS TO MAKE HAPPY THOSE WHO CANNOT EAT SUGAR
        </div>
      </div>
    </div>
  );
};

export default Welcome;
