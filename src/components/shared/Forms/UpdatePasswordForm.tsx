import { ChangeEvent, FC, useState } from 'react';

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';
import useEncryption from '@hooks/useEncryption';
import Button from '@shared/Buttons/CustomButton';
import Input from '@shared/Input';
import { useTranslation } from 'react-i18next';

const INITIAL_STATE = { oldPassword: '', password: '', repeatPassword: '' };

const UpdatePasswordForm: FC = () => {
  const [userDetails, setUserDetails] = useState(INITIAL_STATE);

  const { encryptPassword } = useEncryption();

  const { displayErrorMessage, editUserPassword } = useAppActions();
  const {
    userLogin: { email },
    isAuthLoading,
  } = useAppSelector();

  const { t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((currDetails) => ({ ...currDetails, [name]: value }));
  };

  const handleSubmit = async () => {
    const { password, repeatPassword } = userDetails;
    if (password !== repeatPassword) {
      displayErrorMessage(t('PASSWORDS_DONT_MATCH'));
      return;
    }

    const encryptedPassword = await encryptPassword(password);

    editUserPassword(email, encryptedPassword);
  };
  return (
    <div className="p-6 pt-4 bg-white rounded-xl">
      <Input label={t('NEW_PASSWORD')} type="password" name="password" onChange={handleChange} />
      <Input
        label={t('REPEAT_PASSWORD')}
        type="password"
        name="repeatPassword"
        onChange={handleChange}
      />
      <Button onClick={handleSubmit} loading={isAuthLoading}>
        {t('CHANGE_PASSWORD')}
      </Button>
    </div>
  );
};

export default UpdatePasswordForm;
