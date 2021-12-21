import BackgroundOverlay from "@main/BackgroundOverlay";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <BackgroundOverlay color="Black" />
      <div className="mb-8 text-5xl font-semibold tracking-wide text-center text-white md:px-4 md:text-6xl ">
        TASTE THE LOVE AND FEEL RECHARGED
      </div>
      <div className="px-2 text-xl font-semibold text-center text-white md:text-3xl ">
        OUR MISSION IS TO MAKE HAPPY THOSE WHO CANNOT EAT SUGAR
      </div>
    </div>
  );
};

export default Welcome;
