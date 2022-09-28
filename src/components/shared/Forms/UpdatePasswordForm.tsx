import { useState, ChangeEvent, FC } from 'react';

import { colors, lang } from '@constants';
import Input from '@shared/Input';
import Button from '@main/Buttons/Button';

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  closeEdit: () => void;
};

const UpdatePasswordForm: FC<Props> = ({ onChange, closeEdit }) => {
  return (
    <div className="rounded-xl border-2 border-black p-6">
      <Input label={lang.es.OLD_PASSWORD} type="password" name="oldPassword" onChange={onChange} />
      <Input label={lang.es.NEW_PASSWORD} type="password" name="password" onChange={onChange} />
      <Input
        label={lang.es.REPEAT_PASSWORD}
        type="password"
        name="repeatPassword"
        onChange={onChange}
      />
      <Button title={lang.es.CHANGE_PASSWORD} color={colors.purple} onClick={() => {}} />
      <Button title={lang.es.GO_BACK} color={colors.purple} onClick={closeEdit} />
    </div>
  );
};

export default UpdatePasswordForm;
