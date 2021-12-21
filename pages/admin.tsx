import React, {useState} from 'react'

/* JP ADDS - import -*/
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import AdminProductsListJP from '@admin/AdminProductsListJP'
import AdminStatsJP from '@admin/AdminStatsJP'
import AdminTabDetails from '@admin/AdminTabDetails'
import AdminUserNav from '@admin/AdminUserNav'
import AdminOrderDetails from '@admin/AdminOrderDetails'
import AdminOrderList from '@admin/AdminOrderList'


function AdminDisplayLoader() {

  const [ cpstate, setPage ] = useState(''); 
  const [ mkactive, setMkactive] = useState('');

  return (   
  <div>
    <AdminUserNav setPage={ cpstate => setPage(cpstate) } activep={cpstate} setMkactive={ mkactive => setMkactive(mkactive)}/>
    {cpstate === "Dashboard" && <AdminTabDetails />}
    {cpstate === "Ordenes" && <AdminOrderList />}
    {cpstate === "Clientes" && <AdminTabDetails />}
    {cpstate === "Estadisticas" && <AdminStatsJP />}
    {cpstate === "Productos" && <AdminProductsListJP />}

    
    
  </div>
  );
      
  
};

export default AdminDisplayLoader;