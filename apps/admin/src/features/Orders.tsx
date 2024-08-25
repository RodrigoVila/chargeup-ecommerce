import { twMerge } from 'tailwind-merge'
import { IoTrashOutline, IoCheckmarkSharp, IoBanOutline } from 'react-icons/io5'
import { BsPencil } from 'react-icons/bs'

import { OrderType } from '@packages/types'
import { AdminSection } from '~/components/AdminSection'
import { Action, Table } from '~/components/Table'
import ordersMock from '../mocks/orders.json'
import { ReactNode, useState } from 'react'
import { useToastNotifications } from '@packages/toast-notifications'

export type OrderData = {
  id: string
  name?: string | null
  phone?: string | null
  type: ReactNode
  address: string
  total: string
  completed: ReactNode | null
  status?: string
}

const columns = ['name', 'phone', 'type', 'address', 'total', 'completed']

const checkIcon = <IoCheckmarkSharp className='text-green-500' size={25} />

export const OrderList = () => {
  const [orders, setOrders] = useState<OrderType[]>(ordersMock)

  const { showInfoNotification, showSuccessNotification } = useToastNotifications()

  const data: OrderData[] = orders.map((order) => ({
    id: order.id,
    name: order.name,
    phone: order.phone,
    type: (
      <span
        className={twMerge(
          'rounded-full px-[6px] py-[2px] text-black',
          order.deliveryType === 'Delivery' ? 'bg-green-400' : 'bg-indigo-400',
        )}
      >
        {order.deliveryType}
      </span>
    ),
    address: order.address
      ? `${order.address.street} ${order.address.streetNumber}, ${order.address.city}`
      : 'N/A',
    total: `€ ${order.totalAmount}`,
    completed: order.status === 'completed' ? checkIcon : null,
    status: order.status,
  }))

  const handleMarkCompleted = (orderId: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? { ...order, status: order.status === 'completed' ? 'pending' : 'completed' }
          : order,
      ),
    )
  }

  const handleEdit = (orderId: string) => {
    showInfoNotification('Edit item will be avaiable soon')
  }

  const handleDelete = (orderId: string) => {
    showSuccessNotification('Order deleted successfully')
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId))
  }

  const handleActions = (actionType: Action['type'], orderId: string) => {
    const ACTIONS: Record<Action['type'], () => void> = {
      complete: () => handleMarkCompleted(orderId),
      edit: () => handleEdit(orderId),
      delete: () => handleDelete(orderId),
    }

    ACTIONS[actionType]()
  }

  const getActions = (order: OrderData): Action[] => {
    return [
      {
        label: order.status === 'completed' ? 'Mark as not completed' : 'Mark as completed',
        icon:
          order.status === 'completed' ? (
            <IoBanOutline className='text-red-500' size={20} />
          ) : (
            checkIcon
          ),
        type: 'complete',
      },
      {
        label: 'Edit order',
        icon: <BsPencil size={20} className='text-blue-500' />,
        type: 'edit',
      },
      {
        label: 'Delete order',
        icon: <IoTrashOutline size={20} className='text-red-500' />,
        type: 'delete',
      },
    ]
  }
  return (
    <AdminSection>
      <Table columns={columns} data={data} getActions={getActions} handleActions={handleActions} />
    </AdminSection>
  )
}
