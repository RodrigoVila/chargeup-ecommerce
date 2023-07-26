import AdminClientInvite from '~components/AdminClientInvite'
import AdminCustomerList from '~components/AdminCustomerList'
import AdminCustomerSearch from '~components/AdminCustomerSearch'

const AdminCustomers = () => {
  return (
    <div className='content-center'>
      <AdminCustomerSearch />
      <AdminCustomerList />
      <AdminClientInvite />
    </div>
  )
}

export default AdminCustomers
