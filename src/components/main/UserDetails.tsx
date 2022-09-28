import { useState, useEffect, ChangeEvent } from 'react';
import Link from '@main/Link';

import useAppActions from '@hooks/useAppActions';
import Input from '@shared/Input';
import { colors, lang } from '@constants';
import useAppSelector from '@hooks/useAppSelector';
import UpdatePasswordForm from '@shared/Forms/UpdatePasswordForm';
import UserDataForm from '@shared/Forms/UserDataForm';
import Button from './Buttons/Button';

const UserDetails = () => {
  const { user } = useAppSelector();

  const [userDetails, setUserDetails] = useState(user);
  const [editing, setEditing] = useState(null);
  const [editingPassword, setEditingPasword] = useState(false);

  const { userLogout, closeUserModal, getUserDetails } = useAppActions();

  const setEdit = (type: 'password' | 'userData' | null) => setEditing(type);
  const closeEdit = () => setEditing(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((currDetails) => ({ ...currDetails, [name]: value }));
  };

  const onClickLogout = () => {
    userLogout();
    closeUserModal();
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  // useEffect(() => {
  //   user && setUserDetails(user);
  // }, [user]);
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center bg-white px-4">
      <div className="my-2">
        {editing === 'userData' && (
          <UserDataForm userDetails={userDetails} onChange={handleChange} closeEdit={closeEdit} />
        )}
        {editing === 'password' && (
          <UpdatePasswordForm onChange={handleChange} closeEdit={closeEdit} />
        )}
        {!editing && (
          <>
            <div className="mb-2">
              <Button
                title={lang.es.CHANGE_USER_DATA}
                color={colors.purple}
                onClick={() => setEdit('userData')}
              />
            </div>
            <Button
              title={lang.es.CHANGE_PASSWORD}
              color={colors.purple}
              onClick={() => setEdit('password')}
            />
            <Link text="Logout" onClick={onClickLogout} />
          </>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
