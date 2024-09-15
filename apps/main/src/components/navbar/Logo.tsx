import Image from 'next/legacy/image'
import { twJoin } from 'tailwind-merge'
import logoImg from '@packages/assets/images/logo-white.png'

type LogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
}

export const Logo = ({ size = 'md', className = '' }: LogoProps) => {
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

  return (
    <div className={className}>
      <div className={twJoin('relative', sizeStyle)}>
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
