import Image from "next/image";

const RoundImage = ({ imgUri }: any) => {
  return (
    <div className="relative mx-auto mb-6 -mt-32 overflow-hidden bg-contain border-2 rounded-full w-60 h-60">
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
