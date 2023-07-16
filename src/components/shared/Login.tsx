import { Toaster } from 'react-hot-toast';

import useAppSelector from '@hooks/useAppSelector';
import useLogin from '@hooks/useLogin';
import Link from '@main/Link';
import Button from '@shared/Buttons/CustomButton';
import LoginForm from '@shared/Forms/LoginForm';
import PasswordRecoveryForm from '@shared/Forms/PasswordRecoveryForm';
import RegisterForm from '@shared/Forms/RegisterForm';
import { useTranslation } from 'react-i18next';
import GoogleSignInButton from './Buttons/GoogleSignInButton';

const Login = () => {
  const { isAuthLoading } = useAppSelector();
  const { formType, setFormType, onInputChange, handleButtonClick } = useLogin();

  const { t } = useTranslation();

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
            <GoogleSignInButton
              text={formType === 'login' ? 'Sign in with Google' : 'Sign up with Google'}
            />
          )}

          {(formType === 'register' || formType === 'passwordRecovery') && (
            <Link text={t('GO_TO_LOGIN')} onClick={() => setFormType('login')} />
          )}

          {formType === 'login' && (
            <>
              <Link text={t('USER_REGISTER')} onClick={() => setFormType('register')} />
              <Link text={t('PASSWORD_RECOVERY')} onClick={() => setFormType('passwordRecovery')} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
