import { FooterDevTeam, FooterFormalLinks, FooterSocialLinks } from './components'

export const FooterSection = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center justify-center w-full pt-3 text-white bg-black"
    >
      <h3 className="mb-2 text-2xl md:text-3xl">Contactanos</h3>
      <FooterSocialLinks />
      <FooterFormalLinks />
      <FooterDevTeam />
    </footer>
  )
}
