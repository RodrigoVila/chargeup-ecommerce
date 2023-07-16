import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';
import useGobBackCountdown from '@hooks/useCountdown';
import ErrorSucces from '@main/ErrorSuccess';
import UpdatePasswordForm from '@shared/Forms/UpdatePasswordForm';
import Logo from '@shared/Logo';
import Spinner from '@shared/Spinner';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

const PasswordRecovery = () => {
  const router = useRouter();
  const { validateTokenForPasswordChange } = useAppActions();
  const { isTokenForPasswordValidated, authRedirect } = useAppSelector();
  const { startCountdown } = useGobBackCountdown();

  const { email, token } = router.query;

  useEffect(() => {
    email && token && validateTokenForPasswordChange(email.toString(), token.toString());
  }, [email, token]);

  useEffect(() => {
    // When user changed password successfully, authRedirect is set to true
    authRedirect && startCountdown(2000);
  }, [authRedirect]);

  if (isTokenForPasswordValidated === null) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Spinner />
      </div>
    );
  }

  return (
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
          <ErrorSucces
            type="error"
            title={'No es posible validar su token'}
            subTitle={
              'Por favor inicie el proceso de recuperación de contraseña nuevamente. Si el problema persiste, contacte al administrador.'
            }
          />
        )}
      </div>
    </>
  );
};

export default PasswordRecovery;
