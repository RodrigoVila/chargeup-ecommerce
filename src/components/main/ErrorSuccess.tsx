import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { XCircleIcon } from '@heroicons/react/24/outline';

import { lang } from '@constants/lang';
import { colors } from '@constants/colors';
import Button from '@shared/Buttons/CustomButton';
import useCountdown from '@hooks/useCountdown';

type Props = {
  type: 'error' | 'success';
  title: string;
  subTitle: string;
  buttonLabel?: string;
  onClickButton?: () => void;
  autoGoBackToHome?: boolean;
};

const ErrorSucces = ({
  title,
  subTitle,
  type,
  buttonLabel,
  onClickButton,
  autoGoBackToHome,
}: Props) => {
  const router = useRouter();
  const { startCountdown, timeRemaining } = useCountdown();

  const goHome = () => router.push('/');

  useEffect(() => {
    autoGoBackToHome && startCountdown(5000);
  }, [autoGoBackToHome]);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="h-full max-h-[150px] w-full max-w-[150px] ">
          {type === 'error' ? (
            <XCircleIcon color={colors.danger} />
          ) : (
            <CheckCircleIcon color={colors.success} />
          )}
        </div>
        <h1 className="mx-2 mt-4 text-3xl font-bold md:text-4xl">{title}</h1>
        <h4 className="mx-2 my-2 text-xl md:my-4 md:text-2xl">{subTitle}</h4>
        <div className="w-1/2 mt-2 md:mt-4">
          {autoGoBackToHome ? (
            <h4 className="mx-2 my-2 text-xl md:my-4 md:text-2xl">
              {`Será redirigido a la home en ${timeRemaining / 1000}`}
            </h4>
          ) : (
            <Button
              title={buttonLabel || lang.es.GO_HOME}
              onClick={onClickButton || goHome}
              color={colors.fuchsia}
              type="filled"
              hoverColor={colors.purple}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorSucces;
