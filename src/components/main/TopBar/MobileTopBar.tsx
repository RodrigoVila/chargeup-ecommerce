import useAppSelector from '@hooks/useAppSelector';

import Logo from '@main/Logo';
import CartButton from '@main/Buttons/CartButton';
import BurgerButton from '@main/Buttons/BurgerButton';
import UserButton from '@main/Buttons/UserButton';
import useScroll from '@hooks/useScroll';

const MobileTopBar = () => {
  const { isLoggedIn } = useAppSelector()

  const { currentScrollPos, opacity, windowHeight } = useScroll()

  const op = currentScrollPos > windowHeight ? "100" : opacity

  return (
    <div className="fixed top-0 left-0 right-0 z-30 flex justify-between w-full h-24 transition-all duration-100 xl:hidden">
      <div className={`relative bg-black/${op} relative w-full flex justify-between py-1`}>
        <div className="flex items-center justify-center mr-2">
          <BurgerButton />
        </div>

        <div className="absolute flex items-center justify-center w-full -top-1">
          <Logo logo="blur.png" scrollOnClick />
        </div>
        <div className="flex items-center justify-center mr-2">
          <CartButton />
        </div>
      </div>
    </div>
  );
};

export default MobileTopBar;
