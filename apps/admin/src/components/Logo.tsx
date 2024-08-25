import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to='/'>
      <div className='mt-2 flex w-full items-center justify-center'>
        <img src='/logo-white.png' alt='Charge UP Barcelona Logo' height={75} width={75} />
      </div>
    </Link>
  )
}
