import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '@packages/input'

type RegisterFormProps = {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const RegisterForm = ({ onInputChange }: RegisterFormProps) => {
  const { t } = useTranslation()
  return (
    <form className="w-full rounded">
      <Input label={t('NAME')} name="name" type="text" onChange={onInputChange} />
      <Input label={t('LASTNAME')} name="lastName" type="text" onChange={onInputChange} />
      <Input label={t('EMAIL')} name="email" type="text" onChange={onInputChange} />
      <Input label={t('PASSWORD')} name="password" type="password" onChange={onInputChange} />
      <Input
        label={t('REPEAT_PASSWORD')}
        name="repeatPassword"
        type="password"
        onChange={onInputChange}
      />
    </form>
  )
}
