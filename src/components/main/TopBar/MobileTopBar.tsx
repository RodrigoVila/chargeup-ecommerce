import Logo from '@main/Logo';
import BurgerButton from '@main/Buttons/BurgerButton';
import UserButton from '@main/Buttons/UserButton';
import CartButton from '@main/Buttons/CartButton';

const MobileTopBar = () => {
  return (
    <div className="flex w-full justify-between xl:hidden">
      <BurgerButton />
      <Logo color="blur" />
      <CartButton />
    </div>
  );
};

export default MobileTopBar;
