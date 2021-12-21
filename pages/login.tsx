import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import RegisterScreen from "@main/Register";
import LoginScreen from "@main/Login";

const Login = () => {
  const error = false;
  const [isRegister, setRegister] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-br from-purple-500 to-fuchsia-700">
      <div className="w-full max-w-xs">
        {isRegister ? (
          <RegisterScreen error={error} setRegister={setRegister} />
        ) : (
          <LoginScreen error={error} setRegister={setRegister} />
        )}
      </div>
    </div>
  );
};

export default Login;
