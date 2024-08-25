import { Link } from 'react-router-dom'

type LogoProps = {
  size?: number
}

export const Logo = ({ size = 75 }: LogoProps) => {
  return (
    <Link to='/'>
      <div className='mt-2 flex w-full items-center justify-center'>
        <img src='/logo-white.png' alt='Charge UP Barcelona Logo' height={size} width={size} />
      </div>
    </Link>
  )
}
