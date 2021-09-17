import Image from "next/image";

const RoundImage = ({ imgUri }: any) => {
  return (
    <div
      className={`w-full rounded-full h-screen/2 overflow-hidden relative`}
    >
      <div className="relative z-40 w-full bg-contain bg-whiteRing h-screen/2"></div>
      <Image
        className=""
        objectFit="cover"
        layout="fill"
        src="/brownies.jpg"
        alt=""
      />
    </div>
  );
};

export default RoundImage;
