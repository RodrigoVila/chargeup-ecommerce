import CartButton from '@main/Buttons/CartButton';
import UserButton from '@main/Buttons/UserButton';
import Logo from '@main/Logo';
import NavItems from '@main/NavItems';
import useScroll from '@hooks/useScroll';

const TopBar = () => {
  const { currentScrollPos, opacity, windowHeight } = useScroll();

  const getBgOpacity = () => {
    const op = currentScrollPos > windowHeight ? '100' : opacity;

    switch (op) {
      case 0:
        return 'bg-black/0';
      case 10:
        return 'bg-black/10';
      case 20:
        return 'bg-black/20';
      case 30:
        return 'bg-black/30';
      case 40:
        return 'bg-black/40';
      case 50:
        return 'bg-black/50';
      case 60:
        return 'bg-black/60';
      case 70:
        return 'bg-black/70';
      case 80:
        return 'bg-black/80';
      case 90:
        return 'bg-black/90';
      case 100:
        return 'bg-black/100';
    }
  };

  return (
    <div
      className={`${getBgOpacity()} h-26 fixed  top-0 z-30  hidden w-full justify-between xl:flex`}
    >
      <div className={`z-10 flex transition-all duration-2000 ease-in-out xl:ml-2`}>
        <Logo logo="white.png" scrollOnClick size="sm" />
      </div>
      <NavItems direction="row" />
      <div className="z-10 flex items-center justify-center xl:mr-2">
        <UserButton />
        <CartButton />
      </div>
    </div>
  );
};

export default TopBar;
