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
        direction === 'row' ? 'flex-row pl-2 text-white' : 'flex-col pb-2'
      } flex w-full items-center justify-center z-20`}
    >
      {links.map((link, index) => (
        <NavItem
          key={index}
          label={link.label}
          href={link.href}
          direction={direction}
          isLast={index === links.length - 1}
          onClick={direction === 'column' ? onClose : null}
        />
      ))}
    </div> 
  )
}

export default NavItems
