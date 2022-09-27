import { FC } from 'react';
import { BiUser } from 'react-icons/bi';

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

type Props = {
  color?: 'black' | 'white';
};

const UserButton: FC<Props> = ({ color = 'white' }) => {
  const { isLoginModalOpen, user } = useAppSelector();

  const { closeLoginModal, openLoginModal } = useAppActions();

  const onClick = () => (isLoginModalOpen ? closeLoginModal() : openLoginModal());

  return (
    <div className="mx-2 flex flex-col justify-center items-center" onClick={onClick}>
      <BiUser className={`w-12 text-4xl text-${color}`} />
      {user?.name && <p className={`text-${color} text-center text-sm`}>{`${user.name}`}</p>}
    </div>
  );
};

export default UserButton;
