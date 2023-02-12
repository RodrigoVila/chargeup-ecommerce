import { useState, ChangeEvent, FC } from 'react';

import { lang } from '@constants/lang';
import { colors } from '@constants/colors';
import Input from '@shared/Input';
import Button from '@main/Buttons/Button';
import Link from '@main/Link';
import useAppActions from '@hooks/useAppActions';
import CloseModalButton from '@main/Buttons/CloseModalButton';
import useEncryption from '@hooks/useEncryption';

const INITIAL_STATE = { oldPassword: '', password: '', repeatPassword: '' };

interface Props {
  oldPassRequired: boolean;
}

const UpdatePasswordForm: FC = ({ oldPassRequired = false }: Props) => {
  const [userDetails, setUserDetails] = useState(INITIAL_STATE);

  const { closeUserModal, displayErrorMessage, editUserPassword,editUserPasswordWithoutLogin } = useAppActions();
  const { encryptPassword } = useEncryption();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((currDetails) => ({ ...currDetails, [name]: value }));
  };

  const handleSubmit = async () => {
    const { oldPassword, password, repeatPassword } = userDetails;
    if (password !== repeatPassword) {
      displayErrorMessage(lang.es.PASSWORDS_DONT_MATCH);
      return;
    }

    const encryptedPassword = await encryptPassword(password);

    oldPassRequired
      ? editUserPassword(oldPassword, encryptedPassword)
      : editUserPasswordWithoutLogin(encryptedPassword);
  };
  return (
    <div className="p-6 pt-4 bg-white rounded-xl">
      <div className="relative flex items-center justify-end w-full">
        <CloseModalButton color="black" onClose={closeUserModal} />
      </div>
      {oldPassRequired && (
        <Input
          label={lang.es.OLD_PASSWORD}
          type="password"
          name="oldPassword"
          onChange={handleChange}
        />
      )}

      <Input label={lang.es.NEW_PASSWORD} type="password" name="password" onChange={handleChange} />
      <Input
        label={lang.es.REPEAT_PASSWORD}
        type="password"
        name="repeatPassword"
        onChange={handleChange}
      />
      <Button title={lang.es.CHANGE_PASSWORD} color={colors.purple} onClick={handleSubmit} />
    </div>
  );
};

export default UpdatePasswordForm;
