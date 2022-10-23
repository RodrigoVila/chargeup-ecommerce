import useAppSelector from '@hooks/useAppSelector';

import CartButton from '@main/Buttons/CartButton';
import UserButton from '@main/Buttons/UserButton';
import LoginButton from '@main/Buttons/LoginButton';
import NavItems from '@main/NavItems';
import Logo from '@main/Logo';

const TopBar = () => {
  const { isLoggedIn } = useAppSelector()

  return (
    <div className="hidden w-full items-center justify-between xl:flex">
      <Logo color="blur" />
      <NavItems direction="row" />
      <div className="z-20 flex items-center justify-center mr-2">
        {isLoggedIn ? <UserButton /> : <LoginButton />}
        <CartButton />
      </div>
    </div>
  );
};

export default TopBar;
