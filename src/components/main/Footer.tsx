import { FiInstagram, FiFacebook } from 'react-icons/fi'
import { AiOutlineYoutube, AiFillHeart } from 'react-icons/ai'

const ICON_SIZE = 40

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-gray-800 pt-3 text-white">
      <div className="flex flex-row pb-4">
        <FiInstagram color="white" size={ICON_SIZE} />
        <FiFacebook className="mx-2" color="white" size={ICON_SIZE} />
        <AiOutlineYoutube color="white" size={ICON_SIZE} />
      </div>
      <div className="text-sm text-gray-300 md:text-lg">
        Privacy policy | Terms & Conditions | Feedback
      </div>
      <div className="pb-2 text-xs text-gray-300 md:text-lg flex items-center justify-center text-center">
        Made with <AiFillHeart className="mx-1" color="red" size={18} /> by Veke (Design) & Rodri (Development).
      </div>
    </div>
  )
}

export default Footer
