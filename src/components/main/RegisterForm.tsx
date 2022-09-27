const RegisterForm = ({ email, onInputChange }) => {
  const labelStyle = 'block mb-1 text-lg';
  const inputStyle =
    'focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none';

  return (
    <form className="rounded">
      <div className="mb-4">
        <label className={labelStyle} htmlFor="Name">
          Name
        </label>
        <input
          className={inputStyle}
          id="name"
          name="name"
          type="text"
          onChange={onInputChange}
        />
      </div>
      <div className="mb-4">
        <label className={labelStyle} htmlFor="Name">
          Last Name
        </label>
        <input
          className={inputStyle}
          id="lastName"
          name="lastName"
          type="text"
          onChange={onInputChange}
        />
      </div>
      <div className="mb-4">
        <label className={labelStyle} htmlFor="Email">
          Email
        </label>
        <input
          className={inputStyle}
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-4">
        <label className={labelStyle} htmlFor="password">
          Password
        </label>
        <input
          className={inputStyle}
          id="password"
          name="password"
          type="password"
          placeholder=""
          onChange={onInputChange}
        />
      </div>
      <div className="mb-4">
        <label className={labelStyle} htmlFor="repeatedPassword">
          Repeat password
        </label>
        <input
          className={inputStyle}
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
