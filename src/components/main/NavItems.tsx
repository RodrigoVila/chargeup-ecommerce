import NavItem from '@main/NavItem';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

interface Props {
  direction?: 'row' | 'column';
  onClose?: () => void;
  className?: string;
}

const NavItems = ({ direction, onClose, className = '' }: Props) => {
  const { t } = useTranslation();

  const links = [
    { label: t('ABOUT_US'), href: 'about' },
    { label: t('PRODUCTS'), href: 'products' },
    { label: t('CAKES'), href: 'cakes' },
    { label: t('KETO'), href: 'keto' },
    { label: t('WHY_US'), href: 'whyus' },
    { label: t('CONTACT'), href: 'contact' },
  ];
  const directionStyles =
    direction === 'row'
      ? 'flex-row pl-2 text-white hidden xl:flex'
      : 'flex-col text-purple-600 flex';
  return (
    <ul
      className={twMerge(
        'z-10 w-full items-center justify-center text-center font-dinBold',
        directionStyles,
        className
      )}
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
