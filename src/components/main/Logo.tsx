import React from "react";
import Image from "next/image";

interface Props {
  size: number;
}

const Logo = ({ size }: Props) => {
  return (
    <Image
      src="/logoblur.png"
      alt="Picture of the author"
      width={size}
      height={size}
    />
  );
};

export default Logo;
