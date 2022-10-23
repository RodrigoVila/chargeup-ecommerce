import useAppSelector from '@hooks/useAppSelector';

import Logo from '@main/Logo';
import CartButton from '@main/Buttons/CartButton';
import BurgerButton from '@main/Buttons/BurgerButton';
import LoginButton from '@main/Buttons/LoginButton';
import UserButton from '@main/Buttons/UserButton';

const MobileTopBar = () => {
  const { isLoggedIn } = useAppSelector()

  return (
    <div className="flex justify-between w-full xl:hidden">
      <div className="flex items-center justify-center mr-2">
        <BurgerButton />
      </div>

      <div className="absolute top-0 flex items-center justify-center w-full mx-auto">
        <Logo color="blur" />
      </div>
      <div className="flex items-center justify-center mr-2">
        <CartButton />
        <UserButton />
      </div>
    </div>
  );
};

export default MobileTopBar;
