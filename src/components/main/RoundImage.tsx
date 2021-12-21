import Image from "next/image";

interface Props {
  imgUri: string;
  isVertical?: boolean;
}

const RoundImage = ({ imgUri, isVertical = false }: Props) => {
  const styles = isVertical
    ? "-mt-32 mb-6 border-2 w-60 h-60"
    : "absolute -top-4 -left-20 border-8 w-96 h-72";
  return (
    <div
      className={`${styles} relative mx-auto overflow-hidden bg-contain  rounded-full `}
    >
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
