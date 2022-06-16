import React, { useState, useRef, useEffect, FormEvent } from 'react'
import { useRouter } from 'next/router'
import Bcrypt from 'bcryptjs'

import RegisterForm from '@main/Register'
import LoginForm from '@main/LoginForm'
import { displayErrorMessage, displaySuccessMessage, userLogin, userRegister } from '@redux/actions'
import { RootState } from '@redux/store'
import Button from '@main/Button'
import Link from '@main/Link'
import { colors } from '@constants'
import { useAppDispatch, useAppSelector } from '@hooks'

const LoginScreen = () => {
  const [isRegister, setRegister] = useState(false)
  const [credentials, setCredentials] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    repeatedPassword: '',
  })
  const [loading, setLoading] = useState(false)

  const { isLoggedIn, user } = useAppSelector((state: RootState) => state.auth)

  const dispatch = useAppDispatch()
  const router = useRouter()

  const encryptPassword = (password: string) => Bcrypt.hashSync(password, 10)

  const onInputChange = (type: string, e: FormEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [type]: e.currentTarget.value })
  }

  const toggleRegister = () => setRegister(!isRegister)

  const handleRegister = (e) => {
    e.preventDefault()

    const { name, lastName, email, password, repeatedPassword } = credentials

    setLoading(true)
    password === repeatedPassword
      ? dispatch(userRegister(name, lastName, email, encryptPassword(password))).then((data) =>
          console.log('data', data)
        )
      : dispatch(displayErrorMessage('Passwords need to be equal'))
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    const { email, password } = credentials
    setLoading(true)
    await dispatch(userLogin(email, encryptPassword(password)))
    setLoading(false)
  }

  useEffect(() => {
    // isLoggedIn && router.push("/");
    console.info('isLoggedIn: ', isLoggedIn, '. User: ', user)
  }, [isLoggedIn])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-fuchsia-700 px-4">
      <div className="w-full max-w-md rounded-md bg-white font-semibold text-black">
        <div className="px-6 py-4">
          {isRegister ? (
            <>
              <RegisterForm email={credentials.email} onInputChange={onInputChange} />
              <Button
                title="Register new account"
                color={colors.fuchsia}
                onClick={handleRegister}
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
  )
}

export default LoginScreen
