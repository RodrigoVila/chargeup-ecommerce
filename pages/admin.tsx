import React, {useState} from 'react'

/* JP ADDS - import -*/
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import AdminTabDetails from '@organisms/AdminTabDetails'
import AdminUserNav from '@atoms/AdminUserNav'
import AdminOrderDetails from '@molecules/AdminOrderDetails'
import AdminOrderList from '@molecules/AdminOrderList'
import AdminProductsListJP from '@organisms/AdminProductsListJP'
import AdminStatsJP from '@molecules/AdminStatsJP'


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