import BackgroundOverlay from "components/main/BackgroundOverlay";

const Welcome = () => {
  return (
    <div className="absolute top-0 flex items-center w-full h-full ">
      <BackgroundOverlay color="Black" />
      <div className="z-20 flex-col w-full mt-6">
        <div className="mb-8 text-5xl font-semibold tracking-wide text-center text-white md:px-4 md:text-6xl ">
          TASTE THE LOVE AND FEEL RECHARGED
        </div>
        <div className="px-2 text-xl font-semibold text-center text-white md:text-3xl ">
          OUR MISSION IS TO MAKE HAPPY THOSE WHO CANNOT EAT SUGAR
        </div>
      </div>
    </div>
  );
};

export default Welcome;
