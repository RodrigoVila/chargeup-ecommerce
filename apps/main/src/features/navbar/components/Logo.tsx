import Image from 'next/legacy/image'
import { twMerge } from 'tailwind-merge'
import logoImg from '@packages/assets/images/logo-white.png'

type LogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  scrollOnClick?: boolean
  className?: string
}

export const Logo = ({ size = 'md', scrollOnClick = false, className = '' }: LogoProps) => {
  const sizeStyle =
    size === 'sm'
      ? 'h-22 w-22'
      : size === 'md'
      ? 'h-24 w-32'
      : size === 'lg'
      ? 'h-28 w-36'
      : size === 'xl'
      ? 'h-36 w-44'
      : 'w-full h-full'

  const cursorStyles = scrollOnClick ? 'cursor-pointer' : 'cursor-default'

  return (
    <div className={className}>
      <div className={twMerge('relative', sizeStyle, cursorStyles)}>
        {/* <a className='m-0 h-full w-full p-0' href={scrollOnClick ? '#welcome' : undefined}> */}
        <Image
          src={logoImg}
          alt='Charge UP Barcelona Logo'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        {/* </a> */}
      </div>
    </div>
  )
}
