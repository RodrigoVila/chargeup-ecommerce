import React from 'react'
import { AiOutlineWarning } from 'react-icons/ai'
import { Button } from '@packages/button'
import { twMerge } from 'tailwind-merge'
import { useNavigate } from 'react-router-dom'

type ErrorComponentProps = {
  message?: string
  description?: string
  className?: string
}

export const ErrorComponent: React.FC<ErrorComponentProps> = ({
  message = 'Oops! Something went wrong.',
  description = 'An unexpected error occurred. Please try again or contact support if the problem persists.',
  className,
}) => {
  const navigate = useNavigate()

  return (
    <div
      className={twMerge(
        'mx-auto mt-16 flex max-w-md flex-col items-center rounded-lg p-8 shadow-lg ',
        className,
      )}
    >
      <AiOutlineWarning size={80} className='mb-4 text-orange-300' />
      <h2 className='mb-2 text-center text-3xl font-bold text-gray-100'>{message}</h2>

      <p className='mb-6 text-center text-xl text-gray-200'>{description}</p>

      <div className='group'>
        <Button
          onClick={() => navigate('/')}
          className='w-max border-2 group-hover:bg-white'
          labelClassName='text-white group-hover:text-gray-800'
          variant='outlined'
        >
          Go Home
        </Button>
      </div>
    </div>
  )
}
