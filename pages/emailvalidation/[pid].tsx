import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAppActions from '@hooks/useAppActions';
import Spinner from '@shared/Spinner';
import useAppSelector from '@hooks/useAppSelector';

const EmailValidation = () => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;
  const { dBEmailValidation } = useAppActions();
  const { isEmailValidated } = useAppSelector();

  useEffect(() => {
    pid && dBEmailValidation(pid.toString());
  }, [pid]);

  useEffect(() => {
    if (isEmailValidated === null) return;

    isEmailValidated
      ? router.push('/emailvalidation/success')
      : router.push('/emailvalidation/error');
  }, [isEmailValidated]);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Spinner />
    </div>
  );
};

export default EmailValidation;
