import React, { useEffect } from 'react';

import useAppActions from '@hooks/useAppActions';

const AdminCustomerList = () => {
  const { getUserList } = useAppActions();

  const fetch = async () => {
    const { data } = await getUserList();
  };
  useEffect(() => {
    fetch();
  }, []);
  return <div></div>;
};

export default AdminCustomerList;
