import React from 'react';
import { useRouter } from 'next/router';

import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { colors, lang } from '@constants';
import Button from '@main/Buttons/Button';
import styles from '@styles/emailvalidation.module.css';

const EmailValidationSuccess = () => {
  const router = useRouter();

  const goHome = () => router.push('/');

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="h-full max-h-[150px] w-full max-w-[150px] ">
          <CheckCircleIcon color={colors.danger} />
        </div>
        <h1 className="mx-2 mt-4 text-3xl font-bold md:text-4xl">{lang.es.EMAIL_CONFIRMED}</h1>
        <h4 className="mx-2 my-2 text-xl md:text-2xl md:my-4">{lang.es.EMAIL_CONFIRMED_SUB}</h4>
        <div className="w-1/2 mt-2 md:mt-4">
          <Button title={lang.es.GO_HOME} onClick={goHome} color={colors.fuchsia} type="filled" hoverColor={colors.purple}  />
        </div>
      </div>
    </div>
  );
};

export default EmailValidationSuccess;
