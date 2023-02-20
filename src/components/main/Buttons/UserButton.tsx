import { FC } from 'react';
import ReactTooltip from 'react-tooltip';
import { UserIcon } from '@heroicons/react/24/outline';

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';
import { lang } from '@constants/lang';

type Props = {
  color?: 'black' | 'white';
};

const UserButton: FC<Props> = ({ color: propColor = 'white' }) => {
  const { userLogin } = useAppSelector();
  const { openUserModal, openLoginModal } = useAppActions();

  const color = propColor === 'white' ? `text-white` : `text-black`;

  return (
    <div className={`${color} mt-1 flex cursor-pointer flex-col items-center justify-center`}>
      <button
        onClick={userLogin?.name ? openUserModal : openLoginModal}
        className="w-6 h-6 md:h-8 md:w-8 2xl:h-0 2xl:w-10"
      >
        <UserIcon className={`${color} h-full w-full`} />
      </button>
      <p className={`${color} text-s md:text-sm leading-none`}>{userLogin?.name ? userLogin.name : lang.en.LOGIN}</p>
    </div>
  );
};

export default UserButton;
