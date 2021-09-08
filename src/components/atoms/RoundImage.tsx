import Image from "next/image";

const RoundImage = ({ imgUri }: any) => {
  return (
    <div
      className={`w-full border-4 border-white rounded-full h-screen/2 overflow-hidden relative`}
    >
      <Image
        className="bg-red-200"
        objectFit="cover"
        layout="fill"
        src="/brownies.jpg"
        alt=""
      />
    </div>
  );
};

export default RoundImage;
