import Image, { StaticImageData } from 'next/legacy/image'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import aboutImg from '@packages/assets/images/wooden.jpg'
import cakesImg from '@packages/assets/images/cake.jpg'
import contactImg from '@packages/assets/images/peanut-butter.jpg'
import productsImg from '@packages/assets/images/purpleTexture.jpeg'
import welcomeImg from '@packages/assets/images/welcome.jpg'
import whyUsImg from '@packages/assets/images/keto-scones-cheese.jpg'

import { BackgroundOverlay } from '~components/BackgroundOverlay'

type SectionProps = {
  id: string
  title?: string
  overlay?: boolean
  disabled?: boolean
  className?: string
  children: ReactNode
  bodyClassName?: string
}

const IMG_MAPPER: Record<string, StaticImageData> = {
  about: aboutImg,
  cakes: cakesImg,
  contact: contactImg,
  products: productsImg,
  welcome: welcomeImg,
  whyus: whyUsImg,
}
export const Section = ({
  id,
  title,
  overlay,
  disabled = false,
  className,
  children,
  bodyClassName,
}: SectionProps) => {
  const textColor = id === 'keto' ? 'text-black' : 'text-white'
  const defaultStyles = 'px-2 pb-16 pt-32'

  return disabled ? null : (
    <section
      id={id}
      className={`relative flex h-full min-h-screen w-full flex-col items-center text-center text-white  ${
        className ?? defaultStyles
      }`}
    >
      {IMG_MAPPER[id] && (
        <Image
          src={IMG_MAPPER[id]}
          alt='Section background image'
          className='z-0 h-screen'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      )}
      {overlay && <BackgroundOverlay />}
      {title && (
        <h1
          className={twMerge(
            'font-dinBold z-20 w-full px-2 pb-8 text-center text-3xl uppercase md:text-5xl',
            textColor,
          )}
        >
          {title}
        </h1>
      )}
      <div
        className={twMerge(
          '2xs:px-4 z-20 h-full max-w-4xl text-xl leading-snug md:text-2xl xl:max-w-5xl xl:leading-normal',
          bodyClassName,
        )}
      >
        {children}
      </div>
    </section>
  )
}
