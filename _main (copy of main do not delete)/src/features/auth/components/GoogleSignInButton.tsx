import { ReactNode } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import Image from 'next/image'

import { Button } from '@packages/button'

import { useAppActions } from '~hooks'
import { GoogleSignInErrorResponse, GoogleSignInSuccessResponse } from '~types'

type GoogleSignInButtonProps = {
  children: ReactNode
}

export const GoogleSignInButton = ({ children }: GoogleSignInButtonProps) => {
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
    <Button
      className="flex items-center justify-between w-full hover:bg-white"
      labelClassName="group-hover:text-black p-0 flex items-center justify-center"
      type="outlined"
      onClick={() => login()}
      leftIconComponent={
        <div className="flex items-center justify-center">
          <Image
            src="https://www.google.com/images/hpp/gsa_super_g-64.gif"
            alt="Google logo"
            height="32"
            width="32"
            data-atf="true"
            data-iml="513"
          />
        </div>
      }
    >
      {children}
    </Button>
  )
}
