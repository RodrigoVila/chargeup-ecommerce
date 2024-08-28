import { useEffect, useState } from 'react'
import { googleLogout } from '@react-oauth/google'
import { useIntl } from 'react-intl'

import { Button } from '@packages/button'

import { useAppActions } from '~hooks'
import { UpdatePasswordForm } from '~components/forms'
import { UpdateDataForm } from './UpdateDataForm'
import { twMerge } from 'tailwind-merge'

type EditingType = 'password' | 'userData' | null

export const UserDetails = () => {
  const [editing, setEditing] = useState<EditingType>(null)

  const { userLogout, clearUserDetails } = useAppActions()

  const { formatMessage } = useIntl()

  const setEdit = (type: EditingType) => setEditing(type)

  const onClickLogout = () => {
    userLogout() //This one also clears local storage
    clearUserDetails()
    googleLogout()
  }

  return (
    <div
      className={twMerge(
        'relative h-full w-full overflow-scroll p-2 pt-0',
        !editing && 'overflow-auto rounded-md bg-white',
      )}
    >
      <h3 className='mb-4 text-center text-xl font-bold uppercase text-black'>Edit user detail</h3>
      {editing === 'userData' && <UpdateDataForm />}
      {editing === 'password' && <UpdatePasswordForm />}

      {!editing && (
        <div className='mx-auto flex w-full flex-col items-center justify-center gap-2'>
          <Button onClick={() => setEdit('userData')}>
            {formatMessage({ id: 'CHANGE_USER_DATA' })}
          </Button>
          <Button onClick={() => setEdit('password')}>
            {formatMessage({ id: 'CHANGE_PASSWORD' })}
          </Button>
          <Button onClick={onClickLogout}>{formatMessage({ id: 'LOGOUT' })}</Button>
        </div>
      )}
    </div>
  )
}
