import { useState, useEffect, useRef } from 'react';

import CartButton from '@main/Buttons/CartButton';
import UserButton from '@main/Buttons/UserButton';
import Logo from '@main/Logo';
import NavItems from '@main/NavItems';
import useScroll from '@hooks/useScroll';
import { colors } from '@constants';

const stickyStyles = "fixed top-0"

const TopBar = () => {
  const { currentScrollPos, opacity, windowHeight } = useScroll()

  const op = currentScrollPos > windowHeight ? "100" : opacity

  return (
    <div className="flex-col hidden xl:flex">
      <div className={`fixed top-0 bg-black/${op} flex justify-between w-full z-30 h-20`}>

        <div className={`flex motion-safe:animate-fadeIn z-10 transition-all duration-2000 ease-in-out`}>
          <Logo color="blur" scrollOnClick size="sm" />
        </div>
        <NavItems direction="row" />
        <div className="z-10 flex items-center justify-center xl:mr-2">
          <UserButton />
          <CartButton />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
