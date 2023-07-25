import { ChangeEvent, useState } from 'react';
import { useIntl } from 'react-intl';

import { Button } from '@packages/button';
import { Input } from '@packages/input';

import { useAppActions, useAppSelector } from '~hooks';
import { encryptPassword } from '~utils/encrypt';

const INITIAL_STATE = { oldPassword: '', password: '', repeatPassword: '' };

type UpdatePasswordFormProps = {
  requestFromMail?: string;
};

export const UpdatePasswordForm = ({ requestFromMail }: UpdatePasswordFormProps) => {
  const [userDetails, setUserDetails] = useState(INITIAL_STATE);

  const { displayErrorMessage, editUserPassword } = useAppActions();
  const { userLogin, isAuthLoading } = useAppSelector();

  const { formatMessage } = useIntl();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((currDetails) => ({ ...currDetails, [name]: value }));
  };

  const handleSubmit = async () => {
    const { password, repeatPassword } = userDetails;
    if (password !== repeatPassword) {
      displayErrorMessage(formatMessage({ id: 'PASSWORDS_DONT_MATCH' }));
      return;
    }

    const encryptedPassword = await encryptPassword(password);
    // If requesst has been made from email (not logged)
    if (requestFromMail) {
      editUserPassword(requestFromMail, encryptedPassword);
    } else {
      // Otherwise request is from user detail (logged user)
      userLogin?.email && editUserPassword(userLogin.email, encryptedPassword);
    }
  };
  return (
    <div className="p-6 pt-4 bg-white rounded-xl">
      <Input
        label={formatMessage({ id: 'NEW_PASSWORD' })}
        type="password"
        name="password"
        onChange={handleChange}
      />
      <Input
        label={formatMessage({ id: 'REPEAT_PASSWORD' })}
        type="password"
        name="repeatPassword"
        onChange={handleChange}
      />
      <Button onClick={handleSubmit} loading={isAuthLoading}>
        {formatMessage({ id: 'CHANGE_PASSWORD' })}
      </Button>
    </div>
  );
};
