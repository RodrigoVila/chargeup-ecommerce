import useAppSelector from '@hooks/useAppSelector';

import Logo from '@main/Logo';
import CartButton from '@main/Buttons/CartButton';
import BurgerButton from '@main/Buttons/BurgerButton';
import LoginButton from '@main/Buttons/LoginButton';
import UserButton from '@main/Buttons/UserButton';
import useOpacityOnScroll from '@hooks/useOpacityOnScroll';

const MobileTopBar = () => {
  const { isLoggedIn } = useAppSelector()

  const { currentScrollPos, opacity, reverseOpacity } = useOpacityOnScroll()

  const hideOnScroll = opacity >= "0.5" ? "hidden" : "flex"
  const showOnScroll = opacity >= "0.4" ? "flex" : "hidden"

  return (
    <div className="z-30 flex justify-between w-full xl:hidden">
      <div className="flex items-center justify-center mr-2">
        <BurgerButton />
      </div>

      <div className={`opacity-[${reverseOpacity}] ${hideOnScroll} absolute top-0 items-center justify-center w-full mx-auto transition-all duration-4000`}>
        <Logo color="blur" />
      </div>
      <div className={`opacity-[${opacity}] ${showOnScroll} items-center justify-center mx-auto transition-all duration-3000 h-12 w-12`}>
        <Logo color="lightning" type='svg' />
      </div>
      <div className="flex items-center justify-center mr-2">
        <CartButton />
        <UserButton />
      </div>
    </div>
  );
};

export default MobileTopBar;
