interface Props {
  title: string;
  icon: any;
  goTo: () => void;
  isClicked?: boolean;
}

const NavItem = ({ title, icon, goTo, isClicked = false }: Props) => {
  return (
    <div
      className={`${
        isClicked && "bg-pink-300"
      } hover:bg-pink-400 py-4 text-xs px-4 text-white`}
      onClick={() => goTo()}
    >
      {icon}
      {title}
    </div>
  );
};

export default NavItem;
