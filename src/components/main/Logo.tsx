import { FC } from 'react';
import Image from 'next/image';

type Props = {
  color: 'white' | 'black' | 'blur' | 'purple' | 'multi' | 'lightning';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: "png" | "svg";
  scrollOnClick?: boolean
};

const Logo: FC<Props> = ({ color, size = 'md', type = "png", scrollOnClick = false }) => {
  const sizeStyle =
    size === 'sm'
      ? 'h-22 w-28'
      : size === 'md'
        ? ' h-24 w-32'
        : size === 'lg'
          ? 'h-26 w-36'
          : 'h-30 w-40';
  return (
    <div className={`${sizeStyle} ${scrollOnClick ? "cursor-pointer" : "cursor-default"} relative z-20 my-2 animation-fadeOut`}>
      <a href={`${scrollOnClick ? "#welcome" : ""}`}>
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
