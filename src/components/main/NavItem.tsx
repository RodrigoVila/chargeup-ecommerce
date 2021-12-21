interface Props {
  title: string;
  icon: any;
  borderColor: string;
  onClick: () => void;
}

const NavItem = ({ title, icon, borderColor, onClick }: Props) => {
  return (
    <li className="mr-16 list-none cursor-pointer " onClick={onClick}>
      <a
        className={`block py-1 pl-0 text-white no-underline align-middle md:py-3 md:pl-1 hover:text-white hover:border-${borderColor}-500 transition duration-300 ease-in-out`}
      >
        {icon}
        <span className="block pb-1 text-xs font-semibold text-purple3 md:pb-0 md:text-base lg:text-3xl md:inline-block">
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
