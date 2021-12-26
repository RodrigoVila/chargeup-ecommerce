import React, {useState, Fragment} from 'react'

/* JP ADDS - import -*/
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import AdminProducts from '@admin/AdminProducts'
import AdminStats from '@admin/AdminStats'
import AdminTabDetails from '@admin/AdminTabDetails'
import AdminUserNav from '@admin/AdminUserNav'
import AdminOrderDetails from '@admin/AdminOrderDetails'
import AdminOrderList from '@admin/AdminOrderList'
import AdminDashboard from '@admin/AdminDashboard'
import AdminCustomers from '@admin/AdminCustomers'

const AdminDisplayLoader = () => {

  const [ activePage, setActivePage ] = useState(''); 
  return (   
  <div>
    <AdminUserNav setActivePage={setActivePage} activePage={activePage} />
    {activePage === '' && <AdminDashboard />}
    {activePage === "Dashboard" && <AdminDashboard />}
    {activePage === "Ordenes" && <AdminOrderList />}
    {activePage === "Clientes" && <AdminCustomers />}
    {activePage === "Estadisticas" && <AdminStats />}
    {activePage === "Productos" && <AdminProducts />}
  </div>
  );
      
  
};

export default AdminDisplayLoader;