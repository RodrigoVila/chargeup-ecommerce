import NavItem from "@main/NavItem";

const NavItems = () => {
  return (
    <div className="z-20 flex flex-row items-center justify-center pl-2 text-center">
      <NavItem label="QUIENES SOMOS" href="about" />
      <NavItem label="PRODUCTOS" href="products" />
      <NavItem label="CAKES" href="cakes" />
      <NavItem label="KETO" href="keto" />
      <NavItem label="POR QUE ELEGIRNOS" href="whyus" />
      <NavItem label="CONTACTO" href="contact" />
    </div>
  );
};

export default NavItems;
