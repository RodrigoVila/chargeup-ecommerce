import Image from "next/image";

import Cart from "@molecules/Cart";
import RegisterLoginButton from "@molecules/RegisterLoginButton";
import Navbar from "@molecules/Navbar";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between pt-2 pl-4 pr-8 bg-white bg-opacity-0 bg-top-bottom">
      <Image
        src="/logo.png"
        alt="Picture of the author"
        width={100}
        height={100}
      />
      <Navbar />
      <div className="flex">
        <RegisterLoginButton />
        <Cart />
      </div>
    </div>
  );
};

export default TopBar;
