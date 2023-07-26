import { useIntl } from 'react-intl'
import { FooterDevTeam, FooterFormalLinks, FooterSocialLinks } from './components'

export const FooterSection = () => {
  const { formatMessage } = useIntl()
  return (
    <footer
      id='contact'
      className='flex w-full flex-col items-center justify-center bg-black pt-3 text-white'
    >
      <h3 className='mb-2 text-2xl md:text-3xl'>{formatMessage({ id: 'FOOTER_CONTACT' })}</h3>
      <FooterSocialLinks />
      <FooterFormalLinks />
      <FooterDevTeam />
    </footer>
  )
}
