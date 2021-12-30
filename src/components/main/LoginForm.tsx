const LoginForm = ({ email, onInputChange }) => {
  return (
    <form className="rounded">
      <div className="mb-4">
        <label className="block mb-2 text-lg font-bold 0" htmlFor="Email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none 0 focus:outline-none focus:shadow-outline"
          id="Email"
          type="text"
          value={email}
          onChange={(e) => onInputChange("email", e)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-lg font-bold 0" htmlFor="password">
          Password
        </label>
        <input
          className="w-full px-3 py-2 mb-3 leading-tight border rounded shadow appearance-none 0 focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          onChange={(e) => onInputChange("password", e)}
        />
      </div>
    </form>
  );
};

export default LoginForm;
