import NavItem from "@atoms/NavItem";

const Navbar = () => {
  return (
    <div className="z-20 flex flex-row items-center justify-center">
      <NavItem title="CAKES" goTo={() => {}} />
      <NavItem title="SNACKS" goTo={() => {}} />
      <NavItem title="COMO COMPRAR" goTo={() => {}} />
      <NavItem title="BLOG" goTo={() => {}} />
      <NavItem title="ABOUT US" goTo={() => {}} />
    </div>
  );
};

export default Navbar;
