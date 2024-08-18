import Image from 'next/image'

export const Logo = () => {
  return (
    <div className='mt-2 flex w-full items-center justify-center'>
      <Image src='/logo-white.png' alt='Charge UP Barcelona Logo' height={75} width={75} />
    </div>
  )
}
