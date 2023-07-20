import { Toaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

import { Button } from '@packages/button'

import { useAppSelector, useLogin } from '~hooks'

import { LoginForm, PasswordRecoveryForm, RegisterForm, GoogleSignInButton } from './components'

export const Login = () => {
  const { isAuthLoading } = useAppSelector()
  const { formType, setFormType, onInputChange, handleButtonClick } = useLogin()

  const { t } = useTranslation()

  return (
    <>
      <Toaster />

      <div className="relative flex flex-col items-center justify-center w-full p-4 font-semibold text-black bg-white rounded-md">
        {formType === 'register' && <RegisterForm onInputChange={onInputChange} />}
        {formType === 'login' && <LoginForm onInputChange={onInputChange} />}
        {formType === 'passwordRecovery' && <PasswordRecoveryForm onInputChange={onInputChange} />}

        <div className="flex flex-col w-full gap-2">
          <Button loading={isAuthLoading} onClick={(e) => handleButtonClick(e)}>
            {formType === 'login'
              ? t('LOGIN')
              : formType === 'register'
              ? t('USER_REGISTER')
              : t('PASSWORD_RECOVERY')}
          </Button>

          {formType !== 'passwordRecovery' && (
            <GoogleSignInButton>
              {formType === 'login' ? 'Sign in with Google' : 'Sign up with Google'}
            </GoogleSignInButton>
          )}

          {(formType === 'register' || formType === 'passwordRecovery') && (
            <div onClick={() => setFormType('login')}>{t('GO_TO_LOGIN')}</div>
          )}

          {formType === 'login' && (
            <>
              <div onClick={() => setFormType('register')}>{t('USER_REGISTER')}</div>
              <div onClick={() => setFormType('passwordRecovery')}>{t('PASSWORD_RECOVERY')}</div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
