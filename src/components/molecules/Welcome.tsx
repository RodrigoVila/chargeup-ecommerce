import Image from "next/image";

const Welcome = () => {
  return (
    <div className="absolute top-0 flex items-center justify-center w-full h-full">
      {/* <Image
        src="/rayoblancovillero.png"
        alt="Picture of the author"
        width={100}
        height={100}
      /> */}
      <div className="flex-col ">
        <div className="text-5xl font-semibold tracking-wide text-center text-white drop-shadow-md">
          CHARGE UP BARCELONA
        </div>
        <div className="text-3xl text-center text-white">
          Lorem ipsum dolor sit amet consectetur.
        </div>
      </div>
    </div>
  );
};

export default Welcome;
