import CartButton from '@main/Buttons/CartButton';
import UserButton from '@main/Buttons/UserButton';
import NavItems from '@main/NavItems';
import Logo from '@main/Logo';

const TopBar = () => {
  return (
    <div className="hidden w-full items-center justify-between xl:flex">
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
