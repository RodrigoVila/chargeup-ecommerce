import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAppActions from '@hooks/useAppActions';
import Spinner from '@shared/Spinner';
import useAppSelector from '@hooks/useAppSelector';
import ErrorSucces from '@main/ErrorSuccess';
import { lang } from '@constants/lang';

const EmailValidation = () => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;
  const { dBEmailValidation } = useAppActions();
  const { isEmailValidated } = useAppSelector();

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
        <ErrorSucces
          type="success"
          title={lang.es.EMAIL_CONFIRMED}
          subTitle={lang.es.EMAIL_CONFIRMED_SUB}
        />
      ) : (
        <ErrorSucces
          type="error"
          title={lang.es.EMAIL_NOT_CONFIRMED}
          subTitle={lang.es.EMAIL_NOT_CONFIRMED_SUB}
        />
      )}
    </div>
  );
};

export default EmailValidation;
