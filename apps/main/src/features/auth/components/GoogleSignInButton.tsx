import { useGoogleLogin } from '@react-oauth/google'
import Image from 'next/image'

import { Button } from '@packages/button'

import { useAppActions } from '~hooks'
import { GoogleSignInErrorResponse, GoogleSignInSuccessResponse } from '@packages/types'

export const GoogleSignInButton = () => {
  const { getGoogleUserData, displayErrorMessage } = useAppActions()

  const onSuccess = async (tokenResponse: GoogleSignInSuccessResponse) => {
    getGoogleUserData(tokenResponse)
  }

  const onError = (error: GoogleSignInErrorResponse) => {
    const message = `Error trying to log your Google Account. Error: ${error.error_description}`
    const displayDuration = 8000 //8s
    displayErrorMessage(message, displayDuration)
  }

  const login = useGoogleLogin({ onSuccess, onError })

  return (
    <button
      className='group relative mx-auto flex w-full cursor-pointer items-center justify-center gap-4 rounded-md border-2 border-black py-2 hover:bg-black'
      onClick={() => login()}
    >
      <Image
        src='/images/google_logo.svg'
        alt='Google logo'
        data-atf='true'
        data-iml='513'
        height={24}
        width={24}
      />
      <span className='group-hover:bg-black group-hover:text-white'>Sign in with Google</span>
    </button>
  )
}
