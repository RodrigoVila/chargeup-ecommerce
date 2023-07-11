import React from 'react';

import useAppActions from '@hooks/useAppActions';
import Button from './CustomButton';
import { lang } from '@constants/lang';

const LoginButton = () => {
  const { openLoginModal } = useAppActions();

  return (
    <Button onClick={openLoginModal} type="outlined">
      {lang.en.LOGIN}
    </Button>
  );
};

export default LoginButton;
