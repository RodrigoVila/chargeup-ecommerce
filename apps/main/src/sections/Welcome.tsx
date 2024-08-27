import { useEffect } from 'react'

import { useTypewriter } from '~hooks'

import { Section } from './components'

export const WelcomeSection = () => {
  const { useTypewriterEffect, getTypewriter, useCursor } = useTypewriter()
  const [state, dispatch, isTyping] = useTypewriterEffect()
  const cursor = useCursor(isTyping)

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
      .trigger()
  }, [dispatch])

  return (
    <Section id='welcome' bodyClassName='absolute inset-0 mx-auto'>
      <div className='font-dinBold flex h-full w-full flex-col items-center justify-center gap-4'>
        <h1 className='leading-0 2xs:text-4xl text-center text-3xl font-semibold tracking-wide text-white md:px-4 md:text-6xl'>
          TASTE THE LOVE AND FEEL RECHARGED
        </h1>
        <div className='text-md leading-0 items-center justify-center text-center font-semibold text-white md:px-20 md:text-3xl lg:px-56 xl:flex-row xl:px-0'>
          <h3 className='mr-2'>OUR MISSION IS TO MAKE HAPPY THOSE WHO CANNOT EAT</h3>
          <div className='tems-center flex justify-center'>
            {state}
            <span style={{ visibility: cursor ? 'visible' : 'hidden' }}>|</span>
          </div>
        </div>
      </div>
    </Section>
  )
}
