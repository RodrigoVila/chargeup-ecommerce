import React, { useEffect } from "react";

import { getUserList } from "@redux/actionCreators/users";
import { useAppDispatch } from "@hooks";

const AdminCustomerList = () => {
  const dispatch = useAppDispatch();

  const fetch = async () => {
    const { data } = await dispatch(getUserList());
    console.log("!!!!!data", data);
  };
  useEffect(() => {
    fetch();
  }, []);
  return <div></div>;
};

export default AdminCustomerList;
