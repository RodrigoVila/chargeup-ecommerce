import ClientInvite from '~components/ClientInvite'
import CustomerList from '~components/CustomerList'
import CustomerSearch from '~components/CustomerSearch'

const Customers = () => {
  return (
    <div className='content-center'>
      <CustomerSearch />
      <CustomerList />
      <ClientInvite />
    </div>
  )
}

export default Customers
