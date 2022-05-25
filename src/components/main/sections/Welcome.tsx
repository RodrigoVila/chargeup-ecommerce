import { useState, useEffect, FC } from 'react'

import BackgroundOverlay from '@main/BackgroundOverlay'
import TopBar from '@main/TopBar'
import MobileTopBar from '@main/TopBar/MobileTopBar'
import { colors } from '@utils/constants'


const Welcome: FC = () => {
  const [word, setWord] = useState('SUGAR')

  // useEffect(() => {
  //   let timer
  //   const words = ['SUGAR', 'GLUTEN', 'GAROMPA']
  //   let index = 0

  //   timer = setInterval(function () {
  //     setWord(words[index++ % words.length])
  //   }, 3000)
  //   return () => clearTimeout(timer)
  // }, [])

 return (
    <div className="relative h-screen w-full bg-[url('/welcome.jpg')] bg-cover bg-center bg-no-repeat ">
      <TopBar />
      <MobileTopBar />
      <BackgroundOverlay color={colors.overlay} />
      <div className="relative z-10 flex h-1/2 w-full flex-col items-center justify-center font-dinBold">
        <div className="leading-0 mt-2 pb-4 text-center text-5xl font-semibold tracking-wide text-white md:px-4 md:text-6xl">
          TASTE THE LOVE AND FEEL RECHARGED
        </div>
        <div className="leading-0 px-2 text-center text-xl font-semibold text-white md:text-3xl">
          OUR MISSION IS TO MAKE HAPPY THOSE WHO CANNOT EAT
          <span className="text-center font-bold"> {word}</span>
        </div>
      </div>
    </div>
  )
}

export default Welcome
