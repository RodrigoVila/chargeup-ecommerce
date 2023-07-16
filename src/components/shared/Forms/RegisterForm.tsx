import { ChangeEvent, FC } from 'react';

import { lang } from '@constants/lang';
import Input from '@shared/Input';

type Props = {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const RegisterForm: FC<Props> = ({ onInputChange }) => {
  return (
    <form className="w-full rounded">
      <Input label={lang.es.NAME} name="name" type="text" onChange={onInputChange} />
      <Input label={lang.es.LASTNAME} name="lastName" type="text" onChange={onInputChange} />
      <Input label={lang.es.EMAIL} name="email" type="text" onChange={onInputChange} />
      <Input label={lang.es.PASSWORD} name="password" type="password" onChange={onInputChange} />
      <Input
        label={lang.es.REPEAT_PASSWORD}
        name="repeatPassword"
        type="password"
        onChange={onInputChange}
      />
    </form>
  );
};

export default RegisterForm;
