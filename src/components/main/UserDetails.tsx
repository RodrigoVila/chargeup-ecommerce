import { useState, useEffect, ChangeEvent } from 'react';
import Link from '@main/Link';

import useAppActions from '@hooks/useAppActions';
import Input from '@shared/Input';
import { lang } from '@constants/lang';
import { colors } from '@constants/colors';
import useAppSelector from '@hooks/useAppSelector';
import UpdatePasswordForm from '@shared/Forms/UpdatePasswordForm';
import UserDataForm from '@shared/Forms/UserDataForm';
import Button from './Buttons/Button';
import CloseModalButton from './Buttons/CloseModalButton';

type EditingType = 'password' | 'userData' | null;

const UserDetails = () => {
  const [editing, setEditing] = useState<EditingType>(null);
  const [editingPassword, setEditingPasword] = useState(false);

  const { userLogout, closeUserModal, getUserDetails } = useAppActions();

  const setEdit = (type: EditingType) => setEditing(type);
  const closeEdit = () => setEditing(null);

  const onClickLogout = () => {
    userLogout();
    closeUserModal();
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div
      className={`${
        !editing && 'rounded-md bg-white p-4 pt-12'
      } relative my-4 h-full w-full overflow-scroll`}
    >
      {/* {editing === 'userData' && <UserDataForm />} */}
      {editing === 'password' && <UpdatePasswordForm oldPassRequired />}

      {!editing && (
        <div className="flex flex-col items-center justify-center w-full mx-auto ">
          <CloseModalButton color="black" isAbsolute position="right" onClose={closeUserModal} />
          {/* <Button
            title={lang.es.CHANGE_USER_DATA}
            color={colors.purple}
            onClick={() => setEdit('userData')}
            /> */}
          <Button
            title={lang.es.CHANGE_PASSWORD}
            color={colors.purple}
            onClick={() => setEdit('password')}
          />
          <div className="mt-2">
            <Link text="Logout" onClick={onClickLogout} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
