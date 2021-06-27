import React from "react";
import NavItem from "@atoms/NavItem";
import { FaUsers, FaPagelines } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";

const iconClass = "mx-auto text-xl text-white";

const productsIcon = <FaPagelines className={iconClass} />;
const usersIcon = <FaUsers className={iconClass} />;
const logOutIcon = <RiLogoutCircleLine className={iconClass} />;

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 flex-col w-20 h-full text-center bg-gray-500">
      <NavItem title="Clientes" icon={usersIcon} goTo={() => {}} />
      <NavItem title="Productos" icon={productsIcon} goTo={() => {}} />
      <NavItem title="Logout" icon={logOutIcon} goTo={() => {}} />
    </div>
  );
};

export default Sidebar;
