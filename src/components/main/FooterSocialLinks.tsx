import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';

import ActiveLink from '@shared/ActiveLink';

const ICON_SIZE = 30;

const FooterSocialLinks = () => {
  return (
    <div className="flex flex-row pb-4">
      <ActiveLink href="https://www.instagram.com/chargeupbcn/" data-tip="Alto en proteina">
        <FiInstagram color="white" className="cursor-pointer" size={ICON_SIZE} />
      </ActiveLink>
      <ActiveLink href="mailto:chargeupbcn@gmail.com">
        <AiOutlineMail color="white" className="mx-2 cursor-pointer" size={ICON_SIZE} />
      </ActiveLink>
      <ActiveLink href="https://wa.me/34667227923">
        <AiOutlineWhatsApp color="white" className="cursor-pointer" size={ICON_SIZE} />
      </ActiveLink>
    </div>
  );
};

export default FooterSocialLinks;
