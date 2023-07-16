import { ChangeEvent, FC } from 'react';

import Input from '@shared/Input';
import { useTranslation } from 'react-i18next';

type Props = {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const RegisterForm: FC<Props> = ({ onInputChange }) => {
  const { t } = useTranslation();
  return (
    <form className="w-full rounded">
      <Input label={t('NAME')} name="name" type="text" onChange={onInputChange} />
      <Input label={t('LASTNAME')} name="lastName" type="text" onChange={onInputChange} />
      <Input label={t('EMAIL')} name="email" type="text" onChange={onInputChange} />
      <Input label={t('PASSWORD')} name="password" type="password" onChange={onInputChange} />
      <Input
        label={t('REPEAT_PASSWORD')}
        name="repeatPassword"
        type="password"
        onChange={onInputChange}
      />
    </form>
  );
};

export default RegisterForm;
