import { useEffect, useState } from "react";
import BlackOverlay from "@atoms/BlackOverlay";

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
      className="relative flex items-center justify-center w-full h-screen pb-40 m-auto bg-center bg-no-repeat bg-cover bg-proteinBalls "
    >
      <BlackOverlay />
      <div className="z-20 text-5xl text-center text-white">
        Entregas en TODO Catalunya.
      </div>
    </div>
  );
};

export default DeliverySection;
