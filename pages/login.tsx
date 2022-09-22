import React, { useState, useEffect, useMemo, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';

import { v4 as uuidv4 } from 'uuid';

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

  const { isLoggedIn, user } = useAppSelector();

  const { displayErrorMessage, displaySuccessMessage, userLogin, registerUser } = useAppActions();

  const { encryptData, compareHashedPassword } = useEncryption();

  const onInputChange = (type: string, e: FormEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [type]: e.currentTarget.value });
  };

  const toggleRegister = () => setRegister(!isRegister);

  const handleRegister = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    const newUser = {
      name,
      lastName,
      email,
      password: encryptData(password),
      token: uuidv4(),
    };

    if (!name || !lastName || !email || !password || !repeatedPassword) {
      displayErrorMessage('Todos los campos son obligatorios.');
      return;
    }

    password === repeatedPassword
      ? registerUser(newUser)
      : displayErrorMessage('Las contraseñas deben coincidir.');
  };

  const handleLogin = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    const token = uuidv4();
    const newUser = {
      email,
      password,
      token,
    };
    userLogin(newUser);
    setLoading(false);
  };

  useEffect(() => {
    // isLoggedIn && router.push("/");
    console.info('isLoggedIn: ', isLoggedIn, '. User: ', user);
  }, [isLoggedIn]);

  return (
    <>
      <Toaster />
      <div className="flex h-full min-h-screen w-screen min-w-[320px] flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-fuchsia-700 px-4">
        <div className="my-4 w-full max-w-md  rounded-md bg-white font-semibold text-black">
          <div className="px-6 py-4">
            {isRegister ? (
              <>
                <RegisterForm email={credentials.email} onInputChange={onInputChange} />
                <Button
                  title="Register new account"
                  color={colors.fuchsia}
                  onClick={(e: FormEvent<HTMLButtonElement>) => handleRegister(e)}
                />
                <Link text="Go to Login" onClick={toggleRegister} />
              </>
            ) : (
              <>
                <LoginForm email={credentials.email} onInputChange={onInputChange} />
                <Button title="Login" color={colors.purple} onClick={handleLogin} />
                <Link text="Register new account" onClick={toggleRegister} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
