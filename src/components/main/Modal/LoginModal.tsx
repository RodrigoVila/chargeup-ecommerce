import useAppSelector from '@hooks/useAppSelector';

import useAppActions from '@hooks/useAppActions';
import useLogin from '@hooks/useLogin';
import Link from '@main/Link';
import { CustomButton, GoogleSignInButton } from '@shared/Buttons';
import LoginForm from '@shared/Forms/LoginForm';
import PasswordRecoveryForm from '@shared/Forms/PasswordRecoveryForm';
import RegisterForm from '@shared/Forms/RegisterForm';
import Modal from '@shared/Modal';
import { useTranslation } from 'react-i18next';

const LoginModal = () => {
  const { isLoginModalOpen, isAuthLoading } = useAppSelector();
  const { closeLoginModal } = useAppActions();
  const { formType, setFormType, onInputChange, handleButtonClick } = useLogin();

  const { t } = useTranslation();

  return (
    <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
      <div className="relative flex flex-col items-center justify-center w-full font-semibold text-black bg-white rounded-md">
        {formType === 'register' && <RegisterForm onInputChange={onInputChange} />}
        {formType === 'login' && <LoginForm onInputChange={onInputChange} />}
        {formType === 'passwordRecovery' && <PasswordRecoveryForm onInputChange={onInputChange} />}

        <div className="flex flex-col w-full gap-2">
          <CustomButton loading={isAuthLoading} onClick={(e) => handleButtonClick(e)}>
            {formType === 'login'
              ? t('LOGIN')
              : formType === 'register'
              ? t('USER_REGISTER')
              : t('PASSWORD_RECOVERY')}
          </CustomButton>

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
    </Modal>
  );
};

export default LoginModal;
