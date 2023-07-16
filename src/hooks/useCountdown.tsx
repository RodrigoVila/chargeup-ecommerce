import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useGobBackCountdown = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const router = useRouter();

  useEffect(() => {
    let interval;
    if (timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(timeRemaining - 1000);
      }, 1000);
    }
    if (timeRemaining === 1000) router.push('/');
    return () => clearInterval(interval);
  }, [timeRemaining]);

  const startCountdown = (newStartTime) => {
    setTimeRemaining(newStartTime);
  };

  return { timeRemaining, startCountdown };
};

export default useGobBackCountdown;
