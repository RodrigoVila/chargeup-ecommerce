import { createBrowserRouter, Navigate } from 'react-router-dom'

import { Layout } from '~/components/Layout'
import { Dashboard } from '~/features/Dashboard'
import { OrderList } from '~/features/Orders'
import { UserList } from '~/features/Users'
import { Home } from './features/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/admin' replace />,
  },
  {
    path: '/admin',
    element: <Layout />,
    // loader: rootLoader,
    children: [
      {
        path: '',
        element: <Home />,
        // loader: dashboardLoader,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        // loader: dashboardLoader,
      },
      {
        path: 'orders',
        element: <OrderList />,
        // loader: dashboardLoader,
      },
      {
        path: 'users',
        element: <UserList />,
        // loader: dashboardLoader,
      },
    ],
  },
])
