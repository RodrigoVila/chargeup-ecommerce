import { useState, useEffect, useRef } from 'react';

import CartButton from '@main/Buttons/CartButton';
import UserButton from '@main/Buttons/UserButton';
import Logo from '@main/Logo';
import NavItems from '@main/NavItems';
import useScroll from '@hooks/useScroll';

const TopBar = () => {
  const { currentScrollPos, opacity, windowHeight } = useScroll()

  const op = currentScrollPos > windowHeight ? "100" : opacity

  return (
      <div className={`fixed top-0 bg-black/${op} hidden xl:flex  justify-between w-full z-30 h-26`}>

        <div className={`flex motion-safe:animate-fadeIn z-10 xl:ml-2 transition-all duration-2000 ease-in-out`}>
          <Logo logo="white.png" scrollOnClick size="sm" />
        </div>
        <NavItems direction="row" />
        <div className="z-10 flex items-center justify-center xl:mr-2">
          <UserButton />
          <CartButton />
        </div>
      </div>
  );
};

export default TopBar;
