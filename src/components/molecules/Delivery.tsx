import { useEffect, useState } from "react";
import BackgroundOverlay from "@atoms/BackgroundOverlay";

const DeliverySection = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      style={{ transform: `translateY${offsetY * 0.5}px` }}
      className="relative flex items-center justify-center w-full h-screen m-auto bg-center bg-no-repeat bg-cover bg-wooden "
    >
      <BackgroundOverlay color="Black" />
      <div className="z-20 text-5xl text-center text-white">
        Lorem ipsum dolor sit amet.
      </div>
    </div>
  );
};

export default DeliverySection;
