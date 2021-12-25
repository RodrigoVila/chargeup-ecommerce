import React, {useState, Fragment} from 'react'

/* JP ADDS - import -*/
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import AdminProductsListJP from '@admin/AdminProductsListJP'
import AdminStatsJP from '@admin/AdminStatsJP'
import AdminTabDetails from '@admin/AdminTabDetails'
import AdminUserNav from '@admin/AdminUserNav'
import AdminOrderDetails from '@admin/AdminOrderDetails'
import AdminOrderList from '@admin/AdminOrderList'
import AdminDashboard from '@admin/AdminDashboard'
import AdminCustomers from '@admin/AdminCustomers'

function AdminDisplayLoader() {

  const [ cpstate, setPage ] = useState(''); 
  const [ mkactive, setMkactive] = useState('');
  return (   
  <div>
    <AdminUserNav setPage={ cpstate => setPage(cpstate) } activep={cpstate} setMkactive={ mkactive => setMkactive(mkactive)}/>
    {cpstate === '' && <AdminDashboard />}
    {cpstate === "Dashboard" && <AdminDashboard />}
    {cpstate === "Ordenes" && <AdminOrderList />}
    {cpstate === "Clientes" && <AdminCustomers />}
    {cpstate === "Estadisticas" && <AdminStatsJP />}
    {cpstate === "Productos" && <AdminProductsListJP />}

    
    
  </div>
  );
      
  
};

export default AdminDisplayLoader;