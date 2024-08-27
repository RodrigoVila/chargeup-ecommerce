import { ChangeEvent } from 'react'
import { useIntl } from 'react-intl'

import { Input } from '@packages/input'

type LoginFormProps = {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const LoginForm = ({ onInputChange }: LoginFormProps) => {
  const { formatMessage } = useIntl()
  return (
    <form className='w-full rounded'>
      <Input
        label={formatMessage({ id: 'EMAIL' })}
        name='email'
        type='text'
        onChange={onInputChange}
      />
      <Input
        label={formatMessage({ id: 'PASSWORD' })}
        name='password'
        type='password'
        onChange={onInputChange}
      />
    </form>
  )
}
