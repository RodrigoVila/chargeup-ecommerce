const RegisterForm = ({ email, onInputChange }) => {
  return (
    <form className="p-0 rounded">
      <div className="p-0">
        <label className="block mb-2 text-lg " htmlFor="Name">
          Name
        </label>
        <input
          className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="name"
          name="name"
          type="text"
          onChange={onInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-lg" htmlFor="Name">
          Last Name
        </label>
        <input
          className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="lastName"
          name="lastName"
          type="text"
          onChange={onInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-lg" htmlFor="Email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-lg" htmlFor="password">
          Password
        </label>
        <input
          className="w-full px-3 py-2 mb-3 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="password"
          name="password"
          type="password"
          placeholder=""
          onChange={onInputChange}
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-lg" htmlFor="repeatedPassword">
          Repeat password
        </label>
        <input
          className="w-full px-3 py-2 mb-3 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="repeatedPassword"
          name="repeatedPassword"
          type="password"
          onChange={onInputChange}
        />
      </div>
    </form>
  );
};

export default RegisterForm;
