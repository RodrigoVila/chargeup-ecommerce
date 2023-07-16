import useAppSelector from '@hooks/useAppSelector';

import Modal from '@shared/Modal';
import useAppActions from '@hooks/useAppActions';
import { lang } from '@constants/lang';
import RegisterForm from '@shared/Forms/RegisterForm';
import LoginForm from '@shared/Forms/LoginForm';
import PasswordRecoveryForm from '@shared/Forms/PasswordRecoveryForm';
import Link from '@main/Link';
import useLogin from '@hooks/useLogin';
import { GoogleSignInButton, CustomButton } from '@shared/Buttons';

const LoginModal = () => {
  const { isLoginModalOpen, isAuthLoading } = useAppSelector();
  const { closeLoginModal } = useAppActions();
  const { formType, setFormType, onInputChange, handleButtonClick } = useLogin();

  return (
    <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
      <div className="relative flex flex-col items-center justify-center w-full font-semibold text-black bg-white rounded-md">
        {formType === 'register' && <RegisterForm onInputChange={onInputChange} />}
        {formType === 'login' && <LoginForm onInputChange={onInputChange} />}
        {formType === 'passwordRecovery' && <PasswordRecoveryForm onInputChange={onInputChange} />}

        <div className="flex flex-col w-full gap-2">
          <CustomButton loading={isAuthLoading} onClick={(e) => handleButtonClick(e)}>
            {formType === 'login'
              ? lang.es.LOGIN
              : formType === 'register'
              ? lang.es.USER_REGISTER
              : lang.es.PASSWORD_RECOVERY}
          </CustomButton>

          {formType !== 'passwordRecovery' && (
            <GoogleSignInButton
              text={formType === 'login' ? 'Sign in with Google' : 'Sign up with Google'}
            />
          )}

          {(formType === 'register' || formType === 'passwordRecovery') && (
            <Link text={lang.es.GO_TO_LOGIN} onClick={() => setFormType('login')} />
          )}

          {formType === 'login' && (
            <>
              <Link text={lang.es.USER_REGISTER} onClick={() => setFormType('register')} />
              <Link
                text={lang.es.PASSWORD_RECOVERY}
                onClick={() => setFormType('passwordRecovery')}
              />
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
