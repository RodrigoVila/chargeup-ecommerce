import { useState, useEffect, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useAppActions from '@hooks/useAppActions';
import useEncryption from '@hooks/useEncryption';
import { isEmailValid, isPasswordValid } from '@utils/index';
import { lang } from '@constants/lang';

const initialState = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const useLogin = () => {
  const [formType, setFormType] = useState('login');
  const [credentials, setCredentials] = useState(initialState);

  const { name, lastName, email, password, repeatPassword } = credentials;

  const { displayErrorMessage, userLogin, registerUser,passwordRecovery } = useAppActions();

  const { encryptPassword } = useEncryption();

  const onInputChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  const cleanCredentials = () => setCredentials(initialState);

  const getButtonTitle = () => {
    if (formType === 'login') return lang.es.LOGIN;
    if (formType === 'register') return lang.es.USER_REGISTER;
    if (formType === 'passwordRecovery') return lang.es.PASSWORD_RECOVERY;
  };

  const handleRegister = async () => {
    const pid = uuidv4();

    if (!name || !lastName || !email || !password || !repeatPassword) {
      displayErrorMessage(lang.es.ALL_INPUTS_REQUIRED);
      return;
    }

    if (!isEmailValid(email)) {
      displayErrorMessage(lang.es.INVALID_EMAIL);
      return;
    }

    if (!isPasswordValid(password)) {
      displayErrorMessage(lang.es.PASSWORD_REGEX);
      return;
    }

    if (password !== repeatPassword) {
      displayErrorMessage(lang.es.PASSWORDS_DONT_MATCH);
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
      displayErrorMessage(lang.es.ALL_INPUTS_REQUIRED);
      return;
    }

    if (!isEmailValid(email)) {
      displayErrorMessage(lang.es.INVALID_EMAIL);
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
      displayErrorMessage(lang.es.ALL_INPUTS_REQUIRED);
      return;
    }
    if (!isEmailValid(email)) {
      displayErrorMessage(lang.es.INVALID_EMAIL);
      return;
    }

    passwordRecovery(email);
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
    getButtonTitle,
    handleButtonClick,
  };
};

export default useLogin;
