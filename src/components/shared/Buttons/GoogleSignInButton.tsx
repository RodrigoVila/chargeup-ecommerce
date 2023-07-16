import useAppActions from '@hooks/useAppActions';
import { useGoogleLogin } from '@react-oauth/google';
import CustomButton from '@shared/Buttons/CustomButton';
import Image from 'next/image';
import { GoogleSignInErrorResponse, GoogleSignInSuccessResponse } from 'types';

const GoogleSignInButton = ({ text }: { text: string }) => {
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
    <CustomButton
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
      {text}
    </CustomButton>
  );
};

export default GoogleSignInButton;
