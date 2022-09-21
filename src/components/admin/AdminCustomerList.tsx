import React, { useEffect } from 'react'

import useReduxActions from '@hooks/useReduxActions'

const AdminCustomerList = () => {
  const { getUserList } = useReduxActions()

  const fetch = async () => {
    const { data } = await getUserList()
    console.log('!!!!!data', data)
  }
  useEffect(() => {
    fetch()
  }, [])
  return <div></div>
}

export default AdminCustomerList
