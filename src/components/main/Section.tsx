import { FC, ReactNode } from 'react';
import Image from 'next/image';

import BackgroundOverlay from './BackgroundOverlay';
import { colors } from '@constants/colors';

interface Props {
  id: string;
  title?: string;
  bgImage?: string | null;
  overlay?: boolean;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}
const Section: FC<Props> = ({
  id,
  title,
  bgImage = null,
  overlay,
  disabled = false,
  className,
  children,
}) => {
  const textColor = id === "keto" ? "text-black" : "text-white"

  return disabled ? null : (
    <div
      id={id}
      className={`relative mx-auto flex min-h-screen w-full flex-col items-center px-2 pb-16 pt-32 text-center text-white ${className}`}
    >
      {bgImage && (
        <Image
          src={`/images/${bgImage}`}
          alt="Section background image"
          className="z-0 h-screen"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      )}
      {overlay && <BackgroundOverlay />}
      {title && (
        <h1 className={`z-20 w-full px-2 pb-8 text-3xl text-center uppercase font-dinBold md:text-5xl ${textColor}`}>
          {title}
        </h1>
      )}
      <div className="z-20 h-full max-w-4xl pb-4 text-xl leading-snug bg-yellow-300 2xs:px-4 md:text-2xl xl:max-w-5xl xl:leading-normal">
        {children}
      </div>
    </div>
  );
};

export default Section;
