import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

import { Spinner } from '@packages/spinner'

import { useAppActions, useAppSelector, useCountdown } from '~hooks'
import { ErrorSuccess } from '~components/ErrorSuccess'
import { UpdatePasswordForm } from '~components/forms'
import { Logo } from '~components/navbar'

const PasswordRecovery = () => {
  const { validateTokenForPasswordChange } = useAppActions()
  const { isTokenForPasswordValidated, authRedirect } = useAppSelector()
  const { startCountdown } = useCountdown()

  const router = useRouter()
  const { email, token } = router.query

  useEffect(() => {
    email && token && validateTokenForPasswordChange(email.toString(), token.toString())
  }, [email, token, validateTokenForPasswordChange])

  useEffect(() => {
    // When user changed password successfully, authRedirect is set to true
    authRedirect && startCountdown(2000)
  }, [authRedirect, startCountdown])

  return isTokenForPasswordValidated ? (
    <>
      <Toaster />
      <div
        className={`${
          isTokenForPasswordValidated ? 'bg-purple-500' : 'bg-white'
        } flex h-screen w-full items-center justify-center`}
      >
        {isTokenForPasswordValidated ? (
          <div className='flex h-full w-full flex-col items-center justify-center gap-3'>
            <Logo size='lg' />
            <UpdatePasswordForm requestFromMail={email as string} />
          </div>
        ) : (
          <ErrorSuccess
            type='error'
            title={'No es posible validar su token'}
            subTitle={
              'Por favor inicie el proceso de recuperación de contraseña nuevamente. Si el problema persiste, contacte al administrador.'
            }
          />
        )}
      </div>
    </>
  ) : (
    <div className='flex h-screen w-full items-center justify-center'>
      <Spinner />
    </div>
  )
}

export default PasswordRecovery
