import { useState, useEffect } from 'react';

const useCountdown = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    let interval;
    if (timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(timeRemaining - 1000);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timeRemaining]);

  const startCountdown = (newStartTime) => {
    setTimeRemaining(newStartTime);
  };

  return { timeRemaining, startCountdown };
};

export default useCountdown;
