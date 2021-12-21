import React, {useState} from 'react'

import AdminTabDetails from '@admin/AdminTabDetails'
import AdminUserNav from '@admin/AdminUserNav'
import AdminOrderDetails from '@admin/AdminOrderDetails'
import AdminOrderList from '@admin/AdminOrderList'

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