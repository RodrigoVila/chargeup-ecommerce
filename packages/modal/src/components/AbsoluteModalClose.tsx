import { IoMdClose } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'
import { ModalClose } from './ModalClose'

type AbsoluteModalCloseProps = {
  className?: string
  iconColor?: string
  iconSize?: number
}

export const AbsoluteModalClose = ({
  className,
  iconColor = 'black',
  iconSize = 36,
}: AbsoluteModalCloseProps) => {
  return (
    <ModalClose className={twMerge('z-[2] ml-auto text-black', className)}>
      <IoMdClose size={iconSize} color={iconColor} />
    </ModalClose>
  )
}
