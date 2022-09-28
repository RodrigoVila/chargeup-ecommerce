import { FC, ChangeEvent } from 'react';

import Input from '@shared/Input';
import { lang } from '@constants';

type Props = {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const LoginForm: FC<Props> = ({ onInputChange }) => {
  return (
    <form className="rounded">
      <Input label={lang.es.EMAIL} name="email" type="text" onChange={onInputChange} />
      <Input label={lang.es.PASSWORD} name="password" type="password" onChange={onInputChange} />
    </form>
  );
};

export default LoginForm;
