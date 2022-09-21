import React, { useEffect } from 'react';

import useActions from '@hooks/useActions';

const AdminCustomerList = () => {
  const { getUserList } = useActions();

  const fetch = async () => {
    const { data } = await getUserList();
    console.log('!!!!!data', data);
  };
  useEffect(() => {
    fetch();
  }, []);
  return <div></div>;
};

export default AdminCustomerList;
