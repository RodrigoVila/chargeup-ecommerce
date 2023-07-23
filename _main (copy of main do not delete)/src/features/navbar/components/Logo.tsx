import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

type LogoProps = {
  logo: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  scrollOnClick?: boolean
  className?: string
}

export const Logo = ({ logo, size = 'md', scrollOnClick = false, className = '' }: LogoProps) => {
  const sizeStyle =
    size === 'sm'
      ? 'h-22 w-22'
      : size === 'md'
      ? ' h-24 w-32'
      : size === 'lg'
      ? 'h-28 w-36'
      : size === 'xl'
      ? 'h-36 w-44'
      : 'w-full h-full' // full size

  const cursorStyles = scrollOnClick ? 'cursor-pointer' : 'cursor-default'
  return (
    <div className={className}>
      <div className={twMerge('relative', sizeStyle, cursorStyles)}>
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
  )
}
