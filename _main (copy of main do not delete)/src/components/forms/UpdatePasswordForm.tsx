import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@packages/button'
import { Input } from '@packages/input'

import { useAppActions, useAppSelector } from '~hooks'
import { encryptPassword } from '~utils'

const INITIAL_STATE = { oldPassword: '', password: '', repeatPassword: '' }

export const UpdatePasswordForm = () => {
  const [userDetails, setUserDetails] = useState(INITIAL_STATE)

  const { displayErrorMessage, editUserPassword } = useAppActions()
  const {
    userLogin,
    isAuthLoading,
  } = useAppSelector()

  const { t } = useTranslation()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserDetails((currDetails) => ({ ...currDetails, [name]: value }))
  }

  const handleSubmit = async () => {
    const { password, repeatPassword } = userDetails
    if (password !== repeatPassword) {
      displayErrorMessage(t('PASSWORDS_DONT_MATCH'))
      return
    }

    const encryptedPassword = await encryptPassword(password)

    userLogin?.email && editUserPassword(userLogin.email, encryptedPassword)
  }
  return (
    <div className="p-6 pt-4 bg-white rounded-xl">
      <Input label={t('NEW_PASSWORD')} type="password" name="password" onChange={handleChange} />
      <Input
        label={t('REPEAT_PASSWORD')}
        type="password"
        name="repeatPassword"
        onChange={handleChange}
      />
      <Button onClick={handleSubmit} loading={isAuthLoading}>
        {t('CHANGE_PASSWORD')}
      </Button>
    </div>
  )
}