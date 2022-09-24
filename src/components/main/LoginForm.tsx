import { FC, ChangeEvent, useEffect } from 'react';

interface IProps {
  email: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  cleanCredentials: () => void;
}

const LoginForm: FC<IProps> = ({ email, onInputChange, cleanCredentials }) => {
  useEffect(() => {
    cleanCredentials();
  }, []);

  return (
    <form className="rounded">
      <div className="mb-4">
        <label className="0 mb-2 block text-lg font-bold" htmlFor="Email">
          Email
        </label>
        <input
          className="0 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="0 mb-2 block text-lg font-bold" htmlFor="password">
          Password
        </label>
        <input
          className="0 focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          id="password"
          name="password"
          type="password"
          onChange={onInputChange}
        />
      </div>
    </form>
  );
};

export default LoginForm;
