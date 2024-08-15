'use client'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AdminCustomers from '~components/AdminCustomers'
import AdminDashboard from '~components/AdminDashboard'
import AdminOrderList from '~components/AdminOrderList'
import AdminProducts from '~components/AdminProducts'
import AdminStats from '~components/AdminStats'
import AdminUserNav from '~components/AdminUserNav'
import AdminProductModal from '~components/AdminProductModal'

type ActivePage = 'Dashboard' | 'Orders' | 'Customers' | 'Products' | 'Estadistics'

const AdminScreen = () => {
  const [activePage, setActivePage] = useState<ActivePage>('Dashboard')

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <AdminProductModal />

      <AdminUserNav activePage={activePage} setActivePage={setActivePage} />

      {activePage === 'Dashboard' && <AdminDashboard />}
      {activePage === 'Orders' && <AdminOrderList />}
      {activePage === 'Customers' && <AdminCustomers />}
      {activePage === 'Products' && <AdminProducts />}
      {activePage === 'Estadistics' && <AdminStats />}
    </QueryClientProvider>
  )
}

export default AdminScreen
