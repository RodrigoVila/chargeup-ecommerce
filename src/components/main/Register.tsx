const RegisterScreen = ({
  email,
  errorMessage,
  onInputChange,
  handleRegister,
  goToLoginScreen,
}) => {
  return (
    <form className="px-8 pt-6 bg-white rounded shadow-md">
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="Name"
        >
          Name
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="Name"
          type="text"
          onChange={(e) => onInputChange("name", e)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="Name"
        >
          Last Name
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="lastName"
          type="text"
          onChange={(e) => onInputChange("lastName", e)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="Email"
        >
          Email
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="Email"
          type="text"
          value={email}
          onChange={(e) => onInputChange("email", e)}
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
          onChange={(e) => onInputChange("password", e)}
        />
        {errorMessage && (
          <p className="text-xs italic text-red-300">
            Please choose a password.
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="repeatedPassword"
        >
          Repeat password
        </label>
        <input
          className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="repeatedPassword"
          type="repeatedPassword"
          onChange={(e) => onInputChange("repeatedPassword", e)}
        />
        {errorMessage && (
          <p className="text-xs italic text-red-300">
            Passwords must be equal.
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
          onClick={goToLoginScreen}
        >
          Go to Login.
        </p>
      </div>
    </form>
  );
};

export default RegisterScreen;
