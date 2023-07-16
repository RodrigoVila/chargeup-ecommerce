import { useState, useEffect, ChangeEvent } from 'react';
import useAppActions from '@hooks/useAppActions';
import { lang } from '@constants/lang';
import UpdatePasswordForm from '@shared/Forms/UpdatePasswordForm';
import UserDataForm from '@shared/Forms/UserDataForm';
import Button from '../shared/Buttons/CustomButton';
import CloseModalButton from '../shared/Buttons/CloseModalButton';
import { googleLogout } from '@react-oauth/google';

type EditingType = 'password' | 'userData' | null;

const UserDetails = () => {
  const [editing, setEditing] = useState<EditingType>(null);

  const { userLogout, closeUserModal, getUserDetails } = useAppActions();

  const setEdit = (type: EditingType) => setEditing(type);

  const onClickLogout = () => {
    userLogout();
    googleLogout();
    closeUserModal();
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div
      className={`${
        !editing && 'rounded-md bg-white p-2'
      } relative my-4 h-full w-full overflow-scroll`}
    >
      {editing === 'userData' && <UserDataForm />}
      {editing === 'password' && <UpdatePasswordForm />}

      {!editing && (
        <div className="flex flex-col items-center justify-center w-full gap-2 mx-auto">
          <Button onClick={() => setEdit('userData')}>{lang.es.CHANGE_USER_DATA}</Button>
          <Button onClick={() => setEdit('password')}>{lang.es.CHANGE_PASSWORD}</Button>
          <Button onClick={onClickLogout}>{lang.es.LOGOUT}</Button>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
