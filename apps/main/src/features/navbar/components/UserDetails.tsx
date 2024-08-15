import { useEffect, useState } from 'react'
import { googleLogout } from '@react-oauth/google'
import { useIntl } from 'react-intl'

import { Button } from '@packages/button'

import { useAppActions } from '~hooks'
import { UpdatePasswordForm } from '~components/forms'
import { UpdateDataForm } from './UpdateDataForm'

type EditingType = 'password' | 'userData' | null

export const UserDetails = () => {
  const [editing, setEditing] = useState<EditingType>(null)

  const { userLogout, closeUserModal, clearUserDetails } = useAppActions()

  const { formatMessage } = useIntl()

  const setEdit = (type: EditingType) => setEditing(type)

  const onClickLogout = () => {
    userLogout() //This one also clears local storage
    clearUserDetails()
    googleLogout()
    closeUserModal()
  }

  return (
    <div
      className={`${
        !editing && 'rounded-md bg-white p-2'
      } relative my-4 h-full w-full overflow-scroll`}
    >
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
