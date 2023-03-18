import { FC } from 'react';
import Image from 'next/image';

type Props = {
  logo: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  scrollOnClick?: boolean;
  className?: string;
};

const Logo: FC<Props> = ({ logo, size = 'md', scrollOnClick = false, className = '' }) => {
  const sizeStyle =
    size === 'sm'
      ? 'h-22 w-22'
      : size === 'md'
      ? ' h-24 w-32'
      : size === 'lg'
      ? 'h-28 w-36'
      : size === 'xl'
      ? 'h-36 w-44'
      : 'w-full h-full'; // full size

  const cursorStyles = scrollOnClick ? 'cursor-pointer' : 'cursor-default';
  return (
    <div className={className}>
      <div className={`${sizeStyle} ${cursorStyles} relative`}>
        <a className="w-full h-full p-0 m-0" href={`${scrollOnClick ? '#welcome' : ''}`}>
          <Image
            src={`/images/logo-${logo}`}
            alt="Charge UP Barcelona Logo"
            layout="fill"
            objectFit="fill"
          />
        </a>
      </div>
    </div>
  );
};

export default Logo;
