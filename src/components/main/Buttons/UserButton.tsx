import { FC } from 'react';
import ReactTooltip from 'react-tooltip';
import { UserIcon } from '@heroicons/react/24/outline'

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

type Props = {
  color?: 'black' | 'white';
};

const UserButton: FC<Props> = ({ color = 'white' }) => {
  const { userLogin } = useAppSelector();
  const { openUserModal,openLoginModal } = useAppActions();

  return (
    <div className="relative z-40 w-8 h-8 text-white cursor-pointer lg:w-12 lg:h-12 md:h-10 md:w-10 xl:w-8 xl:h-8 md:mx-2" onClick={userLogin?.email? openUserModal : openLoginModal} >
      <UserIcon className="text-white lg:w-12 lg:h-12 md:h-10 md:w-10 xl:w-8 xl:h-8" />
    </div>
  );
};

export default UserButton;
