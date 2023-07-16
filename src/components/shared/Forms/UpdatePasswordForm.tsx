import { ChangeEvent, FC, useState } from 'react';

import { lang } from '@constants/lang';
import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';
import useEncryption from '@hooks/useEncryption';
import Button from '@shared/Buttons/CustomButton';
import Input from '@shared/Input';

const INITIAL_STATE = { oldPassword: '', password: '', repeatPassword: '' };

const UpdatePasswordForm: FC = () => {
  const [userDetails, setUserDetails] = useState(INITIAL_STATE);

  const { encryptPassword } = useEncryption();

  const { displayErrorMessage, editUserPassword } = useAppActions();
  const {
    userLogin: { email },
    isAuthLoading,
  } = useAppSelector();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((currDetails) => ({ ...currDetails, [name]: value }));
  };

  const handleSubmit = async () => {
    const { password, repeatPassword } = userDetails;
    if (password !== repeatPassword) {
      displayErrorMessage(lang.es.PASSWORDS_DONT_MATCH);
      return;
    }

    const encryptedPassword = await encryptPassword(password);

    editUserPassword(email, encryptedPassword);
  };
  return (
    <div className="p-6 pt-4 bg-white rounded-xl">
      <Input label={lang.es.NEW_PASSWORD} type="password" name="password" onChange={handleChange} />
      <Input
        label={lang.es.REPEAT_PASSWORD}
        type="password"
        name="repeatPassword"
        onChange={handleChange}
      />
      <Button onClick={handleSubmit} loading={isAuthLoading}>
        {lang.es.CHANGE_PASSWORD}
      </Button>
    </div>
  );
};

export default UpdatePasswordForm;
