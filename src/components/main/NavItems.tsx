import NavItem from '@main/NavItem';

interface Props {
  direction?: 'row' | 'column';
  onClose?: () => void;
  className?: string;
}

const links = [
  { label: 'QUIENES SOMOS', href: 'about' },
  { label: 'PRODUCTOS', href: 'products' },
  { label: 'CAKES', href: 'cakes' },
  { label: 'KETO', href: 'keto' },
  { label: 'POR QUE ELEGIRNOS', href: 'whyus' },
  { label: 'CONTACTO', href: 'contact' },
];

const NavItems = ({ direction, onClose, className = '' }: Props) => {
  const directionStyles =
    direction === 'row' ? 'flex-row pl-2 text-white hidden xl:flex' : 'flex-col text-purple-600 flex';
  return (
    <ul
      className={`${directionStyles} ${className} z-10 w-full items-center justify-center text-center font-dinBold`}
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
    </ul>
  );
};

export default NavItems;
