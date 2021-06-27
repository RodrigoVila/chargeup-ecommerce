import NavItem from "@atoms/NavItem";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-around w-full">
      <NavItem title="Link 1" goTo="http://Link1" />
      <NavItem title="Link 2" goTo="http://Link2" />
      <NavItem title="Link 3" goTo="http://Link3" />
      <NavItem title="Link 4" goTo="http://Link4" />
      <NavItem title="Link 5" goTo="http://Link5" />
      <NavItem title="Link 6" goTo="http://Link5" />
    </div>
  );
};

export default Navbar;
