import { useIntl } from 'react-intl'

import { Button } from '@packages/button'

import { useAppSelector, useLogin } from '~hooks'

import { GoogleSignInButton, LoginForm, PasswordRecoveryForm, RegisterForm } from '~components/auth'

export const LoginDetails = () => {
  const { isAuthLoading } = useAppSelector()
  const { formType, setFormType, onInputChange, handleButtonClick } = useLogin()

  const { formatMessage } = useIntl()
  return (
    <div className='relative flex w-full flex-col items-center justify-center rounded-md bg-white font-semibold text-black'>
      {formType === 'register' && <RegisterForm onInputChange={onInputChange} />}
      {formType === 'login' && <LoginForm onInputChange={onInputChange} />}
      {formType === 'passwordRecovery' && <PasswordRecoveryForm onInputChange={onInputChange} />}

      <div className='flex w-full flex-col items-center gap-4'>
        <Button loading={isAuthLoading} onClick={handleButtonClick}>
          {formType === 'login'
            ? formatMessage({ id: 'LOGIN' })
            : formType === 'register'
            ? formatMessage({ id: 'USER_REGISTER' })
            : formatMessage({ id: 'PASSWORD_RECOVERY' })}
        </Button>

        {formType !== 'passwordRecovery' && <GoogleSignInButton />}

        {(formType === 'register' || formType === 'passwordRecovery') && (
          <button
            className='duration-300 hover:text-purple-700'
            onClick={() => setFormType('login')}
          >
            {formatMessage({ id: 'GO_TO_LOGIN' })}
          </button>
        )}

        {formType === 'login' && (
          <>
            <button
              className='duration-300 hover:text-purple-700'
              onClick={() => setFormType('register')}
            >
              {formatMessage({ id: 'USER_REGISTER' })}
            </button>
            <button
              className='duration-300 hover:text-purple-700'
              onClick={() => setFormType('passwordRecovery')}
            >
              {formatMessage({ id: 'PASSWORD_RECOVERY' })}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
