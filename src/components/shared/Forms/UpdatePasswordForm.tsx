import { useState, ChangeEvent, FC } from 'react';

import { lang } from '@constants/lang';
import { colors } from '@constants/colors';
import Input from '@shared/Input';
import Button from '@shared/Buttons/CustomButton';
import Link from '@main/Link';
import useAppActions from '@hooks/useAppActions';
import CloseModalButton from '@shared/Buttons/CloseModalButton';
import useEncryption from '@hooks/useEncryption';
import { useRouter } from 'next/router';
import useAppSelector from '@hooks/useAppSelector';

const INITIAL_STATE = { oldPassword: '', password: '', repeatPassword: '' };

interface Props {
  oldPassRequired?: boolean;
  withoutCloseButton?: boolean;
}

const UpdatePasswordForm: FC = ({ oldPassRequired = false, withoutCloseButton = false }: Props) => {
  const [userDetails, setUserDetails] = useState(INITIAL_STATE);

  const router = useRouter();
  const { email: queryEmail } = router.query;

  const { encryptPassword } = useEncryption();

  const { closeUserModal, displayErrorMessage, editUserPassword } = useAppActions();
  const {
    userLogin: { email },
    isAuthLoading,
  } = useAppSelector();


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
      ? editUserPassword(email, encryptedPassword, oldPassword)
      : editUserPassword(queryEmail.toString(), encryptedPassword);
  };
  return (
    <div className="p-6 pt-4 bg-white rounded-xl">
      {!withoutCloseButton && (
        <div className="relative flex items-center justify-end w-full">
          <CloseModalButton color="black" onClose={closeUserModal} />
        </div>
      )}

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
      <Button title={lang.es.CHANGE_PASSWORD} color={colors.purple} onClick={handleSubmit} disabled={isAuthLoading} />
    </div>
  );
};

export default UpdatePasswordForm;
