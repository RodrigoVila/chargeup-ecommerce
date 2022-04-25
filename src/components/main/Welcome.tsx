import TopBar from '@main/TopBar'
import MobileTopBar from '@main/TopBar/MobileTopBar'

const Welcome = () => {
  return (
    <div className="relative h-screen w-full bg-[url('/glutenFree.png')] bg-cover bg-center bg-no-repeat ">
      <TopBar />
      <MobileTopBar />

      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center">
        <div className="leading-0 mt-2 pb-4 text-center text-5xl font-semibold tracking-wide text-white md:px-4 md:text-6xl">
          TASTE THE LOVE AND FEEL RECHARGED
        </div>
        <div className="leading-0 px-2 text-center text-xl font-semibold text-white md:text-3xl">
          OUR MISSION IS TO MAKE HAPPY THOSE WHO CANNOT EAT SUGAR
        </div>
      </div>
    </div>
  )
}

export default Welcome
