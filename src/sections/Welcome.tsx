import { useState, useEffect, FC } from 'react';

import useTypewriterEffect, { getTypewriter, useCursor } from '@hooks/useTypewriterEffect';

import { colors } from '@constants/colors';
import BackgroundOverlay from '@main/BackgroundOverlay';

const Welcome: FC = () => {
  const [state, dispatch, isTyping] = useTypewriterEffect();
  const cursor = useCursor(isTyping);

  useEffect(() => {
    getTypewriter(dispatch)
      .pauseFor(3000)
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
      className="absolute inset-0 bg-[url('/welcome.jpg')] z-0 bg-cover bg-center bg-no-repeat "
    >
      <BackgroundOverlay color={colors.overlay} />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full font-dinBold">
        <div className="px-2 pb-4 text-3xl font-semibold tracking-wide text-center text-white 2xs:text-4xl leading-0 md:px-4 md:text-6xl">
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
