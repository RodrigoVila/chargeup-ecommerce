import { useState, useEffect, FC } from 'react';

import useTypewriterEffect, { getTypewriter, useCursor } from '@hooks/useTypewriterEffect';

import { colors } from '@constants';
import BackgroundOverlay from '@main/BackgroundOverlay';
import TopBar from '@main/TopBar/TopBar';
import MobileTopBar from '@main/TopBar/MobileTopBar';

const Welcome: FC = () => {
  const [state, dispatch, isTyping] = useTypewriterEffect();
  const cursor = useCursor(isTyping);

  useEffect(() => {
    getTypewriter(dispatch)
      .type('GLUTEN')
      .pauseFor(5000)
      .deleteAll()
      .type('SUGAR')
      .pauseFor(5000)
      .deleteAll()
      .type('LACTOSE')
      .pauseFor(5000)
      .deleteAll()
      .setLoop(true)
      .trigger();
  }, [dispatch]);

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
        <div className="leading-0 flex items-center justify-center px-2 text-center text-xl font-semibold text-white md:text-3xl">
          <div className='mr-2'>OUR MISSION IS TO MAKE HAPPY THOSE WHO CANNOT EAT</div>
          <div>
            {state}
            <span style={{ visibility: cursor ? 'visible' : 'hidden' }}>|</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
