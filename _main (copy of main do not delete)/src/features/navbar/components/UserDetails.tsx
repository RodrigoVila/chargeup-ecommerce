import { useEffect, useState } from 'react'
import { googleLogout } from '@react-oauth/google'
import { useTranslation } from 'react-i18next'

import { Button } from '@packages/button'

import { useAppActions } from '~hooks'
import { UpdatePasswordForm, UserDataForm } from '~components/forms'

type EditingType = 'password' | 'userData' | null

export const UserDetails = () => {
  const [editing, setEditing] = useState<EditingType>(null)

  const { userLogout, closeUserModal, getUserDetails } = useAppActions()

  const { t } = useTranslation()

  const setEdit = (type: EditingType) => setEditing(type)

  const onClickLogout = () => {
    userLogout()
    googleLogout()
    closeUserModal()
  }

  useEffect(() => {
    getUserDetails()
  }, [])

  return (
    <div
      className={`${
        !editing && 'rounded-md bg-white p-2'
      } relative my-4 h-full w-full overflow-scroll`}
    >
      {editing === 'userData' && <UserDataForm />}
      {editing === 'password' && <UpdatePasswordForm />}

      {!editing && (
        <div className="flex flex-col items-center justify-center w-full gap-2 mx-auto">
          <Button onClick={() => setEdit('userData')}>{t('CHANGE_USER_DATA')}</Button>
          <Button onClick={() => setEdit('password')}>{t('CHANGE_PASSWORD')}</Button>
          <Button onClick={onClickLogout}>{t('LOGOUT')}</Button>
        </div>
      )}
    </div>
  )
}
