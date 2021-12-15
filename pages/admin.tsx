import React, {useState} from 'react'

/* JP ADDS - import -*/
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import AdminTabDetails from '@organisms/AdminTabDetails'
import AdminUserNav from '@atoms/AdminUserNav'
import AdminOrderDetails from '@molecules/AdminOrderDetails'
import AdminOrderList from '@molecules/AdminOrderList'

function DisplayLoader() {

  const [ cpstate, setPage ] = useState('Dashboard'); 

  return (   
  <div>
    <AdminUserNav  setPage={
      cpstate => setPage(cpstate)
      }
       page='true'
    />
    {cpstate === "Dashboard" && <AdminTabDetails />}
    {cpstate === "Ordenes" && <AdminOrderList />}
    {cpstate === "Clientes" && <AdminTabDetails />}
    {cpstate === "Estadisticas" && <AdminTabDetails />}
    
    
    
  </div>
  );
      
  
};

export default DisplayLoader;