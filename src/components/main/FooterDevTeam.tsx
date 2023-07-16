import { AiFillHeart } from 'react-icons/ai';

const FooterDevTeam = () => {
  return (
    <div className="flex flex-wrap items-center justify-center pb-2 text-sm text-center text-gray-300">
      Made with <AiFillHeart className="mx-1" color="red" size={18} />
      <a
        target="_blank"
        rel="noreferrer"
        className="mx-1 text-orange-400"
        href="https://www.linkedin.com/in/victoriacabello/"
      >
        Veke
      </a>
      (Design) &
      <a
        target="_blank"
        rel="noreferrer"
        className="mx-1 text-orange-400"
        href="https://www.linkedin.com/in/rsvila/"
      >
        Rodri
      </a>
      (Development).
    </div>
  );
};

export default FooterDevTeam;
