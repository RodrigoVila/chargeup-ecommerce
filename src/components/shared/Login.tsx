import { Toaster } from 'react-hot-toast';

import { lang } from '@constants/lang';
import { colors } from '@constants/colors';
import RegisterForm from '@shared/Forms/RegisterForm';
import LoginForm from '@shared/Forms/LoginForm';
import PasswordRecoveryForm from '@shared/Forms/PasswordRecoveryForm';
import Button from '@main/Buttons/Button';
import CloseModalButton from '@main/Buttons/CloseModalButton';
import Link from '@main/Link';
import useAppActions from '@hooks/useAppActions';
import useLogin from '@hooks/useLogin';
import useAppSelector from '@hooks/useAppSelector';

const Login = () => {
  const { closeLoginModal } = useAppActions();
  const { isAuthLoading } = useAppSelector();
  const { formType, setFormType, onInputChange, getButtonTitle, handleButtonClick } = useLogin();

  return (
    <>
      <Toaster />

      <div className="relative flex flex-col items-center justify-center w-full p-4 font-semibold text-black bg-white rounded-md">
        <div className="relative flex items-center justify-end w-full">
          <CloseModalButton color="black" onClose={() => closeLoginModal()} />
        </div>

        {formType === 'register' && <RegisterForm onInputChange={onInputChange} />}
        {formType === 'login' && <LoginForm onInputChange={onInputChange} />}
        {formType === 'passwordRecovery' && <PasswordRecoveryForm onInputChange={onInputChange} />}

        <Button
          title={getButtonTitle()}
          color={colors.purple}
          hoverColor={colors.fuchsia}
          onClick={(e) => handleButtonClick(e)}
          disabled={isAuthLoading}
        />

        {(formType === 'register' || formType === 'passwordRecovery') && (
          <Link text={lang.es.GO_TO_LOGIN} onClick={() => setFormType('login')} />
        )}

        {formType === 'login' && (
          <>
            <Link text={lang.es.USER_REGISTER} onClick={() => setFormType('register')} />
            <Link text={lang.es.PASSWORD_RECOVERY} onClick={() => setFormType('passwordRecovery')} />
          </>
        )}
      </div>
    </>
  );
};

export default Login;
