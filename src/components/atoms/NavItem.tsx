interface Props {
  title: string;
  icon: any;
  borderColor: string;
  onClick: () => void;
}

const NavItem = ({ title, icon, borderColor, onClick }: Props) => {
  return (
    <li className="flex-1 mr-3" onClick={onClick}>
      <a
        className={`block py-1 pl-0 text-white no-underline align-middle border-b-2 border-gray-800 md:py-3 md:pl-1 hover:text-white hover:border-${borderColor}-500 transition duration-300 ease-in-out`}
      >
        {icon}
        <span className="block pb-1 text-xs text-gray-600 md:pb-0 md:text-base md:text-gray-400 md:inline-block">
          {title}
        </span>
      </a>
    </li>
    // <div
    //   className="flex px-8 py-4 text-white cursor-pointer text-l hover:bg-pink-400"
    //   onClick={goTo}
    // >
    //   {icon}
    //   {title}
    // </div>
  );
};

export default NavItem;
