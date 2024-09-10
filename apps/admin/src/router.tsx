import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '~/components/Layout'
import { Dashboard } from '~/features/Dashboard'
import { ProductList } from '~/features/Products'
import { OrderList } from '~/features/Orders'
import { UserList } from '~/features/Users'
import { Home } from './features/Home'

export const router = createBrowserRouter([
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
        path: 'products',
        element: <ProductList />,
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
