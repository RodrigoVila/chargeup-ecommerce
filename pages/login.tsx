import React, { useState, useEffect, useMemo, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';

import useAppSelector from '@hooks/useAppSelector';
import useAppActions from '@hooks/useAppActions';

import { colors } from '@constants';
import RegisterForm from '@main/RegisterForm';
import LoginForm from '@main/LoginForm';
import Button from '@main/Button';
import Link from '@main/Link';
import useEncryption from '@hooks/useEncryption';

const initialState = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  repeatedPassword: '',
};

const LoginScreen = () => {
  const [isRegister, setRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState(initialState);

  const { name, lastName, email, password, repeatedPassword } = credentials;

  const router = useRouter();

  const { isLoggedIn, user, isAuthLoading } = useAppSelector();

  const { displayErrorMessage, displaySuccessMessage, userLogin, registerUser } = useAppActions();

  const { encryptPassword } = useEncryption();

  const onInputChange = (e: FormEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.currentTarget.name]: e.currentTarget.value });
  };

  const toggleRegister = () => setRegister(!isRegister);

  const handleRegister = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !lastName || !email || !password || !repeatedPassword) {
      displayErrorMessage('Todos los campos son obligatorios.');
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
      : displayErrorMessage('Las contraseñas deben coincidir.');
  };

  const handleLogin = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

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
            {isRegister ? (
              <RegisterForm email={credentials.email} onInputChange={onInputChange} />
            ) : (
              <LoginForm
                email={credentials.email}
                onInputChange={onInputChange}
                cleanCredentials={cleanCredentials}
              />
            )}

            <Button
              title={isRegister ? 'Register new account' : 'Login'}
              color={colors.purple}
              hoverColor={colors.fuchsia}
              onClick={isRegister ? handleRegister : handleLogin}
              disabled={isAuthLoading}
            />
            <Link
              text={isRegister ? 'Go back to Login' : 'Register new account'}
              onClick={toggleRegister}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
