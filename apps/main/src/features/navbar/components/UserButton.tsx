import { useTranslation } from 'react-i18next'
import { UserIcon } from '@heroicons/react/24/outline'
import { twMerge } from 'tailwind-merge'

import { useAppActions, useAppSelector } from '~hooks'

type UserButtonProps = {
  color?: 'black' | 'white'
}

export const UserButton = ({ color: propColor = 'white' }: UserButtonProps) => {
  const { userLogin } = useAppSelector()
  const { openUserModal, openLoginModal } = useAppActions()
  const { t } = useTranslation()

  const color = propColor === 'white' ? `text-white` : `text-black`
  const openModal = userLogin?.name ? openUserModal : openLoginModal

  return (
    <div className={twMerge('flex cursor-pointer flex-col items-center justify-center', color)}>
      <button onClick={openModal} className="w-6 h-6 md:h-8 md:w-8">
        <UserIcon className={`${color} h-full w-full`} />
      </button>
      <p
        onClick={openModal}
        className={twMerge('ext-s text-center leading-none md:text-sm', color)}
      >
        {userLogin?.name ? userLogin.name : t('LOGIN')}
      </p>
    </div>
  )
}

