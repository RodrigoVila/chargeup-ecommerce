import { useGoogleLogin } from '@react-oauth/google';
import Image from 'next/image';

import { Button } from '@packages/button';

import { useAppActions } from '~hooks';
import { GoogleSignInErrorResponse, GoogleSignInSuccessResponse } from '~types';

export const GoogleSignInButton = () => {
  const { getGoogleUserData, displayErrorMessage } = useAppActions();

  const onSuccess = async (tokenResponse: GoogleSignInSuccessResponse) => {
    getGoogleUserData(tokenResponse);
  };

  const onError = (error: GoogleSignInErrorResponse) => {
    const message = `Error trying to log your Google Account. Error: ${error.error_description}`;
    const displayDuration = 8000; //8s
    displayErrorMessage(message, displayDuration);
  };

  const login = useGoogleLogin({ onSuccess, onError });

  return (
    <div
      className="relative flex items-center justify-center w-1/2 h-12 mx-auto cursor-pointer"
      onClick={() => login()}
    >
      <Image
        src="/images/btn_google_signin.png"
        alt="Google logo"
        layout="fill"
        data-atf="true"
        data-iml="513"
      />
    </div>
  );
};
