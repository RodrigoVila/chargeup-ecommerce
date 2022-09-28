import { FC } from 'react';
import { BiUser } from 'react-icons/bi';

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

type Props = {
  color?: 'black' | 'white';
};

const UserButton: FC<Props> = ({ color = 'white' }) => {
  const { user } = useAppSelector();

  const { openUserModal, openLoginModal } = useAppActions();

  const onClick = () => (user ? openUserModal() : openLoginModal());

  return (
    <div className="cursor-pointer" onClick={onClick}>
      <BiUser
        style={{ margin: 0, padding: 0 }}
        className={`w-12 ${user ? 'text-xl' : 'text-4xl'} text-${color} leading-0`}
      />
      {user?.name && (
        <p className={`text-${color} m'-0 p-0 text-center text-sm`}>{`${user.name}`}</p>
      )}
    </div>
  );
};

export default UserButton;
