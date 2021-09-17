import Image from "next/image";

const Welcome = () => {
  return (
    <>
      <div className="absolute inset-0 z-10 bg-tranlucentBlack" />
      <div className="flex w-full h-full ">
        <div className="z-20 flex-col mt-12">
          <div className="mb-8 text-5xl font-semibold tracking-wide text-center text-white ">
            TASTE THE LOVE AND FEEL RECHARGED
          </div>
          <div className="px-2 text-xl font-semibold text-center text-white ">
            OUR MISSION IS TO MAKE HAPPY THOSE WHO CANNOT EAT SUGAR
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
