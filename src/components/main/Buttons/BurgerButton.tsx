import React from 'react';
import { HiMenu } from 'react-icons/hi';

import useAppActions from '@hooks/useAppActions';

const BurgerButton = () => {
  const { openDrawerModal } = useAppActions();

  return (
    <div
      className="relative z-20 m-2 mr-4 h-10 w-10 cursor-pointer md:m-4"
      onClick={() => openDrawerModal()}
    >
      <HiMenu color="white" size={30} />
    </div>
  );
};

export default BurgerButton;
