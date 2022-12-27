import React from 'react';

import useAppActions from '@hooks/useAppActions';
import Button from './Button';
import { colors } from '@constants/colors';
import { lang } from '@constants/lang';

const LoginButton = () => {
  const { openLoginModal } = useAppActions();

  return (
    <Button title={lang.en.LOGIN} onClick={openLoginModal} color={colors.white} type="outlined" />
  );
};

export default LoginButton;
