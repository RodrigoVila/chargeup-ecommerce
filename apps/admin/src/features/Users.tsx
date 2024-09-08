import { IoTrashOutline } from 'react-icons/io5'
import { BsPencil } from 'react-icons/bs'

import { Action } from '@packages/types'
import { AdminSection } from '~/components/AdminSection'
import { Table } from '~/components/Table'
import { useToastNotifications } from '@packages/toast-notifications'

type UserData = {
  id: string
  name: string
  email: string
  phone?: string
  address: string
  created: string
}

const columns = ['id', 'name', 'email', 'phone', 'address', 'created']

const data: UserData[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'jdoe@gmail.com',
    phone: '665 443 434',
    address: 'C. Joan Miro 12, 2-2, 08830',
    created: '11/08/2021',
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'jndoe@gmail.com',
    phone: '665 443 432',
    address: 'C. Joan Miro 12, 2-2, 08830',
    created: '11/08/2001',
  },
]

const actions: Action[] = [
  {
    label: 'Edit User Details',
    icon: <BsPencil />,
    onClick: () => {},
  },
  {
    label: 'Delete User',
    icon: <IoTrashOutline className='text-red-500' />,
    onClick: () => {},
  },
]
export const UserList = () => {
  const { showInfoNotification } = useToastNotifications()

  const handleActions = (actionType: string, rowId: string) => {
    if (actionType === 'edit') {
      showInfoNotification('Edit item will be avaiable soon')
    } else if (actionType === 'delete') {
      showInfoNotification('Delete item will be avaiable soon')
    }
  }

  return (
    <AdminSection>
      <Table<UserData>
        columns={columns}
        data={data}
        actions={actions}
        handleActions={handleActions}
      />
    </AdminSection>
  )
}
