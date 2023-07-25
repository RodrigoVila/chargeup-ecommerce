import { useIntl } from 'react-intl';
import { FooterDevTeam, FooterFormalLinks, FooterSocialLinks } from './components';

export const FooterSection = () => {
  const { formatMessage } = useIntl();
  return (
    <footer
      id="contact"
      className="flex flex-col items-center justify-center w-full pt-3 text-white bg-black"
    >
      <h3 className="mb-2 text-2xl md:text-3xl">
        {formatMessage({ id: 'FOOTER_CONTACT' })}
      </h3>
      <FooterSocialLinks />
      <FooterFormalLinks />
      <FooterDevTeam />
    </footer>
  );
};
