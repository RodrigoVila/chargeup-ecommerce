import { useIntl } from 'react-intl'
import { UserIcon } from '@heroicons/react/24/outline'
import { twMerge } from 'tailwind-merge'

import { useAppActions, useAppSelector } from '~hooks'

type UserButtonProps = {
  color?: 'black' | 'white'
}

export const UserButton = ({ color: propColor = 'white' }: UserButtonProps) => {
  const { userLogin } = useAppSelector()
  const { openUserModal, openLoginModal } = useAppActions()
  const { formatMessage } = useIntl()

  const color = propColor === 'white' ? `text-white` : `text-black`
  const openModal = userLogin?.name ? openUserModal : openLoginModal

  return (
    <div className={twMerge('flex cursor-pointer flex-col items-center justify-center', color)}>
      <button onClick={openModal} className='h-6 w-6 md:h-8 md:w-8'>
        <UserIcon className={`${color} h-full w-full`} />
      </button>
      <p
        onClick={openModal}
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
