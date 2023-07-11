import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

import useAppActions from '@hooks/useAppActions';

interface Props {
  className?: string;
}

const BurgerButton = ({ className = '' }: Props) => {
  const { openDrawerModal } = useAppActions();

  return (
    <div
      className={`${className} relative z-20 m-3 flex cursor-pointer items-center justify-center xl:hidden`}
      onClick={() => openDrawerModal()}
    >
      <Bars3Icon className="w-8 h-8 text-white md:h-10 md:w-10 lg:h-14 lg:w-14" />
    </div>
  );
};

export default BurgerButton;
