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
  disabled?: boolean
  className?: string
  children: ReactNode
  bodyClassName?: string
  titleClassName?: string
  withOverlay?: boolean
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
  disabled = false,
  className,
  children,
  bodyClassName,
  titleClassName,
  withOverlay = true,
}: SectionProps) => {
  if (disabled) return null

  return (
    <section
      id={id}
      className={twMerge(
        'relative z-[0] flex h-full min-h-screen w-full flex-col items-center justify-center bg-white px-2 pb-16 pt-32 text-center text-white',
        className,
      )}
    >
      {IMG_MAPPER[id] && (
        <Image
          src={IMG_MAPPER[id]}
          alt='Section background image'
          className='h-screen'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      )}

      {withOverlay && <BackgroundOverlay />}

      {title && (
        <h1
          className={twMerge(
            'font-dinBold z-0 w-full px-2 pb-8 text-center text-3xl uppercase text-white md:text-5xl',
            titleClassName,
          )}
        >
          {title}
        </h1>
      )}
      <div
        className={twMerge(
          '2xs:px-4 z-0 h-full max-w-4xl text-xl leading-snug md:text-2xl xl:max-w-5xl xl:leading-normal',
          bodyClassName,
        )}
      >
        {children}
      </div>
    </section>
  )
}
