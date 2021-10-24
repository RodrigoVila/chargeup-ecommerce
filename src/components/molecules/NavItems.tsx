import NavItem from "@atoms/NavItem";

const NavItems = () => {
  return (
    <div className="z-20 flex flex-row items-center justify-center pl-2 text-center">
      <NavItem title="ABOUT US" goTo={() => {}} />
      <NavItem title="PRODUCTOS" goTo={() => {}} />
      <NavItem title="ENTREGAS/DELIVERY" goTo={() => {}} />
      <NavItem title="BLOG" goTo={() => {}} />
      <NavItem title="FAQ" goTo={() => {}} />
      <NavItem title="CONTACT US" goTo={() => {}} />
    </div>
  );
};

export default NavItems;
