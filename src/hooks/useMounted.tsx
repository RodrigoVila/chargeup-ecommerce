import { useEffect, useState } from 'react';

// Hook to avoid SSR hydration problems when some componentes are loaded (eg: ReactToolTip)
const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return { isMounted };
};

export default useMounted;
