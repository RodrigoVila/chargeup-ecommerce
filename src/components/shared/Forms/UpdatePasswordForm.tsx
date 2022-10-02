import { useState, ChangeEvent, FC } from 'react';

import { colors, lang } from '@constants';
import Input from '@shared/Input';
import Button from '@main/Buttons/Button';
import Link from '@main/Link';
import useAppActions from '@hooks/useAppActions';

const UpdatePasswordForm: FC = () => {
  const [userDetails, setUserDetails] = useState({});

  const { closeUserModal } = useAppActions();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((currDetails) => ({ ...currDetails, [name]: value }));
  };
  return (
    <div className="rounded-xl border-2 border-black p-6">
      <Input
        label={lang.es.OLD_PASSWORD}
        type="password"
        name="oldPassword"
        onChange={handleChange}
      />
      <Input label={lang.es.NEW_PASSWORD} type="password" name="password" onChange={handleChange} />
      <Input
        label={lang.es.REPEAT_PASSWORD}
        type="password"
        name="repeatPassword"
        onChange={handleChange}
      />
      <Button title={lang.es.CHANGE_PASSWORD} color={colors.purple} onClick={() => {}} />
      <Link text={lang.es.GO_BACK} onClick={closeUserModal} />
    </div>
  );
};

export default UpdatePasswordForm;
