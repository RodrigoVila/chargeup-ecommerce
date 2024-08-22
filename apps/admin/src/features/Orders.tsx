import { twMerge } from 'tailwind-merge'
import { IoCheckmark, IoTrashOutline } from 'react-icons/io5'
import { BsPencil } from 'react-icons/bs'

import { OrderType } from '@packages/types'
import { AdminSection } from '~/components/AdminSection'
import { Action, Table } from '~/components/Table'
import ordersMock from '../mocks/orders.json'

const columns = ['Name', 'Phone', 'Type', 'Address', 'Total']

const orders: OrderType[] = ordersMock // The mocks we just created

const data = orders.map((order) => ({
  Name: order.name,
  Phone: order.phone,
  Type: (
    <span
      className={twMerge(
        'rounded-full px-[6px] py-[2px] text-black',
        order.deliveryType === 'Delivery' ? 'bg-green-400' : 'bg-indigo-400',
      )}
    >
      {order.deliveryType}
    </span>
  ),
  Address: order.address
    ? `${order.address.street} ${order.address.streetNumber}, ${order.address.city}`
    : 'N/A',
  Total: `€ ${order.totalAmount}`,
}))

const actions: Action[] = [
  {
    label: 'Mark as completed',
    icon: <IoCheckmark />,
    onClick: () => {},
  },
  {
    label: 'Edit order',
    icon: <BsPencil />,
    onClick: () => {},
  },
  {
    label: 'Delete order',
    icon: <IoTrashOutline className='text-red-500' />,
    onClick: () => {},
  },
]
export const OrderList = () => {
  return (
    <AdminSection>
      <Table columns={columns} data={data} actions={actions} />
    </AdminSection>
  )
}
