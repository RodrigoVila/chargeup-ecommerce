import React, { useState } from "react";

/* JP ADDS - import -*/
import AdminProducts from '@admin/AdminProducts'
import AdminStats from '@admin/AdminStats'
import AdminTabDetails from '@admin/AdminTabDetails'
import AdminUserNav from '@admin/AdminUserNav'
import AdminOrderDetails from '@admin/AdminOrderDetails'
import AdminOrderList from '@admin/AdminOrderList'
import AdminDashboard from '@admin/AdminDashboard'
import AdminCustomers from '@admin/AdminCustomers'

const AdminScreen = () => {
  const [ activePage, setActivePage ] = useState(''); 

  return (   
  <>
    <AdminUserNav activePage={activePage} setActivePage={setActivePage} />
    {activePage === '' && <AdminDashboard />}
    {activePage === "Dashboard" && <AdminDashboard />}
    {activePage === "Ordenes" && <AdminOrderList />}
    {activePage === "Clientes" && <AdminCustomers />}
    {activePage === "Estadisticas" && <AdminStats />}
    {activePage === "Productos" && <AdminProducts />}
  </>
  );
}

export default AdminScreen;
