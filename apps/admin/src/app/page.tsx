'use client'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AdminCustomers from '~components/Customers'
import AdminDashboard from '~components/Dashboard'
import AdminOrderList from '~components/OrderList'
import AdminProducts from '~components/Products'
import AdminStats from '~components/Stats'
import { Navbar } from '~components/navbar/Navbar'
// import AdminProductModal from '~components/AdminProductModal'

export type ActivePage = 'Dashboard' | 'Orders' | 'Customers' | 'Products' | 'Estadistics'

const AdminScreen = () => {
  const [activePage, setActivePage] = useState<ActivePage>('Dashboard')

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AdminProductModal /> */}

      <Navbar />

      {activePage === 'Dashboard' && <AdminDashboard />}
      {activePage === 'Orders' && <AdminOrderList />}
      {activePage === 'Customers' && <AdminCustomers />}
      {activePage === 'Products' && <AdminProducts />}
      {activePage === 'Estadistics' && <AdminStats />}
    </QueryClientProvider>
  )
}

export default AdminScreen
