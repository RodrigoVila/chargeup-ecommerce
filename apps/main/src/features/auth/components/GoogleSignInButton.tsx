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
    <button
      className="relative flex items-center justify-center w-full gap-4 py-2 mx-auto border-2 border-black rounded-md cursor-pointer group hover:bg-black"
      onClick={() => login()}
    >
      <Image
        src="/images/google_logo.svg"
        alt="Google logo"
        data-atf="true"
        data-iml="513"
        height={24}
        width={24}
      />
      <span className='group-hover:text-white group-hover:bg-black'>Sign in with Google</span>
    </button>
  );
};
