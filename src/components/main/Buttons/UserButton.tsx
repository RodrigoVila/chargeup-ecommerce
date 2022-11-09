import { FC } from 'react';
import ReactTooltip from 'react-tooltip';
import { UserIcon } from '@heroicons/react/24/outline';

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';
import { lang } from '@constants';

type Props = {
  color?: 'black' | 'white';
};

const UserButton: FC<Props> = ({ color: propColor = 'white' }) => {
  const { userLogin } = useAppSelector();
  const { openUserModal, openLoginModal } = useAppActions();

  const color =
    propColor === 'white' || propColor === 'black' ? `text-${propColor}` : `text-${propColor}-500`;

  return (
    <div className={`${color} w-6 h-6 mt-5 ml-4 cursor-pointer md:h-6 md:w-6 xl:h-8 xl:w-8 flex flex-col items-center justify-center`}>
      <button onClick={userLogin?.name ? openUserModal : openLoginModal}>
        <UserIcon className={`${color} h-full w-full`} />
      </button>
      <p className={`${color} text-xs`}>{userLogin?.name ? userLogin.name : lang.en.LOGIN}</p>
    </div>
  );
};

export default UserButton;
