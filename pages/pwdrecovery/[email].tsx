import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAppActions from '@hooks/useAppActions';
import Spinner from '@shared/Spinner';
import useAppSelector from '@hooks/useAppSelector';
import ErrorSucces from '@main/ErrorSuccess';
import { lang } from '@constants/lang';
import UpdatePasswordForm from '@shared/Forms/UpdatePasswordForm';

const PasswordRecovery = () => {
  const router = useRouter();
  const { email, token } = router.query;

  const { validateTokenForPasswordChange } = useAppActions();
  const { isTokenForPasswordValidated } = useAppSelector();

  useEffect(() => {
    email && token && validateTokenForPasswordChange(email.toString(), token.toString());
  }, [email, token]);

  if (isTokenForPasswordValidated === null) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div
      className={`${
        isTokenForPasswordValidated ? 'bg-purple-500' : 'bg-white'
      } flex h-screen w-full items-center justify-center`}
    >
      {isTokenForPasswordValidated ? (
        <div className="flex items-center justify-center w-full h-full max-w-md rounded-md">
          <UpdatePasswordForm />
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
  );
};

export default PasswordRecovery;
