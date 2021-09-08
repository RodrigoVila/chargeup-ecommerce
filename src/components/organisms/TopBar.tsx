import Cart from "@molecules/Cart";
import RegisterLoginButton from "@molecules/RegisterLoginButton";
import Navbar from "@molecules/Navbar";

const TopBar = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-between pt-2 pl-4 pr-8 bg-white bg-top-bottom">
        <Navbar />
        <Cart />
        <div className="flex">
          <RegisterLoginButton />
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsam.
        Mollitia, distinctio.
      </div>
    </div>
  );
};

export default TopBar;
