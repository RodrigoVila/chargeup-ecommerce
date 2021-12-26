import React, { useState, useRef, useEffect, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import RegisterScreen from "@main/Register";
import LoginScreen from "@main/Login";
import { userLogin, userRegister } from "@redux/actions";
import { RootState } from "@redux/reducers";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isRegister, setRegister] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    repeatedPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  // const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();
  const router = useRouter();

  const onInputChange = (type: string, e: FormEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [type]: e.currentTarget.value });
  };

  const goToRegisterScreen = () => setRegister(true);

  const goToLoginScreen = () => setRegister(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const { name, lastName, email, password, repeatedPassword } = credentials;

    setSuccessful(false);
    password === repeatedPassword
      ? dispatch(userRegister(name,lastName, email, password))
          .then(() => {
            setSuccessful(true);
          })
          .catch(() => {
            setSuccessful(false);
          })
      : setErrorMessage("password has to be equal");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = credentials;

    setLoading(true);
    const { data } = await dispatch(userLogin(email, password));
    data && console.log("!!!!data", data);

    // .then((data) => {
    //   //Go to profile
    //   // window.location.reload();
    //   console.log("!data", data);
    // })
    // .catch((e) => {
    //   console.error("!error login", e);
    //   setLoading(false);
    // });

    setLoading(false);
  };

  useEffect(() => {
    isLoggedIn && router.push("/");
  }, [isLoggedIn]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-br from-purple-500 to-fuchsia-700">
      <div className="w-full max-w-xs p-4 border-2 border-white rounded-md">
        {isRegister ? (
          <RegisterScreen
            email={credentials.email}
            errorMessage={errorMessage}
            onInputChange={onInputChange}
            handleRegister={handleRegister}
            goToLoginScreen={goToLoginScreen}
          />
        ) : (
          <LoginScreen
            email={credentials.email}
            errorMessage={errorMessage}
            onInputChange={onInputChange}
            handleLogin={handleLogin}
            goToRegisterScreen={goToRegisterScreen}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
