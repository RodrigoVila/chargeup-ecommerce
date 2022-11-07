import React, { useState, useEffect, FormEvent } from 'react';
import { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

import useAppSelector from '@hooks/useAppSelector';
import useAppActions from '@hooks/useAppActions';
import useEncryption from '@hooks/useEncryption';

import { colors, lang } from '@constants';
import RegisterForm from '@shared/Forms/RegisterForm';
import LoginForm from '@shared/Forms/LoginForm';
import Button from '@main/Buttons/Button';
import CloseModalButton from '@main/Buttons/CloseModalButton';
import Link from '@main/Link';
import { isEmailValid, isPasswordValid } from '@utils/index';

const initialState = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const Login = () => {
  const [isRegisterForm, setRegisterForm] = useState(false);
  const [credentials, setCredentials] = useState(initialState);

  const { name, lastName, email, password, repeatPassword } = credentials;

  const { isAuthLoading } = useAppSelector();

  const { displayErrorMessage, userLogin, registerUser, closeLoginModal } = useAppActions();

  const { encryptPassword } = useEncryption();

  const onInputChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  const toggleRegister = () => setRegisterForm(!isRegisterForm);

  const handleRegister = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

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

  const handleLogin = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

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

  const cleanCredentials = () => setCredentials(initialState);

  useEffect(() => {
    cleanCredentials();
  }, [isRegisterForm]);

  return (
    <>
      <Toaster />
      <div className="relative flex flex-col items-center justify-center w-full p-6 font-semibold text-black bg-white rounded-md">
        <CloseModalButton color="black" position="right" onClose={() => closeLoginModal()} />
        {isRegisterForm ? (
          <RegisterForm onInputChange={onInputChange} />
        ) : (
          <LoginForm onInputChange={onInputChange} />
        )}

        <Button
          title={isRegisterForm ? lang.es.USER_REGISTER : lang.es.LOGIN}
          color={colors.purple}
          hoverColor={colors.fuchsia}
          onClick={isRegisterForm ? handleRegister : handleLogin}
          disabled={isAuthLoading}
        />
        <Link
          text={isRegisterForm ? lang.es.GO_TO_LOGIN : lang.es.USER_REGISTER}
          onClick={toggleRegister}
        />
      </div>
    </>
  );
};

export default Login;
