import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline'

import useAppActions from '@hooks/useAppActions';

const BurgerButton = () => {
  const { openDrawerModal } = useAppActions();

  return (
    <div
      className="relative z-20 flex items-center justify-center m-3 cursor-pointer"
      onClick={() => openDrawerModal()}
    >
      <Bars3Icon className="w-8 h-8 text-white lg:w-14 lg:h-14 md:h-10 md:w-10" />
    </div>
  );
};

export default BurgerButton;
