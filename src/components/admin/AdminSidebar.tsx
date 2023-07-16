import NavItem from '@main/NavItem';
import { FaPagelines, FaUsers } from 'react-icons/fa';
import { IoMdAnalytics } from 'react-icons/io';
import { RiLogoutCircleLine } from 'react-icons/ri';

const iconClassName = 'pr-0 md:pr-3 text-3xl';

const analyticsIcon = <IoMdAnalytics className={iconClassName} />;
const productsIcon = <FaPagelines className={iconClassName} />;
const usersIcon = <FaUsers className={iconClassName} />;
const logOutIcon = <RiLogoutCircleLine className={iconClassName} />;

const AdminSidebar = ({ setSelected }) => {
  const logout = () => {};
  return (
    <div className="fixed bottom-0 z-10 w-full h-16 mt-12 bg-gray-800 shadow-xl md:relative md:h-screen md:w-48">
      <div className="content-center justify-between text-left md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 md:content-start">
        <ul className="flex flex-row px-1 py-0 text-center list-reset md:flex-col md:py-3 md:px-2 md:text-left">
          <NavItem
            title="Analytics"
            icon={analyticsIcon}
            borderColor="red"
            onClick={() => setSelected('Analytics')}
          />
          <NavItem
            title="Customers"
            icon={usersIcon}
            borderColor="green"
            onClick={() => setSelected('Customers')}
          />
          <NavItem
            title="Products"
            icon={productsIcon}
            borderColor="blue"
            onClick={() => setSelected('Products')}
          />
          <NavItem
            title="Transactions"
            icon={productsIcon}
            borderColor="pink"
            onClick={() => setSelected('Transactions')}
          />
          <NavItem title="Logout" icon={logOutIcon} borderColor="yellow" onClick={logout} />
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
