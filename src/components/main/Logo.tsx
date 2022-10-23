import { FC } from 'react';
import Image from 'next/image';

type Props = {
  color: 'white' | 'black' | 'blur' | 'purple' | 'multi';
  size?: 'sm' | 'md' | 'lg' | 'xl';
};
type Size = { color: 'white' | 'black' | 'blur' | 'purple' | 'multi' };

const Logo: FC<Props> = ({ color, size = 'md' }) => {
  const sizeStyle =
    size === 'sm'
      ? 'h-22 w-28'
      : size === 'md'
      ? ' h-24 w-32'
      : size === 'lg'
      ? 'h-26 w-36'
      : 'h-30 w-40';
  return (
    <div className={`${sizeStyle} relative z-20`}>
      <Image
        src={`/logo-${color}.png`}
        alt="Charge UP Barcelona Logo"
        layout="fill"
        objectFit="fill"
        className=""
      />
    </div>
  );
};

export default Logo;
