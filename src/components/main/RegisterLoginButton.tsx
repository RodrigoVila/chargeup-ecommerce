import { FC } from 'react'
import { AiOutlineUser } from 'react-icons/ai'

const RegisterLoginButton: FC = () => {
  return (
    <div className="mx-2 flex items-center">
      <AiOutlineUser className="w-12 text-4xl text-white" />
    </div>
  )
}

export default RegisterLoginButton
