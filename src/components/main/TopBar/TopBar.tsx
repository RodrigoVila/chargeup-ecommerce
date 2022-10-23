import CartButton from '@main/Buttons/CartButton';
import UserButton from '@main/Buttons/UserButton';
import LoginButton from '@main/Buttons/LoginButton';
import NavItems from '@main/NavItems';
import Logo from '@main/Logo';

const TopBar = () => {

  return (
    <div className="items-center justify-between hidden w-full xl:flex">
      <Logo color="blur" />
      <NavItems direction="row" />
      <div className="z-20 flex items-center justify-center mr-2">
        <UserButton />
        <CartButton />
      </div>
    </div>
  );
};

export default TopBar;
