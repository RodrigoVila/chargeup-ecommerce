import { useIntl } from 'react-intl'
import { FaRegUser } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

import { useAppSelector } from '~hooks'

type UserButtonProps = {
  onOpen?: () => void
  color?: 'black' | 'white'
}

export const UserButton = ({ onOpen, color: propColor = 'white' }: UserButtonProps) => {
  const { userLogin } = useAppSelector()
  const { formatMessage } = useIntl()

  const color = propColor === 'white' ? `text-white` : `text-black`

  return (
    <div className={twMerge('flex cursor-pointer flex-col items-center justify-center', color)}>
      <button onClick={onOpen} className='h-6 w-6 md:h-8 md:w-8'>
        <FaRegUser className={`${color} h-full w-full`} />
      </button>
      <p
        onClick={onOpen}
        className={twMerge(
          'leading-0 text-center text-sm leading-none lg:text-lg 2xl:text-base',
          color,
        )}
      >
        {userLogin?.name ? userLogin.name : formatMessage({ id: 'LOGIN' })}
      </p>
    </div>
  )
}
