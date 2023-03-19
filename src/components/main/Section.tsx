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
  childrenClassName?: string;
}
const Section: FC<Props> = ({
  id,
  title,
  bgImage = null,
  overlay,
  disabled = false,
  className,
  children,
  childrenClassName,
}) => {
  const textColor = id === 'keto' ? 'text-black' : 'text-white';
  const defaultStyles = 'px-2 pb-16 pt-32';

  return disabled ? null : (
    <section
      id={id}
      className={`relative flex h-full min-h-screen w-full flex-col items-center text-center text-white  ${
        className ?? defaultStyles
      }`}
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
        <h1
          className={`z-20 w-full px-2 pb-8 text-center font-dinBold text-3xl uppercase md:text-5xl ${textColor}`}
        >
          {title}
        </h1>
      )}
      <div
        className={`z-20 h-full max-w-4xl text-xl leading-snug 2xs:px-4 md:text-2xl xl:max-w-5xl xl:leading-normal 
        ${childrenClassName ?? ''}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
