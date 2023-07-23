import { useIntl } from 'react-intl';

import { Button } from '@packages/button';

import { Modal } from '~features/modal';
import { useAppSelector, useAppActions, useLogin } from '~hooks';

import { GoogleSignInButton, LoginForm, PasswordRecoveryForm, RegisterForm } from './components';

export const LoginModal = () => {
  const { isLoginModalOpen, isAuthLoading } = useAppSelector();
  const { closeLoginModal } = useAppActions();
  const { formType, setFormType, onInputChange, handleButtonClick } = useLogin();

  const { formatMessage } = useIntl();

  return (
    <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
      <div className="relative flex flex-col items-center justify-center w-full font-semibold text-black bg-white rounded-md">
        {formType === 'register' && <RegisterForm onInputChange={onInputChange} />}
        {formType === 'login' && <LoginForm onInputChange={onInputChange} />}
        {formType === 'passwordRecovery' && <PasswordRecoveryForm onInputChange={onInputChange} />}

        <div className="flex flex-col w-full gap-2">
          <Button loading={isAuthLoading} onClick={(e) => handleButtonClick(e)}>
            {formType === 'login'
              ? formatMessage({ id: 'LOGIN' })
              : formType === 'register'
              ? formatMessage({ id: 'USER_REGISTER' })
              : formatMessage({ id: 'PASSWORD_RECOVERY' })}
          </Button>

          {formType !== 'passwordRecovery' && <GoogleSignInButton />}

          {(formType === 'register' || formType === 'passwordRecovery') && (
            <div onClick={() => setFormType('login')}>{formatMessage({ id: 'GO_TO_LOGIN' })}</div>
          )}

          {formType === 'login' && (
            <>
              <div onClick={() => setFormType('register')}>
                {formatMessage({ id: 'USER_REGISTER' })}
              </div>
              <div onClick={() => setFormType('passwordRecovery')}>
                {formatMessage({ id: 'PASSWORD_RECOVERY' })}
              </div>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};
