import { FiInstagram, FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";

const ICON_SIZE = 40;

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-3 text-white bg-gray-800">
      <div className="flex flex-row pb-4">
        <FiInstagram color="white" size={ICON_SIZE} />
        <FiFacebook className="mx-2" color="white" size={ICON_SIZE} />
        <AiOutlineYoutube color="white" size={ICON_SIZE} />
      </div>
      <div className="text-sm text-gray-300">
        Privacy policy | Terms & Conditions | Feedback
      </div>
      <div className="pt-4 pb-2 text-xs text-gray-400 ">Designed by RV</div>
    </div>
  );
};

export default Footer;
