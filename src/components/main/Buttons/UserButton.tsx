import { FC } from 'react';
import { BiUser } from 'react-icons/bi';

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

type Props = {
  color?: 'black' | 'white';
};

const UserButton: FC<Props> = ({ color = 'white' }) => {
  const { userLogin } = useAppSelector();
  const { openUserModal } = useAppActions();

  return (
    <div className="cursor-pointer" onClick={openUserModal}>
      <BiUser
        style={{ margin: 0, padding: 0 }}
        className={`w-12 text-2xl text-${color} leading-0 m-0 p-0`}
      />
      {userLogin && (
        <p className={`text-${color} m-0 p-0 text-center text-sm`}>{`${userLogin.name}`}</p>
      )}
    </div>
  );
};

export default UserButton;
