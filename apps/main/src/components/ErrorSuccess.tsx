import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { IoMdClose } from 'react-icons/io'
import { FaRegCheckCircle } from 'react-icons/fa'

import { Button } from '@packages/button'

import { useCountdown } from '~hooks'
import { colors } from '~constants/colors'

type ErrorSuccesProps = {
  type: 'error' | 'success'
  title: string
  subTitle: string
  buttonLabel?: string
  onClickButton?: () => void
  autoGoBackToHome?: boolean
}

export const ErrorSuccess = ({
  title,
  subTitle,
  type,
  buttonLabel,
  onClickButton,
  autoGoBackToHome,
}: ErrorSuccesProps) => {
  const router = useRouter()
  const { startCountdown, timeRemaining } = useCountdown()

  const { formatMessage } = useIntl()

  const goHome = () => router.push('/')

  useEffect(() => {
    autoGoBackToHome && startCountdown(5000)
  }, [autoGoBackToHome])

  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <div className='flex flex-col items-center justify-center text-center'>
        <div className='h-full max-h-[150px] w-full max-w-[150px] '>
          {type === 'error' ? (
            <IoMdClose color={colors.danger} />
          ) : (
            <FaRegCheckCircle color={colors.success} />
          )}
        </div>
        <h1 className='mx-2 mt-4 text-3xl font-bold md:text-4xl'>{title}</h1>
        <h4 className='mx-2 my-2 text-xl md:my-4 md:text-2xl'>{subTitle}</h4>
        <div className='mt-2 w-1/2 md:mt-4'>
          {autoGoBackToHome ? (
            <h4 className='mx-2 my-2 text-xl md:my-4 md:text-2xl'>
              {`Será redirigido a la home en ${timeRemaining / 1000}`}
            </h4>
          ) : (
            <Button onClick={onClickButton || goHome}>
              {buttonLabel || formatMessage({ id: 'GO_HOME' })}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
