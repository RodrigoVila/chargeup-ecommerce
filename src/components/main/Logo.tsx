import { FC } from 'react';
import Image from 'next/image';

type Props = {
  color: 'white' | 'black' | 'blur' | 'purple' | 'multi' | 'lightning';
  size?: 'sm' | 'md' | 'lg' | 'xl' | "full"
  type?: "png" | "svg";
  scrollOnClick?: boolean
};

const Logo: FC<Props> = ({ color, size = 'md', type = "png", scrollOnClick = false }) => {
  const sizeStyle =
    size === 'sm'
      ? 'h-20 w-28'
      : size === 'md'
        ? ' h-24 w-32'
        : size === 'lg'
          ? 'h-28 w-36'
          : size === "xl"
            ? 'h-36 w-44'
            : "w-full h-full"; // full size
  return (
    <div className={`${sizeStyle} ${scrollOnClick ? "cursor-pointer" : "cursor-default"} relative`}>
      <a className="w-full h-full p-0 m-0" href={`${scrollOnClick ? "#welcome" : ""}`}>
        <Image
          src={`/logo-${color}.${type}`}
          alt="Charge UP Barcelona Logo"
          layout="fill"
          objectFit="fill"
          className=""
        />
      </a>
    </div>
  );
};

export default Logo;
