import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

import { Spinner } from '@packages/spinner'

import { useAppActions, useAppSelector, useCountdown } from '~hooks'
import { ErrorSuccess } from 'app/emailvalidation/components/ErrorSuccess'
import { Logo } from '~features/navbar/components/Logo'
import { UpdatePasswordForm } from '~components/forms'

const PasswordRecovery = () => {
  const { validateTokenForPasswordChange } = useAppActions()
  const { isTokenForPasswordValidated, authRedirect } = useAppSelector()
  const { startCountdown } = useCountdown()

  const router = useRouter()
  const { email, token } = router.query

  useEffect(() => {
    email && token && validateTokenForPasswordChange(email.toString(), token.toString())
  }, [router.query])

  useEffect(() => {
    // When user changed password successfully, authRedirect is set to true
    authRedirect && startCountdown(2000)
  }, [authRedirect])

  return isTokenForPasswordValidated ? (
    <>
      <Toaster />
      <div
        className={`${
          isTokenForPasswordValidated ? 'bg-purple-500' : 'bg-white'
        } flex h-screen w-full items-center justify-center`}
      >
        {isTokenForPasswordValidated ? (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Logo logo="white.png" size="lg" />
            <div className="max-w-md rounded-md">
              <UpdatePasswordForm />
            </div>
          </div>
        ) : (
          <ErrorSuccess
            type="error"
            title={'No es posible validar su token'}
            subTitle={
              'Por favor inicie el proceso de recuperación de contraseña nuevamente. Si el problema persiste, contacte al administrador.'
            }
          />
        )}
      </div>
    </>
  ) : (
    <div className="flex items-center justify-center w-full h-screen">
      <Spinner />
    </div>
  )
}

export default PasswordRecovery
