import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { Spinner, SpinnerPropsType } from './Spinner'

type SpinnerPageProps = SpinnerPropsType & {
  className?: string
}

export const SpinnerPage = ({ className, ...props }: SpinnerPageProps) => {
  return (
    <section
      className={twMerge(
        'absolute inset-0 flex h-screen w-full items-center justify-center',
        className,
      )}
    >
      <Spinner {...props} />
    </section>
  )
}
