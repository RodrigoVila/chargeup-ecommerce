import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBarChart,
  AiOutlineLineChart,
} from 'react-icons/ai'
import { BsInboxes } from 'react-icons/bs'
import { MdTrendingUp } from 'react-icons/md'
import { IoPeopleOutline } from 'react-icons/io5'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import { AdminSection } from '~/components/AdminSection'
import dashboardMocks from '~/mocks/dashboard.json'

const { stats, recentOrders, topProducts, userActivity, salesData } = dashboardMocks

export const Dashboard = () => {
  return (
    <AdminSection>
      <div className='max-w grid grid-cols-1 gap-6 p-8 lg:grid-cols-2 xl:max-w-3xl'>
        {/* Overview Stats */}
        <div className='col-span-2 flex items-center gap-4 rounded-lg bg-slate-800 p-6 shadow-md lg:col-span-1'>
          <AiOutlineShoppingCart size={36} className='text-green-400' />
          <div>
            <h2 className='text-xl font-bold'>Total Sales</h2>
            <p className='text-3xl font-semibold'>{stats.totalSales}</p>
          </div>
        </div>
        <div className='col-span-2 flex items-center gap-4 rounded-lg bg-slate-800 p-6 shadow-md lg:col-span-1'>
          <BsInboxes size={36} className='text-blue-400' />
          <div>
            <h2 className='text-xl font-bold'>Orders</h2>
            <p className='text-3xl font-semibold'>{stats.orders}</p>
          </div>
        </div>
        <div className='col-span-2 flex items-center gap-4 rounded-lg bg-slate-800 p-6 shadow-md lg:col-span-1'>
          <IoPeopleOutline size={36} className='text-yellow-400' />
          <div>
            <h2 className='text-xl font-bold'>Users</h2>
            <p className='text-3xl font-semibold'>{stats.users}</p>
          </div>
        </div>
        <div className='col-span-2 flex items-center gap-4 rounded-lg bg-slate-800 p-6 shadow-md lg:col-span-1'>
          <AiOutlineBarChart size={36} className='text-purple-400' />
          <div>
            <h2 className='text-xl font-bold'>Products</h2>
            <p className='text-3xl font-semibold'>{stats.products}</p>
          </div>
        </div>

        {/* Recent Orders */}
        <div className='col-span-2 rounded-lg bg-slate-800 p-6 shadow-md'>
          <h2 className='mb-4 flex items-center gap-2 text-xl font-bold'>
            <MdTrendingUp size={24} className='text-green-400' /> Recent Orders
          </h2>
          <ul>
            {recentOrders.map((order) => (
              <li key={order.id} className='flex justify-between border-b border-slate-700 py-2'>
                <span>{order.product}</span>
                <span>{order.customer}</span>
                <span>{order.date}</span>
                <span>{order.amount}</span>
                <a href={`/admin/orders/${order.id}`} className='text-blue-400 hover:underline'>
                  Go to order
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sales Data Chart */}
        <div className='col-span-2 rounded-lg bg-slate-800 p-6 shadow-md'>
          <h2 className='mb-4 flex items-center gap-2 text-xl font-bold'>
            <AiOutlineLineChart size={24} className='text-purple-400' /> Sales Over Time
          </h2>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={salesData}>
              <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
              <XAxis dataKey='date' stroke='#ccc' />
              <YAxis stroke='#ccc' />
              <Tooltip />
              <Line type='monotone' dataKey='sales' stroke='#8884d8' strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Products */}
        <div className='col-span-2 rounded-lg bg-slate-800 p-6 shadow-md lg:col-span-1'>
          <h2 className='mb-4 flex items-center gap-2 text-xl font-bold'>
            <AiOutlineLineChart size={24} className='text-blue-400' /> Top Products
          </h2>
          <ul>
            {topProducts.map((product, index) => (
              <li key={index} className='flex justify-between border-b border-slate-700 py-2'>
                <span>{product.name}</span>
                <span>{product.sales} sales</span>
              </li>
            ))}
          </ul>
        </div>

        {/* User Activity */}
        <div className='col-span-2 rounded-lg bg-slate-800 p-6 shadow-md lg:col-span-1'>
          <h2 className='mb-4 flex items-center gap-2 text-xl font-bold'>
            <AiOutlineUser size={24} className='text-yellow-400' /> User Activity
          </h2>
          <ul>
            {userActivity.map((activity) => (
              <li key={activity.id} className='flex justify-between border-b border-slate-700 py-2'>
                <span>{activity.user}</span>
                <span>{activity.action}</span>
                <span>{activity.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AdminSection>
  )
}
