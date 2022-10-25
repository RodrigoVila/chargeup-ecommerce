import CartButton from '@main/Buttons/CartButton';
import UserButton from '@main/Buttons/UserButton';
import LoginButton from '@main/Buttons/LoginButton';
import Logo from '@main/Logo';
import NavItems from '@main/NavItems';

const TopBar = () => {
  return (
    <div className="items-center justify-between hidden w-full xl:flex">
      <Logo color="blur" scrollOnClick />
      <NavItems direction="row" />
      <div className="z-20 flex items-center justify-center">
        <UserButton />
        <CartButton />
      </div>
    </div>
  );
};

export default TopBar;
