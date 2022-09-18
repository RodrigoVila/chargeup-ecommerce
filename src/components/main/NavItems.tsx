import { colors } from '@constants'
import NavItem from '@main/NavItem'

interface Props {
  direction?: 'row' | 'column'
  onClose?: () => void
}

const links = [
  { label: 'QUIENES SOMOS', href: 'about' },
  { label: 'PRODUCTOS', href: 'products' },
  { label: 'CAKES', href: 'cakes' },
  { label: 'KETO', href: 'keto' },
  { label: 'POR QUE ELEGIRNOS', href: 'whyus' },
  { label: 'CONTACTO', href: 'contact' },
]

const NavItems = ({ direction, onClose }: Props) => {
  return (
    <div
      className={`${
        direction === 'row' ? 'flex-row pl-2 text-white' : 'flex-col text-purple-600'
      } z-20 flex w-full items-center justify-center text-center `}
    >
      {links.map((link, index) => (
        <NavItem
          key={index}
          label={link.label}
          href={link.href}
          direction={direction}
          onClick={onClose}
        />
      ))}
    </div>
  )
}

export default NavItems
