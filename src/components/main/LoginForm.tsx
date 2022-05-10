import { FC, ChangeEvent } from 'react'

interface IProps {
  email: string
  onInputChange: (field: string, e: ChangeEvent<HTMLInputElement>) => void
}

const LoginForm: FC<IProps> = ({ email, onInputChange }) => {
  return (
    <form className="rounded">
      <div className="mb-4">
        <label className="0 mb-2 block text-lg font-bold" htmlFor="Email">
          Email
        </label>
        <input
          className="0 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          id="Email"
          type="text"
          value={email}
          onChange={(e) => onInputChange('email', e)}
        />
      </div>
      <div className="mb-4">
        <label className="0 mb-2 block text-lg font-bold" htmlFor="password">
          Password
        </label>
        <input
          className="0 focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          id="password"
          type="password"
          onChange={(e) => onInputChange('password', e)}
        />
      </div>
    </form>
  )
}

export default LoginForm
