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
    .pauseFor(1000)
      .type('GLUTEN')
      .pauseFor(2000)
      .deleteAll()
      .type('SUGAR')
      .pauseFor(2000)
      .deleteAll()
      .type('LACTOSE')
      .pauseFor(2000)
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
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-3/4 font-dinBold">
        <div className="pb-4 text-3xl font-semibold tracking-wide text-center text-white 2xs:text-4xl 2xl:px-2 leading-0 md:px-4 md:text-6xl">
          TASTE THE LOVE AND FEEL RECHARGED
        </div>
        <div className="flex flex-col items-center justify-center px-8 font-semibold text-center text-white text-md leading-0 xl:flex-row xl:px-0 md:px-20 lg:px-56 md:text-3xl">
          <div className="mr-2">OUR MISSION IS TO MAKE HAPPY THOSE WHO CANNOT EAT</div>
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
