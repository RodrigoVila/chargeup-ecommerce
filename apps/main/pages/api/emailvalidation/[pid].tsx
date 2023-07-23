import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { Spinner } from '@packages/spinner';

import { useAppActions, useAppSelector } from '~hooks';
import { ErrorSuccess } from './components/ErrorSuccess';

const EmailValidation = () => {
  const router = useRouter();
  const { dBEmailValidation } = useAppActions();
  const { isEmailValidated } = useAppSelector();
  const { formatMessage } = useIntl();

  const pid = router.query.id;

  useEffect(() => {
    pid && dBEmailValidation(pid.toString().slice(4));
  }, [pid]);

  if (isEmailValidated === null) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-screen">
      {isEmailValidated ? (
        <ErrorSuccess
          type="success"
          title={formatMessage({ id: 'EMAIL_CONFIRMED' })}
          subTitle={formatMessage({ id: 'EMAIL_CONFIRMED_SUB' })}
          autoGoBackToHome
        />
      ) : (
        <ErrorSuccess
          type="error"
          title={formatMessage({ id: 'EMAIL_NOT_CONFIRMED' })}
          subTitle={formatMessage({ id: 'EMAIL_NOT_CONFIRMED_SUB' })}
          autoGoBackToHome
        />
      )}
    </div>
  );
};

export default EmailValidation;
