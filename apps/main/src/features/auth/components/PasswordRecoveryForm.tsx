import { ChangeEvent } from 'react'
import { useIntl } from 'react-intl'

import { Input } from '@packages/input'

type PasswordRecoveryFormProps = {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const PasswordRecoveryForm = ({ onInputChange }: PasswordRecoveryFormProps) => {
  const { formatMessage } = useIntl()
  return (
    <form className='w-full rounded'>
      <Input
        label={formatMessage({ id: 'EMAIL' })}
        name='email'
        type='text'
        onChange={onInputChange}
      />
    </form>
  )
}
