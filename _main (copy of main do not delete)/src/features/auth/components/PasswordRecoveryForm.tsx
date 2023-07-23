import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '@packages/input'

type PasswordRecoveryFormProps = {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const PasswordRecoveryForm = ({ onInputChange }: PasswordRecoveryFormProps) => {
  const { t } = useTranslation()
  return (
    <form className="w-full rounded">
      <Input label={t('EMAIL')} name="email" type="text" onChange={onInputChange} />
    </form>
  )
}