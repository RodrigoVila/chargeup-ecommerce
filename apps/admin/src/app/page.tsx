import { useState } from 'react'

import AdminCustomers from '~components/AdminCustomers'
import AdminDashboard from '~components/AdminDashboard'
import AdminOrderList from '~components/AdminOrderList'
import AdminProducts from '~components/AdminProducts'
import AdminStats from '~components/AdminStats'
import AdminUserNav from '~components/AdminUserNav'
import AdminProductModal from '~components/AdminProductModal'

const AdminScreen = () => {
  const [activePage, setActivePage] = useState('')

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
  )
}

export default AdminScreen
