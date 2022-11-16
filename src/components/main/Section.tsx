import { colors } from '@constants';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import BackgroundOverlay from './BackgroundOverlay';

interface Props {
  id: string;
  title?: string;
  bgImage?: string | null;
  bgColor?: string;
  textColor?: string;
  overlay?: boolean;
  children: ReactNode;
}
const Section: FC<Props> = ({
  id,
  title,
  bgImage = null,
  bgColor,
  textColor,
  overlay,
  children,
}) => {
  const textStyle = textColor ? `text-[${textColor}]` : 'text-white';
  const bgColorStyle = bgColor ? `bg-[${bgColor}]` : 'bg-white';

  return (
    <div
      id={id}
      className={`${bgColorStyle} ${textStyle} relative mx-auto flex min-h-screen w-full flex-col items-center justify-center pb-16 pt-32 px-2 text-center`}
    >
      {bgImage && (
        <Image
          src={`/${bgImage}`}
          alt="Section background image"
          className="z-0 h-screen"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      )}
      {overlay && <BackgroundOverlay color={colors.overlayDark} />}
      {title && (
        <h1 className="z-20 w-full px-2 pb-8 text-3xl text-center uppercase font-dinBold md:text-5xl">
          {title}
        </h1>
      )}
      <div className="z-20 max-w-4xl pb-4 text-xl leading-snug 2xs:px-4 md:text-2xl xl:max-w-5xl xl:leading-normal">
        {children}
      </div>
    </div>
  );
};

export default Section;
