import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAppActions from '@hooks/useAppActions';
import Spinner from '@shared/Spinner';

const EmailValidation = () => {
  const {
    query: { id },
  } = useRouter();
  const {} = useAppActions();

  useEffect(() => {
    console.log('ID', id);
  }, [id]);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Spinner />
    </div>
  );
};

export default EmailValidation;
