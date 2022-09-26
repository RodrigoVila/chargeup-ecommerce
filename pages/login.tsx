import React, { useState, useEffect, useMemo, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';

import useAppSelector from '@hooks/useAppSelector';
import useAppActions from '@hooks/useAppActions';
import useEncryption from '@hooks/useEncryption';

import { colors, lang, LOCAL_STORAGE_KEY } from '@constants';
import { isEmailValid, isPasswordValid } from '@utils/index';
import { getValueFromLocalStorage } from '@utils/localStorage';
import RegisterForm from '@main/RegisterForm';
import LoginForm from '@main/LoginForm';
import Button from '@main/Button';
import Link from '@main/Link';

const initialState = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  repeatedPassword: '',
};

const LoginScreen = () => {
  const [isRegisterForm, setRegisterForm] = useState(false);
  const [credentials, setCredentials] = useState(initialState);

  const { name, lastName, email, password, repeatedPassword } = credentials;

  const router = useRouter();

  const { isLoggedIn, user, isAuthLoading } = useAppSelector();

  const { displayErrorMessage, userLogin, registerUser, checkUserToken, userLogout } =
    useAppActions();

  const { encryptPassword } = useEncryption();

  const onInputChange = (e: FormEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.currentTarget.name]: e.currentTarget.value });
  };

  const toggleRegister = () => setRegisterForm(!isRegisterForm);

  const handleRegister = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!name || !lastName || !email || !password || !repeatedPassword) {
      displayErrorMessage(lang.es.ALL_INPUTS_REQUIRED);
      return;
    }

    if (!isEmailValid(email)) {
      displayErrorMessage(lang.es.INVALID_EMAIL);
      return;
    }

    if (!isPasswordValid(email)) {
      displayErrorMessage(lang.es.PASSWORD_REGEX);
      return;
    }

    const encryptedPassword = await encryptPassword(password);

    const newUser = {
      name,
      lastName,
      email,
      password: encryptedPassword,
    };

    password === repeatedPassword
      ? registerUser(newUser)
      : displayErrorMessage(lang.es.PASSWORDS_DONT_MATCH);
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

    const newUser = {
      email,
      password,
    };
    userLogin(newUser);
  };

  const cleanCredentials = () => setCredentials(initialState);

  useEffect(() => {
    // isLoggedIn && router.push("/");
    console.info('isLoggedIn: ', isLoggedIn, '. User: ', user);
  }, [isLoggedIn]);

  return (
    <>
      <Toaster />
      <div className="flex h-full min-h-screen w-screen min-w-[320px] flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-fuchsia-700 px-4">
        <div className="my-4 w-full max-w-sm  rounded-md bg-white font-semibold text-black">
          <div className="px-6 py-4">
            {isRegisterForm ? (
              <RegisterForm email={credentials.email} onInputChange={onInputChange} />
            ) : (
              <LoginForm
                email={credentials.email}
                onInputChange={onInputChange}
                cleanCredentials={cleanCredentials}
              />
            )}

            <Button
              title={isRegisterForm ? 'Register new account' : 'Login'}
              color={colors.purple}
              hoverColor={colors.fuchsia}
              onClick={isRegisterForm ? handleRegister : handleLogin}
              disabled={isAuthLoading}
            />
            <Link
              text={isRegisterForm ? 'Go back to Login' : 'Register new account'}
              onClick={toggleRegister}
            />
            <Link text={'Logout'} onClick={userLogout} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
