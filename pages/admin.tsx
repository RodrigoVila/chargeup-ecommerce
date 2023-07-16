import { useState } from 'react';

/* JP ADDS - import -*/
import AdminCustomers from '@admin/AdminCustomers';
import AdminDashboard from '@admin/AdminDashboard';
import AdminOrderList from '@admin/AdminOrderList';
import AdminProducts from '@admin/AdminProducts';
import AdminStats from '@admin/AdminStats';
import AdminUserNav from '@admin/AdminUserNav';
import AdminProductModal from '@admin/Modal/AdminProductModal';

const AdminScreen = () => {
  const [activePage, setActivePage] = useState('');

  return (
    <>
      <AdminProductModal />

      <AdminUserNav activePage={activePage} setActivePage={setActivePage} />
      {activePage === '' && <AdminDashboard />}
      {activePage === 'Dashboard' && <AdminDashboard />}
      {activePage === 'Ordenes' && <AdminOrderList />}
      {activePage === 'Clientes' && <AdminCustomers />}
      {activePage === 'Estadisticas' && <AdminStats />}
      {activePage === 'Productos' && <AdminProducts />}
    </>
  );
};

export default AdminScreen;
