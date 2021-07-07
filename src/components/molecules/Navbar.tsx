import NavItem from "@atoms/NavItem";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-around w-1/2 ">
      <NavItem title="Productos" goTo={() => {}} />
      <NavItem title="Nosotros" goTo={() => {}} />
      <NavItem title="Recetas" goTo={() => {}} />
      <NavItem title="Posts" goTo={() => {}} />
    </div>
  );
};

export default Navbar;
