import { UserIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';

import { lang } from '@constants/lang';
import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';
import { twMerge } from 'tailwind-merge';

type Props = {
  color?: 'black' | 'white';
};

const UserButton: FC<Props> = ({ color: propColor = 'white' }) => {
  const { userLogin } = useAppSelector();
  const { openUserModal, openLoginModal } = useAppActions();

  const color = propColor === 'white' ? `text-white` : `text-black`;
  const openModal = userLogin?.name ? openUserModal : openLoginModal;

  return (
    <div className={twMerge('flex cursor-pointer flex-col items-center justify-center', color)}>
      <button onClick={openModal} className="w-6 h-6 md:h-8 md:w-8">
        <UserIcon className={`${color} h-full w-full`} />
      </button>
      <p
        onClick={openModal}
        className={twMerge('ext-s leading-none md:text-sm text-center', color)}
      >
        {userLogin?.name ? userLogin.name : lang.en.LOGIN}
      </p>
    </div>
  );
};

export default UserButton;
