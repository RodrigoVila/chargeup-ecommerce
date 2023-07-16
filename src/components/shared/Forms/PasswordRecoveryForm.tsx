import { ChangeEvent, FC } from 'react';

import Input from '@shared/Input';
import { useTranslation } from 'react-i18next';

type Props = {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const PasswordRecoveryForm: FC<Props> = ({ onInputChange }) => {
  const { t } = useTranslation();
  return (
    <form className="w-full rounded">
      <Input label={t('EMAIL')} name="email" type="text" onChange={onInputChange} />
    </form>
  );
};

export default PasswordRecoveryForm;
