import { ChangeEvent } from 'react'
import { useIntl } from 'react-intl'

import { Input } from '@packages/input'

type RegisterFormProps = {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const RegisterForm = ({ onInputChange }: RegisterFormProps) => {
  const { formatMessage } = useIntl()
  return (
    <form className='w-full rounded'>
      <Input
        label={formatMessage({ id: 'NAME' })}
        name='name'
        type='text'
        onChange={onInputChange}
      />
      <Input
        label={formatMessage({ id: 'LASTNAME' })}
        name='lastName'
        type='text'
        onChange={onInputChange}
      />
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
      <Input
        label={formatMessage({ id: 'REPEAT_PASSWORD' })}
        name='repeatPassword'
        type='password'
        onChange={onInputChange}
      />
    </form>
  )
}
