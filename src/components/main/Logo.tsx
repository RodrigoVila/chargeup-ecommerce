import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-32 h-28 z-20 ml-4">
      <Image
        src="/logoblur.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="fill"
        className=""
      />
    </div>
  );
};

export default Logo;
