import { RiCloseFill } from 'react-icons/ri'

interface Props {
  color: string
  position: string
  onClose: () => void
}

const CloseModalButton = ({ color, position, onClose }: Props) => {
  return (
    <button onClick={onClose} className={`absolute top-0 ${position}-0 m-2 `}>
      <RiCloseFill color={color} size={40} />
    </button>
  )
}

export default CloseModalButton
