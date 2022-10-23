import React from 'react';
import { HiMenu } from 'react-icons/hi';

import useAppActions from '@hooks/useAppActions';
import Button from './Button';
import { colors, lang } from '@constants';

const LoginButton = () => {
  const { openLoginModal } = useAppActions();

  return (
    <Button title={lang.en.LOGIN} onClick={openLoginModal} color={colors.white} type="outlined"/>
  );
};

export default LoginButton;
