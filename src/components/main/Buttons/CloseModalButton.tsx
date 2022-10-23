import { RiCloseFill } from 'react-icons/ri'

interface Props {
  color: string
  position?: string
  isAbsolute?: boolean
  onClose: () => void
}

const CloseModalButton = ({ color, position = 'right', isAbsolute = true, onClose }: Props) => {
  return (
    <button onClick={onClose} className={`${isAbsolute && `${position}-0 absolute top-0 p-2`}`}>
      <RiCloseFill color={color} size={40} />
    </button>
  )
}

export default CloseModalButton
