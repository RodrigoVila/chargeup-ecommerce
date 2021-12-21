import React from "react";

const RegisterScreen = ({ error, setRegister }) => {
  const handlePress = () => {
    setRegister(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <form className="px-8 pt-6 bg-white rounded shadow-md">
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
        />
      </div>
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder=""
        />
        {error && (
          <p className="text-xs italic text-red-300">
            Please choose a password.
          </p>
        )}
      </div>
      <div className="flex flex-col w-full">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-purple-600 rounded hover:bg-purple-500 focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleRegister}
        >
          Register new account
        </button>
        <p
          className="flex items-center justify-center py-2 text-sm font-bold text-center text-blue-500 hover:text-blue-800"
          onClick={handlePress}
        >
          Go to Login.
        </p>
      </div>
    </form>
  );
};

export default RegisterScreen;
