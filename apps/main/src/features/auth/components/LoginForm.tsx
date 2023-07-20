import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '@packages/input'

type LoginFormProps = {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const LoginForm = ({ onInputChange }: LoginFormProps) => {
  const { t } = useTranslation()
  return (
    <form className="w-full rounded">
      <Input label={t('EMAIL')} name="email" type="text" onChange={onInputChange} />
      <Input label={t('PASSWORD')} name="password" type="password" onChange={onInputChange} />
    </form>
  )
}