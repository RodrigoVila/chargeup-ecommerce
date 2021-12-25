import React, { useState } from "react";
import AdminClientInvite from './AdminClientInvite'
import AdminCustomerSearch from "./AdminCustomerSearch";

const AdminCustomers = () => {
  return <div className="content-center">
    <AdminCustomerSearch />
    <AdminClientInvite />

  </div>;
};

export default AdminCustomers;
