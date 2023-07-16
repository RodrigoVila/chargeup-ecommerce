import AdminClientInvite from './AdminClientInvite';
import AdminCustomerList from './AdminCustomerList';
import AdminCustomerSearch from './AdminCustomerSearch';

const AdminCustomers = () => {
  return (
    <div className="content-center">
      <AdminCustomerSearch />
      <AdminCustomerList />
      <AdminClientInvite />
    </div>
  );
};

export default AdminCustomers;
