import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-32 h-32 z-20 ml-4">
      <Image
        src="/logoblur.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        className=""
      />
    </div>
  );
};

export default Logo;
