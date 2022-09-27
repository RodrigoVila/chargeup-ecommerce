import { useState, useEffect, FC } from 'react';
import Typed from 'react-typed';

import BackgroundOverlay from '@main/BackgroundOverlay';
import TopBar from '@main/TopBar/TopBar';
import MobileTopBar from '@main/TopBar/MobileTopBar';
import { colors } from '@constants';

const TEXTS = ['SUGAR', 'GLUTEN', 'LACTOSE'];

const Welcome: FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div
      id="welcome"
      className="relative h-screen w-full bg-[url('/welcome.jpg')] bg-cover bg-center bg-no-repeat "
    >
      <TopBar />
      <MobileTopBar />
      <BackgroundOverlay color={colors.overlay} />
      <div className="relative z-10 flex h-3/4 w-full flex-col items-center justify-center font-dinBold">
        <div className="leading-0 pb-4 text-center text-5xl font-semibold tracking-wide text-white md:px-4 md:text-6xl">
          TASTE THE LOVE AND FEEL RECHARGED
        </div>
        <div className="leading-0 px-2 text-center text-xl font-semibold text-white md:text-3xl">
          OUR MISSION IS TO MAKE HAPPY THOSE WHO CANNOT EAT

        </div>
      </div>
    </div>
  );
};

export default Welcome;
