'use client'
import { twMerge } from 'tailwind-merge'
import { IoCheckmark, IoTrashOutline } from 'react-icons/io5'
import { BsPencil } from 'react-icons/bs'

import { OrderType } from '@packages/types'
import { AdminSection } from '~/components/AdminSection'
import { Action, Table } from '~/components/Table'

const columns = ['Name', 'Phone', 'Type', 'Address', 'Total']

const orders: OrderType[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'jdoe@gmail.com',
    phone: '665 443 434',
    deliveryType: 'Delivery',
    address: {
      street: 'C. Joan Miro',
      streetNumber: '12',
      extras: '2-4',
      postCode: '08831',
      city: 'Viladecans',
    },
    created: new Date(),
    totalAmount: '100',
    items: [
      {
        id: '1',
        quantity: 2,
        title: 'Pepe item',
        total: 2,
        selectedSize: { label: 'Pepe 1', price: 12 },
      },
    ],
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'jndoe@gmail.com',
    phone: '665 443 432',
    deliveryType: 'Pick UP',
    created: new Date(),
    totalAmount: '100',
    items: [
      {
        id: '1',
        quantity: 2,
        title: 'Pepe item',
        total: 2,
        selectedSize: { label: 'Pepe 1', price: 12 },
      },
    ],
  },
]

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
function OrderList() {
  return (
    <AdminSection>
      <Table columns={columns} data={data} actions={actions} />
    </AdminSection>
  )
}

export default OrderList
