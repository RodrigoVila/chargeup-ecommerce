import { RiCloseFill } from "react-icons/ri";

interface Props {
  isOpen: boolean;
  close: () => void;
}

const Drawer = ({ isOpen, close }: Props) => {
  console.log("isopen", isOpen);
  return (
    <div
      className={`z-30 ${
        isOpen ? "left-0" : "left-outofScreen"
      } absolute top-0  flex flex-col items-center h-screen w-screen bg-red-300 justify-center`}
    >
      <button onClick={close} className="absolute top-0 left-0 m-2 ">
        <RiCloseFill color="black" size={40} />
      </button>
      <a
        className="my-1 text-xl font-semibold"
        onClick={(e) => e.stopPropagation()}
        href="#"
      >
        Home
      </a>
      <a
        className="my-1 text-xl font-semibold"
        href="#"
        onClick={(e) => e.stopPropagation()}
      >
        About
      </a>
      <a
        className="my-1 text-xl font-semibold"
        href="#"
        onClick={(e) => e.stopPropagation()}
      >
        Contact
      </a>
      <a
        className="my-1 text-xl font-semibold"
        href="#"
        onClick={(e) => e.stopPropagation()}
      >
        Social
      </a>
    </div>
  );
};

export default Drawer;
