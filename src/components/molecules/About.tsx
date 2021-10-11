import BackgroundOverlay from "@atoms/BackgroundOverlay";

const AboutSection = () => {
  return (
    <div className="relative flex flex-col justify-center w-full h-screen m-auto bg-fixed bg-center bg-no-repeat bg-cover bg-driedfruits ">
      <BackgroundOverlay color="Black" />
      <div className="z-20 w-full pt-6 text-5xl text-center text-white filter drop-shadow-sm ">
        Utilizamos
      </div>
      <div className="z-20 w-full text-5xl leading-none text-center text-white">
        los <span className="z-20 text-6xl">mejores</span> productos.
      </div>
    </div>
  );
};

export default AboutSection;
