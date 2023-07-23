import { FormEvent, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';

import { useAppActions } from '~hooks';
import { encryptPassword } from '~utils/encrypt';
import { isEmailValid, isPasswordValid } from '~utils/validation';

const initialState = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

type FormType = 'login' | 'register' | 'passwordRecovery';

export const useLogin = () => {
  const [formType, setFormType] = useState<FormType>('login');
  const [credentials, setCredentials] = useState(initialState);

  const { name, lastName, email, password, repeatPassword } = credentials;

  const { displayErrorMessage, userLogin, registerUser, recoverUserPassword } = useAppActions();

  const { formatMessage } = useIntl();

  const onInputChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  const cleanCredentials = () => setCredentials(initialState);

  const handleRegister = async () => {
    const pid = uuidv4();

    if (!name || !lastName || !email || !password || !repeatPassword) {
      displayErrorMessage(formatMessage({ id: 'ALL_INPUTS_REQUIRED' }));
      return;
    }

    if (!isEmailValid(email)) {
      displayErrorMessage(formatMessage({ id: 'INVALID_EMAIL' }));
      return;
    }

    if (!isPasswordValid(password)) {
      displayErrorMessage(formatMessage({ id: 'PASSWORD_REGEX' }));
      return;
    }

    if (password !== repeatPassword) {
      displayErrorMessage(formatMessage({ id: 'PASSWORDS_DONT_MATCH' }));
      return;
    }

    const encryptedPassword = await encryptPassword(password);

    const newUser = {
      name,
      lastName,
      pid,
      email,
      password: encryptedPassword,
    };

    registerUser(newUser);
  };

  const handleLogin = () => {
    if (!email || !password) {
      displayErrorMessage(formatMessage({ id: 'ALL_INPUTS_REQUIRED' }));
      return;
    }

    if (!isEmailValid(email)) {
      displayErrorMessage(formatMessage({ id: 'INVALID_EMAIL' }));
      return;
    }

    const user = {
      email,
      password,
    };
    userLogin(user);
  };

  const handlePasswordRecovery = () => {
    if (!email) {
      displayErrorMessage(formatMessage({ id: 'ALL_INPUTS_REQUIRED' }));
      return;
    }
    if (!isEmailValid(email)) {
      displayErrorMessage(formatMessage({ id: 'INVALID_EMAIL' }));
      return;
    }

    recoverUserPassword(email);
  };

  const handleButtonClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formType === 'login') handleLogin();
    if (formType === 'register') handleRegister();
    if (formType === 'passwordRecovery') handlePasswordRecovery();
  };

  useEffect(() => {
    cleanCredentials();
  }, [formType]);

  return {
    formType,
    setFormType,
    onInputChange,
    handleButtonClick,
  };
};
