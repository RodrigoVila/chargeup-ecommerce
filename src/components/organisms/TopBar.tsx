import Cart from "@molecules/Cart";
import RegisterLoginButton from "@molecules/RegisterLoginButton";
import Navbar from "@molecules/Navbar";
import Logo from "@atoms/Logo";
import useWindowDimensions from "@hooks/useWindowsDimensions";
import BackgroundOverlay from "@atoms/BackgroundOverlay";

const TopBar = () => {
  const width = useWindowDimensions();

  const logoSize = width >= 1024 ? 300 : 190;

  return (
    <div className="z-20 flex flex-col w-full">
      <div className="mx-auto">
        <Logo size={logoSize} />
      </div>
      <div className="relative flex flex-row items-center justify-center pt-2">
        <BackgroundOverlay color="White" />
        <Navbar />
        <RegisterLoginButton />
        <Cart />
      </div>
      <div className="flex items-center justify-center w-full py-4 text-2xl text-white bg-purple3">
        TEXTO CARROUSEL EN MOVIMIENTO
      </div>
    </div>
  );
};

export default TopBar;
