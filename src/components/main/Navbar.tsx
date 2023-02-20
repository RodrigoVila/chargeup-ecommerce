import CartButton from '@main/Buttons/CartButton';
import UserButton from '@main/Buttons/UserButton';
import Logo from '@shared/Logo';
import NavItems from '@main/NavItems';
import useNavbarOpacity from '@hooks/useNavbarOpacity';
import BurgerButton from '@main/Buttons/BurgerButton';

const Navbar = () => {
  const { backgroundOpacity } = useNavbarOpacity();

  const bgOpacity = backgroundOpacity ? backgroundOpacity : "bg-black/0"

  return (
    <nav className={`${bgOpacity} h-26 fixed top-0 z-30 flex w-full justify-between`}>
      {/* The next 3 hide/show/redistribute with Tailwind classes */}
      <BurgerButton />
      <Logo logo="white.png" scrollOnClick size="sm" />
      <NavItems direction="row" />
      <div className="z-10 flex items-center justify-center xl:mr-2">
        <UserButton />
        <CartButton />
      </div>
    </nav>
  );
};

export default Navbar;
